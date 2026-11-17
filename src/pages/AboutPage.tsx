import React from 'react';
import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { SERVICES } from '../data/services';
import { usePageSeo } from '../lib/seo';
import { PageHero } from '../components/sections/PageHero';
import { SmartImage } from '../components/ui/SmartImage';
import { LinkButton } from '../components/ui/Button';
import { CtaBand } from '../components/sections/CtaBand';
import { StakeMarker } from '../components/svg/StakeMarker';
import { PineGlyph } from '../components/svg/PineGlyph';

const VALUES = [
  {
    code: '01',
    title: 'Straight Talk',
    body: 'We walk the property with you, explain what the dirt and trees actually require, and give a clear scope without padded jargon or guesswork.',
  },
  {
    code: '02',
    title: 'Do It Right',
    body: 'Cutting corners on clearing depth, drainage slope, or organic stripping only creates problems later. We take the time to set the grade right the first time.',
  },
  {
    code: '03',
    title: 'Leave the Land Ready',
    body: 'Whether you are handing the site over to a builder, putting up pasture fence, or laying fresh sod, we leave clean, usable ground—not leftover brush piles.',
  },
];

export default function AboutPage() {
  usePageSeo({
    title: `About Us — Pell City Land Clearing & Dirt Work | ${BUSINESS.name}`,
    description:
      'Learn how 1Way Land Services works across Pell City, Logan Martin Lake, and I-20 from Birmingham to Oxford—plain talk, dependable dirt work, and clean sites.',
    path: '/about',
  });

  return (
    <>
      <PageHero
        imageKey="brushMulching"
        kicker="About 1Way Land Services · Pell City, AL"
        title={
          <>
            Local land work built on <span className="font-serif-accent">straight talk.</span>
          </>
        }
        subtitle="Based in Pell City and working every week between Birmingham, Logan Martin Lake, and Oxford, we help landowners turn tough ground into clean, workable property."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        bottomFill="#F2EEE6"
      />

      {/* Editorial Story */}
      <section className="surface-light section-pad">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: 'clamp(2rem, 5vw, 4rem)',
              alignItems: 'center',
            }}
          >
            <div>
              <div className="section-kicker">
                <StakeMarker size={16} />
                <span>How We Operate</span>
              </div>
              <h2 className="heading-lg" style={{ margin: '0 0 1rem 0' }}>
                One local team from first tree cut to final grade.
              </h2>
              <p className="body-copy text-muted-light" style={{ margin: '0 0 1rem 0' }}>
                Buying raw land or reclaiming an overgrown yard around St. Clair County usually means
                juggling three different crews—someone to clear brush, someone else to move red clay,
                and another truck to haul debris away.
              </p>
              <p className="body-copy text-muted-light" style={{ margin: '0 0 1.5rem 0' }}>
                At 1Way Land Services, we handle the full sequence: clearing timber and undergrowth,
                shaping drainage and pads, prepping driveways, finishing yards, and hauling debris
                off site. You talk directly with the people walking your property and running the
                work.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <LinkButton variant="primary" href={BUSINESS.phoneHref}>
                  <Phone size={16} />
                  <span>Call {BUSINESS.phoneDisplay}</span>
                </LinkButton>
                <LinkButton variant="outline-light" href={BUSINESS.facebookUrl} target="_blank">
                  <span>See Us on Facebook</span>
                  <ArrowUpRight size={16} />
                </LinkButton>
              </div>
            </div>

            <div className="reg-frame">
              <SmartImage imageKey="heroClearing" aspectRatio="4 / 3" />
            </div>
          </div>
        </div>
      </section>

      {/* Three Values */}
      <section className="surface-dark section-pad">
        <div className="container">
          <div style={{ marginBottom: '2.25rem' }}>
            <div className="section-kicker" style={{ color: 'var(--color-orange-light)' }}>
              <PineGlyph size={15} />
              <span>How Every Job Runs</span>
            </div>
            <h2 className="heading-xl" style={{ margin: 0 }}>
              Three promises we keep on <span className="font-serif-accent">every acre.</span>
            </h2>
          </div>

          <div className="grid-3">
            {VALUES.map((val) => (
              <div
                key={val.code}
                style={{
                  padding: '1.75rem',
                  backgroundColor: 'var(--color-ash)',
                  border: '1px solid var(--color-hairline-dark)',
                  borderRadius: '2px',
                }}
              >
                <div
                  className="survey-numeral survey-numeral--outlined"
                  style={{ fontSize: '2.75rem', color: 'var(--color-orange)', marginBottom: '0.9rem' }}
                >
                  {val.code}
                </div>
                <h3 className="heading-md" style={{ margin: '0 0 0.65rem 0' }}>
                  {val.title}
                </h3>
                <p style={{ margin: 0, color: 'var(--color-stone-on-dark)', lineHeight: 1.6 }}>
                  {val.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="surface-bone section-pad">
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '1.25rem',
              marginBottom: '2rem',
            }}
          >
            <div>
              <div className="section-kicker">
                <StakeMarker size={16} />
                <span>What We Handle</span>
              </div>
              <h2 className="heading-lg" style={{ margin: 0 }}>
                Full-scope land &amp; dirt capabilities
              </h2>
            </div>
            <LinkButton variant="dark" to="/contact">
              <span>Request Free Estimate</span>
              <ArrowRight size={16} />
            </LinkButton>
          </div>

          <div className="grid-3">
            {SERVICES.map((srv) => (
              <div
                key={srv.slug}
                style={{
                  padding: '1.25rem',
                  backgroundColor: 'var(--color-off-white)',
                  border: '1px solid var(--color-hairline-light)',
                  borderRadius: '2px',
                }}
              >
                <div className="font-mono-label" style={{ color: 'var(--color-orange-deep)' }}>
                  {srv.code}
                </div>
                <h3 className="heading-md" style={{ fontSize: '1.15rem', margin: '0.3rem 0 0.45rem 0' }}>
                  {srv.title}
                </h3>
                <p style={{ margin: '0 0 0.85rem 0', fontSize: '0.9rem', color: 'var(--color-stone-on-light)' }}>
                  {srv.shortBlurb}
                </p>
                <LinkButton variant="ghost" size="sm" to={`/services/${srv.slug}`}>
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </LinkButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
