# Security cutover checklist

The migration removes the *class* of vulnerability that was exploited — there is
no CMS, no database, no plugin system and no PHP on the new site. It does **not**
clean the old server or rotate any credential. Those are still outstanding.

Nothing below has been done automatically. DNS has not been touched, no
credential has been rotated, and no external account has been changed, per the
brief.

## Before switching DNS

- [ ] **Review the preview deployment.** Check the homepage, several product
      pages, a category page and the quote form. URL:
      `https://kraftboxpack-9nqkrjwkv-iamzeeshaikhs-projects.vercel.app`
- [ ] **Confirm the quote form reaches the right mailbox.** It currently sends
      to `shanimazhar82@gmail.com` and authenticates as a Gmail account shared
      with another site — see `ENVIRONMENT_VARIABLES.md`. Decide whether that is
      the intended destination before go-live.
- [ ] **Set up a dedicated sending identity** for kraftboxpack.com, or verify
      `info@kraftboxpack.com` in Gmail. Until then the From address is rewritten
      to the Gmail account.
- [ ] **Take a final export** of the WordPress database and `wp-content` for
      your own records, stored offline. Do not restore it anywhere.

## Rotate these — treat all as compromised

The old installation was breached. Regardless of this migration, every secret
that existed on that server should be considered exposed.

- [ ] Hosting control panel password, and any SSH or SFTP keys
- [ ] All WordPress administrator passwords
- [ ] Database user password
- [ ] Any SMTP or transactional-email API key stored in WordPress
- [ ] Any payment-gateway keys (Stripe, PayPal) configured in WooCommerce
- [ ] Cloudflare account password and any API token that was stored on the server
- [ ] Google Search Console and Analytics access — review the user list for
      accounts you do not recognise
- [ ] Any Google Listings & Ads connection (the export contains `_wc_gla_*`
      fields, so this integration was active)

## Audit for persistence

An attacker who had file access usually leaves a way back in.

- [ ] Review WordPress users for unfamiliar administrator accounts
- [ ] Check for scheduled tasks (`wp_cron`, server cron) that fetch remote code
- [ ] Check `.htaccess` and `wp-config.php` for injected directives
- [ ] Check for unexpected files in `wp-content/uploads` — particularly `.php`
- [ ] Review Cloudflare for Workers, redirect rules or page rules you did not create
- [ ] Check the domain's DNS records for subdomains you do not recognise

## At cutover

- [ ] Add `kraftboxpack.com` as a domain on the Vercel project
- [ ] Point DNS at Vercel. If Cloudflare stays in front, set the record to
      **DNS-only (grey cloud)** — proxying on top of Vercel adds a second CDN
      and breaks Vercel's certificate issuance
- [ ] Redirect `www` to the apex (or the reverse), so only one host serves 200
- [ ] Confirm HTTPS and that HSTS is being sent
- [ ] Keep the old host running but **not** serving the domain for a short
      period, in case a rollback is needed

## Immediately after cutover

- [ ] Confirm `https://kraftboxpack.com/` serves the new site
- [ ] Spot-check ten product URLs from `URL_MAPPING.csv` for 200
- [ ] Confirm `/cart/` and `/checkout/` return 301 to `/get-a-quote/`
- [ ] Confirm `/casino/`, `/slot/`, `/pokie/` return **410**
- [ ] Submit `https://kraftboxpack.com/sitemap.xml` in Search Console
- [ ] Use Search Console's Removals tool for any spam URL still indexed — the
      410 handles crawling, removals speeds up the visible cleanup
- [ ] Submit a **security review** in Search Console if the property is flagged
- [ ] Send one real enquiry through the live form and confirm it arrives

## Decommissioning the old site

- [ ] Only after the new site has served the domain successfully for a few days
- [ ] Cancel the WordPress hosting, or wipe the account entirely rather than
      leaving a dormant compromised installation reachable
- [ ] Remove any DNS record still pointing at the old host

## What the new architecture removes

| Old risk | Status now |
| --- | --- |
| Vulnerable plugin or theme code | No plugins, no theme, no PHP |
| Database injection | No database |
| Admin account takeover | No admin panel, no accounts |
| File upload to a writable web root | Static hosting; the only upload is emailed, never stored |
| Stored XSS in content | Content is sanitised at build time against an allow-list |
| Injected spam URLs | Explicit route table; unknown paths 404, known spam 410 |
| Credential theft from `wp-config.php` | Secrets live in Vercel's environment, not in the repo or the served files |
