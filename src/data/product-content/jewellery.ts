import type { ProductContentMap } from './types'

/**
 * Jewellery and accessories.
 *
 * Five products, and the shared problem is retention rather than strength.
 * Nothing here is heavy; everything here moves. What separates the five is
 * exactly how each piece moves and what that movement damages — a chain
 * tangles, a stud is lost, a band gets marked, a strap creases.
 */
export const jewelleryContent: ProductContentMap = {
  'kraft-ring-packaging-boxes': {
    intro:
      'A ring box is opened in front of someone, usually once, and the moment does not get a second take. Almost everything that matters is the slot the ring sits in and whether the lid stays open on its own.',
    sections: [
      {
        h2: 'Slot width is the measurement that decides it',
        body: [
          'A sprung slot holds a ring by gripping the band. Cut it for a 2 mm wedding band and an 8 mm signet will not seat; cut it for the signet and the wedding band drops out the first time the box is tilted.',
          'This is the one dimension worth getting right before anything else. Tell us the narrowest and the widest band in your range and we will normally specify two slot widths behind one identical exterior, so a customer sees one box and both rings are held properly.',
        ],
      },
      {
        h2: 'Why the hinge matters more than the print',
        body: [
          'The box is held open one-handed while someone else looks into it. A lid that will not stay up, or that springs shut, is the failure people remember. A rigid hinged construction holds its angle; a folding carton lid does not.',
          'For the same reason the interior gets more attention than the outside. The lid is open for the whole of the moment that counts.',
        ],
      },
      {
        h2: 'Sizing and interior',
        body: [
          'These sit at around 2 × 2 × 1.75 in for a standard single-ring box. The depth is set by the height of the pillow rather than by the ring, which is why a box sized from the ring alone comes out too shallow to close over the cushion.',
        ],
        table: {
          caption: 'Interior options',
          head: ['Interior', 'Holds', 'Note'],
          rows: [
            ['Sprung slot pillow', 'One ring, upright', 'Slot width matched to band width'],
            ['Double slot pillow', 'A pair, upright', 'For engagement and wedding band sets'],
            ['Flat foam pad', 'One ring, laid flat', 'Lower cost, less presentation'],
            ['Recessed seat', 'A signet or a stone ring', 'Suits rings too wide for a slot'],
          ],
        },
      },
    ],
    link: {
      lead: 'If you are specifying a jewellery range rather than a single box, ',
      href: '/product-category/jewelry-accessories-boxes/',
      anchor: 'the jewellery packaging range covers the other piece types',
      tail: ' and how their interiors differ.',
    },
    faqs: [
      { question: 'Will one ring box fit every ring I sell?', answer: '<p>The outer box will; the pillow slot will not. A slot cut for a 2 mm band will not hold an 8 mm signet, and one cut for the signet lets the thin band fall out. Tell us your narrowest and widest band and we will specify two slot widths behind one identical exterior.</p>' },
      { question: 'What size are these boxes?', answer: '<p>Around 2 × 2 × 1.75 in for a standard single-ring box. The depth follows the pillow height rather than the ring, which is why boxes sized from the ring alone end up too shallow to close.</p>' },
      { question: 'Can you make a box for a ring and band set?', answer: '<p>Yes, with a double-slot pillow so both sit upright side by side. The two slots can be cut to different widths if the band and the engagement ring differ.</p>' },
      { question: 'Does the lid stay open on its own?', answer: '<p>On a rigid hinged construction, yes, and it is worth paying for. The box is held open one-handed while someone else looks into it, so a lid that springs shut is the thing people remember.</p>' },
      { question: 'Should I choose rigid or a folding carton?', answer: '<p>Rigid for anything opened in front of a customer. A folding carton works for volume gifting or for shipping stock between locations, but the hinge and the way the lid holds are part of the impression on a ring box.</p>' },
      { question: 'What interior colours are available?', answer: '<p>A deep matt interior makes a bright metal ring read clearly against it. Light interiors lose the piece, particularly in silver and white gold. The lining is specified separately from the outer wrap.</p>' },
      { question: 'Can I print a logo on a box this small?', answer: '<p>Yes, though the printable area is small enough that one mark and one line of type is usually all that reads. A blind deboss or a foil block often works better than print at this size.</p>' },
      { question: 'Will the slot mark the band?', answer: '<p>Not if it is cut to the right width. Marking happens when a slot is too tight for the band and the ring is forced in, which is the same measurement problem from the other direction.</p>' },
      { question: 'Are these suitable for posting to a customer?', answer: '<p>Inside a plain outer carton, yes. A presentation box posted on its own arrives with scuffed corners and a courier label across the artwork, which undoes the reason for buying it.</p>' },
      { question: 'Can you match a box I already use?', answer: '<p>Send the physical box rather than a photograph. The wrap stock, interior colour and hinge action are what make a ring box feel the way it does, and none of them photograph accurately.</p>' },
    ],
  },

  'kraft-earring-packaging-boxes': {
    intro:
      'Earrings are the smallest thing we package and the easiest to lose inside their own box. The pad has to grip the fitting, not just sit underneath it.',
    sections: [
      {
        h2: 'A flat pad holds nothing',
        body: [
          'The most common complaint in this category is a customer reporting one earring missing. Almost always it is in the box, underneath a pad that was never pierced. A stud resting on foam moves the first time the box is turned over, and it migrates to the edge and out of sight.',
          'A pierced pad the post pushes through, or a slotted card for hooks, fixes it outright. It costs very little and it is the difference between a small item and a full replacement.',
        ],
      },
      {
        h2: 'Keeping a pair together',
        body: [
          'Two piercings at a fixed spacing keep the pair aligned and looking deliberate when the box opens. Loose in one cavity they end up at opposite corners, which reads as careless before the customer has even looked at the earrings.',
        ],
      },
      {
        h2: 'Working within a very small panel',
        body: [
          'At around 2 × 2 × 1 in there is not much to print on. One mark and one short line is usually everything that reads at this size. Fine detail and pale tints disappear on kraft board, so a solid logo or a deboss holds up where a full-colour design does not.',
        ],
        list: {
          title: 'Fittings and the pad each needs',
          items: [
            'Studs and posts — pierced foam, two holes at the pair spacing',
            'Hooks and drops — a slotted card the wire hangs through',
            'Huggies and hoops — a slit pad that grips the hinge',
            'Clip-ons — a recessed seat, since there is no post to pierce with',
          ],
        },
      },
    ],
    link: {
      lead: 'Where the same range also includes chains, ',
      href: '/product/kraft-necklace-box/',
      anchor: 'necklace boxes solve a different retention problem',
      tail: ' and need a longer slotted pad.',
    },
    faqs: [
      { question: 'How do I stop earrings coming loose in the box?', answer: '<p>The pad has to be pierced or slotted so the post or hook is gripped rather than resting on the surface. A flat unpierced pad holds nothing once the box is turned over, and that is the single most common cause of a "missing" earring.</p>' },
      { question: 'What size are earring boxes?', answer: '<p>Commonly around 2 × 2 × 1 in. The size follows the pad rather than the earrings, since the pad is what has to sit flat and hold its shape.</p>' },
      { question: 'Can the same box hold studs and hook earrings?', answer: '<p>The outer can, the pad cannot. Studs need pierced holes at a fixed spacing; hooks need a slot to hang through. We keep one outer size and specify two pad types.</p>' },
      { question: 'How much can I print on a box this small?', answer: '<p>Less than most designs assume. One mark and one line of type is usually all that reads. A deboss or a small foil block tends to work better than printed detail at this scale.</p>' },
      { question: 'Do you supply the pad separately?', answer: '<p>Yes. If you already have an outer box you are happy with, we can produce the pierced pad alone, cut to the internal dimensions rather than the external ones.</p>' },
      { question: 'What interior colour works best?', answer: '<p>A dark matt interior for silver and light metals, a lighter one for oxidised or dark finishes. The point is contrast — an earring the same tone as its pad disappears when the box opens.</p>' },
      { question: 'Are window boxes an option?', answer: '<p>They are, though on a panel this small a window removes a lot of the stiffness. The board usually steps up a grade to compensate, and the pad has to be positioned so the pair is centred in the aperture.</p>' },
      { question: 'Can these be hung on a retail peg?', answer: '<p>Yes, with a reinforced hang tab. The failure point is the board around the hole rather than the panel, so that area is strengthened rather than the whole box.</p>' },
      { question: 'Is a rigid box worth it for earrings?', answer: '<p>At a gifting price point, often yes. For volume retail a folding carton with a good pad does the retention job just as well, and the pad is what matters most here.</p>' },
      { question: 'Can I order several pad configurations in one run?', answer: '<p>Yes, and it is usually cheaper than separate runs because the outer print setup is shared. Only the die for the pad changes between configurations.</p>' },
    ],
  },

  'kraft-bracelet-packaging-boxes': {
    intro:
      'A bracelet is either laid out straight or held as a rigid circle, and those are two entirely different interiors. Which one you need is decided by the clasp, not by the price of the piece.',
    sections: [
      {
        h2: 'Chain bracelets and bangles need different boxes',
        body: [
          'A flexible chain bracelet wants to be laid out along its length, which needs a long shallow box around 8.5 × 2 in. A solid bangle holds its own shape and wants a compact square nearer 3.5 in, because laying it in a long box leaves it rattling in a space three times its size.',
          'Ordering one box for a range containing both is the mistake we see most. The usual answer is one outer footprint with two insert types, so the range still looks consistent on a counter.',
        ],
      },
      {
        h2: 'Holding a flexible bracelet at two points',
        body: [
          'Held at one point a chain bracelet swings, and in transit it works itself into a coil with the clasp caught in the links. Two fixing points keep it laid out exactly as it was packed. A slotted pad does this; a flat pad does not.',
        ],
      },
      {
        h2: 'Clasp clearance',
        body: [
          'The clasp is usually the thickest part of a bracelet and it is what stops a lid closing flat. Measure across the clasp rather than across the chain, and allow for it sitting proud of the pad.',
        ],
      },
    ],
    link: {
      lead: 'Watch straps have the opposite problem and need a bolster rather than a flat pad, covered on ',
      href: '/product/kraft-watch-packaging-boxes/',
      anchor: 'the watch box page',
      tail: '.',
    },
    faqs: [
      { question: 'Can one box suit both bracelets and bangles?', answer: '<p>The outer box can; the insert cannot. A bangle needs a compact square and a chain bracelet needs a long slotted pad. We normally keep one outer size and specify two inserts, which holds the range together visually without compromising the fit.</p>' },
      { question: 'What size is a bracelet box?', answer: '<p>Around 8.5 × 2 in for a chain bracelet laid flat, or nearer 3.5 in square for a bangle. The clasp type is what tells you which you need.</p>' },
      { question: 'Why does the bracelet arrive coiled in one corner?', answer: '<p>Because it is held at one point, or not at all, and swings in transit. Two fixing points on a slotted pad keep it laid out as it was packed.</p>' },
      { question: 'Do I measure across the chain or the clasp?', answer: '<p>The clasp. It is usually the thickest part and it is what stops the lid closing flat, so the depth has to allow for it sitting proud of the pad.</p>' },
      { question: 'Are these boxes suitable for watches too?', answer: '<p>Not well. A watch strap needs a bolster to wrap around so it curves rather than folding, which is a different insert entirely from a bracelet pad.</p>' },
      { question: 'Can I get a window in a bracelet box?', answer: '<p>Yes, though on a long narrow lid a window removes a lot of stiffness across the span. The board normally steps up a grade so the lid does not flex when lifted.</p>' },
      { question: 'What interior finish suits a bracelet?', answer: '<p>A matt lining in a tone that contrasts with the metal. On a long pad the whole piece is visible at once, so an interior that competes with it is more noticeable here than on a smaller box.</p>' },
      { question: 'Can these be stacked in a display case?', answer: '<p>Yes, and a rigid construction stacks better because it does not flex under the box above. Send the stack height if they are stored filled.</p>' },
      { question: 'Do you produce boxes for cuff bracelets?', answer: '<p>Yes. A cuff holds its shape like a bangle but is wider through the opening, so the insert is a recessed seat rather than a slot.</p>' },
      { question: 'Can the insert be changed without a new outer box?', answer: '<p>Yes, and that is the usual way to cover a mixed range. One printed outer and two or three die-cut inserts costs considerably less than separate box runs.</p>' },
    ],
  },

  'kraft-watch-packaging-boxes': {
    intro:
      'Watch boxes are specified from the wrong measurement more often than any other jewellery format. The trade compares watches by face diameter; the box is decided by case thickness.',
    sections: [
      {
        h2: 'Depth is the live number',
        body: [
          'A dress watch and a dive watch can share a face diameter and differ by half an inch or more through the case. Add the crown and any pushers and the difference grows. A box sized from the face alone presses the lid onto the crystal, which marks it.',
          'What we need is the case thickness at its thickest point, including the crown, plus the lug-to-lug length. Face diameter is the figure most buyers send and the one that matters least.',
        ],
      },
      {
        h2: 'The strap is what shows damage first',
        body: [
          'Folded flat against a board pad, a strap takes a hard crease across its middle, and both leather and silicone hold that crease permanently. The customer sees a watch that looks second-hand out of a new box.',
          'A bolster the strap wraps around removes the fold entirely. It is a single component and it is the difference between a watch that looks new and one that does not.',
        ],
      },
      {
        h2: 'Boxes that get kept',
        body: [
          'Watch boxes are reused as storage more often than any other jewellery pack, which means the hinge and the closure are judged over years rather than in one moment. A firm cushion that holds its shape under a heavy watch matters more than a soft one that compresses.',
        ],
        table: {
          caption: 'What to send us',
          head: ['Measurement', 'Where from', 'Why'],
          rows: [
            ['Case thickness', 'Thickest point, including crown', 'Decides lid clearance over the crystal'],
            ['Lug-to-lug length', 'Tip to tip across the case', 'Decides the footprint, not the face'],
            ['Strap width', 'At the lugs', 'Sets the bolster width'],
            ['Strap material', 'Leather, silicone, metal', 'Metal bracelets need more depth again'],
          ],
        },
      },
    ],
    link: {
      lead: 'For a mixed jewellery range sharing one visual system, ',
      href: '/product-category/jewelry-accessories-boxes/',
      anchor: 'the jewellery packaging range',
      tail: ' sets out how the interiors differ by piece.',
    },
    faqs: [
      { question: 'What measurement do you actually need for a watch box?', answer: '<p>Case thickness at its thickest point, including the crown and pushers, plus the lug-to-lug length. Face diameter is the figure most buyers send and it is the one that matters least — depth is what determines whether the lid clears the crystal.</p>' },
      { question: 'How do I stop the strap creasing in the box?', answer: '<p>Wrap it rather than fold it. A cushion or bolster the strap curves around removes the sharp fold entirely. Packing a strap flat against a board pad is what sets a permanent crease into leather and silicone.</p>' },
      { question: 'What size are watch boxes?', answer: '<p>Around 4.5 in square on the footprint for most watches, with the depth varying considerably — that is the dimension that changes between a dress watch and a diver.</p>' },
      { question: 'Do metal bracelets need a different box?', answer: '<p>They need more depth. A metal bracelet does not compress around a bolster the way leather does, so the cushion sits higher and the lid has to clear it.</p>' },
      { question: 'Should the cushion be soft or firm?', answer: '<p>Firm. A soft cushion compresses under a heavy watch and lets the case sit lower than intended, which brings the crystal closer to the lid.</p>' },
      { question: 'Will the box survive being kept and reused?', answer: '<p>A rigid construction will. These are kept as storage more often than any other jewellery box, so the hinge is judged over years rather than in one moment.</p>' },
      { question: 'Can you make a box for two watches?', answer: '<p>Yes, with two bolsters side by side. The footprint roughly doubles but the depth stays the same, since depth follows the thicker of the two cases.</p>' },
      { question: 'What finishes suit a watch box?', answer: '<p>Soft-touch lamination with a foil or blind-debossed mark. The pack is handled slowly at the point of gifting, so texture registers more than print gloss does.</p>' },
      { question: 'Is a pillow insert the same as a bolster?', answer: '<p>Broadly, yes — both give the strap something to curve around. The distinction that matters is whether it holds its shape under the weight of your actual watch.</p>' },
      { question: 'Can I include a warranty card or manual?', answer: '<p>Yes, usually in a slot under the cushion or inside the lid. Tell us the document size at quoting, because a folded card adds depth the watch dimensions do not account for.</p>' },
    ],
  },

  'kraft-jewelry-insert-boxes': {
    intro:
      'This is the fitment rather than the box — the die-cut cavity that holds a piece in position inside packaging you already buy, or inside an outer we make alongside it.',
    sections: [
      {
        h2: 'Internal dimensions, not external',
        body: [
          'An insert has to fit the space inside a box, and box dimensions are quoted externally almost everywhere in the trade. Board thickness means the internal space is smaller, and an insert cut to the external figure will not go in.',
          'Send the internal measurements, or better, send a physical box. This one detail accounts for most of the inserts that arrive not fitting.',
        ],
      },
      {
        h2: 'Choosing the material',
        body: [
          'Board is the cheapest and suits regular shapes and light pieces. Foam grips better and absorbs shock, which matters for anything with a stone or a fine chain. Moulded pulp sits between them and is the more recyclable of the cushioning options.',
          'For jewellery specifically, the deciding question is whether the insert has to grip the piece or merely seat it. Gripping needs foam or a slit; seating needs only a recess.',
        ],
        table: {
          caption: 'Insert material by requirement',
          head: ['Material', 'Best for', 'Trade-off'],
          rows: [
            ['Die-cut board', 'Regular shapes, light pieces', 'Cheapest, least grip'],
            ['Slit foam', 'Posts, hooks, thin chains', 'Grips the fitting directly'],
            ['Foam with recess', 'Stones, pendants, watches', 'Absorbs shock, higher cost'],
            ['Moulded pulp', 'Sets and mixed contents', 'Recyclable, less fine detail'],
          ],
        },
      },
      {
        h2: 'Mixed sets and level tops',
        body: [
          'On a set with pieces of different heights, the shallow recesses need packing up so every item sits at the same level. Uneven heights are what make an assortment look thrown together when the lid comes off, even when nothing has moved.',
        ],
      },
    ],
    link: {
      lead: 'If you need the outer box made at the same time, ',
      href: '/product/kraft-jewelry-boxes/',
      anchor: 'jewellery boxes can be specified with the fitment together',
      tail: ', which usually costs less than ordering them separately.',
    },
    faqs: [
      { question: 'Do you need the inside or the outside dimensions of my box?', answer: '<p>Inside. Most box specifications are quoted externally, and board thickness means the internal space is smaller. Send internal measurements or, better, a physical box.</p>' },
      { question: 'Can you supply inserts without the outer box?', answer: '<p>Yes. If you already buy a box you are happy with, we cut the fitment to its internal dimensions and you keep your existing supplier for the outer.</p>' },
      { question: 'Which insert material should I choose?', answer: '<p>Board is cheapest and suits light, regular shapes. Foam grips fittings and absorbs shock, which matters for stones and fine chains. Moulded pulp sits between them and is the more recyclable cushioning option.</p>' },
      { question: 'How do I stop a set looking untidy when it opens?', answer: '<p>Pack the shallow recesses up so every piece sits at the same level. Mixed heights are what make an assortment look thrown together, even when nothing has shifted.</p>' },
      { question: 'Can one insert hold several different pieces?', answer: '<p>Yes, with a compartment cut to each. The constraint is that every cavity has to be reachable — a recess too tight to get a finger into makes the piece hard to remove.</p>' },
      { question: 'Are inserts available in colours?', answer: '<p>Foam and board can both be supplied in a range of tones, or covered with a lining paper. Contrast with the metal is what matters more than the specific colour.</p>' },
      { question: 'Will the insert stay in place inside the box?', answer: '<p>A friction fit holds it in most cases. For anything shipped loose we can specify a glued fitment so the insert cannot lift out with the piece.</p>' },
      { question: 'Can inserts be made for existing stock boxes?', answer: '<p>Yes, and it is a common way to upgrade packaging without changing supplier. Send one of the boxes and we cut to it.</p>' },
      { question: 'Do you make inserts for retail display trays?', answer: '<p>Yes, including multi-position trays for counter cases. Those are usually specified against the tray footprint the retailer requires.</p>' },
      { question: 'What is the lead time on inserts alone?', answer: '<p>The same standard production window as any other item, since the cutting die is the part that sets the schedule. A repeat order using an existing die runs faster.</p>' },
    ],
  },
}
