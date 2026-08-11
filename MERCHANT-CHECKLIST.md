# Merchant Center checklist

## Why this matters more than anything else on the site

Search Console, last twelve months:

| Search appearance | Clicks | Impressions | CTR | Position |
|---|---|---|---|---|
| **Merchant listings** | **684** | 3,230 | **21.18%** | **1.72** |
| Review snippet | 423 | 87,174 | 0.49% | 31.44 |
| Product snippets | 226 | 62,146 | 0.36% | 25.43 |

Merchant listings produce **684 of 1,573 total clicks — 44% of all organic
traffic — from 1.6% of the impressions.** Nothing else on the site converts
impressions to clicks at anywhere near that rate.

Every decision in this rebuild treated that as the thing not to break.

## Preserved

| Item | Status |
|---|---|
| Product landing-page URLs | **Unchanged.** No product URL was renamed. |
| Product IDs / SKUs | Unchanged — `sku` still derives from the slug. |
| Product images | Unchanged. All 1,947 renditions still build to the same hashed paths. |
| Pricing | Unchanged. $0.30 per piece, stated identically in the visible page, the Offer schema and the feed. |
| Availability | Unchanged, `InStock`. |
| Offer schema | Retained on every product with `priceSpecification`, `shippingDetails` and a `seller` reference. |
| Feed | `/google-merchant-feed.xml` still builds with `gla_` IDs. |
| Crawler access | `robots.txt` blocks nothing that Merchant needs. |

## Changed, and why it is safe

**One product URL removed:** the misspelled category
`/product-category/kraft-packaging-boxes/karft-cosmetic-boxes/` no longer
builds. It was a *category*, not a product, so no feed item pointed at it. Its
nine products kept their own URLs and moved to
`/product-category/kraft-cosmetic-boxes/`. A 301 covers the old URL.

**27 redirects added**, all one-to-one, none pointing at the homepage, zero
chains. Twelve recover product URLs that were 404ing.

**Metadata rewritten on 38 pages.** Titles and descriptions only. Product name,
price, availability, image and URL — the fields the feed matches on — are
untouched.

## Verify manually before or after deploying

These cannot be checked from the repository:

- [ ] Every feed landing page returns 200 in Merchant Center's own fetch
- [ ] Feed item count matches the catalogue (158 products)
- [ ] No items in "Disapproved" or "Limited" after the next crawl
- [ ] Mobile landing pages render for the Merchant crawler specifically
- [ ] Price in the feed matches the price shown on the page (both $0.30)
- [ ] Shipping settings in the Merchant account match the free-shipping claim
- [ ] Return policy in the Merchant account matches `/refund_returns/` — 10-day
      window, mail only, return label included, no restocking fee, custom-printed
      items excluded unless defective
- [ ] Merchant Center site verification is current

## Two risks worth knowing

**1. Review snippets are going away, and that is correct.**

87,174 impressions and 423 clicks came from review-snippet markup on the old
WordPress site. That markup was removed during the migration to Astro and has
**not** been recreated, because no verified review data exists and fabricating
ratings is not an option. Expect that traffic to decay. It is a deliberate
trade, not an oversight.

**2. The return policy excludes most of what is sold.**

`/refund_returns/` states that custom-printed boxes are not returnable unless
defective. Since the entire catalogue is custom-printed, any Merchant return
policy that promises unconditional returns would contradict the site. Both need
to say the same thing.
