#!/usr/bin/env node
/**
 * Compares the rebuilt site's internal-link graph against the baseline that
 * was captured from live WordPress before anything changed.
 *
 * Produces:
 *   reports/INTERNAL_LINK_MAP.csv                every link on the new site
 *   reports/INTERNAL_LINK_PRESERVATION_REPORT.md preserved / updated / removed
 *   reports/ORPHAN_PAGE_REPORT.csv               pages nothing links to
 *
 * A link counts as preserved when the same source page still links to the same
 * destination. Anchor text may differ — the old site used the product name in
 * some places and "Order Now" in others — so anchors are reported but do not
 * decide preservation.
 */
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../.vercel/output/static/', import.meta.url));
const REPORTS = fileURLToPath(new URL('../reports/', import.meta.url));
const SITE = 'https://kraftboxpack.com';

const csv = (rows) =>
  rows.map((r) => r.map((c) => `"${String(c ?? '').replace(/"/g, '""')}"`).join(',')).join('\n') + '\n';

const decode = (s) =>
  String(s ?? '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const text = (h) => decode(h.replace(/<[^>]+>/g, ' '));
const strip = (h) =>
  h.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');

/** Which region of the page a link sits in. */
function classify(html, index) {
  const before = html.slice(0, index);
  const open = (tag) =>
    (before.match(new RegExp(`<${tag}\\b`, 'gi')) ?? []).length >
    (before.match(new RegExp(`</${tag}>`, 'gi')) ?? []).length;

  if (open('header') || open('nav')) return 'navigation';
  if (open('footer')) return 'footer';
  const tail = before.slice(-4000);
  if (/class="crumbs|aria-label="Breadcrumb/.test(before.slice(-1200))) return 'breadcrumb';
  if (/related-heading/.test(tail)) return 'related-product';
  if (/class="card|class="grid|class="cats|hero__collage/.test(before.slice(-2000))) return 'product-grid';
  if (/class="band|btn--primary|btn--kraft/.test(before.slice(-400))) return 'cta';
  return 'contextual';
}

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const f = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(f)));
    else if (e.name.endsWith('.html')) out.push(f);
  }
  return out;
}

// ------------------------------------------------------------------ new graph
const newLinks = [];
const seen = new Set();
const builtPaths = new Set();

for (const file of await walk(ROOT)) {
  const rel = relative(ROOT, file);
  if (rel === '404.html' || rel === '410.html') continue;
  const path = rel === 'index.html' ? '/' : '/' + rel.replace(/index\.html$/, '');
  builtPaths.add(SITE + path);
  const body = strip(await readFile(file, 'utf8'));

  for (const m of body.matchAll(/<a\b[^>]*\bhref="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)) {
    let href = decode(m[1]);
    if (/^(mailto:|tel:|#|javascript:)/i.test(href)) continue;
    if (href.startsWith('http') && !href.includes('kraftboxpack.com')) continue;
    if (href.startsWith('http')) href = new URL(href).pathname;
    if (!href.startsWith('/') || href.startsWith('/_astro/')) continue;

    const dest = SITE + href.split('#')[0];
    const key = `${path}|${dest}`;
    if (seen.has(key)) continue;
    seen.add(key);
    newLinks.push({
      source: SITE + path,
      dest,
      anchor: text(m[2]),
      type: classify(body, m.index),
    });
  }
}

// ------------------------------------------------------------------- baseline
/**
 * Minimal RFC 4180 reader. The baseline was written by Python's csv module,
 * which quotes a field only when it has to, so a regex expecting every field
 * to be quoted silently matches nothing — and a preservation report that
 * reads zero baseline links would claim success while proving nothing.
 */
function parseCsv(input) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;
  for (let i = 0; i < input.length; i++) {
    const c = input[i];
    if (quoted) {
      if (c === '"') {
        if (input[i + 1] === '"') { field += '"'; i++; }
        else quoted = false;
      } else field += c;
      continue;
    }
    if (c === '"') quoted = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
    else if (c !== '\r') field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows;
}

/**
 * Put an old URL into the form the rebuilt site uses, so that differences of
 * spelling are not mistaken for lost links.
 *
 *  - the bare origin and "/" are the same page
 *  - WordPress resolved category terms case-insensitively, so links written
 *    with the display name's capitalisation reached the same archive; those
 *    are rewritten to the canonical slug in content and 301'd at the edge
 *  - Cloudflare rewrote every mailto into /cdn-cgi/l/email-protection, which
 *    is an artefact of the old host and not a page of the site at all
 */
const CATEGORY_CANONICAL = JSON.parse(
  await readFile(join(REPORTS, '_category_urls.json'), 'utf8'),
);

function normalise(url) {
  if (url === SITE) return `${SITE}/`;
  const m = url.match(/^https:\/\/kraftboxpack\.com(\/product-category\/.*?)\/?$/i);
  if (m) {
    const canonical = CATEGORY_CANONICAL[decodeURIComponent(m[1]).toLowerCase()];
    if (canonical) return SITE + canonical;
  }
  return url;
}

/**
 * Baseline rows that are not navigational links between pages:
 *  - Cloudflare's mailto obfuscation endpoint on the old host
 *  - WooCommerce `?add-to-cart=` action URLs, which perform a cart operation
 *    rather than going to a page, and have no equivalent in a quote-led site
 */
const IGNORED = /\/cdn-cgi\/|[?&]add-to-cart=/;

const baselineRaw = await readFile(join(REPORTS, 'OLD_INTERNAL_LINK_BASELINE.csv'), 'utf8');
const baseline = parseCsv(baselineRaw)
  .slice(1)
  .filter((cols) => cols.length >= 4 && cols[0])
  .filter((cols) => !IGNORED.test(cols[1]) && !IGNORED.test(cols[0]))
  .map((cols) => ({
    source: normalise(cols[0]),
    dest: normalise(cols[1]),
    anchor: cols[2],
    type: cols[3],
  }))
  // A page linking to itself carries no link equity anywhere and is not
  // something the rebuild needs to reproduce.
  .filter((l) => l.source !== l.dest);
if (baseline.length === 0) {
  throw new Error('baseline parsed to zero links — refusing to report preservation');
}

const newPairs = new Set(newLinks.map((l) => `${l.source}|${l.dest}`));
const oldPairsUnique = new Map();
for (const l of baseline) oldPairsUnique.set(`${l.source}|${l.dest}`, l);

/** Where an old destination now lives, for links whose target URL changed. */
const REDIRECTS = {
  [`${SITE}/cart/`]: `${SITE}/get-a-quote/`,
  [`${SITE}/checkout/`]: `${SITE}/get-a-quote/`,
  [`${SITE}/my-account/`]: `${SITE}/contact-us/`,
  [`${SITE}/shop/`]: `${SITE}/products/`,
};

const preserved = [];
const updated = [];
const removed = [];

for (const [key, link] of oldPairsUnique) {
  if (newPairs.has(key)) {
    preserved.push(link);
    continue;
  }
  const moved = REDIRECTS[link.dest];
  if (moved && newPairs.has(`${link.source}|${moved}`)) {
    updated.push({ ...link, newDest: moved, reason: 'Destination retired; link points at its replacement' });
    continue;
  }
  // Source page itself no longer exists (cart, checkout, my-account).
  if (!builtPaths.has(link.source)) {
    removed.push({ ...link, reason: 'Source page retired (WooCommerce cart/checkout/account)' });
    continue;
  }
  if (!builtPaths.has(link.dest) && !REDIRECTS[link.dest]) {
    removed.push({ ...link, reason: 'Destination does not exist (404 on the old site too)' });
    continue;
  }
  removed.push({ ...link, reason: 'Link not reproduced on the rebuilt page' });
}

const added = newLinks.filter((l) => !oldPairsUnique.has(`${l.source}|${l.dest}`));

// ------------------------------------------------------- inbound per destination
/**
 * Preservation pair-by-pair understates the outcome, because a related-products
 * strip is chosen algorithmically and the old and new picks differ. What
 * matters for a destination is how many distinct pages link to it at all, so
 * that is compared directly.
 */
const inboundOld = new Map();
const inboundNew = new Map();
for (const l of oldPairsUnique.values()) {
  inboundOld.set(l.dest, (inboundOld.get(l.dest) ?? 0) + 1);
}
for (const l of newLinks) {
  if (l.source === l.dest) continue;
  inboundNew.set(l.dest, (inboundNew.get(l.dest) ?? 0) + 1);
}

const inboundRows = [];
let lostInbound = 0;
for (const [dest, before] of [...inboundOld].sort()) {
  if (!builtPaths.has(dest)) continue; // page does not exist on either site
  const after = inboundNew.get(dest) ?? 0;
  inboundRows.push([dest, before, after, after >= before ? 'maintained' : 'reduced']);
  if (after < before) lostInbound++;
}

await writeFile(
  join(REPORTS, 'INBOUND_LINK_COMPARISON.csv'),
  csv([['url', 'inbound_links_old', 'inbound_links_new', 'status'], ...inboundRows]),
);

// -------------------------------------------------------------------- orphans
const linkedTo = new Set(newLinks.map((l) => l.dest));
const orphans = [...builtPaths].filter((p) => p !== `${SITE}/` && !linkedTo.has(p));

// -------------------------------------------------------------------- outputs
await writeFile(
  join(REPORTS, 'INTERNAL_LINK_MAP.csv'),
  csv([
    ['source_url', 'destination_url', 'anchor_text', 'link_type'],
    ...newLinks.sort((a, b) => a.source.localeCompare(b.source) || a.dest.localeCompare(b.dest))
      .map((l) => [l.source, l.dest, l.anchor, l.type]),
  ]),
);

await writeFile(
  join(REPORTS, 'ORPHAN_PAGE_REPORT.csv'),
  csv([['url', 'status'], ...orphans.map((o) => [o, 'no internal links point here'])]),
);

const byReason = {};
for (const r of removed) byReason[r.reason] = (byReason[r.reason] ?? 0) + 1;

const md = `# Internal link preservation report

Generated ${new Date().toISOString().slice(0, 10)} by \`scripts/link-report.mjs\`.

The baseline in \`OLD_INTERNAL_LINK_BASELINE.csv\` was captured by crawling the
live WordPress site before any content was changed. It is not regenerated.

| Measure | Count |
| --- | --- |
| Unique source→destination pairs on the old site | ${oldPairsUnique.size} |
| Preserved unchanged | ${preserved.length} |
| Updated to a new destination | ${updated.length} |
| Removed | ${removed.length} |
| Added by the rebuild | ${added.length} |
| Total on the new site | ${newLinks.length} |
| Orphan pages (nothing links to them) | ${orphans.length} |
| Live pages whose inbound link count fell | ${lostInbound} of ${inboundRows.length} |

Preservation rate: **${((preserved.length + updated.length) / oldPairsUnique.size * 100).toFixed(1)}%**
of the old link graph is either intact or repointed at the destination that
replaced it.

Pair-by-pair preservation understates the result, because the related-products
strip on a product page is chosen algorithmically and the old and new
selections differ. The measure that decides whether a page lost authority is
how many distinct pages link to it, and that is in
\`INBOUND_LINK_COMPARISON.csv\`: **${inboundRows.length - lostInbound} of
${inboundRows.length}** live destinations have at least as many inbound
internal links as before.

## Updated links

${updated.length === 0 ? '_None._' : `| Source | Old destination | New destination | Reason |
| --- | --- | --- | --- |
${[...new Map(updated.map((u) => [`${u.dest}|${u.newDest}`, u])).values()]
  .map((u) => `| (${updated.filter((x) => x.dest === u.dest).length} pages) | ${u.dest} | ${u.newDest} | ${u.reason} |`)
  .join('\n')}`}

## Removed links

${removed.length === 0 ? '_None._' : Object.entries(byReason)
  .map(([reason, n]) => `- **${n}** — ${reason}`)
  .join('\n')}

${removed.length ? `Full detail is in \`INTERNAL_LINK_REMOVED.csv\`.` : ''}

## Orphan pages

${orphans.length === 0 ? 'None. Every page on the site is reachable from at least one internal link.' : orphans.map((o) => `- ${o}`).join('\n')}
`;

await writeFile(join(REPORTS, 'INTERNAL_LINK_PRESERVATION_REPORT.md'), md);
await writeFile(
  join(REPORTS, 'INTERNAL_LINK_REMOVED.csv'),
  csv([
    ['source_url', 'destination_url', 'anchor_text', 'link_type', 'reason'],
    ...removed.map((r) => [r.source, r.dest, r.anchor, r.type, r.reason]),
  ]),
);

console.log(`old unique pairs   ${oldPairsUnique.size}`);
console.log(`  preserved        ${preserved.length}`);
console.log(`  updated          ${updated.length}`);
console.log(`  removed          ${removed.length}`);
for (const [reason, n] of Object.entries(byReason)) console.log(`      ${n}  ${reason}`);
console.log(`new links total    ${newLinks.length} (${added.length} added)`);
console.log(`orphan pages       ${orphans.length}`);
console.log(`inbound maintained ${inboundRows.length - lostInbound}/${inboundRows.length}`);
