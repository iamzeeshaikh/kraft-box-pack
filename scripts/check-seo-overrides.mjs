/**
 * Validate the hand-written SEO overrides before they reach a build.
 *
 * Checks the rules the brief set (title 50-60, description 120-130, no colon
 * in titles), plus the specific defects found in the generated metadata:
 * stray space before punctuation, missing space around the pipe, the "KBP"
 * contraction, and the interchangeable Order/Buy/Shop/Get verb stems.
 *
 * Also refuses any override whose route does not exist in the build, so a
 * typo cannot silently apply to nothing.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

// The repo path contains a space, so URL.pathname percent-encodes it.
const ROOT = fileURLToPath(new URL('..', import.meta.url))
const DIST = join(ROOT, 'dist', 'client')

const src = readFileSync(join(ROOT, 'src/data/seo-overrides.ts'), 'utf8')
const entries = []
for (const m of src.matchAll(
  /'([^']+)':\s*\{\s*title:\s*'([^']*)',\s*description:\s*\n?\s*'([^']*)',\s*\}/g,
)) entries.push({ route: m[1], title: m[2], description: m[3] })

let live = new Set()
if (existsSync(DIST)) {
  const walk = (d) => {
    for (const e of readdirSync(d)) {
      const p = join(d, e)
      if (statSync(p).isDirectory()) walk(p)
      else if (e === 'index.html') {
        let r = '/' + relative(DIST, p).replace(/index\.html$/, '').replace(/\\/g, '/')
        if (r !== '/' && !r.endsWith('/')) r += '/'
        live.add(r)
      }
    }
  }
  walk(DIST)
}

const BANNED = ['discover', 'elevate', 'enhance', 'unleash', 'exquisite', 'unparalleled',
  'tailor-made', 'crafted', 'embrace', 'versatility', 'look no further', 'paramount',
  'robust', 'introducing', 'perfect for', 'exceptional', 'distinctive']

const problems = []
const seenTitle = new Map(), seenDesc = new Map()

for (const e of entries) {
  const t = e.title, d = e.description
  const add = (msg) => problems.push(`${e.route}\n    ${msg}`)

  if (t.length < 50 || t.length > 60) add(`title ${t.length} chars (want 50-60): "${t}"`)
  if (d.length < 120 || d.length > 130) add(`description ${d.length} chars (want 120-130)`)
  if (t.includes(':')) add('title contains a colon')
  if (/\s[,.]/.test(t) || /\s[,.]/.test(d)) add('space before punctuation')
  if (/\S\|/.test(t) || /\|\S/.test(t)) add('pipe without surrounding spaces')
  if (/\bKBP\b/.test(t) || /\bKBP\b/.test(d)) add('uses the "KBP" contraction')
  if (/^(Order|Buy|Shop|Get)\b/.test(t)) add('title opens with an interchangeable verb stem')
  for (const b of BANNED) {
    if (t.toLowerCase().includes(b) || d.toLowerCase().includes(b)) add(`uses banned wording "${b}"`)
  }
  if (live.size && !live.has(e.route)) add('route does not exist in the build')

  if (seenTitle.has(t)) add(`duplicate title, also on ${seenTitle.get(t)}`)
  else seenTitle.set(t, e.route)
  if (seenDesc.has(d)) add(`duplicate description, also on ${seenDesc.get(d)}`)
  else seenDesc.set(d, e.route)
}

console.log(`parsed ${entries.length} overrides, ${live.size} live routes`)
const tl = entries.map((e) => e.title.length), dl = entries.map((e) => e.description.length)
if (tl.length) {
  console.log(`title length   min ${Math.min(...tl)} max ${Math.max(...tl)}`)
  console.log(`desc  length   min ${Math.min(...dl)} max ${Math.max(...dl)}`)
}
if (problems.length) {
  console.log(`\n${problems.length} problems:\n`)
  for (const p of problems) console.log('  ' + p)
  process.exit(1)
}
console.log('PASS — every override meets the length and style rules')
