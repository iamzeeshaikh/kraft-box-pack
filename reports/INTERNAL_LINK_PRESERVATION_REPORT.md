# Internal link preservation report

Generated 2026-08-03 by `scripts/link-report.mjs`.

The baseline in `OLD_INTERNAL_LINK_BASELINE.csv` was captured by crawling the
live WordPress site before any content was changed. It is not regenerated.

| Measure | Count |
| --- | --- |
| Unique source→destination pairs on the old site | 3116 |
| Preserved unchanged | 2828 |
| Updated to a new destination | 0 |
| Removed | 288 |
| Added by the rebuild | 1159 |
| Total on the new site | 3987 |
| Orphan pages (nothing links to them) | 2 |
| Live pages whose inbound link count fell | 1 of 181 |

Preservation rate: **90.8%**
of the old link graph is either intact or repointed at the destination that
replaced it.

Pair-by-pair preservation understates the result, because the related-products
strip on a product page is chosen algorithmically and the old and new
selections differ. The measure that decides whether a page lost authority is
how many distinct pages link to it, and that is in
`INBOUND_LINK_COMPARISON.csv`: **180 of
181** live destinations have at least as many inbound
internal links as before.

## Updated links

_None._

## Removed links

- **40** — Source page retired (WooCommerce cart/checkout/account)
- **182** — Link not reproduced on the rebuilt page
- **66** — Destination does not exist (404 on the old site too)

Full detail is in `INTERNAL_LINK_REMOVED.csv`.

## Orphan pages

- https://kraftboxpack.com/410/
- https://kraftboxpack.com/thank-you/
