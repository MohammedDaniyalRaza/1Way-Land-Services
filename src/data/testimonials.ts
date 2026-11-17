// SAMPLE REVIEWS: replace with real reviews before launch.

export interface TestimonialItem {
  id: string;
  name: string;
  town: string;
  serviceSlug: string;
  serviceTitle: string;
  propertyType: string;
  quote: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Travis M.',
    town: 'Pell City',
    serviceSlug: 'land-clearing',
    serviceTitle: 'Land Clearing',
    propertyType: '3-Acre Homesite',
    quote:
      'We bought three overgrown acres off the highway and could barely walk twenty feet into the pines. 1Way walked the lines with us, saved the big oaks we wanted, and opened the whole place up cleanly.',
  },
  {
    id: 't2',
    name: 'Karen & Dale H.',
    town: 'Cropwell',
    serviceSlug: 'lot-clearing',
    serviceTitle: 'Lot Clearing',
    propertyType: 'Logan Martin Lake Lot',
    quote:
      'Our lake lot had thick brush blocking the water view and tight neighbor boundaries. They cleared right up to our stakes without touching a single shoreline pine we asked to keep.',
  },
  {
    id: 't3',
    name: 'Brandon W.',
    town: 'Moody',
    serviceSlug: 'site-preparation',
    serviceTitle: 'Site Preparation',
    propertyType: 'Shop Pad & Driveway',
    quote:
      'Needed a level pad for a metal shop and a gravel entrance off the road. Everything drained right through the next heavy rain and the concrete crew drove straight in with no trouble.',
  },
  {
    id: 't4',
    name: 'Shelly R.',
    town: 'Leeds',
    serviceSlug: 'dirt-work',
    serviceTitle: 'Dirt Work',
    propertyType: 'Residential Yard',
    quote:
      'Water used to pool right beside our back patio every storm. They re-graded the backyard, shaped a clean swale toward the woods, and smoothed it out so mowing is effortless now.',
  },
  {
    id: 't5',
    name: 'Greg P.',
    town: 'Lincoln',
    serviceSlug: 'tree-brush-removal',
    serviceTitle: 'Tree & Brush Removal',
    propertyType: 'Fence Line & Woodline',
    quote:
      'Sweetgum and briars had swallowed half our back pasture fence. Straightforward estimate, showed up ready to work, and cleared the whole line back clean.',
  },
  {
    id: 't6',
    name: 'Melissa T.',
    town: 'Oxford',
    serviceSlug: 'hauling-service',
    serviceTitle: 'Hauling Service',
    propertyType: 'Residential Property',
    quote:
      'We had two huge brush and limb piles sitting since spring storm damage. They loaded everything out, swept the driveway area clean, and left zero mess behind.',
  },
  {
    id: 't7',
    name: 'Caleb D.',
    town: 'Riverside',
    serviceSlug: 'landscaping',
    serviceTitle: 'Landscaping',
    propertyType: 'New Construction Yard',
    quote:
      'Right after our home wrap-up they handled the final topsoil dress, fresh sod around the porch, and clean pine-straw beds. Made the whole place feel finished overnight.',
  },
  {
    id: 't8',
    name: 'Wayne S.',
    town: 'Springville',
    serviceSlug: 'land-clearing',
    serviceTitle: 'Land Clearing',
    propertyType: 'Pasture Reclamation',
    quote:
      'No sales runaround—just honest talk about what needed clearing and what could stay. Turned six choked acres back into ground we can actually bush-hog and fence.',
  },
  {
    id: 't9',
    name: 'Hannah B.',
    town: 'Birmingham',
    serviceSlug: 'lot-clearing',
    serviceTitle: 'Lot Clearing',
    propertyType: 'Infill Residential Lot',
    quote:
      'Tight neighborhood lot with utilities on both sides. They kept everything neat, hauled every limb off site, and made the whole clearing process stress-free.',
  },
  {
    id: 't10',
    name: 'Derek L.',
    town: 'Odenville',
    serviceSlug: 'dirt-work',
    serviceTitle: 'Dirt Work',
    propertyType: 'Driveway & Drainage',
    quote:
      'Our gravel drive washed out every summer down the hill. After they cut proper ditches and crowned the grade, it held solid through back-to-back storms.',
  },
];
