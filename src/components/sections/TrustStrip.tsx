import React from 'react';
import { BUSINESS } from '../../data/business';
import { StakeMarker } from '../svg/StakeMarker';

const TRUST_POINTS = [
  {
    code: 'LOCAL BASE',
    title: 'Based in Pell City, AL',
    detail: 'Serving neighbors around Logan Martin Lake and along I-20.',
  },
  {
    code: 'FULL SCOPE',
    title: 'Clear, Grade, Prep & Haul',
    detail: 'One crew from raw timber and brush through clean finished dirt.',
  },
  {
    code: 'WHO WE HELP',
    title: 'Homes, Acreage & Builders',
    detail: 'Sized for tight residential lots, lake parcels, and multi-acre tracts.',
  },
  {
    code: 'DIRECT LINE',
    title: `Call ${BUSINESS.phoneDisplay}`,
    detail: 'Talk directly to the team and schedule an on-site walk-through.',
  },
];

export function TrustStrip() {
  return (
    <section className="surface-light hairline-top-light" style={{ paddingBlock: 'clamp(2rem, 3.5vw, 3rem)' }}>
      <div className="container">
        <div className="trust-strip">
          {TRUST_POINTS.map((item) => (
            <div key={item.code} className="trust-item">
              <div style={{ paddingTop: '0.2rem', flexShrink: 0 }}>
                <StakeMarker size={18} />
              </div>
              <div>
                <div className="font-mono-label" style={{ color: 'var(--color-stone-on-light)', marginBottom: '0.25rem' }}>
                  {item.code}
                </div>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem' }}>
                  {item.title}
                </div>
                <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--color-stone-on-light)', lineHeight: 1.5 }}>
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
