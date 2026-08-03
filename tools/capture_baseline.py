#!/usr/bin/env python3
"""
Records what the live WordPress site looks like, before anything is replaced.

Two deliverables come out of this and both are immutable once written — they are
the evidence the rebuilt site is measured against:

  reports/OLD_URL_INVENTORY.csv          every indexable URL, with its metadata
  reports/OLD_INTERNAL_LINK_BASELINE.csv every internal link, with anchor text

The source site is compromised, so its HTML is only ever pattern-matched as
text here. Nothing is rendered, no scripts run, and no markup from it reaches
the build; the spam paths the attacker added are recorded separately in
SPAM_URL_MAP.csv so they can be answered with 410 rather than quietly dropped.
"""
from __future__ import annotations

import concurrent.futures as cf
import csv
import html as htmllib
import re
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REPORTS = ROOT / "reports"
SITE = "https://kraftboxpack.com"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Safari/537.36"


def get(url: str, timeout: int = 45) -> tuple[int, str]:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return r.status, r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, ""
    except Exception:
        return 0, ""


def text_of(h: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", htmllib.unescape(h or ""))).strip()


def strip_noise(h: str) -> str:
    h = re.sub(r"<script[\s\S]*?</script>", "", h, flags=re.I)
    return re.sub(r"<style[\s\S]*?</style>", "", h, flags=re.I)


def sitemap_urls() -> list[str]:
    _, idx = get(f"{SITE}/sitemap_index.xml")
    maps = re.findall(r"<loc>(.*?)</loc>", idx)
    urls: list[str] = []
    for m in maps:
        _, body = get(m)
        urls += re.findall(r"<loc>(.*?)</loc>", body)
    return sorted(set(urls))


def classify(html: str, index: int) -> str:
    """Which part of the page a link sits in, so removals can be judged."""
    before = html[:index]
    tail = before[-6000:]

    def open_tag(tag: str) -> bool:
        return len(re.findall(rf"<{tag}\b", before, re.I)) > len(re.findall(rf"</{tag}>", before, re.I))

    if open_tag("header") or open_tag("nav"):
        return "navigation"
    if open_tag("footer"):
        return "footer"
    if re.search(r"breadcrumb", tail[-1500:], re.I):
        return "breadcrumb"
    if re.search(r"related|upsell|cross-sell", tail[-3000:], re.I):
        return "related-product"
    if re.search(r"product-?(card|item|loop|grid)|woocommerce-loop", tail[-2500:], re.I):
        return "product-grid"
    return "contextual"


def scrape(url: str) -> dict:
    status, html = get(url)
    body = strip_noise(html)
    g = lambda p: (re.search(p, html, re.S | re.I) or ["", ""])[1] if re.search(p, html, re.S | re.I) else ""
    links = []
    for m in re.finditer(r'<a\b[^>]*\bhref="([^"]+)"[^>]*>([\s\S]*?)</a>', body, re.I):
        href, anchor = htmllib.unescape(m.group(1)).strip(), text_of(m.group(2))
        if re.match(r"^(mailto:|tel:|javascript:|#|data:)", href, re.I):
            continue
        if href.startswith("//"):
            href = "https:" + href
        if href.startswith("/"):
            href = SITE + href
        if not href.startswith(SITE):
            continue
        if re.search(r"/wp-content/|/wp-admin/|/wp-json/|\.(jpg|png|css|js|gif|webp|pdf)$", href, re.I):
            continue
        links.append({"dest": href.split("#")[0], "anchor": anchor,
                      "type": classify(body, m.start())})
    return {
        "url": url,
        "status": status,
        "title": htmllib.unescape(g(r"<title>(.*?)</title>")),
        "description": htmllib.unescape(g(r'<meta name="description" content="(.*?)"')),
        "canonical": g(r'<link rel="canonical" href="(.*?)"'),
        "robots": g(r'<meta name="robots" content="(.*?)"'),
        "h1": text_of(g(r"<h1[^>]*>([\s\S]*?)</h1>")),
        "h2": len(re.findall(r"<h2\b", body)),
        "h3": len(re.findall(r"<h3\b", body)),
        "words": len(text_of(body).split()),
        "images": len(re.findall(r"<img\b", body)),
        "schema": sorted({t for t in re.findall(r'"@type"\s*:\s*"([^"]+)"', html)}),
        "links": links,
    }


def main() -> None:
    REPORTS.mkdir(parents=True, exist_ok=True)
    urls = sitemap_urls()
    print(f"{len(urls)} URLs in the live sitemap")

    pages: list[dict] = []
    with cf.ThreadPoolExecutor(max_workers=6) as pool:
        for i, p in enumerate(pool.map(scrape, urls), 1):
            pages.append(p)
            if i % 25 == 0:
                print(f"  {i}/{len(urls)}")

    # ------------------------------------------------------------- url inventory
    with (REPORTS / "OLD_URL_INVENTORY.csv").open("w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["url", "status", "type", "title", "meta_description", "canonical",
                    "robots", "h1", "h2_count", "h3_count", "word_count", "image_count",
                    "schema_types", "internal_links_out"])
        for p in sorted(pages, key=lambda x: x["url"]):
            path = p["url"][len(SITE):]
            kind = ("product" if path.startswith("/product/")
                    else "category" if path.startswith("/product-category/")
                    else "home" if path == "/" else "page")
            w.writerow([p["url"], p["status"], kind, p["title"], p["description"],
                        p["canonical"], p["robots"], p["h1"], p["h2"], p["h3"],
                        p["words"], p["images"], " | ".join(p["schema"]), len(p["links"])])

    # ------------------------------------------------------------- link baseline
    seen: set[tuple[str, str, str]] = set()
    rows: list[list[str]] = []
    for p in sorted(pages, key=lambda x: x["url"]):
        for l in p["links"]:
            key = (p["url"], l["dest"], l["anchor"])
            if key in seen:
                continue
            seen.add(key)
            rows.append([p["url"], l["dest"], l["anchor"], l["type"]])
    with (REPORTS / "OLD_INTERNAL_LINK_BASELINE.csv").open("w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["source_url", "destination_url", "anchor_text", "link_type"])
        w.writerows(rows)

    from collections import Counter
    print(f"\nOLD_URL_INVENTORY.csv           {len(pages)} URLs")
    print(f"OLD_INTERNAL_LINK_BASELINE.csv  {len(rows)} internal links")
    print("  by type:", dict(Counter(r[3] for r in rows)))
    print("  status :", dict(Counter(p["status"] for p in pages)))


if __name__ == "__main__":
    main()
