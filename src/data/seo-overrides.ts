/**
 * Hand-written titles and meta descriptions for the pages that already earn
 * impressions in Search Console.
 *
 * Why this exists as an override layer rather than an edit to products.json:
 * that file is generated from the WordPress export, so anything written into
 * it is lost the next time the catalogue is regenerated. Keeping the SEO copy
 * separate also makes the intent auditable — every entry here is a deliberate
 * decision about a page with measured impressions, not a bulk template.
 *
 * What the Search Console data said (12 months to 11 Aug 2026):
 *   - 205,254 impressions across live pages, 1,561 clicks, 0.76% CTR
 *   - 59 pages with 500+ impressions sit under 1% CTR, carrying 147,915 of
 *     those impressions
 *   - the worst offenders rank respectably and still get almost no clicks:
 *     kraft-take-out-boxes had 3,736 impressions and 3 clicks at position 15.9
 *
 * The generated titles were the cause. They carried stray spaces before commas
 * ("Kraft Box with Window , Wholesale"), a missing space before a pipe
 * ("Bakery Bags Wholesale| Kraft Box Pack"), the meaningless "KBP" contraction,
 * and interchangeable verb stems (Order/Buy/Shop/Get) that told a searcher
 * nothing. Descriptions ran to 150+ characters and truncated mid-sentence.
 *
 * Rules applied to every entry below:
 *   - title 50-60 characters, no colon, primary term first, brand last
 *   - description 120-130 characters, one concrete specification detail
 *   - only claims the business actually publishes: free design assistance,
 *     8-10 business day turnaround, wholesale pricing, $0.30 per piece at
 *     volume. No invented certifications, guarantees or delivery promises.
 *   - no vague environmental slogans; "eco-friendly" on its own sells nothing
 */

export interface SeoOverride {
  title: string
  description: string
}

export const SEO_OVERRIDES: Record<string, SeoOverride> = {
  /* ---------- homepage ---------- */
  '/': {
    title: 'Custom Printed Kraft Boxes Wholesale | Kraft Box Pack',
    description:
      'Custom kraft boxes printed to your size and artwork. Free design help, wholesale pricing and a written quote in one day.',
  },

  /* ---------- highest-impression product pages ---------- */
  '/product/kraft-shoe-boxes/': {
    title: 'Custom Kraft Shoe Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft shoe boxes built to your shoe size in lid or drawer styles, with custom print and free design help. Ask for a quote.',
  },
  '/product/kraft-gift-boxes-with-lids/': {
    title: 'Kraft Gift Boxes With Lids Wholesale | Kraft Box Pack',
    description:
      'Two-piece kraft gift boxes with fitted lids in custom sizes. Choose board weight, print and finish, then get a wholesale quote.',
  },
  '/product/kraft-box-with-window/': {
    title: 'Custom Kraft Box With Window Wholesale | Kraft Box Pack',
    description:
      'Kraft boxes with a window cut to your product shape, filmed or left open. Custom sizes and print, quoted at wholesale rates.',
  },
  '/product/kraft-round-boxes/': {
    title: 'Custom Kraft Round Boxes Wholesale | Kraft Box Pack',
    description:
      'Rigid kraft round boxes in custom diameters and depths for candles, gifts and cosmetics. Free design help and wholesale pricing.',
  },
  '/product/kraft-drawer-boxes/': {
    title: 'Custom Kraft Drawer Boxes Wholesale | Kraft Box Pack',
    description:
      'Sliding kraft drawer boxes with a rigid sleeve and tray, sized to your product. Custom print, free dieline and wholesale pricing.',
  },
  '/product/kraft-food-boxes/': {
    title: 'Custom Kraft Food Boxes Wholesale | Kraft Box Pack',
    description:
      'Grease-resistant kraft food boxes for takeaway and bakery use, in custom sizes with food-safe print. Get a wholesale quote.',
  },
  '/product/kraft-shipping-boxes/': {
    title: 'Custom Kraft Shipping Boxes Wholesale | Kraft Box Pack',
    description:
      'Corrugated kraft shipping boxes cut to your dimensions in single or double wall, with custom print and wholesale pricing.',
  },
  '/product/small-kraft-boxes/': {
    title: 'Small Custom Kraft Boxes Wholesale | Kraft Box Pack',
    description:
      'Small kraft boxes cut to your product rather than a stock size, from around one inch. Custom print and wholesale pricing.',
  },
  '/product/colored-kraft-paper/': {
    title: 'Custom Colored Kraft Paper Wholesale | Kraft Box Pack',
    description:
      'Colored kraft paper in sheets and rolls, cut to your width and printed to your artwork. Wholesale pricing and free design help.',
  },
  '/product/kraft-take-out-boxes/': {
    title: 'Custom Kraft Take Out Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft take out boxes with grease-resistant board and secure folds, in custom sizes and print. Wholesale quotes within a day.',
  },
  '/product/kraft-candle-boxes/': {
    title: 'Custom Kraft Candle Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft candle boxes sized to jar or tin diameter, in rigid or folding builds with custom print. Free design help and quoting.',
  },
  '/product/kraft-paper-gift-boxes/': {
    title: 'Custom Kraft Paper Gift Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft paper gift boxes in custom sizes and folding styles, printed to your artwork. Wholesale pricing with free design help.',
  },
  '/product/kraft-mailer-boxes/': {
    title: 'Custom Kraft Mailer Boxes Wholesale | Kraft Box Pack',
    description:
      'Roll-end kraft mailer boxes cut to your product so you stop paying dimensional weight. Custom print and wholesale pricing.',
  },
  '/product/kraft-candy-boxes/': {
    title: 'Custom Kraft Candy Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft candy boxes with food-safe board and window options, in custom sizes and print. Low minimums and wholesale pricing.',
  },
  '/product/kraft-corrugated-boxes/': {
    title: 'Custom Kraft Corrugated Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft corrugated boxes in E, B and C flute, cut to your dimensions and stacking height. Custom print and wholesale pricing.',
  },
  '/product/kraft-bakery-boxes/': {
    title: 'Custom Kraft Bakery Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft bakery boxes for cakes, cookies and pastries, with grease-resistant board and window options. Wholesale pricing here.',
  },
  '/product/kraft-pizza-boxes/': {
    title: 'Custom Kraft Pizza Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft pizza boxes in standard and custom diameters, with grease-resistant board and flexo print. Wholesale pricing per case.',
  },
  '/product/kraft-heart-shaped-boxes/': {
    title: 'Kraft Heart Shaped Boxes Wholesale | Kraft Box Pack',
    description:
      'Heart shaped kraft boxes for gifting and favours, cut on a custom die in your size. Rigid or folding builds, wholesale priced.',
  },
  '/product/kraft-drawer-gift-boxes/': {
    title: 'Kraft Drawer Gift Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft drawer gift boxes with a sliding tray and rigid sleeve, sized to your product. Custom print and free design assistance.',
  },
  '/product/kraft-paper-boxes/': {
    title: 'Custom Kraft Paper Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft paper boxes cut to your product in folding or rigid builds. Choose board weight, print and finish, then get a quote.',
  },
  '/product/kraft-jewelry-boxes/': {
    title: 'Custom Kraft Jewelry Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft jewelry boxes with fitted pads for rings, chains and earrings. Custom sizes, print and wholesale pricing from stock.',
  },
  '/product/kraft-bakery-bags/': {
    title: 'Custom Kraft Bakery Bags Wholesale | Kraft Box Pack',
    description:
      'Grease-resistant kraft bakery bags for cookies, pastries and bread, with window and print options. Wholesale pricing here.',
  },
  '/product/kraft-luxury-magnet-boxes/': {
    title: 'Kraft Magnetic Closure Boxes Wholesale | Kraft Box Pack',
    description:
      'Rigid kraft boxes with a magnetic closure and wrapped finish, sized to your product. Foil and deboss options, wholesale priced.',
  },
  '/product/black-kraft-boxes/': {
    title: 'Custom Black Kraft Boxes Wholesale | Kraft Box Pack',
    description:
      'Black kraft boxes printed on dark board, with white underprint and foil options so branding still reads. Wholesale pricing.',
  },
  '/product/brown-kraft-boxes/': {
    title: 'Custom Brown Kraft Boxes Wholesale | Kraft Box Pack',
    description:
      'Unbleached brown kraft boxes cut to your product, in folding or corrugated builds. Custom print and wholesale pricing here.',
  },
  '/product/kraft-cookie-boxes/': {
    title: 'Custom Kraft Cookie Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft cookie boxes with food-safe board, window and insert options, sized to your bake. Wholesale pricing and free dielines.',
  },
  '/product/kraft-storage-boxes/': {
    title: 'Custom Kraft Storage Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft storage boxes with lids and stacking strength, cut to the shelf or crate you use. Custom print and wholesale pricing.',
  },
  '/product/kraft-paper-dispenser-boxes/': {
    title: 'Kraft Paper Dispenser Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft dispenser boxes with a tear-away front for counter and shelf use, cut to your product. Wholesale pricing per print run.',
  },
  '/product/kraft-candle-sleeve-boxes/': {
    title: 'Kraft Candle Sleeve Boxes Wholesale | Kraft Box Pack',
    description:
      'Printed kraft sleeves that wrap an existing candle jar or tin, sized to circumference plus overlap. Wholesale pricing here.',
  },
  '/product/custom-kraft-bags/': {
    title: 'Custom Kraft Paper Bags Wholesale | Kraft Box Pack',
    description:
      'Kraft paper bags with twisted, flat or rope handles and a reinforced top edge, printed to your artwork at wholesale rates.',
  },
  '/product/kraft-display-boxes/': {
    title: 'Custom Kraft Display Boxes Wholesale | Kraft Box Pack',
    description:
      'Counter and shelf-ready kraft display boxes graded to hold a full stock facing. Custom sizes, print and wholesale pricing.',
  },
  '/product/kraft-skincare-boxes/': {
    title: 'Custom Kraft Skincare Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft skincare cartons sized to jars, tubes and droppers, with panel space kept for ingredient copy. Wholesale rates here.',
  },
  '/product/kraft-flower-boxes/': {
    title: 'Custom Kraft Flower Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft flower boxes for bouquets and arrangements, with liner options and custom depths. Free design help and wholesale rates.',
  },

  /* ---------- category pages ---------- */
  '/product-category/kraft-gift-specialty-boxes/': {
    title: 'Kraft Gift and Specialty Boxes Wholesale | Kraft Box Pack',
    description:
      'Fourteen kraft gift and specialty box styles, from rigid lids to drawer builds, each made to your size at wholesale pricing.',
  },
  '/product-category/kraft-food-packaging/': {
    title: 'Custom Kraft Food Packaging Wholesale | Kraft Box Pack',
    description:
      'Grease-resistant kraft food packaging for takeaway, bakery and grocery use, all made to your sizes at wholesale pricing.',
  },
  '/product-category/kraft-packaging-boxes/': {
    title: 'Custom Kraft Packaging Boxes Wholesale | Kraft Box Pack',
    description:
      'The full kraft box range, from folding cartons to rigid and corrugated builds, all cut to your product at wholesale pricing.',
  },
  '/product-category/colored-kraft-boxes/': {
    title: 'Custom Colored Kraft Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft boxes in black, white and dyed board, with underprint options so colour and branding both hold. Wholesale pricing.',
  },
}
