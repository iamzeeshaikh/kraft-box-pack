import type { ProductContentMap } from './types'

/**
 * Gift and specialty boxes.
 *
 * Fourteen products that share one thing — someone other than the buyer opens
 * them — and differ in almost everything else. Several are size ranges rather
 * than product types, and those pages have to earn their place by saying what
 * actually changes at that size rather than repeating the range description.
 */
export const giftSpecialtyContent: ProductContentMap = {
  'kraft-gift-boxes-with-lids': {
    intro:
      'A two-piece gift box is a base and a lift-off lid. The fit between them is what the whole format is judged on, and it is decided in fractions of a millimeter.',
    sections: [
      {
        h2: 'The lid either works or it does not',
        body: [
          'Too loose and it slides off in a bag. Too tight and lifting it drags the base up with it, which is worse because it happens in front of the recipient. The band between those two is narrow and it cannot be judged from a drawing.',
          'This is one of the clearest cases in the catalog for a physical sample before committing a run.',
        ],
      },
      {
        h2: 'Lid depth is an appearance decision',
        body: [
          'A shallow lid leaves more of the printed base showing; a deep lid covers most of the box and reads as more substantial. Neither is structurally better, so it is worth settling deliberately at dieline stage rather than accepting a default.',
        ],
      },
      {
        h2: 'Contents that move ruin the reveal',
        body: [
          'The lid comes off and the contents are seen in that instant. Anything that has shifted in transit is what registers first. A fitted insert holds the arrangement, and on a gift box it does more for perceived value than the outer finish.',
        ],
      },
    ],
    link: {
      lead: 'For the sliding-tray alternative where the reveal is horizontal rather than vertical, ',
      href: '/product/kraft-drawer-gift-boxes/',
      anchor: 'drawer gift boxes work differently',
      tail: '.',
    },
    faqs: [
      { question: 'Why does my lid stick or fall off?', answer: '<p>The tolerance between too loose and too tight is narrow on a two-piece box, and it is the thing the format is judged on. It cannot be assessed from a drawing, so a physical sample before the run is worth the step.</p>' },
      { question: 'How deep should the lid be?', answer: '<p>An appearance decision rather than a structural one. A shallow lid shows more of the printed base; a deep lid covers most of the box and reads as more substantial.</p>' },
      { question: 'Do I need an insert?', answer: '<p>If the contents can move, yes. The lid comes off and the contents are seen in that instant, so anything that has shifted in transit is the first thing registered.</p>' },
      { question: 'Rigid or folding?', answer: '<p>Rigid holds its fit better over repeated opening and feels heavier. Folding ships flat and costs considerably less. The deciding question is whether the box gets kept.</p>' },
      { question: 'Can the lid and base be different colors?', answer: '<p>Yes, and it is a straightforward way to add contrast without a second finish, since they are separate components that can run on different stocks.</p>' },
      { question: 'Can a window go in the lid?', answer: '<p>Yes, at the cost of stiffness in the panel that has to hold its shape when lifted. The board usually steps up a grade to compensate.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your contents rather than picked from a stock list. Send what goes in, including anything like tissue or a card that adds height.</p>' },
      { question: 'Do these ship flat?', answer: '<p>Folding versions do. Rigid two-piece boxes ship assembled and nested where the design allows, which still takes more freight volume.</p>' },
      { question: 'Which finishes suit this format?', answer: '<p>Foil and deboss both read well on kraft and each is a single pass. Interior print or a colored lining often does more than either.</p>' },
      { question: 'Can these be posted directly?', answer: '<p>Inside a plain outer. A presentation box posted alone arrives with scuffed corners and a courier label across the lid.</p>' },
    ],
  },

  'kraft-paper-gift-boxes': {
    intro:
      'The general kraft gift carton — a folding box for retail gifting, favors and hampers where the pack has to look deliberate without rigid-box cost.',
    sections: [
      {
        h2: 'A folding carton can still present well',
        body: [
          'A clean die-cut, a properly chosen board and one restrained finish reads far better than a cheap rigid box, at a fraction of the cost and a fraction of the freight. Rigid earns its place where the box is kept; for most gifting it is not.',
        ],
      },
      {
        h2: 'The kraft look is the point',
        body: [
          'Unbleached board with one or two colors has become a deliberate aesthetic rather than a budget compromise. Adding full-color coverage and a laminate works against the reason for choosing kraft, and costs more doing it.',
        ],
      },
      {
        h2: 'Closures that suit the occasion',
        body: [
          'A tuck end is the default. A ribbon pull reads as more considered but is hand-finished, so it adds labor per unit at volume. A magnetic closure is the premium option and pushes the format toward rigid economics.',
        ],
      },
    ],
    link: {
      lead: 'Where the box needs to survive being kept and reused, ',
      href: '/product/kraft-rigid-boxes/',
      anchor: 'rigid boxes hold their shape over years',
      tail: '.',
    },
    faqs: [
      { question: 'Do I need a rigid box for gifting?', answer: '<p>Not usually. A folding carton with a clean die-cut, a good board and one restrained finish reads far better than a cheap rigid box, at a fraction of the cost and freight. Rigid earns its place where the box is kept.</p>' },
      { question: 'Should I add a laminate?', answer: '<p>On kraft it usually works against the look you chose the stock for, and it removes the pack from the paper recycling stream. An aqueous varnish gives protection without either cost.</p>' },
      { question: 'What closure should I choose?', answer: '<p>Tuck end as the default. A ribbon pull reads as more considered but is hand-finished and adds labor at volume; a magnetic closure pushes the cost toward rigid.</p>' },
      { question: 'Can I get a window?', answer: '<p>Yes, filmed or as a plain aperture. A plain aperture keeps the box fully recyclable, which suits the kraft positioning.</p>' },
      { question: 'What sizes are available?', answer: '<p>Cut to your contents. Send what goes in rather than a box size, including tissue or cards that add height.</p>' },
      { question: 'How many colors should I print?', answer: '<p>One or two on kraft. Pale tints and fine detail disappear on the brown substrate, so solid marks and high contrast hold up better than a full-color design.</p>' },
      { question: 'Are these strong enough for shipping?', answer: '<p>For light contents inside an outer carton, yes. Posted alone a folding gift box arrives with crushed corners.</p>' },
      { question: 'Can one design cover several sizes?', answer: '<p>Yes, and sharing board, print and finish across two or three sizes is what makes a range look like a family.</p>' },
      { question: 'Should the interior be printed?', answer: '<p>On a gift box the lid is open for the whole moment that matters, so interior print or a colored lining often does more than the outside.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes across the range, and they suit the positioning. Keeping the pack unlaminated preserves the recycling claim.</p>' },
    ],
  },

  'kraft-round-boxes': {
    intro:
      'A round box suits round products and reads as more considered than a square one. Its whole character is in how the lid fits and how artwork wraps a curve.',
    sections: [
      {
        h2: 'No corners to relieve the fit',
        body: [
          'On a square lid a slight mismatch is absorbed at the corners. On a round one there are no corners, so the lid either slides smoothly or it binds, with very little between. The tolerance is tighter than buyers expect.',
        ],
      },
      {
        h2: 'Artwork as a continuous loop',
        body: [
          'A design wraps all the way round with no natural start or end, and a layout built as a flat panel looks wrong when the join comes back into view. Where a wrap seam is unavoidable, it is placed deliberately rather than left to fall through a logo.',
        ],
      },
      {
        h2: 'What fills a cylinder efficiently',
        body: [
          'Round and soft contents fill the space well. An angular product leaves void at the corners of its own footprint, which wastes material and lets it rotate as well as slide.',
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
      { question: 'Why does a round lid bind?', answer: '<p>There are no corners to absorb a slight mismatch, so the lid either slides smoothly or it binds. The tolerance is tighter than on a square box and it is worth confirming with a sample.</p>' },
      { question: 'How should artwork be laid out?', answer: '<p>As a continuous loop with no natural start or end. A design built as a flat panel looks wrong when the join comes back into view.</p>' },
      { question: 'What products suit a round box?', answer: '<p>Round and soft contents. An angular product leaves void at the corners of its own footprint and rotates as well as slides.</p>' },
      { question: 'Is this the same as a tube?', answer: '<p>No. A tube is a lighter wound construction with fitted ends; a round box has a lidded opening and a wrapped finish, and costs more.</p>' },
      { question: 'Can I have a window?', answer: '<p>Yes, though an aperture in a curved wall reduces strength noticeably, so it suits display rather than shipping.</p>' },
      { question: 'How do I stop contents rotating?', answer: '<p>A fitted pad or insert. In a round box a loose product turns as well as slides, which marks more surfaces than in a square one.</p>' },
      { question: 'Do these ship flat?', answer: '<p>No, they ship assembled, which is a real freight consideration at volume. It is worth factoring into the landed cost.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Specified by internal diameter and height. Wall thickness means the internal space is smaller than the external dimension suggests.</p>' },
      { question: 'Which finishes work on a curve?', answer: '<p>Foil and deboss both work, though very fine detail can distort on a tight radius. We advise on the specific artwork at proofing.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes for both body and wrap, and paperboard ends keep the whole pack in the paper stream.</p>' },
    ],
  },

  'kraft-box-with-window': {
    intro:
      'A window shows the product, and every square inch of aperture takes stiffness out of the panel it sits in. The whole format is managing that trade.',
    sections: [
      {
        h2: 'How large the window can be',
        body: [
          'Past roughly a third of the panel, the board usually has to step up a grade to keep the face from flexing. Below that, most designs cope on the same stock. Where the window falls matters too — one crossing a crease weakens the fold rather than the face.',
        ],
      },
      {
        h2: 'Film or a plain aperture',
        body: [
          'A PET or PLA film protects the product from handling and dust and keeps the pack sealed. A plain die-cut aperture keeps the whole box in the paper recycling stream but leaves the contents touchable in store.',
          'Which is right follows the product rather than the preference — food and cosmetics usually need film; a candle or a toy often does not.',
        ],
        table: {
          caption: 'Window choice',
          head: ['Option', 'Protects', 'Recycling'],
          rows: [
            ['PET film', 'Dust and handling', 'Film should be separated'],
            ['PLA film', 'Dust and handling', 'Compostable where facilities exist'],
            ['Plain aperture', 'Nothing', 'Stays in the paper stream'],
            ['No window', 'Everything', 'Simplest, but shows nothing'],
          ],
        },
      },
      {
        h2: 'Registration between print and cut',
        body: [
          'The aperture and the printed artwork are separate operations, and a small amount of movement between them is normal. Designs with a printed frame tight around the window will show that movement; a little tolerance in the artwork hides it.',
        ],
      },
    ],
    link: {
      lead: 'Where the contents are better shown by a printed image than an aperture, ',
      href: '/product/kraft-paper-gift-boxes/',
      anchor: 'plain gift cartons avoid the stiffness cost',
      tail: '.',
    },
    faqs: [
      { question: 'How large can the window be?', answer: '<p>Past roughly a third of the panel the board usually steps up a grade to stop the face flexing. Where the window falls matters too — one crossing a crease weakens the fold rather than the face.</p>' },
      { question: 'Should I use film or a plain aperture?', answer: '<p>Film protects from dust and handling and keeps the pack sealed; a plain aperture keeps the box fully recyclable but leaves contents touchable. Food and cosmetics usually need film, a candle or a toy often does not.</p>' },
      { question: 'Does the film affect recyclability?', answer: '<p>Yes. A PET film means the pack is no longer straight paper and most curbside systems want it separated first. If a clean claim matters more than protection, a plain aperture is the option.</p>' },
      { question: 'Why is my printed frame not centered on the window?', answer: '<p>The aperture and the print are separate operations and a small amount of movement between them is normal. A little tolerance in the artwork hides it; a tight frame shows it.</p>' },
      { question: 'Can the window be a custom shape?', answer: '<p>Yes, cut on the same die as the box. Very intricate shapes weaken the panel more than a simple one of the same area.</p>' },
      { question: 'Is PLA film a genuine alternative?', answer: '<p>It is compostable where industrial facilities exist, which is not universal. It is a defensible choice but the claim needs qualifying rather than stating flatly.</p>' },
      { question: 'Can I have windows on more than one panel?', answer: '<p>Yes, though each one removes stiffness. Two large windows on adjacent panels usually means stepping the board up.</p>' },
      { question: 'What board weight do you recommend?', answer: '<p>It follows the aperture size as much as the contents weight. Send the window size you want and we specify against it.</p>' },
      { question: 'Do window boxes ship flat?', answer: '<p>Yes, filmed or not, glued along one seam like any folding carton.</p>' },
      { question: 'Are recycled boards suitable?', answer: '<p>Yes, with a caliper step-up. The stiffness loss from recycled fiber and from the aperture compound, so it is worth allowing for both.</p>' },
    ],
  },

  'kraft-candle-boxes': {
    intro:
      'A candle box goes around a glass jar or a tin. The vessel is heavy for its size and the pack is bought largely as a gift.',
    sections: [
      {
        h2: 'Vessel weight sets the board',
        body: [
          'A filled glass candle jar is dense, and a carton graded from its dimensions rather than its weight bows at the base and feels flimsy. Send the filled vessel weight.',
          'Above roughly ten ounces the format usually wants a rigid box or a carton with a fitted collar rather than a plain tuck end.',
        ],
      },
      {
        h2: 'Fragrance oils and the board',
        body: [
          'Fragrance migrates out of wax over months in a warehouse and into uncoated board, leaving a faint stain that appears long after packing. A coated or laminated inner face prevents it.',
        ],
      },
      {
        h2: 'Diameter is what varies most',
        body: [
          'Candle vessels vary far more in diameter than in height across a range, so a carton sized to one jar rarely fits the next. Where a brand runs several vessel sizes, two or three dielines sharing board and print usually cover them.',
        ],
      },
    ],
    link: {
      lead: 'For a printed band around the jar rather than a full carton, ',
      href: '/product/kraft-candle-sleeve-boxes/',
      anchor: 'candle sleeves are the lower-cost route',
      tail: '.',
    },
    faqs: [
      { question: 'What board weight suits a candle box?', answer: '<p>It follows the filled vessel weight rather than the carton size. A filled glass jar is dense, and a carton graded from dimensions alone bows at the base and feels flimsy.</p>' },
      { question: 'Will fragrance stain the carton?', answer: '<p>Over months in storage it can, on uncoated board. Fragrance migrates out of wax and leaves a faint mark that appears long after packing. A coated inner face prevents it.</p>' },
      { question: 'What measurement matters most?', answer: '<p>Diameter. Candle vessels vary far more in diameter than height across a range, so a carton sized to one jar rarely fits the next.</p>' },
      { question: 'When should I move to rigid?', answer: '<p>Above roughly ten ounces the format usually wants rigid or a fitted collar rather than a plain tuck end, both for feel and for stability.</p>' },
      { question: 'Can one carton cover a range of vessels?', answer: '<p>Rarely, because of the diameter variation. Two or three dielines sharing board and print usually cover a range and keep it looking consistent.</p>' },
      { question: 'Is a window worth including?', answer: '<p>It shows wax color, which some brands sell on. It costs stiffness on a panel already carrying a heavy vessel, so the board may step up.</p>' },
      { question: 'Should the carton hold the jar off the base?', answer: '<p>A fitted collar holding the vessel at the shoulder stops it moving and takes load off the base seam. On heavier candles it is worth specifying.</p>' },
      { question: 'What finishes suit candle packaging?', answer: '<p>Foil and deboss on kraft. The category positions on natural and considered, which full-color coverage tends to work against.</p>' },
      { question: 'Do these ship flat?', answer: '<p>Folding cartons do. Rigid candle boxes ship assembled, which matters on freight because the format is bulky for its weight.</p>' },
      { question: 'Are safety warnings required on the box?', answer: '<p>Candle safety copy is generally expected. Plan the panel around it rather than fitting it in afterwards.</p>' },
    ],
  },

  'kraft-candy-boxes': {
    intro:
      'Confectionery packaging has to look appetising, hold shape when part-emptied, and meet food-contact requirements where the sweets touch the board.',
    sections: [
      {
        h2: 'Direct contact or wrapped',
        body: [
          'Whether the sweets touch the board directly or sit inside a wrapper or liner changes which stocks and inks can be used. It is the first question on any confectionery quote, and getting it wrong means re-specifying after the fact.',
        ],
      },
      {
        h2: 'A part-empty box still has to look right',
        body: [
          'Candy boxes are opened repeatedly and emptied gradually. A box that sags once half the contents are gone reads as stale product. A partition or a fitted tray keeps the remaining sweets presented rather than pooled in a corner.',
        ],
      },
      {
        h2: 'Sugar, fat and board',
        body: [
          'Chocolate and caramel carry fat that migrates into uncoated board, leaving marks over time. Hard sweets do not, but they can stick in humidity. The right barrier follows the confectionery type rather than a general food-grade specification.',
        ],
      },
    ],
    link: {
      lead: 'For chocolate specifically, where fat migration and temperature both matter, ',
      href: '/product/kraft-chocolate-packaging-boxes/',
      anchor: 'chocolate packaging covers those requirements',
      tail: '.',
    },
    faqs: [
      { question: 'Do the sweets touch the board directly?', answer: '<p>That is the first question on any confectionery quote, because it changes which stocks and inks are available. Tell us whether contact is direct or through a wrapper or liner.</p>' },
      { question: 'Why does the box sag when half empty?', answer: '<p>Because nothing supports the walls once contents are removed. A partition or fitted tray keeps the remaining sweets presented rather than pooled in a corner.</p>' },
      { question: 'Will chocolate mark the box?', answer: '<p>Fat migrates into uncoated board over time and shows as a mark. A barrier on the inner face prevents it; hard sweets do not have the same issue.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>We specify food-contact compliant boards and inks where the pack touches confectionery directly. Tell us the contact type and the stock list narrows accordingly.</p>' },
      { question: 'Can I have a window?', answer: '<p>Yes, and it suits confectionery well since the product is attractive. Film keeps the sweets protected from handling in store.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your contents and the arrangement you want, including any partition. Send a filled sample if you have one.</p>' },
      { question: 'Do you supply partitions and trays?', answer: '<p>Yes, in board or molded pulp. They are usually specified with the box because they set the internal dimensions.</p>' },
      { question: 'How should the box close for gifting?', answer: '<p>A lift-off lid or a ribbon pull for presentation, a tuck end for volume retail. Confectionery is heavily gifted, so the closure is worth deciding deliberately.</p>' },
      { question: 'Will humidity affect the pack?', answer: '<p>Board absorbs moisture and softens, and hard sweets can stick. Where humidity is a known issue a moisture-resistant treatment is worth specifying.</p>' },
      { question: 'Are recycled boards suitable?', answer: '<p>For non-direct contact, yes. Where the sweets touch the board the grade has to be food-contact compliant, which narrows the recycled options.</p>' },
    ],
  },

  'kraft-cupcake-boxes': {
    intro:
      'A cupcake box has to stop the cake moving and stop the icing touching anything. Those are two separate problems and the insert solves both.',
    sections: [
      {
        h2: 'The insert is the product',
        body: [
          'Without a fitted insert cupcakes slide, tip and press their icing against the wall, and a box of ruined cupcakes is worse than no box. The insert holds each cake in a cup and sets the height clearance over the icing.',
          'Send the cupcake including its decoration at full height. Cakes are quoted by base diameter and it is the swirl on top that decides the box.',
        ],
      },
      {
        h2: 'Height clearance over decoration',
        body: [
          'The lid must not touch the icing. A tall buttercream swirl needs noticeably more clearance than a flat-iced cake, and a box sized to the wrong one flattens every cake in the batch.',
        ],
      },
      {
        h2: 'Grease and moisture together',
        body: [
          'Buttercream is fat and sponge releases moisture, so a cupcake box faces both attacks. A grease-resistant board handles the first; ventilation or a moisture-tolerant stock handles the second, and a sealed box with no ventilation makes sponge go soft.',
        ],
      },
    ],
    link: {
      lead: 'For larger cakes needing a single deep box rather than an insert, ',
      href: '/product/kraft-cake-boxes/',
      anchor: 'cake boxes cover the taller formats',
      tail: '.',
    },
    faqs: [
      { question: 'Do I need an insert?', answer: '<p>Yes. Without one cupcakes slide, tip and press their icing against the wall. The insert holds each cake and sets the clearance over the decoration.</p>' },
      { question: 'What height should I give you?', answer: '<p>The cupcake including its decoration at full height. Cakes are usually quoted by base diameter, and it is the swirl on top that decides the box.</p>' },
      { question: 'Why do my cupcakes arrive flattened?', answer: '<p>The lid is touching the icing. A tall buttercream swirl needs noticeably more clearance than a flat-iced cake, and a box sized to the wrong one flattens the whole batch.</p>' },
      { question: 'Should the box be ventilated?', answer: '<p>For sponge, usually yes. A sealed box traps moisture released by the cake and the sponge goes soft, which is a different problem from grease.</p>' },
      { question: 'What board handles buttercream?', answer: '<p>A grease-resistant board for the fat, with moisture tolerance for the sponge. Cupcake boxes face both attacks at once, which not all food boards do.</p>' },
      { question: 'Can you produce boxes for different counts?', answer: '<p>Yes — 2, 4, 6, 12 and custom counts, each with its own insert. The counts can share one board and print system.</p>' },
      { question: 'Is a window worth having?', answer: '<p>Very often, since decoration is what sells a cupcake. It costs stiffness on the lid, which is already the panel that must not touch the icing.</p>' },
      { question: 'Will the box carry safely?', answer: '<p>With an insert holding each cake, yes. A handle helps for larger counts, though the board around a die-cut handle needs reinforcing when the box is full.</p>' },
      { question: 'Are these suitable for delivery?', answer: '<p>Yes with a secure closure. Delivery adds tilting and movement, so a locking tuck holds better than a plain flap.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Where contact is not direct, yes. For direct contact the grade has to be food-contact compliant, which narrows the options.</p>' },
    ],
  },

  'kraft-pillow-boxes': {
    intro:
      'A pillow box is a curved-end carton that folds from a single blank. It is cheap, distinctive and holds less than it appears to.',
    sections: [
      {
        h2: 'Capacity is smaller than it looks',
        body: [
          'The curved ends take up internal volume, so a pillow box holds noticeably less than its external dimensions suggest. Products sized to the flat measurement will not go in.',
        ],
      },
      {
        h2: 'Best for flat or soft contents',
        body: [
          'The format suits scarves, jewelry, confectionery and small soft goods. Anything rigid and rectangular fights the curve and either will not fit or forces the ends open.',
        ],
      },
      {
        h2: 'The ends spring open under load',
        body: [
          'Overfilled, a pillow box loses its curve and the ends gape. That is the format failing rather than the board, and the answer is a larger box rather than a heavier one.',
        ],
      },
    ],
    link: {
      lead: 'For small favors where a conventional carton suits better, ',
      href: '/product/kraft-favor-boxes/',
      anchor: 'favor boxes hold their shape when filled',
      tail: '.',
    },
    faqs: [
      { question: 'How much does a pillow box hold?', answer: '<p>Less than the external dimensions suggest, because the curved ends take up internal volume. A product sized to the flat measurement will not go in.</p>' },
      { question: 'What contents suit this format?', answer: '<p>Flat or soft items — scarves, jewelry, confectionery, small soft goods. Anything rigid and rectangular fights the curve.</p>' },
      { question: 'Why do the ends gape?', answer: '<p>Overfilling. The box loses its curve and the ends spring open, which is the format failing rather than the board. The answer is a larger box, not a heavier one.</p>' },
      { question: 'Do they ship flat?', answer: '<p>Yes, and they fold from a single blank, which makes them one of the cheapest presentation formats available.</p>' },
      { question: 'Can I add a window?', answer: '<p>Yes, usually on the flat face. The curved ends do not take an aperture well.</p>' },
      { question: 'What board weight is used?', answer: '<p>Light to moderate. Too heavy and the curve will not form cleanly, which is the opposite of the usual rule.</p>' },
      { question: 'Are they suitable for posting?', answer: '<p>Inside an outer, yes. Alone the curved ends crush easily and the box arrives flat.</p>' },
      { question: 'Can they hang on a peg?', answer: '<p>Yes, with a reinforced tab on the flat face. The curve makes them sit slightly proud, which is worth checking against your fixture.</p>' },
      { question: 'What finishes suit them?', answer: '<p>Foil and deboss work well on the flat face. Anything crossing the curve distorts.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, and they form the curve well at the right caliper.</p>' },
    ],
  },

  'kraft-jewelry-boxes': {
    intro:
      'The general jewelry box — an outer format specified as a family so that pieces bought months apart still arrive in packaging that matches.',
    sections: [
      {
        h2: 'Specify a range, not a box',
        body: [
          'Jewelry boxes ordered one at a time as each product launches almost never match, because each order gets optimized for its own budget on the day. Fixing the wrap stock, the interior color and the closure once and varying only the footprint is what makes a collection read as one brand.',
        ],
      },
      {
        h2: 'The interior differs by piece',
        body: [
          'One outer size can serve several pieces; one interior cannot. A ring needs a slotted pillow, a chain needs two fixing points, earrings need a pierced pad. Keeping one outer and specifying interchangeable fitments is both cheaper and better.',
        ],
      },
      {
        h2: 'What customers judge',
        body: [
          'The hinge, the way the lid holds open, and the interior lining. Those are noticed in the moment the box is opened in front of someone; the outer print is noticed far less.',
        ],
      },
    ],
    link: {
      lead: 'For the fitment on its own, cut to a box you already buy, ',
      href: '/product/kraft-jewelry-insert-boxes/',
      anchor: 'jewelry inserts are supplied separately',
      tail: '.',
    },
    faqs: [
      { question: 'Should I order jewelry boxes one at a time?', answer: '<p>Specify them as a family even if you order in stages. Fixing the wrap stock, interior color and closure once means sizes added a year apart still match; boxes ordered separately drift.</p>' },
      { question: 'Can one box hold different piece types?', answer: '<p>One outer can; one interior cannot. A ring needs a slotted pillow, a chain two fixing points, earrings a pierced pad. Keep one outer and change the fitment.</p>' },
      { question: 'What do customers actually judge?', answer: '<p>The hinge, whether the lid stays open, and the interior lining. Those register in the moment the box is opened; the outer print registers far less.</p>' },
      { question: 'Rigid or folding?', answer: '<p>Rigid for anything opened in front of a customer. Folding suits volume gifting and stock movement where the box is not part of the presentation.</p>' },
      { question: 'What interior color works best?', answer: '<p>Whatever contrasts with the metal. A deep matt interior makes bright silver and white gold read clearly; a light interior loses the piece.</p>' },
      { question: 'Can you supply boxes without inserts?', answer: '<p>Yes, and inserts without boxes. Many brands buy one and not the other, so we quote them separately or together.</p>' },
      { question: 'Are these suitable for posting?', answer: '<p>Inside a plain outer. A jewelry box posted alone arrives with scuffed corners and a label across the lid.</p>' },
      { question: 'Can I add a logo?', answer: '<p>Yes, and on a small box a foil block or blind deboss usually reads better than print. The printable area is limited.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to the piece and its fitment. Send the piece or its dimensions including any chain or clasp.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes for both the core and the wrap on rigid constructions, and for folding cartons throughout.</p>' },
    ],
  },

  'kraft-necklace-box': {
    intro:
      'A necklace box has one job that overshadows everything else: stopping the chain arriving in a knot.',
    sections: [
      {
        h2: 'Two fixing points, not one',
        body: [
          'Held at one point a chain swings, and over a journey it works itself into a coil with the clasp caught in the links. Held at two it arrives laid out exactly as it was packed.',
          'A slotted pad does this. A flat pad does not, however snugly the box fits.',
        ],
      },
      {
        h2: 'Long and shallow',
        body: [
          'These run around 8 × 2 × 1 in, sized to the chain laid out rather than to the pendant. A box sized to the pendant leaves the chain coiled, which is where tangling starts.',
        ],
      },
      {
        h2: 'The pendant needs its own seat',
        body: [
          'A pendant left loose on the pad swings against the chain and against the box, marking both. A separate recess for it keeps the two apart.',
        ],
      },
    ],
    link: {
      lead: 'For shorter pieces where the pendant rather than the chain is the focus, ',
      href: '/product/kraft-jewelry-boxes/',
      anchor: 'general jewelry boxes cover the compact formats',
      tail: '.',
    },
    faqs: [
      { question: 'Why do necklaces arrive tangled?', answer: '<p>Because the chain is held at one point, or not at all, and swings in transit. Two fixing points plus a separate seat for the pendant stops it — a tighter box on its own does not.</p>' },
      { question: 'What size is a necklace box?', answer: '<p>Around 8 × 2 × 1 in, sized to the chain laid out rather than to the pendant. Sizing to the pendant leaves the chain coiled, which is where tangling starts.</p>' },
      { question: 'Does the pendant need its own recess?', answer: '<p>Yes. Left loose it swings against the chain and the box and marks both, particularly on plated finishes.</p>' },
      { question: 'Will a flat pad work?', answer: '<p>No. A flat pad gives the chain nothing to grip, so it slides regardless of how snug the box is. The pad has to be slotted.</p>' },
      { question: 'Can one box fit different chain lengths?', answer: '<p>Within a range, yes, if the slots are positioned for the shortest and the longest can loop slightly. Beyond that a second size is needed.</p>' },
      { question: 'What interior color suits a chain?', answer: '<p>A deep matt tone, so a bright chain reads clearly against it. Light interiors lose fine chains entirely.</p>' },
      { question: 'Should it be rigid?', answer: '<p>For retail and gifting, yes. A long shallow lid on folding board flexes when lifted, which is noticeable on this proportion.</p>' },
      { question: 'Can I have a window?', answer: '<p>Yes, though on a long narrow lid an aperture removes a lot of stiffness across the span, so the board usually steps up.</p>' },
      { question: 'Are these suitable for posting?', answer: '<p>Inside a plain outer. Posted alone the long lid arrives creased or crushed at the corners.</p>' },
      { question: 'Can you supply the pad separately?', answer: '<p>Yes, cut to the internal dimensions of a box you already buy. Send the box rather than its external size.</p>' },
    ],
  },

  'kraft-display-boxes': {
    intro:
      'A counter display holds stock in a shop and has to look full at the end of a restocking cycle, not only at the start.',
    sections: [
      {
        h2: 'Graded against a full facing',
        body: [
          'The load is every unit in the display pressing on the base and the front lip, not the weight of one product. Displays that bow in a shop were graded against an empty unit or a single item.',
          'Send the weight of a full facing and the number of facings, and the reinforcement goes where the load actually sits.',
        ],
      },
      {
        h2: 'The front lip takes the wear',
        body: [
          'Customers drag stock forward over the front edge rather than lifting it out. On plain single-wall board that edge softens and folds within days. A doubled or folded lip is the cheapest change that most extends how long a unit looks new.',
        ],
      },
      {
        h2: 'Print the inside back panel',
        body: [
          'As stock sells the interior becomes the visible surface. An unprinted back wall makes a half-full display look abandoned rather than popular.',
        ],
      },
    ],
    link: {
      lead: 'For cases that convert into a shelf display rather than standing alone, ',
      href: '/product/kraft-shelf-ready-packaging/',
      anchor: 'shelf-ready packaging covers the perforated format',
      tail: '.',
    },
    faqs: [
      { question: 'Will the display hold its shape when full?', answer: '<p>That is a structural calculation. Send the weight of a full facing and the number of facings, and we grade the board and reinforce the base and front lip where the load sits.</p>' },
      { question: 'Why does the front edge collapse?', answer: '<p>Customers drag stock forward over it rather than lifting it out. A doubled or folded front lip is the cheapest change that most extends how long a unit looks new.</p>' },
      { question: 'Should the inside be printed?', answer: '<p>Yes. As stock sells the interior back wall becomes the visible surface, and an unprinted one makes a half-full display look abandoned.</p>' },
      { question: 'Can displays ship flat?', answer: '<p>Yes, and for multi-site rollouts it is usually right. The structure needs to assemble only one way, or some sites will build it wrong and leave it that way.</p>' },
      { question: 'How many facings should it hold?', answer: '<p>Enough to look full at the end of a restocking cycle rather than only at the start.</p>' },
      { question: 'Can you match a retailer specification?', answer: '<p>Yes. Send the published dimensions, pallet pattern and barcode placement and the structure is designed inward from them.</p>' },
      { question: 'What board is used?', answer: '<p>Usually E or B flute corrugated, litho-laminated where print quality matters. Flute choice follows the load rather than the graphics.</p>' },
      { question: 'Do you supply the display and the product cartons together?', answer: '<p>Yes, and specifying them together usually costs less, because cartons that fit exactly let us drop a grade on the display.</p>' },
      { question: 'Can displays be reused for a second promotion?', answer: '<p>Corrugated loses strength with handling, so a unit built for one cycle should not be relied on for a second under the same load.</p>' },
      { question: 'How long do these take to produce?', answer: '<p>Structural work with assembly sits at the longer end of the standard window. We confirm a firm date with the quote.</p>' },
    ],
  },

  'small-kraft-boxes': {
    intro:
      'Small boxes are constrained by manufacture rather than by design. Below a certain size the die and the gluing line, not the artwork, decide what is possible.',
    sections: [
      {
        h2: 'Tolerances tighten as size drops',
        body: [
          'A millimeter of variation is invisible on a large carton and significant on a small one. Gluing and folding tolerances stay roughly constant regardless of box size, so proportionally they matter far more here.',
          'That makes a structural sample before print more valuable on small formats than on any other size.',
        ],
      },
      {
        h2: 'How small is practical',
        body: [
          'The limit is set by what the cutting die and the gluing line can hold rather than by policy. Very small boxes are possible, but below a certain point hand-assembly becomes necessary and the unit cost changes character.',
        ],
      },
      {
        h2: 'One mark is the design',
        body: [
          'The printable area on a small box carries a mark and very little else. Fine detail and pale tints disappear on kraft at this scale, so a solid logo or a deboss holds up where a full design does not.',
        ],
      },
    ],
    link: {
      lead: 'For the smallest formats in the range, ',
      href: '/product/mini-kraft-boxes/',
      anchor: 'mini kraft boxes cover the sizes below this',
      tail: '.',
    },
    faqs: [
      { question: 'How small can you make a box?', answer: '<p>The limit is what the cutting die and gluing line can hold rather than a policy. Below a certain point hand assembly becomes necessary and the unit cost changes character.</p>' },
      { question: 'Why does a sample matter more on small boxes?', answer: '<p>Because gluing and folding tolerances stay roughly constant regardless of box size, so proportionally they matter far more. A millimeter invisible on a large carton is significant here.</p>' },
      { question: 'How much can I print?', answer: '<p>A mark and very little else. Fine detail and pale tints disappear on kraft at this scale, so a solid logo or a deboss holds up where a full design does not.</p>' },
      { question: 'What board weight suits a small box?', answer: '<p>Light board is adequate for the contents but can feel flimsy. The specification often follows perceived quality rather than load.</p>' },
      { question: 'Can small boxes have windows?', answer: '<p>Yes, though the aperture takes a large proportion of a small panel, so the board usually steps up a grade.</p>' },
      { question: 'Do these ship flat?', answer: '<p>Yes, glued along one seam like any folding carton, which keeps freight low relative to the quantity.</p>' },
      { question: 'Are they suitable for retail pegs?', answer: '<p>Yes, with a reinforced hang tab. On a small panel the reinforcement matters more because there is less board around the hole.</p>' },
      { question: 'Can I order several small sizes together?', answer: '<p>Yes, and sharing board and print across sizes keeps the setup cost down while giving a consistent look.</p>' },
      { question: 'What are these usually used for?', answer: '<p>Jewelry, favors, samples, cosmetics and small hardware — anywhere the product is small enough that a standard carton would ship mostly air.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes across the range.</p>' },
    ],
  },

  'mini-kraft-boxes': {
    intro:
      'Mini boxes are the smallest practical folding format, used for favors, samples and single small items where anything larger would ship mostly air.',
    sections: [
      {
        h2: 'Hand assembly territory',
        body: [
          'Below a certain size a box cannot be machine-glued reliably and is hand-assembled instead. That changes the cost structure — labor becomes a larger share than material, and quantity discounts flatten out sooner than on a standard carton.',
        ],
      },
      {
        h2: 'What actually fits',
        body: [
          'Internal volume at this scale is much less than the external dimensions suggest, because board thickness is a meaningful proportion of the box. Send the product rather than a target size.',
        ],
      },
      {
        h2: 'Where they earn their place',
        body: [
          'Favors, samples, jewelry and small confectionery. Used for anything larger they look undersized, and the low material cost is offset by the assembly labor.',
        ],
      },
    ],
    link: {
      lead: 'For sizes above this where machine gluing is straightforward, ',
      href: '/product/small-kraft-boxes/',
      anchor: 'small kraft boxes are the next size up',
      tail: '.',
    },
    faqs: [
      { question: 'How small can these go?', answer: '<p>To the point where machine gluing stops being reliable, after which they are hand-assembled. That changes the cost structure — labor becomes a larger share than material.</p>' },
      { question: 'Why is the internal space smaller than I expected?', answer: '<p>Board thickness is a meaningful proportion of a very small box. Send the product rather than a target box size and we build outward from it.</p>' },
      { question: 'Do quantity discounts still apply?', answer: '<p>They flatten out sooner than on a standard carton, because hand assembly is a per-unit labor cost rather than a setup cost.</p>' },
      { question: 'What are mini boxes used for?', answer: '<p>Favors, samples, jewelry and small confectionery — anywhere a standard carton would ship mostly air.</p>' },
      { question: 'Can they be printed?', answer: '<p>Yes, though at this size one mark is realistically the whole design. Deboss and foil often read better than print.</p>' },
      { question: 'Is a window possible?', answer: '<p>Technically yes, though the aperture takes a very large share of the panel and weakens it considerably. It is rarely worth it at this scale.</p>' },
      { question: 'Do they arrive assembled?', answer: '<p>Usually flat, with assembly on your side. Where we hand-assemble them they ship made up, which affects freight volume.</p>' },
      { question: 'What board weight is used?', answer: '<p>Light, since a heavier caliper will not fold cleanly at this scale. This is one of the few places where heavier board is actively worse.</p>' },
      { question: 'Can I order a mixed run of sizes?', answer: '<p>Yes, sharing print and board. Each size needs its own die, so the tooling cost scales with the number of sizes rather than the quantity.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, at the lighter calipers this format needs.</p>' },
    ],
  },

  'large-kraft-gift-boxes': {
    intro:
      'A large gift box has one problem that small ones do not: panel span. Everything about specifying it follows from how far the board has to reach unsupported.',
    sections: [
      {
        h2: 'Span, not weight, sets the board',
        body: [
          'A large lid flexes across its middle regardless of what is inside. Buyers grade the board from the contents weight and end up with a lid that bows when lifted, which reads as cheap on a box bought to impress.',
          'On large formats the caliper follows the span. It is the same rule as certificate boxes and for the same reason.',
        ],
      },
      {
        h2: 'Filling the volume',
        body: [
          'A large box with a small product in it looks worse than a correctly sized smaller box. Where contents do not fill the space, an insert or a raised platform brings the product up to where it is seen rather than leaving it at the bottom.',
        ],
      },
      {
        h2: 'Freight becomes the cost',
        body: [
          'At this size the box costs less to make than to move, particularly in rigid construction which ships assembled. A folding construction that flat-packs is worth considering unless the box has to feel rigid.',
        ],
      },
    ],
    link: {
      lead: 'For hampers where the contents vary in height, ',
      href: '/product/kraft-gift-hamper-boxes/',
      anchor: 'hamper boxes cover compartmented interiors',
      tail: '.',
    },
    faqs: [
      { question: 'Why does a large lid bow when lifted?', answer: '<p>Panel span rather than contents weight. A large lid flexes across its middle regardless of what is inside, so on big formats the caliper follows the span.</p>' },
      { question: 'My product does not fill the box — what should I do?', answer: '<p>Use an insert or a raised platform to bring the product up to where it is seen. A large box with a small item at the bottom looks worse than a correctly sized smaller box.</p>' },
      { question: 'Is rigid worth it at this size?', answer: '<p>Only if the box has to feel rigid, because at large sizes it costs more to move than to make. A flat-packing folding construction is worth considering.</p>' },
      { question: 'What board weight do you recommend?', answer: '<p>Specified against the lid span first and the contents weight second. Send the finished dimensions and we grade from those.</p>' },
      { question: 'Can large boxes be shipped assembled?', answer: '<p>They can, at a real freight cost. Where the box ships to a customer rather than a shop, a flat-packed construction usually makes more sense.</p>' },
      { question: 'Do you supply handles?', answer: '<p>Yes, die-cut or fitted. On a large filled box the board around the handle needs reinforcing, since that is where the load concentrates.</p>' },
      { question: 'Are windows possible?', answer: '<p>Yes, though on an already-spanning panel an aperture makes the flex worse. The board steps up further than it would on a small box.</p>' },
      { question: 'What closure suits a large gift box?', answer: '<p>A lift-off lid or ribbon for presentation. Magnetic closures need more magnets as the lid grows to hold it evenly.</p>' },
      { question: 'Can these be stacked in storage?', answer: '<p>With the board graded for it, yes. Send the stack height because a large empty box carries surprisingly little on its own.</p>' },
      { question: 'Are recycled boards suitable?', answer: '<p>Yes, with a caliper step-up. On a large span the stiffness difference between recycled and virgin board is noticeable.</p>' },
    ],
  },
}
