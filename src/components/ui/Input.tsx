import React from 'react';
import { cx } from '../../lib/helpers';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  hint?: string;
}

export function Input({ label, id, error, hint, className, required, ...rest }: InputProps) {
  const inputId = id ?? `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  return (
    <div className="field">
      <label htmlFor={inputId} className="field__label">
        <span>
          {label}
          {required && <span style={{ color: 'var(--color-orange)' }}> *</span>}
        </span>
        {hint && (
          <span style={{ color: 'var(--color-stone-on-light)', fontWeight: 400 }}>{hint}</span>
        )}
      </label>
      <input
        id={inputId}
        required={required}
        aria-invalid={Boolean(error)}
        className={cx('field__control', error && 'field__control--error', className)}
        {...rest}
      />
      {error && (
        <span className="field__error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export function Textarea({ label, id, error, hint, className, required, ...rest }: TextareaProps) {
  const inputId = id ?? `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  return (
    <div className="field">
      <label htmlFor={inputId} className="field__label">
        <span>
          {label}
          {required && <span style={{ color: 'var(--color-orange)' }}> *</span>}
        </span>
        {hint && (
          <span style={{ color: 'var(--color-stone-on-light)', fontWeight: 400 }}>{hint}</span>
        )}
      </label>
      <textarea
        id={inputId}
        required={required}
        aria-invalid={Boolean(error)}
        className={cx(
          'field__control',
          'field__textarea',
          error && 'field__control--error',
          className,
        )}
        {...rest}
      />
      {error && (
        <span className="field__error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
