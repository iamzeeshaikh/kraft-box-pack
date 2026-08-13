import type { ProductContentMap } from './types'

/**
 * Stationery and small carried goods, plus apparel and soft goods.
 *
 * The first group is constrained by price: the product is inexpensive, the
 * panel is small, and every press pass is visible in the margin. The second is
 * constrained by volume: nothing breaks, but almost everything ships larger
 * than it needs to, and on apparel that is the entire cost problem.
 */
export const electronicsApparelContent: ProductContentMap = {
  /* ------------------------- stationery ------------------------- */

  'kraft-pen-packaging-boxes': {
    intro:
      'A pen box is long, narrow and inexpensive. Those three facts rule out most of the decisions that would be obvious on a larger pack.',
    sections: [
      {
        h2: 'A long narrow carton on light board feels wrong',
        body: [
          'The weight of a pen suggests a very light board, but a carton this shape flexes along its length if the caliper is too low, and a flexing box reads as cheap even when the pen inside is not.',
          'The board is chosen for perceived quality and span rather than for the load, which is the opposite of how most formats in the catalog are specified.',
        ],
      },
      {
        h2: 'Designing for a strip, not a rectangle',
        body: [
          'What a customer sees is a narrow vertical or horizontal strip. Designs laid out as though the panel were square lose their center when the box is made, and fine detail disappears entirely at this width on kraft.',
          'One mark and one short line is usually everything that reads.',
        ],
      },
      {
        h2: 'Gift versus retail',
        body: [
          'A pen sold as a gift justifies a rigid box with a fitted bed; a pen sold from a stationery fixture does not. The two are different products commercially even when the pen is identical, and the packaging decision follows the channel rather than the item.',
        ],
      },
    ],
    link: {
      lead: 'Where the same range includes pencils or sets rather than single pens, ',
      href: '/product/kraft-stationery-boxes/',
      anchor: 'stationery boxes cover compartmented layouts',
      tail: '.',
    },
    faqs: [
      { question: 'What board weight suits a pen box?', answer: '<p>Heavier than the weight of a pen suggests. A long narrow carton on light board flexes along its length, and a flexing box reads as cheap regardless of what is inside it.</p>' },
      { question: 'How much can I print on the panel?', answer: '<p>One mark and one short line is usually all that reads. The visible area is a narrow strip, and fine detail disappears at that width on kraft board.</p>' },
      { question: 'Should I use a rigid box or a folding carton?', answer: '<p>It follows the channel rather than the pen. A gift pen justifies rigid with a fitted bed; a pen sold from a stationery fixture does not.</p>' },
      { question: 'Can you make boxes for pen sets?', answer: '<p>Yes, with a bed holding each pen in a fixed position. Loose pens in a shared cavity roll and knock against each other, which marks lacquered barrels.</p>' },
      { question: 'Is a window worth having?', answer: '<p>It helps where the barrel finish is the selling point. On a narrow panel a window removes a lot of stiffness, so the board usually steps up a grade.</p>' },
      { question: 'Can the box include a refill or a warranty card?', answer: '<p>Yes, usually in a slot under the bed. Tell us the card size at quoting because it adds depth the pen dimensions do not account for.</p>' },
      { question: 'What finishes are worth the cost here?', answer: '<p>At retail price points, usually none beyond a coating. On gift pens a deboss or a small foil block reads well against kraft and is a single pass.</p>' },
      { question: 'Do these hang on a retail peg?', answer: '<p>They can, with a reinforced hang tab. The board around the hole is the failure point, so that area is strengthened rather than the whole panel.</p>' },
      { question: 'Can one box cover several pen models?', answer: '<p>If the barrel diameters are close, yes. Beyond a few millimeters difference the pen moves in the bed, and movement is what causes marking.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, and uncoated recycled kraft suits the category visually. We would step up a caliper to keep the long panel from flexing.</p>' },
    ],
  },

  'kraft-pencil-packaging-boxes': {
    intro:
      'Pencil packaging is nearly always a multipack, and the count is what drives the box rather than the pencil.',
    sections: [
      {
        h2: 'Count sets the dimensions',
        body: [
          'A twelve-pack, a twenty-four and a forty-eight are three different boxes even though the pencil is identical. The stacking arrangement — how many rows deep, how they nest — decides the internal volume, and pencils nest more tightly than a simple multiplication suggests.',
          'Send the count and the arrangement you want, or a filled sample. Calculating from pencil diameter alone overstates the box every time.',
        ],
      },
      {
        h2: 'Points and what damages them',
        body: [
          'Pre-sharpened pencils lose their points inside the box if they can slide lengthways. A close-fitting length, or a tray that holds them, prevents it. Unsharpened pencils have no such constraint and can run in a looser box.',
        ],
      },
      {
        h2: 'Price point discipline',
        body: [
          'Pencils sell for very little and every press pass is visible in the margin. Two colors on uncoated kraft with a good die-cut does more here than four colors with a finish, and a slide-and-shell box costs more than the category usually supports.',
        ],
        table: {
          caption: 'Format by count',
          head: ['Count', 'Usual format', 'Note'],
          rows: [
            ['6 to 12', 'Tuck-end carton', 'Single or double row'],
            ['24', 'Tuck-end or tray and sleeve', 'Rows nest, so depth is less than expected'],
            ['48 and above', 'Tray with sleeve', 'Weight starts to matter for the base'],
            ['Sets with sharpener', 'Compartmented tray', 'Loose accessories damage points'],
          ],
        },
      },
    ],
    link: {
      lead: 'For mixed sets including erasers, rulers and sharpeners, ',
      href: '/product/kraft-stationery-boxes/',
      anchor: 'stationery boxes handle compartmented contents',
      tail: '.',
    },
    faqs: [
      { question: 'What do you need to size a pencil box?', answer: '<p>The count and the arrangement, or a filled sample. Pencils nest more tightly than a simple multiplication of diameters suggests, so calculating from the pencil alone overstates the box.</p>' },
      { question: 'Why do pre-sharpened pencils arrive blunt?', answer: '<p>They slide lengthways inside the box and the points break against the end. A close-fitting length or a tray that holds them stops it.</p>' },
      { question: 'Can one box hold different counts?', answer: '<p>No, but different counts can share one board and print system. Only the dieline changes, which keeps the setup cost down across a range.</p>' },
      { question: 'What is the cheapest format that still looks good?', answer: '<p>A tuck-end carton with two colors on uncoated kraft and a well-made die-cut. At this price point a slide-and-shell box costs more than the category supports.</p>' },
      { question: 'Do I need an insert for a set with a sharpener?', answer: '<p>Yes. A loose sharpener or eraser moving among the pencils damages the points, so a compartmented tray is worth the small extra.</p>' },
      { question: 'Is a window useful on a pencil box?', answer: '<p>For colored pencils, yes — the color range is the product. For graphite pencils it adds cost without adding information.</p>' },
      { question: 'What board is used?', answer: '<p>Folding carton board for smaller counts, stepping up as the filled weight climbs. Above about forty-eight the base is what needs the attention.</p>' },
      { question: 'Can these be printed on the inside?', answer: '<p>They can, though on a stationery multipack the interior is rarely visible for long enough to justify the pass.</p>' },
      { question: 'Are these suitable for school and promotional runs?', answer: '<p>Yes, and short promotional runs suit digital print with no plate cost. Variable data such as a school name costs very little on a digital press.</p>' },
      { question: 'Do you supply plain boxes for repackers?', answer: '<p>Yes. Plain kraft cartons are common where a distributor applies their own labeling afterwards.</p>' },
    ],
  },

  'kraft-notebook-packaging': {
    intro:
      'Notebook packaging protects a flat, relatively heavy item whose corners and cover are the first things to show damage.',
    sections: [
      {
        h2: 'Corners are where the damage lands',
        body: [
          'A notebook is dense and flat, so a drop concentrates on a corner and the impression goes straight through the cover and several pages. Extra board across the whole panel barely helps; holding the notebook inboard of the pack corners does.',
        ],
      },
      {
        h2: 'Binding adds depth on one edge',
        body: [
          'A wire or spiral binding makes one edge thicker than the other, and a pack sized from the flat cover measurement will not close over it. Measure across the binding, not across the pages.',
        ],
      },
      {
        h2: 'Sleeves as an alternative to boxes',
        body: [
          'For a single notebook a printed belly band or a sleeve often does the branding job at a fraction of the cost of a box, while leaving the cover visible. A box earns its place for sets, for gifting, or where the notebook ships alone through a courier.',
        ],
      },
    ],
    faqs: [
      { question: 'Why do notebooks arrive with dented corners?', answer: '<p>A drop concentrates on a corner, and a dense flat item transmits it straight through the cover. Holding the notebook inboard of the pack corners helps far more than adding board across the panel.</p>' },
      { question: 'Do I measure across the pages or the binding?', answer: '<p>The binding. A wire or spiral binding makes one edge thicker, and a pack sized from the flat cover will not close over it.</p>' },
      { question: 'Is a sleeve enough, or do I need a box?', answer: '<p>For a single notebook a printed sleeve or belly band usually does the branding job at a fraction of the cost and leaves the cover visible. A box earns its place for sets, gifting or courier shipping.</p>' },
      { question: 'Can you produce packaging for notebook sets?', answer: '<p>Yes, with a compartment per notebook so they do not slide against one another. Covers rub in transit if they are stacked loose.</p>' },
      { question: 'What board suits a notebook box?', answer: '<p>E flute for anything shipped alone, folding carton for retail shelf packs. The deciding factor is whether a courier handles it.</p>' },
      { question: 'Can the pack show the cover?', answer: '<p>Yes, with a window or a sleeve that leaves the cover exposed. On a design-led notebook the cover is the product, so hiding it works against the sale.</p>' },
      { question: 'Do you print inside the box?', answer: '<p>It is worth it for gift sets, where the box is opened deliberately. For retail stock packs it rarely repays the pass.</p>' },
      { question: 'Are these suitable for corporate gifting runs?', answer: '<p>Yes, and short runs suit digital print. Variable data such as a recipient name costs very little at those quantities.</p>' },
      { question: 'Can the box hold a pen as well?', answer: '<p>Yes, with a fitted bed alongside the notebook. The pen needs its own seat or it moves and marks the cover.</p>' },
      { question: 'Are recycled options available?', answer: '<p>Yes, and they suit the category. Recycled fiber is slightly less stiff, so on a large flat lid we step up a caliper.</p>' },
    ],
  },

  'kraft-stationery-boxes': {
    intro:
      'A stationery box holds several unlike items — pens, a notebook, a ruler, an eraser — and the whole job is keeping them in position so the set looks deliberate when it opens.',
    sections: [
      {
        h2: 'Mixed heights are what spoil a set',
        body: [
          'Items of different thickness sink below the lid line and shift, and the set arrives looking disarranged even though nothing is damaged. Packing the shallow recesses up so every top sits level is the single change that makes a set look considered.',
        ],
      },
      {
        h2: 'Every cavity has to be reachable',
        body: [
          'A recess cut exactly to an eraser is a recess nobody can get the eraser out of. Cavities need a finger relief or a slight over-cut on one side, which is a detail that only shows up when someone tries to unpack the set.',
        ],
      },
      {
        h2: 'Corporate and promotional sets',
        body: [
          'Most volume in this format is corporate gifting rather than retail, which changes the priorities — the box is opened once, in front of colleagues, and then usually discarded. That argues for spending on the insert and the opening rather than on a structure built to last.',
        ],
      },
    ],
    link: {
      lead: 'Where the set is a marketing send rather than a stationery pack, ',
      href: '/product/kraft-marketing-kit-boxes/',
      anchor: 'marketing kit boxes cover press and seeding sets',
      tail: '.',
    },
    faqs: [
      { question: 'How do I stop a set looking untidy when it opens?', answer: '<p>Pack the shallow recesses up so every item sits at the same level. Mixed heights are what make a set look thrown together, even when nothing has moved.</p>' },
      { question: 'Why can I not get items out of the insert?', answer: '<p>Because the cavity was cut exactly to the item. Each recess needs a finger relief or a slight over-cut on one side, which only shows up when someone tries to unpack it.</p>' },
      { question: 'Should I spend on the box or the insert?', answer: '<p>On the insert, in most cases. The set is judged on how it looks when the lid comes off, and that is the insert doing the work.</p>' },
      { question: 'Can one box cover several set configurations?', answer: '<p>Yes — one outer size with two or three interchangeable inserts. You keep a single print run on the outer, which is the expensive part.</p>' },
      { question: 'What board suits a corporate gift set?', answer: '<p>Rigid where the opening matters and the budget allows, folding carton with a good fitment where it does not. The insert quality matters more than the outer construction.</p>' },
      { question: 'Can we add branding inside the lid?', answer: '<p>Yes, and on a gift set it is often the better place to spend. The inside of the lid is in view for the whole time the box is open.</p>' },
      { question: 'Do you produce these in short runs?', answer: '<p>Yes. Corporate sets are frequently ordered in tens and hundreds, which suits digital print with no plate cost.</p>' },
      { question: 'Can the insert be recyclable rather than foam?', answer: '<p>Yes, in die-cut board or molded pulp. Board suits regular shapes; molded pulp handles irregular items where a board cavity would be complicated.</p>' },
      { question: 'How do I stop items rattling?', answer: '<p>A snug cavity per item. Rattling reads as a cheap or incomplete set before the recipient has even looked at the contents.</p>' },
      { question: 'Can you match an existing corporate color?', answer: '<p>Yes, as a spot color on offset or flexo where consistency across runs matters. Digital is close but has a wider tolerance on a brand color.</p>' },
    ],
  },

  'kraft-badge-packaging-boxes': {
    intro:
      'Badge and pin packaging is small, flat and usually sold as an impulse item, so the pack has to identify the design without being opened.',
    sections: [
      {
        h2: 'The pin has to be immobilised',
        body: [
          'A loose pin inside a box works its way under the backing card, and on an enamel badge the pin scratches the face of the badge beside it. A slit card or a foam pad the pin pushes through holds it flat and separated.',
        ],
      },
      {
        h2: 'Showing the design',
        body: [
          'Badges are bought on the design, so the design has to be visible. A window, or a card the badge is mounted on inside a clear sleeve, does that. A closed box needs the design reproduced on the front, which is an extra print consideration rather than a saving.',
        ],
      },
      {
        h2: 'Peg display',
        body: [
          'Most of this product hangs on a peg. That means a reinforced hang tab, and it means the top third of the pack carries the identification, because the packs in front hide the rest.',
        ],
      },
    ],
    faqs: [
      { question: 'How do I stop the pin scratching the badge?', answer: '<p>Immobilise it. A slit card or a foam pad the pin pushes through holds it flat and separated; a loose pin works under the backing and scratches the enamel face.</p>' },
      { question: 'Should the pack have a window?', answer: '<p>Usually, because badges are bought on the design. Without one the design has to be reproduced on the front, which is an extra print consideration rather than a saving.</p>' },
      { question: 'Where should the branding go on a peg pack?', answer: '<p>The top third. Packs in front hide the rest until a customer is close, so centring the identification hides it.</p>' },
      { question: 'What size are these packs?', answer: '<p>Cut to the badge and its backing card, which is usually a little larger than the badge itself to give the pin somewhere to sit.</p>' },
      { question: 'Can you supply the backing card as well?', answer: '<p>Yes, printed and slit for the pin. The card and the outer are usually specified together because the card sets the internal dimensions.</p>' },
      { question: 'Are multipack options available?', answer: '<p>Yes, with each badge on its own card position so pins cannot reach the badge beside them.</p>' },
      { question: 'What board is used?', answer: '<p>Folding carton board for the outer, a heavier card for the mount. The mount needs to stay flat, which is a stiffness question rather than a strength one.</p>' },
      { question: 'Can these be produced in very small runs?', answer: '<p>Yes. Badge runs are frequently small, which suits digital print with no plate cost and allows different designs within one order.</p>' },
      { question: 'Is a hang tab standard?', answer: '<p>It is optional but common. The board around the hole is reinforced rather than the whole panel, since that is where packs tear.</p>' },
      { question: 'Can the pack be recyclable with a window?', answer: '<p>A plain die-cut aperture keeps the pack in the paper stream; a filmed window does not. If the recycling claim matters more than protection, the open aperture is the option.</p>' },
    ],
  },

  'kraft-keychain-packaging-boxes': {
    intro:
      'A keychain pack is small and light with an awkward shape — a ring, a fob and often a chain that tangles with itself.',
    sections: [
      {
        h2: 'The chain is the problem, not the fob',
        body: [
          'A fob sits still. The ring and any chain move, and on a card pack they swing and mark the fob face. Securing the ring separately from the fob keeps the two apart in transit.',
        ],
      },
      {
        h2: 'Small pack, small message',
        body: [
          'At this size the panel carries a mark and very little else. Where the keychain is a promotional item, the recipient already knows the brand, so the pack is doing presentation rather than identification and can be simpler than instinct suggests.',
        ],
      },
      {
        h2: 'Retail versus promotional',
        body: [
          'A retail keychain needs a peg pack and a visible product. A promotional one is handed over, so a small rigid box or a printed sleeve makes more sense and costs less at the quantities involved.',
        ],
      },
    ],
    faqs: [
      { question: 'How do I stop the fob getting marked?', answer: '<p>Secure the ring separately from the fob. The fob sits still; it is the ring and chain swinging against it that causes the marking.</p>' },
      { question: 'Should this be a peg pack or a box?', answer: '<p>Peg for retail, where the product has to be seen. A box or a printed sleeve for promotional handouts, where the recipient already knows the brand.</p>' },
      { question: 'How much can I print on the pack?', answer: '<p>One mark and a short line. At this size anything more competes with itself, and fine detail disappears on kraft.</p>' },
      { question: 'Can you produce packs for metal and acrylic fobs together?', answer: '<p>Yes, though the thickness usually differs enough to need two card positions or two dielines. Send both fob types and we will tell you which.</p>' },
      { question: 'Is a window worth it?', answer: '<p>For retail, yes — the fob design is the purchase decision. For promotional use it adds cost without adding information.</p>' },
      { question: 'What board is used?', answer: '<p>Folding carton board, with a heavier card where the fob is mounted and has to stay flat.</p>' },
      { question: 'Can these be made in mixed designs within one order?', answer: '<p>Yes, on digital print. Mixed designs in one run are straightforward without plate costs.</p>' },
      { question: 'Do you supply a hang tab?', answer: '<p>Yes, reinforced around the hole. That is where peg packs tear, so the strengthening goes there rather than across the panel.</p>' },
      { question: 'Can the pack hold a keychain and a card together?', answer: '<p>Yes, with a slot for the card behind the fob position. Tell us the card size at quoting since it adds to the pack depth.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes across this range, and an open die-cut aperture rather than a filmed window keeps the whole pack in the paper stream.</p>' },
    ],
  },

  /* -------------------------- apparel -------------------------- */

  'kraft-apparel-packaging-boxes': {
    intro:
      'Apparel packaging is forgiving about impact and unforgiving about volume. Nothing breaks; almost everything ships larger than it needs to.',
    sections: [
      {
        h2: 'Whether a box is needed at all',
        body: [
          'Garments move in cartons largely out of habit. For non-fragile soft goods a flat mailer removes both volume and weight, and the freight saving lands on every parcel rather than once.',
          'A box earns its place where presentation is part of what the customer paid for — gifting, premium retail, a brand where the unboxing is the point. Where it is not, the box is a cost with no return.',
        ],
      },
      {
        h2: 'Measure the garment folded and compressed',
        body: [
          'The figure that matters is the garment folded the way it will actually be packed, then measured as a stack. Laid-flat measurements and supplier dimensions both produce a box of the wrong depth.',
          'Garments also compress, so a box sized to an uncompressed stack ships mostly air.',
        ],
      },
      {
        h2: 'Two or three depths cover a range',
        body: [
          'Rather than a box per product, one footprint with two or three depths usually covers a whole apparel range while sharing print and board. That keeps the shelf and unboxing look consistent without shipping empty space on the thinner items.',
        ],
      },
    ],
    link: {
      lead: 'If a flat pack turns out to suit the range better than a box, ',
      href: '/product/kraft-mailer-boxes/',
      anchor: 'mailer boxes are the lower-volume alternative',
      tail: '.',
    },
    faqs: [
      { question: 'Could my garments ship in something flatter?', answer: '<p>Very often. Apparel moves in cartons out of habit rather than need, and for non-fragile soft goods a flat mailer removes volume and weight with sufficient protection.</p>' },
      { question: 'What dimensions should I send?', answer: '<p>The garment folded as it will actually be packed, measured as a stack and compressed. Laid-flat and supplier measurements both give the wrong depth.</p>' },
      { question: 'Do apparel boxes need protection inside?', answer: '<p>Rarely for the garment. Tissue is presentational rather than protective, and where a box is oversized the answer is a smaller box rather than more filler.</p>' },
      { question: 'Can one box work across several garment types?', answer: '<p>Usually two or three depths sharing one footprint cover a range, which keeps the look consistent without shipping air on the thinner items.</p>' },
      { question: 'Is a window worth it on apparel packaging?', answer: '<p>It helps where color is the deciding factor at retail. It costs stiffness in that panel, so on a large lid the board usually steps up a grade.</p>' },
      { question: 'What closure suits a garment box?', answer: '<p>A lift-off lid for presentation, a tuck lock for retail volume, a magnetic closure where it is opened in front of someone. The choice follows where it is opened.</p>' },
      { question: 'Will these stack in a stockroom?', answer: '<p>Yes, though garments provide no structural support, so stacking strength comes entirely from the board. Send the stack height if boxes are stored filled.</p>' },
      { question: 'Should the inside of the lid be printed?', answer: '<p>For direct-to-consumer apparel, usually yes. The inside of the lid is what the customer sees first when the box opens.</p>' },
      { question: 'Are recycled stocks available?', answer: '<p>Yes across the range. Recycled fiber is slightly less stiff at the same caliper, so we step up a grade to keep large panels feeling firm.</p>' },
      { question: 'Can you produce boxes for multi-garment sets?', answer: '<p>Yes, with a divider so garments do not slide against each other. Loose stacking is what creases the item at the bottom.</p>' },
    ],
  },

  'kraft-t-shirt-boxes': {
    intro:
      'A folded t-shirt is a predictable size, which makes this one of the few apparel formats where a genuinely standard footprint works — provided the depth matches the fold.',
    sections: [
      {
        h2: 'The fold decides the box',
        body: [
          'A shirt folded in a retail fold is a different footprint from one folded in thirds for shipping. Decide the fold first and size the box to it; sizing the box first forces the fold to change, which usually means the printed graphic ends up creased across its middle.',
        ],
      },
      {
        h2: 'Depth against shirt weight',
        body: [
          'A single lightweight tee and a heavyweight or a three-pack differ substantially in depth. Compressed, a three-pack is less than three times a single, but it is nowhere near the same. Send the actual stack.',
        ],
      },
      {
        h2: 'Where the graphic sits',
        body: [
          'If the shirt is folded so the print shows, the box is a frame for it and a window earns its cost. If it is folded plain-side out, the window shows nothing and the pack has to carry the identification itself.',
        ],
      },
    ],
    link: {
      lead: 'For accessories packed alongside apparel, ',
      href: '/product/kraft-sock-packaging-boxes/',
      anchor: 'sock packaging covers the smaller formats',
      tail: '.',
    },
    faqs: [
      { question: 'What size is a t-shirt box?', answer: '<p>It follows the fold. A retail fold and a shipping fold in thirds are different footprints, so decide the fold first and we size to it.</p>' },
      { question: 'How deep should the box be?', answer: '<p>Deep enough for the compressed stack. A heavyweight tee or a three-pack is substantially deeper than a single lightweight shirt, though less than a simple multiplication suggests.</p>' },
      { question: 'Is a window worth it?', answer: '<p>Only if the shirt is folded print-side out. Folded plain-side out the window shows nothing and the pack has to carry the identification itself.</p>' },
      { question: 'Will the graphic crease?', answer: '<p>It will if the box forces a fold through the middle of the print. That is why the fold is decided before the box rather than after.</p>' },
      { question: 'Can one box hold different sizes of shirt?', answer: '<p>Yes within reason — a small and an extra large fold to a similar footprint but differ in depth. One depth chosen for the largest usually covers the range.</p>' },
      { question: 'Do you supply boxes for multipacks?', answer: '<p>Yes, with the depth set by the compressed stack. Above three shirts a divider helps keep the stack square in the box.</p>' },
      { question: 'What board is used?', answer: '<p>Folding carton for retail, E flute where the box ships alone through a courier. Weight is not the issue; handling is.</p>' },
      { question: 'Should the box be printed inside?', answer: '<p>For direct-to-consumer, it is worth it. The lid interior is the first thing seen when the box opens.</p>' },
      { question: 'Can these ship without an outer carton?', answer: '<p>In E flute, yes. A folding carton shipped alone arrives with crushed corners and a courier label across the artwork.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes. On a large flat lid we step up a caliper because recycled fiber is slightly less stiff at the same weight.</p>' },
    ],
  },

  'kraft-sock-packaging-boxes': {
    intro:
      'Socks are sold in pairs and multipacks and are almost always bought on the design, so the pack has to show what is inside without being opened.',
    sections: [
      {
        h2: 'Rolled or folded changes everything',
        body: [
          'A rolled pair is a compact cylinder; a folded pair is a flat rectangle. They need completely different packs, and which one you use is a merchandising decision that has to be made before the dieline.',
        ],
      },
      {
        h2: 'Multipacks and visible variety',
        body: [
          'On a multipack the buyer wants to see the range of designs in the pack. A window or an open-fronted sleeve shows two or three of them; a closed box has to reproduce all of them on the panel, which is a busier design problem.',
        ],
      },
      {
        h2: 'Very tight price points',
        body: [
          'Socks sell for little and are frequently discounted, so the pack has to be cheap. A printed belly band around a rolled pair costs a fraction of a carton and does most of the branding job, which is why it is so common in this category.',
        ],
        list: {
          title: 'Format by price point',
          items: [
            'Belly band — cheapest, suits rolled pairs, minimal protection',
            'Open-fronted sleeve — shows the design, still low cost',
            'Tuck carton with window — retail shelf presence at moderate cost',
            'Rigid box — gift multipacks only, rarely justified otherwise',
          ],
        },
      },
    ],
    link: {
      lead: 'For underwear and similar soft goods sold alongside, ',
      href: '/product/kraft-underwear-packaging-boxes/',
      anchor: 'underwear packaging faces the same visibility question',
      tail: '.',
    },
    faqs: [
      { question: 'Should socks be rolled or folded in the pack?', answer: '<p>That is a merchandising decision to make before the dieline. A rolled pair is a compact cylinder and a folded pair is a flat rectangle, and they need completely different packs.</p>' },
      { question: 'What is the cheapest option that still brands the product?', answer: '<p>A printed belly band around a rolled pair. It costs a fraction of a carton and does most of the branding job, which is why it dominates this category.</p>' },
      { question: 'Do I need a window?', answer: '<p>On a multipack it helps, because the buyer wants to see the range of designs. A closed box has to reproduce them all on the panel instead.</p>' },
      { question: 'Can one pack cover several designs?', answer: '<p>Yes, with a window showing the actual socks so the pack itself stays generic. That is much cheaper than a printed variant per design.</p>' },
      { question: 'What board suits a sock carton?', answer: '<p>Light folding carton board. There is no load to carry, so the specification follows print and stiffness rather than strength.</p>' },
      { question: 'Are hang tabs available?', answer: '<p>Yes, reinforced around the hole. Socks are commonly sold from pegs and that is where packs tear.</p>' },
      { question: 'Can you produce gift multipacks?', answer: '<p>Yes, and a rigid box is occasionally justified there. Outside gifting the category rarely supports it.</p>' },
      { question: 'How do I keep pairs together in the pack?', answer: '<p>A band or a slot per pair. Loose pairs in a shared cavity separate, and a multipack that arrives mismatched looks like a fault.</p>' },
      { question: 'Do you print on the inside?', answer: '<p>Rarely worth it at this price point. The pack is opened once and discarded.</p>' },
      { question: 'Are recycled options available?', answer: '<p>Yes, and uncoated recycled kraft suits the category. A plain die-cut aperture rather than a filmed window keeps the pack fully recyclable.</p>' },
    ],
  },

  'kraft-underwear-packaging-boxes': {
    intro:
      'Underwear packaging has to show enough of the product to sell it while keeping the pack from feeling flimsy. Those two pull against each other.',
    sections: [
      {
        h2: 'Visibility against stiffness',
        body: [
          'Buyers want to see the fabric and the color, which argues for a large window. Every square inch of aperture removes stiffness from that panel, and a flimsy pack in this category reads as a cheap product.',
          'Past roughly a third of the panel the board usually needs stepping up a grade to compensate, and that cost has to be weighed against a smaller window.',
        ],
      },
      {
        h2: 'Multipacks and size marking',
        body: [
          'Size is the single most important piece of information on the pack and it is what a shopper scans for. It belongs where it reads at arm\'s length, not in the corner of a busy panel.',
        ],
      },
      {
        h2: 'Flat packing and shelf stacking',
        body: [
          'These are usually stacked flat on a shelf or in a bin, so the pack has to hold its shape under the weight of the ones above it. Board that is adequate for a single pack is not always adequate for a stack of twenty.',
        ],
      },
    ],
    faqs: [
      { question: 'How large can the window be?', answer: '<p>Past roughly a third of the panel the board usually needs to step up a grade, because every square inch of aperture removes stiffness. That cost is weighed against a smaller window.</p>' },
      { question: 'Where should the size marking go?', answer: '<p>Where it reads at arm\'s length. Size is the single thing a shopper scans for in this category, so putting it in the corner of a busy panel works against the sale.</p>' },
      { question: 'Will the pack hold up in a stacked bin?', answer: '<p>Only if the board is specified for the stack rather than for a single pack. Send how they are merchandised and we grade against that.</p>' },
      { question: 'Can one pack cover several sizes?', answer: '<p>Yes, with the size applied as a printed variant or a label. The dieline stays the same, which keeps one tooling cost across the range.</p>' },
      { question: 'Is a window or a photograph better?', answer: '<p>A window, where the fabric or color is the selling point. A photograph flattens texture that a window shows directly.</p>' },
      { question: 'What board is used?', answer: '<p>Folding carton board, weighted against the window size rather than the product weight. The aperture is what drives the specification here.</p>' },
      { question: 'Do these hang as well as stack?', answer: '<p>They can, with a reinforced hang tab. Tell us which merchandising applies, because a pack designed for stacking is not automatically right for a peg.</p>' },
      { question: 'Can you produce multipack cartons?', answer: '<p>Yes, with the depth set by the compressed stack. Multipacks compress more than buyers expect, so a filled sample is worth sending.</p>' },
      { question: 'Is a plain aperture an option instead of film?', answer: '<p>Yes, and it keeps the pack in the paper recycling stream. The trade is that the product can be touched in store.</p>' },
      { question: 'Are recycled boards suitable here?', answer: '<p>Yes, with a caliper step-up. On a windowed panel the stiffness loss from recycled fiber and from the aperture compound, so it is worth allowing for both.</p>' },
    ],
  },

  'kraft-belt-packaging-boxes': {
    intro:
      'A belt is long, coiled and has a heavy buckle at one end. The buckle is what decides the box.',
    sections: [
      {
        h2: 'Coil diameter, not belt length',
        body: [
          'A belt is packed coiled, so the measurement that matters is the coil diameter as it will actually be rolled, plus the buckle sitting on top of or beside it. Belt length tells you almost nothing about the box.',
        ],
      },
      {
        h2: 'The buckle marks the leather',
        body: [
          'Coiled tightly, the buckle presses into the strap beneath it and leaves an impression that does not come out of leather. A card or a fold of tissue between the buckle and the coil prevents it, and a fitted seat is better still.',
        ],
      },
      {
        h2: 'Boxes that suit both gifting and retail',
        body: [
          'Belts are heavily gifted, so a box that presents well earns its cost more often here than in most accessory categories. A shallow lidded box with the belt coiled and the buckle displayed reads better than a deep box with the belt loose in it.',
        ],
      },
    ],
    faqs: [
      { question: 'What measurement do you need for a belt box?', answer: '<p>The coil diameter as the belt will actually be rolled, plus the buckle. Belt length tells you almost nothing about the box.</p>' },
      { question: 'Why does the buckle mark the strap?', answer: '<p>Coiled tightly it presses into the leather beneath it, and that impression does not come out. A card between buckle and coil prevents it; a fitted seat is better still.</p>' },
      { question: 'Should the buckle be visible in the pack?', answer: '<p>For gifting and retail, usually yes — the buckle is the design element buyers judge. A shallow lidded box with the buckle displayed reads better than a deep box with the belt loose.</p>' },
      { question: 'Can one box fit several belt widths?', answer: '<p>Within a small range, yes. Beyond that the coil diameter changes enough that the belt moves in the box, which is what causes marking.</p>' },
      { question: 'What board is used?', answer: '<p>Folding carton for retail, rigid for gifting. The weight of a belt is modest but concentrated in the buckle, so the base takes more load than the size suggests.</p>' },
      { question: 'Is a window useful?', answer: '<p>It can show the buckle, which is the part buyers assess. A window over the strap alone adds little.</p>' },
      { question: 'Do you supply boxes for belt sets?', answer: '<p>Yes, with a position per belt. Two belts loose in one cavity mark each other at the buckles.</p>' },
      { question: 'Can these be stacked on a shelf?', answer: '<p>Yes, though the buckle creates a high point. A box sized so the lid clears the buckle stacks flat; one sized tight to the coil does not.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes. For a gift-grade box we would usually specify a wrapped rigid construction, which takes recycled board equally well.</p>' },
      { question: 'Can the box be reused for storage?', answer: '<p>A rigid box will be, and belts are commonly kept in their boxes. That argues for a lid that still fits after repeated opening.</p>' },
    ],
  },

  'kraft-scarf-boxes': {
    intro:
      'A scarf is bulky, weightless and almost entirely about how it looks when the box opens. The pack is a presentation problem rather than a protection one.',
    sections: [
      {
        h2: 'Fold and volume',
        body: [
          'A scarf folded loosely fills far more space than one folded tightly, and folding it tightly to fit a small box creases it. The box has to suit the fold the brand actually wants to present, which is usually looser than the cheapest option.',
        ],
      },
      {
        h2: 'Nothing here needs protecting',
        body: [
          'There is no impact risk worth designing for. Board weight is chosen so the box holds its shape when handled and looks substantial in the hand, not to protect the contents.',
        ],
      },
      {
        h2: 'The opening moment',
        body: [
          'This is a heavily gifted product, and the box is judged in the second the lid comes off. Tissue, an interior print or a contrasting lining does more for that moment than anything on the outside of the box.',
        ],
      },
    ],
    faqs: [
      { question: 'How do I size a scarf box?', answer: '<p>To the fold you actually want to present. A loose fold looks better and takes more space; folding tightly to fit a small box creases the scarf.</p>' },
      { question: 'Does the box need to protect the scarf?', answer: '<p>Not really. There is no impact risk worth designing for, so board weight is chosen so the box holds its shape and feels substantial rather than to protect the contents.</p>' },
      { question: 'What makes the opening feel premium?', answer: '<p>The interior. Tissue, an interior print or a contrasting lining does more in the second the lid comes off than anything on the outside.</p>' },
      { question: 'Should it be rigid or a folding carton?', answer: '<p>Rigid for gifting, which is most of this category. A folding carton is adequate for volume retail where the box is not part of the presentation.</p>' },
      { question: 'Is a window worth having?', answer: '<p>It can show color and pattern, which are what buyers choose on. The trade is that the scarf can be touched in store.</p>' },
      { question: 'Can one box cover several scarf sizes?', answer: '<p>Usually yes, since the fold is adjustable. It is the fold rather than the scarf dimensions that sets the box.</p>' },
      { question: 'Do you supply tissue as well?', answer: '<p>We can specify it with the box so the two are sized together. Tissue cut to the wrong size is more noticeable than it sounds.</p>' },
      { question: 'What board weight is typical?', answer: '<p>Enough that a large lid does not flex when lifted, which is more about panel span than about contents weight.</p>' },
      { question: 'Can the box be posted directly?', answer: '<p>Inside a plain outer, yes. A presentation box posted alone arrives scuffed at the corners with a label across the artwork.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, including for wrapped rigid constructions. On a large flat lid we step up a caliper for stiffness.</p>' },
    ],
  },
}
