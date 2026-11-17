import React, { useState } from 'react';
import { Info } from 'lucide-react';

interface TooltipProps {
  text: string;
  label?: string;
}

export function Tooltip({ text, label = 'More details' }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="tooltip-wrap"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <button
        type="button"
        aria-label={label}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        onClick={() => setVisible((v) => !v)}
        style={{
          background: 'transparent',
          border: 0,
          padding: '4px',
          color: 'inherit',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        <Info size={15} />
      </button>
      {visible && (
        <span role="tooltip" className="tooltip-box">
          {text}
        </span>
      )}
    </span>
  );
}
