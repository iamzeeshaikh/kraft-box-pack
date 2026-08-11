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
 * the vague environmental slogan the hero used to lead with is gone in favour
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
    name: 'Jewellery and accessories',
    note: 'Almost nothing here is heavy and almost everything moves. Retention matters more than strength.',
    href: '/product-category/jewelry-accessories-boxes/',
    anchor: 'kraft jewellery boxes',
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
 * specification tables already list across the catalogue.
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
    answer: '<p>Yes. A plain structural sample answers whether the product fits and the box closes properly; a printed prototype answers colour and finish. They answer different questions, so tell us which one you need.</p>',
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
]
