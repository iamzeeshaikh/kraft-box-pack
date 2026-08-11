/**
 * Ambient declarations for the globals the analytics layer owns.
 *
 * These exist because the analytics script is a bundled `<script>` rather than
 * `is:inline`. Astro typechecks the former and skips the latter, so moving the
 * script off `is:inline` — which it had to be, to get a CSP hash — is what
 * surfaced them. Declaring them here is the point: `window.gtag` and
 * `window.dataLayer` really are untyped globals contributed by Google's tag,
 * and `kbpTrack` is this site's own handle on the queue.
 */
interface Window {
  /** GTM/GA4 event queue. Created by this site whether or not a tag loads. */
  dataLayer: unknown[]
  /** Installed by Google's gtag.js, and by this site when a tag is configured. */
  gtag?: (...args: unknown[]) => void
  /** Push an event to `dataLayer`, and to GA4 when a tag is configured. */
  kbpTrack?: (event: string, detail?: Record<string, unknown>) => void
}
