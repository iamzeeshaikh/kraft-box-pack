/**
 * Written content for the pages that are not products, categories or articles.
 *
 * Two things drove this file. The About page had imported as 253 words of
 * generic sustainability copy that answered nothing a buyer asks before
 * enquiring — and it carried a live `[elementor-template id="2174"]` shortcode,
 * printed as literal text on the page, because the WordPress export brought the
 * shortcode across without the plugin that resolves it. And four pages carried
 * no FAQs at all, on a site where every product and category page has ten.
 *
 * Every business fact stated here is read from `business-facts.ts`, which
 * transcribes the policy pages, rather than restated from memory. Nothing about
 * the company's history, size, location or plant is asserted, because none of
 * it is evidenced anywhere in the project — the sustainability positioning the
 * old page carried is kept in the business's own terms and not strengthened.
 */
import { LEAD_TIME, ORDERING, RETURNS, SHIPPING } from './business-facts'
import type { Faq } from './content'

export interface PageBlock {
  h2: string
  body: string[]
  list?: string[]
}

export interface PageContent {
  /** Leading paragraphs, before the first subheading. */
  intro: string[]
  sections: PageBlock[]
  faqs: Faq[]
}

export const ABOUT: PageContent = {
  intro: [
    'Kraft Box Pack makes custom kraft packaging to order. There is no stock range and no catalog of fixed sizes — every box is cut on a fresh dieline to the dimensions of the product going inside it, printed with your artwork, and produced in a run sized to your order.',
    'The material is the reason most buyers arrive here. Kraft board is made from unbleached pulp, which is what gives it the brown color and the strength, and it is recyclable in the ordinary paper stream. It takes print well enough for retail shelf work while still reading as natural rather than manufactured, which is why it suits <a href="/product-category/kraft-food-packaging/">food and bakery packaging</a>, cosmetics, gifting and subscription boxes in roughly equal measure.',
  ],
  sections: [
    {
      h2: 'How an order actually works',
      body: [
        `Everything starts with a quote, because nothing here has a shelf price. <a href="/get-a-quote/">Send your specification for a quote</a> — dimensions, quantity, material and how you want it printed — and a price comes back ${ORDERING.quoteReply}. If the dimensions are the part you are unsure of, send the product instead and we will work back from it.`,
        `Once the specification is agreed, free design assistance turns your artwork into a print-ready dieline, and you approve that before anything goes on press. Production then runs ${LEAD_TIME.standard}, and free shipping applies on delivery.`,
        `${ORDERING.priceDisclosure} The minimum order is ${ORDERING.minimumLabel}.`,
      ],
    },
    {
      h2: 'What we make',
      body: [
        'The catalog runs from food and bakery packaging through cosmetics, jewelry, apparel, electronics and pharmaceutical cartons, to display, gift and industrial formats. The structures repeat far more than the categories suggest — a tuck end, a lid and base, a mailer, a sleeve and a rigid box cover most of what any of these industries needs, and the difference between them is board weight, finish and print.',
        'That is worth knowing when you are choosing, because a format used in a different industry is often the right answer for yours — <a href="/products/">the full product range</a> is worth reading across rather than down.',
      ],
    },
    {
      h2: 'What we do not do',
      body: [
        'It is quicker to say this plainly than to let you find out at the quote stage.',
      ],
      list: [
        `We do not sell single boxes. Production starts at ${ORDERING.minimumLabel}, so replacing one damaged carton is not something this route can serve.`,
        'We do not hold stock sizes. Everything is cut to your dimensions, which is an advantage on fit and a disadvantage if you needed twenty boxes tomorrow.',
        'There is no checkout on this site. Pricing depends on size, quantity, material and print, so orders are placed against a quote rather than a cart.',
        `${RETURNS.customExclusion} Since the whole catalog is custom-printed, that exclusion covers most of what we make, and <a href="/refund_returns/">the refund and returns policy</a> sets it out in full.`,
      ],
    },
    {
      h2: 'Sustainability, stated plainly',
      body: [
        'The environmental case for kraft is real but it is easy to overstate, so here is the honest version. The board is recyclable and is made from unbleached pulp, and an unlaminated, unfoiled kraft box goes into the paper stream without separation. Add a gloss lamination, a plastic window film or a foil block and that stops being true for the part that carries it.',
        'So if a recyclability claim matters to your brand, it is a decision made at specification time rather than a property of the material. Ask for it when you send the artwork and the finish can be chosen to keep it, which is how <a href="/product/kraft-recycled-kraft-boxes/">recycled kraft boxes</a> are usually specified.',
      ],
    },
  ],
  faqs: [
    {
      question: 'Do you sell ready-made boxes in standard sizes?',
      answer:
        'No. Every box is cut to your dimensions on a fresh dieline, so there is no stock range to order from. That gives a better fit than a nearest-size stock box, but it does mean there is nothing to ship the same day.',
    },
    {
      question: 'Why does the minimum order exist at all?',
      answer: `It is ${ORDERING.minimumLabel}, and the reason is setup rather than material. A dieline has to be cut, files or plates prepared and the press made ready before the first box exists, and none of that scales down — so below that quantity the per-unit price stops being sensible for either side.`,
    },
    {
      question: 'How long does an order take?',
      answer: `Production is ${LEAD_TIME.standard} once artwork is approved. ${LEAD_TIME.rush} The clock starts at approval rather than at order, so returning the proof quickly is the fastest thing you control.`,
    },
    {
      question: 'Why is there no price on the product pages?',
      answer: `Because four things move it independently: size, quantity, material and printing. ${ORDERING.priceDisclosure}`,
    },
    {
      question: 'Do I need print-ready artwork to get started?',
      answer:
        'No. Send whatever you have — a logo, a sketch, a photograph of an existing pack — and free design assistance turns it into a print-ready file on the dieline. You approve that proof before anything goes on press.',
    },
    {
      question: 'We already have packaging. Can you take it over mid-run?',
      answer:
        'Yes, and it is a common way to start. Send the current box rather than its measurements — internal and external dimensions differ by the board caliper, and a supplier changeover quoted from the wrong one produces a box that does not fit the product it replaced.',
    },
    {
      question: 'Is kraft board strong enough for shipping?',
      answer:
        'For a retail carton it is the wrong question — that box is usually protected by an outer. Where the kraft box itself is the shipper, the specification moves to corrugated in E, B or C flute, which is a different board rather than a heavier version of the same one.',
    },
    {
      question: 'Can kraft boxes be printed in full color?',
      answer:
        'Yes, though the brown substrate shifts every color laid on it, so a CMYK build looks warmer on kraft than on white board. Where a color has to be exact, a white underbase or a PMS ink solves it, and both are quoted at specification stage.',
    },
    {
      question: 'Do you ship internationally?',
      answer: `Yes. ${SHIPPING.international} ${SHIPPING.delayNote}`,
    },
    {
      question: 'What happens if the order arrives damaged or wrong?',
      answer: `Contact us ${RETURNS.requestWindow}. Returns are handled ${RETURNS.method}. ${RETURNS.returnLabel} ${RETURNS.restockingFee} Refunds are processed ${RETURNS.refundProcessing}. The full terms, including the exclusion on custom-printed work, are on the refund and returns page.`,
    },
  ],
}

export const PRODUCTS_FAQS: Faq[] = [
  {
    question: 'How is this catalog organized?',
    answer:
      'By industry first — food, cosmetics, gifting, apparel and so on — because that is how most buyers arrive. The underlying structures repeat across those groups, so it is worth opening a category outside your own industry if the format looks closer to what you need.',
  },
  {
    question: 'I cannot find my product type. Can you still make it?',
    answer:
      'Almost certainly. The pages here cover the formats that get searched for, not the limit of what can be cut. If nothing matches, describe the product and its dimensions on the quote form and it will be specified from scratch.',
  },
  {
    question: 'What is the difference between a tuck end and a lid and base?',
    answer:
      'A tuck end is one piece, folded and tucked closed, and suits a product opened once. A lid and base is two pieces and survives repeated opening, which is why games, gifts and premium cosmetics use it. The second costs more board and more assembly.',
  },
  {
    question: 'When do I need corrugated rather than folding carton?',
    answer:
      'When the box is the shipper rather than the retail pack, or when the contents are heavy enough to bow a flat panel. Corrugated adds a fluted layer for stacking strength; folding carton is lighter, prints better and is the retail choice.',
  },
  {
    question: 'Can one box design cover several of my products?',
    answer:
      'Often two or three sizes cover a whole range while sharing one board and one print system, which keeps the shelf presence consistent without shipping empty space. It is usually cheaper than a bespoke size per product.',
  },
  {
    question: 'Do all of these come with a window option?',
    answer:
      'Most folding carton formats can take one. A window costs stiffness in the panel it sits in, so the board often steps up a grade to compensate — worth raising at quote stage because it changes the price rather than just the artwork.',
  },
  {
    question: 'Are inserts available?',
    answer:
      'Yes, in board, foam or molded pulp depending on the product. On anything with several loose components the insert is worth more to the unboxing than the outer box is, because pieces moving in one cavity read as an incomplete product.',
  },
  {
    question: 'Can I order samples before committing to a run?',
    answer:
      'Ask when you request the quote. A plain unprinted sample confirms the structure and fit; a printed sample confirms the color, and the two are produced differently, so say which question you are trying to answer.',
  },
  {
    question: 'Is the price per box the same across the catalog?',
    answer: `No — it moves with size, quantity, material and print on every product. ${ORDERING.priceDisclosure}`,
  },
  {
    question: 'What should I send to get a useful quote first time?',
    answer:
      'Internal dimensions, quantity, what the box holds, and any artwork you already have. Those four answer most of what a quote needs; everything else can be decided afterwards without changing the price much.',
  },
]

export const QUOTE_FAQS: Faq[] = [
  {
    question: 'How soon will I get a price?',
    answer: `${ORDERING.quoteReply.charAt(0).toUpperCase()}${ORDERING.quoteReply.slice(1)} in the ordinary case. A specification with unusual materials or a structure that needs a new dieline drawn can take longer, and you will be told rather than left waiting.`,
  },
  {
    question: 'What if I do not know the dimensions yet?',
    answer:
      'Send the dimensions of the product instead, or a photograph of it beside a ruler. Working back from the contents is more reliable than a guessed box size, because internal and external dimensions differ by the board thickness.',
  },
  {
    question: 'Which dimension order do you use?',
    answer:
      'Length × width × height, and internal unless you say otherwise. Stating which you have measured matters more than the order — a box quoted to external dimensions holds a smaller product than the same numbers read as internal.',
  },
  {
    question: 'What artwork formats can I attach?',
    answer:
      'JPG, PNG or PDF through this form, up to 8 MB. Vector artwork — AI, EPS or a PDF with live vectors — prints best, but it is not needed to get a price; a low-resolution reference is enough at quote stage.',
  },
  {
    question: 'Do I have to fill in the specification section?',
    answer:
      'No, it is optional. Every field in it can be decided later, but each one you complete removes a round trip, so a quote with the specification filled in usually comes back closer to final.',
  },
  {
    question: 'Does requesting a quote commit me to anything?',
    answer:
      'No. A quote is a price and a specification, not an order. Nothing is produced until you approve a proof.',
  },
  {
    question: 'Can I get a quote for several products at once?',
    answer:
      'Yes — describe them in one message rather than sending separate requests. Quantities often combine across items on the same board and print system, which can price better than the same products quoted separately.',
  },
  {
    question: 'Will the quoted price change later?',
    answer:
      'Only if the specification does. Changing size, quantity, material, print or finish after quoting changes the price, which is why the proof stage exists — it is the point where everything is fixed.',
  },
  {
    question: 'Does the quote include delivery and taxes?',
    answer: `${SHIPPING.freeShippingLabel} applies. ${SHIPPING.pricingNote}`,
  },
  {
    question: 'What is the smallest order you will quote?',
    answer: `${ORDERING.minimumLabel}. Anything below that is quoted at ${ORDERING.minimumLabel} in practice, because the setup cost does not scale down.`,
  },
]

export const CONTACT_FAQS: Faq[] = [
  {
    question: 'What is the fastest way to reach you?',
    answer:
      'The quote form, if the question is about a specific job — it arrives with the specification attached, so the reply can contain a price instead of a request for more detail. Phone and email suit anything that is not a quote.',
  },
  {
    question: 'How quickly do you reply?',
    answer: `Quote requests are answered ${ORDERING.quoteReply}. General enquiries are usually faster, because they do not need a price working out first.`,
  },
  {
    question: 'Can I speak to someone before ordering?',
    answer:
      "Yes. Experts' consultation is part of the service rather than an add-on, and it is worth using before the specification is fixed rather than after — the structure and board decisions are the ones that are expensive to change later.",
  },
  {
    question: 'I need to change an order I have already approved.',
    answer:
      'Call rather than email, and do it immediately. Once a job is on press the change becomes a reprint, so the window between approval and production is the one that matters.',
  },
  {
    question: 'Do you have a showroom or a trade counter?',
    answer:
      'No. Samples are sent out instead, which is more useful in practice — you get the actual board and structure in your hand rather than an example of something similar.',
  },
  {
    question: 'Can you send a physical sample before I order?',
    answer:
      'Ask with your quote request and say whether you need to check the structure or the print. A plain unprinted sample answers the first, a printed one answers the second, and they are produced differently.',
  },
  {
    question: 'Who do I contact about an order that has already shipped?',
    answer: `Use the same channel you ordered through, ${RETURNS.requestWindow}. Returns are handled ${RETURNS.method} and a return label is included in the package.`,
  },
  {
    question: 'Do you work with agencies and resellers?',
    answer:
      'Yes. Say so when you make contact, because repeat work across several end clients is usually specified once and reordered, which is a different conversation from a single run.',
  },
  {
    question: 'What time zone are you in?',
    answer:
      'Enquiries are answered in US business hours. Anything sent overnight is picked up the next working day, so a message left at any hour is not lost.',
  },
  {
    question: 'What should I include in a first message?',
    answer:
      'What the box holds, roughly how many you need, and when you need them. Those three make it possible to reply with something useful rather than a list of questions.',
  },
]
