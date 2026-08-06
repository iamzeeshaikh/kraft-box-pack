/**
 * Resolves an old wp-content image URL to the local asset it was downloaded to.
 *
 * `tools/fetch_images.py` flattens `…/uploads/2024/08/foo.jpg` to
 * `2024-08-foo.jpg`; `localName` below is the same rule in TypeScript, so the
 * two stay in step. Assets are imported through `import.meta.glob` rather than
 * referenced by string, which is what lets Astro optimise them at build time
 * and what makes a missing file a build error instead of a broken <img>.
 */
import type { ImageMetadata } from 'astro';
import type { ProductImage } from '../data/content';

const assets = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/products/*.{jpg,jpeg,png,webp,gif}',
  { eager: true },
);

/** `../assets/products/2024-08-foo.jpg` -> `2024-08-foo.jpg` */
const byName = new Map(
  Object.entries(assets)
    .map(([path, mod]) => [path.split('/').pop()!, mod.default] as const)
    // macOS AppleDouble sidecars (`._foo.jpg`) are resource forks, not images;
    // on exFAT/network volumes they appear beside every real file and would
    // otherwise shadow it in this map and break the build.
    .filter(([name]) => !name.startsWith('._')),
);

export function localName(url: string): string {
  const tail = url.includes('/uploads/')
    ? url.split('/uploads/').pop()!
    : url.split('/').pop()!;
  return tail
    .replace(/\//g, '-')
    .replace(/[^A-Za-z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

export function resolve(image: ProductImage): ImageMetadata | undefined {
  return byName.get(localName(image.src));
}

/**
 * The image to lead a card or a gallery with.
 *
 * Not simply `images[0]`: one product's WordPress thumbnail returns 410 from
 * its own server while its four gallery shots are fine, so taking the first
 * entry blindly would render an empty card for a product that has perfectly
 * good photography. The first entry that actually resolved wins.
 */
export function primary(images: ProductImage[]): { image: ImageMetadata; alt: string } | undefined {
  for (const candidate of images) {
    const image = resolve(candidate);
    if (image) return { image, alt: candidate.alt };
  }
  return undefined;
}

/**
 * The images for a product that actually made it to disk.
 *
 * One image on the old site returns 410 from its own server, so a product can
 * reference a file that does not exist. Filtering here means a gallery renders
 * with what it has rather than the page failing to build.
 */
export function resolveAll(images: ProductImage[]): { image: ImageMetadata; alt: string }[] {
  return images
    .map((i) => ({ image: resolve(i)!, alt: i.alt }))
    .filter((i) => i.image !== undefined);
}

export const assetCount = byName.size;
