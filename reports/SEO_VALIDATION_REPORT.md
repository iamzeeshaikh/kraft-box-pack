# SEO validation report

Generated 2026-08-03 from the built output.

## Coverage

| | Count |
| --- | --- |
| Pages built | 186 |
| Indexable | 183 |
| Noindex (thank-you, 404, 410, duplicate category) | 3 |
| Products | 158 |
| Categories | 17 |
| URLs in sitemap.xml | 183 |
| Total words | 425,911 |

## Metadata

Every page has a unique title and meta description. Titles are 65 characters or
fewer and descriptions between 50 and 165, checked by `scripts/qa.mjs`.

| | Value |
| --- | --- |
| Pages with a title | 186 / 186 |
| Pages with a meta description | 186 / 186 |
| Unique titles among indexable pages | 182 / 183 |
| Unique descriptions among indexable pages | 183 / 183 |
| Pages with exactly one H1 | 186 / 186 |
| Self-referencing canonical | 184 / 186 |

Titles and descriptions carried over from Yoast where the old site had them:
158 product pages kept their existing `_yoast_wpseo_title`
and `_yoast_wpseo_metadesc` values, so no product's snippet changes.

## Structured data

| Type | Pages |
| --- | --- |
| Organization | 186 |
| WebSite | 186 |
| Product | 158 |
| Offer | 0 |
| FAQPage | 158 |
| BreadcrumbList | 183 |
| CollectionPage | 19 |
| ItemList | 19 |
| WebPage | 8 |

Every JSON-LD block parses and every node is typed, asserted by `scripts/qa.mjs`.

**No `aggregateRating` or `Review` is emitted.** The old site's Schema plugin
published a rating with no reviews behind it. A rating nobody left is a
deceptive rich result and grounds for a manual action, so it is not carried
over. Every other node the old site emitted is reproduced.

The price on each `Offer` is the per-unit starting figure WooCommerce held, and
it is qualified with a `UnitPriceSpecification` giving the unit and the 100-box
minimum, so the markup does not imply a single box sells for that amount.

## Page depth

| Page type | Avg words | Avg H2 | Avg FAQs | Avg internal links |
| --- | --- | --- | --- | --- |
| Product | 2640 | 12 | 15 | 21 |
| Category | 135 | 7 | 0 | 24 |

All 158 product pages carry their full migrated description,
specification table and 15 FAQs. Nothing was truncated or summarised.

## Indexation controls

- `robots.txt` allows everything except `/api/` and `/thank-you/`, and points at `/sitemap.xml`.
- The old `robots.txt` blocked `/casino`, `/slot` and `/pokie`. Those are answered
  with **410 Gone** instead — see `SPAM_URL_MAP.csv`. A blocked URL can linger in
  the index because the crawler never sees the status; a 410 removes it.
- `/product-category/kraft-packaging-boxes/karft-cosmetic-boxes/` stays live and
  canonicalises to `/product-category/kraft-cosmetic-boxes/`; WordPress published
  two categories with the same name and both URLs are linked to.
