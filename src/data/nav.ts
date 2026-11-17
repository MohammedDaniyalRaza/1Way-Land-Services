export interface NavLinkItem {
  label: string;
  to: string;
  hasMegaMenu?: boolean;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services', hasMegaMenu: true },
  { label: 'Projects', to: '/projects' },
  { label: 'Service Area', to: '/service-area' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'FAQ', to: '/faq' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export interface PhaseStep {
  phaseNumber: string;
  phaseTitle: string;
  subtitle: string;
  description: string;
  serviceSlugs: string[];
  imageKey: 'heroClearing' | 'dirtGrading' | 'sitePrepDrive' | 'finishedLandscaping' | 'haulingTrailer';
  coord: string;
}

export const FIVE_PHASES: PhaseStep[] = [
  {
    phaseNumber: '01',
    phaseTitle: 'Clear',
    subtitle: 'Open the ground & mark what stays',
    description:
      'Walk property corners, protect mature shade pines and oaks, and clear dense brush, saplings, and unwanted timber out of your way.',
    serviceSlugs: ['land-clearing', 'tree-brush-removal', 'lot-clearing'],
    imageKey: 'heroClearing',
    coord: 'STAKE 01 · CLEARING',
  },
  {
    phaseNumber: '02',
    phaseTitle: 'Grade & Dirt Work',
    subtitle: 'Shape slopes & guide water',
    description:
      'Cut high ground, fill low pockets, smooth ruts, and build clean drainage swales so Alabama rain runs away from your pad and drive.',
    serviceSlugs: ['dirt-work'],
    imageKey: 'dirtGrading',
    coord: 'STAKE 02 · EARTHWORK',
  },
  {
    phaseNumber: '03',
    phaseTitle: 'Prep the Site',
    subtitle: 'Solid pad & truck-ready access',
    description:
      'Strip soft organic soil, compact your home or shop pad, cut the driveway entrance, and set drainage culverts before builders arrive.',
    serviceSlugs: ['site-preparation'],
    imageKey: 'sitePrepDrive',
    coord: 'STAKE 03 · SITE PREP',
  },
  {
    phaseNumber: '04',
    phaseTitle: 'Finish & Landscape',
    subtitle: 'Anchor soil & bring curb appeal',
    description:
      'Dress the topsoil, prep seed or sod, edge beds with stone or gravel, and lay clean pine straw or mulch so the yard holds and shines.',
    serviceSlugs: ['landscaping'],
    imageKey: 'finishedLandscaping',
    coord: 'STAKE 04 · FINISH',
  },
  {
    phaseNumber: '05',
    phaseTitle: 'Haul Away',
    subtitle: 'Leave clean, usable ground',
    description:
      'Load out cut logs, root balls, brush piles, and jobsite debris—or haul gravel and fill in—leaving zero leftover mess behind.',
    serviceSlugs: ['hauling-service'],
    imageKey: 'haulingTrailer',
    coord: 'STAKE 05 · HAUL OFF',
  },
];
