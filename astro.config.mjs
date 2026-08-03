// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

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
        "img-src 'self' data: https://chat.zeeops.dev",
        "font-src 'self' data:",
        "connect-src 'self' https://chat.zeeops.dev wss://chat.zeeops.dev https://cloudflareinsights.com",
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
        ],
      },
      styleDirective: { resources: ["'self'", "'unsafe-inline'"] },
    },
  },
  vite: {
    build: { cssMinify: 'lightningcss' },
  },
});
