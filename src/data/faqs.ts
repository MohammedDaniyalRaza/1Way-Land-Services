export type FaqCategory =
  | 'Clearing & Brush'
  | 'Dirt Work & Site Prep'
  | 'Estimates & Scheduling'
  | 'Service Area'
  | 'Before You Start';

export interface FaqItem {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  'Clearing & Brush',
  'Dirt Work & Site Prep',
  'Estimates & Scheduling',
  'Service Area',
  'Before You Start',
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Estimates & Scheduling',
    question: 'How do free estimates work?',
    answer:
      'Give us a call at (205) 767-9322 or send your property details through our estimate form. We look at the ground in person—or review your lot details first—so you get a straightforward scope based on actual terrain, access, and debris volume.',
  },
  {
    id: 'faq-2',
    category: 'Estimates & Scheduling',
    question: 'Do I need to be on site when you walk the property?',
    answer:
      'Meeting in person is ideal whenever possible so you can point out keeper trees, property corners, and future house or shop locations. If you live out of town or cannot meet during the day, marked flags and a phone walk-through work well too.',
  },
  {
    id: 'faq-3',
    category: 'Estimates & Scheduling',
    question: 'Why do you not list flat per-acre prices online?',
    answer:
      'Two one-acre lots in Alabama can be completely different jobs. Thin pine saplings on flat ground take far less work than thick hardwood undergrowth on a steep lakefront slope with full haul-off. Walking the lot ensures an honest price with no surprises.',
  },
  {
    id: 'faq-4',
    category: 'Clearing & Brush',
    question: 'What is the difference between land clearing and lot clearing?',
    answer:
      'Land clearing usually applies to larger tracts, pastures, trails, and multi-acre properties. Lot clearing focuses on tighter residential parcels and Logan Martin Lake lots where neighbor setbacks, utilities, and selective shade trees need close attention.',
  },
  {
    id: 'faq-5',
    category: 'Clearing & Brush',
    question: 'Do you haul away cleared brush, stumps, and logs?',
    answer:
      'Yes. Depending on your parcel and local ordinances, we can mulch undergrowth on site, neatly consolidate brush where burning is permitted, or load and haul all cleared debris off the property.',
  },
  {
    id: 'faq-6',
    category: 'Clearing & Brush',
    question: 'What is the difference between brush removal and full tree removal?',
    answer:
      'Brush removal clears undergrowth, briars, privet, vines, and small saplings while preserving mature canopy trees. Full clearing removes designated trees and stumps within your build footprint or pasture zone.',
  },
  {
    id: 'faq-7',
    category: 'Clearing & Brush',
    question: 'Can you save specific shade trees or privacy buffers?',
    answer:
      'Yes. Before clearing begins, we walk the property with you to flag mature hardwoods, pines, or edge buffers you want left standing and protect their root zones.',
  },
  {
    id: 'faq-8',
    category: 'Dirt Work & Site Prep',
    question: 'What does basic site preparation include before building?',
    answer:
      'Typical site prep includes clearing the footprint, stripping soft topsoil and roots, cutting and compacting a level building pad, roughing in a driveway entrance, and shaping ditches or swales for runoff.',
  },
  {
    id: 'faq-9',
    category: 'Dirt Work & Site Prep',
    question: 'Can grading and dirt work fix standing water in my yard?',
    answer:
      'In many residential yards, standing water happens because soil pitches back toward the house or lacks an outlet swale. Re-grading slopes and cutting clean drainage paths redirects rainwater away from structures.',
  },
  {
    id: 'faq-10',
    category: 'Dirt Work & Site Prep',
    question: 'Should I get my driveway rough-in done at the same time as lot clearing?',
    answer:
      'Yes, whenever possible. Having a solid access path and culvert in place helps concrete trucks, lumber deliveries, and trades reach the pad cleanly without tearing up the yard.',
  },
  {
    id: 'faq-11',
    category: 'Dirt Work & Site Prep',
    question: 'Do you handle final yard shaping and landscaping after grading?',
    answer:
      'Yes. We can take a property from rough clearing and dirt work all the way through finish grading, topsoil dressing, sod or seed prep, mulch beds, and curb-appeal cleanup.',
  },
  {
    id: 'faq-12',
    category: 'Before You Start',
    question: 'Do I need permits before clearing or grading a lot?',
    answer:
      'Permitting rules vary between city limits, county roads, HOAs, and shoreline zones around Logan Martin Lake. Always check local city, county, or lake-authority requirements before work begins—especially for shoreline clearing, culverts, or burning.',
  },
  {
    id: 'faq-13',
    category: 'Before You Start',
    question: 'How should I prepare my property before you arrive?',
    answer:
      'Have property corners or boundaries clearly flagged, mark any septic tanks, field lines, or private water lines, and let us know where gates or low overhead lines sit.',
  },
  {
    id: 'faq-14',
    category: 'Before You Start',
    question: 'What kind of access does equipment need to get onto the lot?',
    answer:
      'Most residential gates and standard driveway openings work fine for compact loaders and excavators, while haul trucks and trailers need clear overhead branches and enough width to turn safely.',
  },
  {
    id: 'faq-15',
    category: 'Before You Start',
    question: 'Are there special considerations for Logan Martin Lake lots?',
    answer:
      'Lakefront lots often have steeper slopes toward the water, tight side setbacks, and shoreline vegetation rules. Selective clearing and early erosion/drainage control help open your view while protecting the bank.',
  },
  {
    id: 'faq-16',
    category: 'Service Area',
    question: 'What areas do you serve outside Pell City?',
    answer:
      'We are based in Pell City, Alabama and serve the full Logan Martin Lake area plus towns along the I-20 corridor from Birmingham to Oxford—including Leeds, Moody, Odenville, Springville, Cropwell, Lincoln, Talladega, and Anniston.',
  },
  {
    id: 'faq-17',
    category: 'Service Area',
    question: 'Do you work on both small residential yards and multi-acre tracts?',
    answer:
      'Yes. Whether you have a half-acre neighborhood lot that needs brush cleared and hauled or multi-acre wooded land that needs opening up and grading, give us a call.',
  },
  {
    id: 'faq-18',
    category: 'Service Area',
    question: 'What if my property is just outside the towns listed on your site?',
    answer:
      'Call (205) 767-9322 and tell us where your land is located. If you are near St. Clair, Talladega, Calhoun, or eastern Jefferson County, we are glad to talk through your project.',
  },
];
