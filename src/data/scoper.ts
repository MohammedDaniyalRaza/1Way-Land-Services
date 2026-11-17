export interface ScoperOption {
  id: string;
  label: string;
  note: string;
}

export const LAND_TYPES: ScoperOption[] = [
  { id: 'wooded-lot', label: 'Wooded Lot', note: 'Standing pines, hardwoods, and thick floor cover' },
  { id: 'overgrown-brush', label: 'Overgrown Brush / Field', note: 'Briars, sweetgum shoots, vines, and saplings' },
  { id: 'pasture', label: 'Pasture / Acreage', note: 'Multi-acre ground, fence rows, or open fields' },
  { id: 'existing-pad', label: 'Existing Yard / Pad', note: 'Already cleared, needs shaping, drainage, or finish' },
  { id: 'lakefront-lot', label: 'Lakefront Lot', note: 'Logan Martin or sloped shoreline parcel' },
];

export const LAND_SIZES: ScoperOption[] = [
  { id: 'under-1', label: 'Under 1 Acre', note: 'Residential or neighborhood lot' },
  { id: '1-to-5', label: '1 to 5 Acres', note: 'Homesite or mini-farm tract' },
  { id: '5-to-20', label: '5 to 20 Acres', note: 'Larger rural acreage' },
  { id: '20-plus', label: '20+ Acres', note: 'Expansive tract or farm clearing' },
];

export const LAND_GOALS: ScoperOption[] = [
  { id: 'build-home', label: 'Build a Home or Shop', note: 'Pad prep, driveway access, and clean footprint' },
  { id: 'farm-pasture', label: 'Farm / Pasture Use', note: 'Open grazing land, trails, and fence lines' },
  { id: 'clean-up', label: 'Clean Up & Open View', note: 'Clear brush, deadfall, and haul piles away' },
  { id: 'drainage-level', label: 'Drainage & Leveling', note: 'Fix runoff, ruts, slopes, and low spots' },
  { id: 'curb-appeal', label: 'Final Curb Appeal', note: 'Finish grade, turf, mulch beds, and clean edges' },
];

export interface ScoperRecommendation {
  headline: string;
  summary: string;
  recommendedSlugs: string[];
  checklist: string[];
}

export function getScoperRecommendation(
  landType: string,
  size: string,
  goal: string,
): ScoperRecommendation {
  const recommended = new Set<string>();
  const checklist: string[] = [];

  if (landType === 'lakefront-lot') {
    recommended.add('lot-clearing');
    checklist.push('Selective clearing to protect shoreline trees and view lines');
  } else if (landType === 'wooded-lot' && size === 'under-1') {
    recommended.add('lot-clearing');
    checklist.push('Controlled lot clearing inside marked boundaries and setbacks');
  } else if (landType === 'wooded-lot' || landType === 'pasture') {
    recommended.add('land-clearing');
    checklist.push('Open acreage clearing matched to your keep-trees and fence lines');
  } else if (landType === 'overgrown-brush') {
    recommended.add('tree-brush-removal');
    checklist.push('Undergrowth, briar, and sapling cutback down to clean ground');
  } else {
    recommended.add('dirt-work');
    checklist.push('Evaluate existing grade, drainage paths, and soft spots');
  }

  if (goal === 'build-home') {
    recommended.add('site-preparation');
    recommended.add('dirt-work');
    checklist.push('Strip organic layer, rough-in drive access, and compact building pad');
    checklist.push('Shape swales or culvert entry so rain drains clear of the foundation');
  } else if (goal === 'farm-pasture') {
    recommended.add('land-clearing');
    recommended.add('tree-brush-removal');
    checklist.push('Clear interior brush and fencerows for tractor or bush-hog access');
  } else if (goal === 'clean-up') {
    recommended.add('tree-brush-removal');
    recommended.add('hauling-service');
    checklist.push('Load and haul cut limbs, stumps, and storm debris off site');
  } else if (goal === 'drainage-level') {
    recommended.add('dirt-work');
    checklist.push('Cut-and-fill leveling, swale shaping, and driveway crown repair');
  } else if (goal === 'curb-appeal') {
    recommended.add('landscaping');
    recommended.add('dirt-work');
    checklist.push('Finish soil dress, turf prep, mulch or pine straw beds, and clean borders');
  }

  if (size === 'under-1' && (landType === 'wooded-lot' || landType === 'lakefront-lot')) {
    recommended.add('hauling-service');
    checklist.push('Off-site haul-off if burning is restricted in your neighborhood');
  }

  const slugs = Array.from(recommended).slice(0, 4);

  const typeLabel = LAND_TYPES.find((t) => t.id === landType)?.label ?? landType;
  const sizeLabel = LAND_SIZES.find((s) => s.id === size)?.label ?? size;
  const goalLabel = LAND_GOALS.find((g) => g.id === goal)?.label ?? goal;

  return {
    headline: `${typeLabel} · ${sizeLabel} · ${goalLabel}`,
    summary:
      'Based on your selection, this is the typical sequence of work we walk through on site. Final scope and pricing are always confirmed in person after seeing access, slope, and tree density.',
    recommendedSlugs: slugs,
    checklist: checklist.slice(0, 4),
  };
}
