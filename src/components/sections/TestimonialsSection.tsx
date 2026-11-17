import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TESTIMONIALS, TestimonialItem } from '../../data/testimonials';
import { StakeMarker } from '../svg/StakeMarker';
import { LinkButton } from '../ui/Button';

interface TestimonialsSectionProps {
  items?: TestimonialItem[];
  title?: React.ReactNode;
  showAllLink?: boolean;
}

export function TestimonialsSection({
  items = TESTIMONIALS.slice(0, 4),
  title = (
    <>
      Word from property owners <span className="font-serif-accent">around the lake.</span>
    </>
  ),
  showAllLink = true,
}: TestimonialsSectionProps) {
  return (
    <section className="surface-bone section-pad">
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '1.5rem',
            marginBottom: 'clamp(1.75rem, 3.5vw, 2.75rem)',
          }}
        >
          <div>
            <div className="section-kicker">
              <StakeMarker size={16} />
              <span>Local Feedback · Sample Reviews</span>
            </div>
            <h2 className="heading-xl" style={{ margin: 0, maxWidth: '18ch' }}>
              {title}
            </h2>
          </div>

          {showAllLink && (
            <LinkButton variant="outline-light" to="/testimonials">
              <span>Read More Feedback</span>
              <ArrowRight size={16} />
            </LinkButton>
          )}
        </div>

        <div className="grid-2">
          {items.map((item) => (
            <blockquote
              key={item.id}
              style={{
                margin: 0,
                padding: 'clamp(1.35rem, 2.5vw, 2rem)',
                backgroundColor: 'var(--color-off-white)',
                border: '1px solid var(--color-hairline-light)',
                borderRadius: '2px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.25rem',
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: '1.05rem',
                  lineHeight: 1.65,
                  color: 'var(--color-charcoal)',
                }}
              >
                &ldquo;{item.quote}&rdquo;
              </p>

              <footer
                className="hairline-top-light"
                style={{
                  paddingTop: '0.85rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '0.5rem 1rem',
                }}
              >
                <div>
                  <strong style={{ fontSize: '0.96rem' }}>{item.name}</strong>
                  <span style={{ color: 'var(--color-stone-on-light)', fontSize: '0.9rem' }}>
                    {' '}
                    · {item.town}, AL
                  </span>
                </div>
                <span className="font-mono-label" style={{ color: 'var(--color-orange-deep)' }}>
                  {item.serviceTitle}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
