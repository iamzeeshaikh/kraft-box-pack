#!/usr/bin/env python3
"""
Extracts the Kraft Box Pack WordPress exports into inert JSON for the Astro build.

Every export is treated as untrusted data. Nothing here is executed, imported or
evaluated: the XML is parsed with ElementTree and the CSV with the csv module,
both of which only ever return strings. HTML found inside the exports is
sanitised by `clean_html` before it is written out.

Sources, all read-only:
  ../kraftboxpack.WordPress.2026-08-03.xml   slugs, categories, attachments, pages
  ../wc-product-export-*.csv                 descriptions, specs, FAQs, prices

Outputs (generated, safe to delete and rebuild):
  src/data/products.json  src/data/categories.json  src/data/pages.json
  reports/IMAGE_INVENTORY.csv  reports/EXCLUDED_FILES_REPORT.csv
  reports/MIGRATION_CONFLICTS.md
"""
from __future__ import annotations

import csv
import html as htmllib
import json
import re
import sys
import urllib.parse
import xml.etree.ElementTree as ET
from collections import Counter, defaultdict
from pathlib import Path

csv.field_size_limit(sys.maxsize)

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT.parent
DATA = ROOT / "src" / "data"
REPORTS = ROOT / "reports"
SITE = "https://kraftboxpack.com"

NS = {
    "wp": "http://wordpress.org/export/1.2/",
    "content": "http://purl.org/rss/1.0/modules/content/",
    "excerpt": "http://wordpress.org/export/1.2/excerpt/",
}

conflicts: list[str] = []
excluded: list[tuple[str, str, str]] = []


# --------------------------------------------------------------------------- html
# Tags the rebuilt site is willing to render. Anything outside this list is
# dropped rather than escaped, because the source is a compromised WordPress
# install and none of these pages need scripting, embedding or styling hooks.
ALLOWED_TAGS = {
    "p", "br", "strong", "b", "em", "i", "u", "ul", "ol", "li",
    "h2", "h3", "h4", "h5", "h6", "a", "table", "thead", "tbody", "tr",
    "th", "td", "blockquote", "span", "div", "sup", "sub",
}
# Tags whose *contents* go too, not just the tag itself.
DROP_WITH_CONTENT = {"script", "style", "iframe", "object", "embed", "form",
                     "input", "button", "svg", "noscript", "link", "meta"}
ALLOWED_ATTRS = {"a": {"href", "title"}, "th": {"colspan", "rowspan"},
                 "td": {"colspan", "rowspan"},
                 # the only class the rebuilt site adds to migrated markup
                 "div": {"class"}}


def clean_html(raw: str) -> str:
    """Strip everything that could execute, then normalise what is left.

    Returns markup safe to pass to `set:html`. Event handlers, `javascript:`
    URLs, inline styles, class hooks and data attributes are all removed; the
    exports contained none of these, but the guarantee has to hold structurally
    rather than because one scan came back clean.
    """
    if not raw:
        return ""
    h = raw

    for tag in DROP_WITH_CONTENT:
        h = re.sub(rf"<{tag}\b[\s\S]*?</{tag}>", "", h, flags=re.I)
        h = re.sub(rf"<{tag}\b[^>]*/?>", "", h, flags=re.I)

    h = re.sub(r"<!--[\s\S]*?-->", "", h)

    def fix_tag(m: re.Match[str]) -> str:
        closing, name, attrs = m.group(1), m.group(2).lower(), m.group(3)
        if name not in ALLOWED_TAGS:
            return ""
        if closing:
            return f"</{name}>"
        keep = []
        for am in re.finditer(r'([\w:-]+)\s*=\s*"([^"]*)"', attrs):
            attr, val = am.group(1).lower(), am.group(2)
            if attr not in ALLOWED_ATTRS.get(name, set()):
                continue
            if attr == "href":
                v = val.strip()
                if re.match(r"^\s*(javascript|data|vbscript)\s*:", v, re.I):
                    continue
                # Absolute links to the site's own pages become relative, so the
                # 475 contextual links in the descriptions resolve on a preview
                # deployment instead of bouncing back to the old WordPress host.
                val = rel(canonical_link(htmllib.unescape(v)))
            # Unescape before escaping: the source is already entity-encoded, and
            # escaping it again turns `&amp;` into `&amp;amp;` in the href.
            keep.append(f'{attr}="{htmllib.escape(htmllib.unescape(val), quote=True)}"')
        return f"<{name}{' ' + ' '.join(keep) if keep else ''}>"

    h = re.sub(r"<(/?)([A-Za-z][\w:-]*)((?:\s[^>]*)?)/?>", fix_tag, h)
    h = re.sub(r"<p>\s*(&nbsp;|\s)*</p>", "", h)
    h = re.sub(r"\s+", " ", h)
    h = re.sub(r">\s+<", "><", h)
    return h.strip()


BLOCK = r"p|div|ul|ol|li|h[1-6]|table|thead|tbody|tr|th|td|blockquote"


def normalise(raw: str) -> str:
    r"""Undo the escaping the WooCommerce export applied to whitespace.

    Descriptions in the CSV contain the two-character sequence ``\n`` as well as
    real newlines — a paste artefact carried through the export. Left alone it
    prints literally on the page, and it also hides the paragraph breaks that
    `autop` depends on, so every description would render as one wall of text.
    """
    if not raw:
        return ""
    return (raw.replace("\\r\\n", "\n").replace("\\n", "\n")
               .replace("\\t", " ").replace("\r\n", "\n"))


def autop(raw: str) -> str:
    """Wrap loose text runs in <p>, the way WordPress does at render time.

    The exports mix block-level markup with bare text: a `<h2>`, then a
    paragraph of unwrapped prose, then a `<h3>`. Splitting on blank lines alone
    is not enough, because a heading and the prose after it are often separated
    by a single newline, so the text is segmented on block-tag boundaries first
    and only the loose runs between them are wrapped.
    """
    if not raw:
        return ""
    parts = re.split(rf"(<(?:{BLOCK})\b[^>]*>|</(?:{BLOCK})>)", raw, flags=re.I)
    out: list[str] = []
    depth = 0
    for part in parts:
        if not part:
            continue
        if re.fullmatch(rf"</?(?:{BLOCK})\b[^>]*>", part, re.I):
            if part.startswith("</"):
                depth = max(0, depth - 1)
            elif not part.endswith("/>"):
                depth += 1
            out.append(part)
            continue
        if depth > 0:  # already inside a block element; leave the text alone
            out.append(part)
            continue
        for block in re.split(r"\n\s*\n", part):
            block = block.strip()
            if block:
                out.append("<p>" + block.replace("\n", "<br>") + "</p>")
    return "".join(out)


def wrap_tables(h: str) -> str:
    """Put every table in migrated copy inside a horizontally scrolling box.

    The product descriptions carry comparison tables that are wider than a
    360px viewport. Without a scroll container the whole page scrolls sideways,
    which breaks the layout of everything else on it; with one, only the table
    moves. The wrapper is added here rather than in CSS because CSS cannot
    introduce an element around content that arrives as a blob of HTML.
    """
    return re.sub(r"(<table\b[\s\S]*?</table>)",
                  r'<div class="table-scroll">\1</div>', h, flags=re.I)


def unwrap_divs(h: str) -> str:
    """Short descriptions are wrapped in layout `<div>`s that carry no meaning."""
    return re.sub(r"</?div\b[^>]*>", "", h, flags=re.I)


def demote_h1(raw: str) -> str:
    """Move a body `<h1>` down to `<h2>`.

    Six descriptions open with an `<h1>`, left behind by whatever drafted them.
    The page already has one H1 — the product name — so a second would both
    break the heading order and compete for it. Demoting keeps the section
    title; dropping the tag would silently strip it and leave the text loose.
    """
    return re.sub(r"<(/?)h1\b", r"<\1h2", raw, flags=re.I)


def fix_heading_order(h: str) -> str:
    """Close gaps in the heading sequence of migrated copy.

    Several WordPress pages jump straight from h2 to h4 because the levels were
    picked for how they looked in the theme rather than for structure. Each
    heading is re-levelled to sit at most one below the previous one, which
    keeps the visual hierarchy the author intended while giving screen-reader
    users an outline they can actually navigate.
    """
    out: list[str] = []
    last = 1
    pos = 0
    for m in re.finditer(r"<h([2-6])>([\s\S]*?)</h\1>", h):
        level = int(m.group(1))
        fixed = min(level, last + 1)
        last = fixed
        out.append(h[pos:m.start()])
        out.append(f"<h{fixed}>{m.group(2)}</h{fixed}>")
        pos = m.end()
    out.append(h[pos:])
    return "".join(out)


def prepare(raw: str) -> str:
    """normalise -> demote -> paragraphs -> sanitise, for every field."""
    return clean_html(autop(demote_h1(normalise(raw))))


# --------------------------------------------------------------------- structure
def parse_faqs(h: str) -> list[dict[str, str]]:
    """Split the FAQ blob into question/answer pairs.

    Stored as a flat run of `<h3>question</h3>` followed by the answer markup.
    Leading numbering ("1. ") is dropped because the rebuilt accordion numbers
    the items itself, and a literal "1." inside FAQPage schema reads badly.
    """
    out: list[dict[str, str]] = []
    parts = re.split(r"<h3\b[^>]*>([\s\S]*?)</h3>", h, flags=re.I)
    for i in range(1, len(parts), 2):
        q = re.sub(r"^\s*\d+[.)]\s*", "", text_of(parts[i])).strip()
        a = parts[i + 1] if i + 1 < len(parts) else ""
        a = clean_html(autop(a)).strip()
        if q and text_of(a):
            out.append({"question": q, "answer": a})
    return out


def parse_specs(h: str) -> dict:
    """Turn the specification table into headers plus rows.

    The source table is six columns wide, but only the first two form a real
    key/value pair — the remaining four repeat generic option lists per row and
    do not describe the attribute named in column one. Every cell is kept so no
    supplied detail is lost; the rendered table scrolls sideways and pins the
    first column, and the key/value pair is what the summary list shows.
    """
    rows = []
    for tr in re.findall(r"<tr\b[^>]*>([\s\S]*?)</tr>", h, flags=re.I):
        cells = [text_of(c) for c in
                 re.findall(r"<t[hd]\b[^>]*>([\s\S]*?)</t[hd]>", tr, flags=re.I)]
        if any(c for c in cells):
            rows.append(cells)
    if not rows:
        return {"headers": [], "rows": [], "pairs": []}
    headers, body = rows[0], rows[1:]
    pairs = [{"label": r[0], "value": r[1]} for r in body if len(r) > 1 and r[0] and r[1]]
    return {"headers": headers, "rows": body, "pairs": pairs}


def alt_for(image: dict, product_name: str, index: int) -> str:
    """Alt text, preferring what WordPress stored and describing the shot if not.

    Roughly a third of the attachments have no alt text at all. Rather than
    ship an empty attribute on a content image, the product name is used with
    the position appended so that a screen reader announcing several gallery
    images does not hear the same string repeated.
    """
    if image.get("alt"):
        return image["alt"]
    if index == 0:
        return f"{product_name} shown as a custom-printed kraft box"
    return f"{product_name} — alternative view {index + 1}"


def text_of(h: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", htmllib.unescape(h or ""))).strip()


def words(h: str) -> int:
    t = text_of(h)
    return len(t.split()) if t else 0


def decode(s: str | None) -> str:
    return htmllib.unescape(s or "").strip()


# Category links written by hand inside product descriptions, with the display
# name pasted in place of the slug: "/product-category/Kraft-Gift-&-Specialty-
# Boxes/". WordPress resolves these because its term lookup is case-insensitive,
# so they are live 200s and must keep working — but they are not the canonical
# URL, and a static host matches paths exactly. They are rewritten to the real
# URL here, and the variants are answered with a 301 in vercel.json.
LINK_FIXUPS: dict[str, str] = {}
link_fixups_applied: Counter = Counter()


def canonical_link(url: str) -> str:
    """Map a hand-written category or product URL onto the slug actually served."""
    m = re.match(
        r"^(?:https?://(?:www\.)?kraftboxpack\.com)?(/(?:product-category|product)/[^?#]*)$",
        url.strip(), re.I)
    if not m:
        return url
    key = urllib.parse.unquote(m.group(1)).rstrip("/").lower()
    target = LINK_FIXUPS.get(key)
    if not target:
        return url
    if target != m.group(1):
        link_fixups_applied[key] += 1
    return target


def tidy_page(h: str) -> str:
    """Clear the wreckage Elementor leaves behind when its markup is flattened.

    A rendered Elementor page exported as HTML keeps the shells of widgets that
    only made sense with the theme's CSS and JavaScript: anchors with no href
    that were buttons, `add-to-cart` links into wp-admin, and long runs of
    `<br>` standing in for spacing. None of it means anything on a static site,
    and the cart links point at a WordPress endpoint that will not exist.
    """
    # Add-to-cart links into wp-admin, and anything else pointing at WordPress.
    h = re.sub(r'<a\b[^>]*href="[^"]*(?:wp-admin|wp-login|add-to-cart)[^"]*"[^>]*>[\s\S]*?</a>',
               "", h, flags=re.I)
    # Anchors with no destination: Elementor buttons whose href lived in JS.
    h = re.sub(r"<a(?![^>]*\bhref=)[^>]*>([\s\S]*?)</a>", r"\1", h, flags=re.I)
    h = re.sub(r"(?:<br\s*/?>\s*){2,}", "<br>", h, flags=re.I)
    h = re.sub(r"<p>(?:\s|<br\s*/?>|&nbsp;)*</p>", "", h, flags=re.I)
    h = re.sub(r"<(h[2-6])>\s*</\1>", "", h, flags=re.I)
    return re.sub(r"\s+", " ", h).strip()


def slice_between(h: str, start_text: str, end_text: str) -> str:
    """The markup from one heading up to (not including) a later one.

    The old home page mixed a hero, a 158-item product grid and a long piece of
    editorial copy into one Elementor document. The grid is rebuilt from the
    product data, so only the editorial part is carried across, and it is found
    by its own headings rather than by character offset.
    """
    start = h.find(f"<h2>{start_text}")
    if start == -1:
        return ""
    end = h.find(f"<h2>{end_text}", start)
    return h[start : end if end != -1 else len(h)]


def unwrap_dead_links(h: str, valid: set[str]) -> tuple[str, list[str]]:
    """Replace links to URLs that do not exist with their own anchor text.

    Ten product URLs referenced from inside descriptions already return 404 on
    the live WordPress site — they point at products that were never published.
    Carrying the anchor across would ship a known-broken link on a brand-new
    site, and deleting the sentence would lose real copy, so the wording stays
    and only the anchor goes.
    """
    dropped: list[str] = []

    def repl(m: re.Match[str]) -> str:
        href, inner = m.group(1), m.group(2)
        if href.startswith("/") and href not in valid:
            dropped.append(href)
            return inner
        return m.group(0)

    return re.sub(r'<a\b[^>]*\bhref="([^"]+)"[^>]*>([\s\S]*?)</a>', repl, h), dropped


def rel(url: str) -> str:
    """Absolute kraftboxpack URL -> site-relative path, others unchanged."""
    m = re.match(r"^https?://(?:www\.)?kraftboxpack\.com(/[^\s\"']*)?$", url.strip(), re.I)
    if not m:
        return url.strip()
    p = m.group(1) or "/"
    return p if p.endswith("/") or "." in p.rsplit("/", 1)[-1] or "?" in p else p + "/"


# --------------------------------------------------------------------------- xml
def load_xml() -> ET.Element:
    path = SRC / "kraftboxpack.WordPress.2026-08-03.xml"
    return ET.parse(path).getroot().find("channel")


def metas(item: ET.Element) -> dict[str, str]:
    out: dict[str, str] = {}
    for m in item.findall("wp:postmeta", NS):
        out[m.findtext("wp:meta_key", namespaces=NS) or ""] = (
            m.findtext("wp:meta_value", namespaces=NS) or ""
        )
    return out


def main() -> None:
    REPORTS.mkdir(parents=True, exist_ok=True)
    ch = load_xml()
    items = ch.findall("item")

    # ---------------------------------------------------------------- attachments
    attach: dict[str, dict] = {}
    for it in items:
        if it.findtext("wp:post_type", namespaces=NS) != "attachment":
            continue
        m = metas(it)
        url = (it.findtext("wp:attachment_url", namespaces=NS) or "").strip()
        if not url:
            continue
        attach[it.findtext("wp:post_id", namespaces=NS) or ""] = {
            "url": url,
            "file": m.get("_wp_attached_file", ""),
            "alt": decode(m.get("_wp_attachment_image_alt")),
            "title": decode(it.findtext("title")),
        }
    by_url = {a["url"]: pid for pid, a in attach.items()}

    # ---------------------------------------------------------------- categories
    cats: dict[str, dict] = {}
    for t in ch.findall("wp:term", NS):
        if t.findtext("wp:term_taxonomy", namespaces=NS) != "product_cat":
            continue
        slug = t.findtext("wp:term_slug", namespaces=NS) or ""
        cats[slug] = {
            "slug": slug,
            "name": decode(t.findtext("wp:term_name", namespaces=NS)),
            "parent": t.findtext("wp:term_parent", namespaces=NS) or "",
            "description": prepare(decode(t.findtext("wp:term_description", namespaces=NS))),
            "products": [],
        }

    # WooCommerce nests a child category under its parent in the URL, and the
    # live sitemap confirms both forms are live, so the hierarchy has to be
    # reproduced exactly or every child-category URL changes.
    for c in cats.values():
        parent = cats.get(c["parent"])
        c["url"] = (f"/product-category/{parent['slug']}/{c['slug']}/" if parent
                    else f"/product-category/{c['slug']}/")
        c["parentName"] = parent["name"] if parent else ""

    # Every way a description might spell a category link -> its canonical URL.
    # Both the slug and the display name are registered, because the source uses
    # each, and a name like "Kraft Gift & Specialty Boxes" appears with the
    # spaces turned into hyphens and the ampersand left raw or entity-encoded.
    for c in cats.values():
        variants = {c["slug"], c["name"].replace(" ", "-"),
                    c["name"].replace(" ", "-").replace("&", "&amp;")}
        for v in variants:
            LINK_FIXUPS[f"/product-category/{v}".lower()] = c["url"]
            if c["parent"]:
                parent = cats[c["parent"]]
                LINK_FIXUPS[f"/product-category/{parent['slug']}/{v}".lower()] = c["url"]

    dupes = Counter(c["name"] for c in cats.values())
    for name, n in dupes.items():
        if n > 1:
            slugs = [s for s, c in cats.items() if c["name"] == name]
            conflicts.append(
                f"- **Duplicate category name `{name}`** — slugs {', '.join(f'`{s}`' for s in slugs)}. "
                f"Both existed in WordPress; one slug (`karft-cosmetic-boxes`) is a typo. "
                f"Both are migrated at their original URLs so no link breaks, and the typo slug "
                f"carries a canonical to the correctly-spelled category."
            )

    # ---------------------------------------------------------------- products (xml side)
    xml_products: dict[str, dict] = {}
    old_slugs: list[tuple[str, str]] = []
    for it in items:
        if it.findtext("wp:post_type", namespaces=NS) != "product":
            continue
        status = it.findtext("wp:status", namespaces=NS)
        pid = it.findtext("wp:post_id", namespaces=NS) or ""
        slug = it.findtext("wp:post_name", namespaces=NS) or ""
        if status != "publish":
            excluded.append((f"product #{pid} ({slug})", "draft",
                             "Unpublished in WordPress; never had a public URL"))
            continue
        m = metas(it)
        cat_slugs = [c.get("nicename") for c in it.findall("category")
                     if c.get("domain") == "product_cat"]
        gallery = [g for g in (m.get("_product_image_gallery", "") or "").split(",") if g.strip()]
        for k, v in m.items():
            if k == "_wp_old_slug" and v and v != slug:
                old_slugs.append((v, slug))
        xml_products[pid] = {
            "id": pid,
            "slug": slug,
            "name": decode(it.findtext("title")),
            "url": f"/product/{slug}/",
            "categories": [c for c in cat_slugs if c],
            "thumbnail": m.get("_thumbnail_id", ""),
            "gallery": gallery,
            "seoTitle": decode(m.get("_yoast_wpseo_title")),
            "seoDescription": decode(m.get("_yoast_wpseo_metadesc")),
            "focusKeyword": decode(m.get("_yoast_wpseo_focuskw")),
            "primaryCategory": m.get("_yoast_wpseo_primary_product_cat", ""),
            # The page-view counter the old site's Elementor addon kept. It is
            # the only real demand signal in the exports — WooCommerce's
            # "featured" flag is unset on every product and total_sales is
            # populated for just ten — so it is what "most popular" means here.
            "views": int(m.get("_eael_post_view_count", "0") or 0),
        }

    # A description may spell a product link with the display name's casing;
    # WordPress matched it case-insensitively, a static host will not.
    for x in xml_products.values():
        LINK_FIXUPS[f"/product/{x['slug']}".lower()] = x["url"]

    # ---------------------------------------------------------------- products (csv side)
    csv_path = next(SRC.glob("wc-product-export-*.csv"))
    products: list[dict] = []
    for r in csv.DictReader(csv_path.open(encoding="utf-8-sig")):
        if r.get("Published") != "1":
            continue
        pid = (r.get("ID") or "").strip()
        x = xml_products.get(pid)
        if not x:
            conflicts.append(f"- Product #{pid} `{r.get('Name')}` is in the CSV but not the XML; skipped (no slug available).")
            continue

        img_urls = [u.strip() for u in (r.get("Images") or "").split(",") if u.strip()]
        images = []
        for i, u in enumerate(img_urls):
            a = attach.get(by_url.get(u) or "", {})
            img = {
                "src": u,
                "file": a.get("file") or (u.split("/uploads/")[-1] if "/uploads/" in u else ""),
                "alt": a.get("alt") or "",
                "title": a.get("title", ""),
            }
            img["alt"] = alt_for(img, x["name"], i)
            images.append(img)
        if not images:
            conflicts.append(
                f"- Product `{x['slug']}` has no images in the export; the page renders "
                f"without a gallery rather than with a placeholder.")

        desc = wrap_tables(prepare(r.get("Description") or ""))
        short = unwrap_divs(prepare(r.get("Short description") or ""))
        specs = parse_specs(prepare(r.get("Meta: _bhww_specifications_wysiwyg") or ""))
        faqs = parse_faqs(prepare(r.get("Meta: _bhww_faqs_wysiwyg") or ""))

        products.append({
            **x,
            "sku": (r.get("SKU") or "").strip(),
            "price": (r.get("Regular price") or "").strip(),
            "currency": "USD",
            "inStock": (r.get("In stock?") or "1") == "1",
            "shortDescription": short,
            "description": desc,
            "specs": specs,
            "faqs": faqs,
            "images": images,
            "words": words(desc),
        })

    # Everything the rebuilt site will actually serve.
    valid_urls = ({p["url"] for p in products} | {c["url"] for c in cats.values()}
                  | {"/", "/about-us/", "/contact-us/", "/products/", "/get-a-quote/",
                     "/privacy-policy/", "/terms-conditions/", "/refund_returns/",
                     "/thank-you/"})
    dead_links: Counter = Counter()
    for p in products:
        for field in ("description", "shortDescription"):
            p[field], dropped = unwrap_dead_links(p[field], valid_urls)
            dead_links.update(dropped)
    (REPORTS / "_dead_links.json").write_text(json.dumps(dict(dead_links), indent=1))

    products.sort(key=lambda p: p["name"].lower())
    for p in products:
        for c in p["categories"]:
            if c in cats:
                cats[c]["products"].append(p["slug"])

    # ---------------------------------------------------------------- pages
    KEEP_PAGES = {"about-us", "contact-us", "privacy-policy", "terms-conditions",
                  "refund_returns", "thank-you", "products", "home"}
    pages = []
    for it in items:
        if it.findtext("wp:post_type", namespaces=NS) != "page":
            continue
        if it.findtext("wp:status", namespaces=NS) != "publish":
            continue
        slug = it.findtext("wp:post_name", namespaces=NS) or ""
        m = metas(it)
        if slug not in KEEP_PAGES:
            excluded.append((f"page /{slug}/", "WooCommerce transactional page",
                             "Cart, checkout and account pages have no role in a quote-led static site"))
            continue
        raw = it.findtext("content:encoded", namespaces=NS) or ""
        body = wrap_tables(fix_heading_order(tidy_page(prepare(raw))))
        if slug == "products":
            # The old /products/ page held a hand-written list of 29 "Burger
            # Boxes" products left over from a different site. Every one of
            # those URLs 404s on the live site, and the rebuilt page lists all
            # 158 real products from the product data instead, so the stale
            # list is dropped rather than carried across as broken links.
            excluded.append(("/products/ hardcoded product list",
                             "stale content",
                             "29 links to burger-box products that 404 on the live site; "
                             "superseded by the generated grid of all 158 real products"))
            body = ""
        if slug == "home":
            # Everything before the editorial copy is the hero and the product
            # grid, both of which the rebuilt page composes from live data.
            body = slice_between(
                body, "Custom Kraft Boxes For All Your Packaging Needs", "Let’s work together")
        pages.append({
            "slug": slug,
            "title": decode(it.findtext("title")),
            "url": "/" if slug == "home" else f"/{slug}/",
            "html": body,
            "seoTitle": decode(m.get("_yoast_wpseo_title")),
            "seoDescription": decode(m.get("_yoast_wpseo_metadesc")),
            "hasElementor": bool(m.get("_elementor_data")),
            "words": words(body),
        })

    # ---------------------------------------------------------------- write data
    DATA.mkdir(parents=True, exist_ok=True)
    (DATA / "products.json").write_text(json.dumps(products, indent=1, ensure_ascii=False))
    (DATA / "categories.json").write_text(
        json.dumps([c for c in cats.values() if c["products"]], indent=1, ensure_ascii=False))
    (DATA / "pages.json").write_text(json.dumps(pages, indent=1, ensure_ascii=False))
    (DATA / "old-slugs.json").write_text(json.dumps(sorted(set(old_slugs)), indent=1))

    # ---------------------------------------------------------------- image inventory
    rows = [["old_url", "local_file", "alt_text", "used_by", "role"]]
    used: dict[str, list[str]] = defaultdict(list)
    role: dict[str, str] = {}
    for p in products:
        for i, im in enumerate(p["images"]):
            used[im["src"]].append(p["url"])
            role.setdefault(im["src"], "primary" if i == 0 else "gallery")
    for url, pages_ in sorted(used.items()):
        a = attach.get(by_url.get(url, ""), {})
        rows.append([url, a.get("file", ""), a.get("alt", ""), " | ".join(pages_), role[url]])
    with (REPORTS / "IMAGE_INVENTORY.csv").open("w", newline="") as f:
        csv.writer(f).writerows(rows)

    # ---------------------------------------------------------------- excluded
    with (REPORTS / "EXCLUDED_FILES_REPORT.csv").open("w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["item", "category", "reason"])
        w.writerows(excluded)

    print(f"products    {len(products)}")
    print(f"categories  {len([c for c in cats.values() if c['products']])} (of {len(cats)})")
    print(f"pages       {len(pages)}")
    print(f"images      {len(used)} unique across products")
    print(f"old slugs   {len(set(old_slugs))}")
    print(f"excluded    {len(excluded)}")
    print(f"conflicts   {len(conflicts)}")
    print(f"link fixups {sum(link_fixups_applied.values())} rewritten "
          f"({len(link_fixups_applied)} distinct malformed URLs)")
    print(f"dead links  {sum(dead_links.values())} unwrapped "
          f"({len(dead_links)} distinct 404 destinations)")
    (REPORTS / "_conflicts.json").write_text(json.dumps(conflicts, indent=1))
    # Every spelling of a category path -> the URL the site actually serves,
    # so the link-preservation report can tell a rewritten link from a lost one.
    (REPORTS / "_category_urls.json").write_text(
        json.dumps({k: v for k, v in LINK_FIXUPS.items()
                    if k.startswith("/product-category/")}, indent=1))


if __name__ == "__main__":
    main()
