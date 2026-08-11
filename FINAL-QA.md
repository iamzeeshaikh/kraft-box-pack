# Final QA

Everything below was measured against the built site in `dist/client`, not
inferred from the source. Reproduce with the commands listed against each item.

## Build and types

| Check | Result | Command |
|---|---|---|
| Type check | **0 errors** across 84 files | `npx astro check --minimumSeverity error` |
| Production build | **190 pages**, no warnings | `npm run build` |
| JavaScript shipped | **4.1 KB total** across the whole site | `find dist/client/_astro -name "*.js"` |

## Content

| Check | Result |
|---|---|
| Duplicate titles | **0** |
| Duplicate meta descriptions | **0** |
| Duplicate H1s | **0** |
| Pages with more than one H1 | **0** |
| Pages with more than one footer | **0** |
| Product pages above 20% body similarity | **0 pairs** of 158 |
| Category pages above 20% body similarity | **0 pairs** of 16 |
| Blog pages above 20% body similarity | **0 pairs** of 5 |
| Identical FAQ sets | **0** |
| Identical heading sequences | **0** |
| Duplicated paragraph instances | 198 (from a floor of shared business facts) |
| Thin pages under 600 words | 7 — all legal or index pages |

`python3 scripts/content-audit.py`

## Links

| Check | Result |
|---|---|
| Broken internal links | **0** |
| Orphan pages | **0** |
| Paragraphs with more than one internal link | **0** |
| Generic anchors ("click here", "read more") | **0** |
| Preserved links from the imported copy | **309 of 309 intact** |
| Redirects | 27, **0 chains**, none to the homepage |

## Schema

| Check | Result |
|---|---|
| FAQ schema matching visible questions | **0 mismatches** across every page with FAQs |
| Pages with more than one FAQPage node | **0** |
| Missing canonical | **0** |
| Missing schema | **0** |
| Product schema | Name, image, URL, SKU, description, Offer, shipping — matches page data |
| AggregateRating | **Not present.** No verified review data exists; none is fabricated. |

## Layout, at 1440px and 390px

44 page/viewport combinations across every page type — home, products index,
quote, contact, about, thank-you, blog index, two categories, nine products,
one article, three policy pages.

**0 issues.** No horizontal overflow, exactly one footer and one H1 per page,
no empty tall sections, no vertical gap above 180px, no heading breaking
mid-word.

## Accessibility

Checked on home, a product page, a category page and the quote page:

| Check | Result |
|---|---|
| Exactly one H1 | Pass on all |
| Heading level skips | **None** |
| Landmarks (main, nav, header, footer) | Present on all |
| Skip link | Present |
| `:focus-visible` styling | Present |
| Inputs without a label | **0** |
| Links without discernible text | **0** |
| Buttons without an accessible name | **0** |
| Images without `alt` | **0** of 4,791 |
| Visible inputs below 16px | **0** — iOS will not zoom on focus |
| Reduced motion | Honoured; the 3D box stops and reveals resolve immediately |

## Images

| Check | Result |
|---|---|
| Total `<img>` elements | 4,791 |
| Missing `width`/`height` | **0** — no layout shift from images |
| Missing `alt` | **0** |
| Above-the-fold image lazy-loaded | **0** |
| Products with no image | **0** |
| Products with only one image | **0** |
| Images shared between products | 11 — listed in `IMAGE-GAPS.md` |

## Security

| Check | Result |
|---|---|
| SMTP credentials in the client bundle | **None** |
| `nodemailer` in the client bundle | **None** |
| Upload validation | Extension, size cap (8 MB) and magic-byte signature check |
| Upload filename | Rebuilt server-side, never passed through |
| Rate limiting | Per-instance, on the endpoint |
| Honeypot | Present, off-canvas and `aria-hidden` |
| Duplicate submission | Token-guarded, 10-minute window |
| Headers | HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy`, CSP `frame-ancestors 'none'` |

## Not verifiable from the repository

These need a deployed environment or an account, and are listed rather than
claimed:

- Actual form submission end to end — SMTP credentials are local-only and
  `api/quote.ts` only runs on Vercel. **The form has never been tested in
  production.**
- Core Web Vitals as field data. The build is favourable — 4.1 KB of JS, every
  image dimensioned, LCP never lazy — but real LCP, INP and CLS need a live
  origin.
- Merchant Center feed status and landing-page approval.
- Rich-results validation in Google's own tool.
- Whether Merchant Center site verification is current.

## Three false positives found in the audit tooling

Worth recording, because each one initially reported a defect that did not
exist and would have sent someone chasing it:

1. **Orphan pages.** Counting only body links reported five footer-linked pages
   as orphans. Fixed to count nav and footer.
2. **Broken links.** Matching on file extension flagged every stylesheet and
   favicon. Fixed to test whether the target exists on disk.
3. **Identical FAQ sets.** Matching `<summary>` counted the footer accordions,
   and `<summary><span>` additionally counted the quote form's specification
   disclosure. Fixed by anchoring to the FAQ component's own class.

A fourth appeared in the layout probe: screen-reader-only headings are 1px wide
by design and were being reported as headings breaking mid-word. Skipped.
