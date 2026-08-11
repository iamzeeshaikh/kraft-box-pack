# Business information still needed

Everything below is either a claim the site makes that the project files do not
evidence, or a decision only the business can make. Nothing here has been
removed or invented — it is listed so it is visible.

## Claims the business has confirmed it stands behind

These stay on the site at the business's explicit instruction. The paperwork is
not in the project files, so it is worth filing somewhere retrievable in case a
buyer, a Merchant Center review or an advertising standards query asks.

| Claim | Where it appears | What would substantiate it |
|---|---|---|
| FSC certification | 36 product pages | Certificate number, issuing body, expiry date |
| Food-safe / food-contact | 68 product pages | Board and ink grade documentation per stock |
| Free shipping | Feature strip, 37 product pages | Any threshold, territory limit or exclusions |

## Claims with no supporting detail anywhere

| Claim | Where it appears | Question |
|---|---|---|
| "Round the clock availability" | Feature strip | What hours are actually staffed? A published 24/7 claim invites contact at 3am. |

## Trust badges to confirm or retire

The site displays these. None of them is evidenced in the project files, and a
badge that cannot be substantiated is a liability rather than a credential.
**They have been left in place** rather than removed unilaterally — the
decision is the business's.

| Badge | Asset | Needed |
|---|---|---|
| ISO / FSC lockup | `public/art/iso-fsc.webp` | Certificate numbers and expiry for each |
| DMCA | `public/art/dmca.png` | Whether a DMCA Protected subscription is current |
| SSL / secure connection | `public/art/ssl.png`, `secure-icons.png` | These depict security rather than prove it. HTTPS and HSTS are genuinely in place; the graphics add nothing and could be dropped without loss. |
| Certificate graphic | `public/art/certificate.png` (190 pages) | What certificate this represents |
| FedEx | `public/art/fedex.png` | Whether a carrier partnership is contractual or the logo is decorative |
| Payment marks | `payments.png`, `payment-methods.png`, `payment-image.jpeg` | Whether card payment is actually accepted, given the site is quote-based with no checkout |

The payment badges are worth a specific look. The site takes no payment — it is
quote-based, and `/cart` and `/checkout` both redirect away. Showing Visa,
Mastercard and PayPal marks on a page with no checkout is confusing at best.

## Decisions needed

1. **GA4 or Tag Manager ID.** The event layer is built and running; nothing is
   sent because no property exists. See `ANALYTICS.md`.
2. **Consent handling.** No consent banner is implemented. Required before
   analytics runs for visitors in jurisdictions that mandate prior consent.
3. **The 25% off promotion.** `PROMO` in `src/data/site.ts` puts "Email Us To
   Get 25% OFF" across the top of every page. It is the business's own standing
   offer so it has been left, but a permanent discount banner reads as a
   permanent discount rather than an offer.
4. **Merchant Center verification status.** Not recorded in the project files.
   See `MERCHANT-CHECKLIST.md`.
5. **Reviews.** No verified review data exists and none is fabricated. The
   review-snippet markup the old WordPress site carried was removed during
   migration and has not been recreated. If genuine reviews are collected, they
   should appear as visible text on the page, not only inside structured data.

## Lost products worth a decision

Ten product pages were dropped in the WordPress migration and several still
rank. Five have been redirected to the live page serving the same intent. Four
have distinct demand and no equivalent, so they currently 404:

| URL | Impressions | Position |
|---|---|---|
| `/product/kraft-diffuser-boxes/` | 251 | 24.8 |
| `/product/kraft-corporate-gift-boxes/` | 170 | 39.4 |
| `/product/kraft-diy-kit-boxes/` | 59 | 7.1 |
| `/product/kraft-cosmetic-serum-boxes/` | 49 | 13.8 |

Each is a product the business plausibly makes. Confirm whether to recreate
them as pages or redirect them to the closest live product.
