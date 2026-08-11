# Internal link map

Generated from the built site, body content only — navigation and footer links
are excluded because they are the same on every page and tell you nothing about
topical relationship.

Reproduce by re-running the extraction in `scripts/content-audit.py`.

## Relationship types

| From | To | Links |
|---|---|---|
| product | product | 1416 |
| product | category | 326 |
| product | other | 324 |
| category | product | 204 |
| product | home | 163 |
| other | product | 162 |
| category | other | 32 |
| other | category | 22 |
| home | product | 21 |
| blog | product | 18 |
| category | home | 16 |
| blog | blog | 15 |
| other | home | 9 |
| blog | home | 7 |

## Rules enforced

- **One contextual link per content section.** Each written section carries at
  most one, rendered in its own paragraph so the rule holds structurally rather
  than by discipline.
- **Descriptive anchors.** No "click here", "read more", "view" or "explore".
  The content audit checks for these and reports 0 generic anchors.
- **Verified destinations.** 0 broken internal links across 194 pages.
- **No orphans.** 0 pages without an inbound link.

## The 309 preserved links

Every product page linked out from its imported body copy — 309 links across
141 destinations, generally the parent category plus one related product.
Rewriting 158 products by hand would have dropped all of them silently, one
product at a time, with nothing to catch it.

They were therefore frozen into `src/data/product-content/preserved-links.json`
**before** any copy was replaced, and the template renders them independently of
whatever the new content says. Verified after the rewrite: **309 of 309 still
present.**

New contextual links were added on top rather than replacing them.

## Most-linked destinations

| Page | Inbound body links |
|---|---|
| `/get-a-quote/` | 177 |
| `/product-category/kraft-food-packaging/` | 25 |
| `/product-category/kraft-gift-specialty-boxes/custom-gift-boxes/` | 25 |
| `/product-category/kraft-packaging-boxes/` | 21 |
| `/product/kraft-mailer-boxes/` | 19 |
| `/product/kraft-shipping-boxes/` | 17 |
| `/product/kraft-corrugated-boxes/` | 16 |
| `/product/kraft-bakery-boxes/` | 16 |
| `/product-category/kraft-gift-specialty-boxes/` | 15 |
| `/product/kraft-drawer-gift-boxes/` | 15 |
| `/product/kraft-box-with-window/` | 14 |
| `/product/kraft-take-out-boxes/` | 14 |
| `/product/kraft-food-boxes/` | 14 |
| `/product/kraft-gift-hamper-boxes/` | 14 |
| `/product/kraft-favor-boxes/` | 14 |
| `/product/kraft-candy-boxes/` | 14 |
| `/product/kraft-lid-base-rigid-boxes/` | 14 |
| `/product/kraft-paper-gift-boxes/` | 13 |
| `/product/kraft-jewelry-boxes/` | 13 |
| `/product/kraft-candle-boxes/` | 13 |

## Deliberate absences

- **No link loops built for SEO.** Reciprocal links exist only where both pages
  genuinely reference each other's subject.
- **Products are not in the footer.** Adding 162 links to every page would
  flatten the link graph and tell a crawler nothing.
- **The home page links to 20 products, not 162.** The remaining 142 are reached
  through `/products/` and their category, which is a more meaningful path than
  a wall of links.

