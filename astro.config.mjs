// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

/**
 * Google's tag is only permitted when a measurement ID is actually configured.
 * Widening `script-src` for a tag that never loads would weaken the policy for
 * nothing; leaving it out permanently would mean setting `PUBLIC_GA4_ID` gets
 * the tag blocked instead, which is the failure this file already warns about
 * below. So the origins follow the env var.
 */
// Live property for kraftboxpack.com (GA4 account "ZEE Portfolio", 2026-09-16).
// Kept as the default rather than only an env var so any build — local, CI or
// Vercel — ships the tag; PUBLIC_GA4_ID still overrides it.
const GA4 = process.env.PUBLIC_GA4_ID ?? 'G-FE7XZT3HT0'
const GA_SCRIPT = GA4 ? ['https://www.googletagmanager.com'] : []
const GA_CONNECT = GA4
  ? ' https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com'
  : ''

export default defineConfig({
  site: 'https://kraftboxpack.com',
  output: 'static',
  // WordPress served every URL with a trailing slash and the sitemap still
  // lists them that way, so keeping the convention avoids a redirect hop on
  // every indexed URL.
  trailingSlash: 'always',
  adapter: vercel({ imageService: false }),
  build: { format: 'directory' },
  image: {
    // 730 product photographs, all square. Two widths cover every slot the
    // design has: 420px for grid cards, 900px for the gallery.
    responsiveStyles: true,
    layout: 'constrained',
  },
  security: {
    // Astro inlines small scripts, which `script-src 'self'` would block. With
    // this on, Astro emits a <meta> CSP carrying a hash for each inline chunk,
    // so the policy stays strict without breaking hydration. Learned the hard
    // way on the previous migration, where tabs and accordions were dead in
    // production while working locally.
    csp: {
      // Two third parties are allowed, both named explicitly rather than the
      // policy being loosened:
      //
      //   chat.zeeops.dev        the live-chat widget — script, its own API
      //                          over https and wss, and its panel frame
      //   cloudflareinsights.com Cloudflare injects its Web Analytics beacon
      //                          into responses it proxies. It is not in the
      //                          page source, so the CSP has to expect it or
      //                          the browser reports a violation on every view.
      //                          Turning off Web Analytics in Cloudflare is the
      //                          alternative if the beacon is not wanted.
      directives: [
        "default-src 'self'",
        `img-src 'self' data: https://chat.zeeops.dev${GA4 ? ' https://www.googletagmanager.com https://*.google-analytics.com' : ''}`,
        "font-src 'self' data:",
        `connect-src 'self' https://chat.zeeops.dev wss://chat.zeeops.dev https://cloudflareinsights.com${GA_CONNECT}`,
        "frame-src https://chat.zeeops.dev",
        "form-action 'self'",
        "base-uri 'self'",
        "object-src 'none'",
      ],
      // Astro owns script-src so it can add a hash per inlined chunk; these
      // origins are appended to what it generates rather than replacing it,
      // which is why they go here and not in `directives`.
      scriptDirective: {
        resources: [
          "'self'",
          'https://chat.zeeops.dev',
          'https://static.cloudflareinsights.com',
          ...GA_SCRIPT,
        ],
      },
      styleDirective: { resources: ["'self'", "'unsafe-inline'"] },
    },
  },
  vite: {
    build: { cssMinify: 'lightningcss' },
  },
});
