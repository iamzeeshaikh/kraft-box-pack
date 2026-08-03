# Deployment report

## Live

| | |
| --- | --- |
| URL | **https://kraftboxpack.com** |
| Vercel project | `iamzeeshaikhs-projects/kraftboxpack` |
| Environment | **Production** |
| Went live | 3 August 2026 |

The site is live. `kraftboxpack.com` serves the Astro build; the WordPress
installation no longer serves the domain.

**How the cutover happened, and one thing to know about it.** Cloudflare was
already proxying the domain to Vercel's anycast address, so adding
`kraftboxpack.com` to the Vercel project switched the live site immediately —
no DNS record was edited, by me or anyone else. At that moment the project's
production deployment was several commits behind, so the domain briefly served
an out-of-date build until `vercel deploy --prod` promoted the current one.
Anyone repeating this on another project should deploy to production *before*
attaching the domain.

`www.kraftboxpack.com` 301s to the apex, so only one host serves 200.

Deployment protection (Vercel SSO) was disabled on the project so the preview
could be tested and so it can be reviewed without a Vercel login.

## Build

| | |
| --- | --- |
| Framework | Astro 7.1.6, static output, Vercel adapter |
| Pages built | 186 |
| Image transforms | 2,055 |
| Static output | ~90 MB |
| `npm audit` | 0 vulnerabilities |
| `astro check` | 0 errors, 0 warnings, 0 hints |

`path-to-regexp` resolved to a version with a known ReDoS advisory through a
transitive dependency; it is pinned to `^6.3.0` in `overrides`, which clears it.

## Verification against the deployed site

Every suite below was run against the live preview URL, not a local server.

| Suite | Result |
| --- | --- |
| `scripts/qa.mjs` — build output, metadata, links, routing, sitemap | **2,799 passed, 0 failed** |
| `scripts/a11y.mjs` — contrast, tap targets, overflow, components | **127 passed, 0 failed** |
| `scripts/test-forms.mjs` — endpoint validation and security | **15 passed, 0 failed** |
| `scripts/link-report.mjs` — internal link preservation | 90.8% pairs preserved; 180/181 destinations hold their inbound count |

## Routing, verified live

| Path | Response |
| --- | --- |
| `/` | 200 |
| `/products/` | 200 |
| `/product/kraft-round-boxes/` | 200 |
| `/product-category/kraft-food-packaging/` | 200 |
| `/sitemap.xml` | 200 |
| `/cart/`, `/checkout/` | 301 → `/get-a-quote/` |
| `/my-account/` | 301 → `/contact-us/` |
| `/shop/` | 301 → `/products/` |
| `/casino/`, `/slot/`, `/pokie/` | **410 Gone** |
| unknown path | 404 |

All 186 URLs from the old sitemap answer 200 or 301. Every redirect resolves in
a single hop. See `URL_MAPPING.csv` and `REDIRECT_MAP.csv`.

## Security headers, verified live

```
content-security-policy: frame-ancestors 'none'
cross-origin-opener-policy: same-origin
permissions-policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
referrer-policy: strict-origin-when-cross-origin
strict-transport-security: max-age=63072000; includeSubDomains; preload
x-content-type-options: nosniff
x-frame-options: DENY
```

A second, stricter CSP (`default-src 'self'`, `object-src 'none'`,
`frame-src 'none'`, `script-src` with per-chunk hashes) is emitted as a `<meta>`
tag by Astro on every page.

## Quote form — tested on the deployed site

This is the claim the brief said not to make without proof, so it was tested
against the deployment rather than locally:

| Test | Result |
| --- | --- |
| `GET /api/quote/` | 405 Method Not Allowed |
| `POST` without an `Origin` header | 403 (CSRF protection) |
| Valid submission | **200, email delivered** |
| Valid submission with a real PNG attached | **200, email delivered** |
| PHP webshell renamed `shell.png` | **415 rejected** (magic-byte check) |
| Upload over 8 MB | 413 rejected |
| `.php` / `.svg` upload | 415 rejected |
| Missing or malformed required fields | 400 rejected |
| Honeypot field filled | 200 with nothing sent |
| CRLF injected into a field | neutralised, send succeeds |
| Sixth submission within a minute | 429 rate limited |

Mail currently authenticates as a Gmail account shared with another of the
owner's sites, and Gmail rewrites the From address. Both are flagged in
`ENVIRONMENT_VARIABLES.md` and should be resolved before go-live.

## Environment variables set on Vercel

`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_TO`,
`SMTP_FROM_NAME`, `SMTP_FROM_EMAIL` — all encrypted, on production, preview and
development. `QUOTE_RATE_LIMIT` is unset and defaults to 5 per minute.

No secret is in the repository. `.env` is gitignored and `.env.example` carries
the keys with empty values.

## Verified on the live domain

Both suites were re-run against `https://kraftboxpack.com` after go-live:

| Suite | Result |
| --- | --- |
| Build output, metadata, links, routing, sitemap | **2,799 passed, 0 failed** |
| Accessibility and responsive | **127 passed, 0 failed** |
| Quote form | delivered; disguised webshell rejected 415 |

Routing on the live domain: `/` `/products/` and product and category pages
200, `/cart/` 301, `/casino/` **410**, unknown paths 404, `www` 301 to apex.

## Third-party scripts

Two, both named explicitly in the CSP rather than the policy being loosened:

- `chat.zeeops.dev` — the live-chat widget, added at the owner's request
- `static.cloudflareinsights.com` — Cloudflare injects its Web Analytics beacon
  into responses it proxies. It is not in the page source, so the policy had to
  be told to expect it; without that the browser logged a violation on every
  page view. Turn off Web Analytics in Cloudflare if the beacon is not wanted.

## What has still not been done

- **Any credential rotation.** The old host was compromised; everything that
  was on it should be treated as exposed. See `SECURITY_CUTOVER_CHECKLIST.md`.
- **Decommissioning the old WordPress host.** Leave it up but not serving the
  domain for a few days in case a rollback is needed, then wipe the account
  rather than leaving a dormant compromised install reachable.
- **Sitemap submission** to Google Search Console, and a security review there
  if the property is flagged.
- **A dedicated sending mailbox.** The form authenticates as a Gmail account
  shared with another of the owner's sites, and Gmail rewrites the From address
  away from `info@kraftboxpack.com`. See `ENVIRONMENT_VARIABLES.md`.
