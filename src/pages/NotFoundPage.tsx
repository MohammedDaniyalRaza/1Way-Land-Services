import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { usePageSeo } from '../lib/seo';
import { PageHero } from '../components/sections/PageHero';
import { LinkButton } from '../components/ui/Button';

export default function NotFoundPage() {
  usePageSeo({
    title: `Off the Trail (404) | ${BUSINESS.name}`,
    description: 'The page you requested could not be found. Return to 1Way Land Services home or request a free estimate.',
    path: '/404',
  });

  return (
    <>
      <PageHero
        imageKey="overgrownBefore"
        kicker="Error 404 · Off the Surveyed Line"
        title={
          <>
            You&apos;re <span className="font-serif-accent">off the trail.</span>
          </>
        }
        subtitle="Looks like that path has grown over or moved. Let's get you back to cleared ground, our 7 services, or a free estimate."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: '404' }]}
        bottomFill="#0E0E0D"
      />

      <section className="surface-dark section-pad-tight">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
            <Compass size={22} className="text-orange-bright" />
            <LinkButton variant="light" to="/">
              <span>Back to Home</span>
              <ArrowRight size={16} />
            </LinkButton>
            <LinkButton variant="outline-dark" to="/services">
              <span>Explore Services</span>
            </LinkButton>
            <LinkButton variant="primary" to="/contact">
              <span>Request Free Estimate</span>
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
