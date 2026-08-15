/**
 * Injects the spam-path 410 rules into the Vercel build output.
 *
 * The compromised WordPress install had /casino, /slot and /pokie paths
 * created under it, and the live site already answers them with 410. That has
 * to survive the migration: a 404 tells Google the URL is missing and worth
 * retrying, while a 410 tells it the URL is deliberately gone, which is what
 * actually clears them out of the index.
 *
 * This is done here rather than in `vercel.json` because the `rewrites` key of
 * vercel.json is ignored once an adapter has written a Build Output API config,
 * and a rewrite alone cannot set the status code.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const CONFIG = fileURLToPath(new URL('../.vercel/output/config.json', import.meta.url));

/**
 * Three of these — casino, slot, pokie — were named in the old robots.txt and
 * already answered 410 on the old site, along with the variants /slot-gacor/
 * and /casino-online/. Those five are the confirmed injections.
 *
 * judi, togel, sbobet, poker and bandar were 404 on the old site and have
 * never been observed here. They are common gambling-spam prefixes included
 * as a precaution, which costs nothing: a 410 on a path that never existed is
 * indistinguishable from a 404 to a crawler.
 *
 * reports/SPAM_URL_MAP.csv records which is which, per URL.
 */
const SPAM = ['casino', 'slot', 'pokie', 'judi', 'togel', 'sbobet', 'poker', 'bandar'];

const config = JSON.parse(await readFile(CONFIG, 'utf8'));
const route = {
  src: `^/(?:${SPAM.join('|')})(?:[-/].*)?/?$`,
  dest: '/410.html',
  status: 410,
  caseSensitive: false,
};

config.routes ??= [];
if (config.routes.some((r) => r.src === route.src)) {
  console.log('postbuild: 410 route already present');
} else {
  // Must come before the filesystem handler, or a real file would win first.
  const fsIndex = config.routes.findIndex((r) => r.handle === 'filesystem');
  config.routes.splice(fsIndex === -1 ? 0 : fsIndex, 0, route);
  await writeFile(CONFIG, JSON.stringify(config, null, 2));
  console.log(`postbuild: injected 410 route for ${SPAM.length} spam prefixes`);
}
