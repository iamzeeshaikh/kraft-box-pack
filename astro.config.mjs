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
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self' data:",
        "connect-src 'self'",
        "form-action 'self'",
        "base-uri 'self'",
        "object-src 'none'",
        "frame-src 'none'",
      ],
      styleDirective: { resources: ["'self'", "'unsafe-inline'"] },
    },
  },
  vite: {
    build: { cssMinify: 'lightningcss' },
  },
});
