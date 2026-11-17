import React from 'react';
import { StakeMarker } from '../svg/StakeMarker';

export interface StepItem {
  step: string;
  title: string;
  detail: string;
}

interface StepperProps {
  steps: StepItem[];
  surface?: 'light' | 'dark';
}

export function Stepper({ steps, surface = 'light' }: StepperProps) {
  const mutedColor = surface === 'light' ? 'var(--color-stone-on-light)' : 'var(--color-stone-on-dark)';
  const borderColor =
    surface === 'light' ? 'var(--color-hairline-light)' : 'var(--color-hairline-dark)';

  return (
    <ol
      style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.5rem',
      }}
    >
      {steps.map((item) => (
        <li
          key={item.step}
          style={{
            paddingTop: '1.15rem',
            borderTop: `1.5px solid ${borderColor}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <StakeMarker size={17} />
            <span className="font-mono-label" style={{ color: 'var(--color-orange)' }}>
              Step {item.step}
            </span>
          </div>
          <h3 className="heading-md" style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>
            {item.title}
          </h3>
          <p style={{ margin: 0, color: mutedColor, fontSize: '0.95rem', lineHeight: 1.6 }}>
            {item.detail}
          </p>
        </li>
      ))}
    </ol>
  );
}
