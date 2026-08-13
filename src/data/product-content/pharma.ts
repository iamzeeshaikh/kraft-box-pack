import type { ProductContentMap } from './types'

/**
 * Pharmaceutical, supplement and medical packaging.
 *
 * Every product here is specified around copy that is required rather than
 * chosen. The panel is laid out first at legal size and the design works
 * around what is left — doing it the other way round is what forces reprints.
 */
export const pharmaContent: ProductContentMap = {
  'kraft-medicine-packaging-boxes': {
    intro:
      'A medicine carton holds a blister strip or a bottle together with a folded patient leaflet, and the leaflet is bulkier than almost anyone allows for.',
    sections: [
      {
        h2: 'The leaflet is a dimension',
        body: [
          'A folded patient leaflet commonly adds three to five millimeters of depth that the blister or bottle dimensions do not account for. A carton sized from the medicine alone runs tight, jams on an automatic cartoner and has to be re-tooled after the board has already been bought.',
          'Send the folded leaflet with the product sample. Its folded thickness is a real dimension and it is the one most often missing from a brief.',
        ],
      },
      {
        h2: 'Board chosen for the line, not for the hand',
        body: [
          'On an automatic cartoner the board has to crease consistently at speed. A stock that feels good but creases unevenly is a production problem long before it is a design one, and it shows up as jams rather than as complaints.',
          'Folding boxboard around 300 to 350 gsm is the usual range. The selection criterion is creasing behavior rather than feel.',
        ],
      },
      {
        h2: 'Fields that are printed later',
        body: [
          'Batch number and expiry are applied at filling, not at print. Artwork has to leave a clear, correctly positioned area for them rather than printing placeholder text that then has to be overprinted.',
        ],
        table: {
          caption: 'What the panel has to carry',
          head: ['Element', 'Set at', 'Note'],
          rows: [
            ['Product and strength', 'Artwork', 'Usually the largest element by requirement'],
            ['Batch and expiry', 'Filling', 'Leave clear space, do not print placeholders'],
            ['Tamper evidence', 'Structure', 'Tear strip or frangible tuck, decided at dieline'],
            ['Braille', 'Finishing', 'Needs clear space, cannot overlap print'],
          ],
        },
      },
    ],
    link: {
      lead: 'For supplement and vitamin work, where the required panel is different again, ',
      href: '/product/kraft-supplement-boxes/',
      anchor: 'the supplement box page covers the facts panel',
      tail: '.',
    },
    faqs: [
      { question: 'Why does my carton jam on the packing line?', answer: '<p>Most often the leaflet. A folded patient leaflet adds several millimeters of depth, and a carton sized from the blister alone runs tight and jams at speed. Send us the leaflet with the product sample and we size the dieline around both.</p>' },
      { question: 'What board do you use for medicine cartons?', answer: '<p>Folding boxboard around 300 to 350 gsm, chosen for consistent creasing on an automatic cartoner rather than for feel. A board that creases unevenly causes jams regardless of how good it looks.</p>' },
      { question: 'Can you handle Braille?', answer: '<p>Yes, where a market requires it. Braille needs clear space around it and cannot overlap print, so it is positioned at dieline stage rather than added to finished artwork.</p>' },
      { question: 'What tamper-evident options are there?', answer: '<p>Tear strips, tuck locks with a frangible tab, and applied seals. Each gives a different level of evidence, and the term is used loosely, so tell us the standard you work to.</p>' },
      { question: 'How should batch and expiry be handled?', answer: '<p>Leave a clear, correctly sized area for them. They are printed at filling, so artwork carrying placeholder text creates an overprinting problem rather than solving one.</p>' },
      { question: 'Can you supply versioned proofs with sign-off records?', answer: '<p>Yes. Where a quality system requires it we issue dated proofs against a revision number and retain the approval record. Ask at quoting so the documentation is built alongside the job.</p>' },
      { question: 'Will lamination affect barcode scanning?', answer: '<p>It can, particularly gloss under some scanners. We check the scan on the finished laminated stock rather than on a proof, because a proof will not show the problem.</p>' },
      { question: 'Do you produce child-resistant packaging?', answer: '<p>Child-resistant structures with certified closures can be produced. Compliance is verified against the regulations in force when your order runs, so send the specific requirement rather than a general description.</p>' },
      { question: 'Can one carton size cover several strengths?', answer: '<p>Usually yes, with the strength differentiated by color and print rather than by dieline. That keeps one tooling cost and one production setup across the range.</p>' },
      { question: 'What if my leaflet changes size later?', answer: '<p>If it grows, the carton depth may need to change and that means a new dieline. It is worth quoting the carton against the largest leaflet version you expect rather than the current one.</p>' },
    ],
  },

  'kraft-supplement-boxes': {
    intro:
      'A supplement carton is designed around the Supplement Facts panel. It has a prescribed format with minimum type sizes and it usually takes most of one panel before any brand work begins.',
    sections: [
      {
        h2: 'Lay the facts panel out first',
        body: [
          'The panel format is prescribed and the minimum type sizes scale with the package surface area. Squeezing it below that to make room for the brand makes an entire run unsaleable, and it is discovered at the worst possible point.',
          'The reliable sequence is to lay the panel out at its correct size, then design the remaining area. Send us the ingredient list at quoting and we block it into the dieline before design time is committed.',
        ],
      },
      {
        h2: 'Sizing around a bottle with a domed cap',
        body: [
          'Most supplement cartons go around a bottle, and the cap is frequently wider or taller than the bottle spec suggests. A carton sized to the bottle bows visibly over a domed closure.',
          'Measure the container as it will actually be packed, cap fitted and label applied.',
        ],
      },
      {
        h2: 'Competing on a crowded shelf',
        body: [
          'This is one of the most contested shelves in retail, and the required panel takes a large share of the available area. What is left has to do the identification, which usually means one strong element rather than several competing ones.',
        ],
      },
    ],
    link: {
      lead: 'For vitamin ranges specifically, which face the same panel constraint, ',
      href: '/product/kraft-vitamin-packaging-boxes/',
      anchor: 'the vitamin packaging page',
      tail: ' covers multi-SKU ranges.',
    },
    faqs: [
      { question: 'How much space does the Supplement Facts panel need?', answer: '<p>More than most brands allow for. It has a prescribed layout with minimum type sizes that scale with package surface area, and it usually takes most of one panel. Send the ingredient list at quoting and we block it in at legal size first.</p>' },
      { question: 'What happens if the type is too small?', answer: '<p>The run is unsaleable, and it is usually discovered after production. That is why the panel is laid out before the design rather than fitted around it.</p>' },
      { question: 'What dimensions do you need for a bottle carton?', answer: '<p>The bottle as it will actually be packed — cap fitted, label applied, measured at the widest and tallest points. A domed cap is frequently the tallest part and it is what makes a carton bow.</p>' },
      { question: 'What board weight suits a supplement carton?', answer: '<p>Around 18pt SBS for a bottle carton. Lighter board bows visibly over a domed closure even when it is structurally adequate for the weight.</p>' },
      { question: 'Can one carton cover several SKUs?', answer: '<p>Usually, with flavor or strength differentiated by color rather than by structure. One dieline and one setup across the range keeps the unit cost down considerably.</p>' },
      { question: 'Do you print on kraft for supplements?', answer: '<p>Yes, and it suits natural positioning well. Bear in mind that kraft pulls every color down, so a white underbase is often needed to keep the facts panel legible.</p>' },
      { question: 'Are tamper-evident options available?', answer: '<p>Yes, including tear strips and frangible tuck locks. Which is appropriate depends on the standard you are working to rather than on preference.</p>' },
      { question: 'Can you supply cartons for pouches rather than bottles?', answer: '<p>Yes. A pouch is a different sizing problem because the filled thickness differs from the flat measurement, so send a filled sample rather than a flat one.</p>' },
      { question: 'How do I keep the pack legible with so much required copy?', answer: '<p>Give the remaining area one strong element rather than several competing ones. On a crowded shelf a single clear identifier beats a busy panel every time.</p>' },
      { question: 'Do you handle serialisation or QR codes?', answer: '<p>QR codes can be printed and we leave clear space and quiet zones for them. Tell us at artwork stage so the code is placed where it will scan reliably on a curved or creased panel.</p>' },
    ],
  },

  'kraft-vitamin-packaging-boxes': {
    intro:
      'Vitamin ranges are usually many SKUs sharing one shelf presence — a dozen products that have to look related while each carries its own required panel.',
    sections: [
      {
        h2: 'Specifying a range rather than a box',
        body: [
          'A vitamin brand rarely orders one carton. It orders eight or twelve, and the mistake is quoting them one at a time as each launches. Products specified separately drift, because each gets optimized for its own budget on the day.',
          'Fix the board, print method and finish once across the range, then vary only the dieline and the color. Products launched a year apart still match.',
        ],
      },
      {
        h2: 'Differentiating SKUs without redesigning',
        body: [
          'Color is the cheapest differentiator and the one customers read fastest on a shelf of similar packs. Structure is the most expensive, because each variant needs its own cutting die.',
          'Where the bottle sizes genuinely differ, two or three dielines usually cover a whole range rather than one per SKU.',
        ],
        table: {
          caption: 'How to differentiate across a range',
          head: ['Method', 'Cost', 'Shelf effect'],
          rows: [
            ['Panel color', 'Lowest', 'Read fastest at distance'],
            ['Icon or illustration', 'Low', 'Works close up, weak at distance'],
            ['Finish change', 'Medium', 'Separate pass per variant'],
            ['Different structure', 'Highest', 'New cutting die per variant'],
          ],
        },
      },
      {
        h2: 'The panel constraint applies per SKU',
        body: [
          'Each product carries its own Supplement Facts panel with its own ingredient list, and a longer list needs more panel area. A layout that works for a single-ingredient product can fail on a multivitamin in the same range.',
        ],
      },
    ],
    link: {
      lead: 'The panel rules are set out in more detail on ',
      href: '/product/kraft-supplement-boxes/',
      anchor: 'the supplement box page',
      tail: ', which covers laying the facts block out first.',
    },
    faqs: [
      { question: 'Should I order cartons for my whole range at once?', answer: '<p>Specify them as a family even if you order in stages. Fixing board, print method and finish once means SKUs launched a year apart still match; boxes quoted one at a time drift.</p>' },
      { question: 'How should I differentiate SKUs?', answer: '<p>Color is cheapest and read fastest at shelf distance. Structural differences are the most expensive because each variant needs its own cutting die.</p>' },
      { question: 'Do I need a separate dieline per product?', answer: '<p>Usually not. Two or three dielines commonly cover a whole range where bottle sizes genuinely differ, with color doing the rest of the work.</p>' },
      { question: 'Will a multivitamin need a bigger panel than a single ingredient?', answer: '<p>Yes. A longer ingredient list needs more panel area at legal type size, so a layout that works for a single-ingredient SKU can fail on the multivitamin beside it.</p>' },
      { question: 'What board suits a vitamin carton?', answer: '<p>Around 18pt SBS for bottles. Consistency across the range matters more than the exact grade, because a range on mixed boards is noticeable in the hand.</p>' },
      { question: 'Can you match colors across repeat runs?', answer: '<p>On offset and flexo we hold the ink formulation, which keeps a brand color tight run to run. Digital has a wider tolerance, so for a color-differentiated range we would usually quote the plate-based route.</p>' },
      { question: 'Are child-resistant options needed?', answer: '<p>That depends on the product and the market. Where required, the closure usually carries the function rather than the carton, and the carton is secondary.</p>' },
      { question: 'Can I add a QR code to each SKU?', answer: '<p>Yes, with clear quiet zones. On a range it is worth keeping the code in the same position on every SKU so the print setup and the scan behavior stay consistent.</p>' },
      { question: 'Do you supply cartons for gummy vitamins in jars?', answer: '<p>Yes. A jar is wider and shorter than a tablet bottle, so it usually needs its own dieline, but it can share the board and print system with the rest of the range.</p>' },
      { question: 'What is the most common mistake on a vitamin range?', answer: '<p>Ordering SKU by SKU. Each order is sensible in isolation and the range ends up looking like several brands on the same shelf.</p>' },
    ],
  },

  'kraft-syrup-packaging-boxes': {
    intro:
      'A syrup carton holds a glass or plastic bottle of liquid, usually with a dosing cup or spoon, and it has to survive a leak without the outside showing it.',
    sections: [
      {
        h2: 'Liquids and unlined board',
        body: [
          'Syrup is viscous and sugary, and on unlined board a small leak wicks into the fibers and shows as a stain on the outside within days. It also makes the carton tacky to handle.',
          'A coated inner face contains a minor leak. It is inexpensive against the alternative, which is a visibly marked run that a pharmacy will refuse.',
        ],
      },
      {
        h2: 'The dosing cup changes the dimensions',
        body: [
          'A measuring cup inverted over the cap adds both width and height, and a spoon laid alongside adds width. Neither appears on the bottle specification. Send the pack as it will actually be assembled.',
        ],
      },
      {
        h2: 'Bottle stability inside the carton',
        body: [
          'A tall bottle in a close-fitting carton is stable; the same bottle in a carton with clearance pivots and puts leverage on the cap, which is how caps loosen in transit. A fitted collar or a snug dieline solves it.',
        ],
      },
    ],
    link: {
      lead: 'For solid dose formats with a patient leaflet instead of a dosing cup, ',
      href: '/product/kraft-medicine-packaging-boxes/',
      anchor: 'medicine cartons cover the leaflet dimension',
      tail: '.',
    },
    faqs: [
      { question: 'Will a leak damage the carton?', answer: '<p>On unlined board, yes. Syrup wicks into the fibers and shows as a stain on the outside within days, and it makes the carton tacky. A coated inner face contains a minor leak inexpensively.</p>' },
      { question: 'What dimensions do you need?', answer: '<p>The pack as it will actually be assembled, including the dosing cup inverted over the cap or a spoon laid alongside. Neither appears on a bottle specification and both change the carton.</p>' },
      { question: 'Why do caps loosen in transit?', answer: '<p>Because a tall bottle with clearance around it pivots inside the carton and puts leverage on the cap. A fitted collar or a snug dieline stops the movement.</p>' },
      { question: 'Can you produce cartons for glass bottles?', answer: '<p>Yes, and glass needs the fit to be tighter rather than the board heavier. Movement is what breaks glass in a carton, not wall thickness.</p>' },
      { question: 'Is tamper evidence available?', answer: '<p>Yes, with tear strips or frangible tuck locks. Which is appropriate depends on the standard your product is sold under.</p>' },
      { question: 'Do these cartons carry a patient leaflet?', answer: '<p>Often, and if so it is a real dimension. A folded leaflet adds several millimeters of depth that the bottle spec does not account for.</p>' },
      { question: 'What board weight is used?', answer: '<p>Usually 18pt SBS with a coated inner face. The weight follows the filled bottle, which is heavier than an empty one by a margin worth allowing for.</p>' },
      { question: 'Can the carton stand upright on a shelf?', answer: '<p>Yes, and stability follows the footprint relative to the height. A tall narrow carton around a heavy bottle wants a slightly wider base than the bottle alone suggests.</p>' },
      { question: 'Are these suitable for cold storage?', answer: '<p>With a cold-tolerant adhesive, yes. Standard carton glue becomes brittle in sustained cold and seams can crack when handled straight from a chiller.</p>' },
      { question: 'Can you print dosage information clearly on kraft?', answer: '<p>Yes, though kraft pulls colors down, so dosage copy usually needs a white underbase to stay legible. That is a press pass worth budgeting for on a regulated panel.</p>' },
    ],
  },

  'kraft-first-aid-kit-boxes': {
    intro:
      'A first aid box is opened quickly, often by someone who did not pack it, and everything inside has to be identifiable at a glance. The compartments matter more than the outer.',
    sections: [
      {
        h2: 'Findability under pressure',
        body: [
          'The person opening a first aid kit is usually in a hurry and unfamiliar with the layout. Contents loose in one cavity means rummaging, which is the failure this format exists to prevent.',
          'A compartmented insert with each item in a fixed, labeled position turns a box of supplies into something usable. It is worth more than any external finish.',
        ],
      },
      {
        h2: 'Contents lists that stay accurate',
        body: [
          'Printed contents lists date quickly as the kit specification changes. Where the range is likely to change, keeping the list on a replaceable insert card rather than on the box means a specification update does not obsolete the entire stock of printed boxes.',
        ],
      },
      {
        h2: 'Where the kit lives',
        body: [
          'A workplace kit mounted on a wall, a vehicle kit in a boot, and a home kit in a cupboard have different requirements. Wall-mounted needs fixing points; vehicle needs a closure that survives being thrown about; home needs to stack.',
        ],
        list: {
          title: 'Tell us which applies',
          items: [
            'Wall-mounted — needs reinforced fixing points and a front-opening lid',
            'Vehicle — needs a positive closure that will not shake open',
            'Cupboard or drawer — needs to stack and to open from the top',
            'Portable or belt — needs a handle or loop and a compact footprint',
          ],
        },
      },
    ],
    link: {
      lead: 'For protective equipment packed in mixed-content kits, ',
      href: '/product/kraft-ppe-packaging-boxes/',
      anchor: 'PPE packaging covers similar compartment questions',
      tail: '.',
    },
    faqs: [
      { question: 'Why does the insert matter so much on a first aid box?', answer: '<p>Because the person opening it is usually in a hurry and did not pack it. Contents loose in one cavity means rummaging, which is exactly what the format exists to prevent.</p>' },
      { question: 'Should the contents list be printed on the box?', answer: '<p>Only if the specification is stable. Where the kit contents change, a replaceable insert card means a specification update does not obsolete your printed box stock.</p>' },
      { question: 'Can you make wall-mounted boxes?', answer: '<p>Yes, with reinforced fixing points and a front-opening lid. Tell us the mounting method, because that decides where the reinforcement goes.</p>' },
      { question: 'What closure suits a vehicle kit?', answer: '<p>A positive closure — a tuck lock or a catch — rather than a plain flap. A vehicle kit is thrown about and a friction closure works open over time.</p>' },
      { question: 'Do the compartments need labeling?', answer: '<p>It helps considerably. Printing the compartment names into the insert costs almost nothing and makes the kit usable by someone who has never opened it.</p>' },
      { question: 'Can these be produced in different sizes for different kit specs?', answer: '<p>Yes, and sizes can share one board and print system so a range of kits looks consistent. Only the dieline and the insert change.</p>' },
      { question: 'Is a moisture-resistant board worth it?', answer: '<p>For vehicle and outdoor kits, yes. Board that has absorbed moisture loses stiffness, and a kit that has sat in a damp boot for a year should still hold its shape.</p>' },
      { question: 'What board is used?', answer: '<p>Usually E flute corrugated for anything carried or mounted, folding carton for lighter cupboard kits. The choice follows how much handling the box will take.</p>' },
      { question: 'Can you include a carrying handle?', answer: '<p>Yes, die-cut or fitted. On a filled kit the board around a die-cut handle needs reinforcing, because that is where the load concentrates.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes across this range. For a wall-mounted or vehicle kit we would step up a caliper, since recycled fiber is slightly less stiff at the same weight.</p>' },
    ],
  },

  'kraft-ppe-packaging-boxes': {
    intro:
      'Protective equipment packaging has to keep contents clean and let the user take one item without disturbing the rest. Dispensing is usually the deciding feature.',
    sections: [
      {
        h2: 'Dispensing one at a time',
        body: [
          'Gloves, masks and wipes are taken singly, repeatedly, often with one hand. A box that has to be opened fully each time gets left open, and once it is open the contents are no longer protected.',
          'A tear-away dispensing aperture with the right opening size is what makes this work. Too small and items tear on the way out; too large and the contents spill when the box is knocked.',
        ],
      },
      {
        h2: 'Keeping contents clean until use',
        body: [
          'The point of the pack is that the last item is as clean as the first. That means a closure that stays shut between uses and a board that does not shed fiber into the contents.',
        ],
      },
      {
        h2: 'Wall mounting and counter use',
        body: [
          'Many PPE boxes are used from a wall bracket or a counter dispenser rather than held. If yours is, the box has to fit the bracket, and bracket dimensions are fixed. Send the bracket specification rather than the box size you currently buy.',
        ],
      },
    ],
    link: {
      lead: 'For mixed-content kits rather than single-item dispensing, ',
      href: '/product/kraft-first-aid-kit-boxes/',
      anchor: 'first aid kit boxes cover compartmented layouts',
      tail: '.',
    },
    faqs: [
      { question: 'What makes a good dispensing aperture?', answer: '<p>The opening size. Too small and items tear on the way out; too large and the contents spill when the box is knocked. It is worth testing on a sample with your actual product.</p>' },
      { question: 'Will the box fit our wall bracket?', answer: '<p>Send the bracket specification rather than the box you currently buy. Bracket dimensions are fixed, so the box is designed inward from them.</p>' },
      { question: 'Does the board shed fiber into the contents?', answer: '<p>A properly finished board should not. Where contents must stay clean to the last item, tell us and we specify accordingly rather than assuming a general-purpose stock.</p>' },
      { question: 'Can the box be opened one-handed?', answer: '<p>Yes, and it should be. A dispensing box that needs two hands gets left open, and once it is open the contents are no longer protected.</p>' },
      { question: 'Are moisture-resistant options available?', answer: '<p>Yes, and they matter for anything stored in a clinical or washdown area. Untreated board softens as it takes on moisture and the dispensing aperture deforms first.</p>' },
      { question: 'Can you produce boxes for different counts?', answer: '<p>Yes, sharing one board and print system across counts. Only the dieline changes, so a range of pack sizes stays visually consistent.</p>' },
      { question: 'What board is used?', answer: '<p>Usually folding carton board for counter boxes and E flute where the box is handled heavily or wall-mounted.</p>' },
      { question: 'Is printing on the dispensing panel a problem?', answer: '<p>Only if it crosses the tear line. We keep the perforation clear of critical copy so the panel still reads once the aperture is opened.</p>' },
      { question: 'Can these stack in a storeroom?', answer: '<p>Yes, with the grade chosen against the stack height. Send how high they are stored and we specify against that rather than the weight of one box.</p>' },
      { question: 'Do you supply plain unprinted PPE boxes?', answer: '<p>Yes. For internal use plain kraft is often the sensible choice, since print adds cost with no selling function on a box the end user never chooses.</p>' },
    ],
  },
}
