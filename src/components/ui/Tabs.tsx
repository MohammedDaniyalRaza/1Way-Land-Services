import React from 'react';
import { cx } from '../../lib/helpers';

export interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  ariaLabel?: string;
}

export function Tabs({ items, activeId, onChange, ariaLabel = 'Categories' }: TabsProps) {
  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const idx = items.findIndex((item) => item.id === activeId);
    if (idx === -1) return;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      onChange(items[(idx + 1) % items.length].id);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      onChange(items[(idx - 1 + items.length) % items.length].id);
    }
  }

  return (
    <div className="tabs-bar" role="tablist" aria-label={ariaLabel} onKeyDown={handleKeyDown}>
      {items.map((item) => {
        const active = item.id === activeId;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(item.id)}
            className={cx('tab-btn', active && 'tab-btn--active')}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
