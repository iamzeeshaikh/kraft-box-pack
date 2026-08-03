# Claims migration report

Every factual claim the rebuilt site makes, and where it came from. The brief
required existing claims to be **preserved**, so nothing here was softened or
dropped — but nothing was invented either, and this table is the evidence for
each one.

## Claims carried over, with their source

| Claim | Where it appears now | Source in the exports |
| --- | --- | --- |
| Free shipping within the USA | Product specification tables | "Shipping" row of the products' own spec tables |
| 8-10 business day turnaround (rush available) | Homepage features, quote page, spec tables | "Turnaround Time" row of all 158 spec tables |
| Minimum order quantity 100 boxes | `Offer` schema, spec tables | "Minimum Order Quantity" row |
| Free design assistance | Homepage features, quote page, product pages | "Design Support" row; old footer service list |
| Digital proof and physical samples | Quote page steps | "Sample Availability" row |
| 100% recyclable and biodegradable | Product copy, spec tables | "Eco-Friendliness" row; migrated descriptions |
| FSC-certified papers | Product spec tables | "Eco-Friendliness" / material rows |
| Food-safe / direct food contact | Product spec tables | Spec table rows on food-packaging products |
| CMYK and PMS printing; offset, digital, screen | Homepage features, spec tables | "Printing Options" / "Printing Colors" rows |
| Matte, gloss, spot UV, soft-touch finishes | Spec tables, product copy | "Coating Options" / "Surface Finish" rows |
| 14pt–20pt board thicknesses | Spec tables | "Thickness" row |
| Wholesale pricing with bulk discounts | Product copy, quote page | "Pricing" row |
| 24/7 customer support | Migrated homepage copy | "Customer Support" row; old homepage copy |
| Round-the-clock availability, affordable pricing, experts' consultation, quick turnaround | Migrated homepage copy | Old homepage's own closing list, migrated verbatim |
| Phone +1-929-2141-874 | Header, footer, contact page, schema | Live site header and footer |
| info@kraftboxpack.com | Header, footer, contact page, schema | Live site header and footer |
| 1686 78th St, Brooklyn, New York, 11204 USA | Footer, contact page, `Organization` schema | Live site footer |
| Facebook and LinkedIn profiles | Footer, contact page, `sameAs` | Live site footer (upgraded `http:` → `https:`) |
| "Email Us To Get 25% OFF" | Utility bar | Live site utility bar |

## Claims **not** carried over

| Claim | Why |
| --- | --- |
| `aggregateRating` of the Schema plugin | The old site emitted a rating with **no reviews behind it**. A rating nobody left is a deceptive rich result and grounds for a Google manual action. Not reproduced. See `SEO_VALIDATION_REPORT.md`. |
| "Add to Cart" / "Buy Now" purchase affordance | There is no checkout on a static site, and with a 100-box minimum and placeholder pricing there was no real purchase path before either. Replaced with "Get a Quote", which is the action the business actually wants. |

## Wording written for the rebuild

Four short supporting sentences under the homepage feature icons were written
for this build, because the old site showed the icons with **titles only**. Each
one restates facts from the table above and asserts nothing new:

- *"Boxes built to your dimensions, with structural options for retail,
  e-commerce and gifting."* — from the "Available Sizes", "Box Styles" and
  "Usage" rows.
- *"Our team prepares your artwork and sends a digital proof before anything
  goes to press."* — from "Design Support" and "Sample Availability".
- *"Offset, digital and screen printing in CMYK or PMS, with matte, gloss and
  spot UV finishes."* — from "Printing Options", "Printing Colors" and
  "Coating Options".
- *"Standard turnaround is 8-10 business days, with rush production
  available."* — from "Turnaround Time".

Category pages without a WordPress description fall back to a generated
sentence naming the product count and repeating the turnaround and design
claims above. No category page states anything not already in this table.

## Deliberately absent

No certification, award, customer count, years-in-business figure, delivery
guarantee, price, discount or sustainability claim appears anywhere on the new
site unless it is in the table above. In particular there is no invented ISO
number, no "trusted by N brands", and no delivery promise beyond the 8-10
business days the exports state.
