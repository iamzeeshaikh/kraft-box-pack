# Deployment report

## Preview deployment

| | |
| --- | --- |
| URL | `https://kraftboxpack-9nqkrjwkv-iamzeeshaikhs-projects.vercel.app` |
| Vercel project | `iamzeeshaikhs-projects/kraftboxpack` |
| Environment | **Preview** — production has not been deployed |
| Date | 3 August 2026 |
| Commit | `e07f771` |

**DNS has not been changed. `kraftboxpack.com` still serves the old WordPress
site.** No domain has been added to the Vercel project, and nothing in
Cloudflare has been touched. Going live is a separate, explicitly authorised
step — see `SECURITY_CUTOVER_CHECKLIST.md`.

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

## What has not been done

- Production deployment
- Any DNS or Cloudflare change
- Adding `kraftboxpack.com` to the Vercel project
- Sitemap submission to Google
- Any credential rotation
- Decommissioning the old host
