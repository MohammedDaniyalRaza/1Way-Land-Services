import React from 'react';

interface StakeMarkerProps {
  size?: number;
  className?: string;
}

export function StakeMarker({ size = 18, className }: StakeMarkerProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect x="10.5" y="3" width="3" height="19" fill="currentColor" opacity="0.9" />
      <path d="M13.5 3.5L21 6.5L13.5 9.5V3.5Z" fill="#C4561B" />
      <line x1="6" y1="21.5" x2="18" y2="21.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
