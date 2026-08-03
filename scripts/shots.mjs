/**
 * Visual QA: renders key pages at three widths into reports/shots/.
 * Serves the built static output rather than the dev server so what is
 * captured is what will actually deploy.
 */
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const BASE = process.env.QA_BASE ?? 'http://localhost:4321';
const OUT = fileURLToPath(new URL('../reports/shots/', import.meta.url));
await mkdir(OUT, { recursive: true });

const PAGES = process.env.QA_PAGES?.split(',') ?? [
  ['home', '/'],
  ['product', '/product/kraft-round-boxes/'],
  ['category', '/product-category/kraft-food-packaging/'],
  ['products', '/products/'],
  ['quote', '/get-a-quote/'],
  ['contact', '/contact-us/'],
].flat().length ? [
  ['home', '/'],
  ['product', '/product/kraft-round-boxes/'],
  ['category', '/product-category/kraft-food-packaging/'],
  ['products', '/products/'],
  ['quote', '/get-a-quote/'],
  ['contact', '/contact-us/'],
] : [];

const VIEWPORTS = [['mobile', 390, 844], ['tablet', 820, 1180], ['desktop', 1440, 900]];

const browser = await chromium.launch();
for (const [vname, width, height] of VIEWPORTS) {
  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  for (const [name, path] of PAGES) {
    await page.goto(BASE + path, { waitUntil: 'networkidle' });
    await page.screenshot({ path: `${OUT}${name}-${vname}.jpg`, fullPage: vname === 'desktop', type: 'jpeg', quality: 72 });
    console.log(`  ${name}-${vname}`);
  }
  await ctx.close();
}
await browser.close();
