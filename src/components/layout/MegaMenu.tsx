import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { BUSINESS } from '../../data/business';
import { LinkButton } from '../ui/Button';

interface MegaMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MegaMenu({ open, onClose }: MegaMenuProps) {
  if (!open) return null;

  return (
    <div
      className="megamenu"
      role="region"
      aria-label="Services menu"
      onMouseLeave={onClose}
    >
      <div className="container megamenu__grid">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            paddingRight: '1rem',
            borderRight: '1px solid var(--color-hairline-dark)',
          }}
        >
          <div>
            <span className="font-mono-label" style={{ color: 'var(--color-orange-light)' }}>
              Full Scope · 7 Services
            </span>
            <h2 className="heading-md" style={{ margin: '0.65rem 0 0.75rem 0' }}>
              From raw woods to build-ready ground.
            </h2>
            <p style={{ margin: 0, color: 'var(--color-stone-on-dark)', fontSize: '0.92rem' }}>
              Serving Pell City, Logan Martin Lake, and I-20 from Birmingham to Oxford.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <LinkButton
              variant="primary"
              size="sm"
              href={BUSINESS.phoneHref}
              onClick={onClose}
            >
              <Phone size={15} />
              <span>Call {BUSINESS.phoneDisplay}</span>
            </LinkButton>
            <LinkButton
              variant="outline-dark"
              size="sm"
              to="/services"
              onClick={onClose}
            >
              <span>All Services Overview</span>
              <ArrowRight size={15} />
            </LinkButton>
          </div>
        </div>

        <div className="megamenu__list">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="megamenu__item"
              onClick={onClose}
            >
              <span className="megamenu__num">{service.code}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.98rem', marginBottom: '0.2rem' }}>
                  {service.title}
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--color-stone-on-dark)', lineHeight: 1.45 }}>
                  {service.shortBlurb}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
