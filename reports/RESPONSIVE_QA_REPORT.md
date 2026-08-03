# Responsive and accessibility QA report

Run by `scripts/a11y.mjs` in headless Chromium against the deployed build.
**127 checks, 0 failures.**

## Viewports tested

| Width | Notes |
| --- | --- |
| 360px | Smallest common Android |
| 390px | iPhone 14/15 |
| 768px | Tablet portrait |
| 1024px | Tablet landscape / small laptop |
| 1440px | Desktop |

Nine representative pages were checked at each: home, all-products, a product,
a category, the quote page, contact, about, privacy policy and 404.

## Horizontal overflow

No page scrolls sideways at any width. Elements genuinely wider than a phone —
the specification tables and the comparison tables inside product descriptions —
are wrapped in their own `overflow-x: auto` container, so the table scrolls and
the page does not.

This was a real defect found during QA: 446 tables inside migrated product
descriptions had no scroll container and were forcing the whole page sideways
at 360px. All 446 are now wrapped.

## Colour contrast

Every text node is measured against its computed background. All pass WCAG 2.2
AA (4.5:1 for body text, 3:1 for large text).

Three contrast defects were found and fixed:

| Element | Before | After |
| --- | --- | --- |
| Required-field asterisk on the dark footer form | 2.08:1 | passes |
| Footer copyright line on the kraft band | 4.41:1 | passes |
| Muted body text (`#767676`) | 4.54:1 | `#63676c`, 5.7:1 |

## Tap targets

Every interactive control is at least 24×24px, per WCAG 2.2 target size, with
44px used for the primary ones. Links inside a sentence are exempt under the
spec and are excluded from the check.

The hamburger button is a full 44×44px — the old site collapsed its menu
trigger to a much smaller area.

## Structure

Checked on every page:

- exactly one `<main>` landmark
- exactly one `<h1>`
- `lang="en"` on `<html>`
- a working skip link
- every form control has a label
- no link without an accessible name

Heading order is checked separately by `scripts/qa.mjs` across all 186 pages:
no page skips a level. Several migrated pages jumped `h2` → `h4` and were
re-levelled.

## Interactive components under the production CSP

The site ships `script-src 'self'` with hashes for Astro's inlined chunks. On
the previous migration this silently broke every interactive component in
production while they worked locally, so each is now exercised in a browser
against the deployed build:

- product tabs switch panels, and hide the inactive ones
- gallery thumbnails swap the main image
- FAQ accordion items expand
- the mobile menu opens, and closes on Escape
- the quote form flags an empty required field

**Zero CSP violations** were logged during any of these.

## Mobile layout change

On phones the hero previously placed a seven-field quote form above the `<h1>`,
so a visitor was asked to fill something in before being told what the site
sells. The heading and product imagery now come first on narrow screens; the
desktop layout, which shows both side by side, is unchanged.
