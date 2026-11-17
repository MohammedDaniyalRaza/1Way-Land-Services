// Suggested list based on the stated I-20 / Logan Martin Lake area, client must confirm each town.

export interface AreaGroup {
  id: string;
  title: string;
  subtitle: string;
  towns: string[];
}

export interface MapMarker {
  id: string;
  name: string;
  role: 'hub' | 'corridor' | 'lake';
  x: number;
  y: number;
  labelOffset?: { dx: number; dy: number };
}

export const AREA_GROUPS: AreaGroup[] = [
  {
    id: 'pell-city-lake',
    title: 'Pell City & Logan Martin Lake',
    subtitle: 'Home base in St. Clair County and communities around the lake.',
    towns: [
      'Pell City',
      'Cropwell',
      'Eden',
      'Riverside',
      'Lincoln',
      'Ragland',
      'Vincent',
      'Alpine',
    ],
  },
  {
    id: 'i20-corridor',
    title: 'I-20 Corridor: Birmingham to Oxford',
    subtitle: 'Serving residential lots, farms, and job sites east and west along I-20.',
    towns: [
      'Birmingham',
      'Irondale',
      'Leeds',
      'Moody',
      'Odenville',
      'Springville',
      'Talladega',
      'Oxford',
      'Anniston',
    ],
  },
];

export const ALL_TOWNS: string[] = Array.from(
  new Set(AREA_GROUPS.flatMap((group) => group.towns)),
);

// Schematic coordinates inside a 960x440 SVG viewBox for visual orientation only.
export const MAP_MARKERS: MapMarker[] = [
  { id: 'birmingham', name: 'Birmingham', role: 'corridor', x: 96, y: 190, labelOffset: { dx: 0, dy: -16 } },
  { id: 'leeds', name: 'Leeds', role: 'corridor', x: 225, y: 184, labelOffset: { dx: 0, dy: 24 } },
  { id: 'moody', name: 'Moody', role: 'corridor', x: 300, y: 158, labelOffset: { dx: 0, dy: -16 } },
  { id: 'springville', name: 'Springville', role: 'corridor', x: 318, y: 92, labelOffset: { dx: 12, dy: 4 } },
  { id: 'odenville', name: 'Odenville', role: 'corridor', x: 376, y: 118, labelOffset: { dx: 12, dy: -6 } },
  { id: 'pell-city', name: 'Pell City', role: 'hub', x: 468, y: 178, labelOffset: { dx: 0, dy: -22 } },
  { id: 'eden', name: 'Eden', role: 'lake', x: 425, y: 204, labelOffset: { dx: -44, dy: 4 } },
  { id: 'cropwell', name: 'Cropwell', role: 'lake', x: 472, y: 256, labelOffset: { dx: -16, dy: 24 } },
  { id: 'riverside', name: 'Riverside', role: 'lake', x: 545, y: 202, labelOffset: { dx: 14, dy: 22 } },
  { id: 'lincoln', name: 'Lincoln', role: 'corridor', x: 615, y: 174, labelOffset: { dx: 0, dy: -16 } },
  { id: 'talladega', name: 'Talladega', role: 'corridor', x: 642, y: 298, labelOffset: { dx: 12, dy: 4 } },
  { id: 'oxford', name: 'Oxford', role: 'corridor', x: 806, y: 162, labelOffset: { dx: 0, dy: -16 } },
  { id: 'anniston', name: 'Anniston', role: 'corridor', x: 856, y: 132, labelOffset: { dx: 0, dy: -14 } },
];
