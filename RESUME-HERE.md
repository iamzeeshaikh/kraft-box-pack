# Resume here

Session ended 11 August 2026 on context limits. Everything below is committed
on `main`, working tree clean, **nothing pushed and nothing deployed**.

Last commit: `b8c666c` — Restore the imported product copy instead of replacing it.

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

All 50 top pages are rewritten, and the remaining 108 are in progress. Check
progress at any time with:

```
python3 scripts/rewrite-progress.py
```

It derives what is done from git rather than from a note — a product counts as
rewritten when its description differs from commit `581e3a0`, the last commit
before the rewrite began — so it cannot drift out of date.

### How a rewrite is done

1. `python3 scripts/rewrite-progress.py` for the next products by impressions.
2. Read the current copy for its **internal links and headings** — every link
   has to survive.
3. Write the new HTML, keeping the imported structure (h2/h3, ordered list,
   spec table, closing "Choose ..." paragraph).
4. `python3 scratchpad/setmany.py <file>` writes a dict of slug → HTML.
5. `python3 scratchpad/insert.py <file>` appends extra sections before the
   closing paragraph, where the page lands under 800 words. It always does —
   budget for one extension pass per page.
6. `python3 scripts/check-rewrite.py <slugs>` must pass.
7. Rebuild, then `python3 scripts/content-audit.py` — watch **multi-link
   paragraphs**, which new copy trips easily.

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

## Deferred by the client

- Quote form production test — **the highest-risk item**; SMTP is local-only
  and `api/quote.ts` only runs on Vercel, so the form has never been tested
  live.
- GA4 measurement ID. Must be set **before** a build, not just at runtime.
- Merchant Center, and whether to lift the feed from 158 to 162.
- Core Web Vitals field data.
- Purpose-shot photography for the four recreated products, which currently
  borrow from the media library.
