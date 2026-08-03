import type { APIRoute } from 'astro';
import { SITE_URL } from '../data/site';

/**
 * The old robots.txt carried a "Block spam paths" section for /casino, /slot
 * and /pokie — paths the attacker created, not the business. Those are answered
 * with 410 at the edge instead (see vercel.json), which tells search engines to
 * drop them rather than merely stop crawling them, so they are not repeated
 * here. Disallowing a URL you also want de-indexed is counterproductive: a
 * blocked URL can stay in the index because the crawler never sees the 410.
 */
export const GET: APIRoute = () =>
  new Response(
    `User-agent: *
Allow: /
Disallow: /api/
Disallow: /thank-you/

Sitemap: ${SITE_URL}/sitemap.xml
`,
    { headers: { 'content-type': 'text/plain; charset=utf-8' } },
  );
