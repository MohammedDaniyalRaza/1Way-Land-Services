import React from 'react';
import { Check } from 'lucide-react';
import { cx } from '../../lib/helpers';

export interface ChoiceOption {
  id: string;
  label: string;
}

interface SingleChoiceProps {
  label?: string;
  options: ChoiceOption[];
  value: string;
  onChange: (value: string) => void;
  multiple?: false;
}

interface MultiChoiceProps {
  label?: string;
  options: ChoiceOption[];
  value: string[];
  onChange: (value: string[]) => void;
  multiple: true;
}

type ChoiceToggleProps = SingleChoiceProps | MultiChoiceProps;

export function ChoiceToggle(props: ChoiceToggleProps) {
  const { label, options } = props;

  function isSelected(id: string): boolean {
    if (props.multiple) {
      return props.value.includes(id);
    }
    return props.value === id;
  }

  function handleSelect(id: string) {
    if (props.multiple) {
      const exists = props.value.includes(id);
      const next = exists ? props.value.filter((item) => item !== id) : [...props.value, id];
      props.onChange(next);
    } else {
      props.onChange(id);
    }
  }

  return (
    <div className="field">
      {label && <span className="field__label">{label}</span>}
      <div className="choice-grid" role="group" aria-label={label}>
        {options.map((option) => {
          const active = isSelected(option.id);
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={active}
              onClick={() => handleSelect(option.id)}
              className={cx('choice-btn', active && 'choice-btn--active')}
            >
              {active && <Check size={14} />}
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
