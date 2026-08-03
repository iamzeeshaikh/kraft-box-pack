#!/usr/bin/env node
/**
 * Build-output QA.
 *
 * Walks every generated HTML file and asserts the things that are easy to
 * break silently across 185 pages: one H1, no heading-level jumps, unique
 * titles and descriptions, a self-referencing canonical, alt text on every
 * content image, valid JSON-LD, and no internal link that 404s.
 *
 * Exits non-zero on any failure, so it can gate a deploy.
 *
 *   node scripts/preview-server.mjs & node scripts/qa.mjs
 */
import { readFile, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../.vercel/output/static/', import.meta.url));
const BASE = process.env.QA_BASE ?? 'http://localhost:4321';
const SITE = 'https://kraftboxpack.com';

let pass = 0;
const failures = [];
const check = (ok, label, detail = '') => {
  if (ok) pass++;
  else failures.push(`${label}${detail ? ` — ${detail}` : ''}`);
};

const decode = (s) =>
  String(s ?? '')
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ').trim();
const strip = (h) =>
  h.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

const files = await walk(ROOT);
const pages = [];

for (const file of files) {
  const rel = relative(ROOT, file);
  const html = await readFile(file, 'utf8');
  const body = strip(html);
  const path = rel === 'index.html' ? '/' : '/' + rel.replace(/index\.html$/, '');
  const grab = (re) => decode(html.match(re)?.[1] ?? '');

  pages.push({
    path,
    rel,
    html,
    body,
    title: grab(/<title>([\s\S]*?)<\/title>/),
    description: grab(/<meta name="description" content="([\s\S]*?)"/),
    canonical: grab(/<link rel="canonical" href="([\s\S]*?)"/),
    robots: grab(/<meta name="robots" content="([\s\S]*?)"/),
    h1s: [...body.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => decode(m[1])),
    headings: [...body.matchAll(/<h([1-6])\b/g)].map((m) => Number(m[1])),
    images: [...body.matchAll(/<img\b([^>]*)>/g)].map((m) => m[1]),
    links: [...body.matchAll(/href="(\/[^"#]*)"/g)].map((m) => m[1]),
    jsonld: [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
      .map((m) => m[1]),
  });
  pages.at(-1).canonicalsElsewhere =
    pages.at(-1).canonical !== '' && pages.at(-1).canonical !== SITE + pages.at(-1).path;
}

console.log(`checking ${pages.length} pages\n`);

// ------------------------------------------------------------------ per page
for (const p of pages) {
  const id = p.path;
  const indexable = !/noindex/.test(p.robots);

  check(p.title.length > 0, `${id}: has a title`);
  check(p.title.length <= 65, `${id}: title <= 65 chars`, `${p.title.length}: ${p.title}`);
  check(p.description.length > 0, `${id}: has a meta description`);
  check(
    p.description.length >= 50 && p.description.length <= 165,
    `${id}: description 50-165 chars`,
    `${p.description.length}`,
  );
  check(p.h1s.length === 1, `${id}: exactly one H1`, `found ${p.h1s.length}`);
  check(p.canonical.startsWith(SITE), `${id}: canonical is absolute`, p.canonical);

  // Heading order: never skip a level going down.
  let worst = '';
  for (let i = 1; i < p.headings.length; i++) {
    if (p.headings[i] > p.headings[i - 1] + 1) {
      worst = `h${p.headings[i - 1]} -> h${p.headings[i]}`;
      break;
    }
  }
  check(worst === '', `${id}: no heading-level jumps`, worst);

  // Alt must be present on every image; empty is fine and means decorative.
  // Astro serialises `alt=""` as the bare attribute `alt`, which is valid HTML
  // and equivalent, so both spellings count.
  const noAlt = p.images.filter((a) => !/(?:^|\s)alt(?:\s|=|$)/.test(a)).length;
  check(noAlt === 0, `${id}: every img has an alt attribute`, `${noAlt} missing`);

  for (const [i, block] of p.jsonld.entries()) {
    try {
      const data = JSON.parse(block);
      const nodes = data['@graph'] ?? [data];
      check(nodes.every((n) => n['@type']), `${id}: JSON-LD block ${i} nodes typed`);
    } catch (e) {
      check(false, `${id}: JSON-LD block ${i} parses`, e.message);
    }
  }

  // A page whose canonical points elsewhere is a deliberate duplicate — the
  // two identically-named "Kraft Cosmetic Boxes" categories WordPress
  // published. Both URLs stay live because both are linked to; only one is
  // offered for indexing. Those are exempt from the self-canonical rule.
  if (indexable && !p.canonicalsElsewhere) {
    check(
      p.canonical === SITE + p.path,
      `${id}: canonical is self-referencing`,
      p.canonical,
    );
  }
}

// -------------------------------------------------------------- across pages
const indexable = pages.filter((p) => !/noindex/.test(p.robots) && !p.canonicalsElsewhere);

const dupeTitles = new Map();
const dupeDescs = new Map();
for (const p of indexable) {
  dupeTitles.set(p.title, [...(dupeTitles.get(p.title) ?? []), p.path]);
  dupeDescs.set(p.description, [...(dupeDescs.get(p.description) ?? []), p.path]);
}
for (const [title, paths] of dupeTitles) {
  check(paths.length === 1, `unique title`, `${paths.length}x "${title}" (${paths.slice(0, 3)})`);
}
for (const [desc, paths] of dupeDescs) {
  check(paths.length === 1, `unique description`, `${paths.length}x "${desc.slice(0, 50)}…"`);
}

// ------------------------------------------------------------- link integrity
const dests = [...new Set(pages.flatMap((p) => p.links))]
  .filter((d) => !d.startsWith('/_astro/') && !d.startsWith('/api/'));
const status = new Map();
for (const d of dests) {
  try {
    const res = await fetch(BASE + d, { redirect: 'manual' });
    status.set(d, res.status);
  } catch {
    status.set(d, 0);
  }
}
const broken = [...status.entries()].filter(([, s]) => s >= 400 || s === 0);
check(broken.length === 0, 'no internal link 404s', broken.map(([d, s]) => `${d} (${s})`).join(', '));

const redirected = [...status.entries()].filter(([, s]) => s >= 300 && s < 400);
check(
  redirected.length === 0,
  'no internal link points at a redirect',
  redirected.map(([d, s]) => `${d} (${s})`).join(', '),
);

// -------------------------------------------------------------------- routing
const routes = [
  ['/', 200], ['/products/', 200], ['/get-a-quote/', 200], ['/contact-us/', 200],
  ['/about-us/', 200], ['/privacy-policy/', 200], ['/terms-conditions/', 200],
  ['/refund_returns/', 200], ['/thank-you/', 200],
  ['/sitemap.xml', 200], ['/robots.txt', 200],
  ['/cart/', 301], ['/checkout/', 301], ['/my-account/', 301], ['/shop/', 301],
  ['/casino/', 410], ['/slot/', 410], ['/pokie/', 410], ['/slot-gacor/', 410],
  ['/definitely-not-a-page/', 404],
];
for (const [path, want] of routes) {
  const res = await fetch(BASE + path, { redirect: 'manual' }).catch(() => ({ status: 0 }));
  check(res.status === want, `${path} responds ${want}`, `got ${res.status}`);
}

// ------------------------------------------------------------------- sitemap
const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
const inSitemap = new Set([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]));
for (const p of indexable) {
  check(inSitemap.has(SITE + p.path), `sitemap lists ${p.path}`);
}
for (const p of pages.filter((x) => /noindex/.test(x.robots))) {
  check(!inSitemap.has(SITE + p.path), `sitemap excludes noindex ${p.path}`);
}

// --------------------------------------------------------------------- CSP
// Every script the pages load must be same-origin, or the policy will kill it.
for (const p of pages) {
  const external = [...p.html.matchAll(/<script[^>]+src="(https?:\/\/[^"]+)"/g)].map((m) => m[1]);
  check(external.length === 0, `${p.path}: no third-party scripts`, external.join(', '));
  const inlineHandlers = [...p.body.matchAll(/\son(?:click|load|error|submit)=/gi)];
  check(inlineHandlers.length === 0, `${p.path}: no inline event handlers`);
}

// ------------------------------------------------------------------- report
console.log(`${pass} passed, ${failures.length} failed`);
if (failures.length) {
  console.log('\nfailures:');
  for (const f of failures.slice(0, 60)) console.log(`  ✗ ${f}`);
  if (failures.length > 60) console.log(`  … and ${failures.length - 60} more`);
  process.exit(1);
}
