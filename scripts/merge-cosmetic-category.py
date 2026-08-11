#!/usr/bin/env python3
"""Merge the misspelled cosmetic category into the correctly spelled one.

The WordPress export carried two cosmetic categories:

  /product-category/kraft-packaging-boxes/karft-cosmetic-boxes/
      9 products, 39 impressions, 0 clicks, average position 43.1
  /product-category/kraft-cosmetic-boxes/
      2 products,  9 impressions, 0 clicks, average position 15.6

"karft" is a typo. The site was handling it with a canonical tag pointing the
typo page at the correct one, which leaves the typo URL in the sitemap, in the
navigation and in Google's index, splitting the signals for the same term
across two URLs.

Neither URL has ever earned a click, and the correctly spelled one already
ranks substantially better despite holding a fifth of the products. So the
nine products move to the correct category, the typo route stops being built,
and a 301 sends the old URL to the merged page.

Run with --dry to preview.
"""
import json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DRY = '--dry' in sys.argv
TYPO = 'karft-cosmetic-boxes'
CORRECT = 'kraft-cosmetic-boxes'
TYPO_URL = '/product-category/kraft-packaging-boxes/karft-cosmetic-boxes/'
CORRECT_URL = '/product-category/kraft-cosmetic-boxes/'

cats = json.load(open(os.path.join(ROOT, 'src/data/categories.json'), encoding='utf8'))
prods = json.load(open(os.path.join(ROOT, 'src/data/products.json'), encoding='utf8'))

typo_cat = next((c for c in cats if c['slug'] == TYPO), None)
correct_cat = next((c for c in cats if c['slug'] == CORRECT), None)
if not typo_cat or not correct_cat:
    sys.exit('one of the two categories is missing — nothing to merge')

typo_id = str(typo_cat.get('id', '')) if 'id' in typo_cat else None
correct_id = str(correct_cat.get('id', '')) if 'id' in correct_cat else None

moved = []
for p in prods:
    if TYPO in (p.get('categories') or []):
        p['categories'] = [CORRECT if c == TYPO else c for c in p['categories']]
        # de-duplicate in case a product sat in both
        seen, out = set(), []
        for c in p['categories']:
            if c not in seen:
                seen.add(c); out.append(c)
        p['categories'] = out
        moved.append(p['slug'])
    # primaryCategory is stored as the WordPress term id
    if typo_id and correct_id and str(p.get('primaryCategory')) == typo_id:
        p['primaryCategory'] = correct_id

cats = [c for c in cats if c['slug'] != TYPO]

print('DRY RUN — nothing written' if DRY else 'merged')
print(f'  products moved to {CORRECT}: {len(moved)}')
for s in moved:
    print(f'    {s}')
print(f'  categories now: {len(cats)} (was {len(cats) + 1})')
final = sum(1 for p in prods if CORRECT in (p.get('categories') or []))
print(f'  products now in {CORRECT}: {final}')

if not DRY:
    json.dump(cats, open(os.path.join(ROOT, 'src/data/categories.json'), 'w', encoding='utf8'),
              indent=2, ensure_ascii=False)
    json.dump(prods, open(os.path.join(ROOT, 'src/data/products.json'), 'w', encoding='utf8'),
              indent=2, ensure_ascii=False)

    # 301 the typo URL, and the uppercase variant Google also holds, to the
    # merged page. The existing redirect for the uppercase form pointed at the
    # typo URL, which would become a chain, so it is rewritten rather than added.
    vpath = os.path.join(ROOT, 'vercel.json')
    cfg = json.load(open(vpath, encoding='utf8'))
    for d in cfg['redirects']:
        if d['destination'] == TYPO_URL:
            d['destination'] = CORRECT_URL
    if not any(d['source'] == TYPO_URL for d in cfg['redirects']):
        cfg['redirects'].append(
            {'source': TYPO_URL, 'destination': CORRECT_URL, 'statusCode': 301})
    srcs = {d['source'] for d in cfg['redirects']}
    chains = [d for d in cfg['redirects'] if d['destination'] in srcs]
    if chains:
        sys.exit(f'refusing to write — would create a redirect chain: {chains}')
    json.dump(cfg, open(vpath, 'w', encoding='utf8'), indent=2)
    open(vpath, 'a').write('\n')
    print(f'  redirects now: {len(cfg["redirects"])}, chains: 0')
