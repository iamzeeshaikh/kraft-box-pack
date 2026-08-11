#!/usr/bin/env python3
"""Normalise the imported product copy against the site's own published facts.

Two problems, both carried over from the WordPress content.

1. Lead time. Sixteen different figures appear across the 158 product pages
   (7-10 appears sixty-one times, plus 10-12, 8-12, 5-7, 3-7, 1-3 and others)
   while the header strip, the quote page and the feature list all say 8-10
   business days. A buyer comparing two product pages currently sees two
   different answers. Everything is brought to the published 8-10.

2. Search-query fragments written into sentences: "kraft bakery boxes near me",
   "kraft box with window amazon alternatives". These read as scraped keyword
   text rather than copy written for a buyer.

Deliberately NOT changed:
  - FSC references. The business confirmed these stay.
  - The refund, returns, shipping, terms and privacy pages. Those are the
    source of truth for business facts, not something to edit — see
    src/data/business-facts.ts, which restates them for the rest of the site.

Every edit is logged to reports/claim-fixes.json. Run with --dry to preview.
"""
import json, re, sys, os, collections

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'src', 'data', 'products.json')
DRY = '--dry' in sys.argv

FIELDS = ('description', 'shortDescription', 'seoDescription')

# Only figures followed by a day unit, so dimensions and quantities are safe.
LEAD = re.compile(r'\b\d{1,2}\s*[–-]\s*\d{1,2}(\s*)(business\s+)?days\b', re.I)

def fix_lead(text):
    """One figure and one phrasing. A bare "8-10 days" alongside "8-10 business
       days" still reads as two different promises to a buyer counting days."""
    return LEAD.sub('8-10 business days', text)

QUERY = [
    (r'Whether you are searching for <strong>[^<]*?near me</strong>,\s*sourcing\s*',
     'Whether you are sourcing '),
    (r'<strong>([^<]*?)\s+[Nn]ear [Mm]e</strong>', r'<strong>\1</strong>'),
    (r'<strong>([^<]*?)\s+amazon alternatives</strong>', r'<strong>\1</strong>'),
    (r'([A-Za-z][\w\s]*?)\s+near me\s+searches have increased', r'Demand for \1 has increased'),
    (r'\bIf you are searching for\b', 'If you are comparing'),
    (r'\s+near me\b', ''),
    (r'\s+[Nn]ear [Mm]e\b', ''),
    (r'\s+amazon alternatives\b', ' alternatives'),
    (r'\s+[Aa]mazon\b', ''),
]

products = json.load(open(SRC, encoding='utf8'))
log = collections.defaultdict(list)
counts = collections.Counter()

def clean(text, slug):
    """Apply every rule to one string, logging what fired."""
    original = text

    new = fix_lead(text)
    if new != text:
        counts['lead-time'] += 1
        log['lead-time'].append(slug)
        text = new

    for rx, rep in QUERY:
        new = re.sub(rx, rep, text)
        if new != text:
            counts['query-fragment'] += 1
            log['query-fragment'].append(slug)
            text = new

    text = re.sub(r'  +', ' ', text)
    text = re.sub(r'\s+([,.])', r'\1', text)
    return text if text != original else original

def walk(node, slug):
    """The lead time also appears inside the specs table and the FAQ answers,
       which are nested structures rather than flat strings."""
    if isinstance(node, str):
        return clean(node, slug)
    if isinstance(node, list):
        return [walk(v, slug) for v in node]
    if isinstance(node, dict):
        return {k: walk(v, slug) for k, v in node.items()}
    return node

for p in products:
    for f in FIELDS:
        if isinstance(p.get(f), str) and p[f]:
            p[f] = clean(p[f], p['slug'])
    for f in ('specs', 'faqs'):
        if f in p and p[f]:
            p[f] = walk(p[f], p['slug'])

report = {k: sorted(set(v)) for k, v in log.items()}
os.makedirs(os.path.join(ROOT, 'reports'), exist_ok=True)
if not DRY:
    json.dump(products, open(SRC, 'w', encoding='utf8'), indent=2, ensure_ascii=False)
    json.dump(report, open(os.path.join(ROOT, 'reports', 'claim-fixes.json'), 'w'), indent=1)

print('DRY RUN — nothing written' if DRY else 'products.json rewritten')
for k in ('lead-time', 'query-fragment'):
    print(f'  {k:16s} {counts[k]:4d} edits across {len(set(log[k])):3d} products')

blob = json.dumps(products)
for name, rx in (('near me', r'near me'), ('amazon', r'amazon')):
    print(f'  remaining "{name}": {len(re.findall(rx, blob, re.I))}')
leads = collections.Counter(m.group(0).lower() for m in LEAD.finditer(blob))
print('  lead-time figures remaining:', dict(leads))
print(f'  FSC references left untouched: {len(re.findall(r"FSC", blob))}')
