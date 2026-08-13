#!/usr/bin/env python3
"""Audit contextual internal links in the built site against the linking rules.

The rules, and the check each maps to:

  1  never more than one internal link in a paragraph      -> multi-link
  2  no clustering in a sentence, list item or short block -> multi-link, list-cluster
  5  every anchor describes its destination                -> generic
  6  natural descriptive anchors, normally 3-8 words       -> anchor-length
  9  do not repeat the same anchor across a page           -> repeat-anchor
  10 do not link one destination repeatedly from a page    -> repeat-target
  11 never invent a URL                                    -> missing-target
  12 internal URLs end with a trailing slash               -> no-slash
  15 no internal links inside headings                     -> heading-link

Only *contextual prose* is audited, and the way that set is chosen matters.
The first version of this script blacklisted navigation with regexes like
`<div class="grid">.*?</div>`, which is wrong twice over: `.*?</div>` stops at
the first closing tag rather than the matching one, so the product grid was
never removed, and every product card on a category page was then counted as a
contextual link. That reported 293 violations, nearly all of them invented.

So this works the other way round. It parses with a real tag matcher, takes
only the paragraphs and list items inside known prose containers, and ignores
everything else. A link that is not inside a sentence is navigation, and
navigation is not what these rules are about.

Usage:
    python3 scripts/link-audit.py            audit dist/client
    python3 scripts/link-audit.py --verbose  print every link counted
"""
import os
import re
import sys
from collections import Counter
from html.parser import HTMLParser

ROOT = 'dist/client'

# Containers whose paragraphs are written prose rather than interface.
PROSE_CLASSES = ('prose', 'cat__intro', 'cat__guide', 'cat__block', 'cat__link',
                 'written', 'written__block', 'post__body', 'page__body')

GENERIC = {
    'click here', 'learn more', 'read more', 'visit this page', 'explore our products',
    'explore our services', 'check this out', 'see more', 'view our collection',
    'discover our range', 'our solutions', 'related page', 'here', 'this page',
    'more', 'shop now', 'find out more', 'view all', 'see all', 'get started',
    'view our products', 'our products', 'our range',
}

BLOCK_SKIP = ('header', 'footer', 'nav', 'script', 'style', 'aside')


class ProseCollector(HTMLParser):
    """Collect <p> and <li> content that sits inside a prose container.

    Uses a tag stack, so nesting is handled properly and a container ends where
    it actually ends. Headings are collected separately for the heading-link
    rule.
    """

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack = []          # (tag, classes)
        self.skip_depth = 0
        self.buf = None          # (kind, html-ish text)
        self.paras, self.items, self.heads = [], [], []

    def _in_prose(self):
        return any(c in PROSE_CLASSES for _, cls in self.stack for c in cls)

    def handle_starttag(self, tag, attrs):
        d = dict(attrs)
        cls = (d.get('class') or '').split()
        if tag in BLOCK_SKIP:
            self.skip_depth += 1
        self.stack.append((tag, cls))
        if self.skip_depth:
            return
        if tag in ('p', 'li') and self._in_prose() and self.buf is None:
            self.buf = [tag, '']
        # Headings are only checked inside prose. A listing page legitimately
        # wraps each card title in a heading and links it — that is navigation,
        # and flagging it reported the blog index five times for doing the
        # normal thing.
        elif re.fullmatch(r'h[1-6]', tag) and self._in_prose() and self.buf is None:
            self.buf = ['h', '']
        elif self.buf is not None and tag == 'a':
            self.buf[1] += f'<a href="{d.get("href", "")}">'

    def handle_endtag(self, tag):
        if self.buf is not None:
            if tag == 'a':
                self.buf[1] += '</a>'
            elif (tag in ('p', 'li') and self.buf[0] == tag) or \
                 (re.fullmatch(r'h[1-6]', tag) and self.buf[0] == 'h'):
                kind, html = self.buf
                (self.paras if kind == 'p' else
                 self.items if kind == 'li' else self.heads).append(html)
                self.buf = None
        while self.stack:
            t, _ = self.stack.pop()
            if t == tag:
                break
        if tag in BLOCK_SKIP and self.skip_depth:
            self.skip_depth -= 1

    def handle_data(self, data):
        if self.buf is not None and not self.skip_depth:
            self.buf[1] += data


def routes():
    out = set()
    for base, _, files in os.walk(ROOT):
        if 'index.html' in files:
            u = '/' + os.path.relpath(os.path.join(base, 'index.html'), ROOT)
            out.add(u.replace('index.html', '').replace('//', '/'))
    return out


def links_in(html):
    return re.findall(r'<a href="(/[^"#]*)"[^>]*>(.*?)</a>', html, re.S)


def clean(s):
    return re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', s)).strip()


def main():
    verbose = '--verbose' in sys.argv
    valid = routes()
    problems, pages, total = [], 0, 0

    for base, _, files in os.walk(ROOT):
        if 'index.html' not in files:
            continue
        path = os.path.join(base, 'index.html')
        url = '/' + os.path.relpath(path, ROOT).replace('index.html', '').replace('//', '/')
        c = ProseCollector()
        c.feed(open(path, encoding='utf-8').read())
        pages += 1
        say = lambda kind, msg: problems.append((kind, url, msg))

        for h in c.heads:
            if links_in(h):
                say('heading-link', f'link inside heading: {clean(h)[:60]}')

        for p in c.paras:
            if len(links_in(p)) > 1:
                say('multi-link', f'{len(links_in(p))} links in a paragraph: {clean(p)[:70]}')
        for li in c.items:
            if len(links_in(li)) > 1:
                say('list-cluster', f'multiple links in a list item: {clean(li)[:60]}')

        anchors, targets = [], []
        for href, label_html in [l for blk in (c.paras + c.items) for l in links_in(blk)]:
            label = clean(label_html)
            if not label:
                continue
            total += 1
            anchors.append(label.lower())
            targets.append(href)
            if verbose:
                print(f'  {url:<50} {href:<44} "{label}"')

            if not href.endswith('/') and not re.search(r'\.[a-z0-9]{2,5}$', href):
                say('no-slash', f'{href} has no trailing slash')
            if href.endswith('/') and href not in valid:
                say('missing-target', f'{href} is not a route')
            if label.lower().strip(' .') in GENERIC:
                say('generic', f'generic anchor "{label}" -> {href}')
            n = len(label.split())
            if n < 3 or n > 9:
                say('anchor-length', f'{n}-word anchor "{label}" -> {href}')

        for a, n in Counter(anchors).items():
            if n > 1:
                say('repeat-anchor', f'anchor "{a}" used {n} times')
        for t, n in Counter(targets).items():
            if n > 1:
                say('repeat-target', f'{t} linked {n} times')

    kinds = Counter(k for k, _, _ in problems)
    print(f'{pages} pages, {total} contextual internal links in prose')
    if not problems:
        print('no violations')
        return 0
    print(f'{len(problems)} violations')
    for kind in sorted(kinds, key=lambda k: -kinds[k]):
        print(f'\n{kind} ({kinds[kind]})')
        for k, u, m in problems:
            if k == kind:
                print(f'   {u}\n     {m}')
    return 1


if __name__ == '__main__':
    sys.exit(main())
