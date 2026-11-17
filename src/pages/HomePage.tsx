import React from 'react';
import { PageHero } from '../components/sections/PageHero';
import { TrustStrip } from '../components/sections/TrustStrip';
import { TownMarquee } from '../components/sections/TownMarquee';
import { FivePhaseJourney } from '../components/sections/FivePhaseJourney';
import { ServicesShowcase } from '../components/sections/ServicesShowcase';
import { ProjectScoper } from '../components/sections/ProjectScoper';
import { BeforeAfterSection } from '../components/sections/BeforeAfterSection';
import { WhoWeServeSection } from '../components/sections/WhoWeServeSection';
import { AreaMapSection } from '../components/sections/AreaMapSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FaqPreviewSection } from '../components/sections/FaqPreviewSection';
import { CtaBand } from '../components/sections/CtaBand';
import { usePageSeo } from '../lib/seo';

export default function HomePage() {
  usePageSeo({
    title: '1Way Land Services — Land Clearing & Dirt Work in Pell City, AL',
    description:
      'From raw land to ready ground. Land clearing, brush removal, dirt work, site prep, lot clearing, landscaping, and hauling from Birmingham to Oxford & Logan Martin Lake.',
    path: '/',
  });

  return (
    <>
      <PageHero
        isHome
        imageKey="heroClearing"
        kicker="Pell City, AL · Land Clearing & Dirt Work"
        title={
          <>
            From raw land to <span className="font-serif-accent">ready ground.</span>
          </>
        }
        subtitle="Clearing timber and thick undergrowth, shaping red-clay grades, prepping homesite pads, and hauling debris clean—serving Pell City, Logan Martin Lake, and I-20 from Birmingham to Oxford."
        metaItems={[
          'Pell City, AL',
          'Birmingham to Oxford · I-20 Corridor',
          'Logan Martin Lake Area',
        ]}
        bottomFill="#F2EEE6"
      />

      <TrustStrip />

      <TownMarquee />

      <FivePhaseJourney />

      <ServicesShowcase />

      <ProjectScoper />

      <BeforeAfterSection />

      <WhoWeServeSection />

      <AreaMapSection />

      <TestimonialsSection />

      <FaqPreviewSection />

      <CtaBand />
    </>
  );
}
