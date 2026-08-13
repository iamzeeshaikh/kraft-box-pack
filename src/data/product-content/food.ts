import type { ProductContentMap } from './types'

/**
 * Food packaging, twenty-three products.
 *
 * The category has one shared vocabulary — grease, steam, cold, food contact —
 * and the risk in writing it is that every page says the same four things.
 * Each entry here leads on the failure that is specific to its product:
 * chocolate blooms, coffee off-gasses, eggs need suspension, seafood needs
 * leak containment, frozen packs crack at the adhesive rather than the board.
 */
export const foodContent: ProductContentMap = {
  'kraft-chocolate-packaging-boxes': {
    intro:
      'Chocolate is temperature-sensitive, fat-rich and bought largely as a gift. The packaging has to protect a product that visibly deteriorates if it gets warm.',
    sections: [
      {
        h2: 'Bloom is the failure customers see',
        body: [
          'When chocolate warms and re-solidifies, fat or sugar migrates to the surface and leaves a pale gray film. The chocolate is safe and tastes the same, but it looks spoiled, and customers reject it.',
          'Packaging cannot prevent bloom on its own — that is a temperature question through the whole chain — but a pack that insulates slightly and is not left in a shop window helps. What packaging can do is avoid making it worse by trapping warmth.',
        ],
      },
      {
        h2: 'Fat migrates into board',
        body: [
          'Cocoa butter soaks into uncoated board over weeks and leaves translucent marks that show from the outside. A greaseproof liner or a coated inner face prevents it and keeps the outer stock recyclable.',
        ],
      },
      {
        h2: 'Presentation matters more than usual',
        body: [
          'A large share of chocolate is gifted, so the box is opened in front of someone. A fitted tray holding each piece in position does more for that moment than the outer finish — pieces that have slid together read as damaged even when they are not.',
        ],
      },
    ],
    link: {
      lead: 'For mixed confectionery rather than molded chocolate specifically, ',
      href: '/product/kraft-candy-boxes/',
      anchor: 'candy boxes cover the wider range',
      tail: '.',
    },
    faqs: [
      { question: 'Can packaging stop chocolate blooming?', answer: '<p>Not on its own — bloom is a temperature question through the whole chain. What packaging can do is avoid making it worse by trapping warmth, and a pack that insulates slightly helps.</p>' },
      { question: 'Will cocoa butter mark the box?', answer: '<p>Over weeks on uncoated board, yes, as translucent marks visible from the outside. A greaseproof liner or a coated inner face prevents it while keeping the outer recyclable.</p>' },
      { question: 'Do I need a fitted tray?', answer: '<p>For a boxed selection, yes. Pieces that have slid together read as damaged even when they are not, and the box is usually opened in front of someone.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>Where chocolate touches the board directly we specify compliant boards and inks. Tell us whether contact is direct or through a liner or foil.</p>' },
      { question: 'Should the box have a window?', answer: '<p>It suits decorated or filled chocolates where appearance sells. Bear in mind a window also lets light and warmth in, which works against the product.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your piece count and tray layout. Send the tray if you have one, since it sets the internal dimensions.</p>' },
      { question: 'Do you supply the tray as well?', answer: '<p>Yes, in board or molded pulp, specified with the box so the two fit without adjustment.</p>' },
      { question: 'What finishes suit chocolate packaging?', answer: '<p>Foil and deboss on kraft read well and suit the gifting positioning. Heavy lamination adds cost and removes the pack from the paper stream.</p>' },
      { question: 'Are these suitable for posting?', answer: '<p>With an insert and an outer carton, yes, though temperature during transit is the larger risk. Summer shipping usually needs an insulated outer.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>For non-direct contact, yes, and using a liner for the contact face is what lets you keep a recycled outer.</p>' },
    ],
  },

  'kraft-coffee-packaging-boxes': {
    intro:
      'Freshly roasted coffee releases carbon dioxide for days after roasting. A sealed pack with no way to vent will swell and can burst.',
    sections: [
      {
        h2: 'Coffee off-gasses',
        body: [
          'For up to two weeks after roasting, beans release CO2. In a sealed bag or pack that pressure has to go somewhere, and without a one-way valve the pack inflates and the seal fails.',
          'The valve lets gas out without letting oxygen in, which is the whole point — oxygen is what stales coffee.',
        ],
      },
      {
        h2: 'Oxygen and light are the enemies',
        body: [
          'Ground coffee stales far faster than beans because there is more surface area exposed. A barrier that keeps oxygen out matters more than one that keeps moisture out, which is the reverse of most food packaging.',
        ],
      },
      {
        h2: 'Cartons around bags',
        body: [
          'Where a carton is used, it is almost always secondary — the barrier bag inside does the preservation work and the carton carries the branding and the shelf presence. Specifying the carton as though it were the barrier is the common error.',
        ],
      },
    ],
    faqs: [
      { question: 'Why does my coffee pack swell?', answer: '<p>Freshly roasted coffee releases CO2 for up to two weeks. Without a one-way valve that pressure has nowhere to go and the pack inflates and can burst.</p>' },
      { question: 'What does a one-way valve do?', answer: '<p>Lets gas out without letting oxygen in. Oxygen is what stales coffee, so venting alone would not work — it has to be one-directional.</p>' },
      { question: 'Does the carton preserve the coffee?', answer: '<p>No. Where a carton is used it is secondary, and the barrier bag inside does the preservation work. Specifying the carton as the barrier is the common error.</p>' },
      { question: 'Does ground coffee need more protection than beans?', answer: '<p>Yes. Ground coffee has far more surface area exposed to oxygen and stales considerably faster.</p>' },
      { question: 'Is moisture or oxygen the bigger issue?', answer: '<p>Oxygen, which is the reverse of most food packaging. A barrier chosen for moisture alone will not hold coffee freshness.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your bag or fill size. Send a filled bag rather than a flat one, since filled dimensions differ noticeably.</p>' },
      { question: 'Can the carton be recyclable?', answer: '<p>The carton can. The barrier bag inside usually cannot, so the claim should be made about the carton specifically rather than the pack as a whole.</p>' },
      { question: 'Do you supply resealable options?', answer: '<p>Zips and tin ties are both available on bags. For a carton the reseal is usually a tuck lock, which is less airtight.</p>' },
      { question: 'What finishes suit coffee packaging?', answer: '<p>Uncoated kraft with one or two colors suits the speciality positioning. Matt lamination is common where a moisture barrier on the carton is also wanted.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes for the carton. The inner barrier is specified separately and is where the recyclability question actually sits.</p>' },
    ],
  },

  'kraft-tea-packaging-boxes': {
    intro:
      'Tea absorbs aroma from whatever is around it, which makes packaging as much about keeping smells out as keeping freshness in.',
    sections: [
      {
        h2: 'Tea takes on surrounding odors',
        body: [
          'Leaf tea is highly absorbent and will pick up the smell of ink, adhesive or a neighbouring product on a shelf. That is why an inner barrier matters even where the carton itself seems adequate.',
          'Low-odor inks and adhesives are worth specifying where tea sits in direct contact, and it is a request that has to be made rather than assumed.',
        ],
      },
      {
        h2: 'Bags, loose leaf and sachets',
        body: [
          'Each needs a different internal arrangement. Loose leaf needs a sealed inner; individually wrapped sachets need only a carton; unwrapped bags sit between the two and are the most vulnerable to odor transfer.',
        ],
      },
      {
        h2: 'A category bought on the pack',
        body: [
          'Speciality tea competes heavily on presentation, and kraft with restrained print suits the positioning most brands take. The carton is doing a great deal of the selling.',
        ],
      },
    ],
    faqs: [
      { question: 'Why does my tea taste of the packaging?', answer: '<p>Leaf tea is highly absorbent and picks up odors from ink, adhesive or a neighbouring product. Low-odor inks and adhesives are worth specifying where contact is direct.</p>' },
      { question: 'Do I need an inner barrier?', answer: '<p>For loose leaf, yes. Individually wrapped sachets need only a carton; unwrapped bags sit between the two and are the most vulnerable to odor transfer.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>Where tea touches the board directly we specify compliant boards and inks. Tell us whether contact is direct or through an inner.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your count and bag or sachet dimensions. Send a filled sample, since loose tea settles and changes the fill height.</p>' },
      { question: 'Can the carton be resealable?', answer: '<p>A tuck lock helps but is not airtight. For loose leaf a resealable inner is the more effective answer.</p>' },
      { question: 'What finishes suit tea packaging?', answer: '<p>Uncoated kraft with restrained print suits the speciality positioning, and it avoids the ink volume that contributes to odor transfer.</p>' },
      { question: 'Can I have a window?', answer: '<p>Yes, and it suits whole-leaf teas where appearance matters. It also lets light in, which degrades some teas over time.</p>' },
      { question: 'Do you supply cartons for sample sets?', answer: '<p>Yes, with a compartment per variety so aromas do not mix between compartments.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, though recycled stock can carry more residual odor than virgin board, which matters more here than in most categories. We would recommend a sample first.</p>' },
      { question: 'Can these ship internationally?', answer: '<p>Yes, and a moisture barrier becomes more important on longer journeys, since tea takes on humidity as readily as odor.</p>' },
    ],
  },

  'kraft-donut-packaging-boxes': {
    intro:
      'Donuts are glazed, soft and stick to whatever they touch. The box has to stop them sliding and stop the glaze transferring.',
    sections: [
      {
        h2: 'Glaze sticks to board',
        body: [
          'A glazed donut left in direct contact with untreated board bonds to it, and the glaze tears off when the donut is lifted. A grease-resistant coating or a liner prevents it, and it is the most common complaint in the format.',
        ],
      },
      {
        h2: 'Movement smears the decoration',
        body: [
          'Donuts slide, and a decorated donut that slides is a smeared donut. A partition or a fitted insert keeps each one in place, which matters more on decorated ranges than on plain.',
        ],
      },
      {
        h2: 'Warm donuts and condensation',
        body: [
          'Boxed warm, donuts release steam that condenses and makes both the glaze and the box wet. Vent holes let it escape, and a warm donut in a sealed box arrives noticeably worse than one in a vented box.',
        ],
      },
    ],
    link: {
      lead: 'For other decorated bakery items with the same clearance problem, ',
      href: '/product/kraft-cupcake-boxes/',
      anchor: 'cupcake boxes hold each item in a cup',
      tail: '.',
    },
    faqs: [
      { question: 'Why does the glaze stick to the box?', answer: '<p>A glazed donut in direct contact with untreated board bonds to it, and the glaze tears when the donut is lifted. A grease-resistant coating or a liner prevents it.</p>' },
      { question: 'How do I stop donuts sliding?', answer: '<p>A partition or fitted insert. A decorated donut that slides is a smeared donut, which matters more on decorated ranges than plain ones.</p>' },
      { question: 'Should the box be vented?', answer: '<p>If donuts are boxed warm, yes. Trapped steam condenses and makes both the glaze and the box wet.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your donut size and count — commonly 4, 6 and 12. Send the largest donut you make, since sizes vary between operations.</p>' },
      { question: 'Should there be a window?', answer: '<p>It suits decorated ranges where appearance sells. On a large lid an aperture costs stiffness, and the lid is the panel that must not touch the glaze.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>Yes, with compliant boards and inks where contact is direct, which it almost always is on this product.</p>' },
      { question: 'Can they be carried by hand?', answer: '<p>Yes, and larger counts benefit from a handle with reinforcement around the aperture.</p>' },
      { question: 'Do these stack for delivery?', answer: '<p>With a flat lid, yes. Stacking with a soft product inside means the lid has to carry the box above without touching the donuts.</p>' },
      { question: 'Can they be printed?', answer: '<p>Yes, with food-safe inks. One or two colors on kraft suits the category and keeps the cost per box down.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>For non-direct contact, yes. Where donuts sit on the board a compliant grade with a barrier is needed.</p>' },
    ],
  },

  'kraft-muffin-packaging-boxes': {
    intro:
      'Muffins have a domed top that must not be flattened and a base that sheds crumbs. The insert handles both.',
    sections: [
      {
        h2: 'The dome sets the height',
        body: [
          'A muffin is measured at the base but its dome is the tallest point, and a box sized to the base flattens the top of every muffin in the batch. The clearance has to be measured over the dome as baked.',
        ],
      },
      {
        h2: 'A cup keeps it upright',
        body: [
          'Without a fitted cup a muffin tips onto its side, and a tipped muffin loses its dome shape against the wall. The insert both holds it upright and separates it from its neighbors.',
        ],
      },
      {
        h2: 'Warm muffins and moisture',
        body: [
          'Boxed warm, muffins steam and the crust softens. Vent holes let the moisture escape, and for a product sold partly on texture that is a meaningful difference.',
        ],
      },
    ],
    link: {
      lead: 'For iced or decorated cakes needing more clearance again, ',
      href: '/product/kraft-cupcake-boxes/',
      anchor: 'cupcake boxes cover decorated items',
      tail: '.',
    },
    faqs: [
      { question: 'Why are my muffin tops flattened?', answer: '<p>The box was sized to the base rather than over the dome. A muffin is measured at the base but its dome is the tallest point, so clearance has to be measured over it as baked.</p>' },
      { question: 'Do I need a fitted insert?', answer: '<p>Yes. Without a cup a muffin tips onto its side and loses its dome shape against the wall, and the insert also separates it from its neighbors.</p>' },
      { question: 'Should the box be vented?', answer: '<p>If muffins are boxed warm, yes. Trapped steam softens the crust, which matters for a product sold partly on texture.</p>' },
      { question: 'What counts do you produce?', answer: '<p>Commonly 2, 4, 6 and 12, each with its own insert. The counts can share one board and print system.</p>' },
      { question: 'Is a window useful?', answer: '<p>Yes for retail, where the muffin sells itself. It costs stiffness on the lid, which is the panel that must clear the dome.</p>' },
      { question: 'What sizes should I send?', answer: '<p>The muffin as baked, measured at the widest point of the case and the tallest point of the dome.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>Yes, with compliant boards and inks where contact is direct. Muffins usually sit in a paper case, which changes the contact question.</p>' },
      { question: 'Can these be carried?', answer: '<p>Yes, and larger counts benefit from a handle. The insert keeps muffins upright while the box is carried, which a plain box does not.</p>' },
      { question: 'Do they stack?', answer: '<p>With a flat lid and adequate board, yes. The lid must not deflect onto the domes when boxes are stacked.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>For non-direct contact, yes. Where muffins touch the board a compliant grade is required.</p>' },
    ],
  },

  'kraft-macaron-packaging-boxes': {
    intro:
      'Macarons are fragile, expensive and bought on appearance. They crack if they move and they are ruined by moisture.',
    sections: [
      {
        h2: 'They crack if they can move',
        body: [
          'A macaron shell cracks under very little force, and sliding against a neighbor is enough. A fitted insert holding each one individually is not optional on this product — it is the reason the packaging exists.',
        ],
      },
      {
        h2: 'Humidity softens the shell',
        body: [
          'The texture that defines a macaron — crisp shell, soft interior — is lost when the shell takes on moisture. A pack that seals reasonably well, and that is not left open, holds it noticeably longer.',
        ],
      },
      {
        h2: 'Bought as a gift, opened in front of people',
        body: [
          'Almost all macaron sales are gifting or occasion-led, so the box is opened in company. Color range is a large part of the appeal, which is why a window or an accurate printed representation matters more here than on most confectionery.',
        ],
      },
    ],
    link: {
      lead: 'For mixed confectionery boxes rather than single-product sets, ',
      href: '/product/kraft-candy-boxes/',
      anchor: 'candy boxes cover mixed contents',
      tail: '.',
    },
    faqs: [
      { question: 'Why do macarons crack in the box?', answer: '<p>The shell cracks under very little force, and sliding against a neighbor is enough. A fitted insert holding each one individually is the reason this packaging exists.</p>' },
      { question: 'Does the box affect texture?', answer: '<p>Indirectly. The crisp shell softens as it takes on moisture, so a pack that seals reasonably well holds the texture noticeably longer.</p>' },
      { question: 'How many can one box hold?', answer: '<p>Commonly 6, 12 or 24 with an insert position each. Send the count you sell and we cut the insert to it.</p>' },
      { question: 'Should the box have a window?', answer: '<p>Usually, because color range is a large part of the appeal. Where a window is impractical, accurate printed color does the same job.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your macaron diameter and the insert layout. Macaron sizes vary between bakers, so send an actual one.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>Yes, with compliant boards and inks. Macarons usually sit directly in the insert, so the insert material matters as much as the box.</p>' },
      { question: 'Can these be posted?', answer: '<p>With a fitted insert and a protective outer, yes, though it is a fragile product and some breakage rate should be expected.</p>' },
      { question: 'What finishes suit them?', answer: '<p>Restrained — foil or deboss on kraft. The macarons provide the color, and a busy box competes with them.</p>' },
      { question: 'Can inserts hold different flavors separately?', answer: '<p>Yes, and it is worth doing so flavors do not transfer. Individual positions also stop colors marking each other.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>For the outer, yes. The insert in direct contact needs a compliant grade.</p>' },
    ],
  },

  'kraft-brownie-packaging-boxes': {
    intro:
      'Brownies are dense, rich and greasy. They mark packaging faster than almost any other baked product.',
    sections: [
      {
        h2: 'Fat comes through quickly',
        body: [
          'A brownie has a high fat content and it soaks into uncoated board within hours, not days. The box goes translucent where the brownie sits, which looks like a fault even though the product is fine.',
          'A greaseproof liner or a grease-resistant board prevents it, and the liner keeps the outer stock recyclable.',
        ],
      },
      {
        h2: 'Cut portions and clean edges',
        body: [
          'Brownies are usually sold as cut squares, and the cut edges are soft. A snug fit stops them sliding and smearing against each other, which is what turns a tidy tray of squares into one mass.',
        ],
      },
      {
        h2: 'Sold warm or sold set',
        body: [
          'A warm brownie steams and the top loses its crust. Where they are boxed warm, ventilation matters; where they are boxed cool, a closer-fitting sealed box holds moisture in the product where it belongs.',
        ],
      },
    ],
    link: {
      lead: 'For mixed bakery counters selling several items, ',
      href: '/product/kraft-bakery-boxes/',
      anchor: 'bakery boxes cover the general formats',
      tail: '.',
    },
    faqs: [
      { question: 'Why does the box go translucent?', answer: '<p>Brownie fat soaks into uncoated board within hours. A greaseproof liner or a grease-resistant board prevents it, and a liner keeps the outer recyclable.</p>' },
      { question: 'How do I stop cut brownies smearing together?', answer: '<p>A snug fit or dividers. The cut edges are soft, and sliding is what turns a tidy tray of squares into one mass.</p>' },
      { question: 'Should the box be vented?', answer: '<p>If brownies are boxed warm, yes — steam softens the crust. Boxed cool, a closer-fitting box holds moisture in the product where it belongs.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your portion size and count. Send the tray or slab dimensions if you cut to order.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>Yes, with compliant boards and inks where contact is direct, which it usually is on this product.</p>' },
      { question: 'Can I have a window?', answer: '<p>Yes, and it suits brownies where the surface finish sells. Bear in mind grease marks show at the window edge if the barrier is inadequate.</p>' },
      { question: 'Are these suitable for posting?', answer: '<p>Yes, and brownies post better than most bakery products because they are dense and hold shape. A liner is essential over a longer journey.</p>' },
      { question: 'Do you supply dividers?', answer: '<p>Yes, in board, specified with the box because they set the internal layout.</p>' },
      { question: 'What board is used?', answer: '<p>Grease-resistant food board, weighted for the density of the product. Brownies are heavier than they look for their volume.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>For non-direct contact, yes, and a liner is what allows a recycled outer with direct product inside.</p>' },
    ],
  },

  'kraft-pastry-boxes': {
    intro:
      'Pastry is laminated, buttery and crisp when fresh. All three qualities are lost to the same thing — trapped moisture.',
    sections: [
      {
        h2: 'Crispness is lost to steam, not time',
        body: [
          'A croissant boxed warm and sealed goes soft within twenty minutes. The same croissant in a vented box holds its texture far longer. Customers experience that as a quality difference in the bakery rather than in the packaging.',
        ],
      },
      {
        h2: 'Butter comes through',
        body: [
          'Laminated pastry carries a great deal of butter, and it marks untreated board quickly. A grease-resistant board or a liner is needed rather than optional on this category.',
        ],
      },
      {
        h2: 'Fragile shapes need clearance',
        body: [
          'Pastries with layers, glaze or filling deform when they touch a lid. Clearance over the tallest point, and enough footprint that they are not pressed against each other, keeps the shape intact.',
        ],
      },
    ],
    link: {
      lead: 'For counter service where a bag suits better than a box, ',
      href: '/product/kraft-bakery-bags/',
      anchor: 'bakery bags cover single-item service',
      tail: '.',
    },
    faqs: [
      { question: 'Why does my pastry go soft?', answer: '<p>Trapped steam rather than time. A croissant boxed warm and sealed softens within twenty minutes; the same one in a vented box holds its texture far longer.</p>' },
      { question: 'Do I need a grease barrier?', answer: '<p>Yes, for laminated pastry. It carries a great deal of butter and marks untreated board quickly.</p>' },
      { question: 'How much clearance does pastry need?', answer: '<p>Enough that nothing touches the lid, measured over the tallest point. Layers, glaze and filling all deform where they contact the box.</p>' },
      { question: 'Should the box be vented?', answer: '<p>For anything sold warm or intended to stay crisp, yes. It is the single most effective change on this category.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your products and counts. Send the largest and tallest pastry you sell.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>Yes, with compliant boards and inks. Pastry is almost always direct contact.</p>' },
      { question: 'Can I have a window?', answer: '<p>Yes, and pastry sells well through one. Watch the barrier at the window edge, since butter marks show there first.</p>' },
      { question: 'Do you supply dividers?', answer: '<p>Yes, for mixed selections where items would otherwise press against each other and lose shape.</p>' },
      { question: 'Are these suitable for delivery?', answer: '<p>With ventilation and a secure closure, yes. Delivery adds time, which makes ventilation more important rather than less.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>For non-direct contact, yes. Direct contact requires a compliant grade with the appropriate barrier.</p>' },
    ],
  },

  'kraft-sandwich-wedge-boxes': {
    intro:
      'A wedge box holds a triangular sandwich upright so the filling shows. It is a display format as much as a container.',
    sections: [
      {
        h2: 'The filling is the selling point',
        body: [
          'A sandwich sells on what is visible at the cut face. A wedge box presents that face to the customer, which is why the window position matters more than its size — a window that shows bread rather than filling does the opposite of its job.',
        ],
      },
      {
        h2: 'Moisture from fresh fillings',
        body: [
          'Salad, tomato and dressing release moisture that softens both the bread and the board. A moisture-tolerant grade and, where the sandwich sits for hours, some ventilation both help.',
        ],
      },
      {
        h2: 'Chilled display',
        body: [
          'Most sandwich wedges sit in a chiller, where condensation collects on the pack. Board that softens in that environment loses its shape and the display looks poor by mid-afternoon.',
        ],
      },
    ],
    link: {
      lead: 'For salads and larger fresh food portions, ',
      href: '/product/kraft-salad-boxes/',
      anchor: 'salad boxes cover the bowl formats',
      tail: '.',
    },
    faqs: [
      { question: 'Where should the window go?', answer: '<p>Over the cut face, because that is what sells the sandwich. A window showing bread rather than filling does the opposite of its job.</p>' },
      { question: 'Will fresh fillings soften the box?', answer: '<p>Salad, tomato and dressing release moisture that softens both bread and board. A moisture-tolerant grade handles it, and ventilation helps where the sandwich sits for hours.</p>' },
      { question: 'Do these hold up in a chiller?', answer: '<p>With a moisture-resistant board, yes. Condensation collects on packs in chilled display and untreated board loses shape by mid-afternoon.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your bread size and fill depth. A generously filled sandwich needs noticeably more depth than the bread alone suggests.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>Yes, with compliant boards and inks. Sandwich wedges are direct contact throughout.</p>' },
      { question: 'Can the window be film-free?', answer: '<p>A plain aperture keeps the pack recyclable but exposes the sandwich, which is generally not acceptable in food retail. Film usually wins here.</p>' },
      { question: 'Do they stack in display?', answer: '<p>Yes, and the wedge shape stacks reasonably. Tell us if they are stacked more than two deep so we grade accordingly.</p>' },
      { question: 'Can they be printed?', answer: '<p>Yes, with food-safe inks. Most of the pack area is window, so print space is limited and best used for brand and ingredients.</p>' },
      { question: 'Are labels or the pack better for ingredients?', answer: '<p>A label lets you change ingredients without new packs, which suits an operation with a rotating menu. Printed packs suit fixed ranges.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>For non-contact areas, yes. The food-contact face needs a compliant grade.</p>' },
    ],
  },

  'kraft-salad-boxes': {
    intro:
      'A salad box holds wet, mixed contents that leak if the base is not right. Most complaints in this format are about leaks rather than appearance.',
    sections: [
      {
        h2: 'The base is where leaks start',
        body: [
          'Dressing and moisture collect at the bottom, and a glued or folded base with a seam lets it out. A leak-resistant construction, or a coated board with a properly sealed base, is what keeps it in.',
          'This matters more with delivery than with counter service, because the box spends longer tilted in a bag.',
        ],
      },
      {
        h2: 'Visibility sells the contents',
        body: [
          'Salad is bought on how fresh and full it looks. A window or a clear lid shows that; a closed box relies on a photograph, which customers discount.',
        ],
      },
      {
        h2: 'Chilled display and condensation',
        body: [
          'These sit in a chiller for hours, where condensation collects on the pack and inside it. A moisture-resistant grade keeps the box holding its shape through a full display day.',
        ],
      },
    ],
    link: {
      lead: 'For hot food formats facing steam rather than cold moisture, ',
      href: '/product/kraft-take-out-boxes/',
      anchor: 'take out boxes cover hot service',
      tail: '.',
    },
    faqs: [
      { question: 'Why does my salad box leak?', answer: '<p>Dressing collects at the base and a seamed base lets it out. A leak-resistant construction or a coated board with a sealed base is what keeps it in, and it matters more for delivery than counter service.</p>' },
      { question: 'Should the box show the contents?', answer: '<p>Yes. Salad is bought on how fresh and full it looks, and customers discount a photograph on a closed box.</p>' },
      { question: 'Do these survive a chiller?', answer: '<p>With a moisture-resistant grade, yes. Condensation collects on packs in chilled display and untreated board softens through the day.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your portion volume. Send the fill you actually serve rather than a nominal size, since salad settles.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>Yes, with compliant boards and coatings. Salad is direct contact and often wet, so the coating specification matters.</p>' },
      { question: 'Can the lid be clear?', answer: '<p>Yes, and it is common in this category. A clear lid on a kraft base keeps the natural look while showing the contents.</p>' },
      { question: 'Do they stack for delivery?', answer: '<p>Yes with a flat lid. A domed lid holding a full salad does not stack, which matters for multi-order deliveries.</p>' },
      { question: 'Are these microwaveable?', answer: '<p>It depends on the coating. Salad boxes usually are not intended for reheating, but tell us if that is expected.</p>' },
      { question: 'Are ventilated options available?', answer: '<p>For hot or warm contents, yes. For chilled salad ventilation works against freshness rather than for it.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>For non-contact areas, yes. The contact face and the leak-resistant coating need compliant specification.</p>' },
    ],
  },

  'kraft-noodle-packaging-boxes': {
    intro:
      'A noodle box is filled hot and wet, folded from a single blank, and carried. It faces steam, oil and liquid at the same time.',
    sections: [
      {
        h2: 'Three attacks at once',
        body: [
          'Hot noodles bring steam that softens the board from inside, oil that soaks through it, and broth that pools at the base. A board treated for one of the three still fails on the other two.',
          'The specification for this format has to cover grease resistance, moisture tolerance and a base that holds liquid.',
        ],
      },
      {
        h2: 'The folded base is the weak point',
        body: [
          'The classic noodle box folds from one blank, and that folded base has seams. Under hot liquid those seams are where leaks start, which is why a coated board matters more than a heavier one.',
        ],
      },
      {
        h2: 'Carried and tilted',
        body: [
          'These are delivered as often as they are collected, and a delivery bag tilts. A closure that stays shut when the box is not upright is the difference between a meal and a spill.',
        ],
      },
    ],
    link: {
      lead: 'For drier takeaway items in the same operation, ',
      href: '/product/kraft-take-out-boxes/',
      anchor: 'take out boxes cover the general formats',
      tail: '.',
    },
    faqs: [
      { question: 'Why does my noodle box leak?', answer: '<p>The folded base has seams, and under hot liquid that is where leaks start. A coated board matters more than a heavier one for this failure.</p>' },
      { question: 'What board handles hot wet food?', answer: '<p>One specified for all three attacks — grease resistance, moisture tolerance and a base that holds liquid. A board treated for one still fails on the others.</p>' },
      { question: 'Will the box stay shut in a delivery bag?', answer: '<p>Only with a closure designed for it. A plain fold opens when tilted, and delivery bags tilt.</p>' },
      { question: 'Are these microwaveable?', answer: '<p>It depends on the coating and any metal handle. Tell us if reheating in the pack is expected and we specify accordingly.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your portion volumes. Send the fill you serve, since noodle portions vary considerably between operations.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>Yes, with compliant boards and coatings, and PFAS-free grease-resistant grades as standard.</p>' },
      { question: 'Do they stack?', answer: '<p>Yes with a flat top fold. Full boxes stacked in a delivery bag need the fold to carry the weight above without opening.</p>' },
      { question: 'Can they have a wire handle?', answer: '<p>Yes, though a metal handle affects microwaveability and recyclability. A handle-free version avoids both issues.</p>' },
      { question: 'Can they be printed?', answer: '<p>Yes, with food-safe inks. One or two colors on kraft is the usual specification at the volumes this format runs.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>For non-contact areas, yes. The contact face needs a compliant coated grade.</p>' },
    ],
  },

  'kraft-sushi-packaging-boxes': {
    intro:
      'Sushi is arranged, chilled and bought on how it looks. The pack has to hold the arrangement and show it.',
    sections: [
      {
        h2: 'Arrangement is the product',
        body: [
          'Sushi is plated in the pack, and pieces that have shifted look poor even though nothing is wrong. A tray with positions, or a snug fit, keeps the arrangement as it was set.',
        ],
      },
      {
        h2: 'Rice dries and nori softens',
        body: [
          'The two components deteriorate in opposite directions — rice dries out in open air, nori softens in humidity. A pack with some seal holds rice better; too much seal softens the nori. Most operations settle on a closed pack eaten within hours.',
        ],
      },
      {
        h2: 'Chilled display',
        body: [
          'Sushi sits in a chiller where condensation collects. A moisture-resistant grade keeps the pack presentable through a display day, and a clear lid shows the arrangement without opening it.',
        ],
      },
    ],
    link: {
      lead: 'For other chilled fresh food formats, ',
      href: '/product/kraft-salad-boxes/',
      anchor: 'salad boxes cover wet chilled contents',
      tail: '.',
    },
    faqs: [
      { question: 'How do I keep the arrangement intact?', answer: '<p>A tray with positions or a snug fit. Sushi is plated in the pack, and pieces that have shifted look poor even though nothing is wrong.</p>' },
      { question: 'Does the pack affect the rice and nori?', answer: '<p>They deteriorate in opposite directions — rice dries in open air, nori softens in humidity. Most operations settle on a closed pack eaten within hours.</p>' },
      { question: 'Should the lid be clear?', answer: '<p>Usually. Sushi is bought on appearance and a clear lid shows the arrangement without the pack being opened.</p>' },
      { question: 'Do these hold up in a chiller?', answer: '<p>With a moisture-resistant grade, yes. Condensation collects on chilled packs and untreated board loses shape through a display day.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your piece count and layout. Send the tray layout if you have one, since it sets the internal dimensions.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>Yes, with compliant boards and coatings for direct contact with rice and fish.</p>' },
      { question: 'Do you supply compartments for soy and ginger?', answer: '<p>Yes, as separate positions in the tray so liquids do not reach the rice.</p>' },
      { question: 'Can these be printed?', answer: '<p>Yes, though most of the visible area is usually lid. Print space is best used for brand and allergen information.</p>' },
      { question: 'Do they stack?', answer: '<p>Yes with a flat lid. A domed lid over a full pack does not stack, which matters in a chiller with limited shelf height.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>For non-contact areas, yes. The contact face needs a compliant grade.</p>' },
    ],
  },

  'kraft-seafood-boxes': {
    intro:
      'Seafood is wet, it smells, and it has to stay cold. A pack that fails on any of the three is a problem for everything near it.',
    sections: [
      {
        h2: 'Containment matters more than strength',
        body: [
          'Leaking seafood liquid is not just a mess — it contaminates whatever it reaches and the smell persists. A leak-resistant liner or coated construction is the primary specification, ahead of board weight.',
        ],
      },
      {
        h2: 'Cold chain and adhesive',
        body: [
          'Seafood is held chilled or frozen, and standard carton adhesive becomes brittle in sustained cold. Seams that hold at room temperature crack when a case is handled straight from a chiller, which is exactly when a leak matters most.',
        ],
      },
      {
        h2: 'Ice and drainage',
        body: [
          'Where seafood is packed on ice, meltwater has to go somewhere. Either the pack contains it entirely, or it drains deliberately — an undecided pack leaks unpredictably, which is the worst of both.',
        ],
      },
    ],
    link: {
      lead: 'For frozen goods generally rather than fresh seafood, ',
      href: '/product/kraft-frozen-food-boxes/',
      anchor: 'frozen food boxes cover cold-chain construction',
      tail: '.',
    },
    faqs: [
      { question: 'What is the main specification for seafood packaging?', answer: '<p>Containment ahead of strength. Leaking seafood liquid contaminates what it reaches and the smell persists, so a leak-resistant liner or coated construction comes first.</p>' },
      { question: 'Why do seams crack in cold storage?', answer: '<p>Standard carton adhesive becomes brittle in sustained cold. A cold-tolerant adhesive costs very little and cannot be added afterwards.</p>' },
      { question: 'What about ice meltwater?', answer: '<p>The pack either contains it entirely or drains deliberately. An undecided pack leaks unpredictably, which is worse than either option.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>Yes, with compliant boards and liners specified for wet protein contact.</p>' },
      { question: 'Do these work for frozen as well as fresh?', answer: '<p>Yes, with the cold-tolerant adhesive and a moisture-resistant grade. Tell us which applies because the specification differs.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your portions or case weights. Send the filled weight, since wet product is heavier than its volume suggests.</p>' },
      { question: 'Can these be printed?', answer: '<p>Yes, with food-safe inks. For transit cases, product code and handling marks are usually all that is needed.</p>' },
      { question: 'Do they stack in cold storage?', answer: '<p>With the right grade, and bearing in mind board loses strength as it absorbs moisture in a humid chiller. Send the stack height.</p>' },
      { question: 'Are insulated options available?', answer: '<p>Yes, specified by hold time rather than temperature. Tell us the journey length including any delay.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>For non-contact areas, yes. Wet protein contact requires compliant grades and usually a liner.</p>' },
    ],
  },

  'kraft-meat-packaging-boxes': {
    intro:
      'Meat packaging has to contain liquid, hold temperature and satisfy hygiene expectations that customers judge visually.',
    sections: [
      {
        h2: 'Purge has to be contained',
        body: [
          'Meat releases liquid, and any of it reaching the outside of a pack is unacceptable to both retailers and customers. An absorbent pad plus a leak-resistant construction is the standard answer, and the pad is as much a part of the specification as the board.',
        ],
      },
      {
        h2: 'Cold chain adhesive again',
        body: [
          'Like all chilled and frozen work, standard adhesive goes brittle and seams crack when handled cold. It has to be specified at the outset.',
        ],
      },
      {
        h2: 'Perceived hygiene',
        body: [
          'Customers judge meat packaging on how clean it looks. A marked or damp-looking pack reads as a food safety concern rather than a cosmetic one, which makes transit protection and moisture resistance commercially significant rather than just practical.',
        ],
      },
    ],
    faqs: [
      { question: 'How is meat liquid contained?', answer: '<p>An absorbent pad plus a leak-resistant construction. The pad is as much part of the specification as the board, since any liquid reaching the outside is unacceptable to retailers and customers.</p>' },
      { question: 'Why do seams crack in the chiller?', answer: '<p>Standard carton adhesive becomes brittle in sustained cold. A cold-tolerant adhesive is inexpensive and has to be specified at the start.</p>' },
      { question: 'Does appearance matter on meat packaging?', answer: '<p>Commercially, yes. A marked or damp-looking pack reads as a food safety concern rather than a cosmetic one, which makes moisture resistance a selling issue.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>Yes, with compliant boards and liners specified for raw protein contact.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your portion or case weights. Send filled weights rather than dimensions, since wet product is dense.</p>' },
      { question: 'Do you supply absorbent pads?', answer: '<p>We specify them with the pack so the pad size matches the base. A pad that is too small leaves liquid at the edges.</p>' },
      { question: 'Do these stack in cold storage?', answer: '<p>With the right grade, allowing for board losing strength as it absorbs moisture in a humid chiller. Send the stack height.</p>' },
      { question: 'Can these be printed?', answer: '<p>Yes, with food-safe inks. Retail packs usually carry more print than transit cases, which need only codes and handling marks.</p>' },
      { question: 'Are insulated options available?', answer: '<p>Yes, specified by hold time rather than temperature, including any delay at either end of the journey.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>For non-contact areas, yes. Raw protein contact requires compliant grades and a liner.</p>' },
    ],
  },

  'kraft-frozen-food-boxes': {
    intro:
      'Frozen packaging fails at the adhesive far more often than at the board. That single fact drives most of the specification.',
    sections: [
      {
        h2: 'Glue, not board, is the weak point',
        body: [
          'Standard carton adhesive becomes brittle below freezing. A seam that is sound at room temperature cracks when the case is handled cold, and the failure appears at the far end of the chain rather than at production.',
          'A cold-tolerant adhesive costs very little and cannot be added afterwards. If any part of the run is stored frozen, it has to be specified at quoting.',
        ],
      },
      {
        h2: 'Condensation on the way out',
        body: [
          'A pack coming out of a freezer into a warm room collects condensation, and untreated board absorbs it and loses stiffness. A moisture-resistant grade holds shape through that cycle.',
        ],
      },
      {
        h2: 'Print at low temperature',
        body: [
          'Some inks and laminates behave differently at freezer temperatures, and a laminate can lift at the edges over repeated cycles. Where a pack goes in and out of freezing, it is worth confirming the finish is specified for it.',
        ],
      },
    ],
    link: {
      lead: 'For insulated shipping rather than freezer storage, ',
      href: '/product/kraft-insulated-cold-boxes/',
      anchor: 'insulated boxes are specified by hold time',
      tail: '.',
    },
    faqs: [
      { question: 'Why do frozen packs split at the seams?', answer: '<p>Standard carton adhesive becomes brittle below freezing, so a seam sound at room temperature cracks when handled cold. A cold-tolerant adhesive prevents it and has to be specified at quoting.</p>' },
      { question: 'Does the board need treating?', answer: '<p>Yes, for condensation. A pack coming out of a freezer into a warm room collects moisture, and untreated board absorbs it and loses stiffness.</p>' },
      { question: 'Do finishes behave differently when frozen?', answer: '<p>Some do — a laminate can lift at the edges over repeated freeze cycles. Where a pack cycles in and out of freezing it is worth confirming the finish is specified for it.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>Yes, with compliant boards and coatings. Tell us whether contact is direct or through an inner wrap.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your product and case configuration. Send the filled weight and the freezer stack height.</p>' },
      { question: 'Do these stack in a freezer?', answer: '<p>With the right grade, yes. Board strength in a humid freezer is lower than at ambient, so grading against the stack matters more.</p>' },
      { question: 'Are these microwaveable from frozen?', answer: '<p>Only with a suitable coating and construction. Tell us if reheating in the pack is expected because it narrows the options considerably.</p>' },
      { question: 'Can these be printed?', answer: '<p>Yes, with inks specified for the temperature range. Retail frozen packs carry full print; transit cases need far less.</p>' },
      { question: 'Do you supply liners?', answer: '<p>Yes, where direct contact or moisture containment requires one. The liner is specified with the carton.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes for non-contact areas, with the caveat that recycled fiber takes on moisture slightly faster, which matters more in this application.</p>' },
    ],
  },

  'kraft-egg-cartons': {
    intro:
      'An egg carton protects a fragile shell by suspending it rather than surrounding it. That distinction is the whole design.',
    sections: [
      {
        h2: 'Suspension, not cushioning',
        body: [
          'An egg held rigidly against a hard surface breaks on impact. An egg suspended between formed pockets, touching only at points, survives a drop that would break it in a snug rigid box.',
          'That is why molded pulp works so well here — the geometry holds each egg at a few points and absorbs the rest.',
        ],
      },
      {
        h2: 'Size and grading',
        body: [
          'Egg sizes vary meaningfully, and a carton formed for medium eggs bruises large ones at the lid. Where a producer packs mixed grades, the carton has to be formed for the largest.',
        ],
      },
      {
        h2: 'Absorbency is a feature',
        body: [
          'If an egg does break, molded pulp absorbs it rather than letting it run through the whole carton. A plastic or coated carton spreads the mess across every egg in the pack.',
        ],
      },
    ],
    link: {
      lead: 'For other produce needing ventilation and protection, ',
      href: '/product/kraft-fruit-packaging-boxes/',
      anchor: 'fruit packaging covers ventilated formats',
      tail: '.',
    },
    faqs: [
      { question: 'How does an egg carton actually protect the egg?', answer: '<p>By suspending it rather than surrounding it. An egg held rigidly against a hard surface breaks on impact; one suspended between formed pockets, touching at a few points, survives the same drop.</p>' },
      { question: 'Does egg size matter?', answer: '<p>Yes. A carton formed for medium eggs bruises large ones at the lid, so where mixed grades are packed the carton has to be formed for the largest.</p>' },
      { question: 'What happens if an egg breaks in the carton?', answer: '<p>Molded pulp absorbs it rather than letting it run. A coated or plastic carton spreads it across every egg in the pack.</p>' },
      { question: 'What counts do you produce?', answer: '<p>Commonly 6, 10, 12 and 30-cell trays. Tell us the count and the egg grade you pack.</p>' },
      { question: 'Can these be printed?', answer: '<p>Yes, though molded pulp takes print differently from board — coverage is limited and fine detail does not hold. A label is often the better route for detailed information.</p>' },
      { question: 'Are these recyclable?', answer: '<p>Molded pulp is, and it is usually made from recycled paper to begin with, which is part of why it dominates the category.</p>' },
      { question: 'Do they stack?', answer: '<p>Yes, and the formed geometry nests, which is efficient in transit. Send the stack height for pallet work.</p>' },
      { question: 'Can I have a window?', answer: '<p>Some formats allow one, though it works against the absorbency and protection the closed format gives. A printed representation is usually the better compromise.</p>' },
      { question: 'Are board cartons an alternative to pulp?', answer: '<p>They exist and print better, but they protect less well because they cushion rather than suspend. For eggs specifically, pulp is usually the right answer.</p>' },
      { question: 'What information has to appear?', answer: '<p>Grading, best-before and producer details are usually required, and vary by market. Send what applies and we block the area at the outset.</p>' },
    ],
  },

  'kraft-fruit-packaging-boxes': {
    intro:
      'Fresh produce is alive after picking. It respires, gives off moisture and ripens, and packaging either helps or accelerates spoilage.',
    sections: [
      {
        h2: 'Trapped moisture shortens shelf life',
        body: [
          'Fruit releases moisture continuously, and a sealed box traps it against the skin, which is where rot starts. Ventilation is not optional on most produce — it is the main thing the packaging does.',
        ],
      },
      {
        h2: 'Bruising is pressure, not impact',
        body: [
          'Most fruit damage is not a drop, it is the weight of the fruit above it in a stack. Cell trays, layer pads or a shallower box all reduce that load, and they work better than heavier walls.',
        ],
      },
      {
        h2: 'Ethylene and mixed loads',
        body: [
          'Some fruit gives off ethylene and ripens whatever is packed near it. That is a loading decision as much as a packaging one, but ventilation affects how much accumulates.',
        ],
      },
    ],
    link: {
      lead: 'For vegetables, which have different ventilation needs again, ',
      href: '/product/kraft-vegetable-packaging-boxes/',
      anchor: 'vegetable packaging covers those requirements',
      tail: '.',
    },
    faqs: [
      { question: 'Why does fruit spoil faster in a sealed box?', answer: '<p>Fruit releases moisture continuously and a sealed box traps it against the skin, which is where rot starts. Ventilation is the main thing the packaging does.</p>' },
      { question: 'How do I stop bruising?', answer: '<p>Reduce the load rather than strengthen the walls. Most bruising is the weight of fruit above in the stack, so cell trays, layer pads or a shallower box help more.</p>' },
      { question: 'How much ventilation is needed?', answer: '<p>It varies by fruit. Tell us the produce and how long it is stored and we specify the vent pattern against that rather than a default.</p>' },
      { question: 'Do you supply cell trays?', answer: '<p>Yes, in board or molded pulp, specified with the box because they set the internal dimensions and the layer count.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your pack weight or count, and ideally to your pallet pattern so no space is wasted on each layer.</p>' },
      { question: 'Do these stack when full?', answer: '<p>Yes, and the grade follows the stack rather than the weight of one box. Send the stack height, because the bottom box carries the column.</p>' },
      { question: 'Are moisture-resistant grades needed?', answer: '<p>In cold storage, yes. Board absorbs humidity and loses stacking strength, which matters when boxes stand for weeks.</p>' },
      { question: 'Can these be printed?', answer: '<p>Yes, usually flexo. For transit cases, variety, count and origin are what matter rather than full graphics.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>Yes, with compliant grades where fruit touches the board directly, which is usual on unwrapped produce.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, and most produce corrugated already carries high recycled content.</p>' },
    ],
  },

  'kraft-vegetable-packaging-boxes': {
    intro:
      'Vegetables vary enormously in what they need — leaf crops wilt, roots need airflow, and some crops crush under their own stacking weight.',
    sections: [
      {
        h2: 'Leaf, root and fruiting crops differ',
        body: [
          'Leafy crops lose moisture fast and wilt, so they need humidity retained. Root vegetables need airflow to avoid rot. Fruiting vegetables bruise. One box specification cannot serve all three well, which is why the crop matters more than the format.',
        ],
      },
      {
        h2: 'Field heat and cooling',
        body: [
          'Produce packed warm from the field carries heat that has to escape before it accelerates spoilage. Vent placement affects how quickly a stacked pallet cools, and a box that ventilates only at the sides cools far more slowly than one venting through the stack.',
        ],
      },
      {
        h2: 'Wet produce and board strength',
        body: [
          'Washed vegetables put moisture directly into the board, and wet board loses stacking strength quickly. A moisture-resistant grade is usually necessary rather than optional for washed crops.',
        ],
      },
    ],
    faqs: [
      { question: 'Does the crop change the box specification?', answer: '<p>Considerably. Leafy crops need humidity retained, roots need airflow, fruiting vegetables bruise. One specification cannot serve all three well.</p>' },
      { question: 'Where should the vents go?', answer: '<p>Positioned so a stacked pallet cools through the stack rather than only at the sides. Vent placement affects cooling speed more than vent area does.</p>' },
      { question: 'Do washed vegetables need a different board?', answer: '<p>Yes. Washed produce puts moisture directly into the board and wet board loses stacking strength quickly, so a moisture-resistant grade is usually necessary.</p>' },
      { question: 'How do I stop crushing at the bottom of a pallet?', answer: '<p>Grade against the stack rather than the contents, and consider a shallower box. The bottom box carries the whole column for as long as the pallet stands.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your pack weight and pallet pattern. Designing inward from the pallet avoids wasted space on every layer.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>Yes, with compliant grades where produce touches the board directly.</p>' },
      { question: 'Can these be printed?', answer: '<p>Yes, usually flexo direct to the board. Crop, grade, count and origin are what a transit case needs.</p>' },
      { question: 'Do you supply liners or pads?', answer: '<p>Yes, for wet crops and for cushioning. Both are specified with the box because they affect internal dimensions.</p>' },
      { question: 'Are ventilated and solid versions both available?', answer: '<p>Yes. Which is right follows the crop and the storage duration rather than a preference.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, and produce corrugated typically carries high recycled content already.</p>' },
    ],
  },

  'kraft-granola-bar-boxes': {
    intro:
      'A granola bar carton is a multipack outer around individually wrapped bars. It is a shelf and branding format rather than a protective one.',
    sections: [
      {
        h2: 'The wrapper does the preserving',
        body: [
          'Each bar is sealed in its own film, so the carton is not a barrier. Specifying it as though it were is the usual error — the carton carries branding, count and nutrition, and holds the bars together.',
        ],
      },
      {
        h2: 'Count and shelf facing',
        body: [
          'Multipack counts change the carton proportions substantially, and a taller narrower carton faces differently on a shelf than a wide flat one. Where a brand runs several counts, deciding the facing orientation first keeps the range consistent.',
        ],
      },
      {
        h2: 'Nutrition panel space',
        body: [
          'Nutrition and ingredient information takes a large share of a small carton, and it has prescribed minimum sizes. Lay it out first and design around what is left.',
        ],
      },
    ],
    link: {
      lead: 'For loose or bulk snack formats rather than multipacks, ',
      href: '/product/kraft-snack-packaging-boxes/',
      anchor: 'snack packaging covers the other formats',
      tail: '.',
    },
    faqs: [
      { question: 'Does the carton keep the bars fresh?', answer: '<p>No. Each bar is sealed in its own film, which does the preserving. The carton carries branding, count and nutrition and holds the bars together.</p>' },
      { question: 'How does count affect the carton?', answer: '<p>Substantially. A taller narrower carton faces differently on a shelf than a wide flat one, so deciding facing orientation first keeps a multi-count range consistent.</p>' },
      { question: 'How much space does nutrition information need?', answer: '<p>A large share of a small carton, with prescribed minimum sizes. Lay it out first and design around what is left.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your bar dimensions and count. Send a wrapped bar rather than an unwrapped one, since the film adds measurable thickness across a multipack.</p>' },
      { question: 'Can the carton have a window?', answer: '<p>It can, though the bars are individually wrapped so a window shows film rather than product. A printed image usually works better.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>The carton is not usually in direct contact because of the wrappers. Tell us if any bar is unwrapped, since that changes the requirement.</p>' },
      { question: 'Do these stack on shelf?', answer: '<p>Yes, and a flat top stacks better than a tuck that stands proud. Tell us if they are merchandised stacked.</p>' },
      { question: 'Can I run several flavors on one dieline?', answer: '<p>Yes, differentiated by panel color. That is far cheaper than a structural variant per flavor and reads faster on shelf.</p>' },
      { question: 'What board weight is used?', answer: '<p>Light to moderate — there is no real load. The specification follows print quality and shelf presence rather than strength.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes. Since the carton is not the barrier, recycled stock is straightforward here.</p>' },
    ],
  },

  'kraft-snack-packaging-boxes': {
    intro:
      'Snack packaging spans a wide range, and the deciding question is whether the box is the barrier or a carton around something that is.',
    sections: [
      {
        h2: 'Barrier or carton',
        body: [
          'If the snack sits loose in the box, the box has to keep moisture and air out, which usually means a lined or coated construction. If it is inside a sealed bag, the carton is doing shelf presence and nothing more, and can be specified far more cheaply.',
          'Answering that first avoids both over-specifying and under-specifying.',
        ],
      },
      {
        h2: 'Crisp products and humidity',
        body: [
          'Anything crisp loses its texture to moisture, and board is not a moisture barrier at any weight. Where the snack is loose in a carton, an inner bag or a coated liner is doing the actual work.',
        ],
      },
      {
        h2: 'Portion and count',
        body: [
          'Snack cartons are frequently sold in multipacks and single portions from the same brand. Keeping one board and print system across both, with only the dieline changing, is what makes the range read as one thing.',
        ],
      },
    ],
    faqs: [
      { question: 'Does the box need to be a barrier?', answer: '<p>Only if the snack sits loose in it. Inside a sealed bag the carton is doing shelf presence and can be specified far more cheaply. Answering that first avoids over- and under-specifying.</p>' },
      { question: 'Will a carton keep crisps crisp?', answer: '<p>Not on its own — board is not a moisture barrier at any weight. Where the snack is loose, an inner bag or coated liner does the work.</p>' },
      { question: 'Can one design cover portions and multipacks?', answer: '<p>Yes, with one board and print system and only the dieline changing. That is what makes a range read as one thing across formats.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your portion or count. Send a filled sample, since loose snacks settle and change the fill height.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>Where the snack touches the board directly, yes, with compliant boards and inks. Tell us the contact type.</p>' },
      { question: 'Can I have a window?', answer: '<p>Yes, and it suits snacks with visual appeal. It also lets light in, which affects some products over shelf life.</p>' },
      { question: 'How much space does nutrition information need?', answer: '<p>More than most designs allow. It has prescribed minimum sizes, so it is blocked into the dieline before artwork begins.</p>' },
      { question: 'Do these stack on shelf?', answer: '<p>Yes with a flat top. Send the merchandising arrangement so we specify the board against it.</p>' },
      { question: 'Can flavors share one dieline?', answer: '<p>Yes, differentiated by panel color, which is cheaper and reads faster on shelf than a structural variant.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes where the carton is not the direct contact surface. With an inner bag, recycled stock is straightforward.</p>' },
    ],
  },

  'kraft-popcorn-packaging-boxes': {
    intro:
      'Popcorn is light, bulky and greasy. The box is large for the weight and it marks quickly.',
    sections: [
      {
        h2: 'Volume, not weight',
        body: [
          'Popcorn fills a large volume for very little weight, so these boxes are big and structurally under-loaded. The board is specified for the panel span and for handling rather than for the contents.',
        ],
      },
      {
        h2: 'Butter and salt come through',
        body: [
          'Buttered popcorn marks untreated board quickly, and a greasy box in a customer\'s hand is the visible failure. A grease-resistant grade prevents it inexpensively.',
        ],
      },
      {
        h2: 'Open tubs and closed cartons',
        body: [
          'An open tub suits immediate consumption at a cinema or event; a closed carton suits retail and takeaway. They are different formats with different structures, and the choice follows where the popcorn is eaten.',
        ],
      },
    ],
    faqs: [
      { question: 'What decides the board on a popcorn box?', answer: '<p>Panel span and handling rather than the contents. Popcorn fills a large volume for very little weight, so these boxes are big and structurally under-loaded.</p>' },
      { question: 'Will butter mark the box?', answer: '<p>Quickly, on untreated board. A grease-resistant grade prevents it inexpensively, and a greasy box in a customer\'s hand is the visible failure.</p>' },
      { question: 'Tub or carton?', answer: '<p>An open tub suits immediate consumption at a cinema or event; a closed carton suits retail and takeaway. The choice follows where the popcorn is eaten.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your serving volumes. Send the volume rather than dimensions, since popcorn is sold by fill rather than by weight.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>Yes, with compliant boards and inks. Popcorn is direct contact throughout.</p>' },
      { question: 'Can they be printed?', answer: '<p>Yes, and the large panel area suits it. One or two colors on kraft keeps the cost per unit sensible at event volumes.</p>' },
      { question: 'Do they stack for storage?', answer: '<p>Nested empty, yes, which is efficient. Filled they do not stack, which is worth allowing for at a service counter.</p>' },
      { question: 'Are these suitable for pre-packed retail?', answer: '<p>With a closed carton and an inner bag, yes. Loose popcorn in a carton alone goes stale quickly.</p>' },
      { question: 'Can these be produced for events?', answer: '<p>Yes, and short runs suit digital print, which makes event-specific branding affordable.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>For non-direct contact, yes. Direct contact needs a compliant grease-resistant grade.</p>' },
    ],
  },

  'kraft-juice-bottle-carriers': {
    intro:
      'A bottle carrier holds glass or plastic bottles upright while someone carries them by hand. The handle and the dividers do all the work.',
    sections: [
      {
        h2: 'The handle carries real weight',
        body: [
          'Filled bottles are heavy, and all of that load runs through the handle area. That is where carriers fail — the board tears from the handle aperture outward, usually while someone is walking.',
          'Reinforcement around the handle matters far more than board weight across the whole carrier.',
        ],
      },
      {
        h2: 'Dividers stop glass touching glass',
        body: [
          'Bottles knocking together chip and, occasionally, break. A divider between each keeps them apart, and it also stops the carrier collapsing inward when partly emptied.',
        ],
      },
      {
        h2: 'Condensation from chilled bottles',
        body: [
          'Bottles taken from a chiller sweat, and that moisture goes straight into the carrier. Untreated board softens exactly where the handle load concentrates, which is the worst possible combination.',
        ],
      },
    ],
    link: {
      lead: 'For milk and dairy bottles with the same handling problem, ',
      href: '/product/kraft-milk-bottle-carriers/',
      anchor: 'milk bottle carriers cover those formats',
      tail: '.',
    },
    faqs: [
      { question: 'Why do carriers tear at the handle?', answer: '<p>All the load of filled bottles runs through the handle area, and the board tears from the aperture outward. Reinforcement there matters far more than board weight across the whole carrier.</p>' },
      { question: 'Do I need dividers?', answer: '<p>For glass, yes. Bottles knocking together chip and occasionally break, and dividers also stop the carrier collapsing inward when partly emptied.</p>' },
      { question: 'What about condensation from chilled bottles?', answer: '<p>It goes straight into the board and softens it exactly where the handle load concentrates. A moisture-resistant grade is worth specifying for chilled use.</p>' },
      { question: 'How many bottles can a carrier hold?', answer: '<p>Commonly 2, 4 or 6. Send the bottle dimensions and the filled weight, since weight rather than count decides the specification.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your bottle diameter and height, including any cap or handle on the bottle itself.</p>' },
      { question: 'Are these food-contact compliant?', answer: '<p>The carrier does not usually contact the drink, but tell us if any part does and we specify accordingly.</p>' },
      { question: 'Can they be printed?', answer: '<p>Yes, and a carrier carried through a street is effective advertising. Both faces are seen.</p>' },
      { question: 'Do they ship flat?', answer: '<p>Yes, and erect on your line, which keeps freight proportionate to the board rather than the assembled shape.</p>' },
      { question: 'Can these hold different bottle sizes?', answer: '<p>Within a narrow range. Beyond that the bottles move and knock, which defeats the dividers.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, with a caliper step-up around the handle where the load concentrates.</p>' },
    ],
  },

  'kraft-milk-bottle-carriers': {
    intro:
      'Milk bottles are heavier than most drinks bottles and almost always chilled, which makes weight and condensation the two constraints.',
    sections: [
      {
        h2: 'Heavier than they look',
        body: [
          'A carrier of milk bottles is one of the heaviest things a paper handle carries. The handle reinforcement and the base both have to be specified against the filled weight rather than against the carrier size.',
        ],
      },
      {
        h2: 'Chilled means wet',
        body: [
          'Milk is stored cold and the bottles sweat as soon as they leave the chiller. Untreated board takes that moisture up and weakens, and it weakens fastest at the handle where the load is.',
          'A moisture-resistant grade is not optional for chilled dairy carriers in the way it might be elsewhere.',
        ],
      },
      {
        h2: 'The base under a heavy load',
        body: [
          'With bottles standing directly on it, the base carries everything. A folded or single-seam base opens under a full carrier; a reinforced base does not.',
        ],
      },
    ],
    faqs: [
      { question: 'Why do milk carriers fail more than other carriers?', answer: '<p>They are heavier and almost always chilled, so a wet handle carries the largest load. Both the handle reinforcement and the base have to be specified against the filled weight.</p>' },
      { question: 'Is a moisture-resistant board necessary?', answer: '<p>For chilled dairy, effectively yes. Bottles sweat as soon as they leave the chiller and untreated board weakens fastest exactly where the load is.</p>' },
      { question: 'What about the base?', answer: '<p>With bottles standing directly on it the base carries everything. A single-seam base opens under a full carrier; a reinforced base does not.</p>' },
      { question: 'How many bottles per carrier?', answer: '<p>Commonly 2, 4 or 6. Send the filled weight rather than the count, since weight decides the specification.</p>' },
      { question: 'What sizes do you produce?', answer: '<p>Cut to your bottle diameter and height including the cap. Send the actual bottle if you can.</p>' },
      { question: 'Do you supply dividers?', answer: '<p>Yes, and for glass they are worth having. They also stop the carrier collapsing inward when partly emptied.</p>' },
      { question: 'Can these be printed?', answer: '<p>Yes, and a carrier carried home is effective advertising. One or two colors on kraft suits the category.</p>' },
      { question: 'Do they ship flat?', answer: '<p>Yes, and erect on your line, keeping freight proportionate to the board.</p>' },
      { question: 'Are these suitable for doorstep delivery?', answer: '<p>With a moisture-resistant grade, yes, though a carrier left outside in rain will eventually soften whatever the treatment.</p>' },
      { question: 'Are recycled boards available?', answer: '<p>Yes, with a caliper step-up given the load and moisture exposure.</p>' },
    ],
  },
}
