import { ImageKey } from './images';

export interface ProcessStep {
  step: string;
  title: string;
  detail: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  code: string;
  phase: string;
  title: string;
  shortTitle: string;
  shortBlurb: string;
  overview: string;
  whoItsFor: string[];
  whatsIncluded: string[];
  typicalProjects: string[];
  processSteps: ProcessStep[];
  faqs: ServiceFaq[];
  heroImageKey: ImageKey;
  secondaryImageKey: ImageKey;
  relatedSlugs: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    slug: 'land-clearing',
    code: '01',
    phase: '01 Clear',
    title: 'Land Clearing',
    shortTitle: 'Land Clearing',
    shortBlurb:
      'Open up raw acreage, thick pine stands, and overgrown tracts so you can walk, fence, farm, or build on your property.',
    overview:
      'Raw Alabama ground fills in fast with pines, sweetgum, briars, and deadfall. Land clearing takes an overgrown or wooded tract and turns it into clean, usable acreage while keeping the trees, buffers, and boundary lines you want to save.',
    whoItsFor: [
      'Homeowners opening up newly purchased wooded acreage',
      'Farmers and landowners reclaiming overgrown pasture or fence lines',
      'Builders and developers preparing multi-acre tracts for layout',
      'Property owners improving hunting lanes, trails, and boundary access',
    ],
    whatsIncluded: [
      'Walk-through of property lines, keep-trees, and low spots before starting',
      'Selective clearing or full-tract clearing matched to your end goal',
      'Clearing of saplings, scrub brush, vines, and downed timber',
      'Debris consolidation, burning prep where permitted, or haul-off coordination',
      'Rough ground cleanup so the tract is ready for grading or seeding',
    ],
    typicalProjects: [
      'Multi-acre homesite tracts off I-20 between Pell City and Lincoln',
      'Overgrown rural pasture restoration near Springville and Odenville',
      'Perimeter fence-line clearing and interior access roads',
      'Wooded acreage opened up for future barns, shops, or homesteads',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Walk the Ground',
        detail:
          'We meet on site, look at access points, slopes, wet areas, and mark which hardwood or pine stands stay.',
      },
      {
        step: '02',
        title: 'Open Access & Clear',
        detail:
          'We cut primary lanes first, then systematically clear scrub, undergrowth, and unwanted timber across the marked zone.',
      },
      {
        step: '03',
        title: 'Clean & Stack or Haul',
        detail:
          'Cleared brush, stumps, and limbs are piled cleanly or hauled off site depending on your site plan.',
      },
      {
        step: '04',
        title: 'Leave Ready Ground',
        detail:
          'The ground is raked clean and left ready for soil prep, fencing, pasture work, or building pad grading.',
      },
    ],
    faqs: [
      {
        question: 'Can you keep specific mature trees while clearing everything else?',
        answer:
          'Yes. During our on-site walk-through we mark the mature oaks, pines, or privacy buffers you want protected and clear cleanly around them.',
      },
      {
        question: 'What is the difference between land clearing and lot clearing?',
        answer:
          'Land clearing typically covers larger acreage, pastures, trails, and multi-acre tracts, while lot clearing focuses on tighter residential or lakefront building lots near neighbors and utilities.',
      },
      {
        question: 'Do I need to have property lines staked before you clear?',
        answer:
          'Clear boundary stakes or survey flags are always best when working near neighboring property. If lines are uncertain, we recommend confirming pins before clearing up to the edge.',
      },
    ],
    heroImageKey: 'heroClearing',
    secondaryImageKey: 'overgrownBefore',
    relatedSlugs: ['tree-brush-removal', 'lot-clearing', 'hauling-service'],
  },
  {
    slug: 'tree-brush-removal',
    code: '02',
    phase: '01 Clear',
    title: 'Tree & Brush Removal',
    shortTitle: 'Tree / Brush Removal',
    shortBlurb:
      'Clear choked undergrowth, deadfalls, storm debris, and unwanted trees from yards, fencelines, and wooded edges.',
    overview:
      'Thick sweetgum shoots, kudzu, privet, briars, and leaning pines eat up usable yard and fence space quickly. We cut, clear, and mulch unwanted brush and trees so your property breathes again and stays manageable.',
    whoItsFor: [
      'Homeowners reclaiming backyards and tree lines overtaken by brush',
      'Lake-area owners opening sightlines without stripping the whole lot',
      'Pasture and barn owners clearing encroaching fence-row growth',
      'Property owners cleaning up fallen trees and storm tangles',
    ],
    whatsIncluded: [
      'Undergrowth, briar, privet, and sapling removal',
      'Selective tree cutting and limb cleanup in clearable areas',
      'Brush reduction and root-level clearing where ground needs to stay smooth',
      'Clean edge work along driveways, ditches, and existing fences',
    ],
    typicalProjects: [
      'Woodline push-backs around Pell City and Moody homes',
      'Storm-damaged limb and downed pine cleanup after heavy weather',
      'Underbrush clearing to create clean park-like pine stands',
      'Overgrown creek bank and ditch edge maintenance',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Identify Keepers vs. Brush',
        detail:
          'We flag the healthy shade trees to preserve and map out the brush, deadfall, and encroaching growth to remove.',
      },
      {
        step: '02',
        title: 'Cut & Clear Undergrowth',
        detail:
          'Dense briars, saplings, and small trees are cleared cleanly down to ground level without tearing up healthy tree roots.',
      },
      {
        step: '03',
        title: 'Process or Remove Debris',
        detail:
          'Woody debris is mulched, stacked cleanly, or loaded onto trailers for haul-off based on what works best for your yard.',
      },
    ],
    faqs: [
      {
        question: 'Can you remove brush without tearing up the good trees around it?',
        answer:
          'Yes. Selective undergrowth clearing opens up the floor beneath mature pines and hardwoods so you keep your canopy and shade.',
      },
      {
        question: 'Do you handle both small yards and larger wooded edges?',
        answer:
          'Yes. We work on residential backyards, long driveway borders, fence rows, and multi-acre woodlines.',
      },
      {
        question: 'What happens to the brush once it is cut?',
        answer:
          'Depending on your preference and property space, we can mulch brush on site, stack it cleanly in an approved burn area, or haul it away.',
      },
    ],
    heroImageKey: 'brushMulching',
    secondaryImageKey: 'overgrownBefore',
    relatedSlugs: ['land-clearing', 'hauling-service', 'landscaping'],
  },
  {
    slug: 'dirt-work',
    code: '03',
    phase: '02 Grade & Dirt',
    title: 'Dirt Work',
    shortTitle: 'Dirt Work',
    shortBlurb:
      'Rough and finish grading, cut-and-fill earthmoving, drainage swales, and smoothing rutted or uneven Alabama red clay.',
    overview:
      'Water follows grade—and poorly shaped dirt causes headaches long after the build is done. We move, cut, fill, and shape soil so driveways hold up, yards drain away from foundations, and uneven ground turns level and usable.',
    whoItsFor: [
      'Homeowners dealing with standing water, washed ruts, or sloped yards',
      'Builders needing reliable rough grading and backfill around foundations',
      'Shop, barn, and outbuilding owners leveling uneven clay ground',
      'Rural landowners shaping farm roads, swales, and pad extensions',
    ],
    whatsIncluded: [
      'Rough grading and cut-and-fill balancing across sloped ground',
      'Finish grading to smooth ruts, low pockets, and rough transitions',
      'Drainage swale shaping and ditch cleanouts to steer runoff away',
      'Backfilling around slabs, retaining edges, and utility trenches',
      'Topsoil respreading and soil dressing ready for seed or sod',
    ],
    typicalProjects: [
      'Fixing backyard ponding and water runoff toward crawlspaces',
      'Leveling ground for metal shops, pole barns, and carports',
      'Reshaping washed-out gravel and dirt driveways',
      'Smoothing rough cleared lots into mowable lawns',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Read the Slope & Water Path',
        detail:
          'We check high points, low pockets, and where rainwater naturally runs so every cut works with your terrain.',
      },
      {
        step: '02',
        title: 'Cut, Fill & Shape',
        detail:
          'Soil is moved from high spots into low zones in compacted lifts, building stable elevation where you need it.',
      },
      {
        step: '03',
        title: 'Drainage & Finish Pass',
        detail:
          'Swales, ditches, and crowns are tuned and smoothed cleanly so surface water drains cleanly without washing out.',
      },
    ],
    faqs: [
      {
        question: 'Can dirt work fix water pooling near my house or shop?',
        answer:
          'Most yard drainage issues come down to negative grade or blocked swales. Re-shaping the slope and cutting clean drainage paths away from structures helps redirect surface runoff effectively.',
      },
      {
        question: 'Do you bring in fill dirt or work with dirt on site?',
        answer:
          'We evaluate on site whether existing high ground can be cut and balanced or if additional fill dirt, chert, or gravel needs to be hauled in.',
      },
      {
        question: 'Will my yard be ready to seed or sod after finish grading?',
        answer:
          'Yes. Our finish grading leaves the surface smooth, clear of large clods and surface roots, and pitched properly for seed, straw, or sod.',
      },
    ],
    heroImageKey: 'dirtGrading',
    secondaryImageKey: 'sitePrepDrive',
    relatedSlugs: ['site-preparation', 'landscaping', 'hauling-service'],
  },
  {
    slug: 'site-preparation',
    code: '04',
    phase: '03 Prep the Site',
    title: 'Site Preparation',
    shortTitle: 'Site Preparation',
    shortBlurb:
      'Complete homesite, shop pad, driveway cut, culvert, and construction-access prep so builders can roll in cleanly.',
    overview:
      'A smooth build starts long before concrete trucks show up. Site preparation ties clearing, rough earthwork, pad compaction, driveway access, and drainage together so your builder or concrete crew steps onto clean, solid ground.',
    whoItsFor: [
      'Custom homebuilders and owner-builders prepping new house sites',
      'Homeowners adding detached garages, barndominiums, or shops',
      'Commercial lot owners prepping small pads and gravel laydown areas',
      'Lakefront buyers getting sloped waterfront parcels build-ready',
    ],
    whatsIncluded: [
      'Building pad footprint clearing and organic topsoil stripping',
      'Cut-and-fill pad leveling and layered compaction',
      'Construction driveway rough-in and stone base placement',
      'Drainage ditching and driveway culvert installation where needed',
      'Coordination around utility access paths and silt-control basics',
    ],
    typicalProjects: [
      'New residential home pads in Pell City, Moody, and Leeds',
      'Shop and barndominium pads on 1-to-10-acre rural tracts',
      'Gravel access drives with galvanized culverts off county roads',
      'Sloped lake-lot pad preparation along Logan Martin Lake',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Layout & Access Plan',
        detail:
          'We review your house or shop placement, driveway entry, and setback flags before any dirt moves.',
      },
      {
        step: '02',
        title: 'Clear & Strip Organic Layer',
        detail:
          'Roots, stumps, and soft organic topsoil are removed from the building footprint so the pad sits on firm mineral soil.',
      },
      {
        step: '03',
        title: 'Build Pad, Drive & Drainage',
        detail:
          'We establish the drive, install drainage culverts as needed, and shape and compact the building pad to rough elevation.',
      },
      {
        step: '04',
        title: 'Ready for Footings',
        detail:
          'You get solid equipment access, clear drainage around the pad, and a clean workspace for your foundation crew.',
      },
    ],
    faqs: [
      {
        question: 'How early should I call before my builder starts?',
        answer:
          'Reach out as soon as you have your rough house or shop placement and lot access plan. Getting the pad and gravel drive in early keeps concrete and framing deliveries from getting stuck.',
      },
      {
        question: 'Who handles permits for site prep or culverts?',
        answer:
          'Permit and county road-access rules vary by city, county, and HOA. We recommend checking local municipal or county requirements before work begins, and we can walk you through what to ask.',
      },
      {
        question: 'Can you prep both the driveway and the house pad together?',
        answer:
          'Yes—doing the driveway rough-in, culvert, and building pad together is usually the cleanest and most practical sequence.',
      },
    ],
    heroImageKey: 'sitePrepDrive',
    secondaryImageKey: 'dirtGrading',
    relatedSlugs: ['dirt-work', 'lot-clearing', 'land-clearing'],
  },
  {
    slug: 'landscaping',
    code: '05',
    phase: '04 Finish',
    title: 'Landscaping',
    shortTitle: 'Landscaping',
    shortBlurb:
      'Turn freshly graded dirt into a clean, finished property with final soil prep, turf, beds, pine straw, and curb appeal.',
    overview:
      'Once the heavy clearing and dirt work are done, raw clay still needs finishing touches to hold soil in place and look sharp. Our landscaping work handles the final grading, turf prep, mulch or pine straw beds, edging, and clean exterior finish.',
    whoItsFor: [
      'Homeowners finishing yards right after new construction or site work',
      'Lake-home owners refreshing eroded shorelines and slope plantings',
      'Homeowners upgrading front-yard beds, gravel borders, and turf',
      'Property owners needing clean, low-maintenance Southern curb appeal',
    ],
    whatsIncluded: [
      'Final topsoil dressing, raking, and seedbed or sod preparation',
      'Sod installation, seeding, and erosion-control strawing on slopes',
      'Mulch, pine straw, and decorative rock bed installation',
      'Clean stone edging, border shaping, and gravel driveway touch-ups',
    ],
    typicalProjects: [
      'Post-build residential lawn and bed installations around Pell City',
      'Pine straw and mulch refreshes for wooded Alabama homesites',
      'Slope stabilization and turf establishment on newly graded yards',
      'Gravel drive borders and clean front-entry bed shaping',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Finish Soil & Bed Layout',
        detail:
          'We verify slope away from the house and outline clean, practical lawn and planting bed shapes.',
      },
      {
        step: '02',
        title: 'Prep Turf & Borders',
        detail:
          'Topsoil is raked smooth, stones and roots are cleared, and edging or gravel borders are set.',
      },
      {
        step: '03',
        title: 'Install Sod, Seed & Mulch',
        detail:
          'Fresh turf or seed and mulch or pine straw go down cleanly so soil stays anchored against Alabama rain.',
      },
    ],
    faqs: [
      {
        question: 'Do you do landscaping on its own or only after land clearing?',
        answer:
          'Both. Many clients use us straight through from clearing to final yard prep, while others call us purely for yard reshaping, sod prep, beds, and refresh work.',
      },
      {
        question: 'Should we grade before laying sod or seeding?',
        answer:
          'Yes. Fixing drainage and smoothing ruts first prevents standing water and makes mowing far easier later.',
      },
      {
        question: 'Can you help stabilize a newly cleared slope from washing?',
        answer:
          'Yes. Combining proper surface swales with prompt seeding, straw, or sod keeps red clay in place during heavy rain.',
      },
    ],
    heroImageKey: 'finishedLandscaping',
    secondaryImageKey: 'dirtGrading',
    relatedSlugs: ['dirt-work', 'lot-clearing', 'hauling-service'],
  },
  {
    slug: 'lot-clearing',
    code: '06',
    phase: '01 Clear',
    title: 'Lot Clearing',
    shortTitle: 'Lot Clearing',
    shortBlurb:
      'Precision clearing for residential and Logan Martin Lake lots—working safely around neighbors, lines, and keeper trees.',
    overview:
      'Neighborhood and lakefront lots demand tighter control than wide-open acreage. We clear building footprints, driveways, and view corridors with care around property boundaries, neighboring homes, septic areas, and mature shade trees.',
    whoItsFor: [
      'Logan Martin Lake lot owners prepping for custom homes or cabins',
      'Subdivision lot buyers clearing tight residential parcels',
      'Infill builders needing clean, neighbor-friendly lot prep',
      'Owners clearing second lots next to existing homes',
    ],
    whatsIncluded: [
      'Careful clearing within marked lot boundaries and setbacks',
      'Selective tree preservation for shade, privacy, and lake views',
      'Stump, root, and brush removal within the active build zone',
      'Clean hauling so debris never piles up on neighboring parcels',
    ],
    typicalProjects: [
      'Waterfront lots in Cropwell, Riverside, and Pell City',
      'Tight residential lots in Leeds, Moody, and Oxford neighborhoods',
      'Side-lot clearing to add detached garages or RV parking pads',
      'Overgrown subdivision lots cleaned up for resale or build layout',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Confirm Pins, Utilities & View Lines',
        detail:
          'We verify lot corners, mark any underground utility flags, and walk view corridors with you.',
      },
      {
        step: '02',
        title: 'Selective Clearing',
        detail:
          'Unwanted brush, undergrowth, and trees inside the build zone are removed cleanly while guarding keeper trees.',
      },
      {
        step: '03',
        title: 'Stump & Debris Removal',
        detail:
          'Root balls in the pad footprint are pulled and brush is hauled off so the lot looks neat from the street.',
      },
    ],
    faqs: [
      {
        question: 'Do lakefront lots around Logan Martin have special rules?',
        answer:
          'Shoreline buffers, setbacks, and HOA rules can apply around Logan Martin Lake. Always check local county, lake-authority, or HOA requirements first, and we will work strictly within your approved boundaries.',
      },
      {
        question: 'Can you clear a narrow residential lot without damaging neighbor yards?',
        answer:
          'Yes. We plan equipment entry and debris loading inside your lot lines and keep staging tidy.',
      },
      {
        question: 'Can you haul everything off a tight lot where burning is not allowed?',
        answer:
          'Yes—on neighborhood and lake lots where burning is restricted, we load and haul cleared brush, logs, and stumps completely off site.',
      },
    ],
    heroImageKey: 'loganMartinLot',
    secondaryImageKey: 'heroClearing',
    relatedSlugs: ['site-preparation', 'tree-brush-removal', 'hauling-service'],
  },
  {
    slug: 'hauling-service',
    code: '07',
    phase: '05 Haul Away',
    title: 'Hauling Service',
    shortTitle: 'Hauling Service',
    shortBlurb:
      'Reliable hauling for cleared brush, logs, stumps, storm debris, gravel, topsoil, and fill material across the corridor.',
    overview:
      'Clearing land is only half the job if piles of stumps, logs, and brush sit in the middle of your yard—or if you are waiting on gravel and clean dirt to finish a drive. We haul debris out and bring site materials in so your project keeps moving.',
    whoItsFor: [
      'Homeowners with existing brush piles or storm-downed limbs to clear out',
      'Lot owners who cannot burn debris inside city or subdivision limits',
      'Builders needing jobsite debris cleanup between trade phases',
      'Driveway and pad owners needing gravel, chert, or fill hauled in',
    ],
    whatsIncluded: [
      'Loading and haul-off of brush piles, limbs, logs, and stumps',
      'Storm cleanup and old debris pile removal',
      'Material delivery coordination for gravel, dirt, or mulch needs',
      'Final site sweep so no scattered branches or ruts are left behind',
    ],
    typicalProjects: [
      'Clearing out old brush and stump piles left from prior cutting',
      'Complete haul-off on tight neighborhood lots in Birmingham to Oxford',
      'Storm debris cleanup after wind or ice damage',
      'Rock and fill hauling paired with driveway or pad grading',
    ],
    processSteps: [
      {
        step: '01',
        title: 'Assess Volume & Access',
        detail:
          'We check pile size, material weight, and truck-and-trailer turnaround access on your property.',
      },
      {
        step: '02',
        title: 'Load Cleanly',
        detail:
          'Brush, timber, or loose debris is loaded efficiently without tearing up your driveway or lawn.',
      },
      {
        step: '03',
        title: 'Haul & Final Sweep',
        detail:
          'Loads are hauled off site and the staging spot is raked clean before we pull out.',
      },
    ],
    faqs: [
      {
        question: 'Can I book hauling if I already cut the trees or brush myself?',
        answer:
          'Yes. Plenty of homeowners call us just to load and haul away existing piles of limbs, logs, or storm brush.',
      },
      {
        question: 'Do you also haul gravel or dirt in for driveways and pads?',
        answer:
          'Yes, especially when paired with driveway grading or site preparation. Call us with what you need moved and where you are located.',
      },
      {
        question: 'How close does the truck and trailer need to get to the pile?',
        answer:
          'If a truck cannot back directly to a pile, we use compact loaders to bring material out to the trailer cleanly without tracking up finished turf.',
      },
    ],
    heroImageKey: 'haulingTrailer',
    secondaryImageKey: 'sitePrepDrive',
    relatedSlugs: ['tree-brush-removal', 'lot-clearing', 'dirt-work'],
  },
];

export function getServiceBySlug(slug: string | undefined): ServiceItem | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
