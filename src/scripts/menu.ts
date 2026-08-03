/**
 * Mobile navigation toggle.
 *
 * Kept in a module rather than an inline handler because the site ships a
 * `script-src 'self'` policy. Closing on Escape and on outside click matters
 * here: the panel is fixed over the page, so without them a keyboard user can
 * tab into links that are visually behind it.
 */
export function wireMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-menu]');
  if (!toggle || !menu) return;

  const set = (open: boolean) => {
    menu.dataset.open = String(open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => set(menu.dataset.open !== 'true'));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.dataset.open === 'true') {
      set(false);
      toggle.focus();
    }
  });

  document.addEventListener('click', (e) => {
    if (menu.dataset.open !== 'true') return;
    const target = e.target as Node;
    if (!menu.contains(target) && !toggle.contains(target)) set(false);
  });

  // A resize past the breakpoint leaves the panel open but the button hidden.
  const wide = window.matchMedia('(min-width: 1041px)');
  wide.addEventListener('change', (e) => {
    if (e.matches) set(false);
  });
}
