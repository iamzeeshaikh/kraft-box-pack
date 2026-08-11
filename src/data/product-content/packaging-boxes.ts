import type { ProductContentMap } from './types'

/**
 * The general packaging range.
 *
 * This category carries most of the site's Search Console impressions —
 * kraft-shoe-boxes alone has 11,980, kraft-drawer-boxes 5,893,
 * kraft-shipping-boxes 4,225. Several of these pages rank respectably and
 * convert almost nobody, so the content has to answer the question a buyer
 * actually arrived with rather than describe the box.
 */
export const packagingBoxesContent: ProductContentMap = {
  'kraft-shoe-boxes': {
    intro:
      'A shoe box holds a pair, stacks in a stockroom and is opened repeatedly by customers trying shoes on. Those three duties pull in different directions.',
    sections: [
      {
        h2: 'Size to the largest shoe, not the average',
        body: [
          'A box that fits a size 8 will not close over a size 12, and running two box sizes across a range costs less than the returns from crushed boxes at the top of the size run. Most brands settle on two or three footprints rather than one.',
          'Measure the shoe in its packing position, with tissue if you use it, since tissue adds more depth than expected once a pair is wrapped.',
        ],
      },
      {
        h2: 'Lids that survive the shop floor',
        body: [
          'In a store a shoe box is opened and closed dozens of times before it sells. A lift-off lid handles that; a tuck flap creased for one opening splits within days and the box is taped for the rest of its life.',
        ],
      },
      {
        h2: 'Stacking in the stockroom',
        body: [
          'Shoe boxes are stored stacked high and pulled from the middle. The board has to carry the weight above without the bottom box crushing, so the grade follows the stack height rather than the weight of one pair.',
        ],
        table: {
          caption: 'Construction by use',
          head: ['Use', 'Build', 'Note'],
          rows: [
            ['Retail with fitting', 'Lift-off lid', 'Survives repeated opening'],
            ['Direct to customer', 'Roll end or mailer', 'Withstands courier handling'],
            ['Stockroom storage', 'Graded for stack height', 'Bottom box carries the column'],
            ['Premium or gifting', 'Rigid with ribbon pull', 'Box is kept afterwards'],
          ],
        },
      },
    ],
    link: {
      lead: 'Where shoes ship direct to customers rather than through a store, ',
      href: '/product/kraft-mailer-boxes/',
      anchor: 'mailer boxes handle courier journeys better',
      tail: '.',
    },
    faqs: [
      { question: 'What size should a shoe box be?', answer: '<p>Sized to the largest shoe in the range, or split across two or three footprints. A box that fits a size 8 will not close over a size 12, and two sizes cost less than returns from crushed boxes.</p>' },
      { question: 'Should I measure with tissue in?', answer: '<p>Yes. Tissue adds more depth than expected once a pair is wrapped, and it is a common reason a box that should fit does not close flat.</p>' },
      { question: 'Why do lids split in store?', answer: '<p>A tuck flap creased for one opening is being opened dozens of times before the shoe sells. A lift-off lid has nothing to fold and survives that duty.</p>' },
      { question: 'How do I stop boxes crushing in the stockroom?', answer: '<p>Grade the board against the stack height rather than the weight of one pair. The bottom box carries the whole column for as long as it stands.</p>' },
      { question: 'Can these ship direct to customers?', answer: '<p>A retail shoe box usually cannot survive a courier alone. Either ship it inside an outer or specify a roll-end construction built for handling.</p>' },
      { question: 'Do you produce boxes with windows?', answer: '<p>Yes, though on a large lid an aperture costs real stiffness, so the board steps up. It is more common on children\'s footwear than adult ranges.</p>' },
      { question: 'What board is used?', answer: '<p>E flute corrugated for most retail work, stepping to B where stacking is high. Folding carton only for very light footwear.</p>' },
      { question: 'Can one design cover several sizes?', answer: '<p>Yes. Sharing board, print and finish across two or three footprints keeps the shelf and stockroom look consistent.</p>' },
      { question: 'Are handles or finger holes useful?', answer: '<p>On larger boxes, yes. The board around a die-cut hole needs reinforcing on a filled box, since that is where the load concentrates.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes across the range, with a caliper step-up where boxes are stacked high or the lid spans a wide footprint.</p>' },
    ],
  },

  'kraft-drawer-boxes': {
    intro:
      'A drawer box is a sleeve with a tray that slides out. The slide is the whole experience, and it is decided by a tolerance measured in fractions of a millimetre.',
    sections: [
      {
        h2: 'The slide is the product',
        body: [
          'Too tight and the tray has to be forced, which tears the sleeve edge. Too loose and it falls out when the box is picked up, usually spilling the contents. The working band between those is narrow.',
          'It also cannot be judged from a drawing, which makes a physical sample worth more on this format than on almost any other.',
        ],
      },
      {
        h2: 'A pull or a thumb notch',
        body: [
          'Without something to grip, the tray has to be shaken out. A ribbon pull, a die-cut thumb notch or a tab all solve it. A ribbon reads as most considered but is hand-finished and adds labour per unit at volume.',
        ],
      },
      {
        h2: 'Rigid or folding',
        body: [
          'Rigid holds the tolerance far better over repeated opening and feels substantially heavier. A folding version ships flat and costs a fraction, at the cost of a slide that loosens with use.',
        ],
      },
    ],
    link: {
      lead: 'For the gifting version of this construction, ',
      href: '/product/kraft-drawer-gift-boxes/',
      anchor: 'drawer gift boxes cover presentation builds',
      tail: '.',
    },
    faqs: [
      { question: 'Why does the tray stick or fall out?', answer: '<p>The tolerance between too tight and too loose is narrow, and it cannot be judged from a drawing. A physical sample is worth more on this format than almost any other.</p>' },
      { question: 'How does the customer open it?', answer: '<p>With a ribbon pull, a die-cut thumb notch or a tab. Without one the tray has to be shaken out, which is the most common complaint on this format.</p>' },
      { question: 'Should it be rigid or folding?', answer: '<p>Rigid holds the tolerance far better over repeated opening and feels heavier. Folding ships flat and costs a fraction, but the slide loosens with use.</p>' },
      { question: 'Is a ribbon pull practical at volume?', answer: '<p>It is hand-finished, so it adds labour per unit. For a few hundred it is fine; for tens of thousands a die-cut notch is more sensible.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your contents. Send what goes in the tray, including any insert, since the insert sets the internal depth.</p>' },
      { question: 'Can the sleeve and tray be different colours?', answer: '<p>Yes, and it is a straightforward way to add contrast, since they are separate components that can run on different stocks.</p>' },
      { question: 'Do drawer boxes ship flat?', answer: '<p>Folding versions do. Rigid drawer boxes ship assembled, which takes noticeably more freight volume.</p>' },
      { question: 'Can I put a window in the sleeve?', answer: '<p>Yes, though it weakens the sleeve that has to hold the tray square. The board usually steps up to compensate.</p>' },
      { question: 'How do I stop contents moving in the tray?', answer: '<p>A fitted insert. Contents that shift make a noise as the tray slides, which undercuts the impression the format is bought for.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes for both components. On rigid constructions the core and the wrap can both be recycled stock.</p>' },
    ],
  },

  'kraft-shipping-boxes': {
    intro:
      'A shipping box is specified against the journey rather than the product. How far it goes, how it is handled and what sits on top of it decide everything.',
    sections: [
      {
        h2: 'Grade against the stack, not the contents',
        body: [
          'The figure that decides a shipping box is usually the weight above it in a stack or on a pallet, not the weight inside it. A box rated only for its own contents crushes at the corners under a column, and the failure shows at the bottom of the pallet.',
          'Send the stack height and the weight above the bottom unit and the board follows from those two numbers.',
        ],
        table: {
          caption: 'Wall construction by condition',
          head: ['Condition', 'Construction', 'Note'],
          rows: [
            ['Single parcel, courier', 'Single wall C', 'Adequate below roughly 15 lb'],
            ['Stacked two high', 'Single wall C', 'Edge crush becomes the limit'],
            ['Stacked three or more', 'Double wall BC', 'Corner crush is the failure mode'],
            ['Heavy or dense contents', 'Double wall, full-overlap base', 'Load runs straight down'],
          ],
        },
      },
      {
        h2: 'Box size costs more than board grade',
        body: [
          'Couriers price on dimensional weight, so a box one size too large is charged as heavier on every parcel. Most operations run at least one band larger than they need with void fill making up the difference, and dropping a band saves on every single shipment.',
        ],
      },
      {
        h2: 'Damage inside an intact box',
        body: [
          'If boxes arrive crushed, the board is under-specified. If they arrive intact with damaged contents, the product is moving inside and a heavier box changes nothing — that is an insert problem, and usually a cheaper one to solve.',
        ],
      },
    ],
    link: {
      lead: 'For e-commerce dispatch where the customer opens the box themselves, ',
      href: '/product/kraft-mailer-boxes/',
      anchor: 'mailer boxes suit the unboxing better',
      tail: '.',
    },
    faqs: [
      { question: 'How do I choose the board grade?', answer: '<p>From the stack height and the weight above the bottom unit, not from the weight of the contents alone. Send those two figures and we specify against them.</p>' },
      { question: 'What is edge crush and why does it matter?', answer: '<p>It measures how much load a board edge carries before failing, which is what actually holds a stack up. It is a better guide for palletised work than board thickness.</p>' },
      { question: 'How do I reduce shipping costs?', answer: '<p>Measure the product rather than the box you use now. Couriers charge on dimensional weight, so dropping one size band saves on every parcel — which compounds far faster than a board saving.</p>' },
      { question: 'My boxes arrive fine but the contents are damaged. Why?', answer: '<p>The product is moving inside. A heavier box changes nothing in that case; a fitted insert does, and it usually costs less.</p>' },
      { question: 'What is the difference between B, C and BC flute?', answer: '<p>Flute height and wall count. B is thinner and prints better, C carries more stacking load, BC is double wall for heavy or highly stacked work.</p>' },
      { question: 'Do these arrive flat?', answer: '<p>Yes, flat and glued along one seam so they erect on your line. That keeps freight proportionate to the board rather than the assembled volume.</p>' },
      { question: 'Can you cut a size that is not standard?', answer: '<p>Every run is cut to your dimensions. Send the product measurements rather than a box size and we build the dieline around them.</p>' },
      { question: 'Should shipping boxes be printed?', answer: '<p>For business deliveries usually not — it adds cost with no selling function. For direct-to-consumer parcels where the customer opens it, print can be worth it.</p>' },
      { question: 'Are moisture-resistant options available?', answer: '<p>Yes, and worth considering for long storage or humid warehouses. Board loses stacking strength as it absorbs moisture.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes. Recycled fibre is slightly less stiff at the same caliper, so we step up a grade where stacking matters.</p>' },
    ],
  },

  'kraft-mailer-boxes': {
    intro:
      'A roll-end mailer is the e-commerce box — it folds without tape, survives a courier network, and is the first thing a customer sees of the order.',
    sections: [
      {
        h2: 'Cut it to the product, not the other way round',
        body: [
          'Dimensional weight means a mailer one size too large is charged as heavier on every parcel you send. Most operations we quote are running at least one band too big with void fill compensating.',
          'Measuring the product rather than copying the current box is usually the single cheapest change available, and the saving lands on every shipment rather than once.',
        ],
      },
      {
        h2: 'Why roll-end rather than a tuck',
        body: [
          'The roll-end construction wraps the contents and locks without tape, which is both faster to pack and better in transit. It also opens cleanly, which matters when the customer is the one opening it.',
        ],
      },
      {
        h2: 'The inside is seen',
        body: [
          'Unlike a transit carton, a mailer is opened by the person who bought the thing inside. Interior print earns its cost here more than almost anywhere else, particularly where the product does not fill the box.',
        ],
      },
    ],
    link: {
      lead: 'Where the consignment is palletised rather than sent as parcels, ',
      href: '/product/kraft-shipping-boxes/',
      anchor: 'shipping boxes are graded for stacking',
      tail: '.',
    },
    faqs: [
      { question: 'How do I reduce dimensional weight?', answer: '<p>Measure the product rather than the box currently in use. Most operations run at least one size band too large with void fill compensating, and dropping a band saves on every parcel.</p>' },
      { question: 'Why a roll-end rather than a tuck box?', answer: '<p>Roll-end wraps the contents and locks without tape, which is faster to pack and better in transit. It also opens cleanly, which matters when the customer opens it.</p>' },
      { question: 'Should I print the inside?', answer: '<p>On a mailer, more often than not. It is opened by the person who bought the contents, and interior print earns its cost particularly where the product does not fill the box.</p>' },
      { question: 'What board is used?', answer: '<p>E flute for most e-commerce work — thin enough to print well, strong enough for a courier. B flute where the contents are heavier.</p>' },
      { question: 'Do these need tape?', answer: '<p>No, the construction locks itself. A tamper-evident sticker is often added, which also reads as more considered than parcel tape.</p>' },
      { question: 'Can I include a tear strip?', answer: '<p>Yes, and it improves the opening considerably. It also makes the box single-use, so it is worth deciding whether returns go back in the same box.</p>' },
      { question: 'Are these suitable for returns?', answer: '<p>With a double adhesive strip, yes. Tell us at quoting because the second strip is positioned at dieline stage.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your product. Send the item rather than a box size, and tell us if it is compressible, since that changes the depth.</p>' },
      { question: 'How many can I order?', answer: '<p>From the standard minimum upward, with unit cost falling sharply as quantity rises. We will show the breaks so the trade is visible.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, and they suit the category. Plain kraft with one-colour print is both the cheapest and the most common specification here.</p>' },
    ],
  },

  'kraft-corrugated-boxes': {
    intro:
      'Corrugated is a construction rather than a product — a fluted layer between two liners, which is what gives it strength for very little weight.',
    sections: [
      {
        h2: 'Flute size decides what it does',
        body: [
          'E flute is thin and prints well, so it suits retail packs and light shipping. B sits in the middle. C is thicker and carries more stacking load. BC is double wall for heavy or highly stacked work.',
          'Thinner is not weaker in every direction — E flute prints and folds better while C carries more vertically. The choice follows the job rather than a general idea of strength.',
        ],
        table: {
          caption: 'Flute selection',
          head: ['Flute', 'Thickness', 'Best at'],
          rows: [
            ['E', 'Thinnest', 'Print quality, retail packs, light parcels'],
            ['B', 'Medium', 'General purpose, good crush resistance'],
            ['C', 'Thicker', 'Stacking strength, palletised work'],
            ['BC double wall', 'Thickest', 'Heavy contents, high stacks'],
          ],
        },
      },
      {
        h2: 'Flute direction carries the load',
        body: [
          'Corrugated is far stronger along the flute than across it. Running the flute the wrong way for the load wastes most of the board\'s strength, and it is a specification detail rather than something the buyer sees.',
        ],
      },
      {
        h2: 'Printing on corrugated',
        body: [
          'Flexo direct to the board is the sensible route for most work. Litho-lamination gives far better print quality at higher cost, and is worth it only where the box is doing retail selling rather than transit.',
        ],
      },
    ],
    link: {
      lead: 'For folding carton work where the board does not need a flute, ',
      href: '/product/kraft-paper-boxes/',
      anchor: 'kraft paper boxes cover the lighter formats',
      tail: '.',
    },
    faqs: [
      { question: 'Which flute should I choose?', answer: '<p>E for print quality and light parcels, B for general purpose, C for stacking strength, BC double wall for heavy or highly stacked work. Thinner is not weaker in every direction — E prints and folds better while C carries more vertically.</p>' },
      { question: 'Does flute direction matter?', answer: '<p>Considerably. Corrugated is far stronger along the flute than across it, so running it the wrong way for the load wastes most of the board\'s strength.</p>' },
      { question: 'How should corrugated be printed?', answer: '<p>Flexo direct to the board for most work. Litho-lamination gives much better quality at higher cost and is worth it only where the box does retail selling.</p>' },
      { question: 'Is double wall always better?', answer: '<p>No, it is heavier and more expensive and unnecessary below a certain load. Send the stack height and weight and we specify the lightest construction that holds.</p>' },
      { question: 'What is edge crush?', answer: '<p>A measure of how much load a board edge carries before failing, which is what holds a stack up. It is a better guide than board thickness for palletised work.</p>' },
      { question: 'Do corrugated boxes ship flat?', answer: '<p>Yes, flat and glued along one seam, erected on your line. That keeps freight proportionate to the board rather than the assembled volume.</p>' },
      { question: 'Can corrugated be used for retail packs?', answer: '<p>Yes, particularly E flute, which prints well enough for shelf presentation while adding real protection over a folding carton.</p>' },
      { question: 'Are moisture-resistant grades available?', answer: '<p>Yes, and they matter for cold storage or humid environments, where untreated board softens and loses stacking strength.</p>' },
      { question: 'What sizes can you produce?', answer: '<p>Cut to your dimensions. Send the product and the journey rather than a box size and we build outward from both.</p>' },
      { question: 'Is recycled corrugated available?', answer: '<p>Yes, and most corrugated already carries high recycled content. We can state the percentage and supply the mill documentation.</p>' },
    ],
  },

  'kraft-cardboard-boxes': {
    intro:
      '"Cardboard box" covers several quite different constructions, and choosing between them is the first decision rather than a detail.',
    sections: [
      {
        h2: 'What people mean by cardboard',
        body: [
          'The term covers folding carton board, corrugated and rigid greyboard, which behave differently and cost differently. A folding carton suits retail presentation; corrugated suits transit; rigid suits presentation that gets kept.',
          'Describing the job rather than the material is the faster route to the right specification.',
        ],
      },
      {
        h2: 'Cut to your product',
        body: [
          'Everything is cut on a fresh dieline rather than picked from stock sizes, which is what makes measuring the product rather than an existing box worthwhile. A box copied from the current one inherits whatever was wrong with it.',
        ],
      },
      {
        h2: 'Where each construction stops',
        body: [
          'A folding carton stops being adequate once the contents get heavy or the journey gets rough. Corrugated stops being appropriate when the pack has to present rather than protect. Knowing which side of that line you are on decides the quote.',
        ],
      },
    ],
    link: {
      lead: 'For the fluted constructions and how they differ, ',
      href: '/product/kraft-corrugated-boxes/',
      anchor: 'corrugated boxes cover flute selection',
      tail: '.',
    },
    faqs: [
      { question: 'What is the difference between cardboard and corrugated?', answer: '<p>"Cardboard" covers folding carton board, corrugated and rigid greyboard, which behave and cost differently. Corrugated has a fluted layer between two liners, which is where its strength comes from.</p>' },
      { question: 'Which should I choose?', answer: '<p>Describe the job rather than the material. A folding carton suits retail presentation, corrugated suits transit, rigid suits presentation that gets kept.</p>' },
      { question: 'Can I get a custom size?', answer: '<p>Everything is cut on a fresh dieline — there are no stock sizes. Send the product measurements rather than a box size.</p>' },
      { question: 'How thick should the board be?', answer: '<p>It follows the weight and the journey rather than a preference. Send both and we specify the lightest construction that holds.</p>' },
      { question: 'Are these strong enough for shipping?', answer: '<p>Corrugated is; a plain folding carton usually is not on its own. The crossover depends on weight and how many times the pack is handled.</p>' },
      { question: 'Do they arrive flat?', answer: '<p>Folding and corrugated do, glued along one seam. Rigid arrives assembled.</p>' },
      { question: 'Can they be printed?', answer: '<p>Yes, across all three constructions, though the print quality achievable differs. Litho gives the best result, flexo the most economic on corrugated.</p>' },
      { question: 'What quantities do you produce?', answer: '<p>From the standard minimum upward, with unit cost falling sharply as quantity rises.</p>' },
      { question: 'Can you match a box I already use?', answer: '<p>Send the existing box and we quote to match the structure and board rather than proposing an alternative you would have to re-approve.</p>' },
      { question: 'Are recycled options available?', answer: '<p>Yes across all constructions, and most corrugated already carries high recycled content.</p>' },
    ],
  },

  'kraft-paperboard-boxes': {
    intro:
      'Paperboard is the single-layer stock most retail cartons are made from — no flute, no lamination, just board at a chosen caliper.',
    sections: [
      {
        h2: 'Caliper is the specification',
        body: [
          'Paperboard is described by caliper — its thickness — and that single number does most of the work. Too light and the carton feels flimsy and creases badly; too heavy and it will not fold cleanly and the creases crack.',
          'The right caliper follows the panel span and the contents weight together, and it is worth confirming with a sample rather than assuming.',
        ],
      },
      {
        h2: 'Where paperboard stops',
        body: [
          'It suits retail presentation and light to moderate contents. It is not a transit material — a paperboard carton posted alone arrives with crushed corners, which is a material limit rather than a quality issue.',
        ],
      },
      {
        h2: 'Creasing behaviour',
        body: [
          'A carton is only as good as its creases. On heavier calipers the crease has to be cut deeper or the board cracks along the fold, showing a white line on kraft. That is a dieline specification rather than a print one.',
        ],
      },
    ],
    link: {
      lead: 'Where the contents or the journey need a fluted construction, ',
      href: '/product/kraft-corrugated-boxes/',
      anchor: 'corrugated adds strength for very little weight',
      tail: '.',
    },
    faqs: [
      { question: 'What caliper should I choose?', answer: '<p>It follows the panel span and the contents weight together. Too light feels flimsy; too heavy will not fold cleanly and the creases crack. A sample confirms it better than a calculation.</p>' },
      { question: 'Why is there a white line along my folds?', answer: '<p>The board is cracking along the crease, usually because the caliper is heavy for the crease depth. It is a dieline specification issue rather than a print one.</p>' },
      { question: 'Is paperboard strong enough to post?', answer: '<p>Not on its own. It suits retail presentation and light contents; a paperboard carton posted alone arrives with crushed corners.</p>' },
      { question: 'What is the difference from corrugated?', answer: '<p>Paperboard is a single layer at a chosen caliper. Corrugated has a fluted layer between liners, which gives far more strength for very little extra weight.</p>' },
      { question: 'Can paperboard be food-safe?', answer: '<p>With a compliant grade, yes. Tell us whether contact is direct or through a liner, since that changes the stock options.</p>' },
      { question: 'Does it take print well?', answer: '<p>Yes — it is the standard stock for high-quality carton printing. On kraft the substrate still pulls colours down, which is a stock characteristic rather than a print fault.</p>' },
      { question: 'Do these arrive flat?', answer: '<p>Yes, glued along one seam and erected on your line.</p>' },
      { question: 'What weights are available?', answer: '<p>A full range of calipers. We will recommend from the product and the span rather than leaving you to choose blind.</p>' },
      { question: 'Can it be laminated?', answer: '<p>Yes, though a plastic laminate takes the carton out of the paper recycling stream. An aqueous varnish gives protection without that cost.</p>' },
      { question: 'Is recycled paperboard available?', answer: '<p>Yes, slightly less stiff at the same caliper, so we usually step up a grade where panel span matters.</p>' },
    ],
  },

  'kraft-storage-boxes': {
    intro:
      'A storage box holds its contents on a shelf for months rather than moving them once. The load is constant, and that changes what fails.',
    sections: [
      {
        h2: 'Constant load rather than transit shock',
        body: [
          'Transit packaging survives short violent events. Storage packaging survives steady weight for a long time, and the failure mode is slow deformation under a load the board could carry indefinitely in the short term.',
          'Grade against the stack for its full storage life rather than against the day it is filled.',
        ],
      },
      {
        h2: 'Lids that survive being opened',
        body: [
          'Storage boxes get opened, and a lid designed for a single closing splits after a dozen accesses. Once it is taped it stops stacking properly. A telescoping lid slides rather than folds and handles repeated access.',
        ],
      },
      {
        h2: 'Labelling for retrieval',
        body: [
          'The point of a storage box is finding what is in it later. A designated label area on the short end — the face visible when boxes are shelved — is worth more than print anywhere else on the box.',
        ],
      },
    ],
    link: {
      lead: 'For heavier or industrial storage duty, ',
      href: '/product/kraft-heavy-duty-storage-boxes/',
      anchor: 'heavy-duty storage boxes are graded higher',
      tail: '.',
    },
    faqs: [
      { question: 'How is a storage box different from a shipping box?', answer: '<p>The load is constant rather than momentary, so the failure mode is slow deformation rather than sudden crushing. Grade against the stack for its full storage life.</p>' },
      { question: 'Why do lids split?', answer: '<p>A lid designed for a single closing is being opened repeatedly. A telescoping lid slides rather than folds and handles that duty.</p>' },
      { question: 'Where should the label go?', answer: '<p>On the short end, which is the face visible when boxes are shelved. That is worth more than print anywhere else on the box.</p>' },
      { question: 'Will they hold up in a damp store?', answer: '<p>Untreated board softens as it absorbs moisture and loses stacking strength. A moisture-resistant treatment addresses it and has to be specified at the start.</p>' },
      { question: 'Can I get handles?', answer: '<p>Yes, die-cut. The board around the hole needs reinforcing on a filled box, since that is where the load concentrates.</p>' },
      { question: 'Do they ship flat?', answer: '<p>Yes, and erect on site, which keeps freight proportionate to the board rather than the assembled volume.</p>' },
      { question: 'Can sizes be made to stack together?', answer: '<p>Yes, and designing a range on a common footprint means mixed sizes stack squarely rather than in an unstable tower.</p>' },
      { question: 'What board is used?', answer: '<p>Single wall C for light duty, double wall where boxes are stacked more than two high or the contents are heavy.</p>' },
      { question: 'Are these suitable for archive storage?', answer: '<p>Yes, with a moisture-resistant grade and a lid that survives repeated access. Archive boxes are opened more often than people expect.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, with a grade step-up. Recycled fibre creeps a little more under constant load, so we allow for it.</p>' },
    ],
  },

  'kraft-gable-boxes': {
    intro:
      'A gable box has an integral handle formed from the folded top. It carries, it presents, and it holds less than its footprint suggests.',
    sections: [
      {
        h2: 'The handle is part of the board',
        body: [
          'Because the handle is formed rather than attached, the load runs through the folded top panel. That panel is where a gable box fails — the fold tears at the handle aperture if the board is too light for the filled weight.',
          'Send the filled weight rather than the box size. A gable box carrying a meal weighs far more than one carrying a gift.',
        ],
      },
      {
        h2: 'The gable takes internal height',
        body: [
          'The folded top occupies real internal space, so usable height is less than the external dimension. Products sized to the outside measurement will not fit under the closed gable.',
        ],
      },
      {
        h2: 'Food service and gifting',
        body: [
          'The format spans both. For food it needs grease resistance and a closure that stays shut when carried; for gifting it needs to look considered and often carries a ribbon through the handle aperture.',
        ],
      },
    ],
    link: {
      lead: 'For carried food where a handle is not needed, ',
      href: '/product/kraft-take-out-boxes/',
      anchor: 'take out boxes cover the standard formats',
      tail: '.',
    },
    faqs: [
      { question: 'Why does the handle tear?', answer: '<p>The handle is formed from the board, so the load runs through the folded top panel. If the board is too light for the filled weight the fold tears at the aperture. Send the filled weight rather than the box size.</p>' },
      { question: 'Why does my product not fit?', answer: '<p>The folded gable takes real internal height, so usable space is less than the external dimension. Products sized to the outside measurement will not fit under the closed top.</p>' },
      { question: 'Are these suitable for food?', answer: '<p>Yes, with a grease-resistant board and a closure that stays shut when carried. Both have to be specified rather than assumed.</p>' },
      { question: 'Can a ribbon go through the handle?', answer: '<p>Yes, and it is common on gifting versions. It also helps hold the gable closed, which a plain fold does not always do.</p>' },
      { question: 'How much weight can a gable box carry?', answer: '<p>It follows the board and the aperture reinforcement rather than the size. Tell us the heaviest fill and we specify to it.</p>' },
      { question: 'Do they ship flat?', answer: '<p>Yes, and erect quickly, which is why they suit food service where staff assemble them during service.</p>' },
      { question: 'Can I have a window?', answer: '<p>Yes, on the side panels. A window in the gable itself weakens the panel carrying the load.</p>' },
      { question: 'What sizes are available?', answer: '<p>Cut to your contents, remembering the gable takes internal height. Send the tallest item that goes in.</p>' },
      { question: 'Are these leak-resistant?', answer: '<p>Not inherently. For wet food a coated board and a liner are both worth specifying, since the folded base has seams.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, with a caliper step-up around the handle where the load concentrates.</p>' },
    ],
  },

  'kraft-dispenser-boxes': {
    intro:
      'A dispenser box holds a quantity of small items and lets one be taken at a time through a tear-away front.',
    sections: [
      {
        h2: 'The aperture size decides everything',
        body: [
          'Too small and items snag or tear on the way out. Too large and the contents spill when the box is knocked or tipped. The right size depends on the item shape as much as its dimensions, and it is worth testing on a sample.',
        ],
      },
      {
        h2: 'The box empties from the front',
        body: [
          'As stock is taken, the remaining contents slide forward and the box has to keep presenting them. A base that slopes, or a follower, keeps the last items reachable rather than leaving them at the back.',
        ],
      },
      {
        h2: 'Counter life',
        body: [
          'These sit on a counter and are handled all day. In food service or workshop use that means damp or dirty hands, and an untreated board softens around the aperture first, which is exactly where the box needs to hold its shape.',
        ],
      },
    ],
    link: {
      lead: 'For rolls of paper rather than discrete items, ',
      href: '/product/kraft-paper-dispenser-boxes/',
      anchor: 'paper dispensers are sized to the roll',
      tail: '.',
    },
    faqs: [
      { question: 'How big should the dispensing aperture be?', answer: '<p>It depends on the item shape as much as its dimensions. Too small and items snag; too large and contents spill when the box is knocked. It is worth testing on a sample with your actual product.</p>' },
      { question: 'How do I stop the last items being unreachable?', answer: '<p>A sloped base or a follower keeps remaining stock sliding forward. Without one the last items sit at the back where nobody can get them.</p>' },
      { question: 'Should the board be treated?', answer: '<p>For counter or workshop use, yes. Untreated board softens around the aperture first, which is exactly where the box needs to hold its shape.</p>' },
      { question: 'Can these be wall-mounted?', answer: '<p>Yes, with reinforced fixing points. Tell us the mounting method because it decides where the reinforcement goes.</p>' },
      { question: 'What board is used?', answer: '<p>Usually E flute corrugated for counter units, heavier where the box is refilled rather than replaced.</p>' },
      { question: 'Are these refillable?', answer: '<p>Both refillable and disposable versions exist. A refillable one needs a proper opening and stronger board; a disposable one is cheaper per unit.</p>' },
      { question: 'Can the perforation be printed over?', answer: '<p>Yes, though critical copy is kept clear of the tear line so the panel still reads once the aperture is opened.</p>' },
      { question: 'Do they ship flat?', answer: '<p>Yes, and erect on site, which keeps freight low relative to the assembled shape.</p>' },
      { question: 'Can I get different counts in one range?', answer: '<p>Yes, sharing board and print. Only the dieline changes between counts.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, with a moisture-resistant treatment where the environment requires it. The two are independent specifications.</p>' },
    ],
  },

  'custom-kraft-bags': {
    intro:
      'A paper bag leaves the shop with the customer, which makes it a second storefront. It also fails in one specific place.',
    sections: [
      {
        h2: 'Bags tear at the handle, not the paper',
        body: [
          'The failure point is almost always the top edge where the handle is fixed, not the body of the bag. A reinforced top edge matters as much as the handle itself, and often more.',
          'Send the heaviest thing the bag will carry rather than an average, because it is the heaviest load that decides the specification.',
        ],
      },
      {
        h2: 'Handle type follows the load',
        body: [
          'Twisted paper handles suit light contents. Flat paper is stronger for the same cost. Cotton rope carries the most and reads as the most premium. The choice is a load decision that happens to have an appearance consequence.',
        ],
        table: {
          caption: 'Handle by load',
          head: ['Handle', 'Carries', 'Reads as'],
          rows: [
            ['Twisted paper', 'Light', 'Everyday retail'],
            ['Flat paper', 'Moderate', 'Everyday retail, stronger'],
            ['Cotton rope', 'Heaviest', 'Premium'],
            ['Die-cut in the bag', 'Light only', 'Minimal, no attached handle'],
          ],
        },
      },
      {
        h2: 'Bags are quoted width by gusset by height',
        body: [
          'Getting the gusset wrong is the most common reason a first bag order does not fit the product. The gusset is the side fold that gives the bag its depth, and it is easy to overlook when measuring from a flat bag.',
        ],
      },
    ],
    link: {
      lead: 'For bakery and food service bags specifically, ',
      href: '/product/kraft-bakery-bags/',
      anchor: 'bakery bags cover grease resistance',
      tail: '.',
    },
    faqs: [
      { question: 'Where do paper bags fail?', answer: '<p>At the top edge where the handle is fixed, not in the body of the bag. A reinforced top edge matters as much as the handle itself, and often more.</p>' },
      { question: 'Which handle should I choose?', answer: '<p>It follows the load. Twisted paper for light contents, flat paper for more strength at the same cost, cotton rope for the heaviest and most premium.</p>' },
      { question: 'How are bags measured?', answer: '<p>Width by gusset by height. The gusset is the side fold that gives depth, and getting it wrong is the most common reason a first order does not fit the product.</p>' },
      { question: 'How much weight will a bag carry?', answer: '<p>That is set by the paper weight and the top-edge reinforcement together rather than by the handle alone. Tell us the heaviest thing you will put in it.</p>' },
      { question: 'What paper weight is used?', answer: '<p>Lighter for boutique and bakery use, heavier where the bag carries real weight. We specify from the load rather than from a default.</p>' },
      { question: 'Can bags be printed on both sides?', answer: '<p>Yes. On a bag carried through a street both faces are seen, which is part of why the format works as advertising.</p>' },
      { question: 'Are laminated bags available?', answer: '<p>Yes, though lamination takes the bag out of the paper recycling stream. An uncoated or varnished bag keeps the claim.</p>' },
      { question: 'Do you supply bags with a base card?', answer: '<p>Yes, and for anything heavy it is worth having. A base card stops the bottom bowing and keeps the bag standing.</p>' },
      { question: 'Can these be food-safe?', answer: '<p>With a compliant grade and a grease-resistant treatment where needed. Plain kraft strikes through with oily food.</p>' },
      { question: 'Are recycled papers available?', answer: '<p>Yes across the range, and they suit the natural positioning most kraft bags are bought for.</p>' },
    ],
  },

  'kraft-take-out-boxes': {
    intro:
      'A take out box is filled hot, carried, and often eaten from directly. It faces grease and steam at the same time, which most food board handles only one of.',
    sections: [
      {
        h2: 'Grease and steam are different problems',
        body: [
          'Fried food releases fat that soaks into untreated board. Hot food releases steam that softens it from the inside. A box treated for one and not the other still fails, just more slowly.',
          'Anything hot and fried needs both a grease barrier and moisture tolerance, and that combination has to be specified rather than assumed from a general food-grade board.',
        ],
      },
      {
        h2: 'Closures that survive a journey',
        body: [
          'A plain tuck flap opens when the box is tilted in a delivery bag. A locking tuck or a folded closure stays shut. As delivery has grown this has become the most common complaint on the format.',
        ],
      },
      {
        h2: 'PFAS and what changed',
        body: [
          'Several US states now restrict PFAS in food packaging, and the grease-resistant chemistry that was standard a few years ago is no longer compliant everywhere. Tell us which states you sell into and we specify against the strictest of them.',
        ],
      },
    ],
    link: {
      lead: 'For carried meals where a handle is wanted, ',
      href: '/product/kraft-gable-boxes/',
      anchor: 'gable boxes have an integral handle',
      tail: '.',
    },
    faqs: [
      { question: 'Why does the box go soggy?', answer: '<p>Grease and steam are different problems. Fat soaks in from fried food; steam softens the board from the inside. A box treated for one and not the other still fails, just more slowly.</p>' },
      { question: 'Are your food boxes PFAS-free?', answer: '<p>We specify PFAS-free grease-resistant grades as standard, and several states now require it. Tell us where you sell so we specify against the strictest of those states.</p>' },
      { question: 'Why do boxes open in delivery bags?', answer: '<p>A plain tuck flap opens when tilted. A locking tuck or a folded closure stays shut, and it has become the most common complaint as delivery has grown.</p>' },
      { question: 'Can these be microwaved?', answer: '<p>It depends entirely on the coating. Tell us if reheating in the pack is expected and we specify a suitable grade rather than assuming.</p>' },
      { question: 'Should the box be ventilated?', answer: '<p>For crisp food, yes. A sealed box traps steam and everything inside goes soft, which is a moisture problem rather than a grease one.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your portion sizes rather than to a stock list. Send the fill volume and we build the dieline around it.</p>' },
      { question: 'Can they be printed?', answer: '<p>Yes, with food-contact compliant inks. Confirm the compliance before artwork rather than after.</p>' },
      { question: 'Do these stack when filled?', answer: '<p>Within limits, and a flat lid stacks far better than a domed one. Delivery operations stack more than counters do, so tell us which applies.</p>' },
      { question: 'Are leak-resistant options available?', answer: '<p>Yes, with a coated board and a folded rather than glued base. For genuinely wet food the base construction matters more than the coating.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>For non-direct contact, yes. Direct food contact narrows the options to compliant grades, which we specify accordingly.</p>' },
    ],
  },

  'kraft-food-boxes': {
    intro:
      'The general food carton — used across bakery, takeaway, grocery and meal prep, where the specification follows what goes in rather than the format.',
    sections: [
      {
        h2: 'Fill temperature and fat content decide the board',
        body: [
          'Those two answers narrow the stock list faster than anything else. Dry goods need no treatment. Fried food needs grease resistance. Hot fill needs moisture tolerance. Chilled needs a cold-tolerant adhesive because standard carton glue goes brittle.',
        ],
        table: {
          caption: 'Treatment by fill',
          head: ['Fill', 'Board', 'Treatment'],
          rows: [
            ['Dry goods and confectionery', 'Uncoated kraft', 'None required'],
            ['Bakery and pastry', 'Kraft with grease barrier', 'Grease-resistant coating'],
            ['Hot and fried', 'Heavier caliper kraft', 'Grease and moisture barrier'],
            ['Chilled and frozen', 'Moisture-resistant board', 'Cold-tolerant adhesive'],
          ],
        },
      },
      {
        h2: 'Direct contact or through a liner',
        body: [
          'Whether food touches the board directly changes which stocks and inks are available. It is the first question on any food quote and it is frequently answered too late.',
        ],
      },
      {
        h2: 'One board across a mixed range',
        body: [
          'One board grade and one print system can usually carry a whole food range even where the dimensions differ. That keeps the shelf look consistent and the setup cost down, with only the dieline changing between products.',
        ],
      },
    ],
    link: {
      lead: 'For the full food range organised by product type, ',
      href: '/product-category/kraft-food-packaging/',
      anchor: 'the kraft food packaging category',
      tail: ' covers the individual formats.',
    },
    faqs: [
      { question: 'What decides the board for food packaging?', answer: '<p>Fill temperature and fat content, more than anything else. Dry goods need no treatment, fried food needs grease resistance, hot fill needs moisture tolerance, chilled needs a cold-tolerant adhesive.</p>' },
      { question: 'Does the food touch the board directly?', answer: '<p>That is the first question on any food quote because it changes which stocks and inks are available. Tell us whether contact is direct or through a liner.</p>' },
      { question: 'Why do seams crack on frozen packs?', answer: '<p>Standard carton adhesive becomes brittle in sustained cold. A cold-tolerant adhesive costs very little and cannot be added after the fact.</p>' },
      { question: 'Can one board cover a mixed food range?', answer: '<p>Usually one grade and one print system can, with only the dieline changing between products. That keeps the shelf look consistent and the setup cost down.</p>' },
      { question: 'Are windows available on food boxes?', answer: '<p>Yes, filmed or as a plain aperture. A plain aperture keeps the pack in the paper stream but leaves the food exposed, so film usually wins for food.</p>' },
      { question: 'Are these PFAS-free?', answer: '<p>We specify PFAS-free grease-resistant grades as standard. Several states require it, so tell us where you sell and we specify against the strictest.</p>' },
      { question: 'Can food boxes be printed inside?', answer: '<p>Yes, with food-contact compliant inks where contact is direct. Confirm compliance before artwork rather than after.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your portions rather than a stock list. Send the fill volume or a filled sample.</p>' },
      { question: 'Do these ship flat?', answer: '<p>Yes, glued along one seam so they erect on your line, which matters in food service where boxes are assembled during a shift.</p>' },
      { question: 'Are recycled boards suitable for food?', answer: '<p>For non-direct contact, yes. Direct contact requires compliant grades, which narrows the recycled options.</p>' },
    ],
  },

  'kraft-bakery-boxes': {
    intro:
      'Bakery boxes carry warm, soft, often decorated products a short distance. They fail from moisture more often than from grease.',
    sections: [
      {
        h2: 'Warm baked goods release steam',
        body: [
          'A cake or pastry boxed while still warm releases moisture that has nowhere to go in a sealed box. The board softens and the product goes soft with it — which is a ventilation problem rather than a board weight problem.',
          'Vent holes solve it. So does letting the product cool, but that is not always practical during service.',
        ],
      },
      {
        h2: 'Height clearance over decoration',
        body: [
          'The lid must not touch icing or decoration. Cakes are quoted by base diameter and it is the decoration on top that sets the box height, which is the measurement most often given wrong.',
        ],
      },
      {
        h2: 'Carrying without tipping',
        body: [
          'A bakery box is carried flat and level, often by a customer holding it in one hand. A base that flexes lets the contents slide. A stiffer base, or a board insert under the product, keeps it level.',
        ],
      },
    ],
    link: {
      lead: 'For individually portioned cakes needing a fitted insert, ',
      href: '/product/kraft-cupcake-boxes/',
      anchor: 'cupcake boxes hold each cake in a cup',
      tail: '.',
    },
    faqs: [
      { question: 'Why does my bakery box go soft?', answer: '<p>Warm product releases steam that has nowhere to go in a sealed box, and the board softens along with the product. Vent holes solve it — it is a ventilation problem rather than a board weight one.</p>' },
      { question: 'What height should I give you?', answer: '<p>The product including its decoration at full height. Cakes are quoted by base diameter and it is the decoration on top that sets the box.</p>' },
      { question: 'Why does the cake slide inside?', answer: '<p>A flexing base lets the product move. A stiffer base or a board insert under the cake keeps it level while the box is carried.</p>' },
      { question: 'Do I need a grease barrier?', answer: '<p>For buttery pastries, yes. For plain bread and sponge the more common problem is moisture rather than grease.</p>' },
      { question: 'Are windows worth it?', answer: '<p>Very often, since decoration is what sells baked goods. It costs stiffness on the lid, which is already the panel that must not touch the product.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your products, including height for decoration. Send the tallest item you box.</p>' },
      { question: 'Can these carry safely by hand?', answer: '<p>With a stiff base, yes. For larger boxes a handle helps, though the board around a die-cut handle needs reinforcing when filled.</p>' },
      { question: 'Are these suitable for delivery?', answer: '<p>Yes with a secure closure. Delivery adds tilting, so a locking tuck holds where a plain flap does not.</p>' },
      { question: 'Can they be printed?', answer: '<p>Yes, with food-contact compliant inks where contact is direct. Kraft with one or two colours suits the category well.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>For non-direct contact, yes. Where the product sits on the board a compliant grade is needed, which narrows the options.</p>' },
    ],
  },

  'kraft-cake-boxes': {
    intro:
      'A cake box is tall, square and carries something soft that must arrive undamaged and level. Height and base rigidity are the two decisions.',
    sections: [
      {
        h2: 'Height is set by decoration',
        body: [
          'A cake is described by its diameter, but the box is set by the tallest point of the decoration. A tiered or piped cake needs noticeably more clearance than a flat-iced one, and a box sized to the wrong figure flattens the top.',
        ],
      },
      {
        h2: 'The base has to stay flat',
        body: [
          'A cake sitting on a flexing base shifts and cracks. A stiff base, a board cake drum, or both together keeps it level while it is carried and set down.',
        ],
      },
      {
        h2: 'Getting the cake out again',
        body: [
          'A tall box with a fixed lid means the cake has to be lifted straight up past the walls, which is where fingers meet icing. A lift-off lid, or a box that opens fully, avoids the damage that happens at the last moment.',
        ],
      },
    ],
    link: {
      lead: 'For smaller portioned bakery items, ',
      href: '/product/kraft-bakery-boxes/',
      anchor: 'bakery boxes cover the general formats',
      tail: '.',
    },
    faqs: [
      { question: 'What height should a cake box be?', answer: '<p>Set by the tallest point of the decoration rather than the cake itself. A tiered or piped cake needs noticeably more clearance than a flat-iced one.</p>' },
      { question: 'Why does the cake crack in transit?', answer: '<p>A flexing base lets it shift. A stiff base, a cake drum, or both keeps it level while the box is carried and set down.</p>' },
      { question: 'How do I get the cake out without damaging it?', answer: '<p>A lift-off lid or a fully opening box. Lifting a cake straight up past tall fixed walls is where fingers meet icing.</p>' },
      { question: 'Should cake boxes be ventilated?', answer: '<p>If cakes are boxed warm, yes. Trapped steam softens both the board and the sponge.</p>' },
      { question: 'Do you supply cake drums as well?', answer: '<p>We can specify a board base with the box so the two are sized together. A drum that is slightly too large stops the lid closing.</p>' },
      { question: 'Can these have windows?', answer: '<p>Yes, and they suit decorated cakes. On a large lid an aperture costs real stiffness, so the board steps up.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your cakes including decoration height. Send the largest and tallest you make.</p>' },
      { question: 'Can they be carried by hand?', answer: '<p>Yes, and larger boxes benefit from a handle with reinforcement around the aperture. A filled cake box is heavier than it looks.</p>' },
      { question: 'Are these suitable for delivery?', answer: '<p>With a secure closure and a stiff base, yes. Delivery adds tilting that a plain tuck flap will not hold against.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>For non-direct contact, yes. Where the cake sits on the board a compliant grade is required.</p>' },
    ],
  },

  'kraft-cookie-boxes': {
    intro:
      'Cookies are rigid, they break, and they are usually bought as a gift or a treat. Stopping them moving is most of the job.',
    sections: [
      {
        h2: 'Movement breaks cookies',
        body: [
          'A cookie loose in a box slides against its neighbours and against the wall, and the edges chip. A snug fit, a divider or a fitted tray stops it, and none of them costs much against a box of broken cookies.',
        ],
      },
      {
        h2: 'Fat and the board',
        body: [
          'Butter-rich cookies release fat that soaks into uncoated board over time, leaving translucent marks. A grease-resistant board or an inner liner prevents it, and the liner keeps the outer fully recyclable.',
        ],
      },
      {
        h2: 'Bought to be given',
        body: [
          'A large share of cookie packaging is gifting, which means the box is opened in front of someone. A window, a ribbon or an interior print all earn their cost more here than on everyday food packaging.',
        ],
      },
    ],
    link: {
      lead: 'For loose or bulk bakery sales rather than boxed sets, ',
      href: '/product/kraft-bakery-bags/',
      anchor: 'bakery bags suit counter service',
      tail: '.',
    },
    faqs: [
      { question: 'How do I stop cookies breaking?', answer: '<p>Stop them moving. A snug fit, a divider or a fitted tray keeps them from sliding against each other and chipping at the edges.</p>' },
      { question: 'Will butter mark the box?', answer: '<p>Over time on uncoated board, yes. A grease-resistant board or an inner liner prevents it, and a liner keeps the outer fully recyclable.</p>' },
      { question: 'Should the box have a window?', answer: '<p>For gifting, usually. Cookies sell on appearance and a window shows them directly rather than relying on a printed image.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your cookie size and count. Send a filled sample if you have one, since cookies vary in thickness more than diameter.</p>' },
      { question: 'Do you supply dividers and trays?', answer: '<p>Yes, in board or moulded pulp, specified with the box because they set the internal dimensions.</p>' },
      { question: 'Are these suitable for posting?', answer: '<p>With a fitted insert and an outer carton, yes. Cookies posted in a plain box arrive broken more often than not.</p>' },
      { question: 'Can they be printed inside?', answer: '<p>Yes, and on a gift box it is worth it. The interior is in view for the whole time the box is open.</p>' },
      { question: 'What closure suits a cookie box?', answer: '<p>A lift-off lid or a ribbon for gifting, a tuck end for everyday retail. The choice follows how it is sold.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>Where the cookies touch the board directly we specify compliant boards and inks. Tell us whether contact is direct or through a liner.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>For non-direct contact, yes, and an inner liner is what lets you keep a recycled outer with direct food inside.</p>' },
    ],
  },

  'kraft-pizza-boxes': {
    intro:
      'A pizza box is a large flat carton filled with something hot, wet and greasy that has to arrive crisp. Almost everything about it is a moisture problem.',
    sections: [
      {
        h2: 'Steam is the enemy, not grease',
        body: [
          'A hot pizza releases a great deal of steam. In a sealed box that condenses on the lid and drips back onto the pizza, which is what makes a delivered base soggy. Grease is the visible problem; steam is the one that ruins the product.',
          'Ventilation holes let it escape. They are a small detail with a disproportionate effect on how the food arrives.',
        ],
      },
      {
        h2: 'The lid has to hold its own weight',
        body: [
          'A pizza box lid is a wide unsupported span, and when boxes are stacked in a delivery bag the lid carries the boxes above. Too light and it sags onto the pizza. Corner supports or a heavier grade prevent it.',
        ],
      },
      {
        h2: 'Cost per unit at volume',
        body: [
          'Pizza boxes are bought in large quantities and every press pass shows in the cost per box. One or two colours flexo direct to kraft is the sensible specification; anything more rarely returns its cost on a box thrown away after one meal.',
        ],
      },
    ],
    link: {
      lead: 'For other hot carried food in the same operation, ',
      href: '/product/kraft-take-out-boxes/',
      anchor: 'take out boxes cover the smaller formats',
      tail: '.',
    },
    faqs: [
      { question: 'Why does the pizza arrive soggy?', answer: '<p>Steam rather than grease. A hot pizza releases moisture that condenses on the lid and drips back onto the base. Ventilation holes let it escape and have a disproportionate effect on how the food arrives.</p>' },
      { question: 'Why does the lid sag onto the pizza?', answer: '<p>The lid is a wide unsupported span, and stacked in a delivery bag it carries the boxes above. Corner supports or a heavier grade prevent it.</p>' },
      { question: 'How many colours should I print?', answer: '<p>One or two, flexo direct to kraft. Every pass shows in the cost per box at volume, and more rarely returns its cost on a box thrown away after one meal.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your pizza diameters. Send the sizes you actually sell rather than standard inches, since bases vary between operations.</p>' },
      { question: 'Are these PFAS-free?', answer: '<p>We specify PFAS-free grease-resistant grades as standard. Several states require it, so tell us where you operate.</p>' },
      { question: 'Do they stack in a delivery bag?', answer: '<p>Yes, and that is where lid strength matters most. Tell us how many are stacked and we specify against it.</p>' },
      { question: 'Can I get a window?', answer: '<p>Rarely worth it here — it costs stiffness on the lid that has to carry the stack, and the box is opened within minutes anyway.</p>' },
      { question: 'What board is used?', answer: '<p>E or B flute corrugated with a grease-resistant treatment. The flute choice follows the stack rather than the pizza weight.</p>' },
      { question: 'Do they arrive flat?', answer: '<p>Yes, and erect in one movement, which matters during service when staff assemble them at speed.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, and most corrugated already carries high recycled content. Direct food contact narrows the grade options, which we specify accordingly.</p>' },
    ],
  },

  'kraft-bakery-bags': {
    intro:
      'A bakery bag holds warm, often greasy product for a short journey. Grease showing through is the visible failure and it happens fast.',
    sections: [
      {
        h2: 'Grease shows within minutes',
        body: [
          'On untreated paper a buttery pastry marks the bag almost immediately, and the customer is holding a translucent, weak bag before they leave the shop. A grease-resistant grade prevents it.',
          'This is a property of the material rather than a quality fault, and it is inexpensive to design out at specification stage.',
        ],
      },
      {
        h2: 'Windows and what they cost',
        body: [
          'A window shows the product, which sells baked goods well. It also means the bag is no longer straight paper, so a clean recycling claim needs a plain bag or a compostable film.',
        ],
      },
      {
        h2: 'Warm product and closed bags',
        body: [
          'A warm pastry in a closed bag steams and softens. Where crispness matters, a bag that is not fully sealed, or a perforated one, keeps the product better than a tightly closed one.',
        ],
      },
    ],
    link: {
      lead: 'For boxed bakery products rather than counter service, ',
      href: '/product/kraft-bakery-boxes/',
      anchor: 'bakery boxes cover the carton formats',
      tail: '.',
    },
    faqs: [
      { question: 'Why does grease show through so quickly?', answer: '<p>On untreated paper a buttery pastry marks the bag almost immediately. It is a property of the material rather than a fault, and a grease-resistant grade prevents it inexpensively.</p>' },
      { question: 'Should the bag have a window?', answer: '<p>It sells baked goods well, but it means the bag is no longer straight paper. A clean recycling claim needs a plain bag or a compostable film.</p>' },
      { question: 'Why does my pastry go soft in the bag?', answer: '<p>A warm product in a closed bag steams. Where crispness matters, an unsealed or perforated bag keeps the product better than a tightly closed one.</p>' },
      { question: 'What paper weight is used?', answer: '<p>Light, since bakery bags carry very little weight. The specification is driven by the grease barrier rather than by strength.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>Yes, with compliant grades and inks. Bakery bags are almost always direct contact, so it is specified rather than optional.</p>' },
      { question: 'Can they be printed?', answer: '<p>Yes, and one or two colours on kraft suits the category. Full-colour rarely returns its cost on a bag used once.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your products. Send the largest item you bag rather than an average, since it is the largest that decides the size.</p>' },
      { question: 'Are gusseted bags available?', answer: '<p>Yes, and they suit anything with depth. A flat bag suits single pastries; a gusseted one suits loaves and multiples.</p>' },
      { question: 'Do you supply plain unprinted bags?', answer: '<p>Yes, and many operations use plain bags with a printed sticker, which is cheaper for low volumes.</p>' },
      { question: 'Are recycled papers available?', answer: '<p>Where direct contact allows, yes. The grease-resistant treatment and the recycled claim are specified separately.</p>' },
    ],
  },

  'kraft-paper-treat-bags': {
    intro:
      'A treat bag is a small flat or gusseted paper bag for confectionery, favours and counter sales. It is the cheapest packaging in the catalogue.',
    sections: [
      {
        h2: 'Cost per unit is the whole constraint',
        body: [
          'These sell in thousands and cost pennies, so every decision is a cost decision. One colour on plain kraft is the standard specification, and anything more has to justify itself against a bag used once and thrown away.',
        ],
      },
      {
        h2: 'Flat or gusseted',
        body: [
          'A flat bag suits thin items and lies neatly in a display. A gusseted bag stands up and holds volume. Which you need follows the product rather than the price, since gusseted costs marginally more.',
        ],
      },
      {
        h2: 'Closure options',
        body: [
          'Most treat bags are folded and stickered, which is the cheapest closure and lets the sticker carry the branding. Tin ties and resealable options exist where the contents are kept rather than eaten immediately.',
        ],
      },
    ],
    link: {
      lead: 'For larger carried bags with handles, ',
      href: '/product/custom-kraft-bags/',
      anchor: 'kraft paper bags cover the retail formats',
      tail: '.',
    },
    faqs: [
      { question: 'What is the cheapest way to brand these?', answer: '<p>A printed sticker on a plain bag, for low volumes. At higher quantities one-colour printing directly on kraft becomes cheaper per unit.</p>' },
      { question: 'Flat or gusseted?', answer: '<p>Flat suits thin items and displays neatly; gusseted stands up and holds volume. It follows the product rather than the price, since gusseted costs only marginally more.</p>' },
      { question: 'How do these close?', answer: '<p>Most are folded and stickered, which is cheapest and lets the sticker carry the branding. Tin ties and resealable options exist where contents are kept.</p>' },
      { question: 'Are they food-safe?', answer: '<p>With a compliant grade, yes, and with a grease barrier for anything oily. Plain kraft marks quickly with buttery contents.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your contents. Send the item and roughly how full the bag should look, since a half-empty treat bag reads as mean.</p>' },
      { question: 'Can they have windows?', answer: '<p>Yes, and they suit confectionery. A window means the bag is no longer straight paper, which affects a recycling claim.</p>' },
      { question: 'What paper weight is used?', answer: '<p>Light. These carry very little and heavier paper adds cost without benefit at this price point.</p>' },
      { question: 'Are these suitable for wedding favours?', answer: '<p>Yes, and short runs suit digital print with no plate cost, which makes personalised favours affordable at small quantities.</p>' },
      { question: 'Do you supply plain bags?', answer: '<p>Yes, and for many operations plain plus a sticker is the sensible route.</p>' },
      { question: 'Are recycled papers available?', answer: '<p>Yes across the range, and they suit the natural look these bags are usually chosen for.</p>' },
    ],
  },

  'kraft-favor-boxes': {
    intro:
      'A favour box is a small gift carton produced for a single occasion in a fixed quantity, with no second run behind it.',
    sections: [
      {
        h2: 'Order overage inside the run',
        body: [
          'Favours are bought for one event and running out cannot be fixed afterwards. Producing spares inside the original run costs a fraction of a separate short run later, and it is the advice we give unprompted on occasion work.',
        ],
      },
      {
        h2: 'Assembly time is a real cost',
        body: [
          'Favours are usually assembled by hand, often by the customer, in quantities of a hundred or more. A box that folds in one movement saves hours; one that needs three folds and a tuck is a genuinely different proposition at that volume.',
        ],
      },
      {
        h2: 'Small runs and digital print',
        body: [
          'A hundred or two hundred boxes suits digital print with no plate cost, which also makes personalisation — names, dates, table numbers — affordable in a way litho never is at this quantity.',
        ],
      },
    ],
    link: {
      lead: 'For the pillow-shaped alternative often used for the same occasions, ',
      href: '/product/kraft-pillow-boxes/',
      anchor: 'pillow boxes fold from a single blank',
      tail: '.',
    },
    faqs: [
      { question: 'Should I order spare favour boxes?', answer: '<p>Yes, and it is the advice we give unprompted. Favours are bought for one event with no second run behind them, and overage inside the original run costs a fraction of a separate short run.</p>' },
      { question: 'How long do they take to assemble?', answer: '<p>It depends entirely on the structure. A box that folds in one movement saves hours over one needing three folds and a tuck, which matters when someone is assembling two hundred by hand.</p>' },
      { question: 'Can I have names or dates printed?', answer: '<p>Yes. Short runs suit digital print with no plate cost, which makes variable data affordable in a way litho is not at this quantity.</p>' },
      { question: 'What is the minimum quantity?', answer: '<p>The standard minimum applies. At favour quantities digital is almost always the right print route.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your contents. Send what goes in — favours are often filled with something the box was not originally designed around.</p>' },
      { question: 'Can these hold confectionery?', answer: '<p>Yes, with a food-contact compliant grade if the sweets touch the board directly. Tell us at quoting.</p>' },
      { question: 'Are ribbons available?', answer: '<p>Yes, though they are hand-finished and add labour per unit. For a few hundred that is usually acceptable.</p>' },
      { question: 'Do they arrive flat?', answer: '<p>Yes, which is what keeps them affordable. Assembly is on your side, so the structure choice matters.</p>' },
      { question: 'Can I get a window?', answer: '<p>Yes, and it suits confectionery favours. A plain aperture keeps the box recyclable.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, and uncoated kraft suits the craft and wedding positioning these are usually bought for.</p>' },
    ],
  },

  'kraft-treat-boxes': {
    intro:
      'A treat box holds a small portion of confectionery or baked goods for parties, events and counter sales.',
    sections: [
      {
        h2: 'Sized to look full',
        body: [
          'A treat box that is half empty reads as mean regardless of what it cost. Sizing it so the contents fill it comfortably matters more here than efficiency, which is the opposite of most packaging decisions.',
        ],
      },
      {
        h2: 'Food contact and greasy contents',
        body: [
          'Where sweets or baked goods touch the board directly the grade has to be compliant, and anything buttery needs a grease barrier or the box marks within days.',
        ],
      },
      {
        h2: 'Assembly at event volumes',
        body: [
          'Treat boxes are usually filled by hand in bulk before an event. A structure that erects in one movement is worth more than a clever one, and a self-locking base saves taping every box.',
        ],
      },
    ],
    link: {
      lead: 'For single-occasion gifting quantities, ',
      href: '/product/kraft-favor-boxes/',
      anchor: 'favour boxes cover event runs',
      tail: '.',
    },
    faqs: [
      { question: 'What size should a treat box be?', answer: '<p>Sized so the contents fill it comfortably. A half-empty treat box reads as mean regardless of cost, which is the opposite of most packaging sizing decisions.</p>' },
      { question: 'Are these food-safe?', answer: '<p>With a compliant grade where contact is direct, and a grease barrier for anything buttery. Without the barrier the box marks within days.</p>' },
      { question: 'How quickly do they assemble?', answer: '<p>A self-locking base erects in one movement and saves taping every box, which matters when hundreds are filled by hand before an event.</p>' },
      { question: 'Can I have a window?', answer: '<p>Yes, and it suits confectionery. A plain die-cut aperture keeps the box in the paper recycling stream.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your portions. Send the contents and how full you want the box to look.</p>' },
      { question: 'Can these be printed for an event?', answer: '<p>Yes, and short runs suit digital print, which makes dates and names affordable at party quantities.</p>' },
      { question: 'Do they hold their shape when carried?', answer: '<p>With a locking base, yes. A plain glued base can open under a filled box that is carried by the sides.</p>' },
      { question: 'Are handles available?', answer: '<p>On larger treat boxes, yes, usually as a die-cut with reinforcement around the aperture.</p>' },
      { question: 'Do they arrive flat?', answer: '<p>Yes, which keeps freight low. Assembly is on your side, so structure choice matters at volume.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Where contact is not direct, yes. Direct contact requires a compliant grade.</p>' },
    ],
  },
}
