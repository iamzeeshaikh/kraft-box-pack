/**
 * Tab strip behaviour, following the ARIA authoring practices for tabs:
 * arrow keys move between tabs, Home and End jump to the ends, and only the
 * selected tab is in the tab order so the strip is a single stop.
 *
 * Panels are hidden with the `hidden` attribute rather than CSS so the content
 * of an inactive panel is genuinely removed from the accessibility tree.
 */
export function wireTabs(root: ParentNode = document): void {
  for (const group of root.querySelectorAll<HTMLElement>('[data-tabs]')) {
    if (group.dataset.wired === 'true') continue;
    group.dataset.wired = 'true';

    const tabs = Array.from(group.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
    if (tabs.length < 2) continue;

    const select = (tab: HTMLButtonElement, focus = true) => {
      for (const t of tabs) {
        const active = t === tab;
        t.setAttribute('aria-selected', String(active));
        t.tabIndex = active ? 0 : -1;
        const panel = document.getElementById(t.getAttribute('aria-controls') ?? '');
        if (panel) panel.hidden = !active;
      }
      if (focus) tab.focus();
    };

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => select(tab, false));
      tab.addEventListener('keydown', (e) => {
        const map: Record<string, number> = {
          ArrowRight: i + 1,
          ArrowLeft: i - 1,
          Home: 0,
          End: tabs.length - 1,
        };
        const next = map[e.key];
        if (next === undefined) return;
        e.preventDefault();
        select(tabs[(next + tabs.length) % tabs.length]);
      });
    });
  }
}
