export type ImageKey =
  | 'heroClearing'
  | 'brushMulching'
  | 'dirtGrading'
  | 'loganMartinLot'
  | 'finishedLandscaping'
  | 'haulingTrailer'
  | 'overgrownBefore'
  | 'sitePrepDrive';

export interface SiteImage {
  key: ImageKey;
  url: string;
  alt: string;
  focalPoint: string;
  orientation: 'landscape' | 'portrait' | 'square';
  caption: string;
}

// Single source of truth for all site photography.
// Sample imagery for layout and visual reference — replace with the client's real project photos (see their Facebook page).
export const IMAGES: Record<ImageKey, SiteImage> = {
  heroClearing: {
    key: 'heroClearing',
    url: '/src/assets/images/hero_alabama_clearing_1794872799241.jpg',
    alt: 'Freshly cleared Alabama acreage with orange survey stakes and loblolly pines at sunrise',
    focalPoint: '50% 55%',
    orientation: 'landscape',
    caption: 'Cleared pad and staked lot perimeter at sunrise (sample imagery).',
  },
  brushMulching: {
    key: 'brushMulching',
    url: '/src/assets/images/brush_mulching_work_1794872800357.jpg',
    alt: 'Tracked loader with forestry mulcher clearing dense pine undergrowth and brush',
    focalPoint: '45% 50%',
    orientation: 'landscape',
    caption: 'Thick undergrowth opened up cleanly without disturbing perimeter trees (sample imagery).',
  },
  dirtGrading: {
    key: 'dirtGrading',
    url: '/src/assets/images/dirt_grading_pad_1794872800662.jpg',
    alt: 'Compact excavator and skid steer grading a level clay building pad with drainage swales',
    focalPoint: '50% 55%',
    orientation: 'landscape',
    caption: 'Pad grading, cut-and-fill shaping, and surface water control (sample imagery).',
  },
  loganMartinLot: {
    key: 'loganMartinLot',
    url: '/src/assets/images/logan_martin_lot_1794872800761.jpg',
    alt: 'Cleared and graded residential lot overlooking calm lake water framed by tall pines',
    focalPoint: '50% 55%',
    orientation: 'landscape',
    caption: 'Lake-area lot cleared selectively to keep shoreline shade and sightlines (sample imagery).',
  },
  finishedLandscaping: {
    key: 'finishedLandscaping',
    url: '/src/assets/images/finished_landscaping_yard_1794872801085.jpg',
    alt: 'Finished residential yard with fresh sod, dark mulch beds, stone edging, and gravel driveway',
    focalPoint: '55% 55%',
    orientation: 'landscape',
    caption: 'Final lawn, mulch beds, and driveway dressing ready for daily use (sample imagery).',
  },
  haulingTrailer: {
    key: 'haulingTrailer',
    url: '/src/assets/images/hauling_debris_trailer_1794872802072.jpg',
    alt: 'Work truck and heavy tandem-axle dump trailer loaded with cleared limbs and brush',
    focalPoint: '50% 55%',
    orientation: 'landscape',
    caption: 'Cleared timber, stumps, and jobsite debris hauled off the property (sample imagery).',
  },
  overgrownBefore: {
    key: 'overgrownBefore',
    url: '/src/assets/images/overgrown_before_lot_1794872822304.jpg',
    alt: 'Dense overgrown Alabama woods choked with saplings, briars, and fallen limbs before clearing',
    focalPoint: '50% 50%',
    orientation: 'landscape',
    caption: 'Raw overgrown brush and deadfall prior to clearing (sample imagery).',
  },
  sitePrepDrive: {
    key: 'sitePrepDrive',
    url: '/src/assets/images/site_prep_gravel_drive_1794872822066.jpg',
    alt: 'Compacted gravel driveway with drainage culvert leading to a prepared building pad',
    focalPoint: '50% 58%',
    orientation: 'landscape',
    caption: 'Access drive, drainage culvert, and compacted home pad (sample imagery).',
  },
};
