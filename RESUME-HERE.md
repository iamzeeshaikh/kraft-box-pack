# Resume here

Session ended 13 August 2026. Everything below is committed on `main`,
working tree clean, **nothing pushed and nothing deployed**.

The product-copy rewrite is **complete** — all 158 products, verified by
`python3 scripts/rewrite-progress.py`, which derives "done" from git rather
than from this note.

## Where the work stands

All eight phases are complete and verified locally:

| Check | Result |
|---|---|
| Pages built | 194 |
| Products | 162 |
| `astro check` | 0 errors, 87 files |
| `scripts/qa.mjs` | 2938 passed, 0 failed |
| `scripts/a11y.mjs` | 145 passed, 0 failed |
| Content audit | 0 duplicate titles/descs, 0 similar pairs, 0 broken links, 0 orphans |
| Merchant feed | 158 items — deliberately held, see `HELD_BACK` in the feed route |

Preview with `npm run build && node scripts/preview-server.mjs`, then
http://localhost:4321. Restart the server after a rebuild or it serves stale
output.

## Where the rewrite stands

Finished — 158 of 158, 164,231 impressions. Confirm at any time with:

```
python3 scripts/rewrite-progress.py
```

It derives what is done from git rather than from a note — a product counts as
rewritten when its description differs from commit `581e3a0`, the last commit
before the rewrite began — so it cannot drift out of date. It now reports
`nothing left.`

Every page is 800-1000 words, keeps every internal link the import carried,
names its own subject in its own headings, and shares no twelve-word paragraph
with any other product. `scripts/check-rewrite.py` enforces all four and passes
on all 158.

### How a rewrite was done, if more products are ever added

1. `python3 scripts/rewrite-progress.py` for the next products by impressions.
2. Read the current copy for its **internal links and headings** — every link
   has to survive.
3. Write the new HTML, keeping the imported structure (h2/h3, ordered list,
   spec table, closing "Choose ..." paragraph).
4. `python3 scratchpad/setmany.py <file>` writes a dict of slug → HTML. It
   refuses payloads with unbalanced tags — an unclosed `<li>` renders as a
   nested list rather than an error, so nothing downstream catches it.
5. `python3 scripts/check-rewrite.py <slugs>` must pass. Writing ~900 words up
   front avoids the extension pass the earlier sessions needed.
6. Rebuild, then `python3 scripts/content-audit.py` — watch **multi-link
   paragraphs**, which new copy trips easily.

The `scratchpad/` helpers are gitignored and do not survive a session; they are
quick to rewrite from this description.

### What check-rewrite.py guards

Word count 800-1000 (the client's target), no dropped internal link, the page
must name its own subject in its own headings, and no paragraph of twelve
words or more shared with another product. Self-links are exempt, and
vercel.json redirects are resolved before comparing.

It has caught real problems repeatedly — two drawer pages sharing paragraphs,
corrugated and shipping ending on the same sentence, and my own copy putting
two internal links in one paragraph.

## Client rules that still apply

- **Do not deploy.** Local review first.
- Keep FSC, food-safe and free-shipping claims. Keep the existing trust badges
  and payment marks as they are.
- One lead time everywhere: 8-10 business days.
- Do not touch the shipping, refund, terms or privacy pages.
- **Refresh the content, never replace it.** The imported copy is the body and
  the written sections add to it. Rendering one instead of the other once cut
  the median product from 1,356 words to 141 and pulled 467 contextual links
  out of their sentences.
- Do not change the design — improve within it.
- **US spelling.** The site is `country: 'US'` with USD pricing and American
  product names. An earlier pass drifted into British spelling across the whole
  site and was reverted in `ea8bdfb`; do not reintroduce it.

## Deferred by the client

- Quote form production test — **the highest-risk item**; SMTP is local-only
  and `api/quote.ts` only runs on Vercel, so the form has never been tested
  live.
- GA4 measurement ID. Must be set **before** a build, not just at runtime.
- Merchant Center, and whether to lift the feed from 158 to 162.
- Core Web Vitals field data.
- Purpose-shot photography for the four recreated products, which currently
  borrow from the media library.
