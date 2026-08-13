import type { ProductContentMap } from './types'

/**
 * Cosmetic packaging and luxury constructions.
 *
 * Nearly every cosmetic product here is a carton around a container, so the
 * container decides the specification — its widest point, whether it leaks,
 * and how much regulated copy competes with the brand for panel space.
 *
 * The luxury group is defined by construction rather than contents. Rigid
 * builds, tubes and the angular shapes exist because a square folding carton
 * would not have made the same impression, and all of them are hand-assembled
 * or specially formed, which is where both the feel and the cost come from.
 */
export const cosmeticLuxuryContent: ProductContentMap = {
  /* --------------------------- cosmetic --------------------------- */

  'kraft-skincare-boxes': {
    intro:
      'A skincare carton goes around a jar, tube or dropper bottle, and the container is what decides every dimension. Panel space for ingredient copy is the constraint brands consistently underestimate.',
    sections: [
      {
        h2: 'Measure the container as it will be packed',
        body: [
          'Measure at the widest point, which on a jar is often the shoulder rather than the base, and include the cap, pump or dropper as fitted. Supplier drawings quote the container alone and miss both the closure and any applied label thickness.',
          'Those two together are the usual reason a carton will not close flat, and they are discovered after the board has been bought.',
        ],
      },
      {
        h2: 'Ingredient copy competes with the design',
        body: [
          'Ingredient lists, warnings and claims take more panel area than almost any brand allows for, and adding them after layout forces a reflow. We block the area on the dieline before design time is committed.',
        ],
      },
      {
        h2: 'Serums and oils stain from the inside',
        body: [
          'Oils wick into unlined board and show as a translucent mark on the outside within days. A coated inner face contains a minor leak and costs very little against a visibly marked run.',
        ],
        table: {
          caption: 'Container type and what it changes',
          head: ['Container', 'Widest point', 'Watch for'],
          rows: [
            ['Jar', 'Shoulder or lid rim', 'Lid diameter exceeds the base'],
            ['Tube', 'Shoulder, or the cap', 'Flat measurement understates filled depth'],
            ['Dropper bottle', 'Cap assembly', 'Dropper adds height the bottle spec omits'],
            ['Pump bottle', 'Pump collar', 'Pump height varies between suppliers'],
          ],
        },
      },
    ],
    link: {
      lead: 'Where the range also covers fragrance in heavier glass, ',
      href: '/product/kraft-perfume-boxes/',
      anchor: 'perfume boxes deal with weight and stability',
      tail: '.',
    },
    faqs: [
      { question: 'How do I measure a jar or bottle for its carton?', answer: '<p>At the widest point, including the cap, pump or dropper as fitted, and with any label already applied. On a jar the widest point is often the shoulder rather than the base.</p>' },
      { question: 'How much room do ingredient lists need?', answer: '<p>More than most brands allow for. Ingredient copy and warnings compete directly with the design, and adding them after layout forces a reflow, so we block the area on the dieline first.</p>' },
      { question: 'Will a serum leak damage the carton?', answer: '<p>On unlined board, yes — oils wick into the fibers and show as a translucent mark on the outside within days. A coated inner face contains it inexpensively.</p>' },
      { question: 'What board weight suits a skincare carton?', answer: '<p>It follows the container weight and the carton height. A glass jar needs more than a light tube, and a tall carton on light board feels flimsy even when it is structurally fine.</p>' },
      { question: 'Can one carton cover several products in a range?', answer: '<p>Where container sizes are close, yes. Fixing the board, print and finish once and varying only the dieline is what keeps a range looking related.</p>' },
      { question: 'Which finishes suit skincare packaging?', answer: '<p>Soft-touch lamination and deboss, both of which read from across a counter. Small foil details often do not survive the distance between shelf and eye.</p>' },
      { question: 'Do you print white on kraft for this category?', answer: '<p>Yes, with an opaque underbase so colors stay accurate. On an unbleached stock it is usually the only way to keep ingredient copy legible.</p>' },
      { question: 'Can you supply cartons with inserts for sets?', answer: '<p>Yes. On a kit with mixed container heights the recesses are packed up so every lid sits level, otherwise the set looks disarranged when opened.</p>' },
      { question: 'Are recycled boards suitable?', answer: '<p>Yes, with a caliper step-up so a tall carton keeps its stiffness. Bear in mind that a plastic laminate would take the pack out of the paper stream.</p>' },
      { question: 'Should I approve a digital proof or a printed sample?', answer: '<p>A printed sample for anything finish-led. Soft-touch and foil do not read accurately on screen, and on kraft the substrate shifts every color.</p>' },
    ],
  },

  'kraft-perfume-boxes': {
    intro:
      'A fragrance bottle is heavy glass with a decorative cap, and it is bought largely on how the pack feels in the hand before it is opened.',
    sections: [
      {
        h2: 'Weight changes the specification',
        body: [
          'Glass fragrance bottles are dense for their size, and a carton graded for a plastic container of the same dimensions will feel flimsy and bow at the base. Board weight follows the filled bottle rather than the carton size.',
          'A tall narrow carton around a heavy bottle also topples easily on a shelf edge. A slightly wider base solves a stability problem that sizing exactly to the bottle creates.',
        ],
      },
      {
        h2: 'The cap is usually the widest point',
        body: [
          'Decorative fragrance caps are frequently wider than the bottle body and are often the tallest element too. Measuring the bottle and adding a nominal allowance produces a carton that will not close.',
        ],
      },
      {
        h2: 'Finish is doing the selling',
        body: [
          'This is one of the few categories where the finish genuinely drives the purchase. Soft-touch, foil and deboss all read at counter distance; the interior lining is felt when the carton is opened. Each finish is a separate pass and is quoted individually.',
        ],
      },
    ],
    link: {
      lead: 'For the lighter containers in the same range, ',
      href: '/product/kraft-skincare-boxes/',
      anchor: 'skincare cartons cover jars, tubes and droppers',
      tail: '.',
    },
    faqs: [
      { question: 'Why does my perfume carton bow at the base?', answer: '<p>Because the board was graded from the carton size rather than the filled weight. Glass fragrance bottles are dense for their size and need more board than the dimensions suggest.</p>' },
      { question: 'What is the widest point on a fragrance bottle?', answer: '<p>Usually the cap. Decorative caps are frequently wider than the bottle body and often taller too, so measuring the bottle and adding an allowance produces a carton that will not close.</p>' },
      { question: 'Why do tall cartons topple on the shelf?', answer: '<p>A tall narrow carton with a bottom-heavy bottle tips easily. Widening the base slightly, or using a shelf tray, solves a problem that sizing exactly to the bottle creates.</p>' },
      { question: 'Which finishes are worth the cost here?', answer: '<p>Soft-touch, foil and deboss all read at counter distance, and this is one of the few categories where finish genuinely drives the purchase. Each is a separate pass and quoted individually.</p>' },
      { question: 'Should the carton have an insert?', answer: '<p>For heavier bottles, yes. A collar holding the bottle at the shoulder stops it pivoting, which is what puts leverage on the cap in transit.</p>' },
      { question: 'Can you produce cartons for gift sets?', answer: '<p>Yes, with a compartment per item and the shallow recesses packed up so every top sits level. Fragrance sets are judged entirely on the opening.</p>' },
      { question: 'Is rigid construction worth it?', answer: '<p>At higher price points, usually. Rigid feels substantially different in the hand, which matters in a category bought partly on that impression.</p>' },
      { question: 'What board weight do you recommend?', answer: '<p>It follows the filled bottle. Send the bottle weight rather than the dimensions alone and we specify against it.</p>' },
      { question: 'How is the interior finished?', answer: '<p>Lined or printed, and it is felt as much as seen. On a fragrance carton the interior is part of the opening experience rather than an afterthought.</p>' },
      { question: 'Can these be shipped direct to customers?', answer: '<p>Inside a protective outer. A finished fragrance carton shipped alone arrives scuffed, and scuffing is highly visible on soft-touch surfaces.</p>' },
    ],
  },

  'kraft-lip-balm-packaging-boxes': {
    intro:
      'Lip balm sells at a price point where the packaging cost is a real share of the margin, and that constraint shapes every decision.',
    sections: [
      {
        h2: 'A single-unit carton often does not pay',
        body: [
          'A carton per tube costs more than the margin on many lip balm lines supports. Multipack cartons for three or six, or a printed sleeve around the tube, frequently make better commercial sense and we will price both so the difference is visible.',
        ],
      },
      {
        h2: 'Very small dimensions, tight tolerances',
        body: [
          'These sit around 0.8 × 0.8 × 2.8 in. At that size the tolerances on the die and the gluing line matter proportionally more than on a larger carton, and a structural sample before print is worth the step.',
        ],
      },
      {
        h2: 'Keeping the press passes down',
        body: [
          'Two or three colors on uncoated kraft is usually the right specification here. Each additional pass is material to the margin at this price, and a fourth color is rarely visible enough on a panel this small to justify itself.',
        ],
      },
    ],
    link: {
      lead: 'For a printed wrap around the tube rather than a carton, ',
      href: '/product/kraft-soap-sleeve-boxes/',
      anchor: 'sleeves are the lower-cost alternative',
      tail: '.',
    },
    faqs: [
      { question: 'Is a carton worth it for a single lip balm?', answer: '<p>Often not at this price point. A multipack carton for three or six, or a printed sleeve around the tube, usually works better commercially — we will price both against your margin.</p>' },
      { question: 'What size are these cartons?', answer: '<p>Around 0.8 × 0.8 × 2.8 in for a standard twist tube. Small enough that die and gluing tolerances matter proportionally more than on a larger carton.</p>' },
      { question: 'How many colors should I print?', answer: '<p>Two or three on uncoated kraft is usually right. Each additional pass is material to the margin at this price, and a fourth color is rarely visible enough on this panel to justify itself.</p>' },
      { question: 'Should I order a sample first?', answer: '<p>For a format this small, yes. Tolerances tighten as size drops and a structural sample confirms the tube seats and the carton closes properly.</p>' },
      { question: 'Can you produce multipack cartons?', answer: '<p>Yes, and they are frequently the better answer. A three or six pack spreads the packaging cost and suits how the product is actually bought.</p>' },
      { question: 'Do these hang on a retail peg?', answer: '<p>They can, with a reinforced hang tab. The board around the hole is strengthened rather than the whole panel, since that is where packs tear.</p>' },
      { question: 'What board weight is used?', answer: '<p>12pt to 14pt is adequate for the weight. This is genuinely a light product and heavier board adds cost without benefit.</p>' },
      { question: 'Is a window useful?', answer: '<p>Rarely. The tube is not the purchase decision — the flavor or the brand is — and a window on a panel this small costs stiffness for little return.</p>' },
      { question: 'Can flavors be differentiated cheaply?', answer: '<p>Yes, by panel color on one shared dieline. That is far cheaper than a structural variant per flavor and reads faster on a shelf.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, and uncoated recycled kraft suits the natural positioning most brands in this category use.</p>' },
    ],
  },

  'kraft-mascara-boxes': {
    intro:
      'Mascara is a liquid in a slim tube with a wand, and the pigment is dark enough that any leak is immediately visible on the outside of an unlined carton.',
    sections: [
      {
        h2: 'A leak shows within days',
        body: [
          'Mascara pigment wicks into unlined board and appears as a dark stain on the outside, usually before the product reaches the shelf. On this product specifically a coated inner face is not a refinement, it is basic insurance.',
        ],
      },
      {
        h2: 'Narrow and tall',
        body: [
          'These run around 1 × 1 × 4.5 in depending on the tube. That proportion means the front panel is a vertical strip, and designs laid out as though the panel were square lose their focus when the carton is made.',
          'The brand belongs at the top of the strip, which is where it reads in a row of units on a display.',
        ],
      },
      {
        h2: 'Wand length is the dimension people miss',
        body: [
          'The tube specification usually describes the container, not the closed assembly with the wand inside. The wand handle sits proud of the tube, and that difference is what makes a carton half a centimeter too short.',
        ],
      },
    ],
    link: {
      lead: 'For the wider beauty range sharing one board and finish, ',
      href: '/product-category/kraft-cosmetic-boxes/',
      anchor: 'the cosmetic packaging range',
      tail: ' keeps the family consistent.',
    },
    faqs: [
      { question: 'Do mascara cartons need a lining?', answer: '<p>A coated inner face is close to essential. Mascara pigment is dark enough that any leak shows as a stain on the outside, usually before the product reaches the shelf.</p>' },
      { question: 'What size are these cartons?', answer: '<p>Around 1 × 1 × 4.5 in depending on the tube, measured with the wand seated rather than from the container specification alone.</p>' },
      { question: 'Why is my carton slightly too short?', answer: '<p>Almost always the wand. The tube spec describes the container, not the closed assembly, and the wand handle sits proud of the tube.</p>' },
      { question: 'Where should the branding go?', answer: '<p>At the top of the front panel. The visible area is a vertical strip and the top is what reads in a row of units on a display.</p>' },
      { question: 'What board weight suits mascara?', answer: '<p>Around 14pt SBS with a coated inner face. The weight is modest; the lining is the part that matters.</p>' },
      { question: 'Can one carton cover several formulas?', answer: '<p>Yes, where tube dimensions match. Differentiate by panel color on one dieline rather than by structure.</p>' },
      { question: 'Which finishes work at this size?', answer: '<p>A single foil detail or a deboss. A narrow panel does not have room for layered finishing, and multiple passes rarely read at this scale.</p>' },
      { question: 'Are these suitable for gift sets?', answer: '<p>Yes, with a fitted insert so tubes do not roll against each other. Loose tubes in a set mark each other at the cap.</p>' },
      { question: 'Do you print inside the carton?', answer: '<p>Rarely worth it here — the carton is opened once and discarded. The coated inner face is the interior specification that matters.</p>' },
      { question: 'Are recycled boards suitable?', answer: '<p>Yes, provided the inner face is still coated. The lining requirement is independent of the recycled content claim.</p>' },
    ],
  },

  'kraft-eyelash-packaging-boxes': {
    intro:
      'False lashes are delicate, they hold a curl, and they are bought entirely on how they look in the pack. Crushing is the failure mode.',
    sections: [
      {
        h2: 'The lash has to keep its curve',
        body: [
          'A lash pressed flat loses the curl it was made with, and it does not come back. The pack has to hold the lash on its tray without anything bearing down on it, which means the lid must not contact the lash at any point.',
          'That usually means slightly more depth than the pack looks like it needs, which is the opposite of the instinct to keep a small pack compact.',
        ],
      },
      {
        h2: 'Showing the style',
        body: [
          'Lash styles differ subtly and buyers compare them side by side. A window over the tray is doing the selling rather than decorating the pack, and a closed box has to reproduce the style accurately on the panel instead.',
        ],
      },
      {
        h2: 'A pack that is kept and reopened',
        body: [
          'Reusable lashes are returned to their pack after each wear, so the closure is used dozens of times. A magnetic or a firm tuck closure survives that; a friction lid works loose and stops protecting the curl.',
        ],
      },
    ],
    link: {
      lead: 'Where the range extends into palettes and larger beauty formats, ',
      href: '/product/kraft-makeup-palette-boxes/',
      anchor: 'palette packaging covers flat, wide constructions',
      tail: '.',
    },
    faqs: [
      { question: 'How do I stop lashes being crushed?', answer: '<p>The lid must not contact the lash at any point. A lash pressed flat loses its curl permanently, so the pack usually needs slightly more depth than it looks like it needs.</p>' },
      { question: 'Should the pack have a window?', answer: '<p>Usually, because styles differ subtly and buyers compare them side by side. A closed box has to reproduce the style accurately on the panel instead.</p>' },
      { question: 'What closure works best?', answer: '<p>Magnetic or a firm tuck. Reusable lashes go back in the pack after each wear, so a friction lid works loose and stops protecting the curl.</p>' },
      { question: 'Do you supply the tray as well?', answer: '<p>Yes, and the tray sets the internal dimensions, so the two are specified together rather than separately.</p>' },
      { question: 'What size are these packs?', answer: '<p>Cut to the tray plus clearance above the lash. The clearance is the dimension that matters and it is the one usually trimmed too far.</p>' },
      { question: 'Can you produce packs for multipacks?', answer: '<p>Yes, with a position per pair so trays do not stack directly on one another. Stacked trays crush the lash beneath.</p>' },
      { question: 'What board is used?', answer: '<p>Rigid for premium lines where the pack is kept, folding carton with a fitted tray for volume retail.</p>' },
      { question: 'Which finishes suit this category?', answer: '<p>Soft-touch and foil both read well, and the pack is handled repeatedly, so a finish that resists fingerprints is worth choosing.</p>' },
      { question: 'Can the window be film-free?', answer: '<p>A plain aperture keeps the pack recyclable but leaves the lash exposed to handling, which is a real risk in store. For this product a filmed window usually wins.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, including for rigid constructions. The tray material is specified separately and is what contacts the lash.</p>' },
    ],
  },

  'kraft-makeup-palette-boxes': {
    intro:
      'A palette is wide, flat and heavy for its size, with a hinged lid and usually a mirror. The proportions make it one of the harder cosmetic formats to get right.',
    sections: [
      {
        h2: 'Wide flat lids flex',
        body: [
          'A palette lid is the worst proportion for rigidity — wide, shallow and unsupported across its middle. A lid that flexes when opened feels cheap and, worse, transmits pressure onto the pans beneath it.',
          'Board caliper follows panel span here rather than contents weight, which is the same rule as certificate boxes and for the same reason.',
        ],
      },
      {
        h2: 'Pressed powder cracks under point load',
        body: [
          'Pressed pans crack when something bears on one spot rather than across the surface. A pack that lets the lid touch the pans, or that allows the palette to move against a hard edge, produces cracked shadows in transit.',
        ],
      },
      {
        h2: 'Weight for the size',
        body: [
          'A filled palette is considerably heavier than the pack looks, and buyers routinely under-grade the outer for shipping because they judge by footprint. Send the filled weight.',
        ],
      },
    ],
    link: {
      lead: 'For the smaller cosmetic containers in the same range, ',
      href: '/product/kraft-skincare-boxes/',
      anchor: 'skincare cartons cover jars, tubes and droppers',
      tail: '.',
    },
    faqs: [
      { question: 'Why does the palette lid flex?', answer: '<p>Wide, shallow and unsupported across its middle is the worst proportion for rigidity. Board caliper here follows panel span rather than contents weight.</p>' },
      { question: 'How do I stop pressed powder cracking?', answer: '<p>Stop anything bearing on one spot. Pressed pans crack under point load, so the lid must not contact them and the palette must not move against a hard edge.</p>' },
      { question: 'What weight should I quote for shipping?', answer: '<p>The filled weight, which is considerably more than the footprint suggests. Under-grading the outer because the pack looks flat is the common error here.</p>' },
      { question: 'Does the mirror change the specification?', answer: '<p>It adds weight and it is the component most likely to break. A snug fit matters more than extra cushioning, because movement is what cracks glass.</p>' },
      { question: 'Can you produce sleeve-and-tray constructions?', answer: '<p>Yes, and they suit palettes well — the sleeve protects the lid face in transit and can be removed at point of sale.</p>' },
      { question: 'What board is used?', answer: '<p>Rigid for premium palettes, heavy folding carton for volume. The lid span is what drives the choice either way.</p>' },
      { question: 'Which finishes suit a palette?', answer: '<p>Soft-touch resists the fingerprints a frequently handled lid collects. High gloss shows every mark on a large flat surface.</p>' },
      { question: 'Is a window worth including?', answer: '<p>Often, since shade range is the purchase decision. It costs stiffness on a lid that is already the weakest panel, so the board usually steps up.</p>' },
      { question: 'Can one pack cover several palette sizes?', answer: '<p>Only where the footprint matches. Palettes vary more in footprint than in depth, so a size change usually means a new dieline.</p>' },
      { question: 'Are recycled boards suitable?', answer: '<p>Yes, with a caliper step-up. On a wide lid the stiffness difference between recycled and virgin board is noticeable in the hand.</p>' },
    ],
  },

  'kraft-beard-oil-boxes': {
    intro:
      'Beard oil is a small glass dropper bottle, and the dropper assembly is the part that catches people out.',
    sections: [
      {
        h2: 'The dropper adds height the bottle spec omits',
        body: [
          'Supplier sheets quote the bottle without the dropper fitted, and the assembly typically adds around half an inch. That gap is the most common reason a carton will not close flat on this product.',
          'Measure with the dropper seated as it will be packed.',
        ],
      },
      {
        h2: 'Oil and unlined board',
        body: [
          'A loosened dropper leaks, and oil wicks into unlined board and shows on the outside. A coated inner face contains it, which is inexpensive against a stained run.',
        ],
      },
      {
        h2: 'A category bought on the pack',
        body: [
          'Grooming products compete on presentation more than formulation at the shelf, and kraft with a single foil or deboss suits the positioning most brands in this category take. Restraint reads better here than full-color coverage.',
        ],
      },
    ],
    link: {
      lead: 'For soap and solid grooming products in the same range, ',
      href: '/product/kraft-soap-sleeve-boxes/',
      anchor: 'soap sleeves cover the wrapped formats',
      tail: '.',
    },
    faqs: [
      { question: 'What height should I give you for a dropper bottle?', answer: '<p>The bottle with the dropper fully seated, not the bottle alone. Supplier sheets quote the bottle and the dropper assembly typically adds around half an inch — that gap is the usual reason a carton will not close.</p>' },
      { question: 'Will an oil leak damage the carton?', answer: '<p>On unlined board, yes. Oil wicks into the fibers and shows on the outside. A coated inner face contains a minor leak inexpensively.</p>' },
      { question: 'What finishes suit this category?', answer: '<p>Kraft with a single foil or deboss. Grooming brands generally position on restraint, and full-color coverage works against that.</p>' },
      { question: 'What board weight is used?', answer: '<p>Around 18pt SBS. The bottle is small but glass, so the carton needs to feel substantial rather than light.</p>' },
      { question: 'Should the bottle be held with a collar?', answer: '<p>For a tall narrow bottle, yes. Held only at the base it pivots inside the carton and puts leverage on the dropper cap.</p>' },
      { question: 'Can you produce gift sets?', answer: '<p>Yes, with a compartment per item. Beard care sets usually mix a bottle, a balm and a comb, which are three different heights needing levelling.</p>' },
      { question: 'Is a window useful?', answer: '<p>Occasionally, to show oil color. It costs stiffness on a narrow panel, so it is worth weighing against a printed description.</p>' },
      { question: 'Can one carton cover several bottle sizes?', answer: '<p>Only where heights are close. A 30 ml and a 50 ml bottle usually need separate dielines, though they can share board and print.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, and they suit the category positioning well. The inner coating for leak containment is specified separately from the recycled claim.</p>' },
      { question: 'Do you supply matching labels?', answer: '<p>We can quote labels alongside the carton so the two are specified together and the artwork is prepared once.</p>' },
    ],
  },

  'kraft-soap-sleeve-boxes': {
    intro:
      'A soap sleeve is a printed band that wraps a bar, leaving the soap partly visible and partly protected. It is the cheapest branded packaging in the catalog and it has one specific failure.',
    sections: [
      {
        h2: 'Oils migrate into the board',
        body: [
          'The essential oils in a handmade bar migrate into uncoated board and leave a translucent stain across the printed face, usually two to six weeks after packing rather than immediately. The soap is fine; the sleeve looks ruined.',
          'A greaseproof inner wrap between the bar and the sleeve solves it and keeps the sleeve itself fully recyclable. A barrier coating on the outside would fix the stain and cost the recycling claim.',
        ],
      },
      {
        h2: 'Sizing a wrap rather than a box',
        body: [
          'A sleeve is specified as the circumference of the bar plus an overlap for the glue joint, not as a flat width and length. Cut to the exact circumference there is nothing to glue and the run is unusable.',
        ],
      },
      {
        h2: 'How much soap to leave visible',
        body: [
          'A wide sleeve gives more print area and hides the bar; a narrow one shows the soap and gives less room for copy. Handmade soap sells partly on appearance, so the balance usually favors showing more than a first design instinct suggests.',
        ],
      },
    ],
    link: {
      lead: 'Where the bar needs full enclosure rather than a wrap, ',
      href: '/product/kraft-boxes-for-gifts/',
      anchor: 'small gift cartons enclose the product completely',
      tail: '.',
    },
    faqs: [
      { question: 'Why is there an oily mark on my soap sleeves?', answer: '<p>Essential oils migrating out of the bar into uncoated board, usually two to six weeks after packing. A greaseproof inner wrap solves it and keeps the sleeve recyclable; a barrier coating on the outside would fix the stain and cost the claim.</p>' },
      { question: 'What measurements do you need for a sleeve?', answer: '<p>The circumference of the bar as the sleeve will sit, plus 1 to 1.5 in of overlap for the glue joint. Flat width and length is the usual error and produces a sleeve that meets exactly and cannot be joined.</p>' },
      { question: 'How wide should the sleeve be?', answer: '<p>Wider gives more print area and hides more of the bar. Handmade soap sells partly on appearance, so the balance usually favors showing more soap than a first design instinct suggests.</p>' },
      { question: 'What board weight is used?', answer: '<p>150 to 250 gsm. Too light and it tears at the corners of the bar; too heavy and it will not fold cleanly around them.</p>' },
      { question: 'Can sleeves be used on irregular hand-cut bars?', answer: '<p>Yes, with a little tolerance built in. Send the largest and smallest bars from a typical batch so the sleeve fits the range rather than one example.</p>' },
      { question: 'Is a sleeve cheaper than a box?', answer: '<p>Considerably. A sleeve uses a fraction of the material and needs no structural die, which is why it dominates handmade soap packaging.</p>' },
      { question: 'What inks suit this?', answer: '<p>Soy or vegetable-based inks on uncoated kraft, which suits the category and prints honestly on a brown stock.</p>' },
      { question: 'Can you print on the inside of the sleeve?', answer: '<p>Yes, though it is rarely seen. Ingredient and care copy is usually better placed on the outside where a customer reads it before buying.</p>' },
      { question: 'Do sleeves work for cold process and melt-and-pour equally?', answer: '<p>Yes, though cold process bars generally carry more free oil, so the inner wrap matters more there.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, and they suit the category. Keeping the barrier on an inner wrap rather than on the sleeve is what preserves the recycled and recyclable claims.</p>' },
    ],
  },

  'kraft-wax-melt-boxes': {
    intro:
      'Wax melts are sold in clamshells or loose segments, and the product softens in warmth. The pack has to hold shape in a car, a warehouse or a shop window.',
    sections: [
      {
        h2: 'Heat is the operating condition, not the exception',
        body: [
          'Wax melts spend part of their life somewhere warm, and softened wax deforms against whatever it is touching. A pack that holds the segments apart keeps them usable; one that lets them press together delivers a single fused block.',
        ],
      },
      {
        h2: 'Fragrance oils and board',
        body: [
          'The fragrance load in wax melts is high, and those oils migrate into uncoated board over weeks in storage. A coated inner face or a sealed clamshell inside the carton keeps the carton clean.',
        ],
      },
      {
        h2: 'Showing color and scent',
        body: [
          'Buyers choose on scent name and color, and color is visible where scent is not. A window shows the wax directly; without one, accurate color reproduction on the panel is doing that job and is worth getting right.',
        ],
      },
    ],
    link: {
      lead: 'For candles in the same fragrance range, ',
      href: '/product/kraft-candle-boxes/',
      anchor: 'candle boxes cover jar and tin sizing',
      tail: '.',
    },
    faqs: [
      { question: 'How do I stop melts fusing together?', answer: '<p>Hold the segments apart. Wax softens in warmth and deforms against whatever it touches, so a pack that lets segments press together delivers a single fused block.</p>' },
      { question: 'Will fragrance oils stain the carton?', answer: '<p>Over weeks in storage, yes, on uncoated board. A coated inner face or a sealed clamshell inside the carton keeps it clean.</p>' },
      { question: 'Should the pack have a window?', answer: '<p>It helps, because buyers choose partly on color and color is visible where scent is not. Without one, accurate color reproduction on the panel does that job.</p>' },
      { question: 'What board weight is used?', answer: '<p>Light to moderate — the product is not heavy. The specification is driven by the oil barrier and the print rather than by load.</p>' },
      { question: 'Can you produce cartons around a clamshell?', answer: '<p>Yes, and that is the most common construction. The clamshell contains the wax and the carton carries the branding and the fragrance information.</p>' },
      { question: 'How should scent names be presented?', answer: '<p>Prominently and legibly — it is the primary purchase decision. On a range, keeping the name in the same position across every variant helps shoppers compare.</p>' },
      { question: 'Can one carton cover a whole fragrance range?', answer: '<p>Yes, with the variant differentiated by panel color on a shared dieline. That is far cheaper than a structural variant per scent.</p>' },
      { question: 'Are these suitable for gift sets?', answer: '<p>Yes, with a compartment per fragrance so scents do not transfer between segments in the same cavity.</p>' },
      { question: 'What finishes suit the category?', answer: '<p>Matt or uncoated. Wax melts sit in a homely, natural positioning that gloss tends to work against.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes. The oil barrier is a separate specification from the recycled content, so both claims can hold together.</p>' },
    ],
  },

  'kraft-candle-sleeve-boxes': {
    intro:
      'A candle sleeve is a printed band around a jar or tin the brand already buys. It adds branding without replacing the vessel or committing to a full carton.',
    sections: [
      {
        h2: 'Circumference plus overlap',
        body: [
          'A sleeve is specified as the path around the vessel plus an overlap for the joint. On a straight-sided jar that is simple; on a tapered one the circumference differs top to bottom and the sleeve has to be sized to where it will actually sit.',
        ],
      },
      {
        h2: 'What a sleeve cannot do',
        body: [
          'A sleeve brands the vessel; it does not protect it. A glass candle jar shipped with only a sleeve arrives chipped. Where the candle ships to customers rather than sitting on a shelf, a carton or an outer is still needed.',
        ],
      },
      {
        h2: 'A cheap way to run seasonal variants',
        body: [
          'Because the vessel stays the same, a sleeve is the least expensive way to produce a seasonal or limited edition. The base product is untouched and only the band changes, which suits short runs well.',
        ],
      },
    ],
    link: {
      lead: 'Where the candle needs full enclosure for retail or shipping, ',
      href: '/product/kraft-candle-boxes/',
      anchor: 'candle boxes cover the carton formats',
      tail: '.',
    },
    faqs: [
      { question: 'What measurements do you need for a candle sleeve?', answer: '<p>The circumference of the vessel where the sleeve will sit, plus overlap for the joint. On a tapered jar the circumference differs top to bottom, so the position matters.</p>' },
      { question: 'Does a sleeve protect the candle?', answer: '<p>No. It brands the vessel but offers no protection — a glass jar shipped with only a sleeve arrives chipped. For shipping you still need a carton or an outer.</p>' },
      { question: 'Is a sleeve cheaper than a box?', answer: '<p>Considerably, since it uses a fraction of the material and no structural die. It is also the cheapest way to run a seasonal variant, because the base product is untouched.</p>' },
      { question: 'What board weight is used?', answer: '<p>150 to 250 gsm. Light enough to wrap cleanly, heavy enough not to tear at the joint.</p>' },
      { question: 'Can sleeves fit tins as well as jars?', answer: '<p>Yes. A tin is usually straight-sided, which makes the circumference simpler than a tapered glass jar.</p>' },
      { question: 'How is the sleeve fixed?', answer: '<p>Usually a glued overlap. A sticker closure is an alternative where the sleeve needs to be removable without tearing.</p>' },
      { question: 'How much of the candle should the sleeve cover?', answer: '<p>Enough for the copy, and no more. Buyers want to see wax color and the vessel, so a sleeve that covers most of the jar works against the product.</p>' },
      { question: 'Can you produce very short runs?', answer: '<p>Yes, and this format suits them. Digital print with no plate cost makes a hundred-unit seasonal variant genuinely affordable.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, and an uncoated recycled stock suits the category. Without lamination the sleeve stays fully recyclable.</p>' },
      { question: 'Can the sleeve carry safety information?', answer: '<p>Yes, and candle safety copy is usually expected. It is worth planning the panel around it rather than fitting it in afterwards.</p>' },
    ],
  },

  'kraft-beauty-kit-boxes': {
    intro:
      'A beauty kit holds several unlike items, and it fails visually rather than structurally. Nothing breaks; the set just arrives looking disarranged.',
    sections: [
      {
        h2: 'Level tops make a set look considered',
        body: [
          'Items of different heights sink below the lid line and shift, so the set looks thrown together when it opens even though everything is present and undamaged. Packing the shallow recesses up so every top sits level is the single change that fixes it.',
        ],
      },
      {
        h2: 'Every cavity has to be reachable',
        body: [
          'A recess cut exactly to a small item is one nobody can lift the item out of. Each cavity needs a finger relief, and that only shows up when someone actually unpacks the set.',
        ],
      },
      {
        h2: 'One outer, several fitments',
        body: [
          'Most brands run several kit variants. One outer size with two or three interchangeable inserts keeps a single print run on the expensive component and changes only the die-cut fitment between variants.',
        ],
      },
    ],
    link: {
      lead: 'Where the kit contains fragrance in glass, ',
      href: '/product/kraft-perfume-boxes/',
      anchor: 'perfume cartons cover weight and stability',
      tail: '.',
    },
    faqs: [
      { question: 'How do I stop a kit looking untidy when it opens?', answer: '<p>Pack the shallow recesses up so every item sits at the same level. Mixed heights are what make an assortment look thrown together, even when nothing has moved.</p>' },
      { question: 'Why can I not get items out of the insert?', answer: '<p>Because the cavity was cut exactly to the item. Each recess needs a finger relief, which only shows up when someone actually unpacks the set.</p>' },
      { question: 'Can one box cover several kit variants?', answer: '<p>Yes — one outer size with two or three interchangeable fitments. You keep a single print run on the outer, which is the expensive part.</p>' },
      { question: 'What insert material should I use?', answer: '<p>Board for regular shapes, foam where items are fragile or irregular, molded pulp where recyclability matters and the shapes are awkward.</p>' },
      { question: 'Should the box be rigid?', answer: '<p>For gifting kits, usually. The set is judged on the opening, and rigid holds its shape and its hinge in a way a folding carton does not.</p>' },
      { question: 'How do I stop items rattling?', answer: '<p>A snug cavity per item. Rattling reads as a cheap or incomplete set before the recipient has looked at the contents.</p>' },
      { question: 'Can we print inside the lid?', answer: '<p>Yes, and on a kit it is often the better place to spend. The lid interior is in view for the whole time the box is open.</p>' },
      { question: 'Are these suitable for seasonal gift sets?', answer: '<p>Yes, and overage inside the original run is worth ordering. Seasonal sets have no second run behind them.</p>' },
      { question: 'What board weight is used?', answer: '<p>It follows the filled weight and the lid span. A wide kit lid needs more caliper than the contents weight alone suggests.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, including wrapped rigid constructions and molded pulp fitments, so the whole set can hold a recycled claim.</p>' },
    ],
  },

  /* ---------------------------- luxury ---------------------------- */

  'kraft-rigid-boxes': {
    intro:
      'A rigid box is built by wrapping a printed sheet around a greyboard core by hand. That construction is where both the feel and the cost come from.',
    sections: [
      {
        h2: 'Where the cost actually goes',
        body: [
          'Rigid boxes are hand-assembled rather than machine-glued, and the wrap, the corners and any lining are each separate operations. They also ship assembled rather than flat, which raises freight considerably against a folding carton of the same finished size.',
          'The honest test of whether that is worth it is whether the box is kept. A pack that goes straight into recycling after opening rarely justifies rigid; one a customer stores things in usually does.',
        ],
      },
      {
        h2: 'Artwork for a wrapped box',
        body: [
          'A wrap needs bleed carried around the turn-in as well as to the visible edge, which is a larger artwork area than the outside dimensions suggest. Designs sitting tight to the edge lose detail where the paper folds around the board.',
        ],
      },
      {
        h2: 'Load has to reach the walls',
        body: [
          'Rigid construction looks strong, but a wrapped chipboard base is not structural on its own. For anything heavy the fitment has to transfer load into the walls rather than letting it rest on the base, which is a decision made at specification.',
        ],
      },
    ],
    link: {
      lead: 'For the magnetic closure variant specifically, ',
      href: '/product/kraft-magnetic-closure-boxes/',
      anchor: 'magnetic closure boxes cover magnet strength and lid size',
      tail: '.',
    },
    faqs: [
      { question: 'Why do rigid boxes cost more than folding cartons?', answer: '<p>They are hand-assembled rather than machine-glued, and the wrap, corner finish and lining are each separate operations. They also ship assembled, which raises freight against a flat-packed carton.</p>' },
      { question: 'How much bleed does a wrapped box need?', answer: '<p>More than a flat carton. Bleed carries around the turn-in as well as to the visible edge, so the artwork covers a larger area than the outside dimensions suggest.</p>' },
      { question: 'Can a rigid box carry real weight?', answer: '<p>Yes, provided the fitment transfers the load into the walls rather than resting it on the base. A wrapped chipboard base is not structural on its own.</p>' },
      { question: 'Do rigid boxes ship flat?', answer: '<p>Not normally. Collapsible rigid constructions exist and ship flatter at some cost to how the finished box feels, and we will quote both if freight volume is the deciding factor.</p>' },
      { question: 'Is rigid worth it for my product?', answer: '<p>The honest test is whether the box gets kept. A pack recycled straight after opening rarely justifies it; one a customer stores things in usually does.</p>' },
      { question: 'Which finishes suit rigid kraft?', answer: '<p>Deboss, foil and soft-touch all work. Texture matters more than gloss here because these boxes are handled slowly rather than glanced at.</p>' },
      { question: 'What is the turnaround compared with a folding carton?', answer: '<p>Longer. Hand assembly puts rigid at the longer end of the standard production window, and each applied finish adds a pass.</p>' },
      { question: 'Can you produce rigid boxes with inserts?', answer: '<p>Yes, in board, foam or molded pulp. On a rigid box the fitment is usually where the perceived quality is won or lost.</p>' },
      { question: 'Is there a minimum order?', answer: '<p>The same minimum as the rest of the catalog. What makes very short rigid runs expensive per unit is the hand assembly rather than the minimum.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes for both the core and the wrap. Note that a plastic laminate on the wrap would take the pack out of the paper stream.</p>' },
    ],
  },

  'kraft-magnetic-closure-boxes': {
    intro:
      'A magnetic closure box opens in one movement and shuts with a definite click. That single interaction is what people are paying for.',
    sections: [
      {
        h2: 'Magnet strength follows lid size',
        body: [
          'A large lid on weak magnets springs open in transit; a small lid on strong ones is difficult to open and feels unpleasant. The strength is specified against the lid area and weight rather than chosen as a default.',
          'Send the finished dimensions and we specify the magnets to them.',
        ],
      },
      {
        h2: 'Concealed magnets and where they sit',
        body: [
          'Magnets are set into the flap and the wall during assembly and are invisible in the finished box. Their position has to be clear of any deboss or foil detail, so the placement is agreed at dieline stage rather than discovered at proof.',
        ],
      },
      {
        h2: 'Filmed on camera',
        body: [
          'This closure is common in influencer and subscription packaging because it opens cleanly on video. If that is the use, ship it inside a plain outer so the courier label and handling scuffs land somewhere other than the box being filmed.',
        ],
      },
    ],
    link: {
      lead: 'For unbranded outer protection around a presentation box, ',
      href: '/product/kraft-shipping-boxes/',
      anchor: 'plain shipping boxes protect it in transit',
      tail: '.',
    },
    faqs: [
      { question: 'How strong should the magnets be?', answer: '<p>Specified against lid area and weight. A large lid on weak magnets springs open in transit; a small lid on strong ones is unpleasant to open. Send the finished dimensions and we specify to them.</p>' },
      { question: 'Are the magnets visible?', answer: '<p>No, they are set into the flap and wall during assembly. Their position does need to be clear of any deboss or foil detail, so it is agreed at dieline stage.</p>' },
      { question: 'Why is this closure used for unboxing videos?', answer: '<p>Because it opens in one movement and shuts audibly. Tape being fought open on camera is the most common thing we are asked to fix in that category.</p>' },
      { question: 'Should the box ship inside an outer?', answer: '<p>Yes, if it is being filmed or gifted. A courier label and handling scuffs on the box that is about to be opened undoes the reason for buying it.</p>' },
      { question: 'Can the box hold heavy contents?', answer: '<p>Yes, with a fitment transferring load into the walls. The magnets hold the lid, not the contents, so weight is a separate specification.</p>' },
      { question: 'Do these ship flat?', answer: '<p>Collapsible versions do, at some cost to the feel. Standard rigid magnetic boxes ship assembled, which is a real freight consideration on volume.</p>' },
      { question: 'Which finishes suit this format?', answer: '<p>Soft-touch with foil or blind deboss. The box is handled slowly at the moment of opening, so texture registers more than print gloss.</p>' },
      { question: 'Can you produce these with a ribbon pull?', answer: '<p>Yes, and on a snug lid it helps. Without one a well-fitted magnetic lid can be awkward to lift from a flat surface.</p>' },
      { question: 'What sizes are practical?', answer: '<p>From small jewelry sizes up to large presentation formats. Beyond a certain lid span the magnet count rises to keep the closure even.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes for the core and the wrap. The magnets themselves are not recyclable with the board, which is worth stating if you make a recycling claim.</p>' },
    ],
  },

  'kraft-tube-packaging': {
    intro:
      'A tube uses less material than a box of the same capacity and reads as more considered. What decides whether it is recyclable is the ends, not the body.',
    sections: [
      {
        h2: 'Metal ends break the claim',
        body: [
          'Spiral-wound board tubes are supplied with metal ends by default in most catalogs, and a consumer cannot separate them. That makes the tube unrecyclable as paper no matter how the body is specified.',
          'Paperboard ends have to be specified explicitly. It is the single decision that determines whether a tube supports the environmental claim brands usually choose it for.',
        ],
      },
      {
        h2: 'Sizing by internal diameter',
        body: [
          'Tube walls are thicker than they look, so the internal diameter is meaningfully smaller than the external. Specify by internal diameter and height, or send the product.',
        ],
      },
      {
        h2: 'The wrap seam always shows',
        body: [
          'A tube is either label-wrapped or direct-printed, and either way there is a seam somewhere. Placing it deliberately — behind the pack, away from the logo — is better than letting it fall wherever the wrap ends.',
        ],
      },
    ],
    link: {
      lead: 'For cylindrical presentation in a rigid rather than wound construction, ',
      href: '/product/kraft-cylindrical-boxes/',
      anchor: 'cylindrical rigid boxes are the alternative',
      tail: '.',
    },
    faqs: [
      { question: 'Are paper tubes actually recyclable?', answer: '<p>Only if the ends are paper too. Spiral-wound tubes come with metal ends by default and a consumer cannot separate them, which makes the tube unrecyclable as paper however the body is specified.</p>' },
      { question: 'How do I specify the size?', answer: '<p>By internal diameter and height. Tube walls are thicker than they look, so the internal dimension is meaningfully smaller than the external one.</p>' },
      { question: 'Where does the seam go?', answer: '<p>Wherever you place it deliberately. There is always a seam on a wrapped or printed tube, and placing it behind the pack is better than letting it fall through the logo.</p>' },
      { question: 'Do tubes use less material than a box?', answer: '<p>For the same capacity, generally yes, which is part of why brands choose them. The saving is undone if the ends are metal and the pack cannot be recycled.</p>' },
      { question: 'What products suit a tube?', answer: '<p>Cylindrical or rolled items — candles, supplements, textiles, posters. An angular product in a round tube wastes the space around it.</p>' },
      { question: 'Can tubes be printed directly?', answer: '<p>Yes, or label-wrapped. Direct print avoids the label edge but has a narrower color range on kraft board.</p>' },
      { question: 'Are they strong enough for shipping?', answer: '<p>For light contents, yes. The ends are the weak point rather than the body, so a tube shipped alone should have well-fitted ends and ideally a tamper seal.</p>' },
      { question: 'Can you supply tubes with a window?', answer: '<p>Yes, though cutting a window in a wound tube reduces its structural strength considerably. It is better suited to display than to shipping.</p>' },
      { question: 'What board is used?', answer: '<p>Spiral-wound kraft or white-lined board. Kraft suits natural positioning; white-lined gives better color fidelity for direct print.</p>' },
      { question: 'Is there a minimum order?', answer: '<p>The standard minimum applies. Tube tooling is less costly than a die-cut box, which makes short runs relatively more affordable in this format.</p>' },
    ],
  },

  'kraft-cylindrical-boxes': {
    intro:
      'A cylindrical rigid box is a round lidded container built from wound board with a wrapped finish. It suits round products and reads as more deliberate than a square box.',
    sections: [
      {
        h2: 'The lid fit is the whole impression',
        body: [
          'On a round box the lid either slides smoothly or it binds, and there is very little between the two. The tolerance is tighter than on a rectangular lid because there are no corners to relieve.',
          'This is a format where a physical sample before the run genuinely matters — lid fit cannot be judged from a drawing.',
        ],
      },
      {
        h2: 'Wrapping a curve',
        body: [
          'Artwork wraps continuously around the body, so a design has to work as a loop with no natural start or end. Layouts designed as a flat panel look wrong when the join comes round.',
        ],
      },
      {
        h2: 'What fits well and what does not',
        body: [
          'Round and soft products fill a cylinder efficiently. Anything angular leaves void space at the corners of its own footprint, which wastes material and lets the product move.',
        ],
      },
    ],
    link: {
      lead: 'For a lighter wound construction rather than a rigid one, ',
      href: '/product/kraft-tube-packaging/',
      anchor: 'tube packaging is the lower-cost route',
      tail: '.',
    },
    faqs: [
      { question: 'Why does the lid bind on a round box?', answer: '<p>The tolerance is tighter than on a rectangular lid because there are no corners to relieve. It either slides smoothly or it binds, with very little in between, so a physical sample before the run matters here.</p>' },
      { question: 'How should artwork be laid out?', answer: '<p>As a continuous loop with no natural start or end. Designs laid out as a flat panel look wrong when the join comes round.</p>' },
      { question: 'What products suit a cylindrical box?', answer: '<p>Round and soft items. Anything angular leaves void space at the corners of its own footprint, which wastes material and lets the product move.</p>' },
      { question: 'Is this the same as a tube?', answer: '<p>No. A tube is a lighter wound construction with fitted ends; a cylindrical rigid box has a wrapped finish and a lidded opening, and it costs more.</p>' },
      { question: 'Can you produce them with a window?', answer: '<p>Yes, though a window in a wound wall reduces strength noticeably. It suits display rather than shipping.</p>' },
      { question: 'Which finishes work on a curve?', answer: '<p>Foil and deboss both work, though very fine detail can distort on a tight radius. We would advise on the specific artwork at proofing.</p>' },
      { question: 'How do I stop the contents moving?', answer: '<p>A fitted insert or a pad. In a round box a loose product rotates as well as slides, which marks more surfaces than in a square box.</p>' },
      { question: 'Do these ship assembled?', answer: '<p>Yes, which is a real freight consideration. A cylindrical rigid box cannot be flat-packed.</p>' },
      { question: 'What sizes are practical?', answer: '<p>From small candle sizes upward. Very large diameters become expensive because the wound body and the wrap both scale.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes for both the body and the wrap, and paperboard ends keep the whole pack in the paper stream.</p>' },
    ],
  },

  'kraft-hexagon-boxes': {
    intro:
      'A hexagonal box exists because a square one would not have made the same impression. It costs more to tool and it is chosen for exactly that reason.',
    sections: [
      {
        h2: 'Tooling sits with the first order',
        body: [
          'Every shaped box needs its own cutting die, and that cost lands on the first run and carries forward to reorders in the same shape. Changing the shape later means paying for tooling again, so the shape decision is worth settling before the first order rather than after.',
        ],
      },
      {
        h2: 'Six panels, and none of them is the front',
        body: [
          'A hexagon has no obvious front, which is a design opportunity and a merchandising problem. On a shelf it can face any way, so critical information usually has to appear on more than one panel.',
        ],
      },
      {
        h2: 'How it fills and how it ships',
        body: [
          'Hexagons tessellate reasonably well against each other but poorly against a rectangular outer carton, so shipping cases carry more void than a square pack would. Worth allowing for in the freight calculation.',
        ],
      },
    ],
    link: {
      lead: 'For other angular presentation formats using the same construction, ',
      href: '/product/kraft-octagon-boxes/',
      anchor: 'octagon boxes share the tooling considerations',
      tail: '.',
    },
    faqs: [
      { question: 'Do shaped boxes cost more?', answer: '<p>Yes, mainly in tooling. Each shape needs its own cutting die and that cost lands on the first run, then carries forward to reorders in the same shape.</p>' },
      { question: 'Which panel is the front?', answer: '<p>There is not one, which is both the appeal and the problem. On a shelf a hexagon can face any way, so critical information usually appears on more than one panel.</p>' },
      { question: 'How do they ship?', answer: '<p>With more void than a square pack, because hexagons fit poorly against a rectangular outer carton. It is worth allowing for in the freight calculation.</p>' },
      { question: 'What products suit a hexagonal box?', answer: '<p>Gifting and presentation items where the shape itself is part of the appeal. For pure protection a rectangular box does the job for less.</p>' },
      { question: 'Can they be produced as rigid or folding?', answer: '<p>Both. Folding is cheaper and ships flat; rigid feels more substantial and ships assembled.</p>' },
      { question: 'Is a window possible?', answer: '<p>Yes, on one or more facets. Each aperture removes stiffness from a panel that is already narrower than a square equivalent, so the board may step up.</p>' },
      { question: 'How is the lid constructed?', answer: '<p>Usually a matching hexagonal lift-off lid. The fit tolerance is tighter than on a square box because six edges have to align rather than four.</p>' },
      { question: 'Can we change the shape on a reorder?', answer: '<p>Only by paying for new tooling. That is why the shape is worth settling before the first order rather than after.</p>' },
      { question: 'Do they stack?', answer: '<p>On each other, yes. Mixed with square packs on the same shelf they stack poorly, which is worth knowing if merchandising is shared.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes across both folding and rigid constructions.</p>' },
    ],
  },

  'kraft-octagon-boxes': {
    intro:
      'An octagonal box reads as softer than a square and more substantial than a round one. It is a presentation choice rather than a functional one.',
    sections: [
      {
        h2: 'Eight panels and eight creases',
        body: [
          'More facets means more creases, and each crease is a place the board can crack if the caliper is too heavy for the fold. Heavier board is not automatically better on a shaped box — the crease specification has to suit the number of folds.',
        ],
      },
      {
        h2: 'Where the shape earns its cost',
        body: [
          'An octagon gives more panel faces for print than a square while keeping a nearly round silhouette. That suits products where the pack is displayed rather than stacked — confectionery, candles, gifting.',
        ],
      },
      {
        h2: 'Fitting the product inside',
        body: [
          'The internal shape is not square, so a square product inside an octagon leaves void at four corners. Either the product suits the shape or an insert takes up the difference; otherwise the pack rattles.',
        ],
      },
    ],
    link: {
      lead: 'For a six-sided alternative with fewer creases, ',
      href: '/product/kraft-hexagon-boxes/',
      anchor: 'hexagon boxes are the simpler shaped format',
      tail: '.',
    },
    faqs: [
      { question: 'Does more board weight make a shaped box better?', answer: '<p>Not automatically. More facets means more creases, and each crease can crack if the caliper is too heavy for the fold. The crease specification has to suit the number of folds.</p>' },
      { question: 'What does an octagon give me over a square box?', answer: '<p>More panel faces for print while keeping a nearly round silhouette. It suits products that are displayed rather than stacked.</p>' },
      { question: 'Will a square product fit inside?', answer: '<p>With void at four corners. Either the product suits the shape or an insert takes up the difference, otherwise the pack rattles.</p>' },
      { question: 'Do these need their own cutting die?', answer: '<p>Yes, like any shaped box. The tooling cost lands on the first run and carries forward to reorders in the same shape.</p>' },
      { question: 'Can they be produced as rigid?', answer: '<p>Yes, and rigid suits the format well because the facets stay crisp. Folding versions are cheaper and ship flat.</p>' },
      { question: 'How does the lid fit?', answer: '<p>Usually a matching octagonal lift-off lid, with a tighter alignment tolerance than a square box because eight edges have to meet.</p>' },
      { question: 'Are windows possible?', answer: '<p>Yes on individual facets. Each aperture costs stiffness on a panel narrower than a square equivalent.</p>' },
      { question: 'How do they ship?', answer: '<p>With more void against a rectangular outer than a square pack. Worth allowing for when calculating freight.</p>' },
      { question: 'What products suit this shape?', answer: '<p>Confectionery, candles and gifting, where the pack is part of the presentation rather than purely protective.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, in both folding and rigid constructions.</p>' },
    ],
  },

  'kraft-triangle-boxes': {
    intro:
      'A triangular box is the most awkward shape in the catalog to fill, to ship and to stand up. It is chosen when the silhouette itself is the point.',
    sections: [
      {
        h2: 'Sharp corners are hard to fill',
        body: [
          'A triangle has three acute internal corners that almost no product reaches into. That void is wasted space, and it lets the contents move unless an insert takes it up.',
        ],
      },
      {
        h2: 'Standing and stacking',
        body: [
          'A triangular prism stands stably on its base but does not stack meaningfully, and it fits a rectangular shipping case poorly. For retail display that is acceptable; for volume distribution it is a real cost.',
        ],
      },
      {
        h2: 'Where it works',
        body: [
          'Triangular packs suit single items presented as a gift, and products that are themselves triangular or wedge-shaped — a slice, a wedge of cheese, a folded item. Used for a rectangular product it is decoration paid for in void space.',
        ],
      },
    ],
    link: {
      lead: 'For a shaped format that fills and ships more efficiently, ',
      href: '/product/kraft-hexagon-boxes/',
      anchor: 'hexagon boxes are the more practical option',
      tail: '.',
    },
    faqs: [
      { question: 'What is the drawback of a triangular box?', answer: '<p>Three acute internal corners that almost no product reaches into. That void is wasted space and it lets the contents move unless an insert takes it up.</p>' },
      { question: 'Do they stack?', answer: '<p>Not meaningfully, and they fit a rectangular shipping case poorly. For retail display that is acceptable; for volume distribution it is a real cost.</p>' },
      { question: 'What products suit this shape?', answer: '<p>Items that are themselves wedge-shaped, and single gift items where the silhouette is the point. For a rectangular product it is decoration paid for in void space.</p>' },
      { question: 'Will it stand up on a shelf?', answer: '<p>On its base, yes, and stably. It is the stacking and the shipping efficiency that suffer rather than the standing.</p>' },
      { question: 'Do these need custom tooling?', answer: '<p>Yes. Like any shaped box the die cost lands on the first order and carries forward to reorders in the same shape.</p>' },
      { question: 'Can they be rigid?', answer: '<p>Yes, though the acute corners are harder to wrap cleanly than on a hexagon or a square, which shows in the hand.</p>' },
      { question: 'Is an insert necessary?', answer: '<p>Usually, unless the product is itself wedge-shaped. Without one the contents shift into the corners.</p>' },
      { question: 'Can a window be added?', answer: '<p>Yes on the largest facet. The narrow facets do not have enough area to lose to an aperture.</p>' },
      { question: 'How should they be shipped?', answer: '<p>In a rectangular outer with the void filled, or nested alternately if the design allows. Send the quantity per case and we will advise.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, in both folding and rigid constructions.</p>' },
    ],
  },

  'kraft-pyramid-boxes': {
    intro:
      'A pyramid box is a novelty format — a four-sided taper closing at a point or a small top. It is bought for favors, promotions and small gifting.',
    sections: [
      {
        h2: 'The taper decides the capacity',
        body: [
          'Usable volume in a pyramid is much smaller than the external dimensions suggest, because the taper narrows continuously. A product that fits the base does not necessarily go in through the top.',
          'Send the product rather than a capacity, since the loading route matters as much as the volume.',
        ],
      },
      {
        h2: 'Closure at the apex',
        body: [
          'Pyramid boxes close at the top with a tuck, a tab or a ribbon. The apex is the weakest point of the structure and it is where the pack is picked up, so how it closes decides whether it survives handling.',
        ],
      },
      {
        h2: 'Best at small sizes',
        body: [
          'The format works at favor and sample size. Scaled up, the wasted volume and the instability of a tapering structure both grow, and a conventional box does the job better.',
        ],
      },
    ],
    link: {
      lead: 'For favor packaging in a more conventional construction, ',
      href: '/product/kraft-favor-boxes/',
      anchor: 'favor boxes cover the standard formats',
      tail: '.',
    },
    faqs: [
      { question: 'How much does a pyramid box hold?', answer: '<p>Less than the external dimensions suggest, because the taper narrows continuously. A product that fits the base does not necessarily go in through the top, so send the product rather than a capacity.</p>' },
      { question: 'How does it close?', answer: '<p>At the apex with a tuck, a tab or a ribbon. That point is the weakest part of the structure and it is where people pick the pack up, so the closure choice matters.</p>' },
      { question: 'What size works best?', answer: '<p>Favor and sample size. Scaled up, both the wasted volume and the instability of a tapering structure grow, and a conventional box does the job better.</p>' },
      { question: 'What is this format used for?', answer: '<p>Wedding and party favors, promotional handouts and small gifting, where the shape is the point rather than the protection.</p>' },
      { question: 'Do they stand up reliably?', answer: '<p>On a flat surface, yes. They tip more easily than a cuboid because the mass sits low and the profile is tall.</p>' },
      { question: 'Do these need custom tooling?', answer: '<p>Yes, like any shaped box, with the die cost landing on the first run and carrying forward.</p>' },
      { question: 'Can they be printed all over?', answer: '<p>Yes, though the taper distorts artwork toward the apex. Designs that work as a band around the base hold up better than full-face graphics.</p>' },
      { question: 'Is a ribbon closure practical for volume?', answer: '<p>It is hand-finished, so it adds labor per unit. For a few hundred favors that is usually acceptable; for thousands a tuck is more sensible.</p>' },
      { question: 'How do they ship?', answer: '<p>Flat and erected on site in most cases, which keeps freight reasonable despite the awkward assembled shape.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, and uncoated kraft suits the craft and wedding positioning this format is usually bought for.</p>' },
    ],
  },
}
