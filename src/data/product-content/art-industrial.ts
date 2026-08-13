import type { ProductContentMap } from './types'

/**
 * Flat printed goods, and industrial packaging.
 *
 * Everything in the first group protects something flat, and flat things fail
 * one way — they bend at a corner, and paper does not recover from a crease.
 * The industrial group is specified against numbers instead: stacking height,
 * load weight and storage time, none of which are visible in the product.
 */
export const artIndustrialContent: ProductContentMap = {
  /* ------------------------- flat printed goods ------------------------- */

  'kraft-document-mailers': {
    intro:
      'A document mailer exists to stop paper bending. Everything else about it is secondary to whether the contents arrive flat.',
    sections: [
      {
        h2: 'Stiffness across the span, not thickness',
        body: [
          'A large flat panel bends across its middle regardless of how thick the board is. What resists it is stiffness across the span — a corrugated backing board, a heavier caliper, or a fold that turns a flat sheet into a structure.',
          'Above roughly A4 a stiffener costs less than the replacement rate from creased deliveries, which is the calculation worth doing before choosing the cheapest mailer.',
        ],
      },
      {
        h2: 'Hold the contents inboard of the corners',
        body: [
          'A drop lands on a corner, and if the document reaches that corner the crease goes through the document. Sizing the mailer slightly larger and holding the contents away from the edges means the pack absorbs the impact rather than the paper.',
        ],
      },
      {
        h2: 'Closure and tamper evidence',
        body: [
          'Documents are often the thing people most want to arrive unopened. A peel-and-seal strip with a tamper-evident line shows interference; a plain tuck does not. It is a small cost on a pack whose whole purpose is delivery integrity.',
        ],
      },
    ],
    faqs: [
      { question: 'How do I stop documents arriving creased?', answer: '<p>Stiffness across the span rather than thicker board. A corrugated backing board or a rigid mailer resists the bend that a flat pack takes across its middle.</p>' },
      { question: 'What size should the mailer be?', answer: '<p>Slightly larger than the contents, with the document held inboard of the corners. A drop lands on a corner, and if the paper reaches it the crease goes through the paper.</p>' },
      { question: 'Do these need a tamper-evident closure?', answer: '<p>For documents, usually yes. A peel-and-seal strip with a tamper-evident line shows interference where a plain tuck does not, and delivery integrity is the whole point of the format.</p>' },
      { question: 'Can you produce mailers for oversized documents?', answer: '<p>Yes, including tube formats for rolled work. Rolling avoids the crease risk entirely but is unsuitable for anything mounted or framed.</p>' },
      { question: 'What board is used?', answer: '<p>E flute corrugated for most sizes, stepping up for larger spans. The choice is driven by panel span rather than by contents weight.</p>' },
      { question: 'Are these suitable for photographs?', answer: '<p>Yes, with a rigid backing board. Photographs crease more visibly than text documents, so the stiffener matters more rather than less.</p>' },
      { question: 'Can the mailer be printed?', answer: '<p>Yes, though for business post plain kraft is usually the sensible choice. Print adds cost without a selling function on a document delivery.</p>' },
      { question: 'Do you supply a range of standard sizes?', answer: '<p>Everything is cut to your dimensions rather than picked from stock sizes. Send the document size and we build the dieline around it with the clearance allowance.</p>' },
      { question: 'Will these fit through a letterbox?', answer: '<p>Only in the thinner formats. If letterbox compatibility matters, tell us the maximum depth your postal service allows and we design to it.</p>' },
      { question: 'Are recycled options available?', answer: '<p>Yes, with a caliper step-up. Recycled fiber is slightly less stiff, and stiffness is the whole specification on this format.</p>' },
    ],
  },

  'kraft-certificate-boxes': {
    intro:
      'A certificate box presents a single flat document as something worth keeping. The lid has to lift cleanly and the document has to sit perfectly flat.',
    sections: [
      {
        h2: 'A large lid that does not flex',
        body: [
          'Certificate boxes are wide and shallow, which is the worst proportion for lid rigidity. A lid that bows when lifted undermines the whole presentation, and the fix is board caliper rather than anything structural.',
          'The board weight here follows panel span, not the weight of a sheet of paper.',
        ],
      },
      {
        h2: 'Keeping the document flat and located',
        body: [
          'A certificate loose in a shallow box slides and its corners catch under the lid, which is exactly the damage the box exists to prevent. Corner retainers or a shallow recess hold it in position.',
        ],
      },
      {
        h2: 'Presentation finishes that suit the occasion',
        body: [
          'These are handed over rather than shipped to a shelf, usually in a formal setting. A blind deboss or a foil block reads at the moment of handover in a way that printed color does not, and both work well against kraft.',
        ],
      },
    ],
    link: {
      lead: 'Where documents are posted rather than presented, ',
      href: '/product/kraft-document-mailers/',
      anchor: 'document mailers cover the postal formats',
      tail: '.',
    },
    faqs: [
      { question: 'Why does the lid bow when I lift it?', answer: '<p>Certificate boxes are wide and shallow, which is the worst proportion for lid rigidity. The fix is board caliper — the weight follows panel span rather than the weight of a sheet of paper.</p>' },
      { question: 'How do I stop the certificate sliding inside?', answer: '<p>Corner retainers or a shallow recess. A document loose in a shallow box catches its corners under the lid, which is the damage the box exists to prevent.</p>' },
      { question: 'What finishes suit a certificate box?', answer: '<p>Blind deboss or foil. Both read at the moment of handover in a way printed color does not, and both work well against kraft board.</p>' },
      { question: 'Can the box hold more than one document?', answer: '<p>Yes, with an interleaving sheet so they do not rub. Two certificates loose together mark each other over time.</p>' },
      { question: 'Should it be rigid or a folding carton?', answer: '<p>Rigid. This format is judged in a formal handover, and a folding carton lid does not hold the impression a rigid one does.</p>' },
      { question: 'Can you include a ribbon pull?', answer: '<p>Yes, and on a snug shallow box it is genuinely useful — without one the document is difficult to lift out without bending it.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your certificate rather than to a stock size. Send the document dimensions and any mount or frame it sits in.</p>' },
      { question: 'Can these be posted?', answer: '<p>Inside a protective outer, yes. A presentation box posted alone arrives with crushed corners, which is very visible on a wide flat lid.</p>' },
      { question: 'Is a window appropriate?', answer: '<p>Rarely. The point of the box is that the certificate is revealed on opening, and a window gives that away.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, including wrapped rigid constructions. We step up a caliper because the large lid needs the stiffness.</p>' },
    ],
  },

  'kraft-photo-frame-boxes': {
    intro:
      'A framed item is heavy, rigid and made mostly of glass. The weight concentrates at the corners, and that is exactly where a drop lands.',
    sections: [
      {
        h2: 'Corner protection does the work',
        body: [
          'A frame transmits any impact straight to its corners, and the glass breaks from there. Cushioning the corners specifically is far more effective than padding the whole pack, and it uses less material.',
          'Molded pulp or foam corner blocks are the usual answer. Loose fill around a frame does very little because the frame still reaches the box corners.',
        ],
      },
      {
        h2: 'Glass and what happens when it breaks',
        body: [
          'If the glass does break, the pack has to contain it rather than letting shards move. That is an argument for a snug fit and an inner wrap, not just for more cushioning.',
        ],
      },
      {
        h2: 'Depth for the frame profile',
        body: [
          'Frame depth varies far more than frame face size — a slim modern frame and a deep traditional molding differ by an inch or more. Measure the profile depth, including any stand or hanging fitment on the back.',
        ],
      },
    ],
    faqs: [
      { question: 'How do I stop frame glass breaking in transit?', answer: '<p>Cushion the corners specifically. A frame transmits impact straight to its corners and the glass breaks from there, so corner blocks do more than padding the whole pack — and use less material.</p>' },
      { question: 'Is loose fill enough?', answer: '<p>No. The frame still reaches the box corners, which is where the damage happens. Corner protection is the component that matters.</p>' },
      { question: 'What depth do you need?', answer: '<p>The frame profile depth including any stand or hanging fitment on the back. Profile depth varies far more between frames than face size does.</p>' },
      { question: 'What happens if the glass does break?', answer: '<p>A snug fit and an inner wrap contain the shards rather than letting them move. That is a separate design goal from preventing the break.</p>' },
      { question: 'What board is used?', answer: '<p>Double-wall corrugated for anything above a modest size, since the load is concentrated and the pack has to survive a corner drop.</p>' },
      { question: 'Can you supply packs for a range of frame sizes?', answer: '<p>Yes. Two or three dielines usually cover a range, with the corner protection specified consistently across them.</p>' },
      { question: 'Are these suitable for courier shipping?', answer: '<p>Yes, with corner protection and a correctly sized pack. Framed items are among the most damaged categories in parcel networks, so the specification matters.</p>' },
      { question: 'Can the pack be printed?', answer: '<p>It can, though for a protective outer plain kraft is usually the right choice. Print on a transit pack rarely returns its cost.</p>' },
      { question: 'Do you supply inserts for frames sold at retail?', answer: '<p>Yes, and a retail pack has different priorities — it has to present the frame as well as protect it, which usually means a window or an open-fronted format.</p>' },
      { question: 'Are recycled and molded pulp options available?', answer: '<p>Yes. Molded pulp corner blocks are the more recyclable cushioning option and perform comparably to foam for this application.</p>' },
    ],
  },

  'kraft-brochure-packaging-boxes': {
    intro:
      'Brochure packaging holds a quantity of printed matter, and printed matter is heavier per volume than almost anything else the catalog covers.',
    sections: [
      {
        h2: 'Paper is heavy',
        body: [
          'A box of brochures weighs far more than its size suggests, and buyers routinely under-specify because they judge by volume. A carton adequate for a box of that size will fail under a box of that size filled with paper.',
          'Send the quantity and the paper weight, or the total consignment weight. That is what the board is graded against.',
        ],
      },
      {
        h2: 'The base is the failure point',
        body: [
          'With a dense, evenly distributed load the whole weight sits on the base for the entire journey. A single glued base seam opens; a full-overlap base does not.',
        ],
      },
      {
        h2: 'Opening without damaging the contents',
        body: [
          'Brochures are usually opened with a blade, and a blade through a tight-packed carton cuts the top copies. A little headroom, or a designed opening line away from the contents, prevents a predictable loss on every carton.',
        ],
      },
    ],
    faqs: [
      { question: 'How do I specify the board for a box of brochures?', answer: '<p>By weight, not volume. Paper is far heavier per volume than most contents, and buyers routinely under-specify because they judge by box size. Send the quantity and paper weight.</p>' },
      { question: 'Why does the base give way?', answer: '<p>A dense evenly distributed load sits on the base for the whole journey. A single glued base seam opens under that; a full-overlap base carries it.</p>' },
      { question: 'How do I stop the top copies being cut when opening?', answer: '<p>Allow a little headroom, or design the opening line away from the contents. A blade through a tight-packed carton cuts the top copies on every box.</p>' },
      { question: 'What quantity per carton is sensible?', answer: '<p>Whatever one person can lift comfortably, which is usually less than the box could physically hold. Over-filled cartons get dropped, and that is when they fail.</p>' },
      { question: 'Should the carton be printed?', answer: '<p>Usually only with the title, quantity and version, which is what matters in a stockroom. Full print on a bulk carton rarely repays itself.</p>' },
      { question: 'Can you supply cartons that double as dispensers?', answer: '<p>Yes, with a tear-away front. That suits exhibition and reception use where the carton stays out rather than being unpacked.</p>' },
      { question: 'What board is used?', answer: '<p>B or C flute corrugated, graded against the filled weight and the stack. Send both figures rather than the box dimensions alone.</p>' },
      { question: 'Will these stack on a pallet?', answer: '<p>Yes with the right grade. Send the stack height, because the bottom carton carries everything above it for as long as the pallet stands.</p>' },
      { question: 'Are moisture-resistant options available?', answer: '<p>Yes, and worth considering for long storage. Board softens as it absorbs moisture, and paper contents make the carton heavy enough for that to matter.</p>' },
      { question: 'Can you produce cartons in several counts?', answer: '<p>Yes, sharing one board specification. Only the dieline changes between counts, which keeps setup cost down.</p>' },
    ],
  },

  'kraft-calendar-boxes': {
    intro:
      'Calendars are flat, seasonal and bound on one edge, and the binding is what makes the pack awkward.',
    sections: [
      {
        h2: 'The binding adds depth on one edge only',
        body: [
          'A wire or spiral binding makes one edge substantially thicker than the other, so the pack is not a simple rectangle around a flat item. A box sized from the page dimensions will not close over the binding.',
          'Measure across the binding, and say whether calendars are packed all facing the same way or alternated, because alternating evens the stack out and changes the box depth.',
        ],
      },
      {
        h2: 'A single season with no second run',
        body: [
          'Calendars sell in a short window and are worthless afterwards. Producing overage inside the original run costs a fraction of a separate short run later, and running out in November is the more expensive mistake by a wide margin.',
        ],
      },
      {
        h2: 'Protecting the cover',
        body: [
          'The cover is the selling image and it creases at the corners like any flat printed item. Holding the calendar inboard of the pack corners does more than adding board.',
        ],
      },
    ],
    link: {
      lead: 'For other bound printed work shipped in quantity, ',
      href: '/product/kraft-brochure-packaging-boxes/',
      anchor: 'brochure packaging covers bulk carton grading',
      tail: '.',
    },
    faqs: [
      { question: 'Do I measure across the pages or the binding?', answer: '<p>The binding. A wire or spiral binding makes one edge substantially thicker, and a box sized from the page dimensions will not close over it.</p>' },
      { question: 'Does it matter how calendars are stacked in the carton?', answer: '<p>Yes. Alternating them so bindings sit at opposite ends evens the stack and reduces the box depth noticeably on larger counts.</p>' },
      { question: 'Should I order spare units?', answer: '<p>Yes, and it is the advice we give unprompted on seasonal work. Overage inside the original run costs a fraction of a separate short run, and running out in November cannot be fixed.</p>' },
      { question: 'How do I protect the cover?', answer: '<p>Hold the calendar inboard of the pack corners. The cover creases at the corners like any flat printed item, and clearance does more than extra board.</p>' },
      { question: 'What board is used?', answer: '<p>E flute for individual packs, B or C flute for bulk cartons graded against the filled weight.</p>' },
      { question: 'Can the pack show the cover?', answer: '<p>Yes, with a window or an open-fronted sleeve. On a calendar the cover image is the purchase decision, so hiding it works against the sale.</p>' },
      { question: 'Do you produce wall and desk formats?', answer: '<p>Yes, and they are quite different packs. A desk calendar with a stand has depth that a wall calendar does not.</p>' },
      { question: 'When should I order for a season?', answer: '<p>Work backwards from the date you need stock in hand, allowing for proofing as well as production. Give us the date rather than asking for a lead time.</p>' },
      { question: 'Can these be posted individually?', answer: '<p>Yes, in a stiffened mailer. A flat calendar posted without a stiffener arrives bent through the middle.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, with a caliper step-up on larger formats where panel stiffness matters.</p>' },
    ],
  },

  'kraft-cd-dvd-packaging': {
    intro:
      'Disc packaging protects a surface rather than a shape. The disc is not fragile in the ordinary sense — it is scratched, and a scratch is permanent.',
    sections: [
      {
        h2: 'Nothing may move across the disc face',
        body: [
          'A disc held loosely slides against whatever it is next to, and that sliding is what causes the damage. The disc has to be held so it cannot move laterally — a fitted sleeve, a hub, or a pocket cut so the disc sits without travel.',
          'A snug pocket that requires the disc to be pushed in is better than a loose one that lets it rattle.',
        ],
      },
      {
        h2: 'Sleeve, wallet or carton',
        body: [
          'A paper sleeve is cheapest and offers least protection. A wallet with a flap adds closure. A carton with a hub gives the most protection and the most print area. The choice follows whether the disc is archived, posted or sold.',
        ],
        table: {
          caption: 'Format by use',
          head: ['Format', 'Protection', 'Suits'],
          rows: [
            ['Plain sleeve', 'Minimal', 'Internal distribution, archiving'],
            ['Wallet with flap', 'Moderate', 'Posting, promotional handouts'],
            ['Carton with hub', 'Highest', 'Retail sale, multi-disc sets'],
            ['Digipak style', 'Highest', 'Presentation and gifting'],
          ],
        },
      },
      {
        h2: 'Print area on a small square',
        body: [
          'The panel is small and largely square, which suits a single strong image rather than layered information. Track listings and credits need a separate insert if there is much of either.',
        ],
      },
    ],
    link: {
      lead: 'For printed inserts and booklets packed alongside, ',
      href: '/product/kraft-brochure-packaging-boxes/',
      anchor: 'brochure packaging covers printed matter in quantity',
      tail: '.',
    },
    faqs: [
      { question: 'How do I stop discs getting scratched?', answer: '<p>Hold them so they cannot move across their face. Lateral sliding is what causes the damage, so a snug pocket the disc pushes into beats a loose one that lets it rattle.</p>' },
      { question: 'Which format should I choose?', answer: '<p>A plain sleeve for internal distribution, a wallet with a flap for posting, a carton with a hub for retail. The choice follows use rather than budget.</p>' },
      { question: 'Can you produce multi-disc packs?', answer: '<p>Yes, with a separate position per disc. Two discs sharing a pocket scratch each other, which is the most common fault in multi-disc packaging.</p>' },
      { question: 'How much can I print on the panel?', answer: '<p>Enough for one strong image. Track listings and credits need a separate insert if there is much of either — the panel is too small to layer information.</p>' },
      { question: 'Are these suitable for posting?', answer: '<p>A wallet or carton is, ideally inside a stiffened mailer. A disc posted in a plain sleeve arrives cracked more often than buyers expect.</p>' },
      { question: 'Can you supply a printed insert as well?', answer: '<p>Yes, sized to the pack. The insert is usually specified alongside so the two fit without trimming.</p>' },
      { question: 'What board is used?', answer: '<p>Folding carton board for sleeves and wallets, heavier for cartons with a hub. The hub needs a stock that holds its shape under the disc.</p>' },
      { question: 'Is a window an option?', answer: '<p>Yes, though it exposes the disc surface to handling. For a retail pack a printed panel is usually the better answer.</p>' },
      { question: 'Can you produce short runs?', answer: '<p>Yes. Disc runs are frequently small, which suits digital print with no plate cost and allows different artwork within one order.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, and uncoated kraft suits the category. The surface in contact with the disc should be smooth, so we specify that face accordingly.</p>' },
    ],
  },

  'kraft-art-supply-packaging': {
    intro:
      'Art supply packaging holds mixed contents that are rarely the same shape twice — tubes, brushes, pads, pans — and the whole job is keeping them separated and identifiable.',
    sections: [
      {
        h2: 'Mixed contents need compartments',
        body: [
          'Loose items in one cavity shift, and a set arrives looking incomplete even when everything is present. Worse, hard items damage soft ones — a metal ferrule against a pastel is a predictable loss.',
          'A compartmented insert with a position per item type solves both, and on a set it does more for perceived value than anything on the outside.',
        ],
      },
      {
        h2: 'Showing the range',
        body: [
          'Color range is what sells an art set, and a customer cannot judge it from a description. A window over the colors, or a printed representation of the actual shades, is doing the selling rather than decorating the pack.',
        ],
      },
      {
        h2: 'Boxes that become storage',
        body: [
          'Art materials live in their box for years. A closure that survives daily opening and a base that holds its shape when the set is only half full both matter more here than in packaging that is opened once.',
        ],
      },
    ],
    link: {
      lead: 'Where the set includes flat pads or paper that must not crease, ',
      href: '/product/kraft-document-mailers/',
      anchor: 'flat-goods packaging covers stiffening',
      tail: '.',
    },
    faqs: [
      { question: 'Do I need a compartmented insert?', answer: '<p>For mixed contents, yes. Loose items shift so the set looks incomplete, and hard items damage soft ones — a metal ferrule against a pastel is a predictable loss.</p>' },
      { question: 'Should the pack show the colors?', answer: '<p>Yes. Color range is what sells an art set and a customer cannot judge it from a description, so a window or an accurate printed representation is doing the selling.</p>' },
      { question: 'Will the box survive being kept as storage?', answer: '<p>With a positive closure and a properly graded base, yes. Art materials live in their box for years, which is a harder duty than most packaging faces.</p>' },
      { question: 'What board is used?', answer: '<p>Folding carton for light sets, E flute or rigid for heavier ones. The deciding factor is usually the weight of the filled set rather than the box size.</p>' },
      { question: 'Can you produce inserts for irregular items?', answer: '<p>Yes, in die-cut board, foam or molded pulp. Molded pulp handles irregular shapes where a board cavity would be complicated to cut.</p>' },
      { question: 'How do I stop the set looking half empty when used?', answer: '<p>A fitted insert keeps remaining items in position rather than letting them slide into the space. That is what makes a part-used set still look organized.</p>' },
      { question: 'Are these suitable for retail display?', answer: '<p>Yes, and the front panel is what does the work. A set shown flat on a shelf is judged on the top face rather than the front.</p>' },
      { question: 'Can you match a range of set sizes?', answer: '<p>Yes, sharing one board and print system so a 12, 24 and 36 set look like one family. Only the dieline and the insert change.</p>' },
      { question: 'Do you print inside the lid?', answer: '<p>It is worth it here, since the lid is open whenever the set is in use. Color references or usage notes printed inside get read.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes across the range, and they suit the category. We step up a caliper where the box will be reused as storage.</p>' },
    ],
  },

  /* --------------------------- industrial --------------------------- */

  'kraft-bulk-shipping-crates': {
    intro:
      'A bulk crate carries a heavy load a long way and is handled by forklift rather than by hand. The specification is a set of numbers, not a judgement.',
    sections: [
      {
        h2: 'The load path runs straight down',
        body: [
          'On a heavy crate the weight sits on the base for the whole journey and the walls contribute far less than intuition suggests. A base built from a single glued seam eventually opens under a concentrated load.',
          'A full-overlap or tray base carries it properly, and on the heaviest work a timber or board skid spreads the load into the pallet.',
        ],
      },
      {
        h2: 'Stacking is what decides the wall',
        body: [
          'The figure that grades the walls is the weight above the bottom unit, not the weight inside it. Send the stack height and the mass sitting on top, and the wall construction follows from those two numbers.',
        ],
        table: {
          caption: 'Construction by load',
          head: ['Condition', 'Construction', 'Note'],
          rows: [
            ['Single unit, forklift handled', 'Double wall BC', 'Base is the critical panel'],
            ['Stacked two high', 'Double wall BC', 'Edge crush becomes the limit'],
            ['Stacked three or more', 'Triple wall or reinforced', 'Corner crush is the failure mode'],
            ['Long-term storage', 'Moisture-resistant treatment', 'Board weakens as it equalises'],
          ],
        },
      },
      {
        h2: 'Humidity over months',
        body: [
          'Board absorbs moisture from the air until it equalises with its surroundings, and its stacking strength falls as it does. A crate that tests correctly on the day it is made can be measurably weaker after a month in a humid warehouse, which is why storage conditions belong in the brief.',
        ],
      },
    ],
    link: {
      lead: 'For lighter palletised work that does not need crate construction, ',
      href: '/product/kraft-shipping-boxes/',
      anchor: 'shipping boxes cover single and double wall builds',
      tail: '.',
    },
    faqs: [
      { question: 'How do I specify a bulk crate?', answer: '<p>By numbers rather than judgement: filled weight, stack height and the mass sitting above the bottom unit. Those three set the base and the wall construction.</p>' },
      { question: 'Why does the base matter more than the walls?', answer: '<p>Because on a heavy load the weight sits on the base for the whole journey and the walls carry far less than intuition suggests. A single glued base seam opens under a concentrated load.</p>' },
      { question: 'Do these work with a forklift?', answer: '<p>Yes, with a skid or a pallet base spreading the load. Tell us the handling method because it changes the base construction entirely.</p>' },
      { question: 'What happens in long-term storage?', answer: '<p>Board absorbs moisture until it equalises with its surroundings and loses stacking strength as it does. A moisture-resistant treatment addresses it and has to be specified at the start.</p>' },
      { question: 'What is edge crush and why does it matter?', answer: '<p>It measures how much load a board edge carries before failing, which is what actually holds a stack up. It is a better guide for palletised work than board thickness.</p>' },
      { question: 'Can crates be made to fit a specific pallet?', answer: '<p>Yes, and they should be. A crate sized without reference to the pallet pattern wastes space on every layer, which costs on every shipment.</p>' },
      { question: 'Are these printable?', answer: '<p>Yes, usually flexo direct to the board. For an industrial outer, product code and handling marks are normally all that is needed.</p>' },
      { question: 'Can you supply internal dividers?', answer: '<p>Yes, and for mixed or fragile contents they are worth more than heavier walls. Dividers also add stacking strength by supporting the top panel.</p>' },
      { question: 'What about export shipments?', answer: '<p>Corrugated avoids the timber treatment requirements that apply to wooden crates in many markets. Tell us the destination and we will flag anything relevant.</p>' },
      { question: 'Do you produce these in small quantities?', answer: '<p>Yes, though tooling for a large crate is a bigger share of a small run. We will show the unit cost across quantities so the trade is visible.</p>' },
    ],
  },

  'kraft-heavy-duty-storage-boxes': {
    intro:
      'A storage box is filled once and then holds its contents on a shelf for months or years. The load is constant rather than momentary, which changes what fails.',
    sections: [
      {
        h2: 'Constant load, not transit shock',
        body: [
          'Transit packaging survives short violent events. Storage packaging survives a steady load for a long time, and the failure mode is creep — the board slowly deforming under weight that it could carry indefinitely in the short term.',
          'That means grading against the stack for its full storage life rather than against the day it is packed.',
        ],
      },
      {
        h2: 'Lids that survive repeated access',
        body: [
          'Storage boxes get opened. A lid designed for a single closing splits after a dozen accesses, and taped lids stop stacking properly. A telescoping lid handles repeated opening without folding anything.',
        ],
      },
      {
        h2: 'Labeling for retrieval',
        body: [
          'The whole point of a storage box is finding what is in it later. A designated label area on the short end — the face visible when boxes are shelved — is worth more than print anywhere else on the box.',
        ],
      },
    ],
    link: {
      lead: 'Where boxes are moved regularly rather than stored, ',
      href: '/product/kraft-storage-boxes/',
      anchor: 'the standard storage box range',
      tail: ' covers lighter duty.',
    },
    faqs: [
      { question: 'How is a storage box different from a shipping box?', answer: '<p>The load is constant rather than momentary. Transit packaging survives short violent events; storage packaging survives steady weight for a long time, and the failure mode is slow deformation.</p>' },
      { question: 'How should I grade the board?', answer: '<p>Against the stack for its full storage life, not against the day it is packed. Send the stack height and how long boxes typically stand.</p>' },
      { question: 'Why do lids split?', answer: '<p>Because a lid designed for a single closing is being opened repeatedly. A telescoping lid slides rather than folds and handles repeated access without failing.</p>' },
      { question: 'Where should the label go?', answer: '<p>On the short end, which is the face visible when boxes are shelved. A label area there is worth more than print anywhere else on the box.</p>' },
      { question: 'Are moisture-resistant options available?', answer: '<p>Yes, and for long storage they matter. Board loses stiffness as it absorbs moisture, and a box that has stood for a year in a damp store should still hold its shape.</p>' },
      { question: 'What board is used?', answer: '<p>Double-wall corrugated for anything heavy or stacked more than two high, single-wall C for lighter duty. The stack height decides it.</p>' },
      { question: 'Can you add handles?', answer: '<p>Yes, die-cut. The board around a die-cut handle needs reinforcing on a filled heavy box, since that is where the load concentrates.</p>' },
      { question: 'Do these ship flat?', answer: '<p>Yes, flat and erected on site, which keeps freight cost proportionate to the board rather than to the volume.</p>' },
      { question: 'Can you produce a range of sizes that stack together?', answer: '<p>Yes, and designing them on a common footprint means mixed sizes still stack squarely rather than in an unstable tower.</p>' },
      { question: 'Are recycled boards suitable?', answer: '<p>Yes, with a grade step-up. Recycled fiber is slightly less stiff and creeps a little more under constant load, so we allow for both.</p>' },
    ],
  },

  'kraft-industrial-parts-boxes': {
    intro:
      'Parts boxes carry dense, hard, often oily components. The contents are not fragile — the box is what suffers.',
    sections: [
      {
        h2: 'Dense contents in a small footprint',
        body: [
          'Metal parts are heavy for their volume, so a small box can be extremely heavy. Buyers specify by box size and under-grade the board, and the box fails on the first lift rather than in transit.',
          'Send the filled weight. It is almost always higher than a size-based estimate suggests.',
        ],
      },
      {
        h2: 'Oil, swarf and sharp edges',
        body: [
          'Machined parts often carry residual oil, which soaks into untreated board and weakens it. Sharp edges cut through liners and eventually through the box itself. A coated inner face handles the first; a fitted divider or a heavier liner handles the second.',
        ],
      },
      {
        h2: 'Counting and traceability',
        body: [
          'Parts boxes are counted at goods-in. A designated area for part number, count and batch — in a consistent position across every box size — is what makes that fast rather than a search across five panels.',
        ],
      },
    ],
    faqs: [
      { question: 'Why does a small parts box fail?', answer: '<p>Because metal is heavy for its volume and the board was graded by box size rather than filled weight. Send the filled weight — it is almost always higher than a size-based estimate.</p>' },
      { question: 'Will oil from the parts damage the box?', answer: '<p>On untreated board, yes. Residual machining oil soaks in and weakens the fibers. A coated inner face handles it inexpensively.</p>' },
      { question: 'How do I stop sharp edges cutting through?', answer: '<p>A fitted divider or a heavier liner between the parts and the wall. Sharp edges cut liners first and the box afterwards.</p>' },
      { question: 'Where should part numbers be printed?', answer: '<p>In a consistent position across every box size, so goods-in reads the same face every time rather than searching five panels.</p>' },
      { question: 'What board is used?', answer: '<p>Double-wall for anything heavy, with the base given particular attention because dense contents load it directly.</p>' },
      { question: 'Can you supply boxes with dividers?', answer: '<p>Yes, and for mixed parts they prevent both damage and miscounting. Dividers also stiffen the box under a top load.</p>' },
      { question: 'Are these suitable for long-term stores?', answer: '<p>With a moisture-resistant treatment, yes. Board in an unheated store weakens over time, and heavy contents make that consequential.</p>' },
      { question: 'Do you produce boxes to a customer part specification?', answer: '<p>Yes. Send the specification, including any labeling or barcode requirements your system needs, and we design inward from it.</p>' },
      { question: 'Can these be reused?', answer: '<p>Within limits. Corrugated loses strength each time it is handled, so a box specified for a single trip should not be relied on for a second under the same load.</p>' },
      { question: 'Are plain unprinted boxes available?', answer: '<p>Yes, and for internal transit they are usually the sensible choice. Print adds cost with no selling function.</p>' },
    ],
  },

  'kraft-chemical-safe-boxes': {
    intro:
      'Packaging for chemical products is governed by what is inside it and by how it travels. The requirements are external and they are not negotiable.',
    sections: [
      {
        h2: 'The requirement comes from the substance and the mode',
        body: [
          'Marking, construction and testing requirements differ by substance classification and by whether the consignment goes by road, sea or air. The same product can need different packaging for different routes.',
          'Send the specific requirement your operation works to rather than a general description. We will tell you plainly where a job needs a certified packaging supplier rather than quoting around it.',
        ],
      },
      {
        h2: 'Containment is a separate question from strength',
        body: [
          'A strong outer does not contain a leak. Where a spill is a genuine risk the pack needs an inner liner or an absorbent layer, and that is a different specification decision from the board grade.',
        ],
      },
      {
        h2: 'Marks take the panel they need',
        body: [
          'Hazard diamonds, orientation arrows and handling marks have prescribed sizes and positions. They are laid out first and brand identity works around what is left, which is the opposite of a retail pack.',
        ],
      },
    ],
    link: {
      lead: 'For non-hazardous industrial contents, ',
      href: '/product/kraft-industrial-parts-boxes/',
      anchor: 'parts boxes cover the general case',
      tail: '.',
    },
    faqs: [
      { question: 'Can you produce packaging for hazardous goods?', answer: '<p>Requirements differ by substance classification and by transport mode, and some routes require certified packaging from an approved supplier. Send the specific requirement you work to and we will tell you honestly whether the job belongs with us or with a certified converter.</p>' },
      { question: 'Does the same product need the same pack for every route?', answer: '<p>Not necessarily. Road, sea and air can each impose different requirements on the same substance, so the transport mode belongs in the brief alongside the product.</p>' },
      { question: 'Does a stronger box contain a leak?', answer: '<p>No. Containment and strength are different problems. Where a spill is a real risk the pack needs an inner liner or an absorbent layer, specified separately from the board grade.</p>' },
      { question: 'How much panel space do hazard marks take?', answer: '<p>They have prescribed sizes and positions and they are laid out first. Brand identity works around what is left, which is the reverse of a retail pack.</p>' },
      { question: 'What board is used?', answer: '<p>Double-wall corrugated in most cases, with the grade following weight and stacking as usual. The classification requirements sit on top of that rather than replacing it.</p>' },
      { question: 'Can you supply inner liners?', answer: '<p>Yes, and for liquid or powder contents they are usually the component that matters most. Tell us the substance form and we specify accordingly.</p>' },
      { question: 'Do you handle UN marking?', answer: '<p>Where UN-certified packaging is required, that must come from a certified supplier with the testing behind it. We will say so at enquiry rather than quoting a pack that would not comply.</p>' },
      { question: 'Are moisture-resistant treatments compatible?', answer: '<p>Generally yes, and they are often sensible for chemical storage. We confirm compatibility with any classification requirement before quoting.</p>' },
      { question: 'Can these be produced with tamper evidence?', answer: '<p>Yes, with tear strips or security seals. For controlled substances that is frequently a requirement rather than an option.</p>' },
      { question: 'What information should I send at enquiry?', answer: '<p>The substance and its classification, the container it ships in, the transport mode, the destination, and any requirement your own compliance team has already specified.</p>' },
    ],
  },

  'kraft-insulated-cold-boxes': {
    intro:
      'An insulated box is specified by how long it has to hold temperature, not by how cold the contents start. Hold time is the number that decides everything.',
    sections: [
      {
        h2: 'Hold time, not temperature',
        body: [
          'A box holding a chilled product for six hours and one holding it for forty-eight are entirely different specifications, even for the same product at the same starting temperature. The liner thickness, the coolant quantity and the void volume all follow hold time.',
          'Send the journey duration including any delay at either end. Packs are specified for the planned journey and fail on the delayed one.',
        ],
      },
      {
        h2: 'Void space works against you',
        body: [
          'Air inside the pack is what the coolant has to keep cold. A box larger than the contents wastes coolant and shortens hold time, which is the opposite of the instinct to allow extra room.',
        ],
      },
      {
        h2: 'The outer still has to survive the journey',
        body: [
          'Insulation is not structure. The outer carton still needs grading against the filled weight — and a pack with coolant is considerably heavier than the product alone.',
        ],
      },
    ],
    link: {
      lead: 'For chilled food shipments where the pack also has to present, ',
      href: '/product/kraft-frozen-food-boxes/',
      anchor: 'frozen food packaging covers the retail-facing formats',
      tail: '.',
    },
    faqs: [
      { question: 'How do I specify an insulated box?', answer: '<p>By hold time rather than temperature. A six-hour and a forty-eight-hour requirement are entirely different specifications even for the same product, and liner thickness, coolant quantity and void volume all follow from it.</p>' },
      { question: 'Should I allow extra room inside?', answer: '<p>No — the opposite. Air inside the pack is what the coolant has to keep cold, so a box larger than the contents wastes coolant and shortens hold time.</p>' },
      { question: 'Does insulation make the box stronger?', answer: '<p>No. Insulation is not structure. The outer carton still needs grading against the filled weight, and a pack with coolant is considerably heavier than the product alone.</p>' },
      { question: 'What should I allow for delays?', answer: '<p>Specify for the delayed journey rather than the planned one. Packs are quoted against a schedule and fail when the schedule slips, which is when it matters most.</p>' },
      { question: 'What liner options are there?', answer: '<p>Several, differing in thickness, performance and recyclability. Tell us the hold time and whether recyclability is a stated requirement, since the two pull against each other.</p>' },
      { question: 'Can the liner be recyclable?', answer: '<p>Paper-based liners exist and are the more recyclable option, generally at some cost to hold time. It is a genuine trade rather than a free choice.</p>' },
      { question: 'Do you supply coolant as well?', answer: '<p>We specify the pack around the coolant you use. Tell us the type and quantity, because both affect the internal volume and the hold time.</p>' },
      { question: 'Are these suitable for frozen as well as chilled?', answer: '<p>Yes, with the specification set accordingly. Frozen generally needs more coolant and a longer hold time for the same journey.</p>' },
      { question: 'Will condensation affect the outer carton?', answer: '<p>It can, which is why a moisture-resistant outer is usually specified. Untreated board softens where condensation collects, typically at the base.</p>' },
      { question: 'Can these be printed?', answer: '<p>Yes, and handling and orientation marks are worth printing even on an unbranded pack. A cold-chain box handled the wrong way up loses performance.</p>' },
    ],
  },

  'kraft-eco-friendly-compostable-boxes': {
    intro:
      'Compostable, recyclable and recycled are three different claims with three different kinds of evidence behind them. Deciding which one you are making is the first step, not the last.',
    sections: [
      {
        h2: 'Three claims, not one',
        body: [
          'Recycled content describes what the board is made from. Curbside recyclability describes what a household can do with it. Certified compostability describes how it breaks down under specific conditions, usually industrial rather than home composting.',
          'They are not interchangeable, and a pack can satisfy one while failing another. Tell us which claim you intend to print and we specify to it rather than to a general intention.',
        ],
        table: {
          caption: 'What each claim requires',
          head: ['Claim', 'Describes', 'Watch out for'],
          rows: [
            ['Recycled content', 'What the board is made from', 'Percentage should be stated, not implied'],
            ['Curbside recyclable', 'What a household can do with it', 'Any plastic laminate breaks it'],
            ['Home compostable', 'Breakdown in a garden heap', 'Much stricter than industrial'],
            ['Industrially compostable', 'Breakdown in a managed facility', 'Facilities are not universally available'],
          ],
        },
      },
      {
        h2: 'What quietly breaks a claim',
        body: [
          'A plastic laminate applied for a soft-touch finish takes a carton out of the paper stream in most municipalities. So does a filmed window, a metal end on a tube, or an adhesive that is not compatible with the stream.',
          'These are usually added late for a cosmetic reason, after the material has been carefully chosen, which is how a well-intentioned pack ends up unrecyclable.',
        ],
      },
      {
        h2: 'Right-sizing beats material choice',
        body: [
          'The largest environmental saving in most packaging programs is not the substrate, it is the size. A box cut to the product ships more units per pallet and cuts dimensional weight on every parcel, and it does that without any trade against performance.',
        ],
      },
    ],
    link: {
      lead: 'For recycled stocks across the standard ranges rather than a certified compostable specification, ',
      href: '/product/kraft-recycled-kraft-boxes/',
      anchor: 'recycled kraft boxes cover the general case',
      tail: '.',
    },
    faqs: [
      { question: 'What is the difference between recyclable and compostable?', answer: '<p>Recyclability describes what a household can do with the pack; compostability describes how it breaks down under specific conditions, usually industrial rather than home composting. They are not interchangeable and a pack can satisfy one while failing the other.</p>' },
      { question: 'What breaks a recyclability claim?', answer: '<p>A plastic laminate, a filmed window, a metal end on a tube, or an incompatible adhesive. These are usually added late for a cosmetic reason, after the material was carefully chosen.</p>' },
      { question: 'Can I have a soft-touch finish and stay recyclable?', answer: '<p>Not with a plastic laminate. A soft-touch aqueous varnish gets close on feel and keeps the carton in the paper stream — we will send both so you can judge by hand.</p>' },
      { question: 'Is home compostable the same as industrially compostable?', answer: '<p>No, and home is much stricter. Industrial compostability also assumes access to a managed facility, which is not universal, so the claim needs qualifying.</p>' },
      { question: 'What is the biggest environmental saving available?', answer: '<p>Usually right-sizing rather than the substrate. A box cut to the product ships more per pallet and cuts dimensional weight on every parcel, with no trade against performance.</p>' },
      { question: 'Can you state the recycled content percentage?', answer: '<p>We can state the recycled content of the board and supply the mill documentation behind it. A stated percentage is far more defensible than an unqualified claim.</p>' },
      { question: 'Is recycled board weaker?', answer: '<p>Slightly, at the same caliper — recycled fibers are shorter, so the board is a little less stiff and takes on moisture faster. Stepping up one caliper generally restores performance while keeping the claim.</p>' },
      { question: 'Which inks are used?', answer: '<p>Soy and vegetable-based inks are available and suit uncoated kraft well. Tell us if ink choice forms part of your published claim.</p>' },
      { question: 'Can a window box still be recyclable?', answer: '<p>With a plain die-cut aperture and no film, yes. A filmed window means the pack is no longer straight paper and most curbside systems want the film separated first.</p>' },
      { question: 'How do I avoid overstating a claim?', answer: '<p>Claim the component rather than the pack. "Recyclable carton" is accurate and defensible where "recyclable packaging" around a laminated component is not.</p>' },
    ],
  },

  'kraft-recycled-kraft-boxes': {
    intro:
      'Recycled kraft is the default rather than the exception across most of this catalog. What is worth understanding is where it behaves differently from virgin board.',
    sections: [
      {
        h2: 'Shorter fibers, slightly less stiffness',
        body: [
          'Recycled fibers have been through the process before and are shorter, which makes the board marginally less stiff at the same caliper and slightly quicker to take on moisture. Neither is a problem — both are predictable, and stepping up one caliper restores the performance while keeping the claim intact.',
          'Where it shows most is on large flat panels: a big lid on recycled board at the same weight flexes a little more than the virgin equivalent.',
        ],
      },
      {
        h2: 'Print behavior on recycled stock',
        body: [
          'Recycled kraft is less uniform than bleached board, and that variation shows in flat areas of solid color. Designs built for it — line work, solid marks, generous space — hold up far better than large even tints.',
        ],
      },
      {
        h2: 'What the claim actually says',
        body: [
          'Recycled content describes what the board is made from. It says nothing about whether the finished pack can be recycled again, which depends on what is applied to it. Both are worth stating separately if both are true.',
        ],
      },
    ],
    link: {
      lead: 'Where a certified compostable specification is needed rather than recycled content, ',
      href: '/product/kraft-eco-friendly-compostable-boxes/',
      anchor: 'compostable packaging covers those requirements',
      tail: '.',
    },
    faqs: [
      { question: 'Is recycled board weaker than virgin board?', answer: '<p>Slightly, at the same caliper. Recycled fibers are shorter so the board is a little less stiff and takes on moisture a little faster. Stepping up one caliper restores performance while keeping the claim.</p>' },
      { question: 'Where does the difference show most?', answer: '<p>On large flat panels. A big lid on recycled board at the same weight flexes a little more than the virgin equivalent, which is noticeable in the hand.</p>' },
      { question: 'Does recycled board print differently?', answer: '<p>It is less uniform than bleached board and that variation shows in flat areas of solid color. Line work and solid marks hold up far better than large even tints.</p>' },
      { question: 'Does recycled content mean the pack is recyclable?', answer: '<p>No — those are separate claims. Recycled content describes what the board is made from; recyclability depends on what is applied to it afterwards.</p>' },
      { question: 'Can you state the percentage?', answer: '<p>Yes, and we can supply the mill documentation behind it. A stated percentage is far more defensible than an unqualified claim.</p>' },
      { question: 'Is recycled board food-safe?', answer: '<p>It depends on the grade and whether contact is direct. Tell us the application and we specify a compliant stock rather than assuming.</p>' },
      { question: 'Does it cost more than virgin board?', answer: '<p>Not usually, and often less. The cost difference is small either way compared with the effect of box size on freight.</p>' },
      { question: 'Can recycled board take lamination?', answer: '<p>Yes, but a plastic laminate takes the pack out of the paper stream, which usually defeats the reason for choosing recycled stock. An aqueous varnish is the alternative.</p>' },
      { question: 'Is the color consistent between runs?', answer: '<p>There is more batch variation than with bleached board. Where color consistency matters across runs, tell us and we will hold stock from a single batch where possible.</p>' },
      { question: 'Can I use recycled board across a whole range?', answer: '<p>Yes, and it is worth doing for consistency. A range mixing recycled and virgin stocks is noticeable in both color and hand.</p>' },
    ],
  },
}
