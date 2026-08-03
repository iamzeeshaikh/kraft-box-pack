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
      // The live-chat widget is the one third party the site loads. Its origin
      // is named explicitly rather than the policy being loosened: it needs to
      // load its script, call back to its own API, and open its panel in a
      // frame. Nothing else is granted.
      directives: [
        "default-src 'self'",
        "img-src 'self' data: https://chat.zeeops.dev",
        "font-src 'self' data:",
        "connect-src 'self' https://chat.zeeops.dev wss://chat.zeeops.dev",
        "frame-src https://chat.zeeops.dev",
        "form-action 'self'",
        "base-uri 'self'",
        "object-src 'none'",
      ],
      // Astro owns script-src so it can add a hash per inlined chunk; the
      // widget's origin is appended to what it generates rather than replacing
      // it, which is why it goes here and not in `directives`.
      scriptDirective: { resources: ["'self'", 'https://chat.zeeops.dev'] },
      styleDirective: { resources: ["'self'", "'unsafe-inline'"] },
    },
  },
  vite: {
    build: { cssMinify: 'lightningcss' },
  },
});
