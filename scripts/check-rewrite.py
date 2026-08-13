#!/usr/bin/env python3
"""Guard the product-copy rewrites against the ways they can quietly go wrong.

Rewriting 50 product pages by hand is 46,000 words, and the failure modes are
not things you notice by reading one page at a time:

  links     the imported copy carries the internal links. A rewrite that drops
            one loses it silently — this already happened once at scale, when
            written content replaced the import and 467 inline links became a
            list of 309 at the foot of the page.
  subject   a page must name its own subject in its own headings. That is the
            signal that caught kraft-cookie-boxes reading as a bakery page.
  length    a "rewrite" that halves the page is a cut, not a rewrite.
  overlap   two rewrites drifting onto the same paragraphs recreates the
            duplication the cookie page had.

Run against the working tree; compares each rewritten product with its state
in the given git ref (default: the original import).
"""
import json
import re
import subprocess
import sys
from collections import Counter

ORIGIN = 'e07f771'  # the migration commit — the copy as WordPress had it


def load(ref=None):
    if ref:
        raw = subprocess.check_output(['git', 'show', f'{ref}:src/data/products.json'])
        d = json.loads(raw)
    else:
        d = json.load(open('src/data/products.json'))
    prods = d['products'] if isinstance(d, dict) else d
    return {p['slug']: p for p in prods}


def text(html):
    return re.sub(r'<[^>]+>', ' ', html or '')


def links(html):
    return Counter(re.findall(r'<a\s[^>]*href="([^"]+)"', html or ''))


def headings(html):
    return [re.sub(r'<[^>]+>', '', h).strip()
            for h in re.findall(r'<h[1-6][^>]*>(.*?)</h[1-6]>', html or '', re.S)]


# Only sentences count. List items on these pages are service boilerplate —
# "free design and free shipping", "gloss, matte, and spot UV coating options"
# — and they are meant to be identical everywhere, so counting them reported
# duplication between two pages that share nothing but their footer promises.
MIN_PARA_WORDS = 12


def paragraphs(html):
    out = set()
    for p in re.findall(r'<p[^>]*>(.*?)</p>', html or '', re.S):
        t = re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', p)).strip().lower()
        if len(t.split()) >= MIN_PARA_WORDS:
            out.add(t)
    return out


GENERIC = {'kraft', 'box', 'boxes', 'packaging', 'custom', 'wholesale', 'paper',
           'with', 'for', 'and', 'the', 'a', 'of', 'in', 'lid', 'lids'}


def main(slugs):
    now, was = load(), load(ORIGIN)
    problems = []

    # Every other product's paragraphs, for the overlap check.
    others = {s: paragraphs(p.get('description'))
              for s, p in now.items() if s not in slugs}

    for slug in slugs:
        n, o = now.get(slug), was.get(slug)
        if not n:
            problems.append(f'{slug}: not in products.json')
            continue
        new, old = n.get('description') or '', (o or {}).get('description') or ''
        say = lambda m: problems.append(f'{slug}: {m}')

        ln, lo = links(new), links(old)
        for href, count in lo.items():
            if ln[href] < count:
                say(f'lost link {href} ({lo[href]} -> {ln[href]})')

        wn, wo = len(text(new).split()), len(text(old).split())
        if wo and wn < wo * 0.9:
            say(f'shorter than the original ({wo} -> {wn} words)')

        own = {w for w in slug.split('-') if w not in GENERIC}
        heads = ' '.join(headings(new)).lower()
        if own and not any(re.search(rf'\b{re.escape(w[:-1] if w.endswith("s") else w)}', heads)
                           for w in own):
            say(f'no heading names its own subject ({", ".join(sorted(own))})')

        mine = paragraphs(new)
        for other, ps in others.items():
            shared = mine & ps
            if shared:
                say(f'shares {len(shared)} paragraph(s) with {other}')
                break

    print(f'checked {len(slugs)} products, {len(problems)} problems')
    for p in problems:
        print('  ', p)
    return 1 if problems else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
