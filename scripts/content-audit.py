#!/usr/bin/env python3
"""Content, SEO and layout audit for kraftboxpack.com.

Reads the built site in dist/client and writes reports/content-audit.md.

Two rules this follows deliberately:

1. Measure the denominator. Every check starts from the set of pages the
   requirement applies to and subtracts the ones that satisfy it, rather than
   iterating over pages that already have the thing. A check that only
   validates what it finds reports a clean pass while pages missing the thing
   entirely go unseen.

2. Report duplicated *instances*, not just distinct duplicated strings.
   Breaking one paragraph used on 150 pages into six variants raises the
   distinct count and lowers the instance count; only the second reflects what
   a reader or a crawler encounters.
"""
import re, os, json, glob, html, collections, itertools, statistics, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, 'dist', 'client')
OUT = os.path.join(ROOT, 'reports', 'content-audit.md')

TAG = re.compile(r'<[^>]+>')
def text(s: str) -> str:
    return html.unescape(re.sub(r'\s+', ' ', TAG.sub(' ', s))).strip()

def page_type(route: str) -> str:
    if route == '/': return 'home'
    if route.startswith('/product-category/'): return 'category'
    if route.startswith('/product/'): return 'product'
    if route.startswith('/blog/'): return 'blog' if route != '/blog/' else 'blog-index'
    if route in ('/privacy-policy/', '/terms-conditions/', '/refund_returns/'): return 'legal'
    return 'other'

pages = {}
for f in glob.glob(DIST + '/**/index.html', recursive=True):
    route = '/' + os.path.relpath(f, DIST)[:-len('index.html')].replace(os.sep, '/')
    if route != '/' and not route.endswith('/'): route += '/'
    h = open(f, encoding='utf8').read()

    m = re.search(r'<main\b.*?>(.*)</main>', h, re.S)
    body = m.group(1) if m else h
    body = re.sub(r'<(script|style|nav|footer|form)\b.*?</\1>', ' ', body, flags=re.S)

    paras = [text(x) for x in re.findall(r'<p\b[^>]*>(.*?)</p>', body, re.S)]
    paras = [p for p in paras if len(p) >= 60]
    heads = [text(x[1]) for x in re.findall(r'<h([23])\b[^>]*>(.*?)</h\1>', body, re.S)]

    t = re.search(r'<title>(.*?)</title>', h, re.S)
    d = re.search(r'<meta name="description" content="([^"]*)"', h)
    can = re.search(r'<link rel="canonical" href="([^"]*)"', h)
    og = re.search(r'<meta property="og:title" content="([^"]*)"', h)

    # FAQ questions: <summary><span>Q</span> is the FAQ pattern; a bare
    # <summary> also matches footer accordions and inflates every page.
    faq_vis = [text(x) for x in re.findall(r'<summary[^>]*>\s*<span[^>]*>(.*?)</span>', h, re.S)]
    if not faq_vis:
        faq_vis = [text(x) for x in re.findall(r'<summary[^>]*>(.*?)</summary>', h, re.S)]

    faq_schema, n_faqpage, schema_types = [], 0, set()
    for b in re.findall(r'<script type="application/ld\+json">(.*?)</script>', h, re.S):
        try: data = json.loads(b)
        except Exception: continue
        stack = [data]
        while stack:
            n = stack.pop()
            if isinstance(n, dict):
                ty = n.get('@type')
                if isinstance(ty, str): schema_types.add(ty)
                if ty == 'FAQPage':
                    n_faqpage += 1
                    for q in n.get('mainEntity', []) or []:
                        faq_schema.append(text(str(q.get('name', ''))))
                stack.extend(v for v in n.values() if isinstance(v, (dict, list)))
            elif isinstance(n, list): stack.extend(n)

    pages[route] = {
        'type': page_type(route),
        'paras': paras, 'heads': heads,
        'words': len(text(body).split()),
        'title': text(t.group(1)) if t else '',
        'desc': d.group(1) if d else '',
        'og': og.group(1) if og else '',
        'canonical': can.group(1) if can else '',
        'h1': [text(x) for x in re.findall(r'<h1\b[^>]*>(.*?)</h1>', h, re.S)],
        'footers': len(re.findall(r'<footer\b', h)),
        'faq_vis': faq_vis, 'faq_schema': faq_schema, 'n_faqpage': n_faqpage,
        'schema': schema_types,
        'noindex': bool(re.search(r'<meta name="robots"[^>]*noindex', h)),
        'links': sorted(set(re.findall(r'href="(/[^"#?]*)"', body))),
        # Orphan status depends on whether anything links to a page at all, so
        # it has to count nav and footer. Judging it from body links alone
        # reported the five footer-linked pages as orphans when they are not.
        'all_page_links': sorted(set(re.findall(r'href="(/[^"#?]*)"', h))),
        'all_links': re.findall(r'<a\b[^>]*href="(/[^"]*)"[^>]*>(.*?)</a>', body, re.S),
        'para_links': [re.findall(r'<a\b[^>]*href="(/[^"]*)"[^>]*>(.*?)</a>', p, re.S)
                       for p in re.findall(r'<p\b[^>]*>(.*?)</p>', body, re.S)],
    }

idx = {r: p for r, p in pages.items() if not p['noindex']}

def dup_groups(key):
    c = collections.Counter(p[key] for p in idx.values() if p[key])
    return {v: n for v, n in c.items() if n > 1}

# ---------- duplication ----------
para_count = collections.Counter()
for p in idx.values():
    for s in set(p['paras']): para_count[s] += 1
dup_paras = {s: n for s, n in para_count.items() if n > 1}
dup_para_instances = sum(dup_paras.values())

head_count = collections.Counter()
for p in idx.values():
    for s in set(p['heads']): head_count[s] += 1
dup_heads = {s: n for s, n in head_count.items() if n > 1}

faqq = collections.Counter()
for p in idx.values():
    for q in set(p['faq_vis']): faqq[q] += 1
dup_faqq = {q: n for q, n in faqq.items() if n > 1}

faq_sets = collections.Counter(tuple(sorted(p['faq_vis'])) for p in idx.values() if p['faq_vis'])
identical_faq_sets = sum(1 for v in faq_sets.values() if v > 1)

head_seq = collections.Counter(tuple(p['heads']) for p in idx.values() if p['heads'])
identical_head_seq = sum(1 for v in head_seq.values() if v > 1)

link_sets = collections.Counter(tuple(p['links']) for p in idx.values())
identical_link_sets = {k: v for k, v in link_sets.items() if v > 1}

# ---------- similarity ----------
def jaccard(a, b):
    if not a or not b: return 0.0
    A, B = set(a), set(b)
    return len(A & B) / len(A | B)

sim = {}
for grp in ('product', 'category', 'blog', 'other'):
    rs = [r for r, p in idx.items() if p['type'] == grp and p['paras']]
    n = sum(1 for a, b in itertools.combinations(rs, 2)
            if jaccard(idx[a]['paras'], idx[b]['paras']) > 0.20)
    sim[grp] = (n, len(rs))

uniq_share = collections.defaultdict(list)
for r, p in idx.items():
    if not p['paras']: continue
    u = sum(1 for s in set(p['paras']) if para_count[s] == 1)
    uniq_share[p['type']].append(100.0 * u / len(set(p['paras'])))

# ---------- structural ----------
routes = set(pages)
inbound = collections.Counter()
broken = []
for r, p in pages.items():
    for l in p['all_page_links']:
        t = l if l.endswith('/') else l + '/'
        if re.search(r'\.(xml|txt|json|png|jpe?g|webp|svg|ico|pdf|webmanifest)$', l): continue
        inbound[t] += 1
        if t not in routes: broken.append((r, l))
orphans = [r for r in idx if r != '/' and inbound[r] == 0]

thin = sorted((p['words'], r) for r, p in idx.items() if p['words'] < 600)
multi_h1 = [r for r, p in idx.items() if len(p['h1']) != 1]
multi_footer = [r for r, p in idx.items() if p['footers'] > 1]
multi_faq = [r for r, p in idx.items() if p['n_faqpage'] > 1]
no_canon = [r for r, p in idx.items() if not p['canonical']]
no_schema = [r for r, p in idx.items() if not p['schema']]

FAQ_REQUIRED = ('product', 'category', 'home', 'blog', 'other')
faq_short = sorted((len(p['faq_vis']), r) for r, p in idx.items()
                   if p['type'] in FAQ_REQUIRED and len(p['faq_vis']) < 10)
faq_mismatch = [r for r, p in idx.items()
                if p['faq_vis'] and p['faq_schema'] and p['faq_vis'] != p['faq_schema']]
faq_noschema = [r for r, p in idx.items() if p['faq_vis'] and not p['faq_schema']]

GENERIC = {'click here','read more','learn more','view','explore','here','see more','more',
           'this page','discover','link','shop now','view more','check it out'}
multi_link_para, generic_anchor, short_anchor = [], [], []
for r, p in idx.items():
    for links in p['para_links']:
        if len(links) > 1: multi_link_para.append((r, len(links)))
        for href, inner in links:
            a = text(inner)
            if a.lower() in GENERIC: generic_anchor.append((r, a))
            elif len(a.split()) < 2 and a: short_anchor.append((r, a))

# ---------- write ----------
os.makedirs(os.path.dirname(OUT), exist_ok=True)
o = []
w = o.append
w('# kraftboxpack.com — content and SEO audit\n')
w(f'`{len(pages)}` pages built, `{len(idx)}` indexable.\n')

w('| type | pages |\n|---|---|')
for t, n in collections.Counter(p['type'] for p in pages.values()).most_common():
    w(f'| {t} | {n} |')
w('')

w('## Headline\n')
w('| check | result |\n|---|---|')
w(f'| Duplicate title tags | {len(dup_groups("title"))} groups |')
w(f'| Duplicate meta descriptions | {len(dup_groups("desc"))} groups |')
w(f'| Duplicate OG titles | {len(dup_groups("og"))} groups |')
w(f'| Duplicate H1s | {len(dup_groups("h1") if False else {k:v for k,v in collections.Counter(p["h1"][0] for p in idx.values() if p["h1"]).items() if v>1})} groups |')
w(f'| Pages with != 1 H1 | {len(multi_h1)} |')
w(f'| Pages with >1 footer | {len(multi_footer)} |')
w(f'| Pages with >1 FAQPage schema | {len(multi_faq)} |')
w(f'| Missing canonical | {len(no_canon)} |')
w(f'| Missing schema | {len(no_schema)} |')
w(f'| **Distinct duplicated paragraphs** | {len(dup_paras)} |')
w(f'| **Duplicated paragraph instances** | {dup_para_instances} |')
w(f'| Distinct duplicated headings | {len(dup_heads)} |')
w(f'| Duplicated FAQ questions | {len(dup_faqq)} |')
w(f'| Identical FAQ sets | {identical_faq_sets} groups |')
w(f'| Identical heading sequences | {identical_head_seq} groups |')
w(f'| Identical internal-link sets | {len(identical_link_sets)} groups |')
w(f'| Pages under 10 FAQs (where required) | {len(faq_short)} |')
w(f'| FAQ visible/schema mismatch | {len(faq_mismatch)} |')
w(f'| FAQs rendered but no schema | {len(faq_noschema)} |')
w(f'| Thin pages (<600 words) | {len(thin)} |')
w(f'| Orphan pages | {len(orphans)} |')
w(f'| Broken internal links | {len(broken)} |')
w(f'| Paragraphs with >1 internal link | {len(multi_link_para)} |')
w(f'| Generic anchors | {len(generic_anchor)} |')
w('')

w('## Body-copy similarity\n')
w('| group | pages | pairs >20% similar |\n|---|---|---|')
for g, (n, tot) in sim.items(): w(f'| {g} | {tot} | {n} |')
w('')
w('## Unique-paragraph share\n')
w('Share of a page\'s paragraphs appearing on no other page.\n')
w('| group | pages | min | median | max |\n|---|---|---|---|---|')
for g, v in sorted(uniq_share.items()):
    if v: w(f'| {g} | {len(v)} | {min(v):.0f}% | {statistics.median(v):.0f}% | {max(v):.0f}% |')
w('')

def table(title, rows, cols):
    w(f'## {title}\n')
    if not rows: w('None.\n'); return
    w('| ' + ' | '.join(cols) + ' |'); w('|' + '---|' * len(cols))
    for r in rows[:40]: w('| ' + ' | '.join(str(x) for x in r) + ' |')
    if len(rows) > 40: w(f'\n…and {len(rows)-40} more.')
    w('')

table('Most-repeated paragraphs',
      [(n, s[:110] + '…') for s, n in sorted(dup_paras.items(), key=lambda x: -x[1])[:20]],
      ['pages', 'paragraph'])
table('Most-repeated headings',
      [(n, s) for s, n in sorted(dup_heads.items(), key=lambda x: -x[1])[:20]],
      ['pages', 'heading'])
table('Most-repeated FAQ questions',
      [(n, q) for q, n in sorted(dup_faqq.items(), key=lambda x: -x[1])[:15]],
      ['pages', 'question'])
table('Pages under 10 FAQs', faq_short, ['FAQs', 'route'])
table('Thin pages', thin, ['words', 'route'])
table('Orphan pages', [(r,) for r in orphans], ['route'])
table('Broken internal links', broken, ['on page', 'href'])
table('Identical internal-link sets',
      [(v, ', '.join(r for r in idx if tuple(idx[r]['links']) == k)[:120])
       for k, v in sorted(identical_link_sets.items(), key=lambda x: -x[1])[:15]],
      ['pages', 'routes'])

open(OUT, 'w', encoding='utf8').write('\n'.join(o) + '\n')

print(f'pages {len(pages)} | indexable {len(idx)}')
print(f'dup titles {len(dup_groups("title"))} | dup descs {len(dup_groups("desc"))}')
print(f'dup paragraphs {len(dup_paras)} distinct / {dup_para_instances} instances')
print(f'dup headings {len(dup_heads)} | dup FAQ Qs {len(dup_faqq)} | identical FAQ sets {identical_faq_sets}')
print(f'identical heading seqs {identical_head_seq} | identical link sets {len(identical_link_sets)}')
print(f'<10 FAQs {len(faq_short)} | FAQ mismatch {len(faq_mismatch)} | thin {len(thin)}')
print(f'orphans {len(orphans)} | broken {len(broken)} | multi-H1 {len(multi_h1)} | multi-footer {len(multi_footer)}')
print(f'multi-link paras {len(multi_link_para)} | generic anchors {len(generic_anchor)}')
for g, (n, tot) in sim.items(): print(f'  similarity [{g}]: {n} pairs >20% of {tot} pages')
print(f'→ {os.path.relpath(OUT, ROOT)}')
