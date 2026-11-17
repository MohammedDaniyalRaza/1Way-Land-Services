import React, { useState } from 'react';
import { IMAGES, ImageKey } from '../../data/images';
import { ScrollTrigger } from '../../lib/gsap';
import { cx } from '../../lib/helpers';
import { PineGlyph } from '../svg/PineGlyph';
import { ContourLines } from '../svg/ContourLines';

interface SmartImageProps {
  imageKey: ImageKey;
  aspectRatio?: string;
  eager?: boolean;
  className?: string;
  imgClassName?: string;
  style?: React.CSSProperties;
  altOverride?: string;
}

export function SmartImage({
  imageKey,
  aspectRatio = '16 / 10',
  eager = false,
  className,
  imgClassName,
  style,
  altOverride,
}: SmartImageProps) {
  const asset = IMAGES[imageKey];
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={cx('smart-image', className)}
      style={{
        aspectRatio,
        ...style,
      }}
    >
      {!hasError ? (
        <img
          src={asset.url}
          alt={altOverride ?? asset.alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding={eager ? 'sync' : 'async'}
          referrerPolicy="no-referrer"
          className={imgClassName}
          style={{
            objectPosition: asset.focalPoint,
            opacity: isLoaded || eager ? 1 : 0.85,
          }}
          onLoad={() => {
            setIsLoaded(true);
            ScrollTrigger.refresh();
          }}
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="smart-image__fallback" role="img" aria-label={altOverride ?? asset.alt}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.3,
              pointerEvents: 'none',
            }}
          >
            <ContourLines variant="on-dark" animated={false} />
          </div>
          <PineGlyph size={34} className="text-orange-bright" />
          <span className="font-mono-label" style={{ position: 'relative', zIndex: 1 }}>
            1Way Land Services · Pell City, AL
          </span>
        </div>
      )}
    </div>
  );
}
