import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Phone } from 'lucide-react';
import { BUSINESS } from '../../data/business';
import { SERVICES } from '../../data/services';
import { NAV_LINKS } from '../../data/nav';
import { LinkButton } from '../ui/Button';
import { TreeLineDivider } from '../svg/TreeLineDivider';

export function Footer() {
  return (
    <footer className="site-footer">
      <TreeLineDivider fillTop="transparent" fillBottom="#0E0E0D" />

      <div className="container section-pad-tight">
        <div className="site-footer__grid">
          <div>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
              <img
                src={BUSINESS.logoPath}
                alt={`${BUSINESS.name} logo`}
                width={56}
                height={56}
                style={{ borderRadius: '50%', objectFit: 'contain' }}
              />
              <div>
                <div className="heading-md" style={{ fontSize: '1.25rem' }}>
                  {BUSINESS.name}
                </div>
                <div className="font-mono-label" style={{ color: 'var(--color-orange-light)' }}>
                  {BUSINESS.cityState}
                </div>
              </div>
            </Link>

            <p
              style={{
                marginTop: '1rem',
                color: 'var(--color-stone-on-dark)',
                fontSize: '0.94rem',
                maxWidth: '34ch',
              }}
            >
              {BUSINESS.serviceAreaSummary}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', marginTop: '1.25rem' }}>
              <LinkButton variant="primary" size="sm" href={BUSINESS.phoneHref}>
                <Phone size={15} />
                <span>{BUSINESS.phoneDisplay}</span>
              </LinkButton>
              <LinkButton variant="outline-dark" size="sm" to="/contact">
                <span>Free Estimate</span>
              </LinkButton>
            </div>
          </div>

          <div>
            <h2 className="font-mono-label" style={{ color: 'var(--color-orange-light)', margin: '0 0 1rem 0' }}>
              Services
            </h2>
            <ul className="footer-list">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="footer-link">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono-label" style={{ color: 'var(--color-orange-light)', margin: '0 0 1rem 0' }}>
              Explore
            </h2>
            <ul className="footer-list">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono-label" style={{ color: 'var(--color-orange-light)', margin: '0 0 1rem 0' }}>
              Direct Contact
            </h2>
            <ul className="footer-list">
              <li>
                <a href={BUSINESS.phoneHref} className="footer-link" style={{ fontWeight: 600, color: 'var(--color-off-white)' }}>
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              {BUSINESS.email && (
                <li>
                  <a href={`mailto:${BUSINESS.email}`} className="footer-link">
                    {BUSINESS.email}
                  </a>
                </li>
              )}
              {BUSINESS.streetAddress && (
                <li className="footer-link">{BUSINESS.streetAddress}</li>
              )}
              {BUSINESS.hours && <li className="footer-link">{BUSINESS.hours}</li>}
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-stone-on-dark)', fontSize: '0.92rem' }}>
                <MapPin size={15} className="text-orange-bright" />
                <span>Pell City · Logan Martin Lake · I-20</span>
              </li>
              <li style={{ marginTop: '0.35rem' }}>
                <a
                  href={BUSINESS.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-off-white)' }}
                >
                  <span>Facebook Page</span>
                  <ArrowUpRight size={15} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="hairline-top-dark"
          style={{
            marginTop: '2.5rem',
            paddingTop: '1.25rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.75rem 1.5rem',
            fontSize: '0.84rem',
            color: 'var(--color-stone-on-dark)',
          }}
        >
          <span>© {new Date().getFullYear()} {BUSINESS.name}. Pell City, Alabama.</span>
          <span>Birmingham to Oxford · I-20 Corridor &amp; Logan Martin Lake</span>
        </div>
      </div>
    </footer>
  );
}
