import React, { useState } from 'react';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { AREA_GROUPS } from '../data/areas';
import { BUSINESS } from '../data/business';
import { usePageSeo } from '../lib/seo';
import { PageHero } from '../components/sections/PageHero';
import { AreaMapSvg } from '../components/svg/AreaMapSvg';
import { LinkButton } from '../components/ui/Button';
import { CtaBand } from '../components/sections/CtaBand';
import { StakeMarker } from '../components/svg/StakeMarker';

export default function ServiceAreaPage() {
  const [activeTown, setActiveTown] = useState<string>('Pell City');

  usePageSeo({
    title: `Service Area — Pell City, Logan Martin Lake & I-20 | ${BUSINESS.name}`,
    description:
      '1Way Land Services serves Pell City, Logan Martin Lake, and communities from Birmingham to Oxford along I-20 including Leeds, Moody, Lincoln, and Talladega.',
    path: '/service-area',
  });

  return (
    <>
      <PageHero
        imageKey="loganMartinLot"
        kicker="Service Area · Central & East Alabama"
        title={
          <>
            Pell City home base. <span className="font-serif-accent">Birmingham to Oxford.</span>
          </>
        }
        subtitle="We work around Logan Martin Lake and across the Interstate 20 corridor—covering residential lots, lakefront parcels, farms, and job sites."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Service Area' }]}
        bottomFill="#0E0E0D"
      />

      <section className="surface-dark section-pad">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <div className="section-kicker" style={{ color: 'var(--color-orange-light)' }}>
              <span>Interactive Corridor Map</span>
            </div>
            <h2 className="heading-lg" style={{ margin: 0 }}>
              Select a town on the corridor schematic
            </h2>
          </div>

          <AreaMapSvg activeTown={activeTown} onSelectTown={setActiveTown} />

          <div
            style={{
              marginTop: '1.25rem',
              padding: '1rem 1.25rem',
              backgroundColor: 'var(--color-ash)',
              border: '1px solid var(--color-hairline-dark)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <MapPin size={18} className="text-orange-bright" />
              <span>
                Selected area: <strong>{activeTown}, AL</strong> — Call to schedule an on-site estimate.
              </span>
            </div>

            <LinkButton
              variant="primary"
              size="sm"
              to="/contact"
              state={{ prefillTown: activeTown }}
            >
              <span>Request Estimate in {activeTown}</span>
              <ArrowRight size={15} />
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="surface-light section-pad">
        <div className="container">
          <div className="grid-2">
            {AREA_GROUPS.map((group) => (
              <div
                key={group.id}
                style={{
                  padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                  backgroundColor: 'var(--color-bone)',
                  border: '1px solid var(--color-hairline-light)',
                  borderRadius: '2px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.65rem' }}>
                  <StakeMarker size={17} />
                  <span className="font-mono-label" style={{ color: 'var(--color-orange-deep)' }}>
                    Coverage Zone
                  </span>
                </div>
                <h2 className="heading-md" style={{ margin: '0 0 0.5rem 0' }}>
                  {group.title}
                </h2>
                <p style={{ margin: '0 0 1.25rem 0', color: 'var(--color-stone-on-light)' }}>
                  {group.subtitle}
                </p>

                <ul
                  style={{
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    gap: '0.55rem 1rem',
                  }}
                >
                  {group.towns.map((town) => (
                    <li key={town}>
                      <button
                        type="button"
                        onClick={() => setActiveTown(town)}
                        style={{
                          background: 'transparent',
                          border: 0,
                          padding: '0.25rem 0',
                          cursor: 'pointer',
                          fontWeight: activeTown === town ? 700 : 500,
                          color:
                            activeTown === town ? 'var(--color-orange-deep)' : 'var(--color-charcoal)',
                          textDecoration: activeTown === town ? 'underline' : 'none',
                        }}
                      >
                        {town}, AL
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="reg-frame"
            style={{
              marginTop: '2.5rem',
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-hairline-light)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1.25rem',
            }}
          >
            <div>
              <h3 className="heading-md" style={{ margin: '0 0 0.4rem 0' }}>
                Don&apos;t see your town listed?
              </h3>
              <p style={{ margin: 0, color: 'var(--color-stone-on-light)' }}>
                If your acreage or lot sits near Pell City, Logan Martin Lake, St. Clair,
                Talladega, Calhoun, or eastern Jefferson County, give us a call.
              </p>
            </div>
            <LinkButton variant="dark" href={BUSINESS.phoneHref}>
              <Phone size={16} />
              <span>Call {BUSINESS.phoneDisplay}</span>
            </LinkButton>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
