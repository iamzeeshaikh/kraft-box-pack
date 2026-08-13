/**
 * Written content for the category pages.
 *
 * Every category imported from WordPress with an empty description, so the
 * template fell back to one generated sentence — "{N} custom {name} made to
 * your dimensions, with free design assistance and an 8-10 business day
 * turnaround." That single line was the only prose on all seventeen pages,
 * which is why the content audit found 136 of 136 possible category pairs
 * above 20% similarity. There was nothing to be different.
 *
 * Each entry below is written from what is actually in that category — the
 * products it holds, what those products have to survive, and the decision a
 * buyer has to make before ordering. Nothing here is a rearrangement of the
 * same paragraph: if a sentence would be equally true of the next category, it
 * does not belong in this file.
 *
 * Business facts stay in src/data/business-facts.ts. Nothing here restates a
 * lead time, a minimum or a price.
 */

export interface CategoryFaq {
  question: string
  answer: string
}

export interface CategorySection {
  h2: string
  body: string[]
  /** Optional selection table. First column is the row header. */
  table?: { caption: string; head: string[]; rows: string[][] }
  /** Optional bullet list where scanning genuinely beats prose. */
  list?: string[]
}

export interface CategoryContent {
  /** Buyer-focused opening, two short paragraphs. */
  intro: string[]
  /** Sections chosen for this category — not the same set everywhere. */
  sections: CategorySection[]
  /** One contextual internal link out of the page. */
  link?: { lead: string; href: string; anchor: string; tail: string }
  faqs: CategoryFaq[]
}

export const CATEGORY_CONTENT: Record<string, CategoryContent> = {
  /* ------------------------------------------------------------------ */
  'kraft-food-packaging': {
    intro: [
      'Food packaging fails in two ways that have nothing to do with how it looks. Grease works through the board and the pack goes translucent and limp in the customer\'s hand, or steam from a hot fill softens the walls until the base gives way. Both are material decisions made before anything is printed.',
      'This range covers the formats that go straight from a kitchen or a production line to a customer — bakery, produce, chilled, frozen and dry goods. What separates them is fill temperature and fat content, and those two answers decide the board and the coating.',
    ],
    sections: [
      {
        h2: 'Choosing board for the fill',
        body: [
          'Grease resistance and moisture resistance are different treatments. Fried and buttery products need the first; anything filled hot or held chilled needs the second. Products that are both — a hot pastry, a fried noodle box — need both, and specifying only one is the most common cause of a pack that fails in service.',
        ],
        table: {
          caption: 'Board and coating by fill type',
          head: ['Fill type', 'Board', 'Treatment'],
          rows: [
            ['Dry goods, granola, confectionery', 'Uncoated kraft', 'None required'],
            ['Bakery, pastry, donuts', 'Kraft with grease barrier', 'Grease-resistant coating'],
            ['Hot fill, noodles, takeaway meals', 'Heavier caliper kraft', 'Grease and moisture barrier'],
            ['Chilled and frozen', 'Moisture-resistant board', 'Cold-tolerant adhesive'],
            ['Produce and fruit', 'Corrugated or molded', 'Ventilation where needed'],
          ],
        },
      },
      {
        h2: 'Adhesive behavior in cold storage',
        body: [
          'Standard carton glue becomes brittle below freezing. A seam that holds at room temperature can crack when a case is handled straight out of a chiller, and the failure shows up as split cartons at the far end of the chain rather than at production. If any part of the run is stored cold, say so at quoting — a cold-tolerant adhesive costs very little and cannot be added afterwards.',
        ],
      },
      {
        h2: 'What food-contact means for your stock choices',
        body: [
          'Direct contact and contact through a liner are different specifications, and they change which boards and inks are available. A bakery box holding a bare pastry is direct contact; the same box around a wrapped product is not. Tell us which applies and the stock list narrows accordingly.',
        ],
      },
      {
        h2: 'Venting and sealing pull in opposite directions',
        body: [
          'Any pack holding hot food is asked to do two contradictory things at once. Keeping the heat in means closing the box; letting the steam out means opening it. Seal it and the moisture condenses on the coolest surface, which is the underside of the lid, and drips back onto whatever is beneath — anything with a crust or a coating is ruined within fifteen minutes. Vent it and a little warmth leaves with the steam.',
          'There is no setting that satisfies both, so the first question on any hot format is whether the dish is judged on being crisp or on being hot. Fried food, pastry and anything coated wants venting and accepts the heat loss. A stew, a curry or a roast wants the opposite, and vents on those are simply a hole in an insulated box.',
        ],
      },
      {
        h2: 'How the range divides by temperature',
        body: [
          'Fill temperature does more to a specification than the product category does. Two packs holding the same food at different temperatures are different boxes, and the split below is closer to how this range actually works than the product names are.',
        ],
        list: [
          'Ambient and dry — no barrier needed, and the board can be the lightest the structure allows. Preservation belongs to an inner bag rather than to the carton.',
          'Hot fill and takeaway — grease and steam arrive together within minutes, so a barrier is required and venting is decided by the dish.',
          'Chilled — condensation forms on both faces as the pack moves between a cabinet and a warm room, and board softens exactly where it carries the load.',
          'Frozen — water cycles in and out of the fibers for months, which delaminates an unprotected board while it still looks intact from outside.',
          'Produce — respiration continues after picking, so the requirement inverts entirely and the pack has to let moisture escape.',
        ],
      },
      {
        h2: 'Windows, and what they do to a recycling claim',
        body: [
          'A window sells anything decorated and complicates everything else. The film is a second material, so a pack carrying one is no longer a single-stream item and has to be separated before it can be recycled, which few customers do. Cellulose and other plant-based films change that answer at a cost per unit and usually a slightly softer look.',
          'Whichever is chosen, the disposal wording printed on the pack has to describe the film that was actually bought. This is the most common place a well-intentioned environmental claim stops being true, because the box and the window are frequently specified by different people at different times.',
        ],
      },
    ],
    link: {
      lead: 'If your run is mostly cartons for baked goods rather than mixed food formats, ',
      href: '/product/kraft-bakery-boxes/',
      anchor: 'the bakery box range covers those sizes directly',
      tail: '.',
    },
    faqs: [
      { question: 'Which products in this range are suitable for direct food contact?', answer: 'Most can be produced on food-contact compliant board and inks, but it has to be specified rather than assumed. Tell us whether the food touches the board directly or sits inside a liner or wrapper, because that changes which stocks we can quote.' },
      { question: 'How do I stop grease showing through the box?', answer: 'A grease-resistant coating or a greaseproof liner. Untreated kraft will always strike through eventually with hot, oily food — that is a property of the material rather than a fault, and it is inexpensive to design out at specification stage.' },
      { question: 'Can these boxes go in a freezer?', answer: 'With the right adhesive and a moisture-resistant board, yes. The usual failure is the glue rather than the board — standard carton adhesive goes brittle in sustained cold and seams crack when cases are handled.' },
      { question: 'Do you supply ventilated packaging for produce?', answer: 'Yes. Ventilation holes and corrugated constructions are both available for fruit and vegetables, where trapped moisture shortens shelf life faster than anything else.' },
      { question: 'Are windows an option on food boxes?', answer: 'They are, with film or as a plain die-cut aperture. A filmed window means the pack is no longer straight paper, so if a clean recycling claim matters more than visibility a plain aperture is worth considering.' },
      { question: 'Can I get one board grade across a mixed food range?', answer: 'Usually one grade and one print system can carry a whole range, but not one set of dimensions. We normally cut two or three dielines and keep the board, print and finish common so the range still looks like a range.' },
      { question: 'What sizes do cake and bakery boxes come in?', answer: 'They are cut to your product rather than picked from a stock list. Send the finished item and we will build the dieline around it, including height clearance for anything domed or decorated.' },
      { question: 'Do you print inside food boxes?', answer: 'Yes, where the ink is food-contact compliant for the application. It matters most on formats the customer opens at the table, since that is when the interior is visible.' },
      { question: 'How should I pack for delivery rather than counter service?', answer: 'Delivery adds movement and time, so the pack has to hold shape when it is tilted and stay closed without tape. A locking tuck or a gable closure handles that better than a plain tuck flap.' },
      { question: 'Can you match packaging I already buy?', answer: 'Send the current pack or its specification and we will quote to match the structure and board rather than proposing an alternative you would then have to re-approve internally.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'kraft-gift-specialty-boxes': {
    intro: [
      'A gift box is judged in the few seconds it is opened, and almost all of that impression comes from two things — whether the lid lifts cleanly and whether the contents are still sitting where they were packed. Neither is decided by the printing.',
      'This range runs from small favor boxes up to large rigid lidded builds, plus the shapes that only exist for presentation: round, pillow, window-fronted. What varies most across it is construction, so that is where the choosing happens.',
    ],
    sections: [
      {
        h2: 'Rigid or folding, and what the difference costs',
        body: [
          'Folding cartons arrive flat and glued along one seam, so they cost less to ship and pop open on a packing line. Rigid boxes are hand-assembled around a greyboard core and arrive made up, which is why they feel substantially heavier and why their freight cost is higher.',
          'The honest test is whether the box is kept. A pack that goes straight in the recycling after opening rarely justifies rigid construction; one that a customer stores jewelry or keepsakes in usually does.',
        ],
        table: {
          caption: 'Construction by use',
          head: ['Build', 'Ships', 'Suits'],
          rows: [
            ['Folding carton', 'Flat, glued one seam', 'Retail gifting, favors, volume runs'],
            ['Rigid lid and base', 'Assembled', 'Premium gifting, boxes that get kept'],
            ['Drawer and sleeve', 'Assembled', 'Presentation where the reveal matters'],
            ['Pillow and round', 'Flat or assembled', 'Small items, favors, novelty shapes'],
          ],
        },
      },
      {
        h2: 'Holding the contents still',
        body: [
          'Most complaints about gift packaging are not about the box. They are about the contents having moved in transit, so the set arrives looking disarranged even when nothing is damaged. A fitted insert cut to each item solves it, and on a multi-item set it is worth more than any upgrade to the outer box.',
        ],
      },
      {
        h2: 'Shipping a presentation box',
        body: [
          'A box built to present is rarely built to survive a courier network on its own. Corners scuff, lids bow and a shipping label lands across the artwork. Sending it inside a plain outer carton usually costs less overall than specifying one box to do both jobs.',
        ],
      },
      {
        h2: 'The interior is what gets remembered',
        body: [
          'Lift the lid on a plain box and the first thing seen is brown board and a bag of filler. That moment is the one people describe afterwards, and it is the cheapest thing in the whole specification to improve — inside printing, a tissue layer or a printed tray changes it completely without altering the structure at all.',
          'It is consistently better value than a heavier board. A customer registers the reveal; almost nobody registers a caliper increase they cannot see. Where a budget has to be split between the outside and the inside of a gift box, the inside earns more of it.',
        ],
      },
      {
        h2: 'What each closure costs at the packing bench',
        body: [
          'Closure choice is usually made on how it looks and paid for in labor. At a few dozen units the difference is invisible; across a thousand it is a person for a day, which is worth knowing before the decision rather than after the first big run.',
        ],
        table: {
          caption: 'Closure against assembly effort',
          head: ['Closure', 'Time per box', 'Suits'],
          rows: [
            ['Crash-lock base', 'Seconds, one motion', 'Any volume, highest counts'],
            ['Tuck end', 'Slower, needs attention', 'Small runs'],
            ['Magnetic lid', 'One motion', 'Premium, ships assembled'],
            ['Ribbon tie', 'Longest, two hands', 'Small runs and gifts'],
            ['Pre-tied bow', 'Applied as a unit', 'High volume with a ribbon look'],
          ],
        },
      },
      {
        h2: 'Sizing a range so the boxes nest',
        body: [
          'Gift ranges are almost always sold in two or three sizes, and whether those sizes nest is decided at the first drawing rather than later. Diameters and footprints chosen independently will not sit inside one another, and the cost of that shows up every time a pallet is shipped or a stockroom shelf is filled.',
          'It matters most on rigid and shaped builds, which arrive assembled and cannot be flattened. Working the range out as a family at the start costs nothing; retrofitting it afterwards means new tooling for every size in it.',
        ],
      },
    ],
    link: {
      lead: 'For the two-piece lidded format specifically, ',
      href: '/product/kraft-gift-boxes-with-lids/',
      anchor: 'the gift boxes with lids page covers sizing and board weight',
      tail: ' in more detail.',
    },
    faqs: [
      { question: 'What is the difference between a rigid box and a folding carton?', answer: 'A rigid box is hand-assembled around a greyboard core and arrives made up; a folding carton is machine-glued and arrives flat. Rigid feels heavier and holds its shape better, but costs more per unit and more to ship.' },
      { question: 'Will a gift box survive being posted on its own?', answer: 'Often not without marking. Corners scuff and a courier label lands on the artwork. A plain outer carton around the gift box is usually cheaper than trying to make one box do both jobs.' },
      { question: 'Can you make an insert to hold the contents in place?', answer: 'Yes, in board or foam, cut to each item. On a multi-item set this matters more than the outer box, because contents shifting in transit is what makes a set look badly packed.' },
      { question: 'Do you produce boxes in shapes other than square?', answer: 'Round, pillow, hexagonal, heart and pyramid builds are all available. Each needs its own cutting die, so the tooling cost sits with the first order and carries forward to reorders.' },
      { question: 'Can I have a window in a gift box?', answer: 'Yes, filmed or as a plain aperture. Every square inch of window removes stiffness from that panel, so a large window on a lidded box usually means stepping the board up a grade.' },
      { question: 'What closures are available?', answer: 'Magnetic closures, ribbon pulls, tuck locks and simple lift-off lids. Magnetic closures read as the most premium and open in one movement, which matters when the opening is being filmed or photographed.' },
      { question: 'How small can a favor box go?', answer: 'Small formats are limited by what the cutting die and the gluing line can hold rather than by policy. Tolerances tighten as size drops, so a structural sample before print is worth the step.' },
      { question: 'Can one design work across several box sizes?', answer: 'Yes, and specifying them as a family is better than ordering them one at a time. Fixing the board, print method and finish once means sizes added later still match.' },
      { question: 'Do you foil or emboss kraft board?', answer: 'Both work on kraft, and they read well against an unbleached surface. Each is a separate pass on the finishing line, so they are quoted individually rather than bundled.' },
      { question: 'Is the interior printed as well?', answer: 'It can be. On a gift box the interior is visible for the whole moment that matters, so an interior print or a colored lining often does more than an upgrade to the outside.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'kraft-packaging-boxes': {
    intro: [
      'This is the general range — the formats that are not tied to one industry. Mailers, cartons, corrugated cases, bags and trays, cut to whatever the product needs.',
      'Because it spans several construction types, the first question is not which product but which build. A folding carton, a corrugated mailer and a rigid box solve different problems and cost very different amounts to ship.',
    ],
    sections: [
      {
        h2: 'Matching the build to the journey',
        body: [
          'The distance a pack travels and the number of times it is handled matter more than the weight of what is inside it. A carton that never leaves a shop needs far less than one going through a parcel network, and specifying for the wrong one is expensive in both directions.',
        ],
        table: {
          caption: 'Construction by journey',
          head: ['Journey', 'Build', 'Why'],
          rows: [
            ['Shelf to customer, no transit', 'Folding carton', 'Presentation matters more than strength'],
            ['Single parcel through a courier', 'E or B flute corrugated', 'Survives handling without bulk'],
            ['Palletised, stacked in a warehouse', 'C or BC flute corrugated', 'Edge crush carries the stack'],
            ['Hand-carried at retail', 'Paper bag with reinforced top', 'Failure point is the handle, not the paper'],
          ],
        },
      },
      {
        h2: 'Why box size costs more than board grade',
        body: [
          'Couriers price on dimensional weight, so a box one size too large is charged as though it were heavier on every single parcel. Most operations we quote are running at least one band larger than they need, with void fill making up the difference. Measuring the product rather than copying the existing box is usually the cheapest change available.',
        ],
      },
      {
        h2: 'The constructions this range keeps returning to',
        body: [
          'The product names in this range are many and the underlying builds are few. Almost everything here is one of five constructions with a different footprint and a different print, and recognizing which one a job needs is most of the specification.',
        ],
        list: [
          'Tuck end — a flat blank folded into a rectangle, cheapest to tool and quickest to print. The default for anything retail that does not carry weight.',
          'Crash-lock base — the same box with a base that snaps square in one motion, which buys back assembly time on any real quantity.',
          'Mailer — a self-locking wrap that needs no tape and survives a carrier network unprotected, so it doubles as its own shipper.',
          'Gable and carry formats — a handle built into the blank, for anything a customer walks away holding.',
          'Corrugated shipper — a fluted board outer specified against compression rather than appearance, and the only one of the five that stacks on a pallet.',
        ],
      },
      {
        h2: 'Where a crash-lock base pays for itself',
        body: [
          'A tuck base is cheaper per box and slower to assemble, and it needs a moment of attention to sit square. A crash-lock opens into a finished box in one motion. The unit difference between them is small and the labor difference is not, so the crossover point arrives earlier than most people expect — usually somewhere around a hundred boxes packed at a time.',
          'Above that, the boxes assembled late in a session are the ones that show it. Out-of-square boxes at the end of a run are almost always a closure decision rather than a workmanship problem.',
        ],
      },
      {
        h2: 'Stacking strength is not board strength',
        body: [
          'A board grade describes a sheet, not a loaded box, and the two behave differently. Compression runs down the vertical corners rather than through the panels, so a box with crushed corners has lost most of its capacity while its walls still look intact. Anything that reduces the corners — an overhang past the pallet edge, a dented stack, a box slightly out of square — takes strength with it.',
          'Board also creeps. A case that comfortably holds its stated load on the day it is packed holds measurably less after several weeks carrying it, which is why long storage has to be specified with that allowance built in rather than against a catalog figure.',
        ],
      },
    ],
    link: {
      lead: 'If the run is specifically for e-commerce dispatch, ',
      href: '/product/kraft-mailer-boxes/',
      anchor: 'the mailer box page covers roll-end construction',
      tail: ' and how it affects dimensional weight.',
    },
    faqs: [
      { question: 'Which box style should I choose?', answer: 'It depends on the journey more than the product. A carton that stays in a shop needs far less than one going through a parcel network. Tell us how it ships and we will specify against that rather than against an average.' },
      { question: 'What is the difference between E, B and C flute?', answer: 'Flute height. E is thin and prints well, B sits in the middle, C is thicker and carries more stacking load. Thinner flutes suit retail packs; thicker ones suit palletised freight.' },
      { question: 'Will a heavier board reduce my damage rate?', answer: 'Only if boxes are arriving crushed. If they arrive intact with damaged contents, the product is moving inside and a heavier outer changes nothing — a fitted insert solves that case, usually for less money.' },
      { question: 'How do I reduce shipping costs?', answer: 'Measure the product rather than the box you use now. Couriers charge on dimensional weight, so dropping one size band saves on every parcel, which compounds far faster than a board saving.' },
      { question: 'Do boxes arrive flat or assembled?', answer: 'Folding cartons and corrugated mailers arrive flat and glued along one seam, which keeps freight low and lets them pop open on a packing line. Rigid boxes arrive assembled.' },
      { question: 'Can you cut a box to a size that is not standard?', answer: 'Every run is cut to your dimensions — there are no stock sizes here. Send the product measurements rather than a box size and we will build the dieline around them.' },
      { question: 'Do you print on corrugated?', answer: 'Yes, by flexo direct to the board for most work, or litho-laminated where print quality has to be higher. Flexo is the sensible route for anything opened once and recycled.' },
      { question: 'Can I order more than one size in a single run?', answer: 'Yes, and it is usually cheaper than separate runs because the setup is shared. Keeping the board and print common across sizes is what holds the cost down.' },
      { question: 'What happens if my product changes size later?', answer: 'A new dieline is needed, but the board specification, print method and finishes carry over, so a resize is a much smaller job than a first order.' },
      { question: 'Do you supply plain unprinted boxes?', answer: 'Yes. Plain kraft is often the right answer for outer transit cases where printing adds cost without doing any selling.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'custom-gift-boxes': {
    intro: [
      'These are the gifting formats built around an occasion rather than a product category — hampers, favors, flowers, invitations, influencer sends. What they share is that someone other than the buyer opens them.',
      'That changes the priorities. The pack has to arrive arranged as it was packed, open without a struggle, and look deliberate rather than assembled from whatever was to hand.',
    ],
    sections: [
      {
        h2: 'Packing a set so it arrives arranged',
        body: [
          'Mixed-height contents are what make a hamper or a favor set look untidy on opening. Shorter items sink below the lid line and shift, and the recipient sees a jumble rather than an arrangement. A compartmented insert cut to each item, with the shallow recesses packed up so every top sits level, is the whole fix.',
        ],
      },
      {
        h2: 'Boxes that get opened on camera',
        body: [
          'Influencer and press sends are filmed by the recipient, and the first ten seconds of that video is someone getting into the box. Tape fought open on camera undoes the reason for buying a presentation box at all.',
          'A magnetic or ribbon-pull closure opens in one movement. Ship it inside a plain outer carton so the courier label and the handling scuffs land somewhere other than the box being filmed.',
        ],
      },
      {
        h2: 'Seasonal runs and overage',
        body: [
          'Occasion packaging is bought for a single window with no second run behind it. Producing spare units inside the original run costs a fraction of a separate short run later, and running out mid-season is the more expensive mistake by some distance.',
        ],
      },
      {
        h2: 'Hampers, and the span a wide base has to cross',
        body: [
          'What changes on a large gift box is not the weight but the unsupported span. Panels that hold their shape at a small footprint bow visibly across a long one, and a lid that is long in one direction racks slightly out of square and then binds on a corner permanently.',
          'Compensating with a heavier caliper works and is usually the expensive answer. An internal tray that breaks the span braces the long panels from inside, which lets a lighter board hold its shape and generally saves more than the tray costs. Specifying the two together produces a better box than specifying either alone.',
        ],
      },
      {
        h2: 'Void fill that belongs to the presentation',
        body: [
          'On an occasion box the filler is seen before the contents are, so it is part of the design rather than protection that happens to be visible. What suits a set depends on how much space there is to take up and how the contents are meant to be discovered.',
        ],
        list: [
          'Shredded kraft — forgiving of contents that change from order to order, and the easiest to over-use until a box looks padded rather than full.',
          'A printed tray — fixes the arrangement and the order things are seen in, and does the most for a set whose composition is stable.',
          'Molded pulp — the right answer where something breakable has to be held exactly, and the least flexible if a component is later substituted.',
          'Tissue and paper wraps — adds a layer to open without adding bulk, which suits soft goods that would rattle in a fitted seat.',
        ],
      },
      {
        h2: 'One outer, several interiors',
        body: [
          'Occasion ranges change more often than the boxes they use. The tooling and the print plates sit on the outer, so a single printed box with two or three interchangeable inserts covers a whole range at a fraction of the cost of separate boxes, and a new combination needs only a new insert.',
          'It also allows a seasonal variation to be ordered late. The outer is committed months ahead on the long lead time it needs, while the tray, the card or the tissue inside it can be decided close to the season, when what is actually going in the box is known.',
        ],
      },
    ],
    link: {
      lead: 'For flower and bouquet work specifically, ',
      href: '/product/kraft-flower-boxes/',
      anchor: 'the flower box page covers liner options and depths',
      tail: '.',
    },
    faqs: [
      { question: 'Can you make a box to hold a mixed hamper?', answer: 'Yes, with a compartmented insert cut to each item. Uneven heights are what make an assortment look thrown together, so the shallow recesses get packed up until every lid sits level.' },
      { question: 'Should the mailing label go on the gift box itself?', answer: 'No. Ship it inside a plain outer carton and keep the presentation box clean. A courier label and handling scuffs on the box that is about to be opened undoes the point of it.' },
      { question: 'What closure works best for an unboxing video?', answer: 'A magnetic closure or a ribbon pull, because both open in one movement. Tape being fought open on camera is the most common thing we are asked to fix in this category.' },
      { question: 'Should I order spare units for a seasonal run?', answer: 'Yes, and it is the advice we give unprompted on occasion work. Overage produced inside the original run costs a fraction of a separate short run later.' },
      { question: 'Can one outer box work for several different bundles?', answer: 'Usually yes — one outer size with two or three interchangeable inserts. You keep a single print run on the outer, which is the expensive part, and change only the fitment.' },
      { question: 'Do flower boxes need a liner?', answer: 'If they carry stems in water or damp foam, yes. Without one the moisture goes straight into the board and the base softens, usually within hours rather than days.' },
      { question: 'How far ahead should I order for a season?', answer: 'Work backwards from the date you need stock in hand and allow for proofing as well as production. We would rather you gave us the date than asked for a lead time.' },
      { question: 'Can the inside of the lid be printed?', answer: 'Yes, and on a gift box it is often the better place to spend. The inside of the lid is in view for the whole time the box is open.' },
      { question: 'Are ribbon and rope handles available?', answer: 'Both, along with cotton tape pulls. On anything with real weight the top edge needs reinforcing as well, because the failure point is the board around the fixing rather than the ribbon.' },
      { question: 'Can you produce a small run for a press send?', answer: 'Yes. Short runs suit digital print, which has no plate cost, so a seeding wave of a hundred or two prices very differently from a retail run.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'kraft-cosmetic-boxes': {
    intro: [
      'Nearly everything in this range is a carton around a container, and what decides the job is the container — its shape, whether it leaks, and how much regulated copy has to fit on the panel beside the brand.',
      'Beauty buyers underestimate panel space more consistently than any other category. Ingredient lists, warnings and claims all compete with the design, and adding them late usually forces the layout to be rebuilt.',
    ],
    sections: [
      {
        h2: 'Measuring a bottle or jar properly',
        body: [
          'Measure at the widest point, which is frequently not the base, and include the cap, pump or dropper as it will actually be fitted. Supplier drawings quote the container alone and miss both the applied label thickness and the closure, and those two together are the usual reason a carton will not close flat.',
        ],
      },
      {
        h2: 'Leaks and what they do to board',
        body: [
          'Serums, oils and mascara all stain board from the inside out, and on an unlined carton a small leak becomes a visible mark on the outside within days. A coated inner face contains it and costs very little against the risk.',
        ],
      },
      {
        h2: 'Finish choices that read at arm\'s length',
        body: [
          'Soft-touch lamination and deboss change how a whole pack reads and are noticed from across a counter. A small foil detail often does not survive the distance between a shelf and a customer\'s eye. Each finish is a separate pass, so they are quoted individually and can be dropped individually.',
        ],
        list: [
          'Soft-touch lamination — changes the feel of the whole carton',
          'Deboss — reads under retail lighting without adding a color pass',
          'Foil — strongest on small marks against uncoated kraft',
          'Spot UV — needs contrast with a matt ground to be visible at all',
        ],
      },
      {
        h2: 'The ingredient panel takes its space first',
        body: [
          'Cosmetics carry a full INCI ingredient list, a period-after-opening mark, a batch code and a responsible person address, and all of it has to stay legible at a size the rules set rather than one the layout would prefer. On a small carton that text can occupy an entire face.',
          'This is the single most common reason a cosmetic carton is redrawn: the design is finished, the legal copy arrives, and there is nowhere for it to go. Blocking the panel out before the front is designed costs nothing and removes the problem entirely.',
        ],
      },
      {
        h2: 'Heat, and which lines are at risk',
        body: [
          'A delivery van in summer reaches temperatures no shelf ever does, and several cosmetic formats soften well below that point. A product that has melted and reset has lost its surface even when nothing has leaked and the carton looks perfect, so the risk sits with the schedule and the storage rather than with the box.',
        ],
        table: {
          caption: 'Heat sensitivity by format',
          head: ['Format', 'Risk in transit', 'What the carton can do'],
          rows: [
            ['Balms and solid sticks', 'High, softens and re-sets', 'Snug fit so nothing shifts while soft'],
            ['Cream palettes and compacts', 'High, surface is lost', 'Fitted seat, no free movement'],
            ['Wax and fragrance products', 'High, oil reaches the board', 'Barrier board or a sealed inner'],
            ['Serums and oils in glass', 'Low, but glass is heavy', 'Insert cut to the real base'],
            ['Powders and pressed pans', 'Low, breaks on impact instead', 'Corrugated where it ships alone'],
          ],
        },
      },
      {
        h2: 'Sets, and the order a routine is used in',
        body: [
          'Cosmetics sell in routines, so a multi-item set is usually part of any range. A divided tray stops several glass items knocking each other for the length of a journey, and it also fixes the order in which they are seen.',
          'That second job is worth more than it sounds. A routine has a sequence, the customer does not know it yet, and the box is the only place it gets explained. Laying the tray out in order of use, and numbering the steps on the tray itself, turns a collection of products into an instruction.',
        ],
      },
    ],
    link: {
      lead: 'If the run is skincare cartons rather than mixed beauty formats, ',
      href: '/product/kraft-skincare-boxes/',
      anchor: 'the skincare box page covers jar and dropper sizing',
      tail: '.',
    },
    faqs: [
      { question: 'How do I measure a bottle for its carton?', answer: 'At the widest point, including the cap or pump, and with any label already applied. Measurements taken from a supplier drawing miss flex and label thickness, and both decide whether the carton closes cleanly.' },
      { question: 'How much room do ingredient lists need?', answer: 'More than most brands allow for. Ingredient copy and warnings compete directly with the design, and adding them after layout usually forces a reflow. We block the area on the dieline before design time is committed.' },
      { question: 'Will a leak damage the carton?', answer: 'On an unlined board, yes — oils and serums wick into the fibers and show on the outside. A coated inner face contains a minor leak and is inexpensive insurance on anything liquid.' },
      { question: 'Can you produce cartons for a whole product range?', answer: 'Yes, and specifying them as a family is better than one at a time. Fixing the board, wrap and finish once means products launched a year apart still look related on a shelf.' },
      { question: 'Which finish suits kraft board?', answer: 'Deboss and foil both read well against an unbleached surface. Pale tints and fine detail tend to disappear, because the brown substrate pulls every color down.' },
      { question: 'Do you print white on kraft?', answer: 'Yes, with an opaque white underbase so colors printed over it stay accurate. It adds a press pass, and it is the only way to hold color on a dark or unbleached surface.' },
      { question: 'Are these cartons suitable for a tall narrow bottle?', answer: 'Yes, though a tall carton with a bottom-heavy container tips easily on a shelf. Widening the base slightly or using a shelf tray solves a problem that sizing exactly to the bottle creates.' },
      { question: 'Can I get a sample before committing?', answer: 'A plain structural sample answers fit and a printed prototype answers color and finish. For finish-led beauty work the printed one is usually worth it, because soft-touch and foil do not read accurately on screen.' },
      { question: 'Do you supply inserts for sets and kits?', answer: 'Yes, in board or foam. A kit with mixed container heights needs the recesses packed up so every lid sits level, otherwise the set looks disarranged when it is opened.' },
      { question: 'What board weight suits a cosmetic carton?', answer: 'It follows the weight and height of the container. A light tube needs far less than a glass jar, and a tall carton on light board feels flimsy even when it is structurally fine.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'kraft-luxury-packaging': {
    intro: [
      'This range is defined by construction rather than by what goes inside it. Rigid builds, tubes and the angular shapes — hexagon, octagon, triangle, pyramid — that only exist because a square box would not have made the same impression.',
      'All of them are hand-assembled or specially formed, which is where both the feel and the cost come from.',
    ],
    sections: [
      {
        h2: 'Why rigid construction costs what it does',
        body: [
          'A rigid box is built by wrapping a printed sheet around a greyboard core by hand, with the corners, the turn-in and any lining each a separate operation. It also ships assembled rather than flat, which raises freight considerably against a folding carton of the same finished size.',
          'What that buys is a structure that feels different in the hand and holds its shape over years rather than one journey.',
        ],
      },
      {
        h2: 'Artwork for a wrapped box',
        body: [
          'A wrap needs bleed carried around the turn-in as well as to the visible edge, which is more artwork area than the outside dimensions suggest. Designs that sit tight to the edge lose detail where the paper folds around the board.',
        ],
      },
      {
        h2: 'Shaped builds and tooling',
        body: [
          'Hexagonal, triangular and pyramid boxes each need their own cutting die. That tooling cost sits with the first order and carries forward, so a reorder in the same shape does not pay for it twice — but changing the shape means starting again.',
        ],
      },
      {
        h2: 'Where a wrapped box actually fails',
        body: [
          'A rigid box is two materials glued together — a greyboard shell and a printed or kraft paper wrapped over it — and almost everything that goes wrong happens at that join rather than in the board. Corners lift first, because the wrap is stretched hardest where it turns one.',
          'Humidity separates the layers. The two materials take up moisture at different rates, so in a damp store they begin to move independently and a large flat panel starts to bubble. It is a storage problem as much as a manufacturing one, and a pallet against an outside wall over a winter will show it before anything else in the room.',
        ],
      },
      {
        h2: 'Freight on boxes that cannot fold',
        body: [
          'Everything in this range is delivered assembled, because no fold turns a flat sheet into a rigid box, a cylinder or a shaped build. That means the pallet is carrying mostly air, and the delivered cost is noticeably higher than a unit price suggests.',
          'The only real relief is designing a range whose sizes nest inside one another, and that has to be settled before any tooling is cut. Sizes chosen independently will not nest, and adding the idea later means remaking every size in the family.',
        ],
      },
      {
        h2: 'How the closures compare in the hand',
        body: [
          'The differences between premium closures are experiential rather than structural, and they are what a customer is actually paying for. Each buys a different opening and costs something different to make.',
        ],
        table: {
          caption: 'Closure against what it buys',
          head: ['Closure', 'How it opens', 'Cost driver'],
          rows: [
            ['Lift-off lid', 'Slow, resisted by trapped air', 'Simplest, fewest components'],
            ['Shoulder box', 'Slow and even, air escapes past the collar', 'A third component at a tight tolerance'],
            ['Magnetic lid', 'One decisive movement', 'Magnets placed and covered by hand'],
            ['Flip top', 'One-handed, stays attached', 'Hinge has to survive years of use'],
            ['Ribbon tie', 'Deliberate, has to be re-tied', 'Labor at the packing bench'],
          ],
        },
      },
    ],
    link: {
      lead: 'For the magnetic closure format in particular, ',
      href: '/product/kraft-luxury-magnet-boxes/',
      anchor: 'the magnetic closure box page covers sizing and finishes',
      tail: '.',
    },
    faqs: [
      { question: 'Why do rigid boxes cost more than folding cartons?', answer: 'They are hand-assembled rather than machine-glued, and the wrap, corner finish and lining are each separate operations. They also ship assembled, which raises freight against a flat-packed carton.' },
      { question: 'Do rigid boxes ship flat?', answer: 'Not normally. Collapsible rigid constructions exist and ship flatter, at some cost to how the finished box feels, and we will quote both if freight volume is the deciding factor.' },
      { question: 'How much bleed does a wrapped box need?', answer: 'More than a flat carton. Bleed has to carry around the turn-in as well as to the visible edge, so artwork covers a larger area than the outside dimensions suggest.' },
      { question: 'Can you produce hexagonal or triangular boxes?', answer: 'Yes. Each shape needs its own cutting die, and that tooling cost sits with the first order and carries forward to reorders in the same shape.' },
      { question: 'What holds a magnetic closure box shut?', answer: 'Concealed magnets set into the flap and the wall during assembly. The strength is specified against the lid size, because a large lid on weak magnets springs open in transit.' },
      { question: 'Are tubes an alternative to a rigid box?', answer: 'For cylindrical products, often yes, and they use less material. Specify paperboard ends rather than metal if recyclability matters, since metal ends cannot be separated by a customer.' },
      { question: 'Which finishes suit a rigid kraft box?', answer: 'Deboss, foil and soft-touch all work. Texture tends to matter more than gloss here, because these boxes are handled slowly rather than glanced at on a shelf.' },
      { question: 'Can a rigid box carry real weight?', answer: 'Yes, provided the fitment transfers the load into the walls rather than letting it rest on the base. That is a structural decision made at specification, not a finishing one.' },
      { question: 'Is there a minimum order for shaped boxes?', answer: 'The same minimum applies as elsewhere in the catalog. The tooling cost is what makes very short runs of an unusual shape expensive per unit, not the minimum itself.' },
      { question: 'How long do these take compared with a folding carton?', answer: 'Hand assembly puts rigid builds at the longer end of the standard production window, and applied finishes each add a pass. We confirm a firm date in writing with the quote.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'colored-kraft-boxes': {
    intro: [
      'Kraft board is unbleached, so every color printed on it sits over brown. That single fact decides most of what happens on these pages — which colors hold, which go muddy, and where a white underprint becomes necessary.',
      'This range covers the colored and dyed stocks, black and brown board, and the lidded and minimalist builds that use them.',
    ],
    sections: [
      {
        h2: 'What kraft does to printed color',
        body: [
          'The substrate subtracts from every ink laid over it. Pale tints and fine detail largely disappear; solid marks and heavy line weights hold. Designs approved on a white screen and a white proof routinely come back looking dull, which is a material behavior rather than a print fault.',
          'There are two honest answers. Design for the stock with one or two high-contrast colors, or specify a white underbase, which restores the colors at the cost of an extra press pass.',
        ],
      },
      {
        h2: 'Printing on black board',
        body: [
          'Black kraft has the same problem magnified — nothing prints legibly on it without an opaque white underbase behind the color, or a foil, which sits on top of the surface rather than soaking into it. Budget for one of the two at specification rather than discovering it at proof.',
        ],
      },
      {
        h2: 'Dyed-through against surface-colored',
        body: [
          'Two boards can look identical face-on and behave completely differently once a box is made. On a dyed-through stock the color runs through the fiber, so every cut edge and every crease shows the same shade as the face. On a surface-colored board the brown core is exposed at each one.',
          'A finished box has twelve edges and every fold shows a line, so this is a visible decision rather than a technical one. Surface-colored costs less and suits a design where the edges are not the point; dyed-through is what a plain, minimal box needs, because on those the edges are most of what is seen.',
        ],
        table: {
          caption: 'What each stock does at a cut or a fold',
          head: ['Stock', 'Cut edges', 'Best for'],
          rows: [
            ['Dyed-through', 'Match the face', 'Plain and minimal designs'],
            ['Surface-colored', 'Show the brown core', 'Fully printed designs'],
            ['Natural kraft', 'Match the face', 'Anything unbleached by intent'],
            ['White-lined kraft', 'Show the kraft back', 'Color-accurate print on one face'],
          ],
        },
      },
      {
        h2: 'Matching a brand color on a brown base',
        body: [
          'Process inks are transparent and rely on the board reflecting light back through them, so every color laid on kraft comes back warmer and darker than the same build on white. Pale tones lose the most, and anything with white in it can disappear altogether.',
          'Where a brand color has to be exact, the answer is a printed white underbase in that area or a solid PMS ink rather than a CMYK build. Both are ordinary requests and both cost something, and the point of raising it at specification stage is that a design can be adjusted cheaply then and not after a proof.',
        ],
      },
      {
        h2: 'Shade variation between runs',
        body: [
          'Colored and recycled kraft stocks are made from a changing mix of recovered fiber, so the shade moves slightly from batch to batch. On a fully printed carton nobody sees it. On a plain colored box, where the board is the design, two production runs sitting side by side on a shelf will not match.',
          'There are three honest ways to handle it — accept the variation as part of the material, print a solid area that carries the brand regardless of the base, or buy a mill-controlled grade with a tighter shade tolerance and pay for it. What does not work is expecting an uncontrolled stock to match a reference from six months earlier.',
        ],
      },
    ],
    link: {
      lead: 'The behavior is most pronounced on dark stock, and ',
      href: '/product/black-kraft-boxes/',
      anchor: 'the black kraft box page covers underprint and foil options',
      tail: ' for that case.',
    },
    faqs: [
      { question: 'Why do my colors look wrong on kraft board?', answer: 'The brown substrate shows through the ink and pulls every color down. A white underprint restores them at the cost of an extra pass, or the design can be built for kraft using one or two high-contrast colors.' },
      { question: 'Can you print white on kraft?', answer: 'Yes, and on darker stocks it is effectively required. An opaque white underbase goes down first so the colors above it stay accurate.' },
      { question: 'Is colored kraft dyed all the way through?', answer: 'On dyed stocks, yes, so a cut edge shows the same color as the face. Surface-colored board shows brown at the cut, which is visible on every edge of a finished box.' },
      { question: 'Will a printed sample look like my screen proof?', answer: 'Not exactly, and on uncoated kraft the gap is wide enough to matter. We recommend approving a printed sample on the actual board rather than a digital proof for anything color-critical.' },
      { question: 'Does colored board cost more than plain kraft?', answer: 'Dyed stocks carry a premium over standard brown kraft, and black is usually the most expensive. Whether it beats printing a color onto plain kraft depends on the coverage your design needs.' },
      { question: 'Which finishes work best on dark board?', answer: 'Foil and deboss, because both work with the surface rather than trying to print over it. Spot UV needs contrast with a matt ground to register at all.' },
      { question: 'Can I get the same color across reorders?', answer: 'On offset and flexo we hold the ink formulation, which gives a tight match run to run. Digital has a wider tolerance, so for repeat color consistency we would quote the plate-based route.' },
      { question: 'Is dyed kraft still recyclable?', answer: 'The board is, in the same stream as plain kraft. What changes recyclability is a plastic lamination on top, not the dye in the fiber.' },
      { question: 'Do you supply plain colored board without printing?', answer: 'Yes. On a strong stock a plain box with a single foil or debossed mark often reads better than full coverage, and it costs less.' },
      { question: 'What board weights are available in color?', answer: 'The usual range, though the very heaviest calipers are limited in some dyed stocks. If you need both a specific color and a heavy caliper, tell us early so we can confirm availability before quoting.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'kraft-industrial-packaging': {
    intro: [
      'Industrial packaging is specified against a number rather than a look. Stacking height, load weight, storage conditions and how many times a case is handled all have answers, and those answers set the board.',
      'This range covers bulk crates, heavy-duty storage, chemical-safe and insulated builds, and the compostable stocks.',
    ],
    sections: [
      {
        h2: 'Specifying against stacking rather than weight',
        body: [
          'The figure that decides a case is rarely the weight of its own contents. It is the load sitting on top of it in a rack or on a pallet, held there for weeks. A case rated for its own contents alone will crush at the corners under a stack, and the failure shows at the bottom of the pallet.',
          'Send the stacking height and the weight above the bottom unit and the board follows from those two numbers.',
        ],
        table: {
          caption: 'Wall construction by load',
          head: ['Condition', 'Construction', 'Note'],
          rows: [
            ['Single unit, parcel shipped', 'Single wall C flute', 'Adequate below roughly 15 lb'],
            ['Stacked two high', 'Single wall C flute', 'Edge crush becomes the limit'],
            ['Stacked three or more', 'Double wall BC flute', 'Corner crush is the failure mode'],
            ['Heavy or dense contents', 'Double wall, reinforced base', 'Load path runs straight down'],
            ['Long-term warehouse storage', 'Moisture-resistant treatment', 'Board softens as it equalises'],
          ],
        },
      },
      {
        h2: 'Board and humidity over time',
        body: [
          'Paperboard takes on moisture from the air until it equalises with its surroundings, and its stacking strength falls as it does. A case that tests correctly on the day it is made can be measurably weaker after a month in a humid warehouse. Where stock sits for long periods, that has to be specified for rather than discovered.',
        ],
      },
      {
        h2: 'Pallet fit is a structural decision',
        body: [
          'A case whose corners hang past the pallet edge has lost the support under the exact points carrying the stack, and even a small overhang cuts stacking strength substantially. That makes the pallet footprint part of the box specification rather than a logistics detail settled afterwards.',
          'Working outward from the product usually produces a case that overhangs and a pallet that carries less than it could. Dividing a standard pallet footprint into a whole number of cases and then fitting the product to that generally produces a better box, a fuller pallet and a lower cost per unit shipped.',
        ],
      },
      {
        h2: 'Marking a case so it is handled properly',
        body: [
          'Handling information is only useful if it is readable from where the decision is made, which is a forklift or the far side of a pallet rather than arm\'s length. Printing it rather than applying labels avoids the common failure of a label lifting in transit and taking the instruction with it.',
        ],
        list: [
          'Gross weight, so nobody has to guess before lifting.',
          'Orientation arrows, on more than one face — a case that has been turned shows whichever face is now outward.',
          'A stacking limit, which is the figure most often assumed rather than stated.',
          'Any handling restriction, in words as well as a symbol.',
          'A part or batch reference large enough to read across a warehouse aisle.',
        ],
      },
      {
        h2: 'Single-trip against returnable',
        body: [
          'The first question on an industrial pack is how many journeys it makes, because almost everything else follows from it. A case used once is specified to survive one chain at the lowest sensible cost. A case running a closed circuit between two sites can justify a far heavier board, since the cost is spread across every trip it makes.',
          'A returnable case also carries a requirement the single-trip version never has — it must survive being knocked down and re-erected repeatedly, which is a different stress from carrying a load, and it needs a label area that can be changed rather than printed once.',
        ],
      },
    ],
    link: {
      lead: 'Where the requirement is straightforward transit rather than storage, ',
      href: '/product/kraft-shipping-boxes/',
      anchor: 'the shipping box range covers single and double wall builds',
      tail: '.',
    },
    faqs: [
      { question: 'How do I know which board grade I need?', answer: 'From the stacking height and the weight sitting above the bottom unit, not from the weight of the contents alone. Send those two figures and we specify against them rather than against an average.' },
      { question: 'What is edge crush and why does it matter?', answer: 'It measures how much load a board edge carries before it fails, which is what actually holds a stack up. It is a better guide for palletised work than board thickness.' },
      { question: 'Do these boxes hold up in a damp warehouse?', answer: 'Untreated board softens as it takes on moisture, and its stacking strength drops with it. A moisture-resistant treatment addresses that, and it has to be specified at the start.' },
      { question: 'Can you supply compostable industrial packaging?', answer: 'Compostable stocks are available, though certified compostability, recycled content and curbside recyclability are three different claims. Tell us which one you intend to print.' },
      { question: 'Are insulated boxes available for cold chain?', answer: 'Yes, with liners appropriate to the hold time you need. The hold duration matters more than the ambient temperature, so send the journey length rather than a temperature alone.' },
      { question: 'What about chemical or hazardous contents?', answer: 'Requirements differ by substance and by transport mode, and marking is usually mandatory. Send the specific requirement your operation works to rather than a general description.' },
      { question: 'Can you print on heavy corrugated?', answer: 'Yes, usually flexo direct to the board. For an outer case handled by staff rather than customers, one or two colors normally does everything that is needed.' },
      { question: 'Do you supply pallet-ready case sizes?', answer: 'Yes, and it is worth designing inward from the pallet pattern. A case sized without reference to the pallet wastes space on every layer, which costs on every shipment.' },
      { question: 'How should the base be constructed for heavy contents?', answer: 'With a full-overlap or tray base rather than a single glued seam. On a heavy item the load path runs straight down, and the base is the panel that has to hold it.' },
      { question: 'Can I order plain cases without any print?', answer: 'Yes, and for internal transit it is usually the sensible choice. Print adds cost without doing any selling on a case the customer never sees.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'kraft-display-packaging': {
    intro: [
      'A display has one job that a box does not — it has to hold its shape while full, in a shop, for weeks, with people taking stock out of it.',
      'This range covers counter and floor displays, hanging units, retail trays and shelf-ready cases. Each is a structural calculation rather than a print job.',
    ],
    sections: [
      {
        h2: 'Grading a display against a full facing',
        body: [
          'The load is not the weight of one item, it is the weight of a full facing pressing on the base and the front lip. Displays that bow in a shop were almost always graded against an empty unit or a single product. Send the weight of a full facing and the reinforcement goes where the load actually sits.',
        ],
      },
      {
        h2: 'Getting a shelf-ready perforation right',
        body: [
          'The perforation on a shelf-ready case is the hardest part of the structure to get correct. Too weak and it opens in transit; too strong and staff tear it badly, leaving a ragged unit facing customers for the rest of the day. It is decided at dieline stage, and it is one of the clearest cases for approving a physical sample first.',
        ],
      },
      {
        h2: 'Retailer specifications',
        body: [
          'Grocery and pharmacy chains publish case dimensions, pallet patterns and barcode placement, and they are rarely negotiable. If you are supplying one, send the requirement and the structure is designed inward from it rather than adjusted afterwards.',
        ],
      },
      {
        h2: 'A display that empties loses its structure',
        body: [
          'In most stacked displays the product inside is carrying a significant share of the load. Take two thirds of it away and the walls have nothing to brace against, so the unit starts to lean at exactly the point in its life when it is still expected to sell the remaining stock.',
          'The answer is a frame that stands on its own — reinforced side walls, an internal spine, or a tray structure that does not rely on being full. It costs a little more board and it is what keeps a display selling down to the final unit rather than being tidied away half full.',
        ],
      },
      {
        h2: 'Assembly happens in an aisle, not a studio',
        body: [
          'A display arrives with a colleague who has a trolley of other work and no instructions to hand. If it takes five minutes and a diagram it goes into the back room and never reaches the floor, which is the most common fate of an elaborate display and the one nobody plans for.',
          'Anything that folds up in one movement gets used. That single property does more for a campaign than any amount of print on the header, because a display in a stockroom achieves nothing at all.',
        ],
      },
      {
        h2: 'Sight lines, and where a shopper actually looks',
        body: [
          'Displays are seen from several meters away, at an angle, by somebody walking past. What registers at that distance is the header and the silhouette, not a product photograph or a paragraph of copy. Designs meant to be read from directly in front are designed for a view almost nobody has.',
        ],
        table: {
          caption: 'What each format has to get right',
          head: ['Format', 'Seen from', 'The critical dimension'],
          rows: [
            ['Floor standing unit', 'Down the aisle', 'Header height and legibility'],
            ['Counter unit', 'Directly above, close', 'Footprint on a crowded till point'],
            ['Shelf-ready tray', 'Shelf edge, at an angle', 'Front wall height'],
            ['Pallet display', 'Across an open floor', 'Standing square when part empty'],
            ['Hanging pack', 'Along a row of pegs', 'Thickness, which sets the facings'],
          ],
        },
      },
    ],
    link: {
      lead: 'For counter units specifically, ',
      href: '/product/kraft-display-boxes/',
      anchor: 'the display box page covers counter and shelf builds',
      tail: '.',
    },
    faqs: [
      { question: 'Will the display hold its shape when it is full?', answer: 'That is a structural calculation rather than a hope. Send the weight of a full facing and we grade the board and add reinforcement where the load sits, which is usually the base and the front lip.' },
      { question: 'How does a shelf-ready case open?', answer: 'Along a designed perforation. Getting its strength right is the hardest part of the structure, so we recommend approving a physical sample before committing to a run.' },
      { question: 'Do I need to match a retailer specification?', answer: 'If you supply a grocery or pharmacy chain, almost certainly. Case dimensions, pallet pattern and barcode placement are usually published and fixed. Send the requirement and we design inward from it.' },
      { question: 'Can displays ship flat and be assembled in store?', answer: 'Yes, and for anything going to multiple sites it is usually the right choice. The trade is that assembly has to be simple enough for staff to do quickly and correctly.' },
      { question: 'What is the difference between a counter and a floor display?', answer: 'Height and load path. A floor unit carries its own weight over a much longer span and needs a reinforced base and often an internal support, where a counter unit does not.' },
      { question: 'Are hanging displays an option for small products?', answer: 'Yes, with a reinforced hang tab or a euro slot. The failure point is the board around the hole, so that area is strengthened rather than the panel as a whole.' },
      { question: 'How many facings should a display hold?', answer: 'Enough to look full at the end of a restocking cycle rather than only at the start. A display that empties visibly halfway through the week reads as an unpopular product.' },
      { question: 'Can displays be printed on both sides?', answer: 'Yes. Interior print matters on units that empty during the day, because the inside back panel becomes the visible surface as stock goes down.' },
      { question: 'Do you supply the tray and the outer case together?', answer: 'Yes, and specifying them together usually costs less. A tray that holds the contents still often lets us drop a grade on the outer case.' },
      { question: 'How long do display units take to produce?', answer: 'Structural work with assembly sits at the longer end of the standard production window. We confirm a firm date in writing with the quote rather than quoting a range.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'kraft-pharma-boxes': {
    intro: [
      'Pharmaceutical and supplement cartons are specified around required copy before anything else. The panel has to carry it at a legal minimum size, and design works around what is left rather than the other way round.',
      'This range covers medicine and syrup cartons, supplement and vitamin boxes, first aid kits and PPE packaging.',
    ],
    sections: [
      {
        h2: 'The leaflet is a dimension',
        body: [
          'A folded patient leaflet commonly adds several millimeters of depth that the blister or bottle dimensions do not account for. A carton sized from the medicine alone runs tight, jams on an automatic cartoner and has to be re-tooled after the board has been bought. Send the folded leaflet with the product sample.',
        ],
      },
      {
        h2: 'Panels that are prescribed rather than designed',
        body: [
          'Supplement Facts panels have a prescribed format with minimum type sizes that scale with package surface area, and they usually take most of one panel. Laying the panel out first at its correct size, then designing the remaining area, is what avoids a reprint.',
        ],
      },
      {
        h2: 'Tamper evidence and its variants',
        body: [
          'Tear strips, tuck locks with a frangible tab and applied security seals each give a different level of evidence, and "tamper-evident" is used loosely across the industry. Tell us which standard you work to, because the structures differ considerably.',
        ],
      },
      {
        h2: 'Coding is applied after the carton is made',
        body: [
          'These cartons are finished twice. Once at the printer, and again on the packing line, where a batch number, an expiry date and in many markets a unique serialization code are printed onto a carton that already exists.',
          'Inkjet and thermal transfer coding need a matte, absorbent surface to hold. A full varnish across the panel makes the code bead or smudge, so an uncoated window is left for it and its position is agreed with whoever runs the line rather than chosen by the designer. A surface that will not take line-applied ink is a carton that cannot be filled, however good it looks.',
        ],
      },
      {
        h2: 'Braille has to be positioned, not added',
        body: [
          'Braille embossing is required on medicine cartons across much of Europe and increasingly expected elsewhere. It is raised, it needs a clear flat area, and it deforms whatever is printed underneath it.',
          'That makes it a layout decision taken at the start. Adding it to a finished design almost always means moving something else, and the something else is usually the branding — which is how a carton ends up with its identity pushed onto a side panel to make room for a requirement that was known all along.',
        ],
      },
      {
        h2: 'Where medicines and supplements diverge',
        body: [
          'The two look almost identical on a shelf and are governed by different regimes, which catches people out when a range extends from one into the other.',
        ],
        table: {
          caption: 'Two regimes, one shelf',
          head: ['Requirement', 'Medicines', 'Supplements'],
          rows: [
            ['Governing category', 'Medical product', 'Regulated as food'],
            ['Claims', 'Prescribed wording', 'Approved list only, no medicinal claims'],
            ['Braille', 'Required in many markets', 'Not required'],
            ['Leaflet', 'Usually mandatory, sets the depth', 'Rarely needed'],
            ['Nutrition panel', 'Not applicable', 'Full declaration required'],
          ],
        },
      },
    ],
    link: {
      lead: 'For supplement and vitamin work specifically, ',
      href: '/product/kraft-supplement-boxes/',
      anchor: 'the supplement box page covers panel space and bottle sizing',
      tail: '.',
    },
    faqs: [
      { question: 'Why does my carton jam on the packing line?', answer: 'Most often the leaflet. A folded patient leaflet adds several millimeters of depth, and a carton sized from the blister alone runs tight and jams at speed. Send the leaflet with the sample.' },
      { question: 'How much space does a Supplement Facts panel need?', answer: 'More than most brands allow for. It has a prescribed layout with minimum type sizes that scale with surface area, and it usually takes most of one panel.' },
      { question: 'What tamper-evident options are available?', answer: 'Tear strips, tuck locks with a frangible tab and applied security seals. Each gives a different level of evidence, so tell us which standard you are working to.' },
      { question: 'Can you supply versioned proofs with sign-off records?', answer: 'Where a quality system requires it, yes — dated proofs against a revision number with the approval record retained. Ask at quoting so the documentation is built alongside the job.' },
      { question: 'Do you handle Braille requirements?', answer: 'Braille can be applied where a market requires it. It needs clear space around it and cannot overlap print, so it is placed at dieline stage rather than added to finished artwork.' },
      { question: 'Are child-resistant structures available?', answer: 'Child-resistant structures with certified closures can be produced. Compliance is verified against the regulations in force when the order runs, so send the specific requirement rather than a general description.' },
      { question: 'What board suits an automatic cartoner?', answer: 'A folding boxboard chosen for consistent creasing rather than for feel. A board that creases inconsistently is a production problem long before it is a design one.' },
      { question: 'Can batch and expiry fields be left for overprinting?', answer: 'Yes, and they should be. Those fields are printed at filling, so the artwork leaves a clear, correctly positioned area for them rather than printing placeholder text.' },
      { question: 'Do you produce packaging for PPE and first aid kits?', answer: 'Yes. Those tend to be mixed-content packs, so a compartmented insert matters as much as the outer carton for keeping the contents identifiable.' },
      { question: 'Will lamination affect barcode scanning?', answer: 'It can, particularly gloss under certain scanners. We check the scan on the finished laminated stock rather than on a proof, because a proof will not show the problem.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'jewelry-accessories-boxes': {
    intro: [
      'Almost nothing in this range is heavy, and almost everything in it moves. Chains tangle, earrings work loose, rings drop out of a slot cut slightly too wide. Retention is the whole problem.',
      'The box is also opened in front of someone more often than not, which puts the interior and the hinge under more scrutiny than the printing.',
    ],
    sections: [
      {
        h2: 'Holding a piece in one position',
        body: [
          'A chain held at one end swings and works itself into a knot; held at two, it arrives laid out as it was packed. Earring posts need a pierced pad rather than a flat one, or they sit on the surface with nothing gripping them. Ring slots have to match band width, because one slot cannot hold both a 2 mm wedding band and an 8 mm signet.',
        ],
        table: {
          caption: 'Interior by piece',
          head: ['Piece', 'Interior', 'Failure it prevents'],
          rows: [
            ['Necklace or chain', 'Slotted pad, held at two points', 'Arriving tangled'],
            ['Earrings', 'Pierced or slit pad', 'A stud working loose and being lost'],
            ['Ring', 'Sprung slot matched to band width', 'Marking the band or dropping out'],
            ['Bracelet', 'Long slotted pad', 'Sliding into a corner with the clasp caught'],
            ['Watch', 'Bolster the strap wraps around', 'A permanent crease across the strap'],
          ],
        },
      },
      {
        h2: 'Specifying a range rather than a box',
        body: [
          'Boxes ordered one at a time as each product launches almost never match. Fixing the wrap stock, the interior color and the closure once and varying only the footprint is what makes a collection read as one brand when a customer buys twice.',
        ],
      },
      {
        h2: 'What the lining does to a finish over years',
        body: [
          'Plating on costume jewelry is measured in microns and abrades against anything rough. Since a piece sits against its interior for as long as it is owned, the lining is protecting the product rather than decorating the box — which is not how it usually gets specified.',
          'Flock and foam are gentle and hold a piece firmly. A smooth coated card is gentle and holds less. Bare board is abrasive and should not touch a polished surface at all, however good it looks on the day the box is made.',
        ],
      },
      {
        h2: 'These boxes are kept, so the hinge matters',
        body: [
          'Almost no jewelry box is thrown away. It goes into a drawer holding the piece between wearings and is opened for years, which puts a working life on a component most packaging never needs.',
          'A hinge rated for one opening will not do, and a lid cut for a snug fit becomes tight as the board takes up moisture and then tears at a corner. A slightly easy fit and a proper hinge are what keep the box in service for as long as the piece is owned.',
        ],
      },
      {
        h2: 'One outer, several interiors',
        body: [
          'A jeweler with eight product types does not need eight boxes. The tooling, the die and the print plates all sit on the outer, so one box in two or three sizes with a different insert in each covers a whole range — and a new product needs a new insert rather than a new box.',
          'The constraint is depth. A shared outer works only if every interior lives within one internal depth, so the deepest piece in the range — usually a bangle or a cuff — has to be identified before the outer is tooled rather than discovered six months later.',
        ],
      },
    ],
    link: {
      lead: 'For ring boxes specifically, where slot width is the deciding measurement, ',
      href: '/product/kraft-ring-packaging-boxes/',
      anchor: 'the ring box page covers pillow and slot options',
      tail: '.',
    },
    faqs: [
      { question: 'Why do necklaces arrive tangled?', answer: 'Because the chain is held at one end, or not at all, and swings in transit. Two fixing points plus a separate seat for the pendant stops it — a tighter box on its own does not.' },
      { question: 'How do I stop earrings coming loose?', answer: 'The pad has to be pierced or slotted so the post or hook is gripped rather than resting on the surface. A flat unpierced pad holds nothing once the box is turned over.' },
      { question: 'Will one ring box fit my whole range?', answer: 'The outer box will; the pillow slot will not. Tell us your narrowest and widest band and we normally specify two slot widths behind one identical exterior.' },
      { question: 'Can the same box hold a bracelet and a bangle?', answer: 'The outer can, the insert cannot. A bangle needs a compact square and a chain bracelet needs a long slotted pad, so we keep one outer size and specify two fitments.' },
      { question: 'What stops a watch strap creasing?', answer: 'A bolster the strap wraps around, so it curves rather than folding. Packing a strap flat against a board pad is what sets a permanent crease into leather and silicone.' },
      { question: 'Does the interior color matter?', answer: 'More than the outer print, because the lid is open for the whole moment that matters. A deep matt interior makes a bright metal piece read clearly against it.' },
      { question: 'Can I add a logo to a small jewelry box?', answer: 'Yes, though the printable area is small. One mark and one line of type is usually all that reads at this size, and a deboss or foil often works better than print.' },
      { question: 'Are inserts available separately?', answer: 'Yes. If you already buy an outer box you are happy with, we can produce the fitment alone, sized to the internal dimensions rather than the external ones.' },
      { question: 'Should the box be rigid or folding?', answer: 'Rigid for anything opened in front of a customer, because the hinge and the way the lid holds open are part of the impression. Folding suits volume gifting where the box is not kept.' },
      { question: 'Can you match an existing box I already use?', answer: 'Send the physical box rather than a photograph. Wrap stock, interior color and closure are what make a jewelry box feel the way it does, and none of them photograph accurately.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'kraft-apparel-boxes': {
    intro: [
      'Soft goods are forgiving about impact and unforgiving about volume. Nothing here breaks, but almost everything here ships larger than it needs to, and on apparel that is the whole cost problem.',
      'This range covers shirt and apparel boxes, plus the smaller accessory formats — belts, socks, scarves, underwear.',
    ],
    sections: [
      {
        h2: 'Whether the box is needed at all',
        body: [
          'Apparel moves in cartons largely out of habit. For non-fragile soft goods a flat mailer removes both volume and weight, and the freight saving is immediate on every parcel. A box earns its place where presentation is part of what the customer paid for — gifting, premium retail, a brand where the unboxing is the point.',
        ],
      },
      {
        h2: 'Sizing to folded dimensions',
        body: [
          'The measurement that matters is the garment folded as it will actually be packed, not laid flat and not as the supplier lists it. Fold it, stack it, measure that. Garments also compress, so a box sized to an uncompressed stack ships mostly air.',
        ],
      },
      {
        h2: 'One box across a whole size run',
        body: [
          'Clothing is the rare category where a single product arrives in six volumes. An extra small and an extra large of the same garment fold to noticeably different bulks, and almost nobody wants to stock six box sizes to match.',
          'The box is therefore sized to the largest fold, and the interior stops the smallest looking lost inside it. Tissue, a paper wrap or a printed card turns that empty space into presentation for less than a second box size would cost. Where the spread is very wide — a vest against a heavy knit — two sizes are cheaper than shipping one oversized box on every order.',
        ],
      },
      {
        h2: 'Returns are a second journey',
        body: [
          'Clothing has return rates unlike any other category, and a meaningful share of these boxes travel twice. That makes the closure a two-way component: it has to open without being destroyed and close again well enough to survive the trip back.',
          'A double adhesive strip — one for dispatch, one for the return — costs very little and removes the taped-and-string parcels that arrive at a returns desk in a state nothing can be resold from.',
        ],
      },
      {
        h2: 'Natural fibers need air',
        body: [
          'Wool, cotton, linen and silk are natural fibers, and sealed airtight for a season they take on a stale smell and can yellow. A paperboard box with a paper wrap breathes; the same garment sealed into a polybag inside that box does not.',
          'Where stock is held between production and sale, this is a quality decision rather than an environmental one, although it happens to serve both. It is also the easiest plastic to remove from an apparel range, because nothing about the product needs it.',
        ],
      },
    ],
    link: {
      lead: 'If a flat pack turns out to suit the range better than a box, ',
      href: '/product/kraft-mailer-boxes/',
      anchor: 'the mailer range covers lower-volume alternatives',
      tail: '.',
    },
    faqs: [
      { question: 'Could my products ship in something flatter?', answer: 'Very often. Apparel moves in cartons out of habit rather than need, and for non-fragile soft goods a flat mailer removes volume and weight with sufficient protection.' },
      { question: 'What dimensions should I send for a shirt box?', answer: 'The garment folded as it will actually be packed, then measured as a stack. Laid-flat measurements and supplier dimensions both produce a box that is the wrong depth.' },
      { question: 'Do apparel boxes need any protection inside?', answer: 'Rarely for the garment itself. Tissue is presentational rather than protective, and where a box is oversized the answer is a smaller box rather than more filler.' },
      { question: 'Can I use one box across several garment types?', answer: 'Usually two or three depths cover a whole range, sharing one footprint and one print. That keeps the shelf and unboxing look consistent without shipping air.' },
      { question: 'Is a window worth it on apparel packaging?', answer: 'It helps where color is the deciding factor at retail. It costs stiffness in that panel, and on a large lidded box that often means stepping the board up a grade.' },
      { question: 'What closure suits a garment box?', answer: 'A lift-off lid for presentation, a tuck lock for retail volume, a magnetic closure where the box is opened in front of someone. The choice follows where it is opened.' },
      { question: 'Do these boxes stack in a stockroom?', answer: 'Yes, though stacking strength depends on the board rather than the contents, since garments provide no support. Send the stack height if boxes are stored full.' },
      { question: 'Can you print the inside of the lid?', answer: 'Yes, and on direct-to-consumer apparel it is usually worth it. The inside of the lid is what the customer sees first when the box is opened.' },
      { question: 'How do I package accessories like belts or socks?', answer: 'Those suit smaller formats — sleeves, pillow boxes or narrow cartons — cut to the coiled or folded shape rather than to a rectangle around it.' },
      { question: 'Are recycled stocks available for apparel packaging?', answer: 'Yes, across most of the boards in this range. Recycled fibers are slightly less stiff at the same caliper, so we usually step up one grade to keep large panels feeling firm.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'kraft-art-boxes': {
    intro: [
      'Everything in this range protects something flat, and flat things fail in one specific way — they bend at the corner, and paper does not recover from a crease.',
      'It covers document mailers, certificate and photo frame boxes, brochure and calendar packaging, and art supply and disc formats.',
    ],
    sections: [
      {
        h2: 'Rigidity across the span, not thickness',
        body: [
          'A large flat panel bends across its middle regardless of how thick the board is. What stops it is stiffness across the span — a heavier caliper, a corrugated backing board, or a fold that turns a flat sheet into a structure. On anything above roughly A4, a stiffener costs less than the returns from creased deliveries.',
        ],
      },
      {
        h2: 'Corners take the damage',
        body: [
          'On flat packs the corner is where a drop concentrates, and a bent corner is visible on every item inside. Corner protection or a slightly oversized pack with the contents held inboard addresses it directly, where extra board thickness across the whole panel mostly does not.',
        ],
      },
      {
        h2: 'Flat or rolled, and what each costs the recipient',
        body: [
          'Anything on paper can travel flat or rolled, and the choice is made on what happens after it arrives rather than on what survives the journey. A rolled print travels well and arrives with a curl that never entirely relaxes, so somebody framing it has to weight it flat for days first.',
          'A flat mailer arrives ready to use, is more vulnerable in transit and costs more to send. For anything that will be framed, signed or presented, flat is worth the difference. For a large poster with a decorative life ahead of it, a tube is usually the sensible answer.',
        ],
        table: {
          caption: 'Format against what the item has to do next',
          head: ['Item', 'Send', 'Why'],
          rows: [
            ['Certificates and awards', 'Flat', 'Framed or filed immediately'],
            ['Fine art prints', 'Flat', 'A curl shows in a frame'],
            ['Large posters', 'Rolled', 'Flat costs more than the print'],
            ['Photographs', 'Flat', 'Surface marks if it flexes'],
            ['Brochures in bulk', 'Flat, boxed', 'Weight, not bending, is the risk'],
            ['Calendars', 'Flat', 'A bent binding is visible damage'],
          ],
        },
      },
      {
        h2: 'Printing "do not bend" does nothing',
        body: [
          'It is a request, and a sorting machine cannot read it. The only thing that keeps a flat item flat is the pack being physically unable to fold, which is a structural specification rather than a printed one.',
          'That means thinking about the diagonal. Corrugated is far stiffer across its flutes than along them, so a mailer cut without regard to flute direction is rigid one way and limp the other. A flat parcel gripped at two opposite corners bends across its diagonal, and no single sheet resists that well — a cross-laminated board or a second internal sheet at right angles is what closes the gap.',
        ],
      },
      {
        h2: 'Rain, and where these parcels are left',
        body: [
          'Flat mailers are left in porches, on doorsteps and in unheated hallways, and paper inside an untreated board mailer takes up water through the seams. A moisture-resistant board or a simple inner sleeve prevents it.',
          'It matters most for exactly the items people send this way — certificates, artwork, signed prints — where the damage is not repairable and the item is usually irreplaceable. It is the cheapest part of the specification and the one most often left out.',
        ],
      },
    ],
    link: {
      lead: 'For posted flat items in particular, ',
      href: '/product/kraft-document-mailers/',
      anchor: 'the document mailer page covers rigid and stiffened builds',
      tail: '.',
    },
    faqs: [
      { question: 'How do I stop documents arriving creased?', answer: 'Stiffness across the span rather than thicker board. A corrugated backing board or a rigid mailer stops the bend that a flat pack takes across its middle.' },
      { question: 'What size should a document mailer be?', answer: 'Large enough to take the contents unfolded, with the item held inboard of the corners so a drop lands on the pack rather than on the artwork.' },
      { question: 'Are these suitable for framed items?', answer: 'With corner protection, yes. A frame concentrates weight at its corners, so the pack needs cushioning where the load actually sits rather than uniformly.' },
      { question: 'Can you produce packaging for calendars and brochures?', answer: 'Yes, cut to the finished size and binding. A wire binding adds depth on one edge that a flat measurement misses, and that is what makes a pack fail to close.' },
      { question: 'Do you supply disc and media packaging?', answer: 'Yes, in sleeve and carton formats. The disc has to be held so it cannot move across its face, since surface contact is what causes the damage.' },
      { question: 'What board weight suits a certificate box?', answer: 'Enough that a large lid does not flex when it is lifted, which is more than the weight of the contents suggests. Panel span drives the choice, not the load.' },
      { question: 'Can artwork be printed on the inside?', answer: 'Yes. On presentation formats the interior is in view for the whole time the box is open, which is often longer than for a retail pack.' },
      { question: 'Are recycled boards available here?', answer: 'Yes, though recycled fiber is slightly less stiff at the same caliper. On large flat panels that difference is noticeable, so we usually step up a grade.' },
      { question: 'How should art supplies with mixed contents be packed?', answer: 'With a compartmented insert. Mixed items loose in one cavity shift, and the set looks incomplete on opening even when everything is present.' },
      { question: 'Do you make packaging for oversized artwork?', answer: 'Yes, including tube formats for rolled work. Rolling avoids the crease risk entirely, though it is not suitable for anything already mounted or framed.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'kraft-electronics-boxes': {
    intro: [
      'This range covers the small carried items — pens, pencils, notebooks, keychains, badges and stationery. What they share is that the pack is small, the print area is limited, and the unit cost has to stay low because the product itself is inexpensive.',
      'That combination rules out most of the decisions that would be obvious on a larger pack.',
    ],
    sections: [
      {
        h2: 'Working within a small print area',
        body: [
          'On a narrow carton one mark and one line of type is usually everything that reads. Designs that work on screen at full size become illegible at 40 mm across. Design for the panel at its actual size and check it printed rather than on a monitor.',
        ],
      },
      {
        h2: 'Cost per unit at low price points',
        body: [
          'Each additional press pass is material to margin when the product sells for a few dollars. Two colors on uncoated kraft usually does more for these formats than four colors with a finish, and a multipack carton frequently makes commercial sense where a single-unit carton does not.',
        ],
      },
      {
        h2: 'Tooling dominates the price at this size',
        body: [
          'Everything in this range uses very little material, which makes the unit price behave in a way that surprises people. The die, the plate and the machine set-up cost what they cost whether the box is two inches or twelve, so on something small the fixed costs are most of the price.',
          'Five hundred and five thousand units of the same tiny box are not five hundred and five thousand times a unit rate — they are two quite different prices per box. Settling the annual quantity before the dimensions is the way to get a figure that means anything.',
        ],
      },
      {
        h2: 'Small objects are dense, and they move',
        body: [
          'A metal keychain, a pen, a badge or a cable is heavy for its size, and loose in a box it slides the full internal length at every handling. It marks the inside of the board, it makes the pack sound empty, and it arrives sitting in one corner.',
          'On items this small the insert is frequently a larger part of the cost than the box itself, and it is still the right decision. A card the product clips to, or a die-cut seat, fixes the position and separates any protruding part — a clip, a ring, a pin — from the surface it would otherwise scratch.',
        ],
      },
      {
        h2: 'How it is displayed decides the build',
        body: [
          'These are impulse and gift lines, and where the pack physically sits does more to the specification than the product does.',
        ],
        list: [
          'On a hook — a reinforced hang hole, since the whole weight passes through one narrow bridge of board that shoppers handle repeatedly.',
          'On a counter or in a bowl — a stable base and a front that reads from arm\'s length rather than from the hand.',
          'On a shelf among competitors — a flat front panel, because the pack is seen face-on and in a row.',
          'Posted individually — a finished thickness measured against the carrier\'s letter dimensions, since a few millimeters moves every order into a higher band.',
          'Given by hand — no display requirement at all, so the money moves to the interior and the opening.',
        ],
      },
    ],
    link: {
      lead: 'For stationery sets and mixed-content packs, ',
      href: '/product/kraft-stationery-boxes/',
      anchor: 'the stationery box page covers compartment options',
      tail: '.',
    },
    faqs: [
      { question: 'How much can I print on a small carton?', answer: 'Less than most designs assume. One mark and one line of type is usually all that reads at this size, so design for the panel at its actual dimensions and check a printed sample.' },
      { question: 'Is a carton worth it on a low-priced product?', answer: 'Per single unit, often not. A multipack carton or a printed sleeve usually works better commercially, and we will price both against your margin.' },
      { question: 'What board suits pens and pencils?', answer: 'A light caliper is adequate for the weight, but a long narrow carton on very light board feels flimsy. The perceived quality drives the choice more than the load does.' },
      { question: 'Can you produce window packs for small items?', answer: 'Yes. On a narrow panel a window removes a large proportion of the stiffness, so the board usually steps up a grade to compensate.' },
      { question: 'Do you supply hanging packs for retail pegs?', answer: 'Yes, with a reinforced hang tab or euro slot. The failure point is the board around the hole rather than the panel, so that area is strengthened specifically.' },
      { question: 'How do I keep a set of items from rattling?', answer: 'A board insert with a seat for each item. Rattling reads as a cheap or incomplete product before the customer has even opened it.' },
      { question: 'Are these formats suitable for promotional runs?', answer: 'Yes, and short runs suit digital print with no plate cost. Variable data such as names or event dates costs very little on a digital press.' },
      { question: 'What finishes are worth it at this price point?', answer: 'Usually none beyond a coating. Each finish is a separate pass, and at a low unit price that cost is visible in the margin in a way it is not on premium packaging.' },
      { question: 'Can I get one box design across a stationery range?', answer: 'Yes. Keeping one board, one print system and one finish across the range and varying only the dieline is what makes a set look deliberate.' },
      { question: 'Are recycled stocks available?', answer: 'Yes, across this whole range, and uncoated recycled kraft suits the category visually as well as environmentally.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'kraft-toy-packaging': {
    intro: [
      'Toy and baby packaging is bought by an adult who is checking two things quickly — what is inside, and whether it is safe. Both have to be answerable without opening the pack.',
      'This range covers toy boxes, board game and puzzle packaging, and baby product cartons.',
    ],
    sections: [
      {
        h2: 'Showing the contents without opening',
        body: [
          'A window or a printed representation of the contents does more work here than in almost any other category, because the purchase decision happens in front of the shelf. Where a window is not practical, a clear photographic panel serves the same purpose.',
          'A window costs stiffness in the panel it sits in, so the board usually steps up a grade to compensate — worth knowing before the aperture is drawn, because it changes the quote rather than just the artwork. Keeping the aperture away from the corners and creases preserves most of that strength.',
          'The other panel that earns its space is the back. It is where an adult looks for the age grading, the piece count and the warning text, and a layout that leaves room for those marks before design begins avoids a redraw once the compliance copy arrives.',
        ],
      },
      {
        h2: 'Board game and puzzle structures',
        body: [
          'Game boxes take repeated opening over years rather than one journey, and the lid is a wear component. A telescoping lid with a properly specified crease survives that; a plain tuck does not. Puzzle boxes carry concentrated weight for their size, so the base matters more than the walls.',
          'Depth is the specification most often got wrong. A lid and base sized to the contents exactly will bind as soon as humidity swells the board, so the lid is cut fractionally oversize on purpose. Too much and the lid slides off in a stack; the tolerance is small and it is set at dieline stage.',
        ],
        table: {
          caption: 'Structure by what the pack has to survive',
          head: ['Product', 'Structure', 'Why'],
          rows: [
            ['Board game, opened for years', 'Telescoping lid and base', 'The lid is a wear part and takes the handling'],
            ['Puzzle, heavy for its size', 'Lid and base, reinforced base', 'Weight sits on the base for the whole life of the pack'],
            ['Shelf toy needing visibility', 'Tuck end with a window', 'Buying decision happens without opening'],
            ['Building set with many pieces', 'Lid and base with a fitted insert', 'Loose pieces read as an incomplete product'],
            ['Baby product', 'Tuck end or lid and base', 'Judged on perceived hygiene as much as strength'],
            ['Outer for shipping a game', 'Corrugated mailer, separate', 'Protects the printed box rather than replacing it'],
          ],
        },
      },
      {
        h2: 'Shipping a game, and reprinting a box',
        body: [
          'A board game box and the box a board game ships in are two different things, and buying one when you needed the other is a common and expensive mistake. The printed lid and base is the retail pack — it is not built to be posted on its own, because corner crush lands on exactly the edges the customer sees first. A plain corrugated mailer sized to the game takes that damage instead, and costs a fraction of reprinting the retail pack.',
          'Reprinting the retail box itself — blank stock for a self-published game, or a replacement run for a title already in print — is made to order here from your dieline rather than pulled from stock sizes. That suits a publisher, a retailer or a crowdfunding run. It does not suit replacing one lost lid: production starts at 100 units, so a single box is not something this route can do, and it is better to know that now than after an enquiry.',
        ],
      },
      {
        h2: 'The marking is laid out before the design',
        body: [
          'Toy and baby packaging is one of the few categories where the legal requirements arrive before the creative ones. Age grading, small-parts warnings, conformity marks, a batch identifier and a responsible business address all have to appear, at specified sizes, where a buyer can read them before purchase.',
          'Retailers check these before they list, so a carton that omits one is rejected at the buying stage rather than at the till. Blocking the panel out at the start costs nothing; finding room afterwards means moving the artwork, which is the most common reason a toy carton is redrawn.',
        ],
      },
      {
        h2: 'Plastic-free is tested inside the box',
        body: [
          'This category has traditionally relied on wire ties, plastic clips and blister windows to hold products in place, and a great many ranges are now committed to removing them. Card cradles, paper twist ties and die-cut tabs do the same job, take a little longer to design and slightly longer to pack.',
          'Where a brand makes a plastic-free claim, this is where it is actually tested. A paper carton with a plastic window and four wire ties inside is not a plastic-free pack however it is described, and in this category — where the buyer is a cautious adult reading the box closely — that is noticed.',
        ],
      },
    ],
    link: {
      lead: 'Where the pack needs a window to show the contents, ',
      href: '/product/kraft-box-with-window/',
      anchor: 'the window box page covers aperture and film options',
      tail: '.',
    },
    faqs: [
      { question: 'Should toy packaging have a window?', answer: 'Usually, because the buying decision happens in front of the shelf. Where a window is impractical, a clear photographic panel does the same job at lower cost.' },
      { question: 'How strong does a board game box need to be?', answer: 'Stronger than the contents suggest, because it is opened repeatedly over years. A telescoping lid with a properly specified crease survives that duty where a plain tuck does not.' },
      { question: 'Why does the base matter on a puzzle box?', answer: 'The weight is concentrated and sits directly on the base for the whole life of the product. A reinforced or full-overlap base carries that where a single glued seam eventually gives.' },
      { question: 'Are there safety marks that have to appear?', answer: 'Age grading and safety warnings are usually required and are market-specific. Send the marks that apply and we block the panel area before design time is committed.' },
      { question: 'Can inserts hold loose game pieces?', answer: 'Yes, and on anything with many small pieces they are worth more than the outer box. Pieces loose in one cavity make a game look incomplete on opening.' },
      { question: 'What board suits baby product packaging?', answer: 'A clean, well-finished stock, since the category is judged on perceived hygiene as much as on strength. Uncoated kraft reads well where a natural positioning is intended.' },
      { question: 'Do you print inside toy boxes?', answer: 'It can be worthwhile where the box is part of the play or storage after purchase, which is common with games and building sets.' },
      { question: 'How do I keep packaging cost down on a low-priced toy?', answer: 'Fewer press passes and a simpler structure. Two colors on kraft with a good die-cut usually does more than four colors with a finish at this price point.' },
      { question: 'Can one box size cover several products?', answer: 'Often two or three sizes cover a range while sharing one board and print system, which keeps the shelf presence consistent without shipping empty space.' },
      { question: 'Are recycled and recyclable options available?', answer: 'Yes across this range. A plain die-cut window aperture rather than a filmed one keeps the pack in the paper stream if that claim matters to you.' },
      { question: 'What box should a board game ship in?', answer: 'A separate corrugated mailer sized to the game, not the printed lid and base. Posting the retail box on its own puts crush damage on the edges the customer sees first, and a plain outer costs far less than reprinting the pack.' },
      { question: 'Can I order blank or replacement board game boxes?', answer: 'Yes, made to your dieline rather than from stock sizes, which suits a self-published title, a reprint or a retailer. Production starts at 100 units, so it is not a route for replacing a single lost lid.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  'kraft-wrapping-accessories': {
    intro: [
      'This range is the material rather than the structure — kraft paper by the sheet and roll, wrapping, dispenser boxes and the plain paper box formats that use them.',
      'The questions here are about width, weight and how the paper behaves when it is folded or printed, rather than about construction.',
    ],
    sections: [
      {
        h2: 'Paper weight and what it is for',
        body: [
          'Lighter kraft creases cleanly and suits wrapping and void fill. Heavier weights hold a fold and suit bags, sleeves and anything that has to carry a load. Choosing by feel rather than by weight is what produces wrapping that tears at the corner or a bag that will not hold its shape.',
        ],
        table: {
          caption: 'Weight by use',
          head: ['Use', 'Weight band', 'Behavior'],
          rows: [
            ['Gift wrapping and tissue work', 'Light', 'Creases cleanly, tears easily'],
            ['Void fill and interleaving', 'Light to medium', 'Crumples without springing back'],
            ['Bags and sleeves', 'Medium to heavy', 'Holds a fold under load'],
            ['Printed sheet work', 'Medium', 'Takes ink without cockling'],
          ],
        },
      },
      {
        h2: 'Printing on uncoated stock',
        body: [
          'Uncoated kraft absorbs ink, so colors dry back flatter and darker than the proof suggests, and heavy solid coverage can cockle the sheet. Designs built for the substrate — line work, single colors, generous negative space — hold up far better than full-bleed photography.',
        ],
      },
      {
        h2: 'Rolls, sheets and reams do different jobs',
        body: [
          'This range is bought by format as much as by weight, and the format follows how the paper is used rather than what it is made of. The same stock behaves like a different product depending on how it arrives.',
        ],
        list: [
          'Rolls — continuous, cut to length at the bench, and the efficient choice wherever the item being wrapped varies in size.',
          'Sheets — pre-cut to one size, faster per item and wasteful the moment the product changes, so they suit a single repeated pack.',
          'Reams and packs — flat stacks for counter use, which keep the paper flat and take almost no space until they are opened.',
          'Dispenser formats — a box that presents one sheet at a time, which is what keeps a busy counter tidy and the stock clean.',
        ],
      },
      {
        h2: 'Wrapping paper and packaging paper are not the same stock',
        body: [
          'They look alike and they are specified against opposite requirements. Wrapping paper is chosen for how it folds, how it takes a crease and how it looks under a ribbon, so it is lighter and more pliable. Packaging paper is chosen to resist tearing and to cushion, so it is heavier and deliberately less willing to hold a fold.',
          'Using one for the other is a common and visible mistake: a heavy kraft wrapped around a gift will not hold its creases and springs open at the corners, while a light decorative paper used as void fill tears as soon as anything shifts.',
        ],
      },
      {
        h2: 'Tissue is doing three jobs at once',
        body: [
          'Tissue is the component most often removed from a specification to save money, usually by somebody who has only considered it as decoration. It interleaves layers so dye cannot transfer between them, it holds a folded item in position so it does not unfold in transit, and it provides the moment of ceremony when a box is opened.',
          'On soft goods it earns all three. A dark silk folded against its own pale border for three months without interleaving is the case that makes the argument better than any description of it.',
        ],
      },
      {
        h2: 'Printing on an uncoated, unsized surface',
        body: [
          'Wrapping and tissue stocks are absorbent in a way board is not, so ink sinks in and spreads slightly at the edges. Fine detail and small type lose their definition, and a solid area of heavy coverage can cockle the sheet as it dries.',
          'What works is the opposite of what works on a carton — bold marks, generous line weights, a repeating pattern rather than one precise logo, and one or two colors rather than a photographic build. Designs that assume a coated surface are the ones that come back disappointing.',
        ],
      },
    ],
    link: {
      lead: 'For counter dispensing specifically, ',
      href: '/product/kraft-paper-dispenser-boxes/',
      anchor: 'the dispenser box page covers tear-front builds',
      tail: '.',
    },
    faqs: [
      { question: 'What paper weight should I order?', answer: 'It follows the job. Light kraft creases cleanly for wrapping; heavier weights hold a fold and carry load for bags and sleeves. Tell us the use and we will specify the band.' },
      { question: 'Can I get kraft paper in custom widths?', answer: 'Yes, in sheets and on rolls cut to the width you need. Ordering to your dispenser or table width avoids trimming waste on every use.' },
      { question: 'Why do printed colors look flat on kraft paper?', answer: 'Uncoated stock absorbs ink, so colors dry back darker and duller than on coated board. Designing for the substrate holds up better than trying to correct for it.' },
      { question: 'Is colored kraft paper available?', answer: 'Yes, in dyed stocks where the color runs through the fiber so a cut edge matches the face. Surface-colored papers show brown at the cut.' },
      { question: 'Can wrapping paper be printed with a repeat pattern?', answer: 'Yes. The repeat is set against the sheet or roll width so the pattern runs continuously rather than breaking at each sheet edge.' },
      { question: 'Is kraft paper suitable for food wrapping?', answer: 'With a food-contact compliant grade and, for greasy items, a grease-resistant treatment. Plain kraft will strike through with oily food.' },
      { question: 'What dispenser sizes do you supply?', answer: 'Dispenser boxes are cut to the roll or sheet stack they hold, with a tear-away front. Send the roll diameter and width rather than a box size.' },
      { question: 'Can I order a small quantity to test?', answer: 'Yes. A short run is worth it on paper work specifically, because how a weight creases and takes ink is difficult to judge from a specification alone.' },
      { question: 'Is kraft paper recyclable?', answer: 'Plain uncoated kraft is, in the standard paper stream. A plastic lamination or coating is what takes it out, not the paper itself.' },
      { question: 'Do you supply plain unprinted paper?', answer: 'Yes, in both sheets and rolls. For interleaving and void fill plain stock is usually the sensible choice, since print adds cost with no benefit.' },
    ],
  },

  /* ------------------------------------------------------------------ */
}
