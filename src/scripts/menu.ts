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

  wireSubmenus(menu);
}

/**
 * The category dropdowns. Desktop opens them on hover/focus via CSS alone;
 * the caret button is what makes them work for touch and keyboard, and it is
 * the whole accordion on the phone layout.
 */
function wireSubmenus(menu: HTMLElement): void {
  const items = Array.from(menu.querySelectorAll<HTMLElement>('[data-sub-toggle]'))
    .map((btn) => btn.closest('li'))
    .filter((li): li is HTMLLIElement => li !== null);

  const setSub = (li: HTMLLIElement, open: boolean) => {
    li.dataset.open = String(open);
    li.querySelector('[data-sub-toggle]')?.setAttribute('aria-expanded', String(open));
  };

  const closeAll = (except?: HTMLLIElement) => {
    for (const li of items) if (li !== except && li.dataset.open === 'true') setSub(li, false);
  };

  for (const li of items) {
    li.querySelector<HTMLButtonElement>('[data-sub-toggle]')?.addEventListener('click', () => {
      const open = li.dataset.open === 'true';
      closeAll(li);
      setSub(li, !open);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });

  document.addEventListener('click', (e) => {
    const target = e.target as Node;
    if (!items.some((li) => li.contains(target))) closeAll();
  });
}
