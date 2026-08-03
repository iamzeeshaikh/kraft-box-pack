# Internal link preservation report

Generated 2026-08-03 by `scripts/link-report.mjs`.

The baseline in `OLD_INTERNAL_LINK_BASELINE.csv` was captured by crawling the
live WordPress site before any content was changed. It is not regenerated.

| Measure | Count |
| --- | --- |
| Unique source→destination pairs on the old site | 3116 |
| Preserved unchanged | 2767 |
| Updated to a new destination | 0 |
| Removed | 349 |
| Added by the rebuild | 1063 |
| Total on the new site | 3830 |
| Orphan pages (nothing links to them) | 2 |
| Live pages whose inbound link count fell | 4 of 181 |

Preservation rate: **88.8%**
of the old link graph is either intact or repointed at the destination that
replaced it.

Pair-by-pair preservation understates the result, because the related-products
strip on a product page is chosen algorithmically and the old and new
selections differ. The measure that decides whether a page lost authority is
how many distinct pages link to it, and that is in
`INBOUND_LINK_COMPARISON.csv`: **177 of
181** live destinations have at least as many inbound
internal links as before.

## Updated links

_None._

## Removed links

- **243** — Link not reproduced on the rebuilt page
- **40** — Source page retired (WooCommerce cart/checkout/account)
- **66** — Destination does not exist (404 on the old site too)

Full detail is in `INTERNAL_LINK_REMOVED.csv`.

## Orphan pages

- https://kraftboxpack.com/410/
- https://kraftboxpack.com/thank-you/

## Home page product listing, changed after review

The old home page linked to all 158 products. At the owner's request it now
lists the **twenty most-viewed**, ranked by the page-view counter the old site
kept for every product — the only real demand signal in the exports, since
WooCommerce's "featured" flag is unset on all 158 and `total_sales` is
populated for only ten.

The 138 products no longer linked from the home page each lose one inbound
internal link. They remain linked from `/products/`, from their category
page, and from the related-products strips, so:

- **no product page became unreachable** — every one still has at least one
  inbound internal link
- destinations whose inbound count fell went from 1 to 4 out of 181
- the orphan count is unchanged at 2, both deliberately noindex
  (`/thank-you/` and `/410/`)

A "View all 158 kraft boxes" link sits directly beneath the grid, so the full
catalogue is one click from the home page.
