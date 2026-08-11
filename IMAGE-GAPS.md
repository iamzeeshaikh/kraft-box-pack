# Image gaps

Audited across all 158 product pages and 4,791 rendered `<img>` elements.

## What is already correct

| Check | Result |
|---|---|
| Products with no image | **0** |
| Products with only one image | **0** |
| Images missing `width`/`height` | **0** — no layout shift from images |
| Images missing an `alt` attribute | **0** |
| Above-the-fold image lazy-loaded | **0** — the LCP image is never deferred |
| Gallery size | 3 images on 2 products, 4 on 45, 5 on 111 |

Every product image is served as WebP through Astro's pipeline with responsive
`srcset` and explicit dimensions. Total JavaScript across the whole site is
**4.1 KB**, so images are effectively the entire payload — which is the right
place for the weight to be on a packaging catalogue.

## The actual gaps

### Images shared between products

11 source images appear on more than one product page. Each is a genuine
near-duplicate rather than an unrelated stand-in, but a buyer comparing two
pages will see the same photograph twice.

| Image | Used by |
|---|---|
| `2024/10/Brown-Kraft-Boxes.jpg` | brown-kraft-boxes, kraft-coffee-packaging-boxes |
| `2024/10/Custom-Brown-Kraft-Boxes.jpg` | brown-kraft-boxes, kraft-coffee-packaging-boxes |
| `2024/10/Brown-Kraft-Packaging.jpg` | brown-kraft-boxes, kraft-coffee-packaging-boxes |
| `2026/01/Kraft-Box-packaging.jpg` | kraft-chemical-safe-boxes, kraft-recycled-kraft-boxes |
| `2026/01/Kraft-Recycled-Kraft-Boxes.jpg` | kraft-chemical-safe-boxes, kraft-recycled-kraft-boxes |
| `2026/01/Kraft-recycled-kraft-boxes-with-lids.jpg` | kraft-chemical-safe-boxes, kraft-recycled-kraft-boxes |
| `2026/01/Kraft-recycled-kraft-boxes-wholesale.jpg` | kraft-chemical-safe-boxes, kraft-recycled-kraft-boxes |
| `2026/01/Kraft-Paper-boxes-wholesale.jpg` | kraft-chemical-safe-boxes, kraft-recycled-kraft-boxes |
| `2026/01/Kraft-paper-tubes.jpg` | kraft-cylindrical-boxes, kraft-tube-packaging |
| `2026/01/Kraft-Tube-Packaging.jpg` | kraft-cylindrical-boxes, kraft-tube-packaging |
| `2026/01/Kraft-tube-packaging-wholesale.jpg` | kraft-cylindrical-boxes, kraft-tube-packaging |

None of these is a false representation — recycled kraft boxes and recycled
kraft boxes with lids genuinely look alike. They are listed so the business can
decide whether a distinct photograph is worth commissioning.

### Decorative assets that could be dropped

| Asset | Weight | Appears on | Note |
|---|---|---|---|
| `boxes-gif-unscreen.webp` | 169 KB | Feature strip, every page | Largest single non-product asset. Animated. Already reduced from a 1.5 MB GIF. |
| `payments.png` | 77 KB | Footer | Payment marks on a site that takes no payment — see BUSINESS-INFO-NEEDED.md |
| `certificate.png` | 20 KB | 190 pages | Unidentified certificate graphic |
| `payment-image.jpeg` | 9 KB | 159 pages | JPEG rather than WebP, and duplicates `payments.png` |

Dropping the payment and security graphics would remove roughly 110 KB from
every page load and resolve the credibility question at the same time. That is
a business decision, not a technical one.

### Photography needed — four products, blocking their Merchant feed entry

The four products recreated after the migration dropped them have **no
photography at all**. Rather than borrow another product's images and present
them as these, the galleries are empty and the products are **excluded from the
Google Merchant feed** — a feed item without an image is disapproved, and
Merchant listings are 44% of this site's organic clicks.

Their pages still build, are indexable and carry full written content, so the
ranking positions they still hold are recovered either way.

| Product | Impressions | Position | Shots needed |
|---|---|---|---|
| Kraft Diffuser Boxes | 251 | 24.8 | Carton with bottle and full-length reeds, showing the height relationship |
| Kraft Corporate Gift Boxes | 170 | 39.4 | Open box with a mixed set at a level height |
| Kraft DIY Kit Boxes | 59 | 7.1 | Open box showing a compartment per component |
| Kraft Cosmetic Serum Boxes | 49 | 13.8 | Carton beside a dropper bottle with the dropper seated |

Once photographed, add the files to `src/assets/products/` and the entries to
`images` in `products.json` — the feed picks them up automatically, since the
exclusion is driven by whether images resolve rather than by a list.

### Not requested from the business

No product is missing photography, so there is nothing to commission on that
count. The only images worth adding would be:

- Distinct photographs for the five duplicated pairs above.
- Diagrams for the blog posts. Several articles compare constructions in prose
  where a simple line diagram would do it better — box styles, flute profiles,
  how a shelf-ready perforation opens.

