# Migration reconciliation

Search Console reports **294 landing pages**. The build produces **194 routes**.
This accounts for every URL in the gap — none of it was guessed, all of it is
classified from the Search Console export and the build output.

Source data: `~/Downloads/https___kraftboxpack.com_-Performance-on-Search-2026-08-11.xlsx`,
twelve months to 11 August 2026. Reproduce with `python3 scripts/reconcile-gsc.py`.

## Summary

| Classification | URLs | Impressions | Clicks | Action |
|---|---|---|---|---|
| legacy-image | 95 | 246 | 0 | Left to 404 — see note below |
| lost-product | 10 | 665 | 12 | 5 redirected, 4 recreated as full pages, 1 case variant redirected |
| case-variant | 6 | 33 | 0 | 301 to the lowercase URL |
| legacy-pagination | 2 | 35 | 0 | 301 to the category |
| already-redirected | 1 | 73 | 0 | Redirect already present, destination corrected |
| lost-category | 1 | 5 | 0 | 301 to the merged category |

## Lost products — the valuable part of the gap

Ten product pages existed on WordPress and were not carried into the Astro
build. Several still rank, which makes them the only genuinely costly part of
this gap.

| URL | Impressions | Clicks | Position | Decision |
|---|---|---|---|---|
| `/product/kraft-diffuser-boxes/` | 251 | 4 | 24.8 | **Recreated** as a full page with written content. |
| `/product/kraft-corporate-gift-boxes/` | 170 | 1 | 39.4 | **Recreated** as a full page with written content. |
| `/product/kraft-clothing-packaging-boxes/` | 93 | 1 | 11.3 | 301 → kraft-apparel-packaging-boxes (same product, different term) |
| `/product/kraft-diy-kit-boxes/` | 59 | 3 | 7.1 | **Recreated** as a full page with written content. |
| `/product/kraft-cosmetic-serum-boxes/` | 49 | 0 | 13.8 | **Recreated** as a full page with written content. |
| `/product/kraft-menu-packaging-boxes/` | 17 | 0 | 12.1 | 301 → kraft-brochure-packaging-boxes (same format) |
| `/product/kraft-pill-boxes/` | 13 | 0 | 5.0 | 301 → kraft-medicine-packaging-boxes |
| `/product/kraft-counter-display-stands/` | 7 | 3 | 2.1 | 301 → kraft-display-boxes |
| `/product/kraft-craft-kit-boxes/` | 4 | 0 | 1.8 | 301 → kraft-art-supply-packaging |
| `/product/Kraft-Diffuser-Boxes/` | 2 | 0 | 4.0 | 301 → the recreated lowercase page |

## Legacy image URLs, and why they are not redirected

95 URLs of the form `/wp-content/uploads/2024/10/Kraft-Shoe-Boxes.jpg/` appear
in Search Console with 246 impressions and 0 clicks between them. They are
image URLs ranking in Google Images, not HTML pages.

They are **deliberately left to 404**. Redirecting an image URL to an HTML page
is a soft-404 pattern that Google treats as an error rather than a migration,
and it would be 95 of them. The images themselves still ship — they build to
hashed paths under `/_astro/` — so nothing is missing from the site, only from
those specific legacy URLs.

If image search traffic is worth recovering, the fix is stable image paths plus
an image sitemap, not redirects.

## Uppercase URL variants

Google holds six uppercase paths that resolve to nothing, because the build is
lowercase throughout. All six now 301 to their lowercase equivalent.

- `/product-category/Kraft-Industrial-Packaging/` — 15 impressions, position 85.5
- `/product-category/Kraft-Food-Packaging/` — 9 impressions, position 57.4
- `/product/Kraft-T-Shirt-Boxes/` — 4 impressions, position 13.0
- `/product-category/Kraft-Toy-Packaging/` — 3 impressions, position 11.0
- `/product-category/Kraft-Apparel-Boxes/` — 1 impressions, position 8.0
- `/product/Kraft-Candle-Sleeve-Boxes/` — 1 impressions, position 69.0

## The misspelled category

WordPress published two categories both named Kraft Cosmetic Boxes:

| URL | Products | Impressions | Clicks | Position |
|---|---|---|---|---|
| `/product-category/kraft-packaging-boxes/karft-cosmetic-boxes/` | 9 | 39 | 0 | 43.1 |
| `/product-category/kraft-cosmetic-boxes/` | 2 | 9 | 0 | 15.6 |

"karft" is a typo. The site had been handling it with a cross-canonical, which
leaves the misspelled URL in the sitemap, the navigation and Google's index
while splitting the signals for the same term across two URLs.

Neither had ever earned a click, and the correctly spelled URL already ranked
far better on a fifth of the products. So the nine products moved across, the
misspelled route stopped being built, and a 301 sends its URL to the merged
page. Eleven product pages that linked to the old URL from their body copy were
updated too — the brief asked for every reference, not just the route.

## Redirect integrity

28 redirects, **0 chains**. `scripts/add-redirects.py` refuses to write a
redirect whose destination does not exist in the build or is itself a redirect
source. It caught one of each while this was being written, which is why the
uppercase diffuser variant stayed out of the config until its lowercase page
existed. It is in now.

## The four recreated products

None had an equivalent page — a reed diffuser is not a candle, a serum bottle is
not a jar of cream, a corporate gift programme is not a hamper, and a project
kit is not an art supply set. Redirecting them would have thrown away 529
impressions and four ranking positions.

They are built as full pages with hand-written content and ten FAQs each. None
had photography of its own, so each gallery borrows the closest genuine kraft
format already in the media library, with alt text describing what the
photograph actually shows rather than claiming to be the product. That puts all
four in a state where they *could* enter the Merchant feed. They are held out
of it for now on the client's instruction: the catalogue is 162 products and
the feed carries 158 items. Purpose-shot photography is still worth
commissioning — see `IMAGE-GAPS.md`.

