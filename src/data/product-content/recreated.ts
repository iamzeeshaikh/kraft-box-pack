import type { ProductContentMap } from './types'

/**
 * Four products recreated after the WordPress migration dropped them.
 *
 * All four still rank — kraft-diy-kit-boxes at position 7.1,
 * kraft-cosmetic-serum-boxes at 13.8, kraft-diffuser-boxes at 24.8,
 * kraft-corporate-gift-boxes at 39.4 — with 529 impressions between them and
 * nothing to land on. Redirecting them would have thrown that away, because
 * none has an equivalent page: a reed diffuser is not a candle, a serum bottle
 * is not a jar of cream, and a corporate gift programme is not a hamper.
 *
 * They carry no photography. That is recorded in IMAGE-GAPS.md and they are
 * excluded from the Merchant feed until it exists, rather than borrowing
 * another product's images and calling them these.
 */
export const recreatedContent: ProductContentMap = {
  'kraft-diffuser-boxes': {
    intro:
      'A reed diffuser box carries a bottle of oil and a bundle of reeds that are twice its height. The reeds decide the box, not the bottle.',
    sections: [
      {
        h2: 'The reeds set the dimensions',
        body: [
          'Reeds run 10 to 12 inches for a bottle that is usually around 5. Sizing the carton to the bottle leaves nothing for them, which is the single most common error on this format and it is discovered after the dieline is cut.',
          'Send the reed length as supplied, not trimmed. Most brands ship them full length and let the customer cut them down.',
        ],
      },
      {
        h2: 'Ship on a transit cap, never the collar',
        body: [
          'A diffuser leaves the factory with a sealed transit cap and the customer swaps it for the open collar when they set it up. Shipped on the collar it leaks, and oil in a carton of stock ruins far more than the one unit.',
          'If your filler ships on the collar, the packaging cannot fix it — that is a filling decision, and it is worth checking before blaming the box.',
        ],
      },
      {
        h2: 'Reeds puncture corners',
        body: [
          'A loose bundle of reeds slides to one end and the cut tips work through the board at the corner. A separate compartment, or a sleeve holding the bundle away from the walls, prevents it.',
        ],
        table: {
          caption: 'What to send us',
          head: ['Measurement', 'Why it matters'],
          rows: [
            ['Reed length as supplied', 'Sets the carton height — usually double the bottle'],
            ['Bottle height with cap', 'The transit cap is taller than the collar'],
            ['Bottle base diameter', 'Sets the footprint and the collar size'],
            ['Reed count and bundle diameter', 'Decides whether a compartment is needed'],
          ],
        },
      },
      {
        h2: 'A tall narrow front panel',
        body: [
          'The visible face on a shelf is a vertical strip roughly twice as tall as it is wide. Designs laid out as though the panel were square lose their centre, and the brand belongs near the top where it reads above the units in front.',
        ],
      },
    ],
    link: {
      lead: 'For candles in the same fragrance range, where the vessel rather than the reeds sets the size, ',
      href: '/product/kraft-candle-boxes/',
      anchor: 'candle boxes cover jar and tin sizing',
      tail: '.',
    },
    faqs: [
      { question: 'What height should a diffuser box be?', answer: '<p>Set by the reeds, not the bottle. Reeds run 10 to 12 inches for a bottle around 5, so a carton sized to the bottle leaves nothing for them — and that is the most common error on this format.</p>' },
      { question: 'Why do diffusers leak in transit?', answer: '<p>Almost always because they shipped with the open collar fitted rather than a sealed transit cap. The customer swaps the cap for the collar when they set it up. Packaging cannot fix a filling decision.</p>' },
      { question: 'Do the reeds damage the box?', answer: '<p>They can. A loose bundle slides to one end and the cut tips work through the board at the corner. A separate compartment or a sleeve holding the bundle off the walls prevents it.</p>' },
      { question: 'Should reeds be packed trimmed or full length?', answer: '<p>Most brands ship them full length and let the customer cut them down. Tell us which you do, because trimmed reeds change the carton height substantially.</p>' },
      { question: 'What board weight suits a diffuser box?', answer: '<p>Around 18pt SBS with an internal partition. The bottle is glass and the carton is tall, so it needs to feel substantial rather than light.</p>' },
      { question: 'Can the box be rigid?', answer: '<p>Yes, and at a gift price point it is worth it. Diffusers are heavily gifted, and a rigid box holds the tall proportion better than a folding carton.</p>' },
      { question: 'Where should the branding go?', answer: '<p>Near the top of the front panel. The visible face is a tall narrow strip and the top is what reads above the units in front on a shelf.</p>' },
      { question: 'Is a window worth including?', answer: '<p>It can show the oil colour, which some brands sell on. On a narrow panel it costs real stiffness, so the board usually steps up a grade.</p>' },
      { question: 'Can one carton cover several bottle sizes?', answer: '<p>Only where the reed length is the same. Since reeds set the height, two bottle sizes with identical reeds can often share a dieline.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, and they suit the natural positioning most home fragrance brands take. An inner barrier can be specified separately if oil contact is a risk.</p>' },
    ],
  },

  'kraft-corporate-gift-boxes': {
    intro:
      'A corporate gift box is ordered in quantity, sent to people who did not ask for it, and judged by whether it looks considered rather than promotional.',
    sections: [
      {
        h2: 'Restraint reads better than branding',
        body: [
          'A gift covered in a supplier logo reads as advertising, and advertising is what a recipient discounts. A plain box with one debossed or foiled mark reads as a gift, and the card inside does the identifying.',
          'This is the most common thing we are asked to change on a second order.',
        ],
      },
      {
        h2: 'Mixed contents at a level height',
        body: [
          'Corporate sets combine things of different heights — a bottle, a notebook, a small item, a card. Shorter pieces sink below the lid line and shift, so the set looks thrown together when it opens even though everything is present.',
          'Packing the shallow recesses up so every top sits level is the single change that fixes it, and on a gift it does more than any finish.',
        ],
      },
      {
        h2: 'One outer, several bundles',
        body: [
          'Most programmes run more than one set — a client version, a staff version, a seasonal one. One outer size with interchangeable fitments keeps a single print run on the expensive component and changes only the die-cut insert.',
        ],
      },
      {
        h2: 'They are posted, and it shows',
        body: [
          'These are usually couriered to individuals rather than delivered to one address. A presentation box posted alone arrives with scuffed corners and a label across the lid, so it goes inside a plain outer and that outer takes the handling.',
        ],
      },
    ],
    link: {
      lead: 'For larger multi-item sets where weight becomes the constraint, ',
      href: '/product/kraft-gift-hamper-boxes/',
      anchor: 'hamper boxes cover the heavier builds',
      tail: '.',
    },
    faqs: [
      { question: 'How much branding should a corporate gift box carry?', answer: '<p>Less than instinct suggests. A box covered in a supplier logo reads as advertising, which a recipient discounts. One debossed or foiled mark plus a card inside reads as a gift.</p>' },
      { question: 'Why does my gift set look untidy when opened?', answer: '<p>Mixed content heights. Shorter items sink below the lid line and shift in transit, so packing the shallow recesses up until every top sits level is what fixes it.</p>' },
      { question: 'Can one box cover several set variants?', answer: '<p>Yes — one outer size with interchangeable fitments. You keep a single print run on the outer, which is the expensive part, and change only the die-cut insert.</p>' },
      { question: 'Should these ship inside an outer carton?', answer: '<p>Yes. These are couriered to individuals, and a presentation box posted alone arrives with scuffed corners and a label across the lid.</p>' },
      { question: 'What quantities are practical?', answer: '<p>From the standard minimum upward. Below roughly five hundred, digital print with no plate cost usually prices better than litho, which suits most corporate programmes.</p>' },
      { question: 'Can we personalise individual boxes?', answer: '<p>Yes, on digital print. Recipient names, regions or dates cost almost nothing per unit at these quantities.</p>' },
      { question: 'Rigid or folding construction?', answer: '<p>Rigid where the box is opened in a meeting or kept. Folding with a good fitment where it is opened once at a desk — the fitment matters more than the construction.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your contents. Send the actual items, or their dimensions and weights, rather than a target box size — corporate sets are almost always heavier than the footprint suggests.</p>' },
      { question: 'How far ahead should we order?', answer: '<p>Work backwards from the send date through delivery, production and proofing. Corporate programmes are usually tied to a fixed date and proofing is where the time goes.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes for both the outer and the fitment, including moulded pulp where the contents are irregular. For a corporate gift it is often worth stating on the card.</p>' },
    ],
  },

  'kraft-diy-kit-boxes': {
    intro:
      'A DIY kit box holds everything someone needs to make something. If one component is hard to find in the box, the kit reads as incomplete before it has been opened properly.',
    sections: [
      {
        h2: 'Every component needs a position',
        body: [
          'Kit contents are unlike each other by definition — a tool, a material, a small fixing, an instruction sheet. Loose in one cavity they settle at one end, and the customer counts what they can see rather than what is there.',
          'A compartment per component type means the kit can be checked at a glance, which is what makes it feel complete.',
        ],
      },
      {
        h2: 'Instructions have to be found first',
        body: [
          'The instruction sheet is the one component that has to be seen before anything else is touched. A slot in the lid, or a position at the top of the fitment, puts it where it is picked up first rather than discovered underneath the parts.',
        ],
      },
      {
        h2: 'Small parts get lost',
        body: [
          'Anything small enough to slip under a fitment will, and a kit missing one fixing is a kit that cannot be completed. Small components need a closed recess or their own bag rather than an open cavity.',
        ],
        list: {
          title: 'What usually needs separating',
          items: [
            'Instructions — at the top, seen before anything is unpacked',
            'Small fixings and fasteners — closed recess or a bag, never an open cavity',
            'Tools — a fixed seat, since they are the heaviest items and move most',
            'Materials — sized so a part-used kit still looks organised',
          ],
        },
      },
      {
        h2: 'The box is kept while the kit is made',
        body: [
          'A DIY kit is worked through over hours or days, and the box stays open on a table holding the remaining parts. That makes the fitment a working tray rather than transit packaging, and a base that holds its shape when half empty matters more than it would elsewhere.',
        ],
      },
    ],
    link: {
      lead: 'For art and craft materials sold as a set rather than a project kit, ',
      href: '/product/kraft-art-supply-packaging/',
      anchor: 'art supply packaging covers mixed materials',
      tail: '.',
    },
    faqs: [
      { question: 'Why does my kit look incomplete when opened?', answer: '<p>Loose components settle at one end and the customer counts what they can see. A compartment per component type means the kit can be checked at a glance, which is what makes it feel complete.</p>' },
      { question: 'Where should the instructions go?', answer: '<p>At the top — a slot in the lid or the top position in the fitment. It is the one component that has to be seen before anything else is touched.</p>' },
      { question: 'How do I stop small parts getting lost?', answer: '<p>A closed recess or a separate bag rather than an open cavity. Anything small enough to slip under a fitment will, and a kit missing one fixing cannot be completed.</p>' },
      { question: 'Does the box need to survive being kept?', answer: '<p>Yes. A kit is worked through over hours or days with the box open on a table, so the fitment is a working tray rather than transit packaging and the base has to hold shape half empty.</p>' },
      { question: 'What insert material should I use?', answer: '<p>Board for regular shapes, moulded pulp for irregular components, foam where a tool or a fragile part needs cushioning. All three can be cut to hold items at a level height.</p>' },
      { question: 'Can one box cover several kit variants?', answer: '<p>Yes, with one outer and interchangeable fitments. That is worth designing in from the start because kit contents change more often than the box does.</p>' },
      { question: 'Should the box show the finished project?', answer: '<p>Usually, since that is what is being bought. A photograph of the completed piece does more for the sale than showing the components.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your components and the layout you want. Send the actual contents — kits are almost always deeper than a list of parts suggests.</p>' },
      { question: 'Can these ship direct to customers?', answer: '<p>Yes, in an E flute construction or inside a plain outer. A kit shipped alone in a folding carton arrives with crushed corners.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes for the outer and the fitment, and moulded pulp keeps the whole pack in one material stream.</p>' },
    ],
  },

  'kraft-cosmetic-serum-boxes': {
    intro:
      'A serum carton goes around a small glass dropper bottle. The dropper assembly is the part that gets measured wrong, and the contents are the part that stains the board.',
    sections: [
      {
        h2: 'Measure with the dropper seated',
        body: [
          'Bottle specifications quote the container alone. The dropper assembly typically adds around half an inch, and a carton sized from the sheet will not close flat over it.',
          'Measure the bottle as it will actually be packed, cap fitted and label applied. Both add to the figure.',
        ],
      },
      {
        h2: 'Serum wicks into unlined board',
        body: [
          'A dropper cap that has loosened in transit leaks, and serum oils travel into uncoated fibres and show as a translucent mark on the outside within days. On a premium skincare carton that reads as a defective product.',
          'A coated inner face contains it. It costs very little against a visibly marked run that a retailer will refuse.',
        ],
      },
      {
        h2: 'A tall bottle needs holding at the shoulder',
        body: [
          'Held only at the base a tall narrow bottle pivots inside the carton, and every bit of that movement is leverage on the dropper cap. A collar or fitment gripping it at the shoulder stops the movement and, with it, most leaks.',
        ],
      },
      {
        h2: 'Panel space for ingredients and claims',
        body: [
          'Serums carry more copy than most skincare — active percentages, ingredient lists, usage instructions and often a claim that needs qualifying. On a carton this narrow that copy has to be laid out first, with the design working around what is left.',
        ],
      },
    ],
    link: {
      lead: 'For jars, tubes and the wider skincare range, ',
      href: '/product/kraft-skincare-boxes/',
      anchor: 'skincare cartons cover the other container types',
      tail: '.',
    },
    faqs: [
      { question: 'What height should I give you for a serum bottle?', answer: '<p>The bottle with the dropper fully seated, not the bottle alone. Supplier sheets quote the container and the dropper assembly typically adds around half an inch — that gap is the usual reason a carton will not close.</p>' },
      { question: 'Will a leak damage the carton?', answer: '<p>On unlined board, yes. Serum oils wick into the fibres and show as a translucent mark on the outside within days, which on premium skincare reads as a defective product. A coated inner face contains it.</p>' },
      { question: 'Why do dropper caps loosen in transit?', answer: '<p>Because a tall bottle held only at the base pivots inside the carton, and that movement is leverage on the cap. A collar gripping the bottle at the shoulder stops it.</p>' },
      { question: 'What size are serum cartons?', answer: '<p>Commonly around 1.5 x 1.5 x 4.5 in for a 30 ml bottle, measured with the dropper seated. Send the bottle rather than the volume, since bottle shapes vary considerably at the same capacity.</p>' },
      { question: 'How much panel space do the ingredients need?', answer: '<p>More than most brands allow for. Serums carry active percentages, ingredient lists and usage copy, so the panel is laid out first at legible size and the design works around what is left.</p>' },
      { question: 'What board weight suits a serum carton?', answer: '<p>Around 18pt SBS with a coated inner face. The bottle is small but glass, and a tall narrow carton on light board feels flimsy.</p>' },
      { question: 'Which finishes suit this category?', answer: '<p>Soft-touch lamination and deboss read from across a counter. A small foil detail often does not survive the distance between shelf and eye.</p>' },
      { question: 'Can one carton cover several bottle sizes?', answer: '<p>Only where heights are close. A 15 ml and a 30 ml bottle usually need separate dielines, though they can share the board, print system and finish.</p>' },
      { question: 'Do you supply cartons for serum gift sets?', answer: '<p>Yes, with a compartment per bottle so they cannot knock together. Glass against glass is what chips necks in a multi-bottle set.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, with a caliper step-up so a tall carton keeps its stiffness. The inner coating for leak containment is specified separately from the recycled claim.</p>' },
    ],
  },
}
