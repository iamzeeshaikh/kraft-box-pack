# Changelog

Rebuild of kraftboxpack.com, August 2026. Everything here is on `main` and
**not deployed** — the business asked to review locally first.

Preview: `npm run build && node scripts/preview-server.mjs`, then
http://localhost:4321. Restart the server after a rebuild or it serves the old
output. Not `npx serve -s`, which is SPA mode and returns the homepage for
every URL.

## Constraints the business set

- Keep FSC claims. Keep food-safe and free-shipping claims.
- One lead time everywhere: **8-10 business days**.
- Do not touch the shipping, refund, terms or privacy pages.
- **Preserve every existing internal link.** Add new ones, never remove.
- Do not change the design — improve within it.
- All 158 products want hand-written content, no generation.

All six were followed. Where a claim could not be evidenced it was flagged in
`BUSINESS-INFO-NEEDED.md` rather than removed.

## URLs and redirects

- Reconciled 294 Search Console landing pages against 194 built routes. Every
  URL in the gap classified — see `MIGRATION-RECONCILIATION.md`.
- **12 one-to-one 301s added**, recovering product URLs that were returning 404
  while still ranking: `kraft-craft-kit-boxes` at position 1.8,
  `kraft-counter-display-stands` at 2.1, `kraft-pill-boxes` at 5.0.
- Six uppercase URL variants 301'd to lowercase.
- Two legacy WordPress pagination URLs 301'd to their category.
- **Merged the misspelled cosmetic category.** `karft-cosmetic-boxes` (9
  products, position 43.1) merged into `kraft-cosmetic-boxes` (2 products,
  position 15.6); nine products moved, route removed, 301 added, and all 11
  internal references in product body copy updated.
- 28 redirects total, **0 chains**, none pointing at the homepage.
- 95 legacy `/wp-content/uploads/*.jpg` URLs deliberately left to 404 —
  redirecting an image to an HTML page is a soft-404 pattern.

## Metadata

- **38 pages rewritten by hand.** The site sat at 0.76% CTR with 59 pages above
  500 impressions under 1%.
- The generated titles carried stray spaces before commas, a missing space
  before a pipe, the meaningless "KBP" contraction, and interchangeable
  Order/Buy/Shop/Get stems. Descriptions ran past 150 characters and truncated.
- `scripts/check-seo-overrides.mjs` enforces 50-60 character titles, 120-130
  character descriptions, no colons, no banned wording, no duplicates, and
  refuses any route absent from the build.

## Content

- **The imported copy is the body; the written sections add to it.** This was
  briefly the other way round — written content *replaced* the import, which cut
  the median product page from 1,356 words to 141 and pulled every contextual
  link out of its sentence into a list at the foot of the page. The brief was to
  refresh the copy and add value, not to substitute a summary for it. Both now
  render: the imported prose keeps its headings, spec tables and inline links
  exactly where they were, and the written sections follow as the
  product-specific detail. Description panel: **1,517 words median**, with
  **630 internal links inline**, a median of four per product.
- **All 162 products carry hand-written detail** on top of that — sections
  chosen for that product, a contextual link and ten product-specific FAQs.
  Product body similarity above 20%: **0 pairs**.
- **The four recreated products have galleries.** None had photography of its
  own, so each borrows the closest genuine kraft format already in the media
  library. Alt text describes what the photograph shows rather than claiming to
  be the product, and no borrowed shot carries printed branding that contradicts
  its page — beard-oil cartons were the closest structural match for the serum
  page and were rejected because the box reads `BEARD`. Products with no image:
  **4 → 0**. The feed is deliberately **held at 158 items** on the client's
  instruction — the four are listed in `HELD_BACK` in the feed endpoint, and
  emptying that list is all it takes to send them.
- **The analytics layer was blocked by the site's own CSP on every page.** It
  used `define:vars`, which forces `is:inline`, and Astro emits no CSP hash for
  an inline script — so `dataLayer` was never created and not one of the twelve
  events ever fired, in production or locally, while the source read correctly.
  The values now travel through `<meta name="kbp:page-type">` tags into a
  bundled script. Verified by reading `window.dataLayer` on eight pages.
- **Google's tag origins were missing from the CSP**, so setting `PUBLIC_GA4_ID`
  would have got the tag blocked too. They are now added by
  `astro.config.mjs` when the variable is set, and left out when it is not.
- **The 3D box was rendering at the wrong size.** It carried
  `style="--box: 180px"`, an inline style the CSP refuses, so it silently fell
  back to 190px. Size is now a variant class. Measured: 360×342, which is the
  180px the component asks for.
- **CSP violations across the site: 5 → 0.**
- **All 16 category pages written.** They had imported with empty descriptions,
  so the template fell back to one generated sentence and all of them read
  alike. Category similarity: **136 pairs → 0**.
- **Kraft Toy Packaging deepened** — it was the thinnest content page on the
  site at 621 words against a 1,127-word ceiling. Search Console showed why it
  was worth the time: "board game shipping box" sits at 87 impressions and
  position 23.4 with no clicks, and "blank"/"replacement board game boxes"
  convert at high CTR. Nothing on the page addressed either. It now separates
  the retail game box from the corrugated outer a game ships in, says plainly
  that reprint runs start at the 100-unit minimum so a single lost lid is not
  something this route serves, and carries a structure table. 621 → 1,162 words.
  Thin pages: **7 → 6**.
- **About Us rewritten**, 253 → 1,134 words. The imported copy was generic
  sustainability prose that answered nothing a buyer asks before enquiring, and
  it printed a live `[elementor-template id="2174"]` shortcode as visible text —
  the export carried the shortcode without the plugin that resolves it. It now
  covers how an order works, what the structures actually are, and a "what we do
  not do" list: no single boxes, no stock sizes, no checkout, and the returns
  exclusion on custom-printed work. Sustainability is stated with its limits —
  laminate, window film or foil breaks the recyclability the plain board has.
- **FAQs added to the four pages that had none** — About, Contact, Get a Quote
  and the products index, ten each, with FAQPage schema. Pages under ten FAQs:
  **4 → 0**. Two questions that collided with existing ones were rewritten, so
  duplicated FAQ questions stayed at their previous floor rather than rising.
- **Home page** gained Industries, Customization, Process, ten FAQs and a
  closing quote band. Hero copy replaced — it had led with an environmental
  slogan over a lead that ended mid-sentence.
- **Blog posts** gained ten FAQs each, written from the article rather than
  reused from the matching product page, plus an optional reviewed date.
- **Lead time normalised.** Sixteen different figures across the imported 158
  products became one. The build now contains 411 occurrences of "8-10 business
  days" and no other turnaround figure anywhere.
- **Search-query fragments removed** — "kraft bakery boxes near me", "kraft box
  with window amazon alternatives" — now zero.

## Internal linking

- **All 467 of the imported copy's internal links are back in their sentences.**
  They were nearly lost: written content briefly replaced the imported copy, and
  a frozen list at the foot of each page kept 309 of them from 404ing. That
  audit reported "309 of 309 intact" — but it was measuring against the frozen
  list, not against the original, which held 467. The imported copy now renders
  in full and the links are inline again where they belong.
- New contextual links added on top, one per section, descriptive anchors only.
- `relatedProducts` had an alphabetical tiebreak, so every product in a category
  surfaced the same four siblings — 35 groups of pages shared an identical
  outbound link set. Authored pairs now lead. Down to 1 group.

## Design

Unchanged palette, tokens and type scale. Added within the existing language:

- Scroll reveal on transform and opacity only, with an eight-second failsafe and
  a print override so content can never stay hidden.
- A CSS 3D kraft box — six transformed faces, no library, pauses off-screen,
  static under reduced motion.
- Section padding reduced where it was resolving to its ceiling.
- **Fixed a site-wide horizontal overflow on laptop widths.** The desktop menu
  needs about 1,050px beside the 259px wordmark, but the burger handed over at
  1040px — so from 1041px to roughly 1400px the navigation ran past the viewport
  and **every page scrolled sideways**, including at 1280px, the commonest
  laptop width there is. The responsive QA sampled 1024px and 1440px, the two
  widths either side of the broken range, which is why it went unseen. The
  burger now holds until 1366px where the menu genuinely fits, the nav spacing
  and type were tightened slightly to give it headroom, and 1280 and 1366 were
  added to the QA viewport list. Verified: no overflow at any of seventeen
  widths from 360px to 1920px.

## Quote system

- Optional specification step: dimensions, unit, quantity, material, printing,
  finish, needed-by date, delivery ZIP.
- Attribution captured client-side: landing page, referrer, campaign
  parameters, device class. Printed at the foot of the internal email.
- Duplicate-submission token so a retried request cannot send twice.
- Acknowledgement email to the sender, which cannot fail the request.
- Analytics events, success tracked only after server confirmation.

## Analytics

Event layer built and running; **no measurement ID is configured**. Set
`PUBLIC_GA4_ID` and it activates with no other change. See `ANALYTICS.md`.

## Not changed, deliberately

- Review markup. The old site's review snippets drove 87k impressions and were
  removed during the original migration. They are **not** recreated — no
  verified review data exists and fabricating ratings is not an option.
- The refund, returns, terms and privacy pages.
- FSC, food-safe and free-shipping claims.
- The "Email Us To Get 25% OFF" promotional strip.
- Trust badges — flagged for a decision rather than removed.

## Documents produced

`MIGRATION-RECONCILIATION.md`, `PRODUCT-AUDIT.md`, `INTERNAL-LINK-MAP.md`,
`ANALYTICS.md`, `MERCHANT-CHECKLIST.md`, `IMAGE-GAPS.md`,
`BUSINESS-INFO-NEEDED.md`, `FINAL-QA.md`.
