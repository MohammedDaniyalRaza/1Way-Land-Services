import React from 'react';
import { PineGlyph } from '../svg/PineGlyph';

const MARQUEE_ITEMS = [
  'Pell City',
  'Land Clearing',
  'Logan Martin Lake',
  'Dirt Work',
  'Birmingham to Oxford',
  'Site Preparation',
  'Leeds & Moody',
  'Lot Clearing',
  'Lincoln & Talladega',
  'Tree & Brush Removal',
  'Cropwell & Riverside',
  'Hauling Service',
  'Landscaping',
];

export function TownMarquee() {
  const repeated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        {repeated.map((label, idx) => (
          <div
            key={`${label}-${idx}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1.15rem',
              whiteSpace: 'nowrap',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              letterSpacing: '0.09em',
              textTransform: 'uppercase',
            }}
          >
            <PineGlyph size={13} className="text-orange-bright" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
