import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import {
  LAND_GOALS,
  LAND_SIZES,
  LAND_TYPES,
  getScoperRecommendation,
} from '../../data/scoper';
import { getServiceBySlug } from '../../data/services';
import { BUSINESS } from '../../data/business';
import { ChoiceToggle } from '../ui/ChoiceToggle';
import { LinkButton } from '../ui/Button';
import { StakeMarker } from '../svg/StakeMarker';

export function ProjectScoper() {
  const [landType, setLandType] = useState(LAND_TYPES[0].id);
  const [size, setSize] = useState(LAND_SIZES[1].id);
  const [goal, setGoal] = useState(LAND_GOALS[0].id);

  const result = getScoperRecommendation(landType, size, goal);

  const prefillState = {
    prefillServices: result.recommendedSlugs,
    prefillAcreage: size,
    prefillPropertyType: landType,
    prefillNotes: `Project Scoper summary: ${result.headline}`,
  };

  return (
    <section className="surface-bone section-pad" id="project-scoper">
      <div className="container">
        <div style={{ marginBottom: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
          <div className="section-kicker">
            <StakeMarker size={16} />
            <span>Interactive Project Scoper</span>
          </div>
          <h2 className="heading-xl" style={{ margin: 0, maxWidth: '18ch' }}>
            Not sure where to start? <span className="font-serif-accent">Scope your ground.</span>
          </h2>
          <p className="body-copy text-muted-light" style={{ marginTop: '0.8rem' }}>
            Pick your terrain, rough acreage, and goal to see which 1Way services fit best—then send
            those notes straight to our estimate form.
          </p>
        </div>

        <div className="scoper-layout">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.65rem' }}>
            <ChoiceToggle
              label="1. What does the ground look like today?"
              options={LAND_TYPES}
              value={landType}
              onChange={setLandType}
            />

            <ChoiceToggle
              label="2. Approximate acreage or lot size"
              options={LAND_SIZES}
              value={size}
              onChange={setSize}
            />

            <ChoiceToggle
              label="3. What is your main goal?"
              options={LAND_GOALS}
              value={goal}
              onChange={setGoal}
            />
          </div>

          <div className="scoper-result reg-frame" aria-live="polite">
            <span className="font-mono-label" style={{ color: 'var(--color-orange-light)' }}>
              Recommended Scope
            </span>
            <h3 className="heading-md" style={{ margin: '0.55rem 0 0.65rem 0' }}>
              {result.headline}
            </h3>
            <p style={{ margin: '0 0 1.25rem 0', color: 'var(--color-stone-on-dark)', fontSize: '0.94rem', lineHeight: 1.55 }}>
              {result.summary}
            </p>

            <div style={{ marginBottom: '1.25rem' }}>
              <div className="font-mono-label" style={{ color: 'var(--color-stone-on-dark)', marginBottom: '0.55rem' }}>
                Suggested Services
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {result.recommendedSlugs.map((slug) => {
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
                        padding: '0.45rem 0.75rem',
                        backgroundColor: 'var(--color-soft-charcoal)',
                        border: '1px solid var(--color-hairline-dark)',
                        color: 'var(--color-off-white)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        borderRadius: '2px',
                      }}
                    >
                      <span>{srv.title}</span>
                      <ArrowRight size={13} />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div className="font-mono-label" style={{ color: 'var(--color-stone-on-dark)', marginBottom: '0.55rem' }}>
                Typical Field Steps
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                {result.checklist.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.55rem',
                      fontSize: '0.9rem',
                      color: 'rgba(242,238,230,0.88)',
                    }}
                  >
                    <CheckCircle2 size={16} className="text-orange-bright" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              <LinkButton variant="primary" to="/contact" state={prefillState}>
                <span>Send This to 1Way</span>
                <ArrowRight size={16} />
              </LinkButton>
              <LinkButton variant="outline-dark" href={BUSINESS.phoneHref}>
                <Phone size={15} />
                <span>Call {BUSINESS.phoneDisplay}</span>
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
