/**
 * Home page content.
 *
 * The page carried four sections — hero, feature strip, a twenty-product grid
 * and a block of imported WordPress prose. For a page holding 33,242
 * impressions at a 0.55% click-through rate that is very little for a buyer to
 * act on, and nothing between "here are some boxes" and "request a quote".
 *
 * The sections below fill that gap. Every claim traces to
 * src/data/business-facts.ts or to the product data; nothing is invented, and
 * the vague environmental slogan the hero used to lead with is gone in favor
 * of what the company actually sells.
 */

export interface Industry {
  name: string
  /** What makes packaging for this sector different, in one line. */
  note: string
  href: string
  anchor: string
}

/**
 * Industries, taken from the categories that actually hold products rather
 * than from a generic list. Each links to the range that serves it.
 */
export const INDUSTRIES: Industry[] = [
  {
    name: 'Bakery and food service',
    note: 'Grease and steam are the two things that destroy a food box, and both are decided by the board before anything is printed.',
    href: '/product-category/kraft-food-packaging/',
    anchor: 'kraft food packaging',
  },
  {
    name: 'Beauty and personal care',
    note: 'The container decides the carton. Ingredient copy and warnings take more panel space than most brands allow for.',
    href: '/product-category/kraft-cosmetic-boxes/',
    anchor: 'kraft cosmetic packaging',
  },
  {
    name: 'Retail and gifting',
    note: 'A gift box is judged in the seconds it opens — whether the lid lifts cleanly and the contents sit where they were packed.',
    href: '/product-category/kraft-gift-specialty-boxes/',
    anchor: 'kraft gift and specialty boxes',
  },
  {
    name: 'E-commerce and shipping',
    note: 'Couriers charge on dimensional weight, so a box one size too large costs money on every single parcel you send.',
    href: '/product/kraft-mailer-boxes/',
    anchor: 'kraft mailer boxes',
  },
  {
    name: 'Jewelry and accessories',
    note: 'Almost nothing here is heavy and almost everything moves. Retention matters more than strength.',
    href: '/product-category/jewelry-accessories-boxes/',
    anchor: 'kraft jewelry boxes',
  },
  {
    name: 'Apparel and soft goods',
    note: 'Nothing breaks, but almost everything ships larger than it needs to. Folded dimensions are what to measure.',
    href: '/product-category/kraft-apparel-boxes/',
    anchor: 'kraft apparel packaging',
  },
]

export interface SpecGroup {
  label: string
  options: string[]
  note: string
}

/**
 * What can actually be specified. Drawn from the options the product
 * specification tables already list across the catalog.
 */
export const SPEC_GROUPS: SpecGroup[] = [
  {
    label: 'Material',
    options: ['Kraft paperboard', 'White SBS', 'Recycled paperboard', 'E, B and C flute corrugated', 'Rigid greyboard'],
    note: 'Chosen from the weight of your product and the journey it makes, not from a default.',
  },
  {
    label: 'Printing',
    options: ['Offset lithography', 'Digital', 'Flexography', 'Screen', 'CMYK or PMS'],
    note: 'Run length usually decides the route. Digital suits short runs; offset takes over on cost as quantities climb.',
  },
  {
    label: 'Finish',
    options: ['Matte lamination', 'Gloss lamination', 'Spot UV', 'Foil stamping', 'Embossing', 'Debossing'],
    note: 'Each finish is a separate pass on the line, so they are quoted individually rather than bundled.',
  },
  {
    label: 'Structure',
    options: ['Tuck end', 'Roll end', 'Lid and base', 'Drawer and sleeve', 'Gable', 'Pillow'],
    note: 'Cut to your dimensions on a fresh dieline. There are no stock sizes here.',
  },
  {
    label: 'Add-ons',
    options: ['Die-cut windows', 'PET or PLA window film', 'Fitted inserts', 'Handles', 'Magnetic closures', 'Ribbon pulls'],
    note: 'A window removes stiffness from the panel it sits in, so the board often steps up a grade to compensate.',
  },
]

export interface Step {
  n: string
  title: string
  body: string
}

/** The order process, as the quote page already describes it. */
export const PROCESS: Step[] = [
  {
    n: '01',
    title: 'Send your requirements',
    body: 'Product dimensions, the quantity you need and any artwork you already hold. A physical sample of what you pack now tells us more than a specification sheet.',
  },
  {
    n: '02',
    title: 'We price it',
    body: 'You get wholesale pricing with a board grade, a structure and a print method stated — not just a number. Usually within one business day.',
  },
  {
    n: '03',
    title: 'Artwork and dieline',
    body: 'We send a dieline cut to your product. Free design assistance is included, whether you are starting from a logo or adapting existing artwork.',
  },
  {
    n: '04',
    title: 'Proof and approval',
    body: 'A digital proof comes back for sign-off. Nothing runs until you approve it, and this is the cheapest point at which to change anything.',
  },
  {
    n: '05',
    title: 'Production and delivery',
    body: 'Standard turnaround is 8-10 business days after approval, with rush production available on request. Free shipping across the United States.',
  },
]

export interface HomeFaq {
  question: string
  answer: string
}

/** Buyer questions, answered from the published business facts. */
export const HOME_FAQS: HomeFaq[] = [
  {
    question: 'What is the minimum order?',
    answer: '<p>100 units on any format. The print method changes the unit price rather than the minimum — digital suits shorter runs, and offset or flexo take over on cost once quantities climb.</p>',
  },
  {
    question: 'How much do custom kraft boxes cost?',
    answer: '<p>Price starts from $0.30 per piece for large volume orders. Final pricing depends on size, material, printing, and quantity. We quote each project rather than publishing a price list, because a box cut to your product has no shelf price.</p>',
  },
  {
    question: 'How long does production take?',
    answer: '<p>Standard turnaround is 8-10 business days after artwork approval, plus transit. Rush production is available on request. Every quote carries a confirmed date rather than a range.</p>',
  },
  {
    question: 'Can I order a size that is not standard?',
    answer: '<p>Every run is cut to your dimensions — there are no stock sizes. Send the product measurements rather than a box size and we build the dieline around them, then send you a template to design onto.</p>',
  },
  {
    question: 'Do you help with artwork?',
    answer: '<p>Yes, and it is included. We can build packaging artwork from a logo and brand direction, or adapt existing artwork onto a new dieline. Our team also checks every file before a proof is issued, whoever created it.</p>',
  },
  {
    question: 'Can I see a sample before ordering?',
    answer: '<p>Yes. A plain structural sample answers whether the product fits and the box closes properly; a printed prototype answers color and finish. They answer different questions, so tell us which one you need.</p>',
  },
  {
    question: 'Do you ship nationwide?',
    answer: '<p>Yes, across all fifty states, with free shipping. Tell us at quoting if your delivery point cannot accept a pallet and we will break the consignment into cartons instead.</p>',
  },
  {
    question: 'Which material should I choose?',
    answer: '<p>It follows the weight of the product and how far it travels. Folding carton board suits retail packs; corrugated takes over once weight or stacking height climbs. We recommend rather than leaving you to guess.</p>',
  },
  {
    question: 'Can you match packaging I already use?',
    answer: '<p>Send the current pack or its specification and we quote to match the structure and board, rather than proposing an alternative you would then have to re-approve internally.</p>',
  },
  {
    question: 'What happens if I need to reorder?',
    answer: '<p>We hold your dieline, board specification and approved artwork on file. A reorder references the same specification exactly and skips most of prepress, so it is faster than a first order.</p>',
  },

  /* ----------------------------------------------------------------------
     The ten above are the original set and stay in their original order.
     The eight below were added on 2026-08-20 to answer the query clusters
     the page ranked for but never addressed: sizes (~648 impressions at
     position 28.7, zero clicks), the material itself, the paperboard vs
     corrugated confusion behind "kraft cardboard box", recyclability,
     wholesale, white ink on brown kraft, the "craft boxes" spelling, and
     food contact.

     None repeats an answer already given above.
     ---------------------------------------------------------------------- */
  {
    question: 'What sizes do kraft boxes come in?',
    answer:
      '<p>There is no fixed size range, because every run is cut to your dimensions. In practice most orders sit between a 2×2×2 favor box and a 16×12×6 shipper — the size table above gives reference examples. Send the product measurements rather than a box size and we build the dieline around them.</p>',
  },
  {
    question: 'What is a kraft box made from?',
    answer:
      '<p>Kraft paperboard, produced by the kraft pulping process — a chemical method that keeps the wood fibers long, which is what makes the material strong for its weight. It is normally left unbleached, which is where the brown color comes from.</p>',
  },
  {
    question: 'What is the difference between kraft paperboard and corrugated kraft?',
    answer:
      '<p>Cardboard is the everyday word for both, so it helps to separate the two terms. Kraft describes the material; corrugated describes the structure. A corrugated box has a fluted layer sandwiched between two liners, and those liners are usually kraft, so a kraft cardboard box of that type is both. Flat kraft paperboard is a single layer and suits retail cartons; corrugated suits anything that ships on its own.</p>',
  },
  {
    question: 'Is kraft packaging recyclable?',
    answer:
      '<p>Plain kraft paperboard is widely recyclable where local facilities accept it. Coatings, laminations, foil, window film and some adhesives can affect that, so if recyclability is a requirement tell us at quoting stage and we will specify the box around it rather than adding finishes that compromise it.</p>',
  },
  {
    question: 'Do you supply kraft boxes wholesale?',
    answer:
      '<p>Yes — all pricing is wholesale from the 100-piece minimum upward. There is no separate retail tier; a smaller first order simply spreads the setup cost across fewer units.</p>',
  },
  {
    question: 'Can white ink be printed on brown kraft?',
    answer:
      '<p>Yes. White is the most useful ink on unbleached kraft, either on its own for a clean minimal mark, or as an underbase beneath CMYK so the colors above it read true rather than shifting warm against the brown ground.</p>',
  },
  {
    question: 'Are kraft boxes sometimes called craft boxes?',
    answer:
      '<p>Kraft is the correct term — it comes from the German for strength and refers to the pulping process that keeps the paper fibers long. Craft is a common spelling variation and in almost every case means the same thing.</p>',
  },
  /* Food contact is a claim the business stands behind and asked to keep —
     see CONFIRMED_BY_BUSINESS in business-facts.ts, where it is recorded as
     retained across 68 products. It is therefore answered here rather than
     omitted, and the wording sends specification to the quote stage. */
  {
    question: 'Are kraft boxes suitable for food products?',
    answer:
      '<p>They can be, when specified for it. Boxes for direct food contact need board and inks suited to that use, and grease resistance where the product requires it. Tell us at quoting whether the box touches the product directly.</p>',
  },
]

/* ------------------------------------------------------------------------
   Size reference
   ------------------------------------------------------------------------
   Size queries are the largest untouched gap on this page: roughly 648
   impressions at position 28.7 with no clicks, of which `kraft box 8x10`
   alone is ~484 at position 56.8 — and the page carried no size information
   of any kind.

   These are reference points, not a catalog. Every run is cut on a fresh
   dieline around the customer's own product, which is why there is no board
   column: board follows the weight of the product and the journey it makes,
   not the outside dimensions of the box.
   ------------------------------------------------------------------------ */

export interface SizeRow {
  size: string
  products: string
  /** The 8x10 row carries a query of its own, so it is set in bold. */
  emphasis?: boolean
}

export const SIZE_REFERENCE: SizeRow[] = [
  { size: '2 × 2 × 2 in', products: 'Rings, earrings, small favors, wax melts' },
  { size: '3 × 3 × 3 in', products: 'Small candles, lip balm sets, jars' },
  { size: '4 × 4 × 2 in', products: 'Soap bars, jewelry sets, confectionery' },
  { size: '4 × 4 × 4 in', products: 'Medium candles, mugs, small gift sets' },
  { size: '6 × 4 × 2 in', products: 'Cosmetics, supplements, tea' },
  { size: '6 × 6 × 4 in', products: 'Gift sets, skincare kits, bakery items' },
  { size: '8 × 10 × 2 in', products: 'Folded apparel, stationery, prints', emphasis: true },
  { size: '8 × 8 × 3 in', products: 'Cookies, brownies, bakery products' },
  { size: '9 × 6 × 3 in', products: 'Apparel and accessories' },
  { size: '10 × 10 × 4 in', products: 'Gift sets and subscription products' },
  { size: '12 × 9 × 4 in', products: 'Shoes, apparel and hampers' },
  { size: '12 × 12 × 6 in', products: 'Larger gift sets and multipacks' },
  { size: '14 × 10 × 4 in', products: 'Apparel and homeware' },
  { size: '16 × 12 × 6 in', products: 'Large multipacks and shipping applications' },
]

/* ------------------------------------------------------------------------
   Material specifications
   ------------------------------------------------------------------------
   Every competitor ranking for the custom and wholesale queries publishes a
   material table; this page had none.

   Caliper figures for the paperboard grades are arithmetic, not a supplier
   claim: 1pt = 0.001in = 0.0254mm, so 12pt = 0.305mm and 24pt = 0.610mm.
   Flute heights are approximate industry-standard profiles and keep their
   ≈ notation for that reason.

   Deliberately no gsm column. Caliper-to-gsm depends on the density of the
   particular board, so there is no universal conversion that could be
   published honestly — the closing line sends board weight to the quote
   instead.
   ------------------------------------------------------------------------ */

export interface MaterialSpec {
  material: string
  caliper: string
  characteristics: string
  applications: string
}

/* TODO: verify with supplier specs — if real stock data (gsm, measured
   caliper, flute profile) is ever supplied, replace these approximations
   with the confirmed figures and drop the ≈ notation. */
export const MATERIAL_SPECS: MaterialSpec[] = [
  {
    material: 'Natural kraft paperboard (12–14pt)',
    caliper: '0.30 – 0.35 mm',
    characteristics: 'Brown unbleached surface, light folding carton',
    applications: 'Sleeves, small products, light retail cartons',
  },
  {
    material: 'Natural kraft paperboard (16–18pt)',
    caliper: '0.40 – 0.45 mm',
    characteristics: 'Standard folding carton stiffness',
    applications: 'Most retail packaging, cosmetics, soap',
  },
  {
    material: 'Natural kraft paperboard (20–24pt)',
    caliper: '0.50 – 0.60 mm',
    characteristics: 'Heavier folding carton, holds windowed panels',
    applications: 'Larger cartons, boxes with die-cut windows',
  },
  {
    material: 'White kraft / coated board',
    caliper: 'Varies by grade',
    characteristics: 'Cleaner printing surface',
    applications: 'Detailed artwork and full-color packaging',
  },
  {
    material: 'E-flute corrugated',
    caliper: '≈1.5 mm',
    characteristics: 'Thin corrugated profile',
    applications: 'Retail mailers, subscription packaging',
  },
  {
    material: 'B-flute corrugated',
    caliper: '≈3 mm',
    characteristics: 'Greater cushioning and stacking strength',
    applications: 'Shipping, heavier products',
  },
  {
    material: 'C-flute corrugated',
    caliper: '≈4 mm',
    characteristics: 'Thicker corrugated structure',
    applications: 'Larger shipping applications',
  },
  {
    material: 'Rigid board',
    caliper: '1.5 – 3 mm',
    characteristics: 'Thick board for premium structures',
    applications: 'Lid-and-base and presentation boxes',
  },
]

/* ------------------------------------------------------------------------
   Print methods
   ------------------------------------------------------------------------
   The routes already listed as chips in the Printing spec group, with what
   actually decides between them. Run length matters more than the design.
   ------------------------------------------------------------------------ */

export interface PrintMethod {
  method: string
  bestFor: string
  color: string
}

export const PRINT_METHODS: PrintMethod[] = [
  {
    method: 'Digital',
    bestFor: 'Shorter runs, flexible or variable artwork, fast proofs',
    color: 'CMYK',
  },
  {
    method: 'Offset lithography',
    bestFor: 'Larger runs, detailed artwork, consistent color',
    color: 'CMYK or PMS',
  },
  {
    method: 'Flexography',
    bestFor: 'Long corrugated runs, simpler artwork',
    color: 'Spot colors',
  },
  {
    method: 'Screen printing',
    bestFor: 'Bold single-color work, unusual substrates',
    color: 'Spot colors',
  },
]
