/**
 * Client-side filter for the all-products page.
 *
 * The header's search icon points here. Every product is already in the DOM,
 * so filtering is a matter of hiding cards rather than fetching anything —
 * which keeps it instant and keeps the page working without JavaScript, where
 * the full list simply shows.
 */
export function wireProductFilter(root: ParentNode = document): void {
  const input = root.querySelector<HTMLInputElement>('[data-product-filter]');
  const grid = root.querySelector<HTMLElement>('[data-product-grid]');
  const count = root.querySelector<HTMLElement>('[data-product-count]');
  if (!input || !grid) return;

  const items = Array.from(grid.children) as HTMLElement[];
  const names = items.map((el) => el.textContent?.toLowerCase() ?? '');
  const total = items.length;

  const apply = () => {
    const q = input.value.trim().toLowerCase();
    let shown = 0;
    items.forEach((el, i) => {
      const match = !q || names[i].includes(q);
      el.hidden = !match;
      if (match) shown++;
    });
    if (count) {
      count.textContent = q
        ? `${shown} of ${total} products match “${input.value.trim()}”`
        : `${total} products`;
    }
  };

  input.addEventListener('input', apply);
  // Submitting is a no-op; filtering already happened on each keystroke.
  input.form?.addEventListener('submit', (e) => e.preventDefault());
  apply();
}
