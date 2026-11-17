import React, { useRef, useState } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { ImageKey } from '../../data/images';
import { SmartImage } from './SmartImage';

interface BeforeAfterSliderProps {
  beforeKey: ImageKey;
  afterKey: ImageKey;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeKey,
  afterKey,
  beforeLabel = 'Before · Overgrown Lot',
  afterLabel = 'After · Cleared & Staked',
}: BeforeAfterSliderProps) {
  const [percent, setPercent] = useState(52);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);

  function updateFromClientX(clientX: number) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.max(4, Math.min(96, raw)));
  }

  return (
    <div
      ref={containerRef}
      className="ba-slider"
      onPointerDown={(e) => {
        draggingRef.current = true;
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        updateFromClientX(e.clientX);
      }}
      onPointerMove={(e) => {
        if (!draggingRef.current) return;
        updateFromClientX(e.clientX);
      }}
      onPointerUp={() => {
        draggingRef.current = false;
      }}
      onPointerCancel={() => {
        draggingRef.current = false;
      }}
    >
      {/* After Image (base full layer) */}
      <div className="ba-slider__layer">
        <SmartImage imageKey={afterKey} aspectRatio="16 / 9" style={{ height: '100%' }} />
      </div>

      {/* Before Image (clipped overlay) */}
      <div
        className="ba-slider__layer"
        style={{
          clipPath: `inset(0 ${100 - percent}% 0 0)`,
        }}
      >
        <SmartImage imageKey={beforeKey} aspectRatio="16 / 9" style={{ height: '100%' }} />
      </div>

      <span className="ba-slider__tag ba-slider__tag--left">{beforeLabel}</span>
      <span className="ba-slider__tag ba-slider__tag--right">{afterLabel}</span>

      <div className="ba-slider__divider" style={{ left: `${percent}%` }} />

      <button
        type="button"
        className="ba-slider__handle"
        style={{ left: `${percent}%` }}
        aria-label="Drag or use arrow keys to compare before and after land clearing"
        aria-valuemin={4}
        aria-valuemax={96}
        aria-valuenow={Math.round(percent)}
        role="slider"
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            setPercent((p) => Math.max(4, p - 4));
          } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            setPercent((p) => Math.min(96, p + 4));
          }
        }}
      >
        <MoveHorizontal size={20} />
      </button>
    </div>
  );
}
