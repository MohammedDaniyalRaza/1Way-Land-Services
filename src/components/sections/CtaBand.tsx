import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { BUSINESS } from '../../data/business';
import { ImageKey, IMAGES } from '../../data/images';
import { LinkButton } from '../ui/Button';
import { ContourLines } from '../svg/ContourLines';

interface CtaBandProps {
  imageKey?: ImageKey;
  kicker?: string;
  heading?: React.ReactNode;
  body?: string;
}

export function CtaBand({
  imageKey = 'loganMartinLot',
  kicker = 'Free On-Site Estimates · Pell City & I-20 Corridor',
  heading = (
    <>
      Ready to turn raw ground into <span className="font-serif-accent">usable land?</span>
    </>
  ),
  body = 'Call directly to talk through your acreage, lot clearing, grading, or hauling project—or send your property details online for a free estimate.',
}: CtaBandProps) {
  const asset = IMAGES[imageKey];

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--color-charcoal)',
        color: 'var(--color-off-white)',
        paddingBlock: 'clamp(4.25rem, 8vw, 6.75rem)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <img
          src={asset.url}
          alt={asset.alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: asset.focalPoint,
          }}
        />
      </div>

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(110deg, rgba(14,14,13,0.92) 0%, rgba(14,14,13,0.78) 55%, rgba(14,14,13,0.68) 100%)',
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          opacity: 0.24,
          pointerEvents: 'none',
        }}
      >
        <ContourLines variant="on-dark" animated={false} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div style={{ maxWidth: '720px' }}>
          <div className="section-kicker" style={{ color: 'var(--color-orange-light)' }}>
            <span>{kicker}</span>
          </div>
          <h2 className="heading-xl" style={{ margin: '0 0 1rem 0' }}>
            {heading}
          </h2>
          <p className="body-lead" style={{ margin: '0 0 2rem 0', color: 'rgba(242,238,230,0.88)' }}>
            {body}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
            <LinkButton variant="primary" size="lg" href={BUSINESS.phoneHref}>
              <Phone size={18} />
              <span>Call {BUSINESS.phoneDisplay}</span>
            </LinkButton>
            <LinkButton variant="light" size="lg" to="/contact">
              <span>Request a Free Estimate</span>
              <ArrowRight size={18} />
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
