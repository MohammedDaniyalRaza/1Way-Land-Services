import React, { useState } from 'react';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { AREA_GROUPS } from '../../data/areas';
import { BUSINESS } from '../../data/business';
import { AreaMapSvg } from '../svg/AreaMapSvg';
import { PineGlyph } from '../svg/PineGlyph';
import { LinkButton } from '../ui/Button';

export function AreaMapSection() {
  const [selectedTown, setSelectedTown] = useState<string>('Pell City');

  return (
    <section className="surface-dark section-pad">
      <div className="container">
        <div className="area-layout">
          <div>
            <AreaMapSvg activeTown={selectedTown} onSelectTown={setSelectedTown} />
          </div>

          <div>
            <div className="section-kicker" style={{ color: 'var(--color-orange-light)' }}>
              <PineGlyph size={15} />
              <span>Service Coverage</span>
            </div>

            <h2 className="heading-lg" style={{ margin: '0 0 0.85rem 0' }}>
              Pell City to Oxford along <span className="font-serif-accent">I-20</span> &amp; Logan Martin Lake.
            </h2>

            <p style={{ margin: '0 0 1.4rem 0', color: 'var(--color-stone-on-dark)', lineHeight: 1.6 }}>
              Headquartered in Pell City, we work across St. Clair, Talladega, Calhoun, and eastern
              Jefferson counties—from Birmingham suburbs through the lake and out to Oxford.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
              {AREA_GROUPS.map((group) => (
                <div key={group.id}>
                  <div className="font-mono-label" style={{ color: 'var(--color-orange-light)', marginBottom: '0.45rem' }}>
                    {group.title}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem 0.8rem', fontSize: '0.94rem' }}>
                    {group.towns.map((town, idx) => (
                      <React.Fragment key={town}>
                        {idx > 0 && <span aria-hidden="true" style={{ color: 'var(--color-stone)' }}>·</span>}
                        <button
                          type="button"
                          onClick={() => setSelectedTown(town)}
                          style={{
                            background: 'transparent',
                            border: 0,
                            padding: 0,
                            cursor: 'pointer',
                            color:
                              selectedTown === town ? 'var(--color-orange-light)' : 'var(--color-off-white)',
                            fontWeight: selectedTown === town ? 700 : 400,
                            textDecoration: selectedTown === town ? 'underline' : 'none',
                            textUnderlineOffset: '4px',
                          }}
                        >
                          {town}
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                padding: '1rem 1.15rem',
                backgroundColor: 'var(--color-ash)',
                border: '1px solid var(--color-hairline-dark)',
                borderRadius: '2px',
                marginBottom: '1.35rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.7rem',
              }}
            >
              <MapPin size={18} className="text-orange-bright" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '0.92rem', color: 'var(--color-off-white)' }}>
                Don&apos;t see your town? Call{' '}
                <a href={BUSINESS.phoneHref} style={{ color: 'var(--color-orange-light)', fontWeight: 700 }}>
                  {BUSINESS.phoneDisplay}
                </a>{' '}
                and tell us where your tract sits.
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <LinkButton variant="primary" href={BUSINESS.phoneHref}>
                <Phone size={16} />
                <span>Call {BUSINESS.phoneDisplay}</span>
              </LinkButton>
              <LinkButton variant="outline-dark" to="/service-area">
                <span>Full Area Details</span>
                <ArrowRight size={16} />
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
