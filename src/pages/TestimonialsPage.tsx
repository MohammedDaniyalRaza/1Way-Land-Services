import React, { useMemo, useState } from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { SERVICES } from '../data/services';
import { BUSINESS } from '../data/business';
import { usePageSeo } from '../lib/seo';
import { PageHero } from '../components/sections/PageHero';
import { CtaBand } from '../components/sections/CtaBand';
import { StakeMarker } from '../components/svg/StakeMarker';

export default function TestimonialsPage() {
  const [selectedSlug, setSelectedSlug] = useState<string>('all');

  usePageSeo({
    title: `Customer Feedback & Reviews | ${BUSINESS.name}`,
    description:
      'Read sample customer feedback across land clearing, lot clearing, dirt work, site prep, and hauling from property owners in Pell City and along I-20.',
    path: '/testimonials',
  });

  const filtered = useMemo(() => {
    if (selectedSlug === 'all') return TESTIMONIALS;
    return TESTIMONIALS.filter((t) => t.serviceSlug === selectedSlug);
  }, [selectedSlug]);

  return (
    <>
      <PageHero
        imageKey="finishedLandscaping"
        kicker="Client Feedback · Sample Reviews"
        title={
          <>
            Trusted by neighbors from <span className="font-serif-accent">Birmingham to Oxford.</span>
          </>
        }
        subtitle="See how homeowners, lake-lot buyers, and acreage owners describe working with 1Way Land Services. Sample reviews below represent typical projects across our seven services."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Testimonials' }]}
        bottomFill="#F2EEE6"
      />

      <section className="surface-light section-pad">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <div className="section-kicker">
              <StakeMarker size={16} />
              <span>Filter Feedback By Service · Sample Reviews</span>
            </div>
            <div className="choice-grid" role="group" aria-label="Filter reviews by service">
              <button
                type="button"
                onClick={() => setSelectedSlug('all')}
                className={`choice-btn ${selectedSlug === 'all' ? 'choice-btn--active' : ''}`}
              >
                All Services ({TESTIMONIALS.length})
              </button>
              {SERVICES.map((srv) => (
                <button
                  key={srv.slug}
                  type="button"
                  onClick={() => setSelectedSlug(srv.slug)}
                  className={`choice-btn ${selectedSlug === srv.slug ? 'choice-btn--active' : ''}`}
                >
                  {srv.shortTitle}
                </button>
              ))}
            </div>
          </div>

          <div className="grid-2">
            {filtered.map((item) => (
              <blockquote
                key={item.id}
                style={{
                  margin: 0,
                  padding: 'clamp(1.4rem, 2.8vw, 2.1rem)',
                  backgroundColor: 'var(--color-bone)',
                  border: '1px solid var(--color-hairline-light)',
                  borderRadius: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.25rem',
                }}
              >
                <div>
                  <div className="font-mono-label" style={{ color: 'var(--color-orange-deep)', marginBottom: '0.6rem' }}>
                    {item.serviceTitle} · {item.propertyType}
                  </div>
                  <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: 1.65 }}>
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <footer
                  className="hairline-top-light"
                  style={{
                    paddingTop: '0.85rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <strong>{item.name}</strong>
                  <span style={{ color: 'var(--color-stone-on-light)', fontSize: '0.9rem' }}>
                    {item.town}, AL
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
