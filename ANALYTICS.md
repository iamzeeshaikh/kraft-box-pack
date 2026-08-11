# Analytics

## Status

**No measurement ID is configured.** No Google Analytics or Tag Manager account
was found in the project, and inventing an ID would silently send nothing while
appearing wired up.

The event layer is built and running regardless. `window.dataLayer` is created
on every page and every event below is pushed to it whether or not a tag is
configured, so:

- the events can be inspected in the browser console today, before any account
  exists;
- adding a tag later requires no re-instrumentation.

## Turning it on

Set one environment variable and redeploy:

```
PUBLIC_GA4_ID=G-XXXXXXXXXX
```

That is the only change needed, but it must be set **before the build**, not
just at runtime: the site sends a hash-based Content-Security-Policy, and
`astro.config.mjs` adds `googletagmanager.com` and `google-analytics.com` to it
only when the variable is present. Setting it in Vercel and redeploying does
this correctly. Setting it without rebuilding would leave Google's tag blocked
by the CSP.

With that done, `src/components/Analytics.astro` loads the gtag script,
configures the property with `send_page_view: false` (page views are sent
manually so the page type travels with them) and every event below starts
reaching GA4.

If Tag Manager is preferred instead, point the container at `dataLayer` — the
event names and parameters below are already being pushed there.

## Events

| Event | Fires when | Parameters |
|---|---|---|
| `page_view` | Every page load | `page_type`, `item_name` |
| `product_view` | A product page loads | `item_name` |
| `category_view` | A category page loads | `item_name` |
| `quote_form_start` | First input into any quote form | `form_id` |
| `quote_form_step` | The specification step is opened | `form_id`, `step` |
| `quote_artwork_upload` | A file is chosen | `form_id` |
| `quote_form_submit_success` | **The server confirms receipt** | `form_id`, `has_attachment` |
| `quote_form_error` | Validation, HTTP or network failure | `form_id`, `reason` |
| `phone_click` | A `tel:` link is clicked | `page_type` |
| `email_click` | A `mailto:` link is clicked | `page_type` |
| `whatsapp_click` | A WhatsApp link is clicked | `page_type` |
| `cta_click` | Any `.btn` link is clicked | `page_type`, `cta_text`, `destination` |

`page_type` is one of `home`, `product`, `category`, `blog`, `other`.

## Decisions worth knowing

**Success is tracked after the server confirms, not on click.**
`quote_form_submit_success` fires only once the endpoint returns `ok`. Tracking
on submit would count buttons pressed rather than enquiries received, and the
two differ every time a send fails.

**No personally identifiable data is sent.** No event carries a name, email,
phone number, address or anything typed into the quote form. `cta_click` sends
the link text, which is authored copy, never user input.

**The script must stay bundled, never `is:inline`.** The page type and item name
reach the script through `<meta name="kbp:page-type">` tags rather than through
Astro's `define:vars`, because `define:vars` forces `is:inline` and Astro emits
no CSP hash for an inline script. When this was written with `define:vars`, the
strict `script-src` blocked the entire event layer on every page — `dataLayer`
was never created and no event fired — while the source looked correct and the
site behaved normally otherwise. `scripts/a11y.mjs` fails the build's QA if any
CSP violation reappears, which is what caught it.

**Events fire once.** Forms carry a `data-wired` flag so re-running the wiring
cannot attach a second listener, and click tracking uses a single delegated
listener per page rather than one per element. Astro ships no client framework
on these pages, so there is no hydration path that could double-fire.

**Attribution travels with the enquiry, not just the analytics.** The quote
endpoint also receives landing page, referrer, campaign parameters and a coarse
device class, and prints them at the bottom of the internal email. That means
the business can see which page produced an enquiry without opening an
analytics account at all.

Campaign parameters are stored in `sessionStorage`, because a visitor commonly
lands from a campaign and enquires several pages later, by which point the URL
carries none.

## Still needed from the business

- A GA4 property and its measurement ID, or a Tag Manager container ID.
- A decision on consent handling. No consent banner is implemented. If the site
  begins targeting visitors in jurisdictions that require prior consent, the tag
  load in `Analytics.astro` should be gated behind it — the gate already exists
  in the form of the `PUBLIC_GA4_ID` check and would need extending rather than
  rebuilding.
- Google Search Console is verified (meta tag present). Merchant Center
  verification status is not recorded in the project files.
