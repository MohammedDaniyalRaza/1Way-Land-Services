import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LinkButton } from '../ui/Button';
import { StakeMarker } from '../svg/StakeMarker';

const AUDIENCES = [
  {
    code: '01',
    title: 'Homeowners',
    description:
      'Reclaim overgrown backyards, fix standing water around patios, prep ground for a detached shop or garage, and haul off storm brush.',
    linkLabel: 'See Lot & Yard Services',
    to: '/services/lot-clearing',
  },
  {
    code: '02',
    title: 'Builders & Developers',
    description:
      'Clean lot clearing, pad prep, gravel construction driveways, and reliable site haul-off so concrete and framing crews step onto solid ground.',
    linkLabel: 'Explore Site Preparation',
    to: '/services/site-preparation',
  },
  {
    code: '03',
    title: 'Farm & Acreage Owners',
    description:
      'Open choked fencerows, clear sweetgum and briar encroachment from pastures, cut interior access trails, and balance rough terrain.',
    linkLabel: 'Explore Land Clearing',
    to: '/services/land-clearing',
  },
  {
    code: '04',
    title: 'Lake Property Owners',
    description:
      'Selective clearing on Logan Martin Lake parcels—opening water sightlines and build zones while keeping mature shoreline shade.',
    linkLabel: 'View Lake Area Work',
    to: '/service-area',
  },
];

export function WhoWeServeSection() {
  return (
    <section className="surface-light section-pad">
      <div className="container">
        <div style={{ marginBottom: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
          <div className="section-kicker">
            <StakeMarker size={16} />
            <span>Who We Serve</span>
          </div>
          <h2 className="heading-xl" style={{ margin: 0, maxWidth: '18ch' }}>
            Sized for a half-acre lot or <span className="font-serif-accent">twenty acres</span> of pines.
          </h2>
        </div>

        <div className="grid-4">
          {AUDIENCES.map((item) => (
            <div
              key={item.code}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.25rem',
                padding: '1.5rem',
                backgroundColor: 'var(--color-bone)',
                border: '1px solid var(--color-hairline-light)',
                borderRadius: '2px',
              }}
            >
              <div>
                <div
                  className="survey-numeral survey-numeral--outlined"
                  style={{ fontSize: '2.5rem', color: 'var(--color-orange-deep)', marginBottom: '0.85rem' }}
                >
                  {item.code}
                </div>
                <h3 className="heading-md" style={{ margin: '0 0 0.6rem 0', fontSize: '1.28rem' }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0, color: 'var(--color-stone-on-light)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>

              <div>
                <LinkButton variant="ghost" size="sm" to={item.to}>
                  <span>{item.linkLabel}</span>
                  <ArrowRight size={15} />
                </LinkButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
