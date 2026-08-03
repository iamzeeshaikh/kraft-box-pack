/**
 * Serves the built output the way Vercel will.
 *
 * `astro preview` refuses to run under the Vercel adapter, and the dev server
 * does not apply the production security headers, the redirect table or the
 * 410 rules — all of which are exactly what needs checking before a deploy. So
 * this reads `.vercel/output/static` for files and `vercel.json` for routing,
 * and every QA script runs against it.
 *
 *   node scripts/preview-server.mjs [port]
 */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../.vercel/output/static/', import.meta.url));
const CONFIG = fileURLToPath(new URL('../vercel.json', import.meta.url));
const PORT = Number(process.argv[2] ?? process.env.PORT ?? 4321);

/** Spam paths injected into the compromised WordPress install. */
const GONE_PATTERNS = [/^\/(?:casino|slot|pokie|judi|togel|sbobet|poker|bandar)(?:[-/].*)?\/?$/i];

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

let config = { redirects: [], headers: [] };
try {
  config = JSON.parse(await readFile(CONFIG, 'utf8'));
} catch {
  /* vercel.json is optional until it is written */
}

/** Vercel's source patterns are path-to-regexp; these are simple enough for a regex. */
function toRegex(source) {
  return new RegExp(
    '^' +
      source
        .replace(/[.+?^${}()|[\]\\]/g, '\\$&')
        .replace(/\/:\w+\*/g, '(?:/.*)?')
        .replace(/:\w+\*/g, '.*')
        .replace(/:\w+/g, '[^/]+')
        .replace(/\*/g, '.*') +
      '$',
  );
}

const headersFor = (path) => {
  const out = {};
  for (const rule of config.headers ?? []) {
    if (toRegex(rule.source).test(path)) {
      for (const h of rule.headers) out[h.key] = h.value;
    }
  }
  return out;
};

async function readIfFile(path) {
  try {
    const s = await stat(path);
    return s.isFile() ? await readFile(path) : null;
  } catch {
    return null;
  }
}

createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const path = decodeURIComponent(url.pathname);

  // ------------------------------------------------------------- redirects
  for (const rule of config.redirects ?? []) {
    if (!toRegex(rule.source).test(path)) continue;
    if (rule.has?.some((h) => h.type === 'host')) continue; // host rules cannot apply locally
    res.writeHead(rule.statusCode ?? 308, { location: rule.destination });
    return res.end();
  }

  // ------------------------------------------------------------------- 410
  // The spam paths the attacker created are answered as permanently gone.
  if (GONE_PATTERNS.some((re) => re.test(path))) {
    const body = (await readIfFile(join(ROOT, '410.html'))) ?? Buffer.from('410 Gone');
    res.writeHead(410, { 'content-type': 'text/html; charset=utf-8', ...headersFor(path) });
    return res.end(body);
  }

  // ------------------------------------------------------------------ files
  const candidates = path.endsWith('/')
    ? [join(ROOT, path, 'index.html')]
    : [join(ROOT, path), join(ROOT, `${path}.html`), join(ROOT, path, 'index.html')];

  for (const candidate of candidates) {
    const body = await readIfFile(candidate);
    if (!body) continue;
    const type = TYPES[extname(candidate)] ?? 'application/octet-stream';
    res.writeHead(200, { 'content-type': type, ...headersFor(path) });
    return res.end(body);
  }

  // A path that exists only with a trailing slash gets one, as Vercel does.
  if (!path.endsWith('/') && !extname(path)) {
    if (await readIfFile(join(ROOT, path, 'index.html'))) {
      res.writeHead(308, { location: `${path}/${url.search}` });
      return res.end();
    }
  }

  const notFound = (await readIfFile(join(ROOT, '404.html'))) ?? Buffer.from('Not found');
  res.writeHead(404, { 'content-type': 'text/html; charset=utf-8', ...headersFor(path) });
  res.end(notFound);
}).listen(PORT, () => console.log(`preview: http://localhost:${PORT}`));
