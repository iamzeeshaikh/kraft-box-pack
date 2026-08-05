/**
 * Google Merchant Center product feed (RSS 2.0 with the g: namespace).
 *
 * The WooCommerce site synced these products over the Content API through the
 * "Google for WooCommerce" plugin. That sync died with the migration, so this
 * feed takes over as the data source: Merchant Center fetches it on a schedule
 * from https://kraftboxpack.com/google-merchant-feed.xml.
 *
 * The offer ids matter more than anything else here. The plugin submitted each
 * product as `gla_<post id>`, and the post ids survived the migration in
 * products.json — reusing them means Merchant Center sees the same items it
 * already approved, not 158 new ones queued for review. If the ids in the
 * Merchant Center products list are NOT of the form `gla_2728`, change
 * OFFER_ID only — everything else stays.
 *
 * Prices carry through from WooCommerce exactly as the plugin sent them, and
 * every value here is read from the same data the product pages render, so the
 * feed can never disagree with its own landing pages.
 */
import type { APIRoute } from 'astro';
import { products, absolute } from '../data/content';
import { resolveAll } from '../lib/images';
import { BRAND_NAME } from '../data/site';

const OFFER_ID = (postId: string) => `gla_${postId}`;

const esc = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export const GET: APIRoute = () => {
  const items = products.map((p) => {
    const images = resolveAll(p.images).map((i) => absolute(i.image.src));
    const price = Number.parseFloat(p.price);
    const description =
      p.seoDescription ||
      p.plainShort ||
      `Custom ${p.name.toLowerCase()} at wholesale prices from ${BRAND_NAME}.`;

    const lines = [
      `<g:id>${esc(OFFER_ID(p.id))}</g:id>`,
      `<g:title>${esc(p.name)}</g:title>`,
      `<g:description>${esc(description)}</g:description>`,
      `<g:link>${esc(absolute(p.url))}</g:link>`,
      ...(images.length ? [`<g:image_link>${esc(images[0])}</g:image_link>`] : []),
      ...images.slice(1, 11).map((u) => `<g:additional_image_link>${esc(u)}</g:additional_image_link>`),
      `<g:availability>${p.inStock ? 'in_stock' : 'out_of_stock'}</g:availability>`,
      ...(Number.isFinite(price) ? [`<g:price>${price.toFixed(2)} ${p.currency}</g:price>`] : []),
      `<g:condition>new</g:condition>`,
      `<g:brand>${esc(BRAND_NAME)}</g:brand>`,
      // Made-to-order packaging has no GTIN or manufacturer part number.
      `<g:identifier_exists>no</g:identifier_exists>`,
      ...(p.categoryNames.length
        ? [`<g:product_type>${esc(p.categoryNames.join(' > '))}</g:product_type>`]
        : []),
    ];

    return `<item>\n${lines.map((l) => `  ${l}`).join('\n')}\n</item>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
<channel>
<title>${esc(BRAND_NAME)}</title>
<link>${esc(absolute('/'))}</link>
<description>${esc(`${BRAND_NAME} product feed for Google Merchant Center`)}</description>
${items.join('\n')}
</channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
