import type { APIRoute } from 'astro';
import { absolute } from '../data/content';

/**
 * A removal sitemap: the gambling-spam paths injected into the compromised
 * WordPress install, listed so Google is prompted to recrawl them and see the
 * 410 sooner than its own schedule would manage.
 *
 * This is deliberately NOT the main sitemap and is not referenced from
 * robots.txt. A sitemap is meant to list canonical, indexable URLs; these are
 * the opposite, and Search Console will report every one of them as an error.
 * That is the expected outcome here — the error means Google fetched the URL
 * and found it gone, which is the whole point.
 *
 * It is temporary. Once Search Console stops reporting these as indexed, this
 * file and its Search Console submission should both be removed, because a
 * permanent sitemap full of 410s is just noise in the report.
 *
 * Why a sitemap rather than a robots.txt block: the old site had
 * `Disallow: /casino` and friends, which is the common mistake. A blocked URL
 * cannot be crawled, so Google never sees the 410 and the URL stays in the
 * index on its last known state. The new robots.txt deliberately does not
 * block them.
 *
 * `lastmod` is the cutover date. It has to be a real date rather than "now" on
 * every request, or the file changes on every fetch and stops meaning anything.
 */
const CUTOVER = '2026-08-15';

/**
 * The five with a 410 on the old site were genuinely injected — the old
 * robots.txt named casino, slot and pokie, and those plus the two variants
 * already answered 410 there, which is something you only do to a URL that
 * existed. The rest were 404 on the old site and are included because the
 * route pattern answers them anyway and costs nothing to list.
 */
const REMOVED = [
  '/casino/',
  '/casino-online/',
  '/slot/',
  '/slot-gacor/',
  '/pokie/',
  '/judi/',
  '/togel/',
  '/sbobet/',
  '/poker/',
  '/bandar/',
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${REMOVED.map(
  (u) =>
    `  <url>\n    <loc>${absolute(u)}</loc>\n    <lastmod>${CUTOVER}</lastmod>\n  </url>`,
).join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'content-type': 'application/xml; charset=utf-8' },
  });
};
