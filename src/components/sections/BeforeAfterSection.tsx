import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';
import { SmartImage } from '../ui/SmartImage';
import { LinkButton } from '../ui/Button';
import { PineGlyph } from '../svg/PineGlyph';

export function BeforeAfterSection() {
  const previewProjects = PROJECTS.slice(0, 3);

  return (
    <section className="surface-dark section-pad">
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '1.5rem',
            marginBottom: 'clamp(1.75rem, 3.5vw, 2.75rem)',
          }}
        >
          <div>
            <div className="section-kicker" style={{ color: 'var(--color-orange-light)' }}>
              <PineGlyph size={15} />
              <span>Transformation Preview · Sample Imagery</span>
            </div>
            <h2 className="heading-xl" style={{ margin: 0, maxWidth: '17ch' }}>
              Thick woods in. <span className="font-serif-accent">Clean ground</span> out.
            </h2>
          </div>

          <LinkButton variant="outline-dark" to="/projects">
            <span>View Project Gallery</span>
            <ArrowRight size={16} />
          </LinkButton>
        </div>

        <BeforeAfterSlider
          beforeKey="overgrownBefore"
          afterKey="heroClearing"
          beforeLabel="Before · Thick Saplings & Briars"
          afterLabel="After · Cleared & Staked Pad"
        />

        <div className="grid-3" style={{ marginTop: '2.25rem' }}>
          {previewProjects.map((proj) => (
            <Link
              key={proj.id}
              to={`/services/${proj.serviceSlug}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'var(--color-ash)',
                border: '1px solid var(--color-hairline-dark)',
                borderRadius: '2px',
                overflow: 'hidden',
              }}
            >
              <SmartImage imageKey={proj.imageKey} aspectRatio="4 / 3" />
              <div style={{ padding: '1.15rem' }}>
                <div className="font-mono-label" style={{ color: 'var(--color-orange-light)', marginBottom: '0.35rem' }}>
                  {proj.serviceTitle} · {proj.location}
                </div>
                <h3 className="heading-md" style={{ fontSize: '1.15rem', margin: '0 0 0.4rem 0' }}>
                  {proj.title}
                </h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-stone-on-dark)', lineHeight: 1.55 }}>
                  {proj.scopeSummary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
