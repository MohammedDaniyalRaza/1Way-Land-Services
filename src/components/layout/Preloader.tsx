import React, { useEffect, useRef, useState } from 'react';
import { BUSINESS } from '../../data/business';
import { gsap } from '../../lib/gsap';
import { useAppContext } from '../../app/providers';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { PineGlyph } from '../svg/PineGlyph';

export function Preloader() {
  const { showPreloader, markAppReady } = useAppContext();
  const reducedMotion = useReducedMotion();
  const [exiting, setExiting] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const completedRef = useRef(false);

  useEffect(() => {
    if (!showPreloader) return;

    const finish = () => {
      if (completedRef.current) return;
      completedRef.current = true;
      setExiting(true);

      try {
        if (reducedMotion || !rootRef.current) {
          markAppReady();
          return;
        }
        gsap.to(rootRef.current, {
          yPercent: -100,
          duration: 0.52,
          ease: 'power3.inOut',
          onComplete: () => markAppReady(),
        });
      } catch {
        markAppReady();
      }
    };

    // Hard 3s failsafe so the preloader can never block the page
    const failsafeTimer = window.setTimeout(() => {
      finish();
    }, 3000);

    let cancelled = false;
    const minWait = new Promise<void>((resolve) => window.setTimeout(resolve, reducedMotion ? 160 : 900));
    const fontGate = Promise.race([
      document.fonts?.ready ?? Promise.resolve(),
      new Promise<void>((resolve) => window.setTimeout(resolve, 1200)),
    ]);

    try {
      if (barRef.current && !reducedMotion) {
        gsap.fromTo(
          barRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 1.15, ease: 'power2.out' },
        );
      }
    } catch {
      // Ignore animation failure
    }

    Promise.all([minWait, fontGate])
      .catch(() => {})
      .finally(() => {
        if (!cancelled) {
          finish();
        }
      });

    return () => {
      cancelled = true;
      window.clearTimeout(failsafeTimer);
    };
  }, [showPreloader, markAppReady, reducedMotion]);

  if (!showPreloader) return null;

  return (
    <div
      ref={rootRef}
      className={`preloader ${exiting ? 'preloader--exiting' : ''}`}
      role="status"
      aria-label="Loading 1Way Land Services"
    >
      <img
        src={BUSINESS.logoPath}
        alt={BUSINESS.name}
        className="preloader__logo"
        width={96}
        height={96}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <PineGlyph size={14} className="text-orange-bright" />
        <span className="font-mono-label" style={{ color: 'var(--color-stone-on-dark)' }}>
          Pell City, Alabama
        </span>
      </div>

      <div className="preloader__track" aria-hidden="true">
        <div ref={barRef} className="preloader__bar" />
      </div>
    </div>
  );
}
