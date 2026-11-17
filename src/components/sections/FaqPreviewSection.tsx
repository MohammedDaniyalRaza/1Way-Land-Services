import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FAQS } from '../../data/faqs';
import { Accordion } from '../ui/Accordion';
import { LinkButton } from '../ui/Button';
import { StakeMarker } from '../svg/StakeMarker';

export function FaqPreviewSection() {
  const topFaqs = FAQS.slice(0, 5);

  return (
    <section className="surface-light section-pad">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            alignItems: 'start',
          }}
        >
          <div>
            <div className="section-kicker">
              <StakeMarker size={16} />
              <span>Common Questions</span>
            </div>
            <h2 className="heading-lg" style={{ margin: '0 0 1rem 0' }}>
              Straight answers before we <span className="font-serif-accent">walk your lot.</span>
            </h2>
            <p className="body-copy text-muted-light" style={{ margin: '0 0 1.5rem 0' }}>
              Clear answers about estimates, saving shade trees, hauling brush, drainage grading,
              and local permit checks around Pell City and Logan Martin Lake.
            </p>
            <LinkButton variant="dark" to="/faq">
              <span>Browse All 18 FAQs</span>
              <ArrowRight size={16} />
            </LinkButton>
          </div>

          <Accordion items={topFaqs} defaultOpenId={topFaqs[0].id} />
        </div>
      </div>
    </section>
  );
}
