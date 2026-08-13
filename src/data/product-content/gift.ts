import type { ProductContentMap } from './types'

/**
 * Custom gift boxes, twenty-five products.
 *
 * The largest single category, and the one where the temptation to repeat
 * "presentation matters" on every page is strongest. Each entry leads on
 * something only true of that product: a bouquet box needs a liner because
 * stems carry water, a hamper fails on mixed content heights, an influencer
 * box is judged on how it opens on camera, a subscription box is judged on
 * how it opens twelve times.
 */
export const giftContent: ProductContentMap = {
  'kraft-luxury-magnet-boxes': {
    intro:
      'A magnetic closure box shuts with a definite click and opens in one movement. That single interaction is most of what the format is bought for.',
    sections: [
      {
        h2: 'Magnet strength follows lid size',
        body: [
          'A large lid on weak magnets springs open in transit; a small lid on strong ones is awkward to open and feels unpleasant. The strength is specified against lid area and weight rather than picked as a default.',
          'Send the finished dimensions and the contents weight, and the magnet count and grade follow from them.',
        ],
      },
      {
        h2: 'Magnets sit inside the construction',
        body: [
          'They are set into the flap and the wall during assembly and are invisible in the finished box. Their position has to stay clear of any deboss or foil detail, so it is agreed at dieline stage rather than discovered at proof.',
        ],
      },
      {
        h2: 'What it costs and where it goes',
        body: [
          'This is a rigid construction, so it is hand-assembled and ships made up rather than flat. The magnets themselves are a small part of the cost; the assembly and the freight are the larger part.',
        ],
      },
    ],
    link: {
      lead: 'For the same rigid construction with a separate lift-off lid, ',
      href: '/product/kraft-lid-base-rigid-boxes/',
      anchor: 'lid and base boxes are the two-piece alternative',
      tail: '.',
    },
    faqs: [
      { question: 'How strong should the magnets be?', answer: '<p>Specified against lid area and contents weight. A large lid on weak magnets springs open in transit; a small lid on strong ones is unpleasant to open.</p>' },
      { question: 'Are the magnets visible?', answer: '<p>No. They are set into the flap and wall during assembly. Their position does need to stay clear of any deboss or foil, so it is agreed at dieline stage.</p>' },
      { question: 'Why is this format more expensive?', answer: '<p>It is a rigid construction, hand-assembled and shipped made up rather than flat. The magnets are a small part of the cost; assembly and freight are the larger part.</p>' },
      { question: 'Do these ship flat?', answer: '<p>Collapsible versions do, at some cost to the feel. Standard rigid magnetic boxes ship assembled, which matters on freight at volume.</p>' },
      { question: 'Can the box hold heavy contents?', answer: '<p>Yes, with a fitment carrying load into the walls. The magnets hold the lid, not the contents, so weight is a separate specification.</p>' },
      { question: 'Why is this closure used for unboxing videos?', answer: '<p>Because it opens in one movement and shuts audibly. Tape being fought open on camera is the most common thing we are asked to fix in that category.</p>' },
      { question: 'Should it ship inside an outer carton?', answer: '<p>If it is being filmed or gifted, yes. A courier label and handling scuffs on the box about to be opened undoes the reason for buying it.</p>' },
      { question: 'Which finishes suit this format?', answer: '<p>Soft-touch with foil or blind deboss. The box is handled slowly at the moment of opening, so texture registers more than print gloss.</p>' },
      { question: 'Can you add a ribbon pull?', answer: '<p>Yes, and on a snug lid it helps. Without one a well-fitted magnetic lid can be awkward to lift from a flat surface.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes for the core and the wrap. The magnets are not recyclable with the board, which is worth stating if you make a recycling claim.</p>' },
    ],
  },

  'kraft-flower-boxes': {
    intro:
      'A flower box carries stems that are usually still in water or damp foam. Moisture, not weight, is what destroys it.',
    sections: [
      {
        h2: 'Water goes straight into the board',
        body: [
          'Stems in water or wet foam put moisture directly against the base, and untreated board softens within hours rather than days. The base gives way while the arrangement is being carried, which is the worst possible moment.',
          'A waterproof liner or a coated interior is not a refinement on this format — it is what makes it work at all.',
        ],
      },
      {
        h2: 'Depth follows the arrangement, not the box',
        body: [
          'Florists build the arrangement in the box, so the usable depth has to allow for foam at the base plus the stems standing in it. A box sized from the flowers alone comes out too shallow once the foam is in.',
        ],
      },
      {
        h2: 'Carried at an angle',
        body: [
          'A flower box is carried by hand, often tilted, and an arrangement that shifts is ruined. Foam that fits the base tightly, or a fitted insert, keeps it in place better than any closure.',
        ],
      },
    ],
    link: {
      lead: 'For bouquets wrapped rather than arranged in foam, ',
      href: '/product/kraft-bouquet-boxes/',
      anchor: 'bouquet boxes cover the taller formats',
      tail: '.',
    },
    faqs: [
      { question: 'Do flower boxes need a liner?', answer: '<p>If they carry stems in water or damp foam, yes. Untreated board softens within hours and the base gives way while the arrangement is being carried.</p>' },
      { question: 'How deep should the box be?', answer: '<p>Deep enough for the foam at the base plus the stems standing in it. A box sized from the flowers alone comes out too shallow once the foam is in.</p>' },
      { question: 'How do I stop the arrangement shifting?', answer: '<p>Foam fitted tightly to the base, or an insert. A flower box is carried tilted, and a snug base holds the arrangement better than any closure.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your arrangement style. Send the foam block size and the finished height you build to.</p>' },
      { question: 'Are hat-box style round formats available?', answer: '<p>Yes, and they are common in this category. The lid fit is tighter on a round box, so a sample before the run is worth it.</p>' },
      { question: 'Can these be printed inside?', answer: '<p>Yes, though a liner usually covers the interior. Print is better used on the lid and outer walls.</p>' },
      { question: 'Do you supply handles?', answer: '<p>Yes, ribbon or die-cut. On a wet filled box the board around a die-cut handle needs reinforcing, since it is both loaded and damp.</p>' },
      { question: 'Can these be delivered by courier?', answer: '<p>With an outer carton and secure foam, yes, though a wet arrangement is a difficult courier item. Most florists deliver these themselves.</p>' },
      { question: 'What board is used?', answer: '<p>Rigid or heavy folding with a moisture-resistant interior. The base specification matters more than the walls.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes for the outer. The waterproof liner is a separate component and is where the recyclability question sits.</p>' },
    ],
  },

  'kraft-bouquet-boxes': {
    intro:
      'A bouquet box is tall and open-topped, holding a wrapped bunch upright rather than an arrangement in foam.',
    sections: [
      {
        h2: 'Tall and top-heavy',
        body: [
          'A bouquet puts its mass at the top, well above the base, so the box tips easily. A wider base than the bouquet strictly needs is what keeps it standing, both in a shop and in a car.',
        ],
      },
      {
        h2: 'Open top, protected stems',
        body: [
          'The point of the format is that the flowers are visible while the stems and any water wrap are contained. That means the box height is set by where the wrap ends rather than by the flowers.',
        ],
      },
      {
        h2: 'Transport is the failure',
        body: [
          'Most bouquet damage happens in a car boot. A box that holds the bunch upright and does not slide is worth more than one that looks better on a counter, which is a trade worth making deliberately.',
        ],
      },
    ],
    faqs: [
      { question: 'Why does the bouquet box tip over?', answer: '<p>The mass sits at the top, well above the base. A wider base than the bouquet strictly needs is what keeps it standing in a shop and in a car.</p>' },
      { question: 'How tall should the box be?', answer: '<p>Set by where the stem wrap ends rather than by the flowers, since the point of the format is that the blooms stay visible.</p>' },
      { question: 'Where does most damage happen?', answer: '<p>In a car boot. A box that holds the bunch upright and does not slide is worth more than one that looks better on a counter.</p>' },
      { question: 'Do these need a liner?', answer: '<p>If a water wrap is included, yes. Any moisture reaching the board softens the base, which is where the whole weight sits.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your bouquet sizes. Send the wrap diameter at the base and the finished height.</p>' },
      { question: 'Can these carry by hand?', answer: '<p>Yes, and a handle helps on taller boxes. The board around a die-cut handle is reinforced because a filled bouquet box is heavier than it looks.</p>' },
      { question: 'Can they be printed?', answer: '<p>Yes, and the tall outer panels give good area. Restrained print suits the category, since the flowers provide the color.</p>' },
      { question: 'Do they ship flat?', answer: '<p>Folding versions do. Rigid bouquet boxes ship assembled and are bulky, which is a real freight consideration.</p>' },
      { question: 'Are these suitable for courier delivery?', answer: '<p>Only inside a substantial outer and with the bunch secured. Bouquets are difficult courier items regardless of packaging.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, with a caliper step-up given the height and the tipping load.</p>' },
    ],
  },

  'kraft-gift-hamper-boxes': {
    intro:
      'A hamper holds several unlike items, and it fails visually rather than structurally. Nothing breaks — the set just arrives looking thrown together.',
    sections: [
      {
        h2: 'Mixed heights are the problem',
        body: [
          'Items of different heights sink below the lid line and shift in transit, so the hamper looks disarranged when it opens even though everything is present. Packing the shallow recesses up so every top sits level is the single change that fixes it.',
        ],
      },
      {
        h2: 'Weight adds up quickly',
        body: [
          'A hamper of bottles, jars and preserves is far heavier than the box size suggests, and the base carries all of it. Buyers specify by footprint and under-grade the board, and the base opens when the hamper is lifted.',
        ],
      },
      {
        h2: 'One outer, several contents',
        body: [
          'Most brands run several hamper variants. One outer size with two or three interchangeable fitments keeps a single print run on the expensive component and changes only the die-cut insert between variants.',
        ],
      },
    ],
    link: {
      lead: 'For smaller multi-item sets rather than full hampers, ',
      href: '/product/kraft-marketing-kit-boxes/',
      anchor: 'kit boxes cover compartmented sets',
      tail: '.',
    },
    faqs: [
      { question: 'Why does my hamper look untidy when opened?', answer: '<p>Mixed content heights. Shorter items sink below the lid line and shift, so packing the shallow recesses up until every top sits level is what fixes it.</p>' },
      { question: 'Why does the base give way?', answer: '<p>A hamper of bottles and jars is far heavier than the footprint suggests, and the base carries all of it. Specify by filled weight rather than box size.</p>' },
      { question: 'Can one box cover several hamper variants?', answer: '<p>Yes — one outer with two or three interchangeable fitments. You keep a single print run on the outer, which is the expensive part.</p>' },
      { question: 'What insert material should I use?', answer: '<p>Board for regular shapes, molded pulp for irregular ones, foam where items are fragile. All three can be cut to hold each item at a levelled height.</p>' },
      { question: 'Do you supply handles?', answer: '<p>Yes, and on a filled hamper they are necessary. The board around the handle is reinforced because the load concentrates there.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your contents and layout. Send the actual items, or their dimensions and weights, rather than a target box size.</p>' },
      { question: 'Should the box be rigid?', answer: '<p>For premium hampers, usually. For volume gifting a heavy folding carton with a good fitment does the job at considerably less cost.</p>' },
      { question: 'Can these be posted?', answer: '<p>With an outer carton, yes. A hamper posted alone arrives with crushed corners, and the weight makes that more likely rather than less.</p>' },
      { question: 'Should I order spares for a season?', answer: '<p>Yes. Hampers are bought for a single season with no second run behind them, and overage inside the original run costs a fraction of a short reprint.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, with a grade step-up given the load. Molded pulp fitments keep the whole pack recyclable.</p>' },
    ],
  },

  'kraft-drawer-gift-boxes': {
    intro:
      'A drawer gift box slides open horizontally, which makes the reveal gradual rather than immediate. The slide is what the format is bought for.',
    sections: [
      {
        h2: 'The slide has to be right',
        body: [
          'Too tight and the tray has to be forced, tearing the sleeve edge. Too loose and it slides out when the box is picked up. The working band is narrow and cannot be judged from a drawing, so a sample matters here.',
        ],
      },
      {
        h2: 'Something to pull',
        body: [
          'Without a ribbon pull, a thumb notch or a tab, the tray has to be shaken out. A ribbon reads as most considered but is hand-finished and adds labor per unit at volume.',
        ],
      },
      {
        h2: 'A gradual reveal',
        body: [
          'Unlike a lift-off lid, a drawer reveals contents progressively, which suits sets where the arrangement is part of the gift. It also means the contents must not shift, because a partially opened drawer shows the disorder first.',
        ],
      },
    ],
    link: {
      lead: 'For the everyday version of this construction, ',
      href: '/product/kraft-drawer-boxes/',
      anchor: 'drawer boxes cover the standard formats',
      tail: '.',
    },
    faqs: [
      { question: 'Why does the tray stick or fall out?', answer: '<p>The tolerance between too tight and too loose is narrow, and it cannot be judged from a drawing. A physical sample before the run is worth the step on this format.</p>' },
      { question: 'How does the customer open it?', answer: '<p>With a ribbon pull, a thumb notch or a tab. Without one the tray has to be shaken out, which undercuts the reason for choosing the format.</p>' },
      { question: 'Is a ribbon practical at volume?', answer: '<p>It is hand-finished, so it adds labor per unit. For a few hundred that is fine; at tens of thousands a die-cut notch is more sensible.</p>' },
      { question: 'Do the contents need an insert?', answer: '<p>Yes, more than on a lift-off box. A drawer reveals contents progressively, so anything that has shifted shows first.</p>' },
      { question: 'Rigid or folding?', answer: '<p>Rigid holds the slide tolerance far better over repeated opening. Folding ships flat and costs a fraction, at the cost of a slide that loosens.</p>' },
      { question: 'Can the sleeve and tray differ in color?', answer: '<p>Yes, and it is a straightforward way to add contrast since they are separate components.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your contents including the insert, which sets the internal depth.</p>' },
      { question: 'Can I have a window in the sleeve?', answer: '<p>Yes, though it weakens the sleeve that holds the tray square, so the board usually steps up.</p>' },
      { question: 'Do these ship flat?', answer: '<p>Folding versions do; rigid ships assembled and takes noticeably more freight volume.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes for both components, including the core and wrap on rigid constructions.</p>' },
    ],
  },

  'kraft-lid-base-rigid-boxes': {
    intro:
      'The classic rigid two-piece — a wrapped base and a separate lid. It is the most substantial-feeling construction in the catalog.',
    sections: [
      {
        h2: 'Hand-assembled, and that is the cost',
        body: [
          'The base and lid are each built by wrapping a printed sheet around greyboard by hand. The wrap, the corners and any lining are separate operations, and the boxes ship assembled rather than flat.',
          'What that buys is a box that feels different in the hand and holds its shape for years. Whether that is worth it comes down to whether the box gets kept.',
        ],
      },
      {
        h2: 'Bleed around the turn-in',
        body: [
          'A wrap needs artwork carried around the turn-in as well as to the visible edge, which is more area than the outside dimensions suggest. Designs tight to the edge lose detail where the paper folds over the board.',
        ],
      },
      {
        h2: 'Lid depth changes the look',
        body: [
          'A shallow lid shows more of the base; a deep lid covers most of the box. Neither is structurally better, so it is worth deciding deliberately rather than accepting a default.',
        ],
      },
    ],
    link: {
      lead: 'For the magnetic closure version of rigid construction, ',
      href: '/product/kraft-magnetic-closure-boxes/',
      anchor: 'magnetic boxes cover that closure',
      tail: '.',
    },
    faqs: [
      { question: 'Why are rigid boxes more expensive?', answer: '<p>They are hand-assembled, with the wrap, corner finish and lining each a separate operation, and they ship assembled rather than flat. What that buys is a box that feels different and lasts.</p>' },
      { question: 'How much bleed does the artwork need?', answer: '<p>More than a flat carton. Bleed carries around the turn-in as well as to the visible edge, so the artwork area is larger than the outside dimensions suggest.</p>' },
      { question: 'How deep should the lid be?', answer: '<p>An appearance decision. A shallow lid shows more of the base; a deep lid covers most of the box. Worth deciding deliberately rather than by default.</p>' },
      { question: 'Can rigid boxes carry weight?', answer: '<p>Yes, provided the fitment transfers load into the walls rather than resting it on the base. A wrapped chipboard base is not structural on its own.</p>' },
      { question: 'Do they ship flat?', answer: '<p>Not normally. Collapsible rigid constructions exist and ship flatter at some cost to the feel, and we quote both if freight volume matters.</p>' },
      { question: 'Which finishes suit them?', answer: '<p>Deboss, foil and soft-touch. Texture matters more than gloss because these boxes are handled slowly.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your contents and fitment. Send what goes in rather than a target box size.</p>' },
      { question: 'What is the turnaround?', answer: '<p>Longer than a folding carton, since hand assembly and each applied finish add time. We confirm a firm date with the quote.</p>' },
      { question: 'Can the lid and base be different colors?', answer: '<p>Yes, and it is common. They are separate components wrapped in separate sheets.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes for both core and wrap. A plastic laminate on the wrap would take the pack out of the paper stream.</p>' },
    ],
  },

  'kraft-flip-top-rigid-boxes': {
    intro:
      'A flip-top rigid box has a hinged lid attached to the base, so it opens like a book and cannot be put down separately.',
    sections: [
      {
        h2: 'The hinge is the wear point',
        body: [
          'Unlike a lift-off lid, a flip-top hinge is flexed every time the box is opened. On a box that gets kept and reopened, the hinge construction decides how long it lasts, and it is a specification rather than an assembly detail.',
        ],
      },
      {
        h2: 'The lid cannot get lost',
        body: [
          'That is the practical advantage over a two-piece box. For anything the customer opens repeatedly — jewelry, watches, keepsakes — an attached lid is a genuine improvement rather than a style choice.',
        ],
      },
      {
        h2: 'Closure at the front',
        body: [
          'A flip-top needs something to hold it shut, since gravity does not. A magnetic catch is the usual answer; a friction fit works but loosens with use.',
        ],
      },
    ],
    faqs: [
      { question: 'How long does the hinge last?', answer: '<p>It depends on the hinge construction, which is a specification rather than an assembly detail. On a box that gets reopened regularly it is the component that decides the life of the box.</p>' },
      { question: 'What holds a flip-top closed?', answer: '<p>Usually a magnetic catch, since gravity does not. A friction fit works but loosens with use.</p>' },
      { question: 'Why choose this over a lift-off lid?', answer: '<p>The lid cannot get lost, which matters for anything the customer opens repeatedly — jewelry, watches, keepsakes.</p>' },
      { question: 'Do these ship flat?', answer: '<p>No, rigid flip-tops ship assembled. That is a freight consideration at volume.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your contents and fitment. Send what goes in, including any insert.</p>' },
      { question: 'Can the interior be printed?', answer: '<p>Yes, and on a flip-top the inside of the lid is in view whenever the box is open, which makes it worth using.</p>' },
      { question: 'Which finishes suit this format?', answer: '<p>Soft-touch and foil. The box is handled repeatedly, so a finish that resists fingerprints is worth choosing.</p>' },
      { question: 'Can it hold heavy contents?', answer: '<p>Yes with a fitment carrying load into the walls. Bear in mind the hinge carries the lid weight every time it opens.</p>' },
      { question: 'What is the turnaround?', answer: '<p>At the longer end, since rigid construction is hand-assembled and the hinge adds an operation.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes for core and wrap.</p>' },
    ],
  },

  'kraft-shoulder-boxes': {
    intro:
      'A shoulder box has an inner tray sitting proud of the base, so the lid closes onto a ledge rather than over the outside. It is the most precise rigid construction.',
    sections: [
      {
        h2: 'Three components, tighter tolerance',
        body: [
          'A base, a shoulder and a lid all have to align. That is one more component than a standard rigid box and correspondingly less room for variation, which is why it costs more and why a sample matters.',
        ],
      },
      {
        h2: 'What the shoulder buys',
        body: [
          'The lid meets a ledge rather than sliding down the outside, which gives a clean visible line and a controlled closing action. It is the construction used where the box itself is meant to signal expense.',
        ],
      },
      {
        h2: 'The shoulder can be a contrast',
        body: [
          'Because it is a separate component, the shoulder can be wrapped in a different color or material from the base and lid. That visible band is one of the format\'s few decorative opportunities and it costs nothing extra beyond the stock.',
        ],
      },
    ],
    link: {
      lead: 'For the simpler two-piece rigid construction, ',
      href: '/product/kraft-lid-base-rigid-boxes/',
      anchor: 'lid and base boxes are less exacting',
      tail: '.',
    },
    faqs: [
      { question: 'What is a shoulder box?', answer: '<p>A rigid box with an inner tray sitting proud of the base, so the lid closes onto a ledge rather than over the outside. It gives a clean visible line and a controlled closing action.</p>' },
      { question: 'Why does it cost more?', answer: '<p>Three components have to align rather than two, which means tighter tolerances and an extra assembly operation.</p>' },
      { question: 'Can the shoulder be a different color?', answer: '<p>Yes, and it is one of the format\'s few decorative opportunities. It costs nothing beyond the stock since the shoulder is a separate component.</p>' },
      { question: 'Should I order a sample?', answer: '<p>On this construction particularly. Three-part alignment is not judgeable from a drawing.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your contents and fitment. Send what goes in rather than a target size.</p>' },
      { question: 'Do these ship flat?', answer: '<p>No, they ship assembled like all rigid constructions.</p>' },
      { question: 'What finishes suit them?', answer: '<p>Deboss and foil on the lid, with the shoulder often left plain in a contrasting stock so the band reads clearly.</p>' },
      { question: 'Can it hold heavy contents?', answer: '<p>Yes with an appropriate fitment. The shoulder adds rigidity to the base, which helps.</p>' },
      { question: 'What is the lead time?', answer: '<p>At the longer end given the extra assembly step. We confirm a firm date with the quote.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes across all three components.</p>' },
    ],
  },

  'kraft-ribbon-closure-boxes': {
    intro:
      'A ribbon closure is tied or pulled rather than tucked. It reads as considered, and it is hand-finished, which is the trade.',
    sections: [
      {
        h2: 'Hand-finishing is a per-unit cost',
        body: [
          'A ribbon is attached by hand, so its cost scales with quantity rather than being absorbed in a setup. For a few hundred boxes that is usually acceptable; at tens of thousands it changes the economics substantially.',
          'Where volume is high, a die-cut tuck or a magnetic closure gives a similar impression at a fraction of the labor.',
        ],
      },
      {
        h2: 'Ribbon type and how it ages',
        body: [
          'Satin frays at cut ends unless heat-sealed. Grosgrain holds its edge better and reads as more substantial. Cotton tape suits a natural kraft positioning. The choice affects both appearance and how the box looks after handling.',
        ],
      },
      {
        h2: 'Where the ribbon is anchored',
        body: [
          'A ribbon threaded through the board pulls at those holes every time it is used. Reinforcement at the anchor points is what stops a ribbon tearing free after a few openings.',
        ],
      },
    ],
    link: {
      lead: 'For a closure that gives the same impression without hand-finishing, ',
      href: '/product/kraft-magnetic-closure-boxes/',
      anchor: 'magnetic closures open in one movement',
      tail: '.',
    },
    faqs: [
      { question: 'Is a ribbon closure practical at volume?', answer: '<p>It is hand-finished, so the cost scales per unit rather than being absorbed in a setup. For a few hundred boxes it is fine; at tens of thousands it changes the economics substantially.</p>' },
      { question: 'Which ribbon type should I choose?', answer: '<p>Satin frays at cut ends unless heat-sealed. Grosgrain holds its edge and reads as more substantial. Cotton tape suits a natural kraft positioning.</p>' },
      { question: 'Why does the ribbon tear free?', answer: '<p>It pulls at the anchor holes every time it is used. Reinforcement at those points is what stops it after a few openings.</p>' },
      { question: 'Is there a cheaper alternative that looks similar?', answer: '<p>A magnetic closure or a well-made die-cut tuck gives a comparable impression without the per-unit labor.</p>' },
      { question: 'Can you supply the ribbon in a brand color?', answer: '<p>Yes, subject to availability in the ribbon type you want. Custom colors may carry a minimum of their own.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your contents. The ribbon length follows the box dimensions plus enough for the bow or pull.</p>' },
      { question: 'Does the ribbon affect recyclability?', answer: '<p>Yes — it is not paper, so it should be removed before recycling. Worth noting if you make a recycling claim on the pack.</p>' },
      { question: 'Can the box also have a tuck closure?', answer: '<p>Yes, and it is a sensible belt-and-braces approach where the box ships. The ribbon then reads as decorative rather than structural.</p>' },
      { question: 'What lead time should I expect?', answer: '<p>Longer than a plain box, since hand-finishing is a separate operation after production.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes for the box. The ribbon is a separate material and is where the recycling caveat sits.</p>' },
    ],
  },

  'kraft-rectangular-gift-boxes': {
    intro:
      'The standard rectangular gift box is the most efficient shape to make, fill, ship and stack. Everything else is a departure from it.',
    sections: [
      {
        h2: 'Efficiency is the argument',
        body: [
          'A rectangle nests against other rectangles, fills a pallet without void, cuts from a sheet with minimal waste and holds most products without a fitment. Shaped boxes cost more in every one of those dimensions.',
          'Choosing rectangular is a defensible commercial decision rather than a lack of imagination, and the presentation can come from the finish instead.',
        ],
      },
      {
        h2: 'Proportion changes the impression',
        body: [
          'Within a rectangle, proportion does a lot of work. A shallow wide box reads differently from a deep narrow one holding the same volume, and it is a free decision — the material cost is nearly identical.',
        ],
      },
      {
        h2: 'Where a fitment still helps',
        body: [
          'A product that does not fill the footprint slides. A simple pad or a platform raising the product toward the lid costs little and changes the moment the box opens.',
        ],
      },
    ],
    faqs: [
      { question: 'Why choose a rectangular box?', answer: '<p>Efficiency. It nests, fills a pallet without void, cuts from a sheet with minimal waste and holds most products without a fitment. Shaped boxes cost more on every one of those.</p>' },
      { question: 'Does proportion matter?', answer: '<p>Considerably, and it is nearly free. A shallow wide box reads differently from a deep narrow one holding the same volume, at almost identical material cost.</p>' },
      { question: 'Do I need an insert?', answer: '<p>If the product does not fill the footprint, yes. A simple pad or a platform raising the product toward the lid changes the moment the box opens.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your contents. Send the product rather than a box size and we build outward from it.</p>' },
      { question: 'Rigid or folding?', answer: '<p>Folding for volume and freight economy, rigid where the box is kept. Rectangular works well in both constructions.</p>' },
      { question: 'Can I have a window?', answer: '<p>Yes, and a rectangular panel takes an aperture more predictably than a curved or angular one.</p>' },
      { question: 'What finishes suit them?', answer: '<p>Anything — the flat panels take foil, deboss and lamination cleanly, which is another practical advantage of the shape.</p>' },
      { question: 'Do these stack?', answer: '<p>Better than any other format. That matters for both retail display and storage.</p>' },
      { question: 'Can one design cover several sizes?', answer: '<p>Yes, and sharing board, print and finish across sizes is what makes a range read as a family.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes across the range.</p>' },
    ],
  },

  'kraft-square-gift-boxes': {
    intro:
      'A square box has no long side, which changes how it is held, how it faces on a shelf and what fits inside it.',
    sections: [
      {
        h2: 'No obvious front',
        body: [
          'Four identical faces means the box can be picked up or shelved any way round. That is a design opportunity and a merchandising problem — critical information often has to appear on more than one face.',
        ],
      },
      {
        h2: 'What fits a square well',
        body: [
          'Round, cubic and soft contents fill a square efficiently. A long thin product in a square box wastes most of the volume and slides, which is where a rectangular box would have been the right answer.',
        ],
      },
      {
        h2: 'Proportion within the square',
        body: [
          'A cube reads differently from a shallow square. The shallow version suits flat gifts and presents its contents on opening; the cube suits volume and hides them until the lid comes off.',
        ],
      },
    ],
    link: {
      lead: 'For elongated contents, ',
      href: '/product/kraft-rectangular-gift-boxes/',
      anchor: 'rectangular boxes fill more efficiently',
      tail: '.',
    },
    faqs: [
      { question: 'Which face is the front?', answer: '<p>There is not one, which is both the appeal and the problem. Critical information often has to appear on more than one face because the box can be shelved any way round.</p>' },
      { question: 'What contents suit a square box?', answer: '<p>Round, cubic and soft items. A long thin product wastes most of the volume and slides, which is a case for a rectangular box instead.</p>' },
      { question: 'Cube or shallow square?', answer: '<p>Shallow suits flat gifts and presents contents on opening; a cube suits volume and hides them until the lid comes off.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your contents. Send the product rather than a target size.</p>' },
      { question: 'Do square boxes stack?', answer: '<p>Yes, as well as rectangular ones, and they nest predictably in a shipping case.</p>' },
      { question: 'Rigid or folding?', answer: '<p>Both work. Folding ships flat and costs less; rigid feels more substantial and is worth it where the box is kept.</p>' },
      { question: 'Can I have a window?', answer: '<p>Yes, on one or more faces. Each aperture costs stiffness, so multiple windows usually mean a board step-up.</p>' },
      { question: 'Do I need an insert?', answer: '<p>If the contents do not fill the footprint. In a square box a loose item can slide in two directions rather than one.</p>' },
      { question: 'What finishes suit them?', answer: '<p>Flat faces take foil, deboss and lamination cleanly. A single strong mark on one face usually reads better than repeating it on all four.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes across the range.</p>' },
    ],
  },

  'kraft-round-gift-containers': {
    intro:
      'A round container suits round contents and reads as more deliberate than a box. The lid fit and the wrap seam are its two characteristics.',
    sections: [
      {
        h2: 'No corners to absorb a mismatch',
        body: [
          'On a square lid a slight variation is taken up at the corners. On a round one there are none, so the lid either slides smoothly or binds. The tolerance is tighter than most buyers expect.',
        ],
      },
      {
        h2: 'Artwork wraps continuously',
        body: [
          'A design has to work as a loop with no start or end, and the wrap seam always lands somewhere. Placing it deliberately — behind, away from the mark — is better than letting it fall through the logo.',
        ],
      },
      {
        h2: 'Rotation as well as sliding',
        body: [
          'Loose contents in a round container turn as well as slide, which marks more surfaces than in a square box. A fitted pad matters more here than the shape suggests.',
        ],
      },
    ],
    link: {
      lead: 'For a lighter wound construction with fitted ends, ',
      href: '/product/kraft-tube-packaging/',
      anchor: 'tube packaging is the lower-cost cylinder',
      tail: '.',
    },
    faqs: [
      { question: 'Why does a round lid bind?', answer: '<p>There are no corners to absorb a slight mismatch, so it either slides smoothly or binds. The tolerance is tighter than on a square box and worth confirming with a sample.</p>' },
      { question: 'How should artwork be laid out?', answer: '<p>As a continuous loop with no start or end. The wrap seam always lands somewhere, so place it deliberately rather than letting it fall through the logo.</p>' },
      { question: 'Do contents move differently?', answer: '<p>Yes. In a round container loose contents turn as well as slide, which marks more surfaces, so a fitted pad matters more than the shape suggests.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Specified by internal diameter and height. Wall thickness means the internal space is smaller than the external dimension.</p>' },
      { question: 'Do these ship flat?', answer: '<p>No, they ship assembled, which is a freight consideration at volume.</p>' },
      { question: 'Which finishes work on a curve?', answer: '<p>Foil and deboss both work, though very fine detail can distort on a tight radius.</p>' },
      { question: 'Can I have a window?', answer: '<p>Yes, though an aperture in a curved wall reduces strength noticeably, so it suits display rather than shipping.</p>' },
      { question: 'What contents suit this?', answer: '<p>Round and soft items. Angular contents leave void at the corners of their own footprint.</p>' },
      { question: 'Is this the same as a tube?', answer: '<p>No. A tube is a lighter wound construction with fitted ends; a round container has a lidded opening and a wrapped finish, and costs more.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes for body and wrap, with paperboard ends keeping the pack in the paper stream.</p>' },
    ],
  },

  'kraft-heart-shaped-boxes': {
    intro:
      'A heart box is bought for one occasion and judged entirely on the shape. Everything about producing it follows from the die.',
    sections: [
      {
        h2: 'Tooling lands on the first order',
        body: [
          'A heart needs its own cutting die, and that cost sits with the first run and carries forward to reorders in the same shape and size. Changing the size later means paying for tooling again.',
        ],
      },
      {
        h2: 'The inner curves are hard to fill',
        body: [
          'A heart has a deep notch at the top and a point at the bottom, and almost no product reaches into either. An insert takes up that void, otherwise contents slide into the point and the box looks half full.',
        ],
      },
      {
        h2: 'One season, no second run',
        body: [
          'These sell in a short window around a single occasion. Producing overage inside the original run costs a fraction of a separate short run, and running out cannot be fixed afterwards.',
        ],
      },
    ],
    link: {
      lead: 'For occasion gifting in a more efficient shape, ',
      href: '/product/kraft-square-gift-boxes/',
      anchor: 'square gift boxes avoid the tooling cost',
      tail: '.',
    },
    faqs: [
      { question: 'Do heart boxes need custom tooling?', answer: '<p>Yes. The die cost lands on the first run and carries forward to reorders in the same shape and size. Changing size later means paying for tooling again.</p>' },
      { question: 'Why does the box look half empty?', answer: '<p>The notch at the top and the point at the bottom are hard to fill, and contents slide into the point. An insert takes up that void.</p>' },
      { question: 'Should I order spares?', answer: '<p>Yes. These sell in a short window around one occasion with no second run behind them, and overage inside the original run is far cheaper than a reprint.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your contents. Bear in mind usable volume is much less than the outline suggests because of the curves.</p>' },
      { question: 'Rigid or folding?', answer: '<p>Both are possible. Rigid holds the shape crisply; folding ships flat and costs less but the curves are harder to keep sharp.</p>' },
      { question: 'Can these hold chocolates?', answer: '<p>Yes, with a compliant grade and a fitted tray. The tray is what stops pieces sliding into the point.</p>' },
      { question: 'Can I have a window?', answer: '<p>Yes, usually heart-shaped to match, cut on the same die. It costs stiffness on a lid that is already an awkward shape.</p>' },
      { question: 'How do these ship?', answer: '<p>With more void than a rectangular pack against a square outer carton, which is worth allowing for in freight.</p>' },
      { question: 'What finishes suit them?', answer: '<p>Foil and deboss on a plain kraft ground. The shape is doing the work, so busy print competes with it.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, in both folding and rigid constructions.</p>' },
    ],
  },

  'kraft-pillow-gift-boxes': {
    intro:
      'A pillow box folds from a single blank into a curved-end shape. It is the cheapest presentation format and it holds less than it appears to.',
    sections: [
      {
        h2: 'Capacity is smaller than it looks',
        body: [
          'The curved ends take up internal volume, so usable space is noticeably less than the external dimensions suggest. A product sized to the flat measurement will not go in.',
        ],
      },
      {
        h2: 'Overfilling opens the ends',
        body: [
          'Fill it past its capacity and the box loses its curve and the ends gape. That is the format failing rather than the board, and the answer is a larger box rather than a heavier one.',
        ],
      },
      {
        h2: 'Cheapest way to present something small',
        body: [
          'One blank, one fold, no glue on some constructions. For favors, jewelry, vouchers and small soft goods it does a presentation job at a fraction of a carton\'s cost.',
        ],
      },
    ],
    link: {
      lead: 'For small gifts needing a rigid structure instead, ',
      href: '/product/kraft-favor-boxes/',
      anchor: 'favor boxes hold their shape when filled',
      tail: '.',
    },
    faqs: [
      { question: 'How much does a pillow box hold?', answer: '<p>Less than the external dimensions suggest, because the curved ends take internal volume. A product sized to the flat measurement will not go in.</p>' },
      { question: 'Why do the ends gape?', answer: '<p>Overfilling. The box loses its curve and the ends spring open, which is the format failing rather than the board. A larger box is the answer, not a heavier one.</p>' },
      { question: 'What contents suit this?', answer: '<p>Flat or soft items — jewelry, vouchers, scarves, confectionery. Rigid rectangular products fight the curve.</p>' },
      { question: 'Is this cheaper than a carton?', answer: '<p>Considerably. One blank, one fold and minimal material make it the cheapest presentation format available.</p>' },
      { question: 'Can I add a window?', answer: '<p>Yes, on the flat face. The curved ends do not take an aperture well.</p>' },
      { question: 'What board weight is used?', answer: '<p>Light to moderate. Too heavy and the curve will not form cleanly, which is the reverse of the usual rule.</p>' },
      { question: 'Do they ship flat?', answer: '<p>Yes, completely flat, which makes freight negligible relative to the quantity.</p>' },
      { question: 'Can they hang on a peg?', answer: '<p>Yes with a reinforced tab on the flat face, though the curve makes them sit slightly proud of the fixture.</p>' },
      { question: 'What finishes suit them?', answer: '<p>Foil or deboss on the flat face. Anything crossing the curve distorts.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, and they form the curve well at the right caliper.</p>' },
    ],
  },

  'kraft-gift-card-boxes': {
    intro:
      'A gift card box turns a plastic or paper card into something that can be handed over. It is almost entirely presentation.',
    sections: [
      {
        h2: 'The card must be visible or obvious',
        body: [
          'A card hidden inside a plain box gives no clue what it is. A window, a die-cut slot holding the card face-on, or a printed panel showing the value all solve it — a closed unmarked box does not.',
        ],
      },
      {
        h2: 'The card has to stay put',
        body: [
          'A loose card slides and falls out when the box is opened at an angle. A slit or a corner slot holds it in position and presents it face-on, which is also better presentation.',
        ],
      },
      {
        h2: 'Small format, small budget',
        body: [
          'These are given away with a purchase or sold at a low margin. One or two colors on kraft with a die-cut slot does the job; anything more rarely returns its cost.',
        ],
      },
    ],
    faqs: [
      { question: 'Should the card be visible?', answer: '<p>Yes, or at least obvious. A card hidden in a plain unmarked box gives no clue what it is — a window, a die-cut slot or a printed panel all solve it.</p>' },
      { question: 'How do I stop the card falling out?', answer: '<p>A slit or corner slot holding it in position. It also presents the card face-on, which is better presentation than a loose card lying flat.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your card dimensions. Standard card sizes vary slightly between issuers, so send an actual card.</p>' },
      { question: 'How much should I spend on this?', answer: '<p>Not much. These are given away with a purchase or sold at low margin, so one or two colors on kraft with a die-cut slot is usually right.</p>' },
      { question: 'Can these hold a card and a note?', answer: '<p>Yes, with a second slot or a pocket. Tell us the note size, since it adds depth the card alone does not.</p>' },
      { question: 'Do they ship flat?', answer: '<p>Yes, which keeps freight negligible at the quantities these run.</p>' },
      { question: 'Can these be personalized?', answer: '<p>Yes on digital print, which makes names or occasions affordable at small quantities.</p>' },
      { question: 'What finishes suit them?', answer: '<p>A single foil block reads well against kraft and is one pass. Full-color rarely justifies itself at this size and price.</p>' },
      { question: 'Can these hang for retail display?', answer: '<p>Yes with a reinforced tab, and gift cards are frequently merchandised on pegs.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes across the range.</p>' },
    ],
  },

  'kraft-invitation-boxes': {
    intro:
      'An invitation box presents printed stationery — a card, inserts and often ribbon or wax — as an object rather than an envelope.',
    sections: [
      {
        h2: 'Flat contents crease at the corners',
        body: [
          'Invitation cards are flat, and flat things bend at the corner. Holding the stack inboard of the box corners, with a rigid enough base, is what gets them there uncreased.',
        ],
      },
      {
        h2: 'Depth for the whole suite',
        body: [
          'Modern invitation suites include the main card, RSVP cards, details cards, sometimes vellum and ribbon. That stack is considerably deeper than the main card alone, and a box sized to the invitation will not close over the set.',
        ],
      },
      {
        h2: 'Posted, and it shows',
        body: [
          'These go through the post, and a presentation box posted alone arrives marked. Either specify a mailer around it or accept that the box will not look as it did when it left.',
        ],
      },
    ],
    link: {
      lead: 'For flat printed items posted without a presentation box, ',
      href: '/product/kraft-document-mailers/',
      anchor: 'document mailers keep flat items flat',
      tail: '.',
    },
    faqs: [
      { question: 'Why do invitations arrive creased?', answer: '<p>Flat things bend at the corner. Holding the stack inboard of the box corners with a rigid enough base is what gets them there uncreased.</p>' },
      { question: 'How deep should the box be?', answer: '<p>Deep enough for the whole suite — main card, RSVP, details cards, vellum, ribbon. That stack is considerably deeper than the invitation alone.</p>' },
      { question: 'Can these be posted?', answer: '<p>They can, but a presentation box posted alone arrives marked. Specify a mailer around it if the box has to arrive pristine.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your suite. Send the full assembled stack rather than the main card dimensions.</p>' },
      { question: 'Rigid or folding?', answer: '<p>Rigid for high-end wedding stationery where the box is part of the gift. Folding is adequate where the box is opened once.</p>' },
      { question: 'Can you accommodate wax seals and ribbon?', answer: '<p>Yes, and both add depth. A wax seal in particular needs clearance so the lid does not press on it.</p>' },
      { question: 'What finishes suit them?', answer: '<p>Foil and blind deboss on kraft, which matches the stationery conventions of the category.</p>' },
      { question: 'Can these be produced in small quantities?', answer: '<p>Yes, and short runs suit digital print, which makes personalized names and dates affordable.</p>' },
      { question: 'Do you supply the insert as well?', answer: '<p>Yes, in board, holding the cards in position and away from the corners.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, and uncoated kraft suits the natural stationery aesthetic these are usually chosen for.</p>' },
    ],
  },

  'kraft-liquor-gift-boxes': {
    intro:
      'A liquor box carries a heavy glass bottle, usually as a gift, and glass in packaging fails from movement rather than from impact.',
    sections: [
      {
        h2: 'Movement breaks glass, not thin board',
        body: [
          'A bottle held rigidly with no room to shift survives handling that shatters one rattling in an oversized box. The fit matters more than the wall thickness, which is the reverse of what most buyers assume.',
          'A fitted collar or a die-cut cradle holding the bottle at the shoulder and base is the component that does the work.',
        ],
      },
      {
        h2: 'Weight goes through the base',
        body: [
          'A filled bottle is heavy and the base carries all of it. A single glued base seam opens when the box is lifted, which is exactly when a bottle is most vulnerable.',
        ],
      },
      {
        h2: 'Bottle shapes vary more than sizes',
        body: [
          'Spirits bottles differ enormously in shoulder shape, neck length and base diameter even at the same volume. A box sized from the volume rather than the actual bottle rarely fits properly.',
        ],
      },
    ],
    faqs: [
      { question: 'What breaks bottles in packaging?', answer: '<p>Movement rather than impact. A bottle held rigidly survives handling that shatters one rattling in an oversized box, so the fit matters more than the wall thickness.</p>' },
      { question: 'Do I need an insert?', answer: '<p>For a single bottle, a collar or cradle holding it at the shoulder and base. That is the component doing the protection.</p>' },
      { question: 'Why does the base fail?', answer: '<p>A filled bottle is heavy and the base carries all of it. A single glued base seam opens when the box is lifted, which is when the bottle is most vulnerable.</p>' },
      { question: 'Can you size from the bottle volume?', answer: '<p>Not reliably. Spirits bottles differ enormously in shoulder shape, neck length and base diameter at the same volume, so send the actual bottle.</p>' },
      { question: 'Rigid or folding?', answer: '<p>Rigid for premium gifting, heavy folding carton with a fitted cradle for volume. Both need the base specified for the weight.</p>' },
      { question: 'Can these be posted?', answer: '<p>With an outer carton and a proper cradle, yes, though glass in transit always carries risk. Check carrier restrictions on alcohol as well.</p>' },
      { question: 'Can these hold two bottles?', answer: '<p>Yes, with a divider so bottles cannot touch. Glass against glass is the most common breakage in multi-bottle packs.</p>' },
      { question: 'What finishes suit them?', answer: '<p>Foil and deboss on kraft. The category positions on craft and provenance, which busy print works against.</p>' },
      { question: 'Do you supply handles?', answer: '<p>Yes, though on a heavy filled box the handle area needs substantial reinforcement.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, with a grade step-up given the weight.</p>' },
    ],
  },

  'kraft-candy-favor-boxes': {
    intro:
      'A candy favor box is a small carton filled with confectionery for an event, produced in a fixed quantity for a single day.',
    sections: [
      {
        h2: 'Assembly time is the hidden cost',
        body: [
          'Someone assembles and fills two hundred of these by hand, usually the night before. A box that erects in one movement saves hours over one needing three folds and a tuck, and that difference is worth more than a few pence on the unit price.',
        ],
      },
      {
        h2: 'Food contact where sweets are loose',
        body: [
          'Where confectionery sits directly against the board the grade has to be compliant. Wrapped sweets change that, so it is worth saying which applies at quoting.',
        ],
      },
      {
        h2: 'No second run',
        body: [
          'Favors are made for one event. Overage produced inside the original run costs a fraction of a short reprint, and running out on the day cannot be fixed.',
        ],
      },
    ],
    faqs: [
      { question: 'How quickly do these assemble?', answer: '<p>It depends entirely on the structure. A box erecting in one movement saves hours over one needing three folds, which matters when someone is filling two hundred by hand the night before.</p>' },
      { question: 'Are these food-safe?', answer: '<p>Where sweets sit directly against the board, yes, with a compliant grade. Wrapped confectionery changes the requirement, so tell us which applies.</p>' },
      { question: 'Should I order spares?', answer: '<p>Yes. Favors are made for one event with no second run, and overage inside the original run costs a fraction of a reprint.</p>' },
      { question: 'Can I have names or dates printed?', answer: '<p>Yes. Short runs suit digital print with no plate cost, which makes personalisation affordable at favor quantities.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your fill. Send the sweets and how full you want the box to look, since a half-empty favor reads as mean.</p>' },
      { question: 'Can I have a window?', answer: '<p>Yes, and it suits confectionery. A plain die-cut aperture keeps the box fully recyclable.</p>' },
      { question: 'Are ribbons available?', answer: '<p>Yes, though hand-finished, which adds labor. At favor quantities that is usually acceptable.</p>' },
      { question: 'Do these ship flat?', answer: '<p>Yes, which keeps them affordable. Assembly is on your side, so structure choice matters.</p>' },
      { question: 'What board weight is used?', answer: '<p>Light. There is no load, so the specification follows print and how cleanly the box folds.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Where contact is not direct, yes. Direct contact with sweets needs a compliant grade.</p>' },
    ],
  },

  'kraft-event-favor-boxes': {
    intro:
      'An event favor box holds a small keepsake or gift given to guests. It is produced once, in quantity, for a fixed date.',
    sections: [
      {
        h2: 'The deadline is the constraint',
        body: [
          'Unlike retail packaging there is no flexibility on the date. Working backwards from the event through delivery, production and proofing is the only reliable way to plan it, and proofing is where most time is lost.',
        ],
      },
      {
        h2: 'Personalisation at short-run quantities',
        body: [
          'A hundred or two hundred boxes suits digital print with no plate cost, which makes names, dates and table numbers genuinely affordable rather than a premium.',
        ],
      },
      {
        h2: 'Assembled by the customer',
        body: [
          'These are almost always assembled by the person hosting the event, not by a packing line. A structure that folds intuitively is worth more than one that is clever, because instructions do not get read at eleven at night.',
        ],
      },
    ],
    link: {
      lead: 'For confectionery favors specifically, ',
      href: '/product/kraft-candy-favor-boxes/',
      anchor: 'candy favor boxes cover food contact',
      tail: '.',
    },
    faqs: [
      { question: 'How far ahead should I order?', answer: '<p>Work backwards from the event through delivery, production and proofing. Proofing is where most time is lost, and there is no flexibility on an event date.</p>' },
      { question: 'Can I have names or dates printed?', answer: '<p>Yes. At favor quantities digital print has no plate cost, so personalisation is genuinely affordable rather than a premium.</p>' },
      { question: 'How easy are these to assemble?', answer: '<p>That is worth deciding deliberately. These are assembled by the host rather than a packing line, and a structure that folds intuitively beats a clever one.</p>' },
      { question: 'Should I order spares?', answer: '<p>Yes, always. There is no second run, and running out on the day cannot be fixed.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your favor. Send the item and how full you want the box to look.</p>' },
      { question: 'Can I have a window?', answer: '<p>Yes, and it works where the favor itself is attractive. A plain aperture keeps the box recyclable.</p>' },
      { question: 'Are ribbons or tags available?', answer: '<p>Yes, both, though hand-finished elements add labor per unit.</p>' },
      { question: 'Do these ship flat?', answer: '<p>Yes, which keeps freight and cost down at favor quantities.</p>' },
      { question: 'What is the minimum quantity?', answer: '<p>The standard minimum applies, which suits most events. Digital print is almost always the right route at these numbers.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, and uncoated kraft suits the craft and wedding positioning these are usually bought for.</p>' },
    ],
  },

  'kraft-influencer-boxes': {
    intro:
      'An influencer box is opened on camera by the recipient. The first ten seconds of that video is someone getting into the box, which makes the opening the product.',
    sections: [
      {
        h2: 'Nobody should fight the tape',
        body: [
          'A recipient struggling with parcel tape on camera is the most common failure in this category, and it happens in the part of the video that gets watched. A magnetic closure or a ribbon pull opens in one movement.',
        ],
      },
      {
        h2: 'Ship it inside a plain outer',
        body: [
          'A courier label, handling scuffs and a delivery barcode on the box that is about to be filmed undoes the reason for buying it. The presentation box goes inside a plain carton, and that outer takes the abuse.',
        ],
      },
      {
        h2: 'The inside of the lid is on screen longest',
        body: [
          'Once the box is open, the lid interior faces the camera for most of the video. It is the single best place to spend on print, and it is the surface most often left blank.',
        ],
      },
    ],
    link: {
      lead: 'For press and editorial sends carrying printed material, ',
      href: '/product/kraft-pr-packaging-boxes/',
      anchor: 'PR boxes cover document layouts',
      tail: '.',
    },
    faqs: [
      { question: 'What is the most common mistake on an influencer box?', answer: '<p>Parcel tape. A recipient struggling with it on camera happens in the part of the video that gets watched, and a magnetic closure or ribbon pull opens in one movement instead.</p>' },
      { question: 'Should the courier label go on the presentation box?', answer: '<p>No. Ship it inside a plain outer carton so the label, scuffs and barcode land somewhere other than the box being filmed.</p>' },
      { question: 'Where should I spend on print?', answer: '<p>The inside of the lid. Once open it faces the camera for most of the video, and it is the surface most often left blank.</p>' },
      { question: 'What closure works best?', answer: '<p>Magnetic, or a ribbon pull. Both open cleanly in one movement, which is what the format is bought for.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Generous rather than tight — a reveal needs room and a tightly packed box films badly. Send the contents and we allow for that.</p>' },
      { question: 'Do I need an insert?', answer: '<p>Yes. Contents that have shifted are visible the instant the box opens, and on camera that is unrecoverable.</p>' },
      { question: 'Can these be produced in small runs?', answer: '<p>Yes, and seeding waves are usually small. Digital print with no plate cost suits a hundred or two hundred boxes.</p>' },
      { question: 'What finishes suit them?', answer: '<p>Soft-touch shows well on camera and resists the fingerprints of being handled during filming. Foil catches light, which reads well on video.</p>' },
      { question: 'Should the box be reusable?', answer: '<p>If it looks worth keeping it stays in shot in later videos, which is worth something. Rigid construction is what achieves that.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes for core and wrap, and a recycled specification is often part of what the send is communicating.</p>' },
    ],
  },

  'kraft-pr-packaging-boxes': {
    intro:
      'A press box goes to an editor or journalist alongside printed material, and the paperwork is what sets its size.',
    sections: [
      {
        h2: 'The release decides the footprint',
        body: [
          'A press release or fact sheet is usually US Letter, and folding it to fit a box is exactly the impression a press kit is meant to avoid. The document sets the footprint, not the product.',
        ],
      },
      {
        h2: 'Documents flat and on top',
        body: [
          'A slot in the lid, separate from the product well, keeps the paperwork flat and means the story is the first thing seen rather than something found underneath the product.',
        ],
      },
      {
        h2: 'Restraint reads better to press',
        body: [
          'A press kit that shouts reads as advertising, and advertising is what an editor is filtering out. A restrained exterior with a well-organized interior lands better than a loud one.',
        ],
      },
    ],
    link: {
      lead: 'For sends that are filmed rather than read, ',
      href: '/product/kraft-influencer-boxes/',
      anchor: 'influencer boxes prioritize the opening',
      tail: '.',
    },
    faqs: [
      { question: 'How big does a press box need to be?', answer: '<p>Large enough to take a Letter sheet unfolded, which usually means the paperwork sets the footprint rather than the product. A folded release in a premium box is the most common thing we are asked to fix.</p>' },
      { question: 'Where should the documents sit?', answer: '<p>In a slot in the lid, separate from the product well, so they stay flat and the story is seen first rather than found underneath.</p>' },
      { question: 'Should the box be eye-catching?', answer: '<p>Restrained works better. A press kit that shouts reads as advertising, which is what an editor is filtering out.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your documents and product together. Send both, since the document usually governs.</p>' },
      { question: 'Do I need an insert?', answer: '<p>Yes, for the product. A press box arriving with contents loose reads as careless, which colors how the story is received.</p>' },
      { question: 'Can these be produced in small runs?', answer: '<p>Yes. Press lists are usually short, which suits digital print with no plate cost.</p>' },
      { question: 'Should these ship inside an outer?', answer: '<p>Yes, for the same reason as influencer boxes. A courier label across a press kit undermines it.</p>' },
      { question: 'What finishes suit them?', answer: '<p>Matt or uncoated with a single deboss or foil. Gloss reads as promotional in this context.</p>' },
      { question: 'Can I include digital media?', answer: '<p>Yes, with a fitted position. Anything loose alongside paperwork slides and creases it.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, and for press purposes it is often worth mentioning in the release itself.</p>' },
    ],
  },

  'kraft-marketing-kit-boxes': {
    intro:
      'A marketing kit box carries mixed collateral — samples, literature, small products — to a client or a prospect.',
    sections: [
      {
        h2: 'Mixed contents need fixed positions',
        body: [
          'Samples, brochures and small products all move differently. Without a compartment each, the kit arrives with everything settled at one end and the impression is of something thrown together rather than prepared.',
        ],
      },
      {
        h2: 'Contents change more often than the box',
        body: [
          'Marketing collateral is revised constantly while the box stays the same. Designing one outer with an interchangeable fitment means a content change does not obsolete the entire stock of printed boxes.',
        ],
      },
      {
        h2: 'Opened once, in front of people',
        body: [
          'These are opened in a meeting or on a desk, once. That argues for spending on the insert and the opening rather than on a structure built to be kept.',
        ],
      },
    ],
    link: {
      lead: 'For editorial and press sends rather than sales collateral, ',
      href: '/product/kraft-pr-packaging-boxes/',
      anchor: 'PR boxes are laid out around documents',
      tail: '.',
    },
    faqs: [
      { question: 'Why does my kit arrive disarranged?', answer: '<p>Mixed contents move differently and settle at one end without a compartment each. Fixed positions are what make a kit look prepared rather than thrown together.</p>' },
      { question: 'What if the contents change?', answer: '<p>Design one outer with an interchangeable fitment. Marketing collateral is revised constantly, and that way a content change does not obsolete your printed box stock.</p>' },
      { question: 'Should I spend on the box or the insert?', answer: '<p>The insert. These are opened once in a meeting, and the insert is what is seen when the lid comes off.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your collateral. Send the largest flat item, since literature usually sets the footprint.</p>' },
      { question: 'Can these be produced in small runs?', answer: '<p>Yes. Sales kits are usually low quantity, which suits digital print without plate costs.</p>' },
      { question: 'Rigid or folding?', answer: '<p>Rigid where the meeting matters and the budget allows; folding with a good fitment where it does not. The fitment matters more than the construction.</p>' },
      { question: 'Can we print inside the lid?', answer: '<p>Yes, and it is worth it. The lid interior is in view for the whole time the kit is open on a desk.</p>' },
      { question: 'Can the box hold samples of different sizes?', answer: '<p>Yes, with recesses cut per item and shallow ones packed up so every top sits level.</p>' },
      { question: 'Should these ship inside an outer?', answer: '<p>Yes if posted. A presentation box arriving scuffed with a label across it works against the purpose.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes for both outer and fitment, including molded pulp where shapes are irregular.</p>' },
    ],
  },

  'kraft-promotional-boxes': {
    intro:
      'A promotional box is produced for a campaign in a run far shorter than a retail order, and the run length is what governs the economics.',
    sections: [
      {
        h2: 'Short runs change the print route',
        body: [
          'Below roughly five hundred units, plate and make-ready costs land entirely on those units and the price per box climbs sharply. Digital print has no plate cost, and at campaign quantities it is usually a fraction of the litho equivalent.',
          'Bringing a retail specification to a two-hundred-unit campaign is the most common way this goes wrong.',
        ],
      },
      {
        h2: 'Variable data is nearly free on digital',
        body: [
          'Names, regions, event dates or individual codes cost almost nothing on a digital press. On a campaign that can be the difference between a generic box and one addressed to the recipient.',
        ],
      },
      {
        h2: 'Fixed deadlines',
        body: [
          'Campaigns have dates. Working backwards from the send date through delivery, production and proofing is the only reliable plan, and proofing is where the time goes.',
        ],
      },
    ],
    link: {
      lead: 'For seeding sends that are filmed by the recipient, ',
      href: '/product/kraft-influencer-boxes/',
      anchor: 'influencer boxes are built around the opening',
      tail: '.',
    },
    faqs: [
      { question: 'Why is my short run so expensive per unit?', answer: '<p>Plate and make-ready costs land entirely on a short run. Below roughly five hundred units digital print, which has no plate cost, is usually a fraction of the litho equivalent.</p>' },
      { question: 'Can I personalize individual boxes?', answer: '<p>Yes, and variable data costs almost nothing on a digital press. Names, regions, dates or codes are all straightforward at campaign quantities.</p>' },
      { question: 'What is the minimum quantity?', answer: '<p>The standard minimum applies, which suits most campaigns. We will show the digital and litho prices side by side so the crossover is visible.</p>' },
      { question: 'How far ahead should I order?', answer: '<p>Work backwards from the send date through delivery, production and proofing. Proofing is where campaigns most often lose time.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your campaign contents. Send what goes in rather than a box size.</p>' },
      { question: 'Do these need an insert?', answer: '<p>If the contents can move, yes. A promotional box arriving with items loose undermines the campaign it was made for.</p>' },
      { question: 'What finishes suit a campaign box?', answer: '<p>One restrained finish. Multiple passes rarely justify themselves on a box produced once for a short window.</p>' },
      { question: 'Can I reorder later at a better price?', answer: '<p>Yes, and a repeat run reuses the approved artwork and any tooling, so it is faster and cheaper than the first.</p>' },
      { question: 'Should these ship inside an outer?', answer: '<p>If they are posted and the box is part of the message, yes.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes across the range.</p>' },
    ],
  },

  'kraft-giveaway-packaging-boxes': {
    intro:
      'A giveaway box carries something handed out free at an event, a store or a conference. Cost per unit governs every decision.',
    sections: [
      {
        h2: 'The box cannot cost more than the gift',
        body: [
          'Giveaways are produced in quantity and given away, so the packaging budget is genuinely tight. One or two colors on plain kraft with a simple die-cut does the job, and each additional press pass is visible in the total.',
        ],
      },
      {
        h2: 'Handed over, not shipped',
        body: [
          'Most giveaways are put directly into someone\'s hand, so transit protection is largely irrelevant. That removes a whole set of requirements and allows a lighter, cheaper specification than the same box would need in a courier network.',
        ],
      },
      {
        h2: 'Recipients decide in seconds',
        body: [
          'A giveaway that looks cheap gets left on a table. The visual impression comes almost entirely from the die-cut quality and the board choice rather than from print coverage, which is fortunate given the budget.',
        ],
      },
    ],
    link: {
      lead: 'For campaign sends with a larger budget per unit, ',
      href: '/product/kraft-promotional-boxes/',
      anchor: 'promotional boxes cover campaign work',
      tail: '.',
    },
    faqs: [
      { question: 'How do I keep the cost down?', answer: '<p>One or two colors on plain kraft with a simple die-cut. Each additional press pass is visible in the total when the box is given away in quantity.</p>' },
      { question: 'Do these need transit protection?', answer: '<p>Usually not, since most giveaways are handed over directly. That removes a whole set of requirements and allows a lighter specification.</p>' },
      { question: 'What makes a cheap box still look good?', answer: '<p>Die-cut quality and board choice more than print coverage. A clean fold on a good stock reads better than four colors on a poor one.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your giveaway item. Send the item rather than a target size.</p>' },
      { question: 'Can these be personalized for an event?', answer: '<p>Yes, on digital print at short-run quantities, which suits conference and event work.</p>' },
      { question: 'Do they ship flat?', answer: '<p>Yes, and assembly at the venue is common. A structure that folds in one movement matters when volunteers are assembling them.</p>' },
      { question: 'Can I have a window?', answer: '<p>Yes, and it helps where the giveaway itself is attractive. A plain aperture keeps the cost and the recyclability.</p>' },
      { question: 'What board weight is used?', answer: '<p>Light. There is no load and no transit, so the board follows appearance and folding rather than strength.</p>' },
      { question: 'What is the minimum quantity?', answer: '<p>The standard minimum applies, and unit cost falls sharply above it, which suits the volumes giveaways usually run.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, and for a giveaway a visibly recycled stock often communicates something in itself.</p>' },
    ],
  },

  'kraft-subscription-boxes': {
    intro:
      'A subscription box is opened by the same person twelve times a year. That repetition changes every decision about it.',
    sections: [
      {
        h2: 'The same person opens it repeatedly',
        body: [
          'A retail box is opened once by a stranger. A subscription box is opened monthly by someone who already knows what is coming, which means the opening has to stay interesting and the box has to stay undamaged in a letterbox or on a doorstep.',
          'It also means a flaw that would be forgivable once becomes an irritation by the third month.',
        ],
      },
      {
        h2: 'Dimensional weight, every single month',
        body: [
          'Because the box ships every month to every subscriber, a size band saved is a saving multiplied by the subscriber count twelve times a year. Right-sizing is worth more here than in almost any other format.',
        ],
      },
      {
        h2: 'Contents change, the box should not',
        body: [
          'The contents differ every month but reprinting the box each time is expensive. A fixed printed outer with a changing insert card is the standard answer and keeps the brand consistent while the contents vary.',
        ],
      },
    ],
    link: {
      lead: 'For the roll-end construction most subscription boxes use, ',
      href: '/product/kraft-mailer-boxes/',
      anchor: 'mailer boxes cover the courier-ready formats',
      tail: '.',
    },
    faqs: [
      { question: 'What makes a subscription box different?', answer: '<p>The same person opens it repeatedly. A flaw forgivable once becomes an irritation by the third month, and the opening has to stay interesting rather than surprise once.</p>' },
      { question: 'How much does box size matter?', answer: '<p>More than almost anywhere else. The box ships monthly to every subscriber, so a size band saved is multiplied by the subscriber count twelve times a year.</p>' },
      { question: 'Should I reprint the box each month?', answer: '<p>Rarely worth it. A fixed printed outer with a changing insert card keeps the brand consistent while the contents vary, at a fraction of the cost.</p>' },
      { question: 'Does it need to fit a letterbox?', answer: '<p>If you want to avoid failed deliveries, it is worth designing to it. Tell us the maximum depth your postal service allows.</p>' },
      { question: 'Should the inside be printed?', answer: '<p>Yes. The subscriber sees the interior every month, and it is the surface that carries the brand experience over time.</p>' },
      { question: 'What board is used?', answer: '<p>E flute roll-end for most subscription work — enough protection for a courier, thin enough to print well and to keep dimensional weight down.</p>' },
      { question: 'Can it include a return mechanism?', answer: '<p>Yes, with a double adhesive strip. Tell us at quoting since the second strip is positioned at dieline stage.</p>' },
      { question: 'How do I keep contents from moving?', answer: '<p>An insert sized to the month\'s contents, or a right-sized box. Contents rattling in an oversized box is the most common subscription complaint.</p>' },
      { question: 'Can I change the box seasonally?', answer: '<p>Yes, and running two or three variants a year is a common middle ground between monthly reprints and never changing.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, and subscription brands frequently make that part of their proposition, so a stated recycled percentage is worth having.</p>' },
    ],
  },
}
