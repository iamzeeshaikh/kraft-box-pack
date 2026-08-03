# Migration conflicts and judgement calls

Every place where the source data was ambiguous, self-contradictory or already
broken, and what was done about it. Nothing in this list was resolved silently.

## 1. Two categories with the same name

WordPress published two `product_cat` terms both named **Kraft Cosmetic Boxes**:

| Slug | URL | Products |
| --- | --- | --- |
| `kraft-cosmetic-boxes` | `/product-category/kraft-cosmetic-boxes/` | 2 |
| `karft-cosmetic-boxes` | `/product-category/kraft-packaging-boxes/karft-cosmetic-boxes/` | 9 |

The second slug is a typo ("karft"). Both URLs are live, both are linked to from
product descriptions, and both are in the old sitemap.

**Decision:** keep both at their original URLs so no link breaks, and give the
misspelt one a canonical pointing at the correctly-spelled category. Deleting
either would break live links; leaving both indexable would put two pages with
the same name in competition.

## 2. The `/products/` page listed products from a different site

The old `/products/` page contained a hand-written list of **29 "Burger Boxes"
products** — Red Burger Boxes, Corrugated Burger Boxes, Styrofoam Burger Boxes
and so on. This is not a kraft-box range and does not correspond to anything in
the catalogue. Every one of those 29 URLs returns **404 on the live site**.

**Decision:** the stale list is dropped. The rebuilt `/products/` page is
generated from the product data and lists all 158 real products. Carrying the
list across would have shipped 29 known-broken links on a brand-new site.

Recorded in `EXCLUDED_FILES_REPORT.csv`.

## 3. Ten product links in descriptions point at products that do not exist

Product descriptions contain links to eleven URLs (ten distinct) that 404 on the
live site — they reference products that were never published:

`kraft-craft-kit-boxes`, `kraft-menu-packaging-boxes`,
`kraft-minimalist-kraft-boxes`, `Kraft-Cosmetic-Serum-Boxes`,
`kraft-corporate%20gift-boxes`, `kraft-diy-kit-boxes`,
`kraft-counter-display-stands` (×2), `kraft-pill-boxes`,
`kraft-clothing-packaging-boxes`, `Kraft-Diffuser-Boxes`.

**Decision:** the anchor is removed and its text kept, so the sentence still
reads correctly but no broken link ships. Deleting the sentence would have lost
genuine copy.

## 4. Category and product links written with display-name casing

116 links inside product descriptions were written using the category's display
name rather than its slug — `/product-category/Kraft-Gift-&-Specialty-Boxes/`,
`/product/Kraft-Perfume-Boxes/`, and so on. WordPress resolved these because its
term lookup is case-insensitive, so they are live 200s. A static host matches
paths exactly and would 404 every one.

**Decision:** rewritten to the canonical URL in the content, **and** 301
redirects added for the variants so any external link still resolves. See
`REDIRECT_MAP.csv`.

## 5. Prices are per-unit placeholders

Every product carries a `Regular price` of **$0.30**. For made-to-order
packaging with a 100-box minimum this is a starting per-unit figure, not a
purchasable price.

**Decision:** the figure is preserved in `Product` schema, but qualified with a
`UnitPriceSpecification` stating the unit ("per box") and the 100-box minimum,
so the markup cannot be read as "one box for thirty cents". No price is shown as
a headline on the page; the call to action is a quote.

Nothing here was invented — the minimum comes from the "Minimum Order Quantity"
row of the products' own specification tables.

## 6. WooCommerce cart and checkout have no static equivalent

The old site had `/cart/`, `/checkout/` and `/my-account/`. A static site cannot
run WooCommerce, and with placeholder pricing and a 100-unit minimum the
business model is quotation, not checkout. The old site's own hero was already a
"Get A Quick Quote" form.

**Decision:** `/cart/` and `/checkout/` 301 to `/get-a-quote/`; `/my-account/`
301s to `/contact-us/`. "Add to Cart" buttons become "Get a Quote". Recorded in
`REDIRECT_MAP.csv` and `URL_MAPPING.csv`.

## 7. The homepage showed the same feature twice

The old homepage's four feature boxes read: "Custom Design, Sizes & Style",
**"Custom Design, Sizes & Style"**, "High Quality Offset Printing", "Fast
Shipping 8-10 Business Days" — the first is duplicated, leaving only three
distinct points.

**Decision:** the second slot is given to **free design assistance**, which is
the business's own claim: it appears in the "Design Support" row of all 158
specification tables and in the old footer's list of services. Nothing was
invented to fill the gap.

## 8. Three products have no usable primary image

- `kraft-coffee-packaging-boxes` — no images in the export, and none on the live
  page either. Renders without a gallery.
- `kraft-cylindrical-boxes` — same.
- `kraft-hanging-display-boxes` — its WordPress thumbnail
  (`euro-slot-hanging-boxes.jpg`) returns **410 from the old server**, but its
  four gallery images are fine. The page and its card use the first image that
  actually resolves.

**Decision:** no placeholder graphics were invented. Two pages show no gallery;
that matches the old site.

## 9. Six descriptions opened with an `<h1>`

Six product descriptions began with an `<h1>` carrying `data-start`/`data-end`
attributes — residue from whatever drafted the copy. A second H1 competes with
the product name and breaks the heading outline.

**Decision:** demoted to `<h2>`. Dropping the tag would have left the text
unwrapped and looking like a stray sentence.

## 10. Heading levels skipped a step

Several migrated pages jumped from `h2` straight to `h4`, because levels were
chosen for appearance rather than structure.

**Decision:** re-levelled so no heading is more than one below the previous. The
visual hierarchy is unchanged; the outline is now navigable.

## 11. Literal `\n` sequences throughout the product copy

Descriptions contained the two-character sequence `\n` alongside real newlines —
an artefact of how the copy was pasted, carried through the WooCommerce export.
Left alone it would print literally, and it hid the paragraph breaks.

**Decision:** normalised to real newlines before paragraphs are formed. All 158
descriptions now render as paragraphs rather than one block of text.

## 12. Sixteen unpublished products and the transactional pages

13 draft products and the cart / checkout / my-account pages were not migrated.
Drafts never had a public URL. Listed in `EXCLUDED_FILES_REPORT.csv`.

## 13. Related products are chosen differently

WooCommerce varied its related-products selection; the rebuild picks
deterministically so a rebuild reproduces the same pages. The window rotates per
product rather than always taking the first eight of a category, because taking
the head every time concentrated inbound links on the alphabetically-early
products and measurably lost links against the old site.

Result: **180 of 181** destinations have at least as many inbound internal links
as before. The one exception is `/product/kraft-thermal-kraft-boxes/`, down from
10 to 9. See `INTERNAL_LINK_PRESERVATION_REPORT.md`.
