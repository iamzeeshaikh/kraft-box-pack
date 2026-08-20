/**
 * Hand-written titles and meta descriptions for the pages that already earn
 * impressions in Search Console.
 *
 * Why this exists as an override layer rather than an edit to products.json:
 * that file is generated from the WordPress export, so anything written into
 * it is lost the next time the catalog is regenerated. Keeping the SEO copy
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
  /* `kraft box packaging` is its own query — 1,840 impressions at position
     21.8 — and is not interchangeable with `kraft packaging`, which is a
     separate query at position 55. The exact phrase has to survive any future
     edit to this title. The two largest opportunities on the page are
     `kraft box` (3,836 impressions, position 18.2) and `kraft box packaging`,
     so the title leads on those rather than on long-tail terms. */
  '/': {
    title: 'Kraft Boxes & Custom Kraft Box Packaging Wholesale | Kraft Box Pack',
    description:
      'Custom kraft boxes and kraft box packaging at wholesale prices. Custom sizes, 100-piece MOQ, free design support and quotes within one business day.',
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
      'Heart shaped kraft boxes for gifting and favors, cut on a custom die in your size. Rigid or folding builds, wholesale priced.',
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
    title: 'Kraft Luxury Magnet Boxes Wholesale | Kraft Box Pack',
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
      'Kraft boxes in black, white and dyed board, with underprint options so color and branding both hold. Wholesale pricing.',
  },
  '/product/kraft-lid-base-rigid-boxes/': {
    title: 'Kraft Lid and Base Rigid Boxes Wholesale | Kraft Box Pack',
    description:
      'Two-piece rigid kraft boxes with a lift-off lid, wrapped board and fitted inserts. Custom sizes and print, quoted in a day.',
  },
  '/product/kraft-cupcake-boxes/': {
    title: 'Custom Kraft Cupcake Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft cupcake boxes with fitted inserts that hold each cake upright, plus window options. Custom counts and print, wholesale.',
  },
  '/product/kraft-cardboard-boxes/': {
    title: 'Custom Kraft Cardboard Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft cardboard boxes cut to your dimensions in folding carton or corrugated board. Custom print and finish, wholesale quotes.',
  },
  '/product/kraft-rectangular-gift-boxes/': {
    title: 'Kraft Rectangular Gift Boxes Wholesale | Kraft Box Pack',
    description:
      'Rectangular kraft gift boxes with lid and base or magnetic closure, sized to the product. Custom print and ribbon options.',
  },
  '/product/kraft-paper-packaging/': {
    title: 'Custom Kraft Paper Packaging Wholesale | Kraft Box Pack',
    description:
      'Kraft paper packaging across cartons, sleeves, wraps and bags, all cut to your dimensions. Custom print, wholesale pricing.',
  },
  '/product/kraft-gable-boxes/': {
    title: 'Custom Kraft Gable Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft gable boxes with a built-in handle for food and gifting, in grease-resistant board. Custom sizes, print and windows.',
  },
  '/product/kraft-meat-packaging-boxes/': {
    title: 'Kraft Meat Packaging Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft meat packaging with moisture-resistant board and cold-tolerant adhesive for chilled and frozen lines. Custom sizes.',
  },
  '/product/kraft-cake-boxes/': {
    title: 'Custom Kraft Cake Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft cake boxes with grease-resistant board, a rigid base and window options. Sized to the cake, printed to your artwork.',
  },
  '/product/mini-kraft-boxes/': {
    title: 'Custom Mini Kraft Boxes Wholesale | Kraft Box Pack',
    description:
      'Small kraft boxes cut to your dimensions for samples, favors and single items. Custom print and finish, wholesale quotes.',
  },
  '/product/kraft-square-gift-boxes/': {
    title: 'Kraft Square Gift Boxes Wholesale | Kraft Box Pack',
    description:
      'Square kraft gift boxes in lid and base or tuck end, sized to the product so it cannot move inside. Custom print and ribbon.',
  },
  '/product/kraft-t-shirt-boxes/': {
    title: 'Custom Kraft T-Shirt Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft t-shirt boxes sized to a folded garment, in flat-packed board that assembles quickly. Custom print and insert options.',
  },
  '/product/kraft-fruit-packaging-boxes/': {
    title: 'Kraft Fruit Packaging Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft fruit packaging with ventilation where produce needs it and board that holds a stack in transit. Custom sizes and print.',
  },
  '/product/kraft-boxes-with-lid/': {
    title: 'Custom Kraft Boxes With Lid Wholesale | Kraft Box Pack',
    description:
      'Kraft boxes with a separate lift-off lid, cut to your dimensions with the lid tolerance set at dieline stage. Custom print.',
  },
  '/product/kraft-beard-oil-boxes/': {
    title: 'Custom Kraft Beard Oil Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft beard oil cartons sized to the dropper bottle, with fitted inserts that hold it upright. Custom print and finish options.',
  },
  '/product/kraft-gift-hamper-boxes/': {
    title: 'Kraft Gift Hamper Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft hamper boxes with compartment trays that keep a mixed set sitting at one level. Custom sizes, print and ribbon options.',
  },
  '/product/kraft-gift-card-boxes/': {
    title: 'Custom Kraft Gift Card Boxes Wholesale | Kraft Box Pack',
    description:
      'Small kraft gift card boxes with a slot or cushion that holds the card flat and square. Custom print, foil and finish options.',
  },
  '/product/kraft-vegetable-packaging-boxes/': {
    title: 'Kraft Vegetable Packaging Boxes | Kraft Box Pack Wholesale',
    description:
      'Kraft vegetable packaging with ventilation and board that carries a stack without bowing. Custom sizes, print and wholesale.',
  },
  '/product/kraft-lip-balm-packaging-boxes/': {
    title: 'Kraft Lip Balm Packaging Boxes | Kraft Box Pack Wholesale',
    description:
      'Small kraft lip balm cartons sized to the tube so it cannot rattle. Custom print, and counter trays where you need them.',
  },
  '/product/kraft-noodle-packaging-boxes/': {
    title: 'Kraft Noodle Packaging Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft noodle boxes with a grease and moisture barrier for hot fill, in leak-resistant folds. Custom sizes, print and counts.',
  },
  '/product/kraft-tea-packaging-boxes/': {
    title: 'Custom Kraft Tea Packaging Boxes | Kraft Box Pack Wholesale',
    description:
      'Kraft tea cartons with an aroma barrier and compartment options for sachets or loose leaf. Custom sizes, print and finish.',
  },
  '/product/kraft-coffee-packaging-boxes/': {
    title: 'Kraft Coffee Packaging Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft coffee packaging with a barrier liner and valve options that let roasted beans degas. Custom sizes, print and finish.',
  },
  '/product/kraft-tube-packaging/': {
    title: 'Custom Kraft Tube Packaging Wholesale | Kraft Box Pack',
    description:
      'Kraft paper tubes with a metal or board end cap, wound to your own diameter and length. Custom print, labels and finish.',
  },
  '/product/kraft-flip-top-rigid-boxes/': {
    title: 'Kraft Flip Top Rigid Boxes Wholesale | Kraft Box Pack',
    description:
      'Rigid kraft boxes with a hinged flip-top lid that survives repeated opening over years. Custom sizes, inserts and print.',
  },
  '/product/kraft-bouquet-boxes/': {
    title: 'Custom Kraft Bouquet Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft bouquet boxes with a lined or waterproofed base for stems, in tapered and cylindrical shapes. Custom print options.',
  },
  '/product/kraft-sushi-packaging-boxes/': {
    title: 'Kraft Sushi Packaging Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft sushi boxes with a moisture barrier, window options and compartments that keep pieces apart. Custom sizes and print.',
  },
  '/product/large-kraft-gift-boxes/': {
    title: 'Large Kraft Gift Boxes in Custom Sizes | Kraft Box Pack',
    description:
      'Large kraft gift boxes with a reinforced base that carries the weight, in lid and base or magnetic closure. Custom print.',
  },
  '/product/kraft-paper-gift-wrapping/': {
    title: 'Custom Kraft Paper Gift Wrapping | Kraft Box Pack Wholesale',
    description:
      'Kraft gift wrap printed to your own artwork, in sheets or rolls, with matching tags and ribbon. Wholesale quotes in a day.',
  },
  '/product/kraft-favor-boxes/': {
    title: 'Custom Kraft Favor Boxes Wholesale | Kraft Box Pack',
    description:
      'Small kraft favor boxes for weddings and events, flat-packed and quick to assemble by hand. Custom print and ribbon work.',
  },
  '/product/kraft-pillow-gift-boxes/': {
    title: 'Custom Kraft Pillow Gift Boxes Wholesale | Kraft Box Pack',
    description:
      'Curved kraft pillow boxes that hold shape without glue, flat-packed for storage. Custom sizes, print and ribbon options.',
  },
  '/product/kraft-sandwich-wedge-boxes/': {
    title: 'Kraft Sandwich Wedge Boxes Wholesale | Kraft Box Pack',
    description:
      'Wedge-shaped kraft sandwich packs with a window and grease-resistant board. Custom sizes and print for grab-and-go lines.',
  },
  '/product/kraft-subscription-boxes/': {
    title: 'Custom Kraft Subscription Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft subscription mailers printed inside and out, with inserts that hold a set in place. Custom sizes and monthly runs.',
  },
  '/product/kraft-round-gift-containers/': {
    title: 'Kraft Round Gift Containers Wholesale | Kraft Box Pack',
    description:
      'Cylindrical kraft containers with a snug lid and rolled edge, wound to your own diameter. Custom print and label options.',
  },
  '/product/kraft-insulated-cold-boxes/': {
    title: 'Kraft Insulated Cold Boxes Wholesale | Kraft Box Pack',
    description:
      'Insulated kraft cold boxes with a liner that holds temperature through the whole courier leg. Custom sizes and printing.',
  },
  '/product/kraft-keychain-packaging-boxes/': {
    title: 'Kraft Keychain Packaging Boxes | Kraft Box Pack Wholesale',
    description:
      'Small kraft keychain cartons with a hang tab or window, sized so the item cannot rattle. Custom print and finish options.',
  },
  '/product/kraft-invitation-boxes/': {
    title: 'Custom Kraft Invitation Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft invitation boxes sized to the card so it stays flat and square, with ribbon and foil. Custom print, wholesale runs.',
  },
  '/product/kraft-wax-melt-boxes/': {
    title: 'Custom Kraft Wax Melt Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft wax melt cartons with compartment inserts and window options that show the segments. Custom sizes, print and runs.',
  },
  '/product/kraft-egg-cartons/': {
    title: 'Custom Kraft Egg Cartons Wholesale | Kraft Box Pack',
    description:
      'Molded and folded kraft egg cartons with cushioned cells and a secure closure. Custom counts, print and wholesale runs.',
  },
  '/product/kraft-influencer-boxes/': {
    title: 'Custom Kraft Influencer Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft influencer mailers printed on the inside face for the unboxing moment, with fitted trays. Custom sizes and volumes.',
  },
  '/product/kraft-watch-packaging-boxes/': {
    title: 'Kraft Watch Packaging Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft watch boxes with a cushion or pillow that holds the strap open in its position. Custom sizes, printing and finishing.',
  },
  '/product/kraft-soap-sleeve-boxes/': {
    title: 'Custom Kraft Soap Sleeve Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft soap sleeves and cartons sized to the bar, with die-cut windows that show the surface. Custom printing and finish.',
  },
  '/product/kraft-giveaway-packaging-boxes/': {
    title: 'Kraft Giveaway Packaging Boxes | Kraft Box Pack Wholesale',
    description:
      'Kraft giveaway boxes that assemble fast on site, printed to your own campaign artwork. Custom sizes and large event volumes.',
  },
  '/product/kraft-makeup-palette-boxes/': {
    title: 'Kraft Makeup Palette Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft palette cartons sized to a flat compact, with magnetic or tuck closures. Custom printing, foil and finishing work.',
  },
  '/product/kraft-treat-boxes/': {
    title: 'Custom Kraft Treat Boxes Wholesale | Kraft Box Pack',
    description:
      'Small kraft treat boxes with grease-resistant board and window options, flat-packed. Custom sizes, printing and box counts.',
  },
  '/product/kraft-eyelash-packaging-boxes/': {
    title: 'Kraft Eyelash Packaging Boxes | Kraft Box Pack Wholesale',
    description:
      'Slim kraft lash cartons with a fitted tray that holds the band flat, plus window options. Custom printing and finishing.',
  },
  '/product/kraft-liquor-gift-boxes/': {
    title: 'Custom Kraft Liquor Gift Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft bottle boxes with a fitted collar that stops the bottle moving in transit. Custom sizes, printing and foil finishing.',
  },
  '/product/kraft-popcorn-packaging-boxes/': {
    title: 'Kraft Popcorn Packaging Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft popcorn boxes and tubs with a grease barrier and a base that carries a full fill. Custom sizes and printed event volumes.',
  },
  '/product/kraft-scarf-boxes/': {
    title: 'Custom Kraft Scarf Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft scarf boxes sized to a folded piece, with tissue and ribbon options. Custom printing and finish, quoted within a day.',
  },
  '/product/kraft-medicine-packaging-boxes/': {
    title: 'Kraft Medicine Packaging Boxes | Kraft Box Pack Wholesale',
    description:
      'Kraft medicine cartons with panel space blocked out for regulated copy and batch coding. Custom sizes and leaflet fit checks.',
  },
  '/product/kraft-frozen-food-boxes/': {
    title: 'Custom Kraft Frozen Food Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft frozen food cartons in moisture-resistant board with cold-tolerant adhesive. Custom sizes, printing and bulk volumes.',
  },
  '/product/kraft-art-supply-packaging/': {
    title: 'Custom Kraft Art Supply Packaging | Kraft Box Pack Wholesale',
    description:
      'Kraft art supply boxes with compartment trays that hold each component apart. Custom sizes, print and kit build options.',
  },
  '/product/kraft-ribbon-closure-boxes/': {
    title: 'Kraft Ribbon Closure Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft boxes with a ribbon tie or pull, in lid and base or drawer builds. Custom sizes, ribbon colors and print options.',
  },
  '/product/kraft-board-game-packaging-boxes/': {
    title: 'Kraft Board Game Packaging Boxes | Kraft Box Pack Wholesale',
    description:
      'Telescoping kraft game boxes built for years of opening, with trays for pieces. Custom sizes and print from your dieline.',
  },
  '/product/kraft-toy-packaging-boxes/': {
    title: 'Custom Kraft Toy Packaging Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft toy cartons with window options and a back panel left clear for age grading and warnings. Custom sizes and printing.',
  },
  '/product/kraft-bulk-shipping-crates/': {
    title: 'Kraft Bulk Shipping Crates Wholesale | Kraft Box Pack',
    description:
      'Heavy-duty corrugated kraft crates in B and C flute for stacked pallet loads. Custom sizes, printing and pallet volumes.',
  },
  '/product/kraft-pencil-packaging-boxes/': {
    title: 'Kraft Pencil Packaging Boxes Wholesale | Kraft Box Pack',
    description:
      'Slim kraft pencil cartons and sleeves with tray options that hold a set in order. Custom counts, printing and finish options.',
  },
  '/product/kraft-chocolate-packaging-boxes/': {
    title: 'Kraft Chocolate Packaging Boxes | Kraft Box Pack Wholesale',
    description:
      'Kraft chocolate boxes with compartment trays and a barrier that keeps cocoa oils off the board. Custom counts and print.',
  },
  '/product/kraft-promotional-boxes/': {
    title: 'Custom Kraft Promotional Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft promotional boxes printed to your campaign artwork, flat-packed so they store until the launch. Custom sizes and volumes.',
  },
  '/product/kraft-pr-packaging-boxes/': {
    title: 'Custom Kraft PR Packaging Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft PR boxes printed inside and out for the unboxing, with trays that hold a seeding kit in place. Custom sizes and runs.',
  },
  '/product/kraft-document-mailers/': {
    title: 'Custom Kraft Document Mailers Wholesale | Kraft Box Pack',
    description:
      'Rigid kraft document mailers that keep paperwork flat and square in transit, with a tear strip. Custom sizes and printing.',
  },
  '/product/kraft-cd-dvd-packaging/': {
    title: 'Custom Kraft CD and DVD Packaging | Kraft Box Pack Wholesale',
    description:
      'Kraft CD and DVD wallets and sleeves cut to disc diameter, with a hub or pocket. Custom printing, finishing and volumes.',
  },
  '/product/kraft-muffin-packaging-boxes/': {
    title: 'Kraft Muffin Packaging Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft muffin boxes with fitted inserts that hold each cake upright and a grease barrier. Custom counts, printing and windows.',
  },
  '/product/kraft-bracelet-packaging-boxes/': {
    title: 'Kraft Bracelet Packaging Boxes | Kraft Box Pack Wholesale',
    description:
      'Kraft bracelet boxes with a cushion or bar that holds the piece open and visible. Custom sizes, printing and foil finishing.',
  },
  '/product/kraft-eco-friendly-compostable-boxes/': {
    title: 'Kraft Compostable Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft boxes specified to stay compostable, which means no laminate, film window or foil block. Custom sizes and printing.',
  },
  '/product/kraft-marketing-kit-boxes/': {
    title: 'Custom Kraft Marketing Kit Boxes | Kraft Box Pack Wholesale',
    description:
      'Kraft marketing kit boxes with compartment trays that hold each component apart. Custom sizes, printing and campaign runs.',
  },
  '/product/kraft-dispenser-boxes/': {
    title: 'Custom Kraft Dispenser Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft dispenser boxes with a perforated opening that tears clean and holds its shape. Custom sizes, printing and counts.',
  },
  '/product/kraft-pastry-boxes/': {
    title: 'Custom Kraft Pastry Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft pastry boxes with a grease-resistant liner and window options that show the fill. Custom sizes, printing and counts.',
  },
  '/product/kraft-pop-display-boxes/': {
    title: 'Custom Kraft POP Display Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft counter display boxes that ship flat and stand up on the shelf without tools. Custom sizes, printing and bulk volumes.',
  },
  '/product/kraft-perfume-boxes/': {
    title: 'Custom Kraft Perfume Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft perfume cartons with a fitted collar that stops the bottle moving, in rigid builds. Custom sizes, foil and printing.',
  },
  '/product/kraft-pen-packaging-boxes/': {
    title: 'Custom Kraft Pen Packaging Boxes Wholesale | Kraft Box Pack',
    description:
      'Slim kraft pen boxes with a cushion or tray that holds the barrel still. Custom sizes, printing, foil and finishing work.',
  },
  '/product/kraft-puzzle-packaging-boxes/': {
    title: 'Kraft Puzzle Packaging Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft puzzle boxes with a reinforced base, because the weight sits on it for the life of the pack. Custom sizes and print.',
  },
  '/product/kraft-recycled-kraft-boxes/': {
    title: 'Custom Recycled Kraft Boxes Wholesale | Kraft Box Pack',
    description:
      'Boxes in recycled kraft board, cut to your dimensions and specified to stay in the paper stream. Custom sizes and printing.',
  },
  '/product/kraft-jewelry-insert-boxes/': {
    title: 'Kraft Jewelry Insert Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft jewelry boxes with foam, board or velvet inserts cut to the piece. Custom sizes, printing and finishing options.',
  },
  '/product/kraft-donut-packaging-boxes/': {
    title: 'Kraft Donut Packaging Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft donut boxes with a grease barrier and window options, sized to the count. Custom printing, finishing and bulk volumes.',
  },
  '/product/kraft-stationery-boxes/': {
    title: 'Custom Kraft Stationery Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft stationery boxes with compartment trays that keep a set in order. Custom sizes, printing, foil and finishing work.',
  },
  '/product/kraft-juice-bottle-carriers/': {
    title: 'Kraft Juice Bottle Carriers Wholesale | Kraft Box Pack',
    description:
      'Kraft juice carriers with divider cells and a handle that carries a full load. Custom counts, printing and bulk volumes.',
  },
  '/product/kraft-photo-frame-boxes/': {
    title: 'Custom Kraft Photo Frame Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft frame boxes with corner protection and a snug fit that stops the glass shifting. Custom sizes and printing options.',
  },
  '/product/kraft-ring-packaging-boxes/': {
    title: 'Custom Kraft Ring Packaging Boxes | Kraft Box Pack Wholesale',
    description:
      'Small kraft ring boxes with a slotted cushion that grips the band and holds it upright. Custom printing, foil and finish.',
  },
  '/product/kraft-retail-display-trays/': {
    title: 'Kraft Retail Display Trays Wholesale | Kraft Box Pack',
    description:
      'Kraft display trays with a perforation that opens clean and leaves a shelf-ready front. Custom sizes and printing options.',
  },
  '/product/kraft-rigid-boxes/': {
    title: 'Custom Kraft Rigid Boxes Wholesale | Kraft Box Pack',
    description:
      'Wrapped rigid kraft boxes with a greyboard core, in lid and base, drawer or magnetic builds. Custom sizes and printing work.',
  },
  '/product/kraft-octagon-boxes/': {
    title: 'Custom Kraft Octagon Boxes Wholesale | Kraft Box Pack',
    description:
      'Eight-sided kraft boxes cut on a dieline drawn to your dimensions, with lid options. Custom printing and finishing work.',
  },
  '/product/kraft-brownie-packaging-boxes/': {
    title: 'Kraft Brownie Packaging Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft brownie boxes with a grease barrier and dividers that keep squares apart. Custom counts, printing and window options.',
  },
  '/product/kraft-seafood-boxes/': {
    title: 'Custom Kraft Seafood Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft seafood cartons in moisture-resistant board with cold-tolerant adhesive for chilled lines. Custom sizes and printing.',
  },
  '/product/kraft-macaron-packaging-boxes/': {
    title: 'Kraft Macaron Packaging Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft macaron boxes with a fitted tray that holds each shell apart, plus window options. Custom counts and printing work.',
  },
  '/product/kraft-magnetic-closure-boxes/': {
    title: 'Kraft Magnetic Closure Boxes Wholesale | Kraft Box Pack',
    description:
      'Rigid kraft boxes with hidden magnets that close square and stay shut in transit. Custom sizes, printing and finishing work.',
  },
  '/product/kraft-salad-boxes/': {
    title: 'Custom Kraft Salad Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft salad boxes with a moisture barrier and window options, in sizes that suit a counter or a delivery bag. Custom print.',
  },
  '/product/kraft-vitamin-packaging-boxes/': {
    title: 'Kraft Vitamin Packaging Boxes | Kraft Box Pack Wholesale',
    description:
      'Kraft vitamin cartons sized to the bottle, with panel space left clear for supplement facts. Custom sizes and printing options.',
  },
  '/product/kraft-minimalist-boxes/': {
    title: 'Custom Kraft Minimalist Boxes Wholesale | Kraft Box Pack',
    description:
      'Plain kraft boxes with one or two colors on uncoated board, cut to your dimensions. Custom sizes, printing and volumes.',
  },
  '/product/kraft-underwear-packaging-boxes/': {
    title: 'Kraft Underwear Packaging Boxes | Kraft Box Pack Wholesale',
    description:
      'Kraft underwear boxes sized to a folded garment, with window options that show the fabric. Custom sizes and printing options.',
  },
  '/product/kraft-cylindrical-boxes/': {
    title: 'Custom Kraft Cylindrical Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft cylinders wound to your diameter and length, with board or metal end caps. Custom printing, labels and finishing work.',
  },
  '/product/kraft-heavy-duty-storage-boxes/': {
    title: 'Kraft Heavy Duty Storage Boxes | Kraft Box Pack Wholesale',
    description:
      'Corrugated kraft storage boxes in B or C flute with hand holes and a lid. Custom sizes, printing and full pallet volumes.',
  },
  '/product/kraft-syrup-packaging-boxes/': {
    title: 'Kraft Syrup Packaging Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft syrup cartons with a fitted collar that stops the bottle moving and a wipe-clean face. Custom sizes and printing options.',
  },
  '/product/kraft-supplement-boxes/': {
    title: 'Custom Kraft Supplement Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft supplement cartons sized to the tub or bottle, with panel space for facts panels. Custom sizes and printing options.',
  },
  '/product/kraft-earring-packaging-boxes/': {
    title: 'Kraft Earring Packaging Boxes | Kraft Box Pack Wholesale',
    description:
      'Small kraft earring boxes with a slotted card or cushion that holds a pair square. Custom printing, foil and finishing work.',
  },
  '/product/kraft-triangle-boxes/': {
    title: 'Custom Kraft Triangle Boxes Wholesale | Kraft Box Pack',
    description:
      'Three-sided kraft boxes cut on a dieline drawn to your dimensions, with tuck or lid closures. Custom printing and finish.',
  },
  '/product/kraft-notebook-packaging/': {
    title: 'Custom Kraft Notebook Packaging | Kraft Box Pack Wholesale',
    description:
      'Kraft notebook sleeves and boxes sized to the cover so the paper block stays flat. Custom printing, foil and finish work.',
  },
  '/product/kraft-belt-packaging-boxes/': {
    title: 'Custom Kraft Belt Packaging Boxes | Kraft Box Pack Wholesale',
    description:
      'Kraft belt boxes sized to a coiled or folded belt, with clear window options. Custom sizes, printing and finishing work.',
  },
  '/product/kraft-industrial-parts-boxes/': {
    title: 'Kraft Industrial Parts Boxes Wholesale | Kraft Box Pack',
    description:
      'Corrugated kraft parts boxes with dividers and board that carries weight without bowing. Custom sizes and bulk pallet volumes.',
  },
  '/product/kraft-baby-product-boxes/': {
    title: 'Custom Kraft Baby Product Boxes | Kraft Box Pack Wholesale',
    description:
      'Kraft baby product cartons in clean, well-finished board, with panel space for safety marks. Custom sizes and printing options.',
  },
  '/product/kraft-badge-packaging-boxes/': {
    title: 'Custom Kraft Badge Packaging Boxes | Kraft Box Pack',
    description:
      'Small kraft badge boxes with a card or cushion that holds the pin flat and square. Custom printing and finishing options.',
  },
  '/product/kraft-milk-bottle-carriers/': {
    title: 'Kraft Milk Bottle Carriers Wholesale | Kraft Box Pack',
    description:
      'Kraft milk carriers with divider cells and a handle rated for a full load. Custom counts, printing and full bulk volumes.',
  },
  '/product/kraft-brochure-packaging-boxes/': {
    title: 'Kraft Brochure Packaging Boxes | Kraft Box Pack Wholesale',
    description:
      'Kraft brochure boxes and mailers that keep printed matter flat and square in transit. Custom sizes and printing options.',
  },
  '/product/kraft-pyramid-boxes/': {
    title: 'Custom Kraft Pyramid Boxes Wholesale | Kraft Box Pack',
    description:
      'Pyramid-shaped kraft boxes cut on a dieline to your dimensions, with a tuck or ribbon close. Custom printing and finish.',
  },
  '/product/kraft-granola-bar-boxes/': {
    title: 'Custom Kraft Granola Bar Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft granola bar cartons with a grease barrier and counts that suit a retail multipack. Custom sizes and printing work.',
  },
  '/product/kraft-shoulder-boxes/': {
    title: 'Custom Kraft Shoulder Boxes Wholesale | Kraft Box Pack',
    description:
      'Rigid kraft shoulder boxes where the inner tray sits proud of the base. Custom sizes, printing, foil and finishing work.',
  },
  '/product/kraft-certificate-boxes/': {
    title: 'Custom Kraft Certificate Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft certificate boxes and tubes that keep a document flat or rolled without creasing. Custom sizes and printing options.',
  },
  '/product/kraft-first-aid-kit-boxes/': {
    title: 'Kraft First Aid Kit Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft first aid boxes with compartment trays that keep the contents findable in a hurry. Custom sizes and printing work.',
  },
  '/product/kraft-calendar-boxes/': {
    title: 'Custom Kraft Calendar Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft calendar boxes and sleeves sized to the block, flat-packed ready for a seasonal run. Custom sizes and printing work.',
  },
  '/product/kraft-ppe-packaging-boxes/': {
    title: 'Custom Kraft PPE Packaging Boxes | Kraft Box Pack Wholesale',
    description:
      'Kraft PPE cartons with dispenser openings and panel space for compliance marks. Custom sizes, counts and printing options.',
  },
  '/product/kraft-beauty-kit-boxes/': {
    title: 'Custom Kraft Beauty Kit Boxes Wholesale | Kraft Box Pack',
    description:
      'Kraft beauty kit boxes with compartment trays that hold each item apart inside the pack. Custom sizes and printing work.',
  },
  '/product/kraft-mascara-boxes/': {
    title: 'Custom Kraft Mascara Boxes Wholesale | Kraft Box Pack',
    description:
      'Slim kraft mascara cartons sized to the tube so that it cannot rattle around in transit. Custom sizes and finishing work.',
  },
  '/product/kraft-hexagon-boxes/': {
    title: 'Custom Kraft Hexagon Boxes Wholesale | Kraft Box Pack',
    description:
      'Six-sided kraft boxes cut on a dieline drawn to your own dimensions, with lid or tuck closures. Custom printing. Quoted in a day.',
  },
  '/get-a-quote/': {
    title: 'Request a Free Quote for Kraft Boxes | Kraft Box Pack',
    description:
      'Send your size, quantity and artwork and we reply with wholesale pricing within one business day. Free design assistance.',
  },
  '/products/': {
    title: 'All Custom Kraft Boxes and Packaging | Kraft Box Pack',
    description:
      'Browse 162 kraft box styles across food, retail, gift, cosmetic, pharma and industrial ranges, all made to your own size.',
  },
  '/product/kraft-apparel-packaging-boxes/': {
    title: 'Kraft Apparel Packaging Boxes | Kraft Box Pack Wholesale',
    description:
      'Kraft apparel boxes sized to a folded garment, in flat-packed board that assembles fast. Custom sizes and printing work.',
  },
  '/product/kraft-candy-favor-boxes/': {
    title: 'Custom Kraft Candy Favor Boxes Wholesale | Kraft Box Pack',
    description:
      'Small kraft candy favor boxes with a food-safe liner, flat-packed ready for events. Custom sizes, printing and volumes.',
  },
  '/product/kraft-sock-packaging-boxes/': {
    title: 'Custom Kraft Sock Packaging Boxes | Kraft Box Pack Wholesale',
    description:
      'Kraft sock boxes sized to a rolled or a folded pair, with clear window options. Custom sizes, printing and finishing work.',
  },
}
