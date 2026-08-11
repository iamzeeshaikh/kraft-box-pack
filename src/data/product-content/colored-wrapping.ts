import type { ProductContentMap } from './types'

/**
 * Coloured and dyed stocks, and the paper products.
 *
 * The coloured group all share one behaviour: kraft board is unbleached, so
 * every ink laid on it sits over brown. That single fact decides which colours
 * hold, which go muddy, and where a white underprint stops being optional.
 *
 * The wrapping group is about the material itself — weight, width and how it
 * behaves when folded or printed — rather than about structure.
 */
export const coloredWrappingContent: ProductContentMap = {
  /* ---------------------------- coloured ---------------------------- */

  'black-kraft-boxes': {
    intro:
      'Black kraft is the hardest substrate in the catalogue to print on. Nothing reads on it without either an opaque white underbase or a finish that sits on top of the surface.',
    sections: [
      {
        h2: 'Ink alone will not show',
        body: [
          'Process inks are transparent. On white board they read because the board reflects light back through them; on black board there is nothing to reflect, so a colour printed directly is barely visible.',
          'There are two honest routes. An opaque white underbase goes down first and the colours print over it, which costs an extra press pass. Or a foil block, which sits on the surface rather than soaking into it and reads without any underprint at all.',
        ],
      },
      {
        h2: 'Dyed through, or coated on the surface',
        body: [
          'On a dyed-through stock a cut edge and a crease show the same black as the face. On a surface-coloured board the brown core shows at every cut and fold, which is visible on all twelve edges of a finished box.',
          'For a premium black pack this difference matters more than almost anything else, and it is worth confirming which stock a quote is based on.',
        ],
      },
      {
        h2: 'Marks show more than on any other stock',
        body: [
          'Black shows fingerprints, scuffs and handling marks far more readily than kraft or white board. A matt lamination or a soft-touch finish reduces it considerably; gloss makes it worse.',
        ],
      },
    ],
    link: {
      lead: 'For the unbleached natural stock rather than a dyed one, ',
      href: '/product/brown-kraft-boxes/',
      anchor: 'brown kraft boxes are the standard substrate',
      tail: '.',
    },
    faqs: [
      { question: 'Why does my printing barely show on black board?', answer: '<p>Process inks are transparent and rely on the board reflecting light back through them. On black there is nothing to reflect, so colours printed directly are barely visible. An opaque white underbase or a foil block is needed.</p>' },
      { question: 'What is the difference between dyed-through and surface-coloured?', answer: '<p>On dyed-through stock the cut edges and creases show the same black as the face. On surface-coloured board the brown core shows at every cut and fold, which is visible on all twelve edges of a box.</p>' },
      { question: 'Which is better, white underprint or foil?', answer: '<p>Underprint if you need full-colour artwork; foil if the design is a mark or a logo. Foil reads without any underbase and often costs less than an extra colour pass.</p>' },
      { question: 'Does black board show fingerprints?', answer: '<p>More than any other stock. Matt lamination or soft-touch reduces it considerably; gloss makes it noticeably worse.</p>' },
      { question: 'Is black kraft more expensive?', answer: '<p>Usually the most expensive of the coloured stocks, and the underprint pass adds to that. Whether it beats printing black onto plain kraft depends on the coverage your design needs.</p>' },
      { question: 'Can I get a true matt black?', answer: '<p>Yes, with a matt lamination or an uncoated dyed stock. An uncoated black has a depth that a laminated one does not, at the cost of showing marks more.</p>' },
      { question: 'Is dyed board still recyclable?', answer: '<p>The board is, in the same stream as plain kraft. What changes recyclability is a plastic lamination on top, not the dye in the fibre.</p>' },
      { question: 'What about spot UV on black?', answer: '<p>It works well and is one of the most effective treatments on this stock, because the contrast between matt black and a gloss varnish reads clearly without any colour.</p>' },
      { question: 'Can you match a specific black?', answer: '<p>Between dyed stocks there is batch variation. Where an exact black matters across runs, tell us and we hold stock from one batch where we can.</p>' },
      { question: 'Should I approve a printed sample?', answer: '<p>On black, always. The gap between a screen proof and printed black board is wider than on any other substrate in the catalogue.</p>' },
    ],
  },

  'brown-kraft-boxes': {
    intro:
      'Brown kraft is the default substrate for most of this catalogue. It is unbleached, which is what gives it the colour and what changes how print behaves on it.',
    sections: [
      {
        h2: 'The board subtracts from every colour',
        body: [
          'Every ink printed on kraft sits over brown, so pale tints wash out, fine detail disappears, and colours read darker and duller than a proof on white stock suggests. This is the material behaving normally rather than a print fault.',
          'Designs built for the substrate — one or two high-contrast colours, solid marks, generous space — hold up. Full-colour photography does not.',
        ],
      },
      {
        h2: 'When to add a white underbase',
        body: [
          'A white underbase restores accurate colour at the cost of an extra press pass. It is worth it where colour fidelity is genuinely part of the brand and not worth it where the kraft look is the point — which is most of the time in this category.',
        ],
      },
      {
        h2: 'Strength and recycled content',
        body: [
          'Kraft board is strong for its weight because the pulping process keeps the fibres long. Recycled kraft has shorter fibres and is marginally less stiff at the same caliper, which is easily addressed by stepping up a grade where it matters.',
        ],
      },
    ],
    link: {
      lead: 'Where the design calls for dark board rather than natural, ',
      href: '/product/black-kraft-boxes/',
      anchor: 'black kraft boxes need an underprint or foil',
      tail: '.',
    },
    faqs: [
      { question: 'Why do my colours look muddy on kraft?', answer: '<p>The brown substrate shows through the ink and pulls every colour down. It is the material behaving normally rather than a print fault, and designs built for it hold up far better than ones corrected for it.</p>' },
      { question: 'When should I use a white underbase?', answer: '<p>Where colour fidelity is genuinely part of the brand. Where the kraft look is the point — which is most of this category — the underbase works against the reason for choosing kraft.</p>' },
      { question: 'Is kraft board strong?', answer: '<p>Strong for its weight, because the pulping process keeps the fibres long. Recycled kraft has shorter fibres and is marginally less stiff at the same caliper.</p>' },
      { question: 'What designs work best on kraft?', answer: '<p>One or two high-contrast colours, solid marks and generous space. Pale tints and fine detail disappear, and full-colour photography rarely survives the substrate.</p>' },
      { question: 'Is the colour consistent between batches?', answer: '<p>There is natural variation in unbleached board, more than with bleached white stock. Where consistency matters across runs we hold stock from one batch where possible.</p>' },
      { question: 'Can kraft be food-safe?', answer: '<p>With a compliant grade, yes. Tell us whether contact is direct or through a liner, since that changes which stocks are available.</p>' },
      { question: 'Does kraft need a coating?', answer: '<p>Only for a functional reason — grease, moisture or a leak risk. For appearance, uncoated kraft is usually the point of choosing it.</p>' },
      { question: 'What weights are available?', answer: '<p>From light folding carton board up to heavy corrugated. The weight follows the product and the journey rather than the colour choice.</p>' },
      { question: 'Is kraft recyclable?', answer: '<p>Plain uncoated kraft is, in the standard paper stream. A plastic lamination or a filmed window is what takes it out.</p>' },
      { question: 'Should I approve a printed sample?', answer: '<p>For anything colour-critical, yes. The gap between a digital proof and printed kraft is wide enough that a screen approval is not reliable.</p>' },
    ],
  },

  'colored-kraft-paper': {
    intro:
      'Coloured kraft paper is sold by the sheet or the roll and cut to your width. It is a material rather than a format, so the questions are about weight and dye rather than structure.',
    sections: [
      {
        h2: 'Weight decides what it can do',
        body: [
          'Lighter papers crease cleanly and suit wrapping and interleaving. Heavier weights hold a fold under load and suit bags, sleeves and anything carrying weight. Choosing by appearance rather than by weight is what produces wrapping that tears at a corner or a bag that will not hold its shape.',
        ],
        table: {
          caption: 'Weight by application',
          head: ['Application', 'Weight band', 'Behaviour'],
          rows: [
            ['Gift wrapping', 'Light', 'Creases cleanly, tears easily'],
            ['Void fill and interleaving', 'Light to medium', 'Crumples without springing back'],
            ['Bags and sleeves', 'Medium to heavy', 'Holds a fold under load'],
            ['Printed sheet work', 'Medium', 'Takes ink without cockling'],
          ],
        },
      },
      {
        h2: 'Dyed through or surface-coloured',
        body: [
          'A dyed-through paper shows the same colour at a torn or cut edge; a surface-coloured one shows brown. On wrapping that is highly visible at every fold and cut end, so it is worth confirming which a quote covers.',
        ],
      },
      {
        h2: 'Cut to your width',
        body: [
          'Rolls and sheets are cut to the width you actually use. Ordering to your dispenser or bench width rather than to a stock size removes trimming waste on every single use, which adds up faster than the paper cost difference.',
        ],
      },
    ],
    link: {
      lead: 'For a counter dispenser sized to the roll, ',
      href: '/product/kraft-paper-dispenser-boxes/',
      anchor: 'dispenser boxes are cut to the roll',
      tail: '.',
    },
    faqs: [
      { question: 'What weight paper should I order?', answer: '<p>It follows the job. Light kraft creases cleanly for wrapping; heavier weights hold a fold and carry load for bags and sleeves. Tell us the use and we specify the band.</p>' },
      { question: 'Is the colour through the paper or on the surface?', answer: '<p>Both exist. Dyed-through shows the same colour at a torn or cut edge; surface-coloured shows brown, which is highly visible on wrapping at every fold and cut end.</p>' },
      { question: 'Can I get custom widths?', answer: '<p>Yes, in sheets and on rolls. Ordering to your dispenser or bench width removes trimming waste on every use, which adds up faster than the paper cost difference.</p>' },
      { question: 'Why do printed colours look flat?', answer: '<p>Uncoated stock absorbs ink, so colours dry back darker and duller than on coated board. Designing for the substrate holds up better than correcting for it.</p>' },
      { question: 'Can it be printed with a repeating pattern?', answer: '<p>Yes, with the repeat set against the sheet or roll width so the pattern runs continuously rather than breaking at each edge.</p>' },
      { question: 'Is coloured kraft paper food-safe?', answer: '<p>With a compliant grade and, for greasy items, a grease-resistant treatment. Plain kraft strikes through with oily food regardless of colour.</p>' },
      { question: 'Is it recyclable?', answer: '<p>Plain uncoated paper is, in the standard stream. The dye does not change that; a coating or lamination would.</p>' },
      { question: 'Can I order a small quantity to test?', answer: '<p>Yes, and on paper it is worth doing. How a weight creases and takes ink is difficult to judge from a specification alone.</p>' },
      { question: 'How many colours are available?', answer: '<p>A range of dyed stocks, though the heaviest calipers are limited in some colours. If you need both a specific colour and a heavy weight, tell us early so we can confirm availability.</p>' },
      { question: 'Do you supply plain unprinted paper?', answer: '<p>Yes, in sheets and rolls. For interleaving and void fill plain stock is usually the sensible choice.</p>' },
    ],
  },

  'kraft-boxes-with-lid': {
    intro:
      'A two-piece box is a base and a separate lid that lifts off rather than hinging. It is the simplest premium construction and the easiest to get wrong by a millimetre.',
    sections: [
      {
        h2: 'Lid fit is the entire impression',
        body: [
          'A lid that drops on too freely falls off; one that is too tight has to be pulled and the base lifts with it. The tolerance between those two is small, and it is the single thing people judge a two-piece box on.',
          'It also cannot be assessed from a drawing, which makes this a format where a physical sample before the run genuinely earns its cost.',
        ],
      },
      {
        h2: 'Depth of the lid against the base',
        body: [
          'A shallow lid shows more of the base and its printing; a deep lid covers most of the box and reads as more substantial. It is an appearance decision rather than a structural one, and it is worth settling before the dieline.',
        ],
      },
      {
        h2: 'Rigid or folding',
        body: [
          'Both are available. Rigid holds the fit better over repeated opening and feels heavier; folding ships flat and costs considerably less. The choice follows whether the box is kept.',
        ],
      },
    ],
    link: {
      lead: 'For the rigid construction in more detail, ',
      href: '/product/kraft-rigid-boxes/',
      anchor: 'rigid boxes cover wrapped builds',
      tail: '.',
    },
    faqs: [
      { question: 'Why does my lid fall off or stick?', answer: '<p>The tolerance between too loose and too tight is small on a two-piece box, and it is the one thing people judge the format on. It cannot be assessed from a drawing, so a physical sample before the run is worth it.</p>' },
      { question: 'How deep should the lid be?', answer: '<p>An appearance decision rather than a structural one. A shallow lid shows more of the printed base; a deep lid covers most of the box and reads as more substantial.</p>' },
      { question: 'Should it be rigid or folding?', answer: '<p>Rigid holds its fit better over repeated opening and feels heavier; folding ships flat and costs considerably less. The choice follows whether the box gets kept.</p>' },
      { question: 'Do two-piece boxes ship flat?', answer: '<p>Folding versions do. Rigid two-piece boxes ship assembled and nested where possible, which still takes more freight volume than flat stock.</p>' },
      { question: 'Can the lid and base be different colours?', answer: '<p>Yes, and it is a common way to add contrast without a second finish. They are separate components so they can run on different stocks.</p>' },
      { question: 'Is a window possible in the lid?', answer: '<p>Yes, and it costs stiffness on the panel that already has to hold its shape when lifted. The board usually steps up a grade.</p>' },
      { question: 'How do I stop the contents moving?', answer: '<p>A fitted insert. Without one, contents shift when the lid is lifted and the presentation is lost at exactly the wrong moment.</p>' },
      { question: 'What board weights are used?', answer: '<p>It follows the lid span more than the contents weight — a wide lid on light board flexes when lifted regardless of what is inside.</p>' },
      { question: 'Can these be stacked?', answer: '<p>Yes, though a lid that overhangs the base slightly stacks less stably. Tell us if they are stored stacked and we allow for it.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes for both components. We would step up a caliper on the lid, since that is the panel where stiffness is felt.</p>' },
    ],
  },

  'kraft-minimalist-boxes': {
    intro:
      'Minimalist packaging strips the pack back to what the job requires. Done properly it saves material and money; done as a style exercise it saves neither.',
    sections: [
      {
        h2: 'Right-sizing saves more than lightweighting',
        body: [
          'Most of the real saving in a minimal pack comes from cutting the box to the product rather than from thinning the board. A right-sized box ships more units per pallet and cuts dimensional weight on every parcel, and it does not increase damage.',
          'Thinning the board does increase damage, and replacing damaged orders costs more money and more carbon than the material ever saved.',
        ],
      },
      {
        h2: 'Restraint reads as intent',
        body: [
          'One or two colours on uncoated stock, generous space and a single strong mark reads as deliberate. Full-bleed print on a pack marketed as minimal reads as a contradiction, and customers notice.',
        ],
      },
      {
        h2: 'Where to stop cutting',
        body: [
          'There is a point past which less material means more damage, and it is product-specific. Establishing it with a sample run at the lighter specification is far cheaper than finding it across a full order.',
        ],
      },
    ],
    link: {
      lead: 'For the recycled stocks that usually accompany this positioning, ',
      href: '/product/kraft-recycled-kraft-boxes/',
      anchor: 'recycled kraft boxes cover the material side',
      tail: '.',
    },
    faqs: [
      { question: 'What actually saves the most material?', answer: '<p>Right-sizing rather than thinning the board. A box cut to the product ships more per pallet and cuts dimensional weight on every parcel without increasing damage; thinner board increases damage quite quickly.</p>' },
      { question: 'How far can I reduce the board?', answer: '<p>There is a product-specific point past which less material means more damage. Establishing it with a sample run at the lighter specification is far cheaper than finding it across a full order.</p>' },
      { question: 'Does minimal have to mean plain?', answer: '<p>No, but restraint reads as intent. One or two colours on uncoated stock with a single strong mark reads as deliberate; full-bleed print on a pack marketed as minimal reads as a contradiction.</p>' },
      { question: 'Is a minimal pack cheaper?', answer: '<p>Usually, from both less material and fewer press passes. The saving is often larger in freight than in the board itself.</p>' },
      { question: 'What finishes suit this?', answer: '<p>Uncoated, or an aqueous varnish where some protection is needed. A plastic laminate works against both the look and any recycling claim.</p>' },
      { question: 'Can I still have a window?', answer: '<p>Yes, and a plain die-cut aperture with no film keeps the pack fully recyclable, which suits the positioning better than a filmed window.</p>' },
      { question: 'Does minimal packaging protect adequately?', answer: '<p>Provided the reduction is in size rather than in strength. That is the distinction that separates a considered minimal pack from an under-specified one.</p>' },
      { question: 'What board is used?', answer: '<p>Typically uncoated recycled kraft, at the lightest caliper that holds your measured damage rate rather than at an assumed one.</p>' },
      { question: 'Can this work for e-commerce?', answer: '<p>Particularly well, because dimensional weight rewards right-sizing directly. It is one of the few places where the environmental and the commercial argument point the same way.</p>' },
      { question: 'How do I prove the saving?', answer: '<p>Compare pallet counts and dimensional weight before and after, not board weight. Board weight understates the saving because it ignores freight.</p>' },
    ],
  },

  'kraft-thermal-kraft-boxes': {
    intro:
      'A thermal box slows heat transfer for a defined period. What it is specified against is hold time, not the temperature the contents start at.',
    sections: [
      {
        h2: 'Hold time is the specification',
        body: [
          'Two hours and twenty-four hours are entirely different packs even for the same product at the same starting temperature. Liner thickness, coolant quantity and void volume all follow the hold time required.',
          'Specify for the delayed journey rather than the planned one — packs are quoted against a schedule and fail when the schedule slips.',
        ],
      },
      {
        h2: 'Void space is working against you',
        body: [
          'Air inside the pack is what the insulation and coolant have to hold. A box larger than its contents shortens hold time, which is the opposite of the instinct to leave extra room.',
        ],
      },
      {
        h2: 'The outer still needs grading',
        body: [
          'Insulation is not structure. The carton around the liner still has to carry the filled weight, and a pack with coolant is considerably heavier than the product alone.',
        ],
      },
    ],
    link: {
      lead: 'For chilled and frozen food shipments specifically, ',
      href: '/product/kraft-insulated-cold-boxes/',
      anchor: 'insulated cold boxes cover cold-chain requirements',
      tail: '.',
    },
    faqs: [
      { question: 'How do I specify a thermal box?', answer: '<p>By hold time rather than temperature. Two hours and twenty-four hours are entirely different packs even for the same product, and liner, coolant and void volume all follow from it.</p>' },
      { question: 'Should I leave extra room inside?', answer: '<p>No. Air is what the insulation and coolant have to hold, so a box larger than its contents shortens hold time.</p>' },
      { question: 'Does insulation add strength?', answer: '<p>No. The outer carton still has to carry the filled weight, and a pack with coolant is considerably heavier than the product alone.</p>' },
      { question: 'What should I allow for delays?', answer: '<p>Specify for the delayed journey. Packs quoted against a schedule fail when the schedule slips, which is exactly when performance matters.</p>' },
      { question: 'Can the liner be recyclable?', answer: '<p>Paper-based liners exist and are the more recyclable option, generally at some cost to hold time. It is a genuine trade rather than a free choice.</p>' },
      { question: 'Will condensation damage the box?', answer: '<p>It can, which is why a moisture-resistant outer is usually specified. Untreated board softens where condensation collects, typically at the base.</p>' },
      { question: 'Are these suitable for hot as well as cold?', answer: '<p>Insulation slows transfer in both directions. The specification differs because hot contents also produce steam, which is a moisture problem as well as a thermal one.</p>' },
      { question: 'Do you supply coolant?', answer: '<p>We specify the pack around the coolant you use. Tell us the type and quantity, because both affect internal volume and hold time.</p>' },
      { question: 'Can these be printed?', answer: '<p>Yes, and handling and orientation marks are worth printing even on an unbranded pack. A thermal box handled the wrong way up loses performance.</p>' },
      { question: 'What board is used?', answer: '<p>Corrugated with an insulating liner, graded against the filled weight and stacking as usual. The thermal specification sits on top of that rather than replacing it.</p>' },
    ],
  },

  /* --------------------------- wrapping --------------------------- */

  'kraft-paper-packaging': {
    intro:
      'This is the general paper range — sheets, rolls and wraps used across food service, retail and dispatch rather than one finished format.',
    sections: [
      {
        h2: 'Choosing by job rather than by look',
        body: [
          'The same brown paper serves very different purposes at different weights and treatments. Grease-resistant for food, moisture-resistant for chilled, plain for interleaving, heavier for carrying. Ordering by appearance rather than by function is how a kitchen ends up with wrap that soaks through.',
        ],
      },
      {
        h2: 'Rolls against sheets',
        body: [
          'Rolls suit continuous use and cut to any length, but need a dispenser and produce off-cuts. Sheets suit repeatable pack sizes with no waste, but only if the sheet size matches the job.',
        ],
      },
      {
        h2: 'Print behaviour on uncoated stock',
        body: [
          'Uncoated paper absorbs ink, so colours dry back darker and heavy solid coverage can cockle the sheet. Line work and single colours hold up far better than full-bleed photography.',
        ],
      },
    ],
    link: {
      lead: 'For the coloured and dyed stocks in the same range, ',
      href: '/product/colored-kraft-paper/',
      anchor: 'coloured kraft paper covers dyed options',
      tail: '.',
    },
    faqs: [
      { question: 'How do I choose the right paper?', answer: '<p>By function rather than appearance. Grease-resistant for food, moisture-resistant for chilled, plain for interleaving, heavier for carrying — the same brown paper serves all of them at different weights and treatments.</p>' },
      { question: 'Rolls or sheets?', answer: '<p>Rolls cut to any length and suit continuous use but need a dispenser and produce off-cuts. Sheets suit repeatable pack sizes with no waste, provided the sheet size matches the job.</p>' },
      { question: 'Why do printed colours look flat?', answer: '<p>Uncoated paper absorbs ink, so colours dry back darker. Heavy solid coverage can also cockle the sheet, which is why line work holds up better than full-bleed designs.</p>' },
      { question: 'Is this suitable for direct food contact?', answer: '<p>With a compliant grade, yes, and with a grease-resistant treatment for oily food. Plain kraft strikes through with anything greasy.</p>' },
      { question: 'Can I order custom widths?', answer: '<p>Yes. Ordering to your bench or dispenser width removes trimming waste on every use.</p>' },
      { question: 'What weights are available?', answer: '<p>From light interleaving papers up to heavy carrying weights. Tell us the application and we specify the band rather than a specific figure.</p>' },
      { question: 'Is it recyclable?', answer: '<p>Plain uncoated paper is. A grease-resistant or moisture-resistant treatment may affect that depending on the chemistry, so tell us if the claim matters.</p>' },
      { question: 'Can it be printed on both sides?', answer: '<p>Yes, though on lighter weights print shows through from the reverse. Where both faces are seen, a heavier stock is worth specifying.</p>' },
      { question: 'Do you supply plain stock?', answer: '<p>Yes, and for interleaving and void fill it is usually the sensible choice — print adds cost with no function.</p>' },
      { question: 'Can I test a weight before ordering in bulk?', answer: '<p>Yes, and it is worth doing. How a weight creases, tears and takes ink is hard to judge from a specification.</p>' },
    ],
  },

  'kraft-paper-gift-wrapping': {
    intro:
      'Gift wrap is judged on how it folds and how the pattern meets at a corner. Neither shows up in a specification.',
    sections: [
      {
        h2: 'Weight against tearing',
        body: [
          'Too light and the paper tears at a corner while being wrapped, which is the most visible failure this product has. Too heavy and it will not fold crisply and the corners bulk out. There is a narrow band that does both jobs.',
        ],
      },
      {
        h2: 'Repeat and where the join lands',
        body: [
          'A pattern has to run continuously across a sheet or roll rather than breaking at the edge. The repeat is set against the width so the pattern meets when the paper wraps around, which is the difference between wrap that looks bought and wrap that looks improvised.',
        ],
      },
      {
        h2: 'Kraft as a look rather than a compromise',
        body: [
          'Unbleached kraft with a single-colour print has become a deliberate aesthetic rather than a budget choice. It also prints economically, since one or two colours on brown is far cheaper than full-colour on white.',
        ],
      },
    ],
    link: {
      lead: 'For coordinating boxes in the same finish, ',
      href: '/product/kraft-paper-gift-boxes/',
      anchor: 'kraft gift boxes match the wrap',
      tail: '.',
    },
    faqs: [
      { question: 'What weight should gift wrap be?', answer: '<p>A narrow band. Too light and it tears at a corner while being wrapped; too heavy and it will not fold crisply and the corners bulk out.</p>' },
      { question: 'How is a repeating pattern set?', answer: '<p>Against the sheet or roll width, so the pattern runs continuously and meets when the paper wraps around rather than breaking at the edge.</p>' },
      { question: 'Is kraft wrap cheaper than white?', answer: '<p>Generally yes, because one or two colours on brown costs far less than full-colour on white, and the unbleached look is now a deliberate aesthetic rather than a compromise.</p>' },
      { question: 'Can I get it in rolls and sheets?', answer: '<p>Both, cut to your width. Sheets suit consistent gift sizes; rolls suit varied ones at the cost of off-cuts.</p>' },
      { question: 'Will the ink rub off?', answer: '<p>Not with a suitable ink and a light coating where needed. Tell us if the wrap will be handled heavily and we specify accordingly.</p>' },
      { question: 'Can you match a brand colour?', answer: '<p>As a spot colour, yes, bearing in mind the brown substrate shifts it. A printed sample on the actual stock is the only reliable approval.</p>' },
      { question: 'Is it recyclable?', answer: '<p>Plain printed kraft is, in the standard paper stream. Foil or glitter finishes are not, which is worth weighing if the claim matters.</p>' },
      { question: 'Do you produce seasonal designs?', answer: '<p>Yes, and short runs suit digital print. Seasonal wrap has no second run behind it, so ordering overage inside the original run is worth considering.</p>' },
      { question: 'How much wrap do I need per gift?', answer: '<p>It depends on box size and wrapping style. Send the box dimensions you wrap most and we will work out sheet size or roll length with you.</p>' },
      { question: 'Can it be printed on both sides?', answer: '<p>Yes, and a contrasting reverse shows at the folds, which is a low-cost way to make a wrap look considered.</p>' },
    ],
  },

  'kraft-paper-dispenser-boxes': {
    intro:
      'A dispenser box holds a roll or a stack of sheets and lets one be taken at a time. It is sized to the roll, not to a box dimension.',
    sections: [
      {
        h2: 'Send the roll, not a box size',
        body: [
          'The dispenser is cut to the roll diameter and width, or to the sheet stack height. Specifying it as a box size is how a dispenser arrives that the roll will not fit into or that lets it rattle and tear unevenly.',
        ],
      },
      {
        h2: 'The tear edge does the work',
        body: [
          'A dispenser is judged entirely on whether paper tears cleanly and in a straight line. That is the tear edge and the aperture geometry, not the board weight. A poor tear edge makes the whole product feel broken.',
        ],
      },
      {
        h2: 'Counter life',
        body: [
          'These sit on a counter or a bench and are handled all day, often with damp or greasy hands in food service. Moisture resistance is worth specifying where the environment justifies it, since a softened dispenser collapses around the aperture first.',
        ],
      },
    ],
    link: {
      lead: 'For the paper that goes in it, ',
      href: '/product/colored-kraft-paper/',
      anchor: 'kraft paper is cut to your roll width',
      tail: '.',
    },
    faqs: [
      { question: 'What measurements do you need?', answer: '<p>The roll diameter and width, or the sheet stack height — not a box size. Specifying a box dimension is how a dispenser arrives the roll will not fit.</p>' },
      { question: 'What makes a good tear edge?', answer: '<p>The edge geometry rather than the board weight. A dispenser is judged entirely on whether paper tears cleanly and straight, and a poor tear edge makes the product feel broken.</p>' },
      { question: 'Should the board be moisture-resistant?', answer: '<p>In food service, usually. These are handled all day with damp or greasy hands, and a softened dispenser collapses around the aperture first.</p>' },
      { question: 'Can a dispenser hold sheets rather than a roll?', answer: '<p>Yes, with the aperture and internal height set to the stack. The dispensing behaviour is different, so tell us which at quoting.</p>' },
      { question: 'Can these be wall-mounted?', answer: '<p>Yes, with reinforced fixing points. Tell us the mounting method because it changes where the reinforcement goes.</p>' },
      { question: 'What board is used?', answer: '<p>Usually E flute corrugated for counter use, heavier where the dispenser is refilled repeatedly rather than replaced.</p>' },
      { question: 'Are these refillable or disposable?', answer: '<p>Both exist. A refillable dispenser needs a proper opening and a stronger board; a disposable one is specified for a single roll and is cheaper per unit.</p>' },
      { question: 'Can they be printed?', answer: '<p>Yes, and since they sit on a counter all day the print is seen more than most packaging. It is one of the better places to put a brand mark.</p>' },
      { question: 'Do these ship flat?', answer: '<p>Yes, and are erected on site, which keeps freight proportionate to the board rather than the assembled volume.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, with a moisture-resistant treatment where the environment needs it. The two specifications are independent.</p>' },
    ],
  },

  'kraft-paper-boxes': {
    intro:
      'This is the general folding carton in kraft board — the format most of the catalogue is built on, cut to whatever the product needs.',
    sections: [
      {
        h2: 'Where the folding carton fits',
        body: [
          'A folding carton arrives flat and glued along one seam and pops open on a packing line, which keeps both freight and handling cost low. It suits retail presentation and light to moderate weights.',
          'Past a certain weight or handling severity, corrugated takes over. The crossover is not a fixed figure — it depends on how far the pack travels and how many times it is handled.',
        ],
      },
      {
        h2: 'Cut to the product, not to a stock size',
        body: [
          'Every run is cut on a fresh dieline. Sending the product dimensions rather than a box size is what makes that worth having, since a box copied from an existing one inherits whatever was wrong with it.',
        ],
      },
      {
        h2: 'Closure styles and what they suit',
        body: [
          'Tuck ends are the default and suit most retail work. Locking tucks resist opening in transit. Gable tops carry. Roll ends survive courier handling. Each is a dieline choice made at the start rather than a variation added later.',
        ],
        table: {
          caption: 'Closure by use',
          head: ['Closure', 'Suits', 'Note'],
          rows: [
            ['Straight tuck', 'Retail shelf', 'Cheapest, opens easily'],
            ['Locking tuck', 'Transit and delivery', 'Resists springing open'],
            ['Gable top', 'Carried food and gifts', 'Handle is integral'],
            ['Roll end', 'Courier shipping', 'Strongest of the flat-packed options'],
          ],
        },
      },
    ],
    link: {
      lead: 'Where the weight or the journey calls for corrugated instead, ',
      href: '/product/kraft-corrugated-boxes/',
      anchor: 'corrugated boxes take the heavier work',
      tail: '.',
    },
    faqs: [
      { question: 'When should I use a folding carton rather than corrugated?', answer: '<p>For retail presentation and light to moderate weights. Past a certain weight or handling severity corrugated takes over, and the crossover depends on how far the pack travels and how often it is handled.</p>' },
      { question: 'Do these arrive flat or assembled?', answer: '<p>Flat and glued along one seam, so they pop open on your packing line. That keeps freight cost considerably lower than a pre-assembled structure.</p>' },
      { question: 'Can I get a size that is not standard?', answer: '<p>Every run is cut to your dimensions — there are no stock sizes. Send the product measurements rather than a box size and we build the dieline around them.</p>' },
      { question: 'Which closure should I choose?', answer: '<p>Straight tuck for retail, locking tuck for transit, gable for carrying, roll end for courier shipping. It is a dieline decision made at the start rather than a later variation.</p>' },
      { question: 'What board weights are available?', answer: '<p>A full range, chosen from the product weight and the journey rather than from a default. We will tell you when a lighter or heavier stock would serve you better.</p>' },
      { question: 'Can these be printed inside?', answer: '<p>Yes. It earns its cost most clearly when the product does not fill the pack, since that is when the interior is visible at opening.</p>' },
      { question: 'Are windows available?', answer: '<p>Yes, filmed or as a plain die-cut aperture. Every square inch of aperture removes stiffness from that panel, so a large window usually means stepping up a grade.</p>' },
      { question: 'How many can I order?', answer: '<p>From the standard minimum upward. Unit cost falls sharply with quantity, and we will show the breaks so the trade is visible.</p>' },
      { question: 'Can you match a carton I already use?', answer: '<p>Send the existing box and we quote to match the structure and board rather than proposing an alternative you would have to re-approve.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes across the range. Recycled fibre is slightly less stiff at the same caliper, so we step up a grade where panel span matters.</p>' },
    ],
  },

  'kraft-boxes-for-gifts': {
    intro:
      'A small gift carton is bought for favours, hampers and retail gifting where the box has to look considered without costing what a rigid box costs.',
    sections: [
      {
        h2: 'Folding cartons that still present well',
        body: [
          'Rigid construction is not the only way to make a box feel deliberate. A folding carton with a clean die-cut, a well-chosen board and one restrained finish reads far better than a cheap rigid box, and costs a fraction.',
          'Where it cannot compete is in being kept. If the box is meant to be reused, rigid is the honest answer.',
        ],
      },
      {
        h2: 'The interior is what is seen',
        body: [
          'On any gift format the lid is open for the whole moment that matters. Interior print, a coloured lining or tissue does more for that moment than anything on the outside.',
        ],
      },
      {
        h2: 'Seasonal ordering',
        body: [
          'Gift cartons are bought against occasions with no second run behind them. Overage produced inside the original run costs a fraction of a separate short run later, and running out mid-season cannot be fixed.',
        ],
      },
    ],
    link: {
      lead: 'For the rigid formats where the box is meant to be kept, ',
      href: '/product/kraft-rigid-boxes/',
      anchor: 'rigid boxes cover the premium constructions',
      tail: '.',
    },
    faqs: [
      { question: 'Do I need a rigid box for gifting?', answer: '<p>Not necessarily. A folding carton with a clean die-cut, a good board and one restrained finish reads far better than a cheap rigid box at a fraction of the cost. Rigid wins where the box is meant to be kept.</p>' },
      { question: 'What makes a gift box feel considered?', answer: '<p>The interior more than the exterior. The lid is open for the whole moment that matters, so interior print, a coloured lining or tissue does more than anything on the outside.</p>' },
      { question: 'Should I order spare units for a season?', answer: '<p>Yes. Overage inside the original run costs a fraction of a separate short run later, and running out mid-season cannot be fixed.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your contents rather than picked from stock sizes. Send what goes in and we build the dieline around it.</p>' },
      { question: 'Can you add a ribbon or a closure?', answer: '<p>Yes — ribbon pulls, tuck locks and magnetic closures are all available. Ribbon is hand-finished, so it adds labour per unit at volume.</p>' },
      { question: 'Are windows an option?', answer: '<p>Yes. On a gift box a window reveals part of the contents, which suits confectionery and similar products where the contents are attractive.</p>' },
      { question: 'What finishes suit kraft gift cartons?', answer: '<p>Foil and deboss both read well against unbleached board and each is a single pass. Full-colour coverage tends to work against the kraft look.</p>' },
      { question: 'Can one box cover several gift sizes?', answer: '<p>Two or three sizes sharing one board, print and finish usually cover a range and keep it looking like a family.</p>' },
      { question: 'Do these ship flat?', answer: '<p>Yes, which keeps freight low. Rigid alternatives ship assembled and cost noticeably more to move.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes across the range, and they suit the natural positioning most kraft gifting takes.</p>' },
    ],
  },
}
