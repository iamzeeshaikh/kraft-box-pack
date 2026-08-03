#!/usr/bin/env node
/**
 * Accessibility and responsive checks against the built site, in a real browser.
 *
 * Covers what static analysis cannot see: computed colour contrast, actual
 * tap-target sizes, whether anything overflows the viewport horizontally, and
 * whether the interactive components still work under the production CSP.
 */
import { chromium } from 'playwright';

const BASE = process.env.QA_BASE ?? 'http://localhost:4321';
const PAGES = [
  '/', '/products/', '/product/kraft-round-boxes/',
  '/product-category/kraft-food-packaging/', '/get-a-quote/', '/contact-us/',
  '/about-us/', '/privacy-policy/', '/404/',
];
const VIEWPORTS = [[360, 780], [390, 844], [768, 1024], [1024, 768], [1440, 900]];

let pass = 0;
const fail = [];
const check = (ok, label) => (ok ? pass++ : fail.push(label));

const browser = await chromium.launch();
// Runs against a remote origin as well as localhost, where a page load can
// legitimately take longer than Playwright's 30s default.
const NAV_TIMEOUT = Number(process.env.QA_TIMEOUT ?? 60000);

// ------------------------------------------------------------- responsive
for (const [w, h] of VIEWPORTS) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h } });
  const page = await ctx.newPage();
  page.setDefaultTimeout(NAV_TIMEOUT);
  page.setDefaultNavigationTimeout(NAV_TIMEOUT);
  for (const path of PAGES) {
    await page.goto(BASE + path, { waitUntil: 'load' });
    const overflow = await page.evaluate(() => {
      const de = document.documentElement;
      const bad = [];
      if (de.scrollWidth > de.clientWidth + 1) {
        for (const el of document.querySelectorAll('body *')) {
          const r = el.getBoundingClientRect();
          if (r.right > de.clientWidth + 1 || r.left < -1) {
            const s = getComputedStyle(el);
            // A container that scrolls its own content is doing its job.
            if (s.overflowX === 'auto' || s.overflowX === 'scroll') continue;
            if (el.closest('[class*="table-scroll"]')) continue;
            bad.push(`${el.tagName}.${el.className}`.slice(0, 60));
          }
        }
      }
      return { scroll: de.scrollWidth > de.clientWidth + 1, bad: bad.slice(0, 3) };
    });
    check(!overflow.scroll, `${path} @${w}: no horizontal overflow (${overflow.bad.join(', ')})`);
  }
  await ctx.close();
}

// --------------------------------------------------- contrast + tap targets
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
const page = await ctx.newPage();
page.setDefaultTimeout(NAV_TIMEOUT);
page.setDefaultNavigationTimeout(NAV_TIMEOUT);

for (const path of PAGES) {
  await page.goto(BASE + path, { waitUntil: 'load' });

  const issues = await page.evaluate(() => {
    const lum = (c) => {
      const [r, g, b] = c.map((v) => {
        const s = v / 255;
        return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
      });
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    const parse = (s) => (s.match(/[\d.]+/g) ?? []).slice(0, 3).map(Number);
    const bgOf = (el) => {
      let n = el;
      while (n) {
        const bg = getComputedStyle(n).backgroundColor;
        if (bg && !bg.includes('rgba(0, 0, 0, 0)')) return parse(bg);
        n = n.parentElement;
      }
      return [255, 255, 255];
    };

    const contrast = [];
    const small = [];

    for (const el of document.querySelectorAll('p,a,span,li,h1,h2,h3,h4,label,button,td,th,dt,dd,small')) {
      if (!el.textContent?.trim()) continue;
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      const s = getComputedStyle(el);
      if (s.visibility === 'hidden' || s.display === 'none' || s.opacity === '0') continue;
      // Visually-hidden text is clipped to a 1px box and never painted, so its
      // colour against the background is not something a person can perceive.
      if (r.width <= 1 || r.height <= 1 || s.clipPath.startsWith('inset(50%')) continue;
      if (el.closest('.visually-hidden')) continue;
      // only leaf-ish nodes, to avoid measuring a wrapper's inherited colour
      if ([...el.children].some((c) => c.textContent?.trim())) continue;

      const fg = parse(s.color);
      const bg = bgOf(el);
      if (fg.length < 3) continue;
      const l1 = lum(fg);
      const l2 = lum(bg);
      const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
      const px = parseFloat(s.fontSize);
      const bold = Number(s.fontWeight) >= 700;
      const large = px >= 24 || (px >= 18.66 && bold);
      const need = large ? 3 : 4.5;
      if (ratio < need) {
        contrast.push(`${el.tagName} "${el.textContent.trim().slice(0, 28)}" ${ratio.toFixed(2)}:1 (need ${need})`);
      }
    }

    for (const el of document.querySelectorAll('a,button,input,select,textarea,summary')) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      const s = getComputedStyle(el);
      if (s.visibility === 'hidden') continue;
      // WCAG 2.2 exempts links inside a sentence.
      if (el.tagName === 'A' && el.closest('p, li, dd, td')) continue;
      if (r.height < 24 || r.width < 24) {
        small.push(`${el.tagName}.${el.className}`.slice(0, 50) + ` ${Math.round(r.width)}x${Math.round(r.height)}`);
      }
    }

    return { contrast: [...new Set(contrast)].slice(0, 6), small: [...new Set(small)].slice(0, 6) };
  });

  check(issues.contrast.length === 0, `${path}: contrast — ${issues.contrast.join(' | ')}`);
  check(issues.small.length === 0, `${path}: tap targets >= 24px — ${issues.small.join(' | ')}`);

  // landmarks and labels
  const structure = await page.evaluate(() => ({
    main: document.querySelectorAll('main').length,
    h1: document.querySelectorAll('h1').length,
    lang: document.documentElement.lang,
    skip: Boolean(document.querySelector('.skip-link')),
    unlabelled: [...document.querySelectorAll('input:not([type=hidden]),textarea,select')]
      .filter((el) => !el.labels?.length && !el.getAttribute('aria-label')).length,
    emptyLinks: [...document.querySelectorAll('a')]
      .filter((a) => !a.textContent.trim() && !a.getAttribute('aria-label') && !a.querySelector('img[alt]:not([alt=""])')).length,
  }));
  check(structure.main === 1, `${path}: exactly one <main>`);
  check(structure.h1 === 1, `${path}: exactly one h1`);
  check(structure.lang === 'en', `${path}: html lang set`);
  check(structure.skip, `${path}: skip link present`);
  check(structure.unlabelled === 0, `${path}: every form control labelled (${structure.unlabelled} bare)`);
  check(structure.emptyLinks === 0, `${path}: no link without an accessible name (${structure.emptyLinks})`);
}

// ------------------------------------------------- interactive under the CSP
const cspErrors = [];
page.on('console', (m) => {
  if (m.type() === 'error' && /Content Security Policy|Refused to/i.test(m.text())) {
    cspErrors.push(m.text().slice(0, 120));
  }
});

await page.goto(`${BASE}/product/kraft-round-boxes/`, { waitUntil: 'load' });

// tabs
await page.click('#tab-specifications');
check(await page.isVisible('#panel-specifications'), 'product tabs: specifications panel opens');
check(await page.isHidden('#panel-description'), 'product tabs: description panel closes');
await page.click('#tab-faqs');
check(await page.isVisible('#panel-faqs'), 'product tabs: FAQs panel opens');
await page.click('#tab-description');

// gallery
const before = await page.getAttribute('#gallery-main', 'src');
await page.click('.gallery__thumbs li:nth-child(2) .thumb');
const after = await page.getAttribute('#gallery-main', 'src');
check(before !== after, 'product gallery: thumbnail swaps the main image');

// FAQ accordion
await page.click('#tab-faqs');
const faq = page.locator('.faq__item').nth(1);
await faq.locator('summary').click();
check(await faq.locator('.faq__a').isVisible(), 'FAQ accordion: item expands');

// mobile menu
await page.goto(BASE + '/', { waitUntil: 'load' });
check(await page.isHidden('#primary-nav'), 'mobile menu: closed by default');
// The panel fades in over 150ms, so assert on the settled state rather than
// the frame the click happened on.
await page.click('[data-menu-toggle]');
await page.waitForSelector('#primary-nav', { state: 'visible' });
check(await page.isVisible('#primary-nav'), 'mobile menu: opens');
await page.keyboard.press('Escape');
await page.waitForSelector('#primary-nav', { state: 'hidden' });
check(await page.isHidden('#primary-nav'), 'mobile menu: closes on Escape');

// client-side form validation
await page.goto(`${BASE}/get-a-quote/`, { waitUntil: 'load' });
await page.click('#quote-page button[type=submit]');
check(
  await page.locator('#quote-page-name[aria-invalid="true"]').count() === 1,
  'quote form: empty required field is flagged',
);

check(cspErrors.length === 0, `no CSP violations — ${cspErrors.join(' | ')}`);

await browser.close();

console.log(`${pass} passed, ${fail.length} failed`);
if (fail.length) {
  console.log('\nfailures:');
  for (const f of fail.slice(0, 40)) console.log(`  ✗ ${f}`);
  process.exit(1);
}
