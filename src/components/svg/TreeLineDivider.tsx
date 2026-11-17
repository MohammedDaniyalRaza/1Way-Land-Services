import React from 'react';

interface TreeLineDividerProps {
  fillTop?: string;
  fillBottom?: string;
  flip?: boolean;
}

export function TreeLineDivider({
  fillTop = 'transparent',
  fillBottom = '#0E0E0D',
  flip = false,
}: TreeLineDividerProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        backgroundColor: fillTop,
        lineHeight: 0,
        transform: flip ? 'scaleY(-1)' : undefined,
        overflow: 'hidden',
      }}
    >
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '38px', display: 'block' }}
      >
        <path
          d="M0 48V34L22 20L40 34L62 12L84 34L112 24L134 36L164 14L192 34L228 22L254 35L288 9L318 33L356 21L386 35L420 16L454 34L492 24L524 36L562 8L594 32L632 20L668 35L704 14L738 33L778 23L812 36L852 10L886 33L924 21L960 35L998 15L1032 34L1072 22L1108 36L1148 11L1182 33L1220 20L1258 35L1296 14L1332 33L1372 22L1404 35L1440 18V48H0Z"
          fill={fillBottom}
        />
      </svg>
    </div>
  );
}
