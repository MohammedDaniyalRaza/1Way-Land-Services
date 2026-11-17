import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Phone } from 'lucide-react';
import { BUSINESS } from '../../data/business';
import { NAV_LINKS } from '../../data/nav';
import { cx } from '../../lib/helpers';
import { LinkButton } from '../ui/Button';
import { MegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const location = useLocation();
  const [hidden, setHidden] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastYRef = useRef(0);

  // Close menus on route change
  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
    setHidden(false);
  }, [location.pathname]);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      if (mobileOpen || megaOpen) {
        setHidden(false);
        lastYRef.current = y;
        return;
      }
      if (y > 120 && y > lastYRef.current + 6) {
        setHidden(true);
      } else if (y < lastYRef.current - 6 || y <= 80) {
        setHidden(false);
      }
      lastYRef.current = y;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mobileOpen, megaOpen]);

  return (
    <>
      <header className={cx('navbar', hidden && 'navbar--hidden')}>
        <div className="navbar__inner">
          <Link to="/" className="navbar__brand" aria-label={`${BUSINESS.name} Home`}>
            <img
              src={BUSINESS.logoPath}
              alt={`${BUSINESS.name} badge`}
              className="navbar__logo"
              width={44}
              height={44}
            />
            <span className="navbar__wordmark">{BUSINESS.name}</span>
          </Link>

          <nav className="navbar__nav" aria-label="Primary navigation">
            {NAV_LINKS.map((item) => {
              const isActive =
                item.to === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.to);

              if (item.hasMegaMenu) {
                return (
                  <button
                    key={item.to}
                    type="button"
                    aria-expanded={megaOpen}
                    onMouseEnter={() => setMegaOpen(true)}
                    onClick={() => setMegaOpen((prev) => !prev)}
                    className={cx('navbar__link', isActive && 'navbar__link--active')}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={14} />
                  </button>
                );
              }

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onMouseEnter={() => setMegaOpen(false)}
                  className={cx('navbar__link', isActive && 'navbar__link--active')}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="navbar__actions">
            <LinkButton variant="primary" size="sm" href={BUSINESS.phoneHref}>
              <Phone size={14} />
              <span>{BUSINESS.phoneDisplay}</span>
            </LinkButton>
          </div>

          <div className="navbar__mobile-controls">
            <LinkButton
              variant="primary"
              size="sm"
              to="/contact"
              className="navbar__mobile-estimate"
            >
              Estimate
            </LinkButton>
            <button
              type="button"
              className="navbar__hamburger"
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <MegaMenu open={megaOpen} onClose={() => setMegaOpen(false)} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
