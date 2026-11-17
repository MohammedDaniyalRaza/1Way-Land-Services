import React, { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { cx } from '../../lib/helpers';

export interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

export function CustomSelect({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  required = false,
  error,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const listboxId = useId();
  const labelId = useId();

  const selectedOption = options.find((o) => o.value === value);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        setActiveIndex(0);
      } else {
        setActiveIndex((prev) => (prev + 1) % options.length);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        setActiveIndex(options.length - 1);
      } else {
        setActiveIndex((prev) => (prev - 1 + options.length) % options.length);
      }
    } else if (e.key === 'Enter' || e.key === ' ') {
      if (open && activeIndex >= 0 && options[activeIndex]) {
        e.preventDefault();
        onChange(options[activeIndex].value);
        setOpen(false);
      }
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <div className="field" ref={wrapRef}>
      <span id={labelId} className="field__label">
        <span>
          {label}
          {required && <span style={{ color: 'var(--color-orange)' }}> *</span>}
        </span>
      </span>
      <div className="custom-select">
        <button
          type="button"
          className={cx('custom-select__trigger', error && 'field__control--error')}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={labelId}
          aria-controls={listboxId}
          onClick={() => setOpen((o) => !o)}
          onKeyDown={handleKeyDown}
        >
          <span className={!selectedOption ? 'custom-select__placeholder' : undefined}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown
            size={18}
            style={{
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 160ms ease',
              flexShrink: 0,
            }}
          />
        </button>

        {open && (
          <ul id={listboxId} role="listbox" aria-labelledby={labelId} className="custom-select__list">
            {options.map((option, idx) => {
              const isSelected = option.value === value;
              const isActive = idx === activeIndex;
              return (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  className={cx(
                    'custom-select__option',
                    isSelected && 'custom-select__option--selected',
                    !isSelected && isActive && 'custom-select__option--active',
                  )}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                >
                  <span>{option.label}</span>
                  {isSelected && <Check size={15} />}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {error && (
        <span className="field__error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
