import React from 'react';

interface PineGlyphProps {
  size?: number;
  className?: string;
}

export function PineGlyph({ size = 16, className }: PineGlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 2L6.5 9.5H10L5.5 15.5H9.5L5 20.5H19L14.5 15.5H18.5L14 9.5H17.5L12 2Z"
        fill="currentColor"
      />
      <rect x="11" y="19.5" width="2" height="3" fill="currentColor" />
    </svg>
  );
}
