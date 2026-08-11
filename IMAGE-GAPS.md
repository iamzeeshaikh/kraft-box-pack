# Image gaps

Audited across all 162 product pages and 4,921 rendered `<img>` elements.

## What is already correct

| Check | Result |
|---|---|
| Products with no image | **0** |
| Products with only one image | **0** |
| Images missing `width`/`height` | **0** — no layout shift from images |
| Images missing an `alt` attribute | **0** |
| Above-the-fold image lazy-loaded | **0** — the LCP image is never deferred |
| Gallery size | 3 images on 2 products, 4 on 47, 5 on 112, 6 on 1 |

Every product image is served as WebP through Astro's pipeline with responsive
`srcset` and explicit dimensions. Total JavaScript across the whole site is
**4.2 KB**, so images are effectively the entire payload — which is the right
place for the weight to be on a packaging catalogue.

## The actual gaps

### Images shared between products

12 source images appear on more than one product page. Each is a genuine
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
| `2025/12/kraft-marketing-kit-boxes.jpg` | kraft-corporate-gift-boxes, kraft-diy-kit-boxes |

That is four pairs of products. None of these is a false representation —
recycled kraft boxes and recycled kraft boxes with lids genuinely look alike,
and the last row is a borrowed shot on two of the recreated pages. They are
listed so the business can decide whether a distinct photograph is worth
commissioning.

### Decorative assets that could be dropped

| Asset | Weight | Appears on | Note |
|---|---|---|---|
| `boxes-gif-unscreen.webp` | 169 KB | Feature strip, every page | Largest single non-product asset. Animated. Already reduced from a 1.5 MB GIF. |
| `payments.png` | 77 KB | Footer | Payment marks on a site that takes no payment — see BUSINESS-INFO-NEEDED.md |
| `certificate.png` | 20 KB | 194 pages | Unidentified certificate graphic |
| `payment-image.jpeg` | 9 KB | 163 pages | JPEG rather than WebP, and duplicates `payments.png` |

Dropping the payment and security graphics would remove roughly 110 KB from
every page load and resolve the credibility question at the same time. That is
a business decision, not a technical one.

### Photography still worth commissioning — four products

The four products recreated after the migration dropped them had **no
photography of their own**. Their galleries now borrow the closest genuine kraft
formats already in the media library, so nothing is technically blocking them
from the Merchant feed any more. They are nonetheless **held out of it on the
client's instruction** (2026-08-11) — see `HELD_BACK` in
`src/pages/google-merchant-feed.xml.ts`. The feed stays at the 158 items
Merchant Center already has, which matters because a disapproved item is worse
than an absent one and Merchant listings are 44% of this site's organic clicks.

Two rules were applied when choosing the borrowed shots, and both matter if
these galleries are ever edited:

- **Alt text describes what the photograph actually shows**, not what the page
  sells. Nothing claims to be the exact product.
- **Nothing carries printed branding that contradicts the page.** Beard-oil
  cartons were the closest structural match for the serum page and were pulled
  off it anyway, because the box has `BEARD` printed across the front.

| Product | Impressions | Position | Currently showing | Shots that would be better |
|---|---|---|---|---|
| Kraft Diffuser Boxes | 251 | 24.8 | Tall slim fragrance cartons and a vial set | Carton with bottle and full-length reeds, showing the height relationship |
| Kraft Corporate Gift Boxes | 170 | 39.4 | Ribboned gift box and sealed branded mailers | Open box with a mixed set at a level height |
| Kraft DIY Kit Boxes | 59 | 7.1 | Kraft boxes holding craft materials | Open box showing a compartment per component |
| Kraft Cosmetic Serum Boxes | 49 | 13.8 | Kraft carton with slim bottles in a fitted insert | Carton beside a dropper bottle with the dropper seated |

Once photographed, add the files to `src/assets/products/` and replace the
borrowed entries in `images` in `products.json`. The feed needs no change —
inclusion is driven by whether images resolve rather than by a list.

### Not requested from the business

Every product page now has a gallery, so nothing is blocking the feed. The
images still worth adding are:

- Purpose-shot photography for the four recreated products above, which
  currently borrow.
- Distinct photographs for the four duplicated pairs above.
- Diagrams for the blog posts. Several articles compare constructions in prose
  where a simple line diagram would do it better — box styles, flute profiles,
  how a shelf-ready perforation opens.

