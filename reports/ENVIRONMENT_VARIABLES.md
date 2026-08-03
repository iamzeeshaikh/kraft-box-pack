# Environment variables

The quote endpoint (`src/pages/api/quote.ts`) is the only server-side code, and
these are the only variables it reads. None is exposed to the browser: Astro
only inlines variables prefixed `PUBLIC_`, and none of these is.

| Variable | Required | Example | Purpose |
| --- | --- | --- | --- |
| `SMTP_HOST` | yes | `smtp.gmail.com` | Mail server hostname |
| `SMTP_PORT` | no (default 587) | `587` | 465 switches to implicit TLS |
| `SMTP_USER` | yes | `you@example.com` | SMTP username |
| `SMTP_PASS` | yes | *(16-char app password)* | SMTP password |
| `SMTP_TO` | yes | `sales@example.com` | Where quote requests are delivered |
| `SMTP_FROM_NAME` | no | `Kraft Box Pack` | Display name on the From header |
| `SMTP_FROM_EMAIL` | no (defaults to `SMTP_USER`) | `info@kraftboxpack.com` | From address |
| `QUOTE_RATE_LIMIT` | no (default 5) | `5` | Submissions per IP per minute |

## Setting them on Vercel

```
vercel env add SMTP_HOST production
vercel env add SMTP_USER production
vercel env add SMTP_PASS production
vercel env add SMTP_TO production
```

Repeat for `preview` if the form should work on preview deployments. Never
commit them: `.env` is gitignored, and `.env.example` carries the keys with
empty values.

## Two things to fix before go-live

**1. The mailbox is shared with another site.**
This deployment currently authenticates as the same Gmail account already
configured for the owner's other site (hotdogtrays.com), because that was the
only working credential available and the brief required proving delivery
rather than assuming it. It works, but a dedicated mailbox for
kraftboxpack.com is preferable so the two sites' enquiries are separable and
either can be rotated independently.

**2. Gmail rewrites the From address.**
`SMTP_FROM_EMAIL` is set to `info@kraftboxpack.com`, but Gmail will not send as
an address it has not verified — it silently rewrites the From header to
`SMTP_USER`. Recipients will see the Gmail address. Two ways to fix it:

- verify `info@kraftboxpack.com` under Gmail → Settings → Accounts → "Send mail
  as"; or
- switch to an SMTP provider for the domain itself (Postmark, Resend, SES),
  which also improves deliverability and lets SPF/DKIM/DMARC align.

The second is the better option for a business address, and it removes the
shared-mailbox problem at the same time.

## Credential hygiene after a compromise

The old WordPress installation was compromised. Independently of this
migration, treat as exposed and rotate: the hosting control-panel password,
all WordPress administrator passwords, the database password, any SMTP or
transactional-email API key that was stored in WordPress, any payment-gateway
key, and the Cloudflare API token if one was ever stored on the server. See
`SECURITY_CUTOVER_CHECKLIST.md`.
