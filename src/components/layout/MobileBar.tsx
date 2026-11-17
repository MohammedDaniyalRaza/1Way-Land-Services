import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardList, Phone } from 'lucide-react';
import { BUSINESS } from '../../data/business';

export function MobileBar() {
  return (
    <div className="mobile-bar" role="region" aria-label="Quick contact actions">
      <a href={BUSINESS.phoneHref} className="mobile-bar__btn mobile-bar__btn--call">
        <Phone size={16} />
        <span>Call {BUSINESS.phoneDisplay}</span>
      </a>
      <Link to="/contact" className="mobile-bar__btn mobile-bar__btn--estimate">
        <ClipboardList size={16} />
        <span>Free Estimate</span>
      </Link>
    </div>
  );
}
