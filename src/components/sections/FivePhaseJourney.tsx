import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FIVE_PHASES } from '../../data/nav';
import { getServiceBySlug } from '../../data/services';
import { gsap } from '../../lib/gsap';
import { useGsapContext } from '../../hooks/useGsapContext';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { SmartImage } from '../ui/SmartImage';
import { LinkButton } from '../ui/Button';
import { PineGlyph } from '../svg/PineGlyph';
import { StakeMarker } from '../svg/StakeMarker';

export function FivePhaseJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();

  useGsapContext(
    () => {
      if (reducedMotion || !sectionRef.current) return;
      const mm = gsap.matchMedia();

      mm.add('(min-width: 961px)', () => {
        const cards = sectionRef.current?.querySelectorAll<HTMLElement>('.journey-step');
        cards?.forEach((card, idx) => {
          gsap.fromTo(
            card,
            { opacity: 0.92 },
            {
              opacity: 1,
              scrollTrigger: {
                trigger: card,
                start: 'top 56%',
                end: 'bottom 44%',
                onEnter: () => setActiveIndex(idx),
                onEnterBack: () => setActiveIndex(idx),
              },
            },
          );
        });
      });

      return () => mm.revert();
    },
    [reducedMotion],
    sectionRef,
  );

  const activePhase = FIVE_PHASES[activeIndex] ?? FIVE_PHASES[0];

  return (
    <section ref={sectionRef} className="surface-dark section-pad">
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '1.5rem',
            marginBottom: 'clamp(2rem, 4vw, 3.25rem)',
          }}
        >
          <div>
            <div className="section-kicker" style={{ color: 'var(--color-orange-light)' }}>
              <PineGlyph size={15} />
              <span>The 5-Phase Process · Raw Land to Ready Ground</span>
            </div>
            <h2 className="heading-xl" style={{ margin: 0, maxWidth: '16ch' }}>
              Five steps from <span className="font-serif-accent">overgrown</span> to build-ready.
            </h2>
          </div>

          <p className="body-copy" style={{ margin: 0, color: 'var(--color-stone-on-dark)', maxWidth: '40ch' }}>
            Every tract is different, so we sequence clearing, earthwork, site prep, finish work,
            and hauling in the order that saves rework and keeps water where it belongs.
          </p>
        </div>

        <div className="journey-desktop">
          {/* Interactive Phase Rail */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {FIVE_PHASES.map((phase, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={phase.phaseNumber}
                  className={`journey-step ${isActive ? 'journey-step--active' : ''}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveIndex(index);
                    }
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      marginBottom: '0.55rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <StakeMarker size={16} />
                      <span
                        className="font-mono-label"
                        style={{ color: isActive ? 'var(--color-orange-light)' : 'var(--color-stone-on-dark)' }}
                      >
                        {phase.coord}
                      </span>
                    </div>
                    <span
                      className="survey-numeral"
                      style={{
                        fontSize: '1.65rem',
                        color: isActive ? 'var(--color-orange)' : 'rgba(242,238,230,0.28)',
                      }}
                    >
                      {phase.phaseNumber}
                    </span>
                  </div>

                  <h3 className="heading-md" style={{ margin: '0 0 0.35rem 0' }}>
                    {phase.phaseTitle} —{' '}
                    <span style={{ fontWeight: 500, color: 'var(--color-stone-on-dark)', fontSize: '0.92em' }}>
                      {phase.subtitle}
                    </span>
                  </h3>

                  <p style={{ margin: '0 0 0.85rem 0', color: 'var(--color-stone-on-dark)', fontSize: '0.94rem', lineHeight: 1.55 }}>
                    {phase.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.25rem' }}>
                    {phase.serviceSlugs.map((slug) => {
                      const srv = getServiceBySlug(slug);
                      if (!srv) return null;
                      return (
                        <Link
                          key={slug}
                          to={`/services/${srv.slug}`}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            fontSize: '0.86rem',
                            fontWeight: 600,
                            color: 'var(--color-orange-light)',
                          }}
                        >
                          <span>{srv.title}</span>
                          <ArrowRight size={14} />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Stage Visual */}
          <div className="journey-sticky-media">
            <div
              className="reg-frame"
              style={{
                backgroundColor: 'var(--color-ash)',
                border: '1px solid var(--color-hairline-dark)',
                padding: 'clamp(0.85rem, 2vw, 1.25rem)',
              }}
            >
              <SmartImage imageKey={activePhase.imageKey} aspectRatio="4 / 3" />

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginTop: '1.1rem',
                }}
              >
                <div>
                  <div className="font-mono-label" style={{ color: 'var(--color-orange-light)' }}>
                    Phase {activePhase.phaseNumber} · {activePhase.phaseTitle}
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, marginTop: '0.2rem' }}>
                    {activePhase.subtitle}
                  </div>
                </div>

                <LinkButton variant="primary" size="sm" to="/contact">
                  <span>Start Phase {activePhase.phaseNumber}</span>
                  <ArrowRight size={15} />
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
