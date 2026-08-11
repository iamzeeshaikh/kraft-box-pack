/**
 * The single source of truth for business facts stated across the site.
 *
 * Every value here is transcribed from a page the business already publishes —
 * the Refund and Returns Policy, the Terms and Conditions, the feature strip
 * and the contact details. Nothing is inferred and nothing is rounded.
 *
 * The reason this file exists: the imported WordPress product copy quoted
 * sixteen different production lead times across 158 pages (7-10 sixty-one
 * times, plus 10-12, 8-12, 5-7, 3-7, 1-3 and others) while the header and the
 * quote page both said 8-10 business days. A buyer comparing two product pages
 * got two different answers. Those are now normalised to the published figure,
 * and anything new that states a business fact should read it from here rather
 * than restating it.
 *
 * The policy pages themselves are NOT generated from this file. They remain
 * the authority; this is the restatement for everywhere else.
 */

/** Production turnaround, as published on the feature strip and quote page. */
export const LEAD_TIME = {
  standard: '8-10 business days',
  rush: 'Rush production available on request.',
} as const

/** Ordering terms, as carried in the product data and the quote page. */
export const ORDERING = {
  minimumUnits: 100,
  minimumLabel: '100 units',
  startPrice: '$0.30',
  /** The exact disclosure the brief requires be retained verbatim. */
  priceDisclosure:
    'Price starts from $0.30 per piece for large volume orders. Final pricing ' +
    'depends on size, material, printing, and quantity.',
  quoteReply: 'within one business day',
} as const

/**
 * Returns and refunds, transcribed from /refund_returns/.
 *
 * Note the exclusion: custom-printed boxes are not returnable unless
 * defective. Any page that mentions returns has to carry that qualification,
 * because the whole catalogue is custom-printed.
 */
export const RETURNS = {
  requestWindowDays: 10,
  requestWindow: 'within 10 days of receiving your order',
  method: 'by mail only',
  returnLabel: 'A return label is included in the package.',
  restockingFee: 'No restocking fees.',
  refundProcessing: 'within 10 business days',
  refundCurrency: 'USD',
  condition: 'new, unused and in the original packaging',
  customExclusion:
    'Custom-printed boxes are not returnable unless the item is defective.',
} as const

/** Shipping, as stated on the feature strip and in the Terms. */
export const SHIPPING = {
  freeShipping: true,
  freeShippingLabel: 'Free shipping',
  /** Terms: prices exclude taxes, shipping fees and customs duties. */
  pricingNote:
    'Prices exclude applicable taxes, shipping fees and customs duties where they apply.',
  international:
    'Customers are responsible for customs duties, taxes and fees on international orders.',
  delayNote:
    'Shipping times are estimates and may vary with courier, weather and customs processing.',
} as const

/** Services the business publishes on its own feature strip. */
export const SERVICES = {
  freeDesign: 'Free design assistance',
  consultation: "Experts' consultation",
  availability: 'Round the clock availability',
} as const

/**
 * Claims the business has confirmed it stands behind, where the supporting
 * paperwork is not held in the project files.
 *
 * These are kept on the site at the business's explicit instruction. They are
 * recorded here only so the evidence can be produced quickly if a buyer, a
 * Merchant Center review or an advertising standards query asks for it —
 * not because their accuracy is in doubt.
 */
export const CONFIRMED_BY_BUSINESS = [
  'FSC certification — retained on 36 products. Certificate number, issuing body and expiry worth filing.',
  'Food-safe / food-contact compliance — retained across 68 products. Grade documentation worth filing.',
  'Free shipping — retained. Any threshold or territory limit worth stating on the shipping page.',
] as const

/**
 * Claims that appear on the site and have no supporting detail anywhere,
 * including from the business. Carried into BUSINESS-INFO-NEEDED.md.
 */
export const NEEDS_CONFIRMATION = [
  'Round the clock availability — published on the feature strip, but no staffed hours are documented',
] as const
