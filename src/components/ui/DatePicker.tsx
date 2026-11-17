import React, { useEffect, useRef, useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface DatePickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export function DatePicker({
  label,
  value,
  onChange,
  placeholder = 'Choose preferred walk-through date (optional)',
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onOutside);
    return () => document.removeEventListener('mousedown', onOutside);
  }, []);

  const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  function prevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  }

  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  }

  function formatIso(year: number, month: number, day: number): string {
    const m = String(month + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    return `${year}-${m}-${d}`;
  }

  return (
    <div className="field date-picker" ref={wrapRef}>
      <span className="field__label">{label}</span>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <button
          type="button"
          className="custom-select__trigger"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className={!value ? 'custom-select__placeholder' : undefined}>
            {value || placeholder}
          </span>
          <Calendar size={17} />
        </button>
        {value && (
          <button
            type="button"
            aria-label="Clear selected date"
            onClick={() => onChange('')}
            style={{
              minWidth: '46px',
              minHeight: '48px',
              border: '1.5px solid rgba(14,14,13,0.22)',
              background: '#fff',
              color: '#0E0E0D',
              borderRadius: '2px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {open && (
        <div className="date-picker__popover" role="dialog" aria-label="Calendar date picker">
          <div className="date-picker__header">
            <button
              type="button"
              className="date-picker__nav"
              aria-label="Previous month"
              onClick={prevMonth}
            >
              <ChevronLeft size={16} />
            </button>
            <strong style={{ fontSize: '0.94rem' }}>
              {MONTH_NAMES[viewMonth]} {viewYear}
            </strong>
            <button
              type="button"
              className="date-picker__nav"
              aria-label="Next month"
              onClick={nextMonth}
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="date-picker__weekdays">
            {WEEKDAYS.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>

          <div className="date-picker__days">
            {Array.from({ length: firstDayOfMonth }).map((_, idx) => (
              <span key={`empty-${idx}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, idx) => {
              const day = idx + 1;
              const dateObj = new Date(viewYear, viewMonth, day);
              const iso = formatIso(viewYear, viewMonth, day);
              const isPast = dateObj < today;
              const isSelected = value === iso;
              return (
                <button
                  key={iso}
                  type="button"
                  disabled={isPast}
                  onClick={() => {
                    onChange(iso);
                    setOpen(false);
                  }}
                  className={`date-picker__day ${
                    isSelected ? 'date-picker__day--selected' : ''
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
