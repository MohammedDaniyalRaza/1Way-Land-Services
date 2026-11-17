import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { BUSINESS } from '../../data/business';
import { usePageSeo } from '../../lib/seo';
import { PageHero } from '../../components/sections/PageHero';
import { SmartImage } from '../../components/ui/SmartImage';
import { LinkButton } from '../../components/ui/Button';
import { Stepper } from '../../components/ui/Stepper';
import { CtaBand } from '../../components/sections/CtaBand';
import { StakeMarker } from '../../components/svg/StakeMarker';

const COST_FACTORS = [
  {
    code: '01',
    title: 'Acreage & Footprint Size',
    detail: 'Clearing a half-acre build zone takes a different setup than opening up ten wooded acres or miles of fence line.',
  },
  {
    code: '02',
    title: 'Tree Density & Brush Height',
    detail: 'Open pine stands with light briars clear faster than choked sweetgum, hardwoods, vines, and downed timber.',
  },
  {
    code: '03',
    title: 'Terrain, Slope & Wet Spots',
    detail: 'Steep lakefront slopes, rock shelves, or drainage draws affect machine staging and grading passes.',
  },
  {
    code: '04',
    title: 'Equipment & Haul Access',
    detail: 'Gate width, overhead lines, soft driveways, and distance to unload or haul debris all factor into time on site.',
  },
  {
    code: '05',
    title: 'Debris Disposal Method',
    detail: 'Whether undergrowth can be mulched on site, stacked cleanly, or loaded and hauled completely off the lot.',
  },
  {
    code: '06',
    title: 'Finish Level Needed',
    detail: 'Rough pasture clearing stops much earlier than fine topsoil grading, gravel drive prep, or ready-to-seed lawns.',
  },
];

const GENERAL_PROCESS = [
  {
    step: '01',
    title: 'Call or Send Lot Info',
    detail: `Call ${BUSINESS.phoneDisplay} or drop your town, acreage, and goal into our estimate form.`,
  },
  {
    step: '02',
    title: 'On-Site Walk-Through',
    detail: 'We look at access, slopes, keep-trees, and drainage paths in person so nothing is guessed.',
  },
  {
    step: '03',
    title: 'Straightforward Scope',
    detail: 'You get a clear breakdown of what will be cleared, graded, prepped, or hauled—before work starts.',
  },
  {
    step: '04',
    title: 'Clean Finish',
    detail: 'We complete the work cleanly and leave the property ready for your next trade, fence, or lawn.',
  },
];

export default function ServicesOverviewPage() {
  usePageSeo({
    title: 'Services — Land Clearing, Dirt Work & Site Prep | 1Way Land Services',
    description:
      'Explore all 7 services from 1Way Land Services in Pell City, AL: land clearing, tree & brush removal, dirt work, site prep, landscaping, lot clearing, and hauling.',
    path: '/services',
  });

  return (
    <>
      <PageHero
        imageKey="dirtGrading"
        kicker="7 Core Services · Pell City & I-20 Corridor"
        title={
          <>
            Every phase from raw woods to <span className="font-serif-accent">finished grade.</span>
          </>
        }
        subtitle="Call us for one focused job—like hauling off storm brush or fixing backyard drainage—or let one crew take your property from clearing through site prep."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        bottomFill="#F2EEE6"
      />

      {/* All 7 Services */}
      <section className="surface-light section-pad">
        <div className="container">
          <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <div className="section-kicker">
              <StakeMarker size={16} />
              <span>Full Service Roster</span>
            </div>
            <h2 className="heading-xl" style={{ margin: 0, maxWidth: '18ch' }}>
              Seven ways we get your <span className="font-serif-accent">ground ready.</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {SERVICES.map((service, index) => (
              <article
                key={service.slug}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
                  gap: 'clamp(1.5rem, 3vw, 2.5rem)',
                  alignItems: 'center',
                  padding: 'clamp(1.25rem, 2.5vw, 2rem)',
                  backgroundColor: index % 2 === 0 ? 'var(--color-bone)' : '#ffffff',
                  border: '1px solid var(--color-hairline-light)',
                  borderRadius: '2px',
                }}
              >
                <SmartImage imageKey={service.heroImageKey} aspectRatio="16 / 10" />

                <div>
                  <div className="font-mono-label" style={{ color: 'var(--color-orange-deep)', marginBottom: '0.4rem' }}>
                    {service.code} · {service.phase}
                  </div>
                  <h3 className="heading-lg" style={{ margin: '0 0 0.65rem 0' }}>
                    {service.title}
                  </h3>
                  <p style={{ margin: '0 0 1rem 0', color: 'var(--color-stone-on-light)', lineHeight: 1.6 }}>
                    {service.overview}
                  </p>

                  <ul
                    style={{
                      listStyle: 'none',
                      margin: '0 0 1.35rem 0',
                      padding: 0,
                      display: 'grid',
                      gap: '0.4rem',
                    }}
                  >
                    {service.whatsIncluded.slice(0, 3).map((item) => (
                      <li
                        key={item}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.9rem',
                        }}
                      >
                        <CheckCircle2 size={16} style={{ color: 'var(--color-orange)', flexShrink: 0, marginTop: '3px' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                    <LinkButton variant="dark" size="sm" to={`/services/${service.slug}`}>
                      <span>View {service.title} Details</span>
                      <ArrowRight size={15} />
                    </LinkButton>
                    <LinkButton
                      variant="outline-light"
                      size="sm"
                      to="/contact"
                      state={{ prefillServices: [service.slug] }}
                    >
                      <span>Request Estimate</span>
                    </LinkButton>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What Affects Cost */}
      <section className="surface-dark section-pad">
        <div className="container">
          <div style={{ marginBottom: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
            <div className="section-kicker" style={{ color: 'var(--color-orange-light)' }}>
              <span>Honest Pricing Explained</span>
            </div>
            <h2 className="heading-xl" style={{ margin: 0, maxWidth: '18ch' }}>
              What actually drives the <span className="font-serif-accent">estimate</span> on your land.
            </h2>
            <p className="body-copy" style={{ color: 'var(--color-stone-on-dark)', marginTop: '0.85rem' }}>
              We do not throw out generic per-acre numbers before seeing your ground. Every estimate
              is scoped around six real field conditions so you only pay for the work your parcel needs.
            </p>
          </div>

          <div className="grid-3">
            {COST_FACTORS.map((factor) => (
              <div
                key={factor.code}
                style={{
                  padding: '1.4rem',
                  backgroundColor: 'var(--color-ash)',
                  border: '1px solid var(--color-hairline-dark)',
                  borderRadius: '2px',
                }}
              >
                <div className="font-mono-label" style={{ color: 'var(--color-orange-light)', marginBottom: '0.45rem' }}>
                  Factor {factor.code}
                </div>
                <h3 className="heading-md" style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0' }}>
                  {factor.title}
                </h3>
                <p style={{ margin: 0, color: 'var(--color-stone-on-dark)', fontSize: '0.92rem', lineHeight: 1.55 }}>
                  {factor.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure + Process */}
      <section className="surface-bone section-pad">
        <div className="container">
          <div
            className="reg-frame"
            style={{
              backgroundColor: 'var(--color-off-white)',
              border: '1px solid var(--color-hairline-light)',
              padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            <div style={{ maxWidth: '58ch' }}>
              <div className="font-mono-label" style={{ color: 'var(--color-orange-deep)', marginBottom: '0.4rem' }}>
                Not Sure Which Service Fits?
              </div>
              <h2 className="heading-lg" style={{ margin: '0 0 0.5rem 0' }}>
                Use the interactive Project Scoper or call us directly.
              </h2>
              <p style={{ margin: 0, color: 'var(--color-stone-on-light)' }}>
                You do not have to know exact excavation terms before calling. Tell us what the
                property looks like today and what you want to build or use it for.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <LinkButton variant="primary" to="/#project-scoper">
                <span>Try Project Scoper</span>
                <ArrowRight size={16} />
              </LinkButton>
              <LinkButton variant="dark" href={BUSINESS.phoneHref}>
                <span>Call {BUSINESS.phoneDisplay}</span>
              </LinkButton>
            </div>
          </div>

          <div style={{ marginBottom: '1.75rem' }}>
            <div className="section-kicker">
              <StakeMarker size={16} />
              <span>How We Work</span>
            </div>
            <h2 className="heading-lg" style={{ margin: 0 }}>
              From first call to clean ground.
            </h2>
          </div>

          <Stepper steps={GENERAL_PROCESS} surface="light" />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
