import React, { useRef } from 'react';
import { gsap } from '../../lib/gsap';
import { useGsapContext } from '../../hooks/useGsapContext';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ContourLinesProps {
  variant?: 'on-dark' | 'on-light';
  animated?: boolean;
  className?: string;
}

export function ContourLines({
  variant = 'on-dark',
  animated = true,
  className = '',
}: ContourLinesProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const reducedMotion = useReducedMotion();

  useGsapContext(
    () => {
      if (!animated || reducedMotion || !svgRef.current) return;
      const paths = svgRef.current.querySelectorAll<SVGPathElement>('.contour-path');
      paths.forEach((path, index) => {
        const length = path.getTotalLength ? path.getTotalLength() : 900;
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length * 0.3 });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.6 + index * 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: svgRef.current,
            start: 'top 90%',
            once: true,
          },
        });
      });
    },
    [animated, reducedMotion],
    svgRef,
  );

  const strokeColor =
    variant === 'on-dark' ? 'rgba(242, 238, 230, 0.24)' : 'rgba(139, 135, 127, 0.28)';
  const accentColor =
    variant === 'on-dark' ? 'rgba(224, 118, 58, 0.35)' : 'rgba(196, 86, 27, 0.24)';

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1440 600"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      <path
        className="contour-path"
        d="M-40 460C180 430 290 310 510 330C730 350 860 490 1090 440C1280 398 1360 280 1490 300"
        stroke={strokeColor}
        strokeWidth="1.25"
      />
      <path
        className="contour-path"
        d="M-60 390C160 355 310 245 535 268C760 290 890 415 1125 365C1300 328 1390 215 1500 235"
        stroke={strokeColor}
        strokeWidth="1.1"
      />
      <path
        className="contour-path"
        d="M-40 315C190 275 330 180 560 205C790 230 925 345 1150 295C1330 255 1410 145 1510 170"
        stroke={accentColor}
        strokeWidth="1.25"
      />
      <path
        className="contour-path"
        d="M-30 230C215 190 365 112 595 140C830 170 960 270 1190 220C1360 182 1435 88 1520 110"
        stroke={strokeColor}
        strokeWidth="1"
      />
      <path
        className="contour-path"
        d="M40 530C260 500 410 400 620 420C840 440 990 545 1210 500C1350 472 1430 390 1510 405"
        stroke={strokeColor}
        strokeWidth="1"
      />
    </svg>
  );
}
