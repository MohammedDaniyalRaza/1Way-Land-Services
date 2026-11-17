import React, { useId, useState } from 'react';
import { Plus } from 'lucide-react';

export interface AccordionEntry {
  id: string;
  question: string;
  answer: string;
  meta?: string;
}

interface AccordionProps {
  items: AccordionEntry[];
  defaultOpenId?: string | null;
}

export function Accordion({ items, defaultOpenId = null }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);
  const baseId = useId();

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const triggerId = `${baseId}-trigger-${item.id}`;
        const panelId = `${baseId}-panel-${item.id}`;

        return (
          <div key={item.id} className="accordion__item">
            <button
              id={triggerId}
              type="button"
              className="accordion__trigger"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span>{item.question}</span>
              <span className="accordion__icon" aria-hidden="true">
                <Plus size={20} />
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className="accordion__panel"
            >
              <div className="accordion__body">
                <p style={{ margin: 0 }}>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
