import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, X } from 'lucide-react';
import { BUSINESS } from '../../data/business';
import { NAV_LINKS } from '../../data/nav';
import { SERVICES } from '../../data/services';
import { useAppContext } from '../../app/providers';
import { LinkButton } from '../ui/Button';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { setScrollLocked } = useAppContext();
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    setScrollLocked(true);
    const prevFocus = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'Tab' && containerRef.current) {
        const focusables = containerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      setScrollLocked(false);
      prevFocus?.focus?.();
    };
  }, [open, onClose, setScrollLocked]);

  if (!open) return null;

  return (
    <div
      ref={containerRef}
      className="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      <div className="mobile-menu__top">
        <Link to="/" className="navbar__brand" onClick={onClose}>
          <img
            src={BUSINESS.logoPath}
            alt={BUSINESS.name}
            className="navbar__logo"
            width={40}
            height={40}
          />
          <span className="navbar__wordmark">{BUSINESS.name}</span>
        </Link>

        <button
          ref={closeBtnRef}
          type="button"
          className="navbar__hamburger"
          aria-label="Close navigation menu"
          onClick={onClose}
        >
          <X size={22} />
        </button>
      </div>

      <div className="mobile-menu__body">
        <ul className="mobile-menu__list">
          {NAV_LINKS.map((item) => {
            if (item.hasMegaMenu) {
              return (
                <li key={item.to} className="mobile-menu__item">
                  <button
                    type="button"
                    className="mobile-menu__link"
                    aria-expanded={servicesExpanded}
                    onClick={() => setServicesExpanded((v) => !v)}
                  >
                    <span>Services</span>
                    <ChevronDown
                      size={20}
                      style={{
                        transform: servicesExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 200ms ease',
                      }}
                    />
                  </button>
                  {servicesExpanded && (
                    <ul className="mobile-menu__sublist">
                      <li>
                        <Link to="/services" className="mobile-menu__sublink" onClick={onClose}>
                          All Services Overview
                        </Link>
                      </li>
                      {SERVICES.map((srv) => (
                        <li key={srv.slug}>
                          <Link
                            to={`/services/${srv.slug}`}
                            className="mobile-menu__sublink"
                            onClick={onClose}
                          >
                            {srv.code}. {srv.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li key={item.to} className="mobile-menu__item">
                <Link to={item.to} className="mobile-menu__link" onClick={onClose}>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <LinkButton variant="primary" size="lg" href={BUSINESS.phoneHref} onClick={onClose}>
            <Phone size={18} />
            <span>Call {BUSINESS.phoneDisplay}</span>
          </LinkButton>
          <LinkButton variant="light" size="lg" to="/contact" onClick={onClose}>
            <span>Get a Free Estimate</span>
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
