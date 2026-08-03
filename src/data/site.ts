/**
 * Site-wide constants.
 *
 * Every value here was read off the live site (header, footer and contact
 * page) during the migration audit on 3 August 2026. Nothing is invented — if
 * a detail was not published on the old site it does not appear here.
 */

export const SITE_URL = 'https://kraftboxpack.com';
export const SITE_NAME = 'Kraft Box Pack';
export const BRAND_NAME = 'Kraft Box Pack';

export const CONTACT = {
  email: 'info@kraftboxpack.com',
  /** As dialled. */
  phone: '+19292141874',
  /** As printed on the old site, hyphens and all. */
  phoneDisplay: '+1-929-2141-874',
  address: {
    street: '1686 78th St',
    locality: 'Brooklyn',
    region: 'NY',
    postalCode: '11204',
    country: 'US',
    display: '1686 78th St, Brooklyn, New York, 11204 USA',
  },
} as const;

/**
 * The promotional strip the old site ran across the top of every page.
 * Kept because it is the business's own standing offer, not a fabricated one.
 */
export const PROMO = 'Email Us To Get 25% OFF';

/** Exactly the two profiles the old footer linked to, upgraded to https. */
export const SOCIAL = [
  { name: 'Facebook', href: 'https://www.facebook.com/kraftboxpack/' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/105492364/' },
] as const;

/**
 * Primary navigation, matching the old header exactly: Home followed by the
 * four category links WordPress had in the menu.
 */
export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Colored Kraft Boxes', href: '/product-category/colored-kraft-boxes/' },
  { label: 'Kraft Gift & Specialty Boxes', href: '/product-category/kraft-gift-specialty-boxes/' },
  { label: 'Kraft Packaging Boxes', href: '/product-category/kraft-packaging-boxes/' },
  { label: 'Kraft Wrapping & Accessories', href: '/product-category/kraft-wrapping-accessories/' },
] as const;

export const FOOTER_COMPANY = [
  { label: 'About Us', href: '/about-us/' },
  { label: 'Contact Us', href: '/contact-us/' },
  { label: 'All Products', href: '/products/' },
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Refund and Returns Policy', href: '/refund_returns/' },
  { label: 'Terms & Conditions', href: '/terms-conditions/' },
] as const;

/**
 * The four selling points the old site showed as icon boxes under the hero.
 *
 * The old site printed "Custom Design, Sizes & Style" twice — plainly a
 * copy-paste slip, since it left the run of four with only three distinct
 * points. The second slot is given to free design assistance instead, which is
 * the business's own claim: it appears in the "Design Support" row of every
 * product specification table and in the old footer's list of services.
 *
 * The supporting sentences are written from the specification tables — sizes,
 * printing methods, finishes and turnaround all come from those rows. Nothing
 * is asserted here that the exports do not already state; see
 * CLAIMS_MIGRATION_REPORT.md for the source of each claim.
 */
export const FEATURES = [
  {
    title: 'Custom Design, Sizes & Style',
    body: 'Boxes built to your dimensions, with structural options for retail, e-commerce and gifting.',
    icon: 'ruler',
    art: 'boxes-gif-unscreen.gif',
  },
  {
    title: 'Free Design Assistance',
    body: 'Our team prepares your artwork and sends a digital proof before anything goes to press.',
    icon: 'pencil',
    art: 'gif-boxes.gif',
  },
  {
    title: 'High Quality Offset Printing',
    body: 'Offset, digital and screen printing in CMYK or PMS, with matte, gloss and spot UV finishes.',
    icon: 'printer',
    art: 'offset-press.gif',
  },
  {
    title: 'Fast Shipping 8-10 Business Days',
    body: 'Standard turnaround is 8-10 business days, with rush production available on request.',
    icon: 'truck',
    art: 'delivery-icon-giff.gif',
  },
] as const;
