import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap, ScrollTrigger } from '../../lib/gsap';
import { useAppContext } from '../../app/providers';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { scrollToTopImmediate } = useAppContext();
  const reducedMotion = useReducedMotion();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const hairlineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollToTopImmediate();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    if (reducedMotion) {
      return () => cancelAnimationFrame(rafId);
    }

    try {
      if (hairlineRef.current) {
        gsap.fromTo(
          hairlineRef.current,
          { scaleX: 0, opacity: 1 },
          {
            scaleX: 1,
            opacity: 0,
            duration: 0.38,
            ease: 'power2.out',
          },
        );
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0.82, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.36,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
          },
        );
      }
    } catch {
      // Keep content visible if transition fails
    }

    return () => cancelAnimationFrame(rafId);
  }, [location.pathname, scrollToTopImmediate, reducedMotion]);

  return (
    <>
      <div ref={hairlineRef} className="route-hairline" aria-hidden="true" style={{ opacity: 0 }} />
      <div ref={contentRef}>{children}</div>
    </>
  );
}
