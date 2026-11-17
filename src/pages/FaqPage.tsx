import React, { useMemo, useState } from 'react';
import { FAQ_CATEGORIES, FAQS } from '../data/faqs';
import { BUSINESS } from '../data/business';
import { usePageSeo } from '../lib/seo';
import { PageHero } from '../components/sections/PageHero';
import { Tabs } from '../components/ui/Tabs';
import { Accordion } from '../components/ui/Accordion';
import { LinkButton } from '../components/ui/Button';
import { CtaBand } from '../components/sections/CtaBand';
import { StakeMarker } from '../components/svg/StakeMarker';

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqJsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    }),
    [],
  );

  usePageSeo({
    title: `Frequently Asked Questions | ${BUSINESS.name}`,
    description:
      'Honest answers on land clearing, lot clearing, brush removal, grading, drainage, permits, and free estimates in Pell City and along I-20.',
    path: '/faq',
    jsonLd: faqJsonLd,
  });

  const tabItems = [
    { id: 'all', label: `All (${FAQS.length})` },
    ...FAQ_CATEGORIES.map((cat) => ({ id: cat, label: cat })),
  ];

  const visibleFaqs = useMemo(() => {
    if (activeCategory === 'all') return FAQS;
    return FAQS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <PageHero
        imageKey="sitePrepDrive"
        kicker="Answers Before We Walk Your Lot"
        title={
          <>
            Common questions about <span className="font-serif-accent">clearing &amp; dirt work.</span>
          </>
        }
        subtitle="Clear, practical answers on how estimates work, protecting shade trees, drainage grading, debris hauling, and local permit checks."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]}
        bottomFill="#F2EEE6"
      />

      <section className="surface-light section-pad">
        <div className="container">
          <div style={{ maxWidth: '920px' }}>
            <div className="section-kicker">
              <StakeMarker size={16} />
              <span>Filter Questions By Topic</span>
            </div>

            <Tabs
              items={tabItems}
              activeId={activeCategory}
              onChange={setActiveCategory}
              ariaLabel="FAQ Categories"
            />

            <div style={{ marginTop: '1.75rem' }}>
              <Accordion
                items={visibleFaqs}
                defaultOpenId={visibleFaqs[0]?.id ?? null}
              />
            </div>

            <div
              className="reg-frame"
              style={{
                marginTop: '3rem',
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                backgroundColor: 'var(--color-bone)',
                border: '1px solid var(--color-hairline-light)',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div>
                <h2 className="heading-md" style={{ margin: '0 0 0.35rem 0' }}>
                  Still have a question about your property?
                </h2>
                <p style={{ margin: 0, color: 'var(--color-stone-on-light)' }}>
                  Call {BUSINESS.phoneDisplay} directly or ask in our estimate form.
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                <LinkButton variant="primary" href={BUSINESS.phoneHref}>
                  <span>Call {BUSINESS.phoneDisplay}</span>
                </LinkButton>
                <LinkButton variant="dark" to="/contact">
                  <span>Request Estimate</span>
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
