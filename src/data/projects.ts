import { ImageKey } from './images';

// SAMPLE IMAGERY & PROJECT SUMMARIES: Replace with the client's real project photos (see their Facebook page).

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  serviceSlug: string;
  serviceTitle: string;
  scopeSummary: string;
  imageKey: ImageKey;
  beforeImageKey?: ImageKey;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Staked Pine Acreage Opening & Rough Pad',
    location: 'Pell City, AL',
    serviceSlug: 'land-clearing',
    serviceTitle: 'Land Clearing',
    scopeSummary:
      'Cleared thick pine undergrowth and deadfall while keeping perimeter loblolly pines and staking the future homesite footprint.',
    imageKey: 'heroClearing',
    beforeImageKey: 'overgrownBefore',
  },
  {
    id: 'p2',
    title: 'Logan Martin Lakefront Selective Lot Clear',
    location: 'Cropwell / Logan Martin Lake',
    serviceSlug: 'lot-clearing',
    serviceTitle: 'Lot Clearing',
    scopeSummary:
      'Opened shoreline sightlines and raked a clean build area while preserving mature pines along the water edge.',
    imageKey: 'loganMartinLot',
    beforeImageKey: 'overgrownBefore',
  },
  {
    id: 'p3',
    title: 'Red Clay House Pad & Drainage Swale Cut',
    location: 'Moody, AL',
    serviceSlug: 'dirt-work',
    serviceTitle: 'Dirt Work',
    scopeSummary:
      'Cut-and-fill earthwork to build a level pad with perimeter swales guiding storm runoff safely around the slope.',
    imageKey: 'dirtGrading',
  },
  {
    id: 'p4',
    title: 'Forestry Mulching Along Wooded Boundary',
    location: 'Springville, AL',
    serviceSlug: 'tree-brush-removal',
    serviceTitle: 'Tree & Brush Removal',
    scopeSummary:
      'Mulched dense briars, sweetgum shoots, and saplings along a rural fence line without disturbing tall boundary trees.',
    imageKey: 'brushMulching',
  },
  {
    id: 'p5',
    title: 'Gravel Entrance Drive, Culvert & Building Pad',
    location: 'Leeds, AL',
    serviceSlug: 'site-preparation',
    serviceTitle: 'Site Preparation',
    scopeSummary:
      'Installed driveway culvert, shaped roadside ditches, laid crushed stone access, and compacted the rear building pad.',
    imageKey: 'sitePrepDrive',
  },
  {
    id: 'p6',
    title: 'Post-Build Sod, Mulch Beds & Drive Border',
    location: 'Oxford, AL',
    serviceSlug: 'landscaping',
    serviceTitle: 'Landscaping',
    scopeSummary:
      'Finish-graded topsoil, set stone bed edging, laid green turf, and dressed planting beds after exterior construction wrapped.',
    imageKey: 'finishedLandscaping',
  },
  {
    id: 'p7',
    title: 'Cleared Timber & Brush Haul-Off',
    location: 'Lincoln, AL',
    serviceSlug: 'hauling-service',
    serviceTitle: 'Hauling Service',
    scopeSummary:
      'Loaded and hauled stacked limbs, root debris, and cleared brush out of a tight access lane so the site stayed clear.',
    imageKey: 'haulingTrailer',
  },
  {
    id: 'p8',
    title: 'Heavy Briar & Sapling Overgrowth Assessment',
    location: 'Odenville, AL',
    serviceSlug: 'tree-brush-removal',
    serviceTitle: 'Tree & Brush Removal',
    scopeSummary:
      'Dense raw understory surveyed prior to selective brush clearing and access lane cut-in.',
    imageKey: 'overgrownBefore',
  },
];
