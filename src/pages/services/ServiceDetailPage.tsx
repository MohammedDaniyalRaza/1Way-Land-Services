import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { getServiceBySlug, SERVICES } from '../../data/services';
import { TESTIMONIALS } from '../../data/testimonials';
import { PROJECTS } from '../../data/projects';
import { BUSINESS } from '../../data/business';
import { usePageSeo } from '../../lib/seo';
import { PageHero } from '../../components/sections/PageHero';
import { SmartImage } from '../../components/ui/SmartImage';
import { Stepper } from '../../components/ui/Stepper';
import { Accordion } from '../../components/ui/Accordion';
import { LinkButton } from '../../components/ui/Button';
import { CtaBand } from '../../components/sections/CtaBand';
import { StakeMarker } from '../../components/svg/StakeMarker';
import { PineGlyph } from '../../components/svg/PineGlyph';
import NotFoundPage from '../NotFoundPage';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);

  const serviceJsonLd = useMemo(() => {
    if (!service) return undefined;
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      serviceType: service.title,
      provider: {
        '@type': 'LocalBusiness',
        name: BUSINESS.name,
        telephone: BUSINESS.phoneDisplay,
      },
      areaServed: 'Pell City, Logan Martin Lake, and Birmingham to Oxford along I-20, Alabama',
      description: service.overview,
    };
  }, [service]);

  usePageSeo({
    title: service
      ? `${service.title} in Pell City, AL | ${BUSINESS.name}`
      : `Service Not Found | ${BUSINESS.name}`,
    description: service
      ? `${service.shortBlurb} Serving Pell City, Logan Martin Lake, and Birmingham to Oxford.`
      : BUSINESS.serviceAreaSummary,
    path: service ? `/services/${service.slug}` : '/services',
    jsonLd: serviceJsonLd,
  });

  if (!service) {
    return <NotFoundPage />;
  }

  const relatedServices = service.relatedSlugs
    .map((relSlug) => SERVICES.find((item) => item.slug === relSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const matchingTestimonials = TESTIMONIALS.filter((t) => t.serviceSlug === service.slug);
  const matchingProjects = PROJECTS.filter((p) => p.serviceSlug === service.slug);
  const galleryProjects =
    matchingProjects.length >= 2 ? matchingProjects : [...matchingProjects, ...PROJECTS.slice(0, 2)];

  const accordionFaqs = service.faqs.map((faq, idx) => ({
    id: `${service.slug}-faq-${idx}`,
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <>
      <PageHero
        imageKey={service.heroImageKey}
        kicker={`${service.code} · ${service.phase} · Pell City, AL`}
        title={service.title}
        subtitle={service.shortBlurb}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
        secondaryCta={{ label: 'Get a Free Estimate', to: '/contact' }}
        bottomFill="#F2EEE6"
      />

      {/* Overview + Who It's For */}
      <section className="surface-light section-pad">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'clamp(2rem, 5vw, 4rem)',
              alignItems: 'center',
            }}
          >
            <div>
              <div className="section-kicker">
                <StakeMarker size={16} />
                <span>Service Overview</span>
              </div>
              <h2 className="heading-lg" style={{ margin: '0 0 1rem 0' }}>
                Practical {service.title.toLowerCase()} for Alabama ground.
              </h2>
              <p className="body-copy text-muted-light" style={{ margin: '0 0 1.5rem 0' }}>
                {service.overview}
              </p>

              <h3 className="font-mono-label" style={{ color: 'var(--color-orange-deep)', margin: '0 0 0.75rem 0' }}>
                Who Typically Calls Us For {service.title}
              </h3>
              <ul
                style={{
                  listStyle: 'none',
                  margin: '0 0 1.75rem 0',
                  padding: 0,
                  display: 'grid',
                  gap: '0.55rem',
                }}
              >
                {service.whoItsFor.map((audience) => (
                  <li key={audience} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                    <CheckCircle2 size={17} style={{ color: 'var(--color-orange)', flexShrink: 0, marginTop: '3px' }} />
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <LinkButton
                  variant="primary"
                  to="/contact"
                  state={{ prefillServices: [service.slug] }}
                >
                  <span>Request {service.title} Estimate</span>
                  <ArrowRight size={16} />
                </LinkButton>
                <LinkButton variant="outline-light" href={BUSINESS.phoneHref}>
                  <Phone size={16} />
                  <span>{BUSINESS.phoneDisplay}</span>
                </LinkButton>
              </div>
            </div>

            <div className="reg-frame">
              <SmartImage imageKey={service.secondaryImageKey} aspectRatio="4 / 3" />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included + Typical Projects */}
      <section className="surface-dark section-pad">
        <div className="container">
          <div className="grid-2">
            <div
              style={{
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                backgroundColor: 'var(--color-ash)',
                border: '1px solid var(--color-hairline-dark)',
                borderRadius: '2px',
              }}
            >
              <div className="section-kicker" style={{ color: 'var(--color-orange-light)' }}>
                <PineGlyph size={15} />
                <span>What&apos;s Included</span>
              </div>
              <h2 className="heading-md" style={{ margin: '0 0 1.25rem 0' }}>
                Standard scope items on site
              </h2>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.8rem' }}>
                {service.whatsIncluded.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: 'rgba(242,238,230,0.9)' }}>
                    <StakeMarker size={16} className="text-orange-bright" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                backgroundColor: 'var(--color-ash)',
                border: '1px solid var(--color-hairline-dark)',
                borderRadius: '2px',
              }}
            >
              <div className="section-kicker" style={{ color: 'var(--color-orange-light)' }}>
                <PineGlyph size={15} />
                <span>Typical Projects</span>
              </div>
              <h2 className="heading-md" style={{ margin: '0 0 1.25rem 0' }}>
                Common jobs around Pell City &amp; I-20
              </h2>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.8rem' }}>
                {service.typicalProjects.map((proj) => (
                  <li key={proj} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: 'rgba(242,238,230,0.9)' }}>
                    <CheckCircle2 size={16} className="text-orange-bright" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{proj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="surface-light section-pad">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <div className="section-kicker">
              <StakeMarker size={16} />
              <span>Step-by-Step</span>
            </div>
            <h2 className="heading-lg" style={{ margin: 0 }}>
              How we handle {service.title.toLowerCase()}.
            </h2>
          </div>

          <Stepper steps={service.processSteps} surface="light" />
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="surface-bone section-pad-tight">
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            <div>
              <div className="font-mono-label" style={{ color: 'var(--color-orange-deep)' }}>
                Sample Imagery · Field Reference
              </div>
              <h2 className="heading-md" style={{ margin: '0.25rem 0 0 0' }}>
                Examples of {service.title} work
              </h2>
            </div>
            <LinkButton variant="outline-light" size="sm" to="/projects">
              <span>Full Project Gallery</span>
              <ArrowRight size={15} />
            </LinkButton>
          </div>

          <div className="grid-2">
            {galleryProjects.slice(0, 2).map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: 'var(--color-off-white)',
                  border: '1px solid var(--color-hairline-light)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                <SmartImage imageKey={item.imageKey} aspectRatio="16 / 10" />
                <div style={{ padding: '1rem 1.15rem' }}>
                  <div className="font-mono-label" style={{ color: 'var(--color-orange-deep)' }}>
                    {item.location}
                  </div>
                  <div style={{ fontWeight: 700, marginTop: '0.2rem' }}>{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtered Testimonials */}
      {matchingTestimonials.length > 0 && (
        <section className="surface-dark section-pad-tight">
          <div className="container">
            <div className="section-kicker" style={{ color: 'var(--color-orange-light)' }}>
              <span>Sample Customer Feedback</span>
            </div>
            <div className="grid-2">
              {matchingTestimonials.map((t) => (
                <blockquote
                  key={t.id}
                  style={{
                    margin: 0,
                    padding: '1.5rem',
                    backgroundColor: 'var(--color-ash)',
                    border: '1px solid var(--color-hairline-dark)',
                    borderRadius: '2px',
                  }}
                >
                  <p style={{ margin: '0 0 1rem 0', lineHeight: 1.6 }}>&ldquo;{t.quote}&rdquo;</p>
                  <footer className="font-mono-label" style={{ color: 'var(--color-orange-light)' }}>
                    {t.name} · {t.town}, AL
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service FAQs */}
      <section className="surface-light section-pad">
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <div className="section-kicker">
              <StakeMarker size={16} />
              <span>{service.title} FAQs</span>
            </div>
            <h2 className="heading-lg" style={{ margin: '0 0 1.5rem 0' }}>
              Common questions about {service.title.toLowerCase()}.
            </h2>
            <Accordion items={accordionFaqs} defaultOpenId={accordionFaqs[0]?.id} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="surface-bone section-pad-tight">
        <div className="container">
          <h2 className="heading-md" style={{ margin: '0 0 1.25rem 0' }}>
            Services often paired with {service.title}
          </h2>
          <div className="grid-3">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                to={`/services/${rel.slug}`}
                style={{
                  padding: '1.25rem',
                  backgroundColor: 'var(--color-off-white)',
                  border: '1px solid var(--color-hairline-light)',
                  borderRadius: '2px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                }}
              >
                <div>
                  <div className="font-mono-label" style={{ color: 'var(--color-orange-deep)' }}>
                    {rel.code}
                  </div>
                  <h3 className="heading-md" style={{ fontSize: '1.18rem', margin: '0.25rem 0 0.4rem 0' }}>
                    {rel.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-stone-on-light)' }}>
                    {rel.shortBlurb}
                  </p>
                </div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 700, fontSize: '0.88rem' }}>
                  <span>Explore</span>
                  <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        imageKey={service.heroImageKey}
        heading={
          <>
            Need {service.title.toLowerCase()} in <span className="font-serif-accent">Pell City</span> or along I-20?
          </>
        }
      />
    </>
  );
}
