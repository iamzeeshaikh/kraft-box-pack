# Migration report — kraftboxpack.com

**WordPress + WooCommerce + Elementor → Astro 7 (static)**
3 August 2026

## Outcome

The site is rebuilt and deployed to a preview URL. Every published product,
category and page is migrated with its content intact, every live URL still
resolves, and the spam paths injected into the compromised installation are
answered with 410.

**DNS has not been changed.** `kraftboxpack.com` still serves the old site.

Preview: `https://kraftboxpack-9nqkrjwkv-iamzeeshaikhs-projects.vercel.app`

## What was migrated

| | Count |
| --- | --- |
| Published products | **158 / 158** |
| Product categories | **17 / 17** |
| Content pages | 8 |
| Pages built | 186 |
| Words of product copy | 195,628 |
| FAQ question/answer pairs | 2,370 |
| Specification table rows | 1,817 |
| Product images | 735 references, 729 files |
| Old URLs still resolving | **186 / 186** |

Product descriptions average 1,238 words and every product retains its full
description, its specification table and all 15 of its FAQs. Nothing was
truncated, summarised or rewritten — the migration carries the existing copy
across, it does not replace it.

Yoast titles and meta descriptions were preserved for all 158 products, so no
product's search snippet changes.

## URLs

Every URL in the old sitemap was crawled before any work began
(`OLD_URL_INVENTORY.csv`, 186 URLs, all 200). After the migration:

| Outcome | Count |
| --- | --- |
| Preserved at the same URL (200) | 183 |
| 301 redirect to an equivalent page | 3 |
| Broken | **0** |

Product URLs (`/product/{slug}/`) and category URLs
(`/product-category/{slug}/`, nested for children) are byte-identical to the
originals, trailing slashes included.

Fourteen redirect rules cover the retired WooCommerce pages and six category
URLs that were written with display-name capitalisation. Every redirect
resolves in one hop — verified, not assumed.

## Internal links

A full link graph was captured from the live site before anything changed:
**5,565 links across 186 pages**, stored immutably in
`OLD_INTERNAL_LINK_BASELINE.csv`.

| | |
| --- | --- |
| Unique source→destination pairs on the old site | 3,116 |
| Preserved | 2,828 (**90.8%**) |
| Removed | 288 |
| Added by the rebuild | 1,159 |
| Orphan pages | 2 (both intentionally noindex) |

Pair-by-pair preservation understates the result, because related-product
strips are chosen algorithmically and the old and new picks differ. The measure
that decides whether a page lost authority is how many pages link to it:
**180 of 181 destinations hold at least their previous inbound link count.**
The single exception is `/product/kraft-thermal-kraft-boxes/`, down from 10 to 9.

Of the 288 removed links, 66 pointed at URLs that already returned 404 on the
live site and 40 came from the retired cart and checkout pages. The rest are
related-product selections that differ. Full detail in
`INTERNAL_LINK_PRESERVATION_REPORT.md` and `INTERNAL_LINK_REMOVED.csv`.

## Security

The exports were audited before any content was reused. **They are clean** —
every scanner hit proved to be a false positive, and all 476 links in the
product content point at kraftboxpack.com, with no external link at all.

The compromise is URL-level and on the old server: spam paths under `/casino`,
`/slot` and `/pokie` that the old `robots.txt` had a "Block spam paths" section
for. Because the new site is built only from the exported content, the
injection cannot survive the migration. Those paths are answered **410 Gone**,
which removes them from the index rather than merely stopping crawling.

Nothing from the old stack is reused: no theme, no plugins, no `wp-content`, no
database, no users, no password hashes, no sessions, no `.htaccess`, no server
config. The exports are parsed as inert data — never executed, imported or
deserialised into code — and all markup passes an allow-list sanitiser that
strips `<script>`, `<iframe>`, event handlers, inline styles and
`javascript:` URLs.

All 730 images were verified by their leading bytes rather than their
extension; **zero** were quarantined.

Full detail in `MALWARE_AUDIT_REPORT.md`. Outstanding actions — none of which
this migration performs — are in `SECURITY_CUTOVER_CHECKLIST.md`. The most
important: **the old host is still compromised and every credential that
existed on it should be rotated.**

## Verification

Run against the deployed preview, not a local server:

| | |
| --- | --- |
| Build-output QA (metadata, links, routing, schema, sitemap) | **2,799 passed, 0 failed** |
| Accessibility and responsive, 5 viewports | **127 passed, 0 failed** |
| Quote endpoint | **15 passed, 0 failed** |
| `astro check` | 0 errors, 0 warnings, 0 hints |
| `npm audit` | 0 vulnerabilities |

The quote form was tested **on the deployed site**: a real submission was
delivered, a PHP webshell renamed `.png` was rejected 415, an oversized upload
413, and the rate limiter engaged on the sixth submission in a minute.

## Defects found and fixed during the migration

Things that were wrong in the source and would have shipped unnoticed:

1. **Every product description rendered as one wall of text** — the export
   stored literal `\n` sequences instead of newlines, hiding all paragraph
   breaks. All 158 now render as paragraphs.
2. **446 tables forced the page sideways on a phone** — no scroll container.
   All are now wrapped.
3. **29 broken links on `/products/`** — the page listed "Burger Boxes"
   products from a different site, every one a 404. Replaced with the real
   catalogue.
4. **116 category and product links resolved only by WordPress's
   case-insensitive lookup** and would have 404'd on static hosting. Rewritten,
   plus redirects for the old spellings.
5. **11 links pointed at products that never existed.** Anchors removed, copy kept.
6. **Three colour-contrast failures** and a duplicated homepage feature.
7. **Heading levels skipped** `h2` → `h4` on several pages.

Each is documented with its reasoning in `MIGRATION_CONFLICTS.md`.

## Deliberate departures from the old site

- **No fake rating.** The old site emitted an `aggregateRating` with no reviews
  behind it. That is a deceptive rich result and a manual-action risk, so it is
  not reproduced. Product, Offer, FAQPage, BreadcrumbList, CollectionPage and
  Organization schema all are.
- **Quote instead of checkout.** A static site cannot run WooCommerce, and with
  $0.30 placeholder prices and a 100-box minimum there was no real purchase path
  before either. "Add to Cart" becomes "Get a Quote"; `/cart/` and `/checkout/`
  redirect to `/get-a-quote/`.
- **Both duplicate categories kept.** WordPress published two categories named
  "Kraft Cosmetic Boxes", one with a typo in its slug. Both URLs stay live
  because both are linked to; the misspelt one canonicalises to the other.

All claims present on the old site — free shipping, 8-10 day turnaround, 100-box
minimum, free design, recyclable and FSC-certified materials, food safety — are
preserved, with their source recorded in `CLAIMS_MIGRATION_REPORT.md`. Nothing
was invented.

## Reports

| File | Contents |
| --- | --- |
| `MIGRATION_REPORT.md` | This document |
| `MALWARE_AUDIT_REPORT.md` | Audit of every export, and how untrusted input is handled |
| `SECURITY_CUTOVER_CHECKLIST.md` | What to do before, during and after go-live |
| `MIGRATION_CONFLICTS.md` | Every ambiguity and the judgement made |
| `CLAIMS_MIGRATION_REPORT.md` | Every factual claim and its source |
| `OLD_URL_INVENTORY.csv` | The live site before any change (immutable) |
| `OLD_INTERNAL_LINK_BASELINE.csv` | The live link graph before any change (immutable) |
| `URL_MAPPING.csv` | Old URL → new URL with observed status |
| `REDIRECT_MAP.csv` | Every redirect, verified single-hop |
| `SPAM_URL_MAP.csv` | Injected paths and how they are answered |
| `EXCLUDED_FILES_REPORT.csv` | What was not migrated, and why |
| `IMAGE_INVENTORY.csv` | Every image, its alt text and where it is used |
| `IMAGE_DOWNLOAD_REPORT.csv` | Download status and SHA-256 of every image |
| `CONTENT_INVENTORY.csv` | Per-page word, heading, FAQ and link counts |
| `INTERNAL_LINK_MAP.csv` | Every link on the new site |
| `INTERNAL_LINK_PRESERVATION_REPORT.md` | Preserved / removed analysis |
| `INTERNAL_LINK_REMOVED.csv` | Every removed link with its reason |
| `INBOUND_LINK_COMPARISON.csv` | Inbound link count per page, old vs new |
| `ORPHAN_PAGE_REPORT.csv` | Pages with no inbound internal link |
| `SEO_VALIDATION_REPORT.md` | Metadata and structured-data summary |
| `RESPONSIVE_QA_REPORT.md` | Accessibility and responsive results |
| `DEPLOYMENT_REPORT.md` | What was deployed and what was verified |
| `ENVIRONMENT_VARIABLES.md` | Configuration, and two items to fix before go-live |

## Next step

Review the preview, then work through `SECURITY_CUTOVER_CHECKLIST.md`. Going
live requires explicit authorisation and has not been done.
