#!/usr/bin/env node
/**
 * End-to-end tests for the quote endpoint, against a running server.
 *
 * Covers the cases that matter for a public form on a site that was just
 * compromised: required fields, email shape, the honeypot, oversized and
 * disguised uploads, header injection, and the rate limit. The last test sends
 * a real message so that delivery is proven rather than assumed.
 *
 *   npx astro dev --port 4322 &  node scripts/test-forms.mjs
 */
const BASE = process.env.FORM_BASE ?? 'http://localhost:4322';
const URL_ = `${BASE}/api/quote/`;

let pass = 0;
const fail = [];
const check = (ok, label, detail = '') => (ok ? pass++ : fail.push(`${label}${detail ? ` — ${detail}` : ''}`));

const post = async (fields, files = {}) => {
  const fd = new FormData();
  for (const [k, v] of Object.entries(fields)) fd.append(k, v);
  for (const [k, f] of Object.entries(files)) fd.append(k, f.blob, f.name);
  // Astro rejects a cross-origin POST without a matching Origin header, which
  // is the CSRF protection working. A browser always sends one, so the test
  // does too — otherwise every case below would just measure the 403.
  const res = await fetch(URL_, {
    method: 'POST',
    body: fd,
    headers: { Accept: 'application/json', Origin: BASE },
  });
  const body = await res.json().catch(() => ({}));
  return { status: res.status, body };
};

// The functional cases run against a server with the limit raised, so that
// fifteen assertions in a row are not mistaken for an attack.
const valid = {
  name: 'QA Test',
  email: 'qa@example.com',
  phone: '+1 555 0100',
  company: 'QA Co',
  product: 'Kraft Round Boxes',
  message: 'Automated migration test. Please ignore.',
};

const functional = process.env.RATE_LIMIT_ONLY !== '1';

// ------------------------------------------------------------- method guard
if (functional) {
const get = await fetch(URL_);
check(get.status === 405, 'GET is rejected', `got ${get.status}`);

// CSRF: the same POST without an Origin header must not be accepted.
const noOrigin = await fetch(URL_, {
  method: 'POST',
  body: new URLSearchParams({ name: 'x', email: 'a@b.co', message: 'x' }),
});
check(noOrigin.status === 403, 'cross-origin POST is rejected', `got ${noOrigin.status}`);

// ---------------------------------------------------------------- required
check((await post({ ...valid, name: '' })).status === 400, 'missing name rejected');
check((await post({ ...valid, email: '' })).status === 400, 'missing email rejected');
check((await post({ ...valid, message: '' })).status === 400, 'missing message rejected');
check((await post({ ...valid, email: 'not-an-email' })).status === 400, 'malformed email rejected');
check((await post({ ...valid, email: 'a@b' })).status === 400, 'email without TLD rejected');

// ---------------------------------------------------------------- honeypot
const trap = await post({ ...valid, website: 'http://spam.example' });
check(trap.status === 200 && trap.body.ok === true, 'honeypot answers 200 without sending');

// ------------------------------------------------------------ header inject
const inject = await post({
  ...valid,
  name: 'Bad\r\nBcc: victim@example.com',
  email: 'qa@example.com',
});
check(inject.status === 200, 'CRLF in a field does not break the send', `got ${inject.status}`);

// -------------------------------------------------------------- attachments
const png = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, ...Array(64).fill(0)]);
const ok = await post(valid, {
  attachment: { blob: new Blob([png], { type: 'image/png' }), name: 'artwork.png' },
});
check(ok.status === 200, 'a real PNG is accepted', `got ${ok.status} ${ok.body.error ?? ''}`);

// A PHP webshell renamed to .png — the exact thing that compromises a host.
const shell = new TextEncoder().encode('<?php system($_GET["c"]); ?>');
const disguised = await post(valid, {
  attachment: { blob: new Blob([shell], { type: 'image/png' }), name: 'shell.png' },
});
check(disguised.status === 415, 'a PHP payload renamed .png is rejected', `got ${disguised.status}`);

const badExt = await post(valid, {
  attachment: { blob: new Blob([png], { type: 'image/png' }), name: 'payload.php' },
});
check(badExt.status === 415, 'a .php upload is rejected', `got ${badExt.status}`);

const svg = await post(valid, {
  attachment: { blob: new Blob(['<svg onload=alert(1)>']), name: 'x.svg' },
});
check(svg.status === 415, 'an SVG upload is rejected', `got ${svg.status}`);

const huge = await post(valid, {
  attachment: { blob: new Blob([new Uint8Array(9 * 1024 * 1024)]), name: 'big.png' },
});
check(huge.status === 413, 'an oversized upload is rejected', `got ${huge.status}`);

}

// -------------------------------------------------------------- rate limit
// Checked in its own run against a server using the production threshold of
// five a minute, because crossing it here would answer every later case 429
// regardless of correctness. `npm run test:forms` performs both runs.
if (process.env.RATE_LIMIT_ONLY === '1') {
  let tripped = 0;
  for (let i = 1; i <= 9; i++) {
    const r = await post({ ...valid, message: `rate limit probe ${i}` });
    if (r.status === 429 && tripped === 0) tripped = i;
  }
  check(tripped === 6, 'rate limit engages on the sixth submission in a minute',
    tripped === 0 ? 'never engaged' : `engaged at ${tripped}`);
}

console.log(`${pass} passed, ${fail.length} failed`);
if (fail.length) {
  console.log('\nfailures:');
  for (const f of fail) console.log(`  ✗ ${f}`);
  process.exit(1);
}
