#!/usr/bin/env python3
"""Add the migration redirects identified by reconcile-gsc.py.

Every entry is one-to-one and points at a page that serves the same buyer
intent as the URL Google still has indexed. Nothing here points at the
homepage, and nothing is added for a URL whose destination does not exist —
the script verifies each destination against the build before writing.

Legacy /wp-content/uploads/*.jpg URLs are deliberately NOT redirected. They
are image URLs ranking in Google Images, and 301ing an image to an HTML page
is a soft-404 pattern that Google treats as a soft error rather than a
migration. They are recorded in the reconciliation report instead.
"""
import json, os, glob, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, 'dist', 'client')
VERCEL = os.path.join(ROOT, 'vercel.json')

# (legacy URL, destination, reason). Destinations are same-intent pages.
REDIRECTS = [
    # Products dropped in the WordPress -> Astro migration whose intent is
    # already fully served by a live page.
    ('/product/kraft-clothing-packaging-boxes/', '/product/kraft-apparel-packaging-boxes/',
     'Same product under the term the Astro build uses'),
    ('/product/kraft-pill-boxes/', '/product/kraft-medicine-packaging-boxes/',
     'Pill packaging is covered by the medicine packaging page'),
    ('/product/kraft-menu-packaging-boxes/', '/product/kraft-brochure-packaging-boxes/',
     'Printed menu work is the same format as brochure packaging'),
    ('/product/kraft-counter-display-stands/', '/product/kraft-display-boxes/',
     'Counter display units sit within the display box range'),
    ('/product/kraft-craft-kit-boxes/', '/product/kraft-art-supply-packaging/',
     'Craft kit packaging is the same format as art supply packaging'),

    # Uppercase variants Google still holds. Lowercase URL consistency.
    ('/product/Kraft-T-Shirt-Boxes/', '/product/kraft-t-shirt-boxes/', 'Lowercase canonical'),
    # The lowercase page now exists, so the uppercase variant Google holds can
    # finally be pointed at it.
    ('/product/Kraft-Diffuser-Boxes/', '/product/kraft-diffuser-boxes/', 'Lowercase canonical'),
    ('/product-category/Kraft-Food-Packaging/', '/product-category/kraft-food-packaging/',
     'Lowercase canonical'),
    ('/product-category/Kraft-Industrial-Packaging/', '/product-category/kraft-industrial-packaging/',
     'Lowercase canonical'),
    ('/product-category/Kraft-Toy-Packaging/', '/product-category/kraft-toy-packaging/',
     'Lowercase canonical'),
    ('/product-category/Jewelry-&-Accessories-Boxes/', '/product-category/jewelry-accessories-boxes/',
     'Lowercase canonical'),

    # WordPress archive pagination. The Astro category pages list every product
    # on one page, so page 2 has no equivalent and belongs on the category.
    ('/product-category/kraft-food-packaging/page/2/', '/product-category/kraft-food-packaging/',
     'Astro category pages are not paginated'),
    ('/product-category/kraft-packaging-boxes/page/2/', '/product-category/kraft-packaging-boxes/',
     'Astro category pages are not paginated'),
]

live = set()
for f in glob.glob(DIST + '/**/index.html', recursive=True):
    r = '/' + os.path.relpath(f, DIST)[:-len('index.html')].replace(os.sep, '/')
    if r != '/' and not r.endswith('/'): r += '/'
    live.add(r)

cfg = json.load(open(VERCEL))
existing = {d['source'] for d in cfg['redirects']}
dest_of = {d['source']: d['destination'] for d in cfg['redirects']}

added, skipped, errors = [], [], []
for src, dst, why in REDIRECTS:
    if dst not in live:
        errors.append((src, dst, 'destination does not exist in the build'))
        continue
    if dst in existing:
        errors.append((src, dst, 'destination is itself a redirect source — would chain'))
        continue
    if src in existing:
        skipped.append((src, dest_of[src]))
        continue
    cfg['redirects'].append({'source': src, 'destination': dst, 'statusCode': 301})
    added.append((src, dst, why))

# A redirect must not point at another redirect's source, or Google follows a chain.
srcs = {d['source'] for d in cfg['redirects']}
chains = [d for d in cfg['redirects'] if d['destination'] in srcs]

if errors or chains:
    print('NOT WRITING — problems found:')
    for e in errors: print('  ERROR', e)
    for c in chains: print('  CHAIN', c['source'], '->', c['destination'])
    sys.exit(1)

json.dump(cfg, open(VERCEL, 'w'), indent=2)
open(VERCEL, 'a').write('\n')
print(f'added {len(added)} redirects, skipped {len(skipped)} already present')
for s, d, w in added: print(f'  {s}  ->  {d}')
print(f'total redirects now: {len(cfg["redirects"])}, chains: {len(chains)}')
