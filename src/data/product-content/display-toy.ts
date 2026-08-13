import type { ProductContentMap } from './types'

/**
 * Display packaging and toy packaging.
 *
 * Display units are a structural calculation — they hold weight, in public,
 * for weeks. Toy packaging is a shelf-decision problem: an adult is deciding
 * in front of the fixture what is inside and whether it is safe, and both
 * have to be answerable without opening the pack.
 */
export const displayToyContent: ProductContentMap = {
  /* ---------------------------- display ---------------------------- */

  'kraft-pop-display-boxes': {
    intro:
      'A point-of-purchase unit sits on a counter or an end cap holding stock that people take from it all day. It has to look full at the end of a restocking cycle, not only at the start.',
    sections: [
      {
        h2: 'Grade it against a full facing, not an empty box',
        body: [
          'The load is the weight of every unit in the display pressing on the base and the front lip, not the weight of one product. Displays that bow in a shop were almost always graded against an empty unit.',
          'Send the weight of a full facing and the number of facings. The reinforcement then goes where the load actually sits, which is the base and the front edge rather than the walls.',
        ],
      },
      {
        h2: 'The front lip is what fails',
        body: [
          'Customers pull stock forward and over the front edge rather than lifting it out. That edge takes repeated drag from the product and from hands, and on plain single-wall board it softens and folds within days.',
          'A doubled or folded front lip costs very little and is the single change that most extends how long a unit looks new.',
        ],
      },
      {
        h2: 'Assembly in store',
        body: [
          'Units going to multiple sites ship flat and are put together by staff who have not seen the instructions. A structure that only assembles one way is worth more than one that assembles cleverly — anything ambiguous gets built wrong at some of the sites and stays wrong.',
        ],
      },
    ],
    link: {
      lead: 'Where the requirement is a case that opens into a shelf rather than a standalone unit, ',
      href: '/product/kraft-shelf-ready-packaging/',
      anchor: 'shelf-ready packaging covers the perforated format',
      tail: '.',
    },
    faqs: [
      { question: 'Will the display hold its shape when it is full?', answer: '<p>That is a structural calculation rather than a hope. Send the weight of a full facing and the number of facings, and we grade the board and reinforce the base and front lip where the load actually sits.</p>' },
      { question: 'Why does the front edge collapse first?', answer: '<p>Because customers drag stock forward over it rather than lifting it out. A doubled or folded front lip costs very little and is the change that most extends how long a unit looks new.</p>' },
      { question: 'Can these ship flat and be assembled in store?', answer: '<p>Yes, and for multi-site rollouts it is usually the right choice. The structure needs to assemble only one way — anything ambiguous gets built wrong at some sites and stays wrong.</p>' },
      { question: 'How many facings should a counter unit hold?', answer: '<p>Enough to still look full at the end of a restocking cycle. A display that empties visibly halfway through the week reads as an unpopular product rather than a busy one.</p>' },
      { question: 'Should the inside be printed?', answer: '<p>On units that empty during the day, yes. The inside back panel becomes the visible surface as stock goes down, and an unprinted one makes the display look abandoned.</p>' },
      { question: 'What is the difference between a counter and a floor unit?', answer: '<p>Height and load path. A floor unit carries its own weight over a much longer span and needs a reinforced base and often an internal support column; a counter unit does not.</p>' },
      { question: 'Can you produce a display to a retailer specification?', answer: '<p>Yes. Grocery and pharmacy chains publish dimensions, pallet patterns and barcode placement. Send the requirement and the structure is designed inward from it rather than adjusted afterwards.</p>' },
      { question: 'Do you supply the display and the product cartons together?', answer: '<p>Yes, and specifying them together usually costs less. Cartons that fit the display exactly let us drop a grade on the display itself, because the stock helps carry the load.</p>' },
      { question: 'What board is used for a POP display?', answer: '<p>Usually E or B flute corrugated, litho-laminated where print quality matters. The flute choice follows the load rather than the graphics.</p>' },
      { question: 'How long do display units take to produce?', answer: '<p>Structural work with assembly sits at the longer end of the standard production window. We confirm a firm date in writing with the quote rather than quoting a range.</p>' },
    ],
  },

  'kraft-shelf-ready-packaging': {
    intro:
      'A shelf-ready case arrives at a store as a transit box and becomes a shelf display in one movement. The perforation that separates those two jobs is the hardest part of the structure to get right.',
    sections: [
      {
        h2: 'Getting the perforation right',
        body: [
          'Too weak and the case opens in transit, so a pallet arrives with stock loose. Too strong and staff tear it badly, leaving a ragged unit facing customers for the rest of the day. There is a narrow band between those two and it is decided at dieline stage, not afterwards.',
          'This is the clearest case in the whole catalog for approving a physical sample before committing to a run. A perforation cannot be judged from a drawing.',
        ],
      },
      {
        h2: 'Retailer specifications are usually fixed',
        body: [
          'If you supply a grocery chain, case dimensions, pallet pattern, barcode placement and often the opening method are published and non-negotiable. Send the requirement at the start and the structure is designed inward from it.',
          'Retrofitting a case to a retailer specification after the dieline is cut generally means starting again.',
        ],
      },
      {
        h2: 'What the shelf sees',
        body: [
          'Once opened, the front panel and the inside of the back wall are what customers look at. The transit graphics on the outside of the case are largely irrelevant to the shopper and relevant only to the warehouse.',
        ],
        table: {
          caption: 'Which panel does which job',
          head: ['Panel', 'Seen by', 'What it needs'],
          rows: [
            ['Outer top and sides', 'Warehouse and drivers', 'Product code, count, orientation'],
            ['Front fascia', 'Shoppers', 'Brand and product identification'],
            ['Inside back wall', 'Shoppers, as stock empties', 'Print, or it reads as empty'],
            ['Base', 'Nobody', 'Strength — it carries the whole facing'],
          ],
        },
      },
    ],
    link: {
      lead: 'For freestanding units rather than cases that convert, ',
      href: '/product/kraft-pop-display-boxes/',
      anchor: 'point-of-purchase displays are the other route',
      tail: '.',
    },
    faqs: [
      { question: 'How does a shelf-ready case open?', answer: '<p>Along a designed perforation. Too weak and it fails in transit; too strong and staff tear it badly. It is set at dieline stage, and we strongly recommend approving a physical sample before a run.</p>' },
      { question: 'Do I need to match a retailer specification?', answer: '<p>If you supply a grocery or pharmacy chain, almost certainly. Case dimensions, pallet pattern, barcode placement and often the opening method are published and fixed. Send it and we design inward from it.</p>' },
      { question: 'Which panels should be printed?', answer: '<p>The front fascia and the inside back wall, because those are what shoppers see. The outer transit panels only need product code, count and orientation for the warehouse.</p>' },
      { question: 'Why print the inside of the case?', answer: '<p>Because as stock sells the back wall becomes the visible surface. An unprinted interior makes a half-full facing look like an empty one.</p>' },
      { question: 'Can one case work for transit and display?', answer: '<p>That is exactly what this format is for, but it is a compromise in both directions — the case is stronger than a display needs and weaker than a pure transit box. The perforation is where that compromise is managed.</p>' },
      { question: 'What board grade is used?', answer: '<p>Usually B or C flute, chosen against the stacking height on the pallet rather than the weight of one case. Send the stack height and we specify against it.</p>' },
      { question: 'Will the case survive a full pallet stack?', answer: '<p>With the right grade, yes. The failure mode to design against is corner crush at the bottom of the pallet, which is about edge crush rating rather than board thickness.</p>' },
      { question: 'Can the perforation be tested before production?', answer: '<p>Yes, and it should be. A structural sample lets you open one the way store staff will, which is the only reliable test of whether the strength is right.</p>' },
      { question: 'Do you supply these in multiple case counts?', answer: '<p>Yes. Different counts need different dielines but can share the board, print system and perforation specification, which keeps the setup cost down across the range.</p>' },
      { question: 'How is the case labeled for the warehouse?', answer: '<p>Product code, unit count and an orientation mark on the outer panels. Tell us if your distributor requires a specific label position and we will leave the area clear.</p>' },
    ],
  },

  'kraft-hanging-display-boxes': {
    intro:
      'A hanging pack lives on a peg, held by one hole taking the entire weight of the product. Everything about the format follows from that single point of stress.',
    sections: [
      {
        h2: 'The board around the hole is the failure point',
        body: [
          'Packs do not fail at the panel, they fail at the hang hole — the board tears from the hole outward and the pack drops off the peg. Reinforcing the whole panel is the expensive way to fix it; reinforcing the area around the hole is the cheap one.',
          'A euro slot spreads the load over a wider bearing surface than a round hole and is worth specifying for anything with real weight.',
        ],
      },
      {
        h2: 'Weight limits and where they bite',
        body: [
          'Hanging packs suit light products. Once weight climbs, the pack either needs a reinforced tab, a heavier board, or a different format entirely — and at that point a counter display or a shelf tray is usually the better answer.',
          'Tell us the filled weight rather than the product weight. The pack, the insert and any literature all hang from the same hole.',
        ],
      },
      {
        h2: 'Facing width on a crowded peg',
        body: [
          'On a peg wall a pack is seen edge-on until a shopper is close. The top third of the front panel, above the products in front of it, is what does the identifying — so the brand belongs there rather than centered.',
        ],
      },
    ],
    link: {
      lead: 'For small items that suit a peg but need a window to show the product, ',
      href: '/product/kraft-box-with-window/',
      anchor: 'window boxes can be built with a hang tab',
      tail: '.',
    },
    faqs: [
      { question: 'Why do hanging packs tear off the peg?', answer: '<p>The board tears from the hang hole outward — the panel itself is rarely the problem. Reinforcing the area around the hole fixes it far more cheaply than heavier board across the whole pack.</p>' },
      { question: 'What is a euro slot and should I use one?', answer: '<p>A keyhole-shaped slot that spreads the load over a wider bearing surface than a round hole. For anything with real weight it is worth specifying.</p>' },
      { question: 'How heavy can a hanging pack be?', answer: '<p>Lighter than most buyers expect, and the figure that matters is the filled weight including insert and any literature. Past a certain point a counter display or shelf tray is the better format.</p>' },
      { question: 'Where should the branding sit on the panel?', answer: '<p>In the top third. On a crowded peg wall only the part above the packs in front is visible until a shopper is close, so centring the brand hides it.</p>' },
      { question: 'Can a hanging pack have a window?', answer: '<p>Yes, though the window removes stiffness from the panel that is already carrying the hang load. The board usually steps up a grade and the aperture is kept clear of the tab.</p>' },
      { question: 'Do these ship flat?', answer: '<p>Yes, flat and glued along one seam, so they pop open on your packing line. That keeps freight cost low relative to the volume of a filled pack.</p>' },
      { question: 'Can you add a header card instead?', answer: '<p>Yes. A folded header stapled or glued over a bag or pack is the alternative where the product itself cannot take a hole, and it carries the hang tab instead.</p>' },
      { question: 'Will the pack sit flat against the peg wall?', answer: '<p>If the contents are evenly distributed, yes. A pack that is thicker at the bottom tips forward on the peg, which is a filling question as much as a structural one.</p>' },
      { question: 'Are these suitable for multipacks?', answer: '<p>Yes, with an insert holding the units so the weight is spread rather than settling into one corner. Uneven weight is what makes a multipack hang crooked.</p>' },
      { question: 'What board is used?', answer: '<p>Usually a folding carton board for light items, stepping to E flute where the filled weight or the window size demands more stiffness.</p>' },
    ],
  },

  'kraft-retail-display-trays': {
    intro:
      'A display tray is the open-topped base a group of products sits in, on a shelf or inside a larger unit. It is the least visible part of a display and usually the part that fails.',
    sections: [
      {
        h2: 'The base carries everything',
        body: [
          'A tray holds its whole facing directly on the base panel for the entire time it is on shelf. Walls contribute almost nothing to that. A single glued base seam under a heavy facing eventually opens, and the tray sags in the middle.',
          'A full-overlap or tray-style base carries the load properly. It is a small cost against a display that sits in a shop for a month.',
        ],
      },
      {
        h2: 'Wall height against product visibility',
        body: [
          'Higher walls hold the products more securely and hide more of them. Lower walls show the product and let units tip. The right height is usually just below the point where the product identifies itself — for a carton, below the brand block.',
        ],
      },
      {
        h2: 'Trays inside cases',
        body: [
          'Where a tray sits inside an outer case, its external dimensions have to fit the case internally, and case dimensions are quoted externally almost everywhere. That mismatch is the most common reason a tray arrives that will not go in.',
        ],
      },
    ],
    link: {
      lead: 'Where the tray and the case need to be one component that converts, ',
      href: '/product/kraft-shelf-ready-packaging/',
      anchor: 'shelf-ready packaging combines both',
      tail: '.',
    },
    faqs: [
      { question: 'Why does the tray sag in the middle?', answer: '<p>The base is carrying the whole facing on its own and the walls contribute almost nothing. A full-overlap or tray-style base fixes it; a single glued seam under a heavy facing eventually opens.</p>' },
      { question: 'How high should the walls be?', answer: '<p>Usually just below the point where the product identifies itself — for a carton, below the brand block. Higher walls hold products more securely but hide them.</p>' },
      { question: 'Do I send internal or external dimensions?', answer: '<p>If the tray goes inside a case, send the case internal dimensions. Case sizes are quoted externally almost everywhere, and that mismatch is the usual reason a tray will not fit.</p>' },
      { question: 'Can trays be printed?', answer: '<p>Yes, though only the front wall and the interior are seen once filled. Printing the outer sides of a tray that sits inside a case is spend with no return.</p>' },
      { question: 'Are these suitable for loose product?', answer: '<p>Yes, with wall height chosen against how the product settles. Loose items redistribute as stock is taken, so a tray that looks tidy when full can look poor when half empty.</p>' },
      { question: 'Do trays ship flat?', answer: '<p>Usually, glued along one seam and erected on your line. A pre-glued tray that arrives assembled costs more in freight because it ships as volume rather than as flat stock.</p>' },
      { question: 'What board grade suits a tray?', answer: '<p>It follows the facing weight and the shelf time. Send both — a tray holding a light facing for a week is a different specification from one holding jars for a month.</p>' },
      { question: 'Can you cut finger holes for removal?', answer: '<p>Yes, and on deeper trays they are worth having. Without them staff tip the tray to remove it, which is what damages the front wall.</p>' },
      { question: 'Will trays stack for storage?', answer: '<p>Nested empty, yes. Stacked full, only if the board is graded for the weight above, so tell us if filled trays are stored on top of one another.</p>' },
      { question: 'Can trays match an existing display unit?', answer: '<p>Yes. Send the unit or its internal dimensions and we cut the tray to sit in it properly, including any clearance the assembly needs.</p>' },
    ],
  },

  /* ------------------------------ toy ------------------------------ */

  'kraft-toy-packaging-boxes': {
    intro:
      'Toy packaging is bought by an adult standing in front of a shelf, deciding quickly what is inside and whether it is suitable. Both answers have to be available without opening the box.',
    sections: [
      {
        h2: 'Showing the contents',
        body: [
          'A window does more work in this category than in almost any other, because the purchase decision happens at the fixture. Where a window is impractical — because the toy is loose, or the pack has to stack — a clear photographic panel serves the same purpose at lower cost.',
          'What does not work is a description alone. An adult choosing between two boxes will pick the one they can see into.',
        ],
      },
      {
        h2: 'Age grading and safety marks',
        body: [
          'Age grading and small-parts warnings are usually required and are market-specific. They are also the second thing the buyer looks for after the product itself, so hiding them on a back panel works against you as well as against compliance.',
          'Send the marks that apply at quoting and we block the panel area on the dieline before design time is committed.',
        ],
      },
      {
        h2: 'Boxes that get kept',
        body: [
          'A lot of toy packaging is reused for storage by the household, which means the closure is judged over months. A tuck that has torn by the third opening pushes the toy into a drawer and the box into the bin.',
        ],
      },
    ],
    link: {
      lead: 'For games and puzzles specifically, where the lid is opened repeatedly over years, ',
      href: '/product/kraft-board-game-packaging-boxes/',
      anchor: 'board game packaging uses a different lid construction',
      tail: '.',
    },
    faqs: [
      { question: 'Should toy packaging have a window?', answer: '<p>Usually, because the buying decision happens in front of the shelf and an adult will choose the box they can see into. Where a window is impractical, a clear photographic panel does the same job at lower cost.</p>' },
      { question: 'What safety marks have to appear?', answer: '<p>Age grading and small-parts warnings are usually required and vary by market. Send the ones that apply and we block the panel area on the dieline before artwork starts.</p>' },
      { question: 'Where should the age grading go?', answer: '<p>On the front, near the product identification. It is the second thing a buyer looks for, so putting it on a back panel works against the sale as well as against compliance.</p>' },
      { question: 'Will the box survive being reused for storage?', answer: '<p>With a locking tuck or a lift-off lid, yes. A plain tuck flap tears after a handful of openings, and at that point the box is thrown away.</p>' },
      { question: 'Can you produce packaging for irregular shapes?', answer: '<p>Yes, with a fitted insert holding the toy in position. An irregular item loose in a rectangular box shifts and makes the pack look half empty.</p>' },
      { question: 'How do I keep the cost down on a low-priced toy?', answer: '<p>Fewer press passes and a simpler structure. Two colors on kraft with a well-made die-cut usually does more at this price point than four colors with a finish.</p>' },
      { question: 'Is a window film required, or can the aperture be open?', answer: '<p>Either. An open die-cut aperture keeps the pack in the paper recycling stream; a PET film protects the toy from handling and dust. The choice usually follows whether the product can be touched in store.</p>' },
      { question: 'Can one box size cover several products?', answer: '<p>Often two or three sizes cover a range while sharing one board and print system, which keeps a consistent shelf presence without shipping empty space.</p>' },
      { question: 'Do you print the inside of toy boxes?', answer: '<p>It is worth it where the box is part of the play or the storage afterwards, which is common with building sets and playsets.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes across this range. Recycled fiber is slightly less stiff at the same caliper, so on a large window panel we usually step up a grade.</p>' },
    ],
  },

  'kraft-board-game-packaging-boxes': {
    intro:
      'A game box is opened and closed hundreds of times over years, which is a harder mechanical life than almost any other pack in the catalog. The lid is a wear component.',
    sections: [
      {
        h2: 'The lid is what wears out',
        body: [
          'A telescoping lid — a separate top that slides over a base — survives repeated opening because nothing folds. A tuck flap creased for a single opening splits within weeks of real use, and once it splits the box is held together with tape for the rest of its life.',
          'The crease specification on the lid matters more here than the board weight. A heavier board with the wrong crease still fails.',
        ],
      },
      {
        h2: 'Depth follows the components, not the board',
        body: [
          'The playing board folds to a fixed footprint, which sets the length and width. Depth is then set by everything else — the insert, the cards, the tokens, the rulebook — and that stack is almost always taller than a first estimate.',
          'Send the components, or a filled prototype. Depth is where game boxes go wrong.',
        ],
      },
      {
        h2: 'Holding components in place',
        body: [
          'A game with loose pieces sounds broken when it is picked up and looks incomplete when it is opened. A compartmented insert with a seat for each component type does more for perceived quality here than any finish on the outside.',
        ],
        list: {
          title: 'What the insert usually has to separate',
          items: [
            'Cards, held so they cannot fan out and bend',
            'Tokens and counters, in a compartment deep enough not to overflow',
            'Dice, which travel furthest if left loose',
            'The rulebook, flat rather than folded against the lid',
          ],
        },
      },
    ],
    link: {
      lead: 'Puzzle boxes carry their weight differently and put the load on the base, covered on ',
      href: '/product/kraft-puzzle-packaging-boxes/',
      anchor: 'the puzzle packaging page',
      tail: '.',
    },
    faqs: [
      { question: 'Why does the lid tear after a few months?', answer: '<p>Because a crease cut for a single opening is being flexed hundreds of times. A telescoping lid that slides rather than folds survives that duty; adding board thickness to a tuck flap does not.</p>' },
      { question: 'What dimensions should I send?', answer: '<p>The folded board footprint for length and width, and the full filled stack for depth — insert, cards, tokens and rulebook together. Depth is where game boxes most often go wrong.</p>' },
      { question: 'Do I need an insert?', answer: '<p>For anything with loose components, yes. A game that rattles sounds broken when picked up and looks incomplete when opened, and no external finish compensates for that.</p>' },
      { question: 'How strong does the base need to be?', answer: '<p>Strong enough to carry the components while the box is lifted by the lid, which is how most people pick a game up. That load runs through the base and the base corners.</p>' },
      { question: 'Can the box be stacked on a shelf?', answer: '<p>Yes, and games are stored stacked more than most products. Tell us the expected stack and we grade the lid and base against the weight sitting on top.</p>' },
      { question: 'What finishes suit a game box?', answer: '<p>Matt lamination hides handling marks on the large flat lid surface better than gloss. Spot UV on the title reads well against a matt ground.</p>' },
      { question: 'Can you produce small print runs for a first edition?', answer: '<p>Yes. Short runs suit digital print with no plate cost, which suits a first edition where the artwork may still change before a reprint.</p>' },
      { question: 'Should the rulebook be a separate item?', answer: '<p>Usually, and it needs a flat position in the insert. A rulebook folded against the lid creases and is the first component to look worn.</p>' },
      { question: 'Are these boxes suitable for shipping direct to customers?', answer: '<p>Inside an outer carton, yes. A game box shipped on its own arrives with crushed corners, and the corners are the most visible part on a shelf.</p>' },
      { question: 'Can the insert be recyclable rather than plastic?', answer: '<p>Yes, in die-cut board or molded pulp. Board handles cards and tiles well; molded pulp suits irregular pieces where a board cavity would be complicated.</p>' },
    ],
  },

  'kraft-puzzle-packaging-boxes': {
    intro:
      'A puzzle box is dense for its size. A thousand pieces weigh more than the box looks like it should hold, and that weight sits on the base for the whole life of the product.',
    sections: [
      {
        h2: 'The base takes a constant load',
        body: [
          'Unlike most packaging, a puzzle box is not carrying its contents briefly in transit — it holds them on a shelf, stacked, for years. A base that is adequate on day one can open along its seam after months under that load.',
          'A full-overlap base or a tray construction carries it properly. This is the single specification decision that matters most in the format.',
        ],
      },
      {
        h2: 'Pieces settle, and the box has to allow for it',
        body: [
          'Loose pieces redistribute every time the box is moved, so the pack cannot be sized to a neat stack. Allow headroom above the settled volume or the lid is forced and the sides bow outward.',
        ],
      },
      {
        h2: 'The image is the product',
        body: [
          'Nobody buys a puzzle from the box structure — they buy the picture on the lid. That makes the lid the one panel where print quality genuinely earns its cost, and where a litho-laminated surface is worth the step up from flexo.',
        ],
      },
    ],
    link: {
      lead: 'Where the same range includes games with components rather than loose pieces, ',
      href: '/product/kraft-board-game-packaging-boxes/',
      anchor: 'board game packaging covers insert and lid construction',
      tail: '.',
    },
    faqs: [
      { question: 'Why does the base give way on a puzzle box?', answer: '<p>Because the weight sits on it constantly for years rather than briefly in transit. A full-overlap or tray base carries that; a single glued seam eventually opens under it.</p>' },
      { question: 'How much headroom should the box have?', answer: '<p>Enough for the pieces to settle. Loose pieces redistribute every time the box moves, and a box sized to a neat stack ends up with a forced lid and bowed sides.</p>' },
      { question: 'What print route suits the lid?', answer: '<p>Litho-laminated, because the image is what sells the puzzle. It is the one panel in this format where the step up from flexo genuinely earns its cost.</p>' },
      { question: 'Will the box survive being stacked?', answer: '<p>With the right grade, yes, and puzzles are stored stacked more than most products. Send the expected stack height and we specify against it.</p>' },
      { question: 'Should the lid be telescoping or hinged?', answer: '<p>Telescoping. A separate lid sliding over the base has nothing to fold and so nothing to split, which matters on a box opened repeatedly over years.</p>' },
      { question: 'Do puzzle boxes need an internal bag?', answer: '<p>Not structurally, though many brands use one to keep pieces contained when the box is tipped. It is a filling preference rather than a packaging requirement.</p>' },
      { question: 'Can you produce different sizes for different piece counts?', answer: '<p>Yes, and they can share one board and print system. Only the dieline changes between counts, which keeps the setup cost down across a range.</p>' },
      { question: 'What finish holds up on the lid?', answer: '<p>Matt lamination resists the handling marks that show on a large printed surface. Gloss looks sharper in a photograph and worse after a month on a shelf.</p>' },
      { question: 'Is a window worth having?', answer: '<p>Rarely. The printed image already shows what the buyer wants to see, and a window in the lid removes stiffness from the panel carrying the stack.</p>' },
      { question: 'Can these ship direct to customers?', answer: '<p>Inside a protective outer, yes. Shipped alone the corners crush, and on a puzzle box the corners are visible on every shelf it sits on afterwards.</p>' },
    ],
  },

  'kraft-baby-product-boxes': {
    intro:
      'Baby product packaging is judged on perceived cleanliness before anything else. A pack that looks handled, scuffed or cheaply finished undermines the product regardless of what is inside it.',
    sections: [
      {
        h2: 'Finish carries more weight than in most categories',
        body: [
          'Buyers in this category read a marked or dented pack as a hygiene question rather than a cosmetic one. That makes the board choice and the coating more consequential than the graphics — a clean, well-finished uncoated kraft reads better than a glossy pack with a scuffed corner.',
          'It also means transit protection matters more. A pack that arrives at retail looking handled has already lost the comparison against the one beside it.',
        ],
      },
      {
        h2: 'Ingredient and safety copy',
        body: [
          'Age suitability, materials and any care or safety instructions are usually expected on pack and sometimes required. Parents read them, which is unusual — in most categories the regulated copy is scanned past.',
          'Lay that panel out at legible size first, then design the remaining area around it.',
        ],
      },
      {
        h2: 'Packs that are opened one-handed',
        body: [
          'A great deal of this product is opened by someone holding a baby. A closure that needs two hands and a fingernail is a genuine irritation, and it is a design decision rather than an accident.',
        ],
      },
    ],
    link: {
      lead: 'Where the range extends into toys rather than care products, ',
      href: '/product/kraft-toy-packaging-boxes/',
      anchor: 'toy packaging covers age grading and window options',
      tail: '.',
    },
    faqs: [
      { question: 'What board suits baby product packaging?', answer: '<p>A clean, well-finished stock, because the category is judged on perceived hygiene as much as on strength. Uncoated kraft reads well where a natural positioning is intended.</p>' },
      { question: 'Why does transit damage matter more here?', answer: '<p>Because buyers read a marked or dented pack as a hygiene question rather than a cosmetic one. A pack that arrives at retail looking handled has already lost the comparison on the shelf.</p>' },
      { question: 'What copy has to appear on pack?', answer: '<p>Age suitability, materials, and any care or safety instructions, with the specifics varying by market. Unusually for a regulated panel, parents actually read it, so lay it out legibly first.</p>' },
      { question: 'Should the pack be easy to open one-handed?', answer: '<p>Yes, and it is worth designing for. A large share of this product is opened by someone holding a baby, and a closure needing two hands and a fingernail is a real irritation.</p>' },
      { question: 'Are food-contact grades needed?', answer: '<p>For feeding products and anything a child may mouth, tell us and we specify appropriate boards and inks. Whether contact is direct or through an inner wrap changes the stock options.</p>' },
      { question: 'Can you produce packs for gift sets?', answer: '<p>Yes, with a compartmented insert so mixed items sit level. Baby gift sets are frequently bought as presents, so the opening moment matters more than for everyday stock.</p>' },
      { question: 'Is a window a good idea?', answer: '<p>Often, since buyers want to see the fabric or the item itself. On soft goods a window shows texture and color that a photograph flattens.</p>' },
      { question: 'What finishes suit this category?', answer: '<p>Matt or soft-touch, both of which resist visible handling marks. High gloss shows every fingerprint, which works against the impression the pack needs to give.</p>' },
      { question: 'Can we use recycled board?', answer: '<p>Yes, and it suits the positioning of most brands in this category. We would usually step up one caliper, since recycled fiber is slightly less stiff at the same weight.</p>' },
      { question: 'Do you supply matching packs across a product line?', answer: '<p>Yes. Fixing the board, print method and finish once and varying only the dieline is what makes products launched months apart look like one range.</p>' },
    ],
  },
}
