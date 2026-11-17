import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { IMAGES } from '../../data/images';
import { StakeMarker } from '../svg/StakeMarker';
import { LinkButton } from '../ui/Button';

export function ServicesShowcase() {
  const [hoveredSlug, setHoveredSlug] = useState<string>(SERVICES[0].slug);
  const activeService = SERVICES.find((s) => s.slug === hoveredSlug) ?? SERVICES[0];
  const activeAsset = IMAGES[activeService.heroImageKey];

  return (
    <section className="surface-light section-pad">
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '1.5rem',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          <div>
            <div className="section-kicker">
              <StakeMarker size={16} />
              <span>Our 7 Core Services</span>
            </div>
            <h2 className="heading-xl" style={{ margin: 0, maxWidth: '16ch' }}>
              Work built for Alabama <span className="font-serif-accent">clay &amp; pines.</span>
            </h2>
          </div>

          <LinkButton variant="dark" to="/services">
            <span>Compare All Services</span>
            <ArrowUpRight size={17} />
          </LinkButton>
        </div>

        {/* Desktop Preview Stage + Interactive Index */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr)',
            gap: '2.5rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
              alignItems: 'center',
              backgroundColor: 'var(--color-bone)',
              padding: 'clamp(1rem, 2.5vw, 1.5rem)',
              border: '1px solid var(--color-hairline-light)',
            }}
          >
            <div style={{ aspectRatio: '16 / 9', overflow: 'hidden', backgroundColor: 'var(--color-ash)' }}>
              <img
                src={activeAsset.url}
                alt={activeAsset.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: activeAsset.focalPoint }}
              />
            </div>

            <div>
              <div className="font-mono-label" style={{ color: 'var(--color-orange-deep)', marginBottom: '0.35rem' }}>
                {activeService.code} · {activeService.phase}
              </div>
              <h3 className="heading-lg" style={{ margin: '0 0 0.55rem 0' }}>
                {activeService.title}
              </h3>
              <p style={{ margin: '0 0 1.15rem 0', color: 'var(--color-stone-on-light)', lineHeight: 1.6 }}>
                {activeService.overview}
              </p>
              <LinkButton variant="dark" size="sm" to={`/services/${activeService.slug}`}>
                <span>Explore {activeService.title}</span>
                <ArrowUpRight size={15} />
              </LinkButton>
            </div>
          </div>

          <div className="services-index">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="services-index__row"
                onMouseEnter={() => setHoveredSlug(service.slug)}
                onFocus={() => setHoveredSlug(service.slug)}
              >
                <span className="font-mono-label" style={{ color: 'var(--color-orange-deep)' }}>
                  {service.code}
                </span>
                <span className="heading-md" style={{ fontSize: 'clamp(1.2rem, 1.5vw, 1.55rem)' }}>
                  {service.title}
                </span>
                <span style={{ color: 'var(--color-stone-on-light)', fontSize: '0.94rem', lineHeight: 1.5 }}>
                  {service.shortBlurb}
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    color: 'var(--color-charcoal)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span>View Scope</span>
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
