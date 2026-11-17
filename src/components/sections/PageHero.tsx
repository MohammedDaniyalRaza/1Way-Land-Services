import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { ImageKey, IMAGES } from '../../data/images';
import { BUSINESS } from '../../data/business';
import { gsap } from '../../lib/gsap';
import { useAppContext } from '../../app/providers';
import { useGsapContext } from '../../hooks/useGsapContext';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { LinkButton } from '../ui/Button';
import { ContourLines } from '../svg/ContourLines';
import { PineGlyph } from '../svg/PineGlyph';
import { TreeLineDivider } from '../svg/TreeLineDivider';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageHeroProps {
  imageKey: ImageKey;
  kicker: string;
  title: React.ReactNode;
  subtitle: string;
  breadcrumbs?: BreadcrumbItem[];
  metaItems?: string[];
  isHome?: boolean;
  bottomFill?: string;
  secondaryCta?: {
    label: string;
    to: string;
  };
}

export function PageHero({
  imageKey,
  kicker,
  title,
  subtitle,
  breadcrumbs,
  metaItems,
  isHome = false,
  bottomFill = '#F2EEE6',
  secondaryCta = { label: 'Get a Free Estimate', to: '/contact' },
}: PageHeroProps) {
  const { appReady } = useAppContext();
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const asset = IMAGES[imageKey];

  useGsapContext(
    () => {
      if (!appReady || reducedMotion || !sectionRef.current) return;

      if (contentRef.current) {
        const items = contentRef.current.querySelectorAll('.hero-reveal');
        gsap.from(items, {
          y: 20,
          opacity: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        });
      }

      if (mediaRef.current) {
        gsap.to(mediaRef.current, {
          yPercent: 10,
          scale: 1.05,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    },
    [appReady, reducedMotion, imageKey],
    sectionRef,
  );

  return (
    <section
      ref={sectionRef}
      className={`page-hero ${isHome ? 'page-hero--home' : ''}`}
      aria-label="Page introduction"
    >
      <div ref={mediaRef} className="page-hero__media">
        <img
          src={asset.url}
          alt={asset.alt}
          loading="eager"
          decoding="sync"
          referrerPolicy="no-referrer"
          style={{ objectPosition: asset.focalPoint }}
        />
      </div>

      <div className="page-hero__scrim" aria-hidden="true" />

      <div className="page-hero__contours" aria-hidden="true">
        <ContourLines variant="on-dark" animated={false} />
      </div>

      <div className="container page-hero__content" ref={contentRef}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="hero-reveal" style={{ marginBottom: '1rem' }}>
            <ol
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.45rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--color-stone-on-dark)',
              }}
            >
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={crumb.label}>
                  {idx > 0 && <li aria-hidden="true">/</li>}
                  <li>
                    {crumb.to ? (
                      <Link to={crumb.to} style={{ color: 'var(--color-off-white)' }}>
                        {crumb.label}
                      </Link>
                    ) : (
                      <span style={{ color: 'var(--color-orange-light)' }}>{crumb.label}</span>
                    )}
                  </li>
                </React.Fragment>
              ))}
            </ol>
          </nav>
        )}

        <div className="section-kicker hero-reveal" style={{ color: 'var(--color-orange-light)' }}>
          <PineGlyph size={15} />
          <span>{kicker}</span>
        </div>

        <h1
          className={`${isHome ? 'heading-hero' : 'heading-xl'} hero-reveal`}
          style={{ margin: 0, maxWidth: '18ch', color: 'var(--color-off-white)' }}
        >
          {title}
        </h1>

        <p
          className="body-lead hero-reveal"
          style={{ margin: '1.15rem 0 0 0', color: 'rgba(242, 238, 230, 0.9)' }}
        >
          {subtitle}
        </p>

        <div className="page-hero__ctas hero-reveal">
          <LinkButton variant="primary" size="lg" href={BUSINESS.phoneHref}>
            <Phone size={18} />
            <span>Call {BUSINESS.phoneDisplay}</span>
          </LinkButton>
          <LinkButton variant="light" size="lg" to={secondaryCta.to}>
            <span>{secondaryCta.label}</span>
            <ArrowRight size={18} />
          </LinkButton>
        </div>

        {metaItems && metaItems.length > 0 && (
          <div className="page-hero__meta hero-reveal">
            {metaItems.map((item, idx) => (
              <React.Fragment key={item}>
                {idx > 0 && (
                  <span aria-hidden="true" style={{ color: 'var(--color-orange-light)' }}>
                    ·
                  </span>
                )}
                <span>{item}</span>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: -1,
          zIndex: 4,
          pointerEvents: 'none',
        }}
      >
        <TreeLineDivider fillTop="transparent" fillBottom={bottomFill} />
      </div>
    </section>
  );
}
