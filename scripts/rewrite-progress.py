#!/usr/bin/env python3
"""How much of the product-copy rewrite is done, and what is next.

The rewrite runs across sessions, so "done" has to be derived rather than
remembered. A product counts as rewritten when its description differs from
the state at commit 581e3a0 — the last commit before the first rewrite — which
is a fact in git rather than a note someone has to keep updating.

Usage:
    python3 scripts/rewrite-progress.py          summary and the next 12
    python3 scripts/rewrite-progress.py --all    every remaining product
"""
import json
import re
import subprocess
import sys

BASELINE = '581e3a0'  # last commit before the rewrite began


def load_baseline():
    raw = subprocess.check_output(['git', 'show', f'{BASELINE}:src/data/products.json'])
    d = json.loads(raw)
    prods = d['products'] if isinstance(d, dict) else d
    return {p['slug']: p.get('description', '') for p in prods}


def main():
    base = load_baseline()
    d = json.load(open('src/data/products.json'))
    prods = d['products'] if isinstance(d, dict) else d

    gsc = json.load(open('reports/gsc.json'))
    impr = {
        re.sub(r'^https?://(www\.)?kraftboxpack\.com', '', r['url']): r.get('impr', 0)
        for r in gsc['pages']
    }

    done, todo = [], []
    for p in prods:
        desc = p.get('description') or ''
        if not desc.strip():
            continue  # the four recreated products carry written content instead
        words = len(re.sub(r'<[^>]+>', ' ', desc).split())
        row = (impr.get(p['url'], 0), p['slug'], words)
        (done if base.get(p['slug'], '') != desc else todo).append(row)

    done.sort(reverse=True)
    todo.sort(reverse=True)
    total_i = sum(r[0] for r in done) + sum(r[0] for r in todo)

    print(f'rewritten : {len(done):>3} products, {sum(r[0] for r in done):>7,} impressions '
          f'({sum(r[0] for r in done) / total_i * 100:.0f}%)')
    print(f'remaining : {len(todo):>3} products, {sum(r[0] for r in todo):>7,} impressions')

    out_of_range = [r for r in done if not 800 <= r[2] <= 1000]
    if out_of_range:
        print(f'\nWARNING — {len(out_of_range)} rewritten pages outside 800-1000 words:')
        for i, s, w in out_of_range:
            print(f'  {w:>5}w  {s}')

    if not todo:
        print('\nnothing left.')
        return 0

    show = todo if '--all' in sys.argv else todo[:12]
    print(f'\nnext {len(show)} by impressions:')
    for i, s, w in show:
        print(f'  {i:>5} impr  {w:>5}w  {s}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
