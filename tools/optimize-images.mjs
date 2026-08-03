/**
 * Re-encodes the downloaded product imagery in place, before Astro sees it.
 *
 * The originals are 1080-1200px squares averaging 275KB, 199MB in total. Astro
 * would still have to decode every one of those on each build, and the extra
 * pixels are never displayed: the largest slot on any page is the product
 * gallery at 900px. Capping the long edge and re-encoding at quality 82 cuts
 * the source set to a fraction of its size and takes the per-build image work
 * down with it, with no visible difference at the sizes actually rendered.
 */
import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIR = fileURLToPath(new URL('../src/assets/products/', import.meta.url));
const MAX = 1000;
const files = (await readdir(DIR)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));

let before = 0, after = 0, skipped = 0;
for (const f of files) {
  const src = join(DIR, f);
  const tmp = src + '.tmp';
  const size = (await stat(src)).size;
  before += size;
  try {
    const img = sharp(src, { failOn: 'none' });
    const meta = await img.metadata();
    const pipeline = meta.width > MAX || meta.height > MAX
      ? img.resize(MAX, MAX, { fit: 'inside', withoutEnlargement: true })
      : img;
    const out = /\.png$/i.test(f)
      ? pipeline.png({ compressionLevel: 9, palette: true })
      : pipeline.jpeg({ quality: 82, mozjpeg: true });
    await out.toFile(tmp);
    const newSize = (await stat(tmp)).size;
    if (newSize < size) { await rename(tmp, src); after += newSize; }
    else { await unlink(tmp); after += size; skipped++; }
  } catch (e) {
    console.error(`  skip ${f}: ${e.message}`);
    after += size; skipped++;
  }
}
const mb = (n) => (n / 1048576).toFixed(1) + 'MB';
console.log(`${files.length} images: ${mb(before)} -> ${mb(after)} (${skipped} left as-is)`);
