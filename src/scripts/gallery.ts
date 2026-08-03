/**
 * Product gallery thumbnail switching.
 *
 * The full-size image is a different, much larger file than the thumbnail, so
 * a naive `src` swap makes the browser fetch it at click time and the change
 * visibly lags. Two things prevent that: hovering, touching or focusing a
 * thumbnail starts its download immediately, and once the page goes idle the
 * remaining images are fetched at low priority. By the time a click lands the
 * file is normally already in cache and the swap is instant.
 */

const warmed = new Set<string>();

function warm(src: string, priority: 'low' | 'high' = 'low'): void {
  if (!src || warmed.has(src)) return;
  warmed.add(src);
  const img = new Image();
  if ('fetchPriority' in img) {
    (img as HTMLImageElement & { fetchPriority: string }).fetchPriority = priority;
  }
  img.decoding = 'async';
  img.src = src;
}

export function wireGallery(root: ParentNode = document): void {
  const gallery = root.querySelector<HTMLElement>('[data-gallery]');
  if (!gallery) return;

  const main = gallery.querySelector<HTMLImageElement>('#gallery-main');
  const thumbs = Array.from(gallery.querySelectorAll<HTMLButtonElement>('.thumb'));
  if (!main || thumbs.length < 2) return;

  warmed.add(main.currentSrc || main.src);

  const show = (thumb: HTMLButtonElement) => {
    const full = thumb.dataset.full;
    if (!full) return;
    // srcset and sizes would otherwise keep overriding the swapped src.
    main.removeAttribute('srcset');
    main.removeAttribute('sizes');
    main.src = full;
    main.alt = thumb.dataset.alt ?? '';
    for (const t of thumbs) {
      const active = t === thumb;
      t.classList.toggle('is-active', active);
      t.setAttribute('aria-pressed', String(active));
    }
  };

  for (const thumb of thumbs) {
    thumb.addEventListener('click', () => show(thumb));
    const intent = () => warm(thumb.dataset.full ?? '', 'high');
    thumb.addEventListener('pointerenter', intent, { once: true });
    thumb.addEventListener('touchstart', intent, { once: true, passive: true });
    thumb.addEventListener('focus', intent, { once: true });
  }

  const warmAll = () => {
    for (const thumb of thumbs) warm(thumb.dataset.full ?? '', 'low');
  };

  if ('requestIdleCallback' in window) {
    (window as Window & {
      requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => void;
    }).requestIdleCallback(warmAll, { timeout: 3000 });
  } else {
    setTimeout(warmAll, 1200);
  }
}
