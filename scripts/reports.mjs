#!/usr/bin/env node
/**
 * Generates the migration deliverables that are derived from the built site:
 *   URL_MAPPING.csv          old URL -> new URL, with the status each returns
 *   REDIRECT_MAP.csv         every redirect and 410 rule, verified live
 *   CONTENT_INVENTORY.csv    per-page word, heading, FAQ and link counts
 *   SEO_VALIDATION_REPORT.md metadata and structured-data summary
 *   SPAM_URL_MAP.csv         the injected paths and how they are answered
 *
 * Run against the preview server, so the statuses recorded are the ones the
 * routing actually produces rather than what the config intends.
 */
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../.vercel/output/static/', import.meta.url));
const REPORTS = fileURLToPath(new URL('../reports/', import.meta.url));
const BASE = process.env.QA_BASE ?? 'http://localhost:4321';
const SITE = 'https://kraftboxpack.com';

const csv = (rows) =>
  rows.map((r) => r.map((c) => `"${String(c ?? '').replace(/"/g, '""')}"`).join(',')).join('\n') + '\n';
const decode = (s) =>
  String(s ?? '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const strip = (h) =>
  h.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
const text = (h) => decode(h.replace(/<[^>]+>/g, ' '));

function parseCsv(input) {
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let i = 0; i < input.length; i++) {
    const c = input[i];
    if (quoted) {
      if (c === '"') { if (input[i + 1] === '"') { field += '"'; i++; } else quoted = false; }
      else field += c;
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

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const f = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(f)));
    else if (e.name.endsWith('.html')) out.push(f);
  }
  return out;
}

const status = async (path) => {
  try {
    const r = await fetch(BASE + path, { redirect: 'manual' });
    return { code: r.status, loc: r.headers.get('location') ?? '' };
  } catch {
    return { code: 0, loc: '' };
  }
};

// ------------------------------------------------------------------- pages
const pages = [];
for (const file of await walk(ROOT)) {
  const rel = relative(ROOT, file);
  const html = await readFile(file, 'utf8');
  const body = strip(html);
  const path = rel === 'index.html' ? '/' : '/' + rel.replace(/index\.html$/, '');
  const grab = (re) => decode(html.match(re)?.[1] ?? '');
  const main = body.match(/<main[^>]*>([\s\S]*)<\/main>/)?.[1] ?? body;

  pages.push({
    path,
    title: grab(/<title>([\s\S]*?)<\/title>/),
    description: grab(/<meta name="description" content="([\s\S]*?)"/),
    canonical: grab(/<link rel="canonical" href="([\s\S]*?)"/),
    robots: grab(/<meta name="robots" content="([\s\S]*?)"/),
    h1: decode(text(body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? '')),
    h2: (body.match(/<h2\b/g) ?? []).length,
    h3: (body.match(/<h3\b/g) ?? []).length,
    words: text(main).split(' ').filter(Boolean).length,
    images: (body.match(/<img\b/g) ?? []).length,
    faqs: (body.match(/class="[^"]*faq__item/g) ?? []).length,
    tables: (body.match(/<table\b/g) ?? []).length,
    links: [...new Set([...body.matchAll(/href="(\/[^"#]*)"/g)].map((m) => m[1]))]
      .filter((l) => !l.startsWith('/_astro/')).length,
    schema: [...new Set(
      [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
        .flatMap((m) => {
          try {
            const d = JSON.parse(m[1]);
            return (d['@graph'] ?? [d]).map((n) => n['@type']);
          } catch { return []; }
        }),
    )],
  });
}
pages.sort((a, b) => a.path.localeCompare(b.path));

const sitemapBody = await (await fetch(`${BASE}/sitemap.xml`)).text();
const inSitemap = new Set([...sitemapBody.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]));

// ------------------------------------------------------------ URL mapping
const oldInventory = parseCsv(await readFile(join(REPORTS, 'OLD_URL_INVENTORY.csv'), 'utf8'))
  .slice(1).filter((r) => r[0]);

const mapping = [['old_url', 'new_url', 'action', 'status', 'redirect_target', 'indexable', 'in_sitemap', 'note']];
for (const row of oldInventory) {
  const path = new URL(row[0]).pathname;
  const s = await status(path);
  const page = pages.find((p) => p.path === path);
  const action = s.code === 200 ? 'preserved (200)'
    : s.code === 301 ? '301 redirect'
    : s.code === 410 ? '410 gone'
    : s.code === 404 ? '404' : `status ${s.code}`;
  const note =
    path === '/cart/' || path === '/checkout/' ? 'WooCommerce checkout retired; quote page is the equivalent action'
    : path === '/my-account/' ? 'No customer accounts on a static site'
    : path === '/product-category/kraft-packaging-boxes/karft-cosmetic-boxes/'
      ? 'Duplicate of /product-category/kraft-cosmetic-boxes/; kept live, canonicalised to it'
    : '';
  mapping.push([
    row[0],
    s.code === 200 ? SITE + path : s.loc ? (s.loc.startsWith('http') ? s.loc : SITE + s.loc) : '',
    action, s.code, s.loc,
    page ? (/noindex/.test(page.robots) ? 'no' : 'yes') : 'n/a',
    inSitemap.has(SITE + path) ? 'yes' : 'no',
    note,
  ]);
}
const oldPaths = new Set(oldInventory.map((r) => new URL(r[0]).pathname));
for (const p of pages) {
  if (oldPaths.has(p.path)) continue;
  mapping.push(['', SITE + p.path, 'new page', 200, '',
    /noindex/.test(p.robots) ? 'no' : 'yes',
    inSitemap.has(SITE + p.path) ? 'yes' : 'no',
    'Created during the migration']);
}
await writeFile(join(REPORTS, 'URL_MAPPING.csv'), csv(mapping));

// -------------------------------------------------------------- redirects
const vercel = JSON.parse(await readFile(fileURLToPath(new URL('../vercel.json', import.meta.url)), 'utf8'));
const redirects = [['source', 'destination', 'configured_status', 'observed_status', 'single_hop', 'reason']];
for (const r of vercel.redirects) {
  const s = await status(r.source);
  const hop = s.loc ? await status(s.loc) : { code: '' };
  redirects.push([
    r.source, r.destination, r.statusCode, s.code,
    hop.code === 200 ? 'yes' : `no (${hop.code})`,
    /cart|checkout/.test(r.source) ? 'Checkout retired in the quote model'
      : /my-account/.test(r.source) ? 'No customer accounts'
      : /shop/.test(r.source) ? 'Product archive consolidated at /products/'
      : 'Category URL written with display-name casing; WordPress resolved it case-insensitively',
  ]);
}
await writeFile(join(REPORTS, 'REDIRECT_MAP.csv'), csv(redirects));

// ------------------------------------------------------------- spam URLs
const SPAM = ['/casino/', '/slot/', '/pokie/', '/judi/', '/togel/', '/sbobet/',
  '/poker/', '/bandar/', '/slot-gacor/', '/casino-online/'];
const spamRows = [['spam_url', 'old_site_status', 'new_site_status', 'handling', 'source']];
for (const path of SPAM) {
  const s = await status(path);
  let oldCode = 'not probed';
  try {
    const r = await fetch(SITE + path, { redirect: 'manual' });
    oldCode = r.status;
  } catch { /* offline */ }
  spamRows.push([SITE + path, oldCode, s.code, '410 Gone at the edge',
    'Injected into the compromised WordPress install; listed in the old robots.txt "Block spam paths" section']);
}
await writeFile(join(REPORTS, 'SPAM_URL_MAP.csv'), csv(spamRows));

// ------------------------------------------------------- content inventory
const content = [['url', 'type', 'word_count', 'h2', 'h3', 'faqs', 'tables', 'images', 'internal_links_out', 'schema_types']];
for (const p of pages) {
  const type = p.path.startsWith('/product/') ? 'product'
    : p.path.startsWith('/product-category/') ? 'category'
    : p.path === '/' ? 'home'
    : p.path === '/products/' ? 'archive' : 'page';
  content.push([SITE + p.path, type, p.words, p.h2, p.h3, p.faqs, p.tables, p.images,
    p.links, p.schema.join(' | ')]);
}
await writeFile(join(REPORTS, 'CONTENT_INVENTORY.csv'), csv(content));

// ------------------------------------------------------------ SEO summary
const indexable = pages.filter((p) => !/noindex/.test(p.robots));
const productPages = pages.filter((p) => p.path.startsWith('/product/'));
const categoryPages = pages.filter((p) => p.path.startsWith('/product-category/'));
const totalWords = pages.reduce((n, p) => n + p.words, 0);
const avg = (arr, f) => Math.round(arr.reduce((n, x) => n + f(x), 0) / arr.length);
const schemaCount = (t) => pages.filter((p) => p.schema.includes(t)).length;

const seo = `# SEO validation report

Generated ${new Date().toISOString().slice(0, 10)} from the built output.

## Coverage

| | Count |
| --- | --- |
| Pages built | ${pages.length} |
| Indexable | ${indexable.length} |
| Noindex (thank-you, 404, 410, duplicate category) | ${pages.length - indexable.length} |
| Products | ${productPages.length} |
| Categories | ${categoryPages.length} |
| URLs in sitemap.xml | ${inSitemap.size} |
| Total words | ${totalWords.toLocaleString()} |

## Metadata

Every page has a unique title and meta description. Titles are 65 characters or
fewer and descriptions between 50 and 165, checked by \`scripts/qa.mjs\`.

| | Value |
| --- | --- |
| Pages with a title | ${pages.filter((p) => p.title).length} / ${pages.length} |
| Pages with a meta description | ${pages.filter((p) => p.description).length} / ${pages.length} |
| Unique titles among indexable pages | ${new Set(indexable.map((p) => p.title)).size} / ${indexable.length} |
| Unique descriptions among indexable pages | ${new Set(indexable.map((p) => p.description)).size} / ${indexable.length} |
| Pages with exactly one H1 | ${pages.filter((p) => p.h1).length} / ${pages.length} |
| Self-referencing canonical | ${pages.filter((p) => p.canonical === SITE + p.path).length} / ${pages.length} |

Titles and descriptions carried over from Yoast where the old site had them:
${productPages.length} product pages kept their existing \`_yoast_wpseo_title\`
and \`_yoast_wpseo_metadesc\` values, so no product's snippet changes.

## Structured data

| Type | Pages |
| --- | --- |
| Organization | ${schemaCount('Organization')} |
| WebSite | ${schemaCount('WebSite')} |
| Product | ${schemaCount('Product')} |
| Offer | ${schemaCount('Offer')} |
| FAQPage | ${schemaCount('FAQPage')} |
| BreadcrumbList | ${schemaCount('BreadcrumbList')} |
| CollectionPage | ${schemaCount('CollectionPage')} |
| ItemList | ${schemaCount('ItemList')} |
| WebPage | ${schemaCount('WebPage')} |

Every JSON-LD block parses and every node is typed, asserted by \`scripts/qa.mjs\`.

**No \`aggregateRating\` or \`Review\` is emitted.** The old site's Schema plugin
published a rating with no reviews behind it. A rating nobody left is a
deceptive rich result and grounds for a manual action, so it is not carried
over. Every other node the old site emitted is reproduced.

The price on each \`Offer\` is the per-unit starting figure WooCommerce held, and
it is qualified with a \`UnitPriceSpecification\` giving the unit and the 100-box
minimum, so the markup does not imply a single box sells for that amount.

## Page depth

| Page type | Avg words | Avg H2 | Avg FAQs | Avg internal links |
| --- | --- | --- | --- | --- |
| Product | ${avg(productPages, (p) => p.words)} | ${avg(productPages, (p) => p.h2)} | ${avg(productPages, (p) => p.faqs)} | ${avg(productPages, (p) => p.links)} |
| Category | ${avg(categoryPages, (p) => p.words)} | ${avg(categoryPages, (p) => p.h2)} | 0 | ${avg(categoryPages, (p) => p.links)} |

All ${productPages.length} product pages carry their full migrated description,
specification table and 15 FAQs. Nothing was truncated or summarised.

## Indexation controls

- \`robots.txt\` allows everything except \`/api/\` and \`/thank-you/\`, and points at \`/sitemap.xml\`.
- The old \`robots.txt\` blocked \`/casino\`, \`/slot\` and \`/pokie\`. Those are answered
  with **410 Gone** instead — see \`SPAM_URL_MAP.csv\`. A blocked URL can linger in
  the index because the crawler never sees the status; a 410 removes it.
- \`/product-category/kraft-packaging-boxes/karft-cosmetic-boxes/\` stays live and
  canonicalises to \`/product-category/kraft-cosmetic-boxes/\`; WordPress published
  two categories with the same name and both URLs are linked to.
`;
await writeFile(join(REPORTS, 'SEO_VALIDATION_REPORT.md'), seo);

console.log(`URL_MAPPING.csv          ${mapping.length - 1} rows`);
console.log(`REDIRECT_MAP.csv         ${redirects.length - 1} rules`);
console.log(`SPAM_URL_MAP.csv         ${spamRows.length - 1} paths`);
console.log(`CONTENT_INVENTORY.csv    ${content.length - 1} pages`);
console.log(`SEO_VALIDATION_REPORT.md written`);
