/**
 * Serves the old WordPress image URLs again.
 *
 * The migration moved every product photo into src/assets/products, where
 * Astro re-publishes it under a hashed /_astro/ name. Nothing answered the
 * original /wp-content/uploads/... addresses, so Vercel's WordPress-probe
 * filter returned 403 for all 729 of them, and Google Images lost them:
 * 69.9k image impressions in the eight weeks before the cutover, 14.9k in the
 * eight weeks after.
 *
 * The files are already in the repo, so instead of committing a second 40 MB
 * copy under public/, this copies each one into the build output at its
 * original path. reports/IMAGE_DOWNLOAD_REPORT.csv is the map: old URL to
 * flattened local file name.
 *
 * WordPress also published resized copies (Foo-1200x900.jpg, Foo-scaled.jpg).
 * Only the originals were downloaded, so those variants are sent to the
 * original with a 301.
 */
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = (p) => fileURLToPath(new URL(`../${p}`, import.meta.url));
const STATIC = root('.vercel/output/static');
const CONFIG = root('.vercel/output/config.json');

const csv = await readFile(root('reports/IMAGE_DOWNLOAD_REPORT.csv'), 'utf8');
const rows = csv
  .trim()
  .split('\n')
  .slice(1)
  .map((line) => line.split(','))
  .filter(([, status]) => status === 'downloaded');

let copied = 0;
const missing = [];
for (const [url, , , localFile] of rows) {
  const path = new URL(url).pathname;
  const src = root(`src/assets/products/${localFile}`);
  if (!existsSync(src)) {
    missing.push(localFile);
    continue;
  }
  const dest = `${STATIC}${decodeURIComponent(path)}`;
  await mkdir(dirname(dest), { recursive: true });
  await copyFile(src, dest);
  copied++;
}

if (missing.length) {
  console.error(`postbuild: ${missing.length} legacy images missing from src/assets/products:`, missing);
  process.exit(1);
}

const config = JSON.parse(await readFile(CONFIG, 'utf8'));
const route = {
  src: '^/wp-content/uploads/(.+?)(?:-\\d+x\\d+|-scaled)\\.(jpe?g|png|webp|gif)$',
  headers: { Location: '/wp-content/uploads/$1.$2' },
  status: 301,
  caseSensitive: false,
};
config.routes ??= [];
if (!config.routes.some((r) => r.src === route.src)) {
  // Before the filesystem handler, so the variant never reaches the 403 filter.
  const fsIndex = config.routes.findIndex((r) => r.handle === 'filesystem');
  config.routes.splice(fsIndex === -1 ? 0 : fsIndex, 0, route);
  await writeFile(CONFIG, JSON.stringify(config, null, 2));
}
console.log(`postbuild: ${copied} legacy images restored at /wp-content/uploads/, size variants 301 to the original`);
