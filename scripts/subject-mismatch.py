#!/usr/bin/env python3
"""Find product pages whose body copy is not about the product.

`kraft-cookie-boxes` was the case that prompted this: it drew 1,350 impressions
at position 12.58 and converted at 0.37%, because it ranked for cookies while
its body was a copy of the bakery page — headings, call to action and all. The
page was not weak, it was about the wrong thing.

Search Console cannot be asked this directly: its export gives pages and
queries in separate sheets with no join, so there is no way to line a page up
against the terms it ranks for. The signal is in the copy instead. Every
product has a subject in its own name — cookie, mascara, diffuser — and a page
that barely says its own subject, while repeating some other product's subject,
is a page that was copied and never rewritten.

The test is on the **headings**, not the body. Body vocabulary overlaps
naturally — a flower box page says "bouquet", a syrup page says "bottle", and
counting those as evidence flagged thirty pages of which nearly all were fine.
A heading is written for one page. A heading naming a different product is not
coincidence.

The original cookie page proves the signal: its body said "cookie" 4 times and
"bakery" 20, which is suggestive but arguable. Its headings said "cookie" **0**
times and "bakery" **4** — "Custom Kraft Boxes for Bakery Goods", "Benefits of
kraft bakery packaging", "Key elements of kraft bakery box design". That is not
arguable.

Per page:

  own   times the headings name the page's own subject
  rival times they name some other product's subject

Flagged when the headings never name the page's own subject, or name another
product's more often. Ranked by Search Console impressions, because a page
nobody sees is not worth rewriting first.
"""
import json
import os
import re
import sys
from collections import Counter
from typing import Optional

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Words that appear in nearly every product name and so identify nothing.
GENERIC = {
    'kraft', 'box', 'boxes', 'packaging', 'custom', 'wholesale', 'paper',
    'with', 'for', 'and', 'the', 'a', 'of', 'in', 'brown', 'black', 'white',
    'colored', 'coloured', 'mini', 'small', 'large', 'luxury', 'premium',
    'eco', 'friendly', 'recycled', 'printed', 'plain', 'bulk', 'pack',
    'packs', 'style', 'styles', 'size', 'sizes', 'lid', 'lids',
}


# Vocabulary any packaging page uses regardless of what it sells. Counting
# these as another product's subject flagged "carton" on a meat page and
# "product" on nine others — noise, not copied copy.
COMMON = {
    'product', 'carton', 'cartons', 'insert', 'inserts', 'tray', 'trays',
    'sleeve', 'sleeves', 'display', 'kit', 'kits', 'gift', 'gifts', 'shipping',
    'mailer', 'mailers', 'tube', 'tubes', 'bag', 'bags', 'food', 'container',
    'containers', 'supply', 'supplies', 'window', 'windows',
    # Category names, which any product inside them says without it meaning
    # the page was copied: an earring page naturally says "jewelry".
    'jewelry', 'jewellery', 'cosmetic', 'cosmetics', 'apparel', 'retail',
    'storage', 'bouquet', 'bottle', 'bottles',
}


def subjects_of(slug: str) -> set:
    """Every distinctive word in a product slug.

    All of them, not just the head noun. Taking only the last word made
    `kraft-candle-sleeve-boxes` a page about "sleeve" whose top rival was
    "candle" — its own name. Compound subjects are the norm here.
    """
    return {singular(w) for w in slug.split('-') if w not in GENERIC}


def singular(w: str) -> str:
    if w.endswith('ies') and len(w) > 4:
        return w[:-3] + 'y'
    if w.endswith('es') and len(w) > 4:
        return w[:-2]
    if w.endswith('s') and not w.endswith('ss') and len(w) > 3:
        return w[:-1]
    return w


def count(text: str, term: str) -> int:
    stem = singular(term)
    return len(re.findall(rf'\b{re.escape(stem)}s?\b', text))


def same_subject(a: str, b: str) -> bool:
    """Whether two subject words are really the same thing.

    "magnet" and "magnetic" are one subject, but they are separate products in
    the catalogue, so the magnet page kept being flagged for saying "magnetic".
    A shared prefix of five or more characters is enough to tell.
    """
    a, b = singular(a), singular(b)
    if a == b:
        return True
    short, long = sorted((a, b), key=len)
    return len(short) >= 5 and long.startswith(short)


def main() -> int:
    products = json.load(open(os.path.join(ROOT, 'src/data/products.json')))
    products = products['products'] if isinstance(products, dict) else products

    gsc = json.load(open(os.path.join(ROOT, 'reports/gsc.json')))
    stats = {
        re.sub(r'^https?://(www\.)?kraftboxpack\.com', '', r['url']): r
        for r in gsc['pages']
    }

    subjects = {}
    for p in products:
        for s in subjects_of(p['slug']):
            subjects.setdefault(s, set()).add(p['slug'])

    rows = []
    for p in products:
        desc = p.get('description') or ''
        if not desc.strip():
            continue
        heads = ' '.join(re.findall(r'<h[1-6][^>]*>(.*?)</h[1-6]>', desc, re.S))
        if not heads.strip():
            continue
        text = re.sub(r'<[^>]+>', ' ', heads).lower()
        own_terms = subjects_of(p['slug'])
        if not own_terms:
            continue
        # The page's own subject is however often it says ANY word from its own
        # name, taking the strongest — a page called "heart shaped" that says
        # "heart" forty times is about itself.
        own_n = max(count(text, t) for t in own_terms)
        own = max(own_terms, key=lambda t: count(text, t))

        rivals = Counter()
        for term, owners in subjects.items():
            if term in COMMON or any(same_subject(term, o) for o in own_terms):
                continue
            n = count(text, term)
            if n:
                rivals[term] = n
        rival, rival_n = rivals.most_common(1)[0] if rivals else ('', 0)

        st = stats.get(p['url'], {})
        rows.append({
            'slug': p['slug'],
            'own': own,
        'own_terms': sorted(own_terms),
            'own_n': own_n,
            'rival': rival,
            'rival_n': rival_n,
            'impr': st.get('impr', 0),
            'clicks': st.get('clicks', 0),
            'ctr': st.get('ctr', 0),
            'pos': st.get('pos', 0),
        })

    flagged = [r for r in rows if r['own_n'] == 0 or r['rival_n'] > r['own_n']]
    flagged.sort(key=lambda r: -r['impr'])

    print('signal: does the page name its own subject in its own headings?\n')
    print(f'products checked: {len(rows)}')
    print(f'flagged: {len(flagged)}\n')
    print(f'{"impr":>6} {"clicks":>6} {"CTR":>6} {"pos":>6}  {"own in headings":<22} {"rival in headings":<22} page')
    print('-' * 118)
    for r in flagged:
        own = f'{r["own"]}×{r["own_n"]}'
        rival = f'{r["rival"]}×{r["rival_n"]}' if r['rival_n'] else '—'
        print(
            f'{r["impr"]:>6} {r["clicks"]:>6} {r["ctr"]*100:>5.2f}% {r["pos"]:>6.1f}  '
            f'{own:<26} {rival:<18} /product/{r["slug"]}/'
        )

    out = os.path.join(ROOT, 'reports/subject-mismatch.json')
    json.dump(flagged, open(out, 'w'), indent=2)
    print(f'\n-> {out}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
