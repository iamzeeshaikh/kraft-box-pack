#!/usr/bin/env python3
"""Reconcile Search Console landing pages against the live Astro build.

Search Console reports 294 landing pages; the build produces 191 routes. Every
URL in the gap is classified here so that none of it is handled by guesswork,
and so the ones that still rank are treated as assets rather than as 404s.

Writes reports/gsc-reconciliation.json for the Markdown report to consume.
"""
import openpyxl, json, os, re, glob, collections

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
XL = os.path.expanduser(
    '~/Downloads/https___kraftboxpack.com_-Performance-on-Search-2026-08-11.xlsx')
DIST = os.path.join(ROOT, 'dist', 'client')

wb = openpyxl.load_workbook(XL, data_only=True)
pages = []
for r in wb['Pages'].iter_rows(min_row=2, values_only=True):
    if not r[0]: continue
    pages.append({'url': r[0], 'clicks': int(r[1] or 0), 'impr': int(r[2] or 0),
                  'ctr': float(r[3] or 0), 'pos': float(r[4] or 0)})

live = set()
for f in glob.glob(DIST + '/**/index.html', recursive=True):
    r = '/' + os.path.relpath(f, DIST)[:-len('index.html')].replace(os.sep, '/')
    if r != '/' and not r.endswith('/'): r += '/'
    live.add(r)

vercel = json.load(open(os.path.join(ROOT, 'vercel.json')))
redirect_src = {d['source'].rstrip('/') + '/' for d in vercel.get('redirects', [])}

def path(u):
    p = re.sub(r'^https?://[^/]+', '', u)
    return p if p.endswith('/') else p + '/'

by_path = {}
for p in pages:
    k = path(p['url'])
    if k not in by_path or p['impr'] > by_path[k]['impr']:
        by_path[k] = dict(p, path=k)

SPAM = ('/wp-includes/', '/wp-json/', '/xmlrpc', '/feed/', '/?')

def classify(u, rec):
    low = u.lower()
    if u in redirect_src:
        return 'already-redirected', 'Redirect already present in vercel.json'
    if u.startswith('/wp-content/uploads/'):
        return 'legacy-image', 'WordPress image URL indexed by Google Images; the file now ships hashed under /_astro/'
    if re.search(r'/page/\d+/$', u):
        return 'legacy-pagination', 'WordPress archive pagination; the Astro category pages are not paginated'
    if any(s in u for s in SPAM):
        return 'spam-or-legacy-wp', 'Legacy WordPress endpoint or spam URL'
    if low != u and low in live:
        return 'case-variant', f'Uppercase variant of the live route {low}'
    if u.startswith('/product/'):
        return 'lost-product', 'Product page that existed on WordPress and was not carried into the Astro build'
    if u.startswith('/product-category/'):
        if low in live:
            return 'case-variant', f'Uppercase variant of the live route {low}'
        return 'lost-category', 'Category archive that existed on WordPress and has no Astro equivalent'
    return 'unclassified', 'Needs manual review'

rows = []
for u in sorted(set(by_path) - live, key=lambda x: -by_path[x]['impr']):
    rec = by_path[u]
    kind, why = classify(u, rec)
    rows.append({**rec, 'kind': kind, 'why': why})

summary = collections.Counter(r['kind'] for r in rows)
impr = collections.Counter()
clicks = collections.Counter()
for r in rows:
    impr[r['kind']] += r['impr']
    clicks[r['kind']] += r['clicks']

out = {
    'gsc_pages': len(by_path),
    'live_routes': len(live),
    'missing': rows,
    'live_not_in_gsc': sorted(live - set(by_path)),
    'summary': [{'kind': k, 'urls': n, 'impressions': impr[k], 'clicks': clicks[k]}
                for k, n in summary.most_common()],
}
os.makedirs(os.path.join(ROOT, 'reports'), exist_ok=True)
json.dump(out, open(os.path.join(ROOT, 'reports', 'gsc-reconciliation.json'), 'w'), indent=1)

print(f"GSC landing pages {len(by_path)} | live routes {len(live)} | gap {len(rows)}")
print(f"{'kind':22s} {'urls':>5s} {'impr':>7s} {'clicks':>7s}")
for k, n in summary.most_common():
    print(f'{k:22s} {n:5d} {impr[k]:7d} {clicks[k]:7d}')
print()
print('Lost products still ranking (position < 20):')
for r in rows:
    if r['kind'] == 'lost-product' and r['pos'] < 20:
        print(f"  pos {r['pos']:5.1f}  {r['impr']:5d} impr  {r['clicks']:3d} clk  {r['path']}")
