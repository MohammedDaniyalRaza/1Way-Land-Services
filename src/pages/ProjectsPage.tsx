import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/projects';
import { SERVICES } from '../data/services';
import { BUSINESS } from '../data/business';
import { usePageSeo } from '../lib/seo';
import { PageHero } from '../components/sections/PageHero';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';
import { SmartImage } from '../components/ui/SmartImage';
import { Modal } from '../components/ui/Modal';
import { LinkButton } from '../components/ui/Button';
import { CtaBand } from '../components/sections/CtaBand';
import { StakeMarker } from '../components/svg/StakeMarker';

export default function ProjectsPage() {
  const [filterSlug, setFilterSlug] = useState<string>('all');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  usePageSeo({
    title: `Projects Gallery | ${BUSINESS.name}`,
    description:
      'Before-and-after land clearing, dirt work, Logan Martin Lake lot clearing, site prep, and hauling examples in Pell City and along I-20.',
    path: '/projects',
  });

  const filteredProjects = useMemo(() => {
    if (filterSlug === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.serviceSlug === filterSlug);
  }, [filterSlug]);

  const activeProject: ProjectItem | null =
    activeIndex !== null ? filteredProjects[activeIndex] ?? null : null;

  function stepLightbox(delta: number) {
    if (activeIndex === null || filteredProjects.length === 0) return;
    setActiveIndex((activeIndex + delta + filteredProjects.length) % filteredProjects.length);
  }

  return (
    <>
      <PageHero
        imageKey="loganMartinLot"
        kicker="Project Gallery · Sample Imagery"
        title={
          <>
            From dense woods to <span className="font-serif-accent">clean ground.</span>
          </>
        }
        subtitle="Browse sample project work across land clearing, brush mulching, dirt grading, lakefront lot clearing, driveways, and hauling. See our Facebook page for recent field updates."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Projects' }]}
        bottomFill="#F2EEE6"
      />

      {/* Before / After Showcase */}
      <section className="surface-light section-pad-tight">
        <div className="container">
          <div style={{ marginBottom: '1.5rem' }}>
            <div className="section-kicker">
              <StakeMarker size={16} />
              <span>Interactive Comparison</span>
            </div>
            <h2 className="heading-lg" style={{ margin: 0 }}>
              Drag across to compare raw woods vs. cleared site.
            </h2>
          </div>

          <BeforeAfterSlider
            beforeKey="overgrownBefore"
            afterKey="loganMartinLot"
            beforeLabel="Before · Raw Overgrown Lot"
            afterLabel="After · Selective Shoreline Clear"
          />
        </div>
      </section>

      {/* Filterable Project Gallery */}
      <section className="surface-bone section-pad">
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '1rem',
              marginBottom: '1.75rem',
            }}
          >
            <div>
              <div className="font-mono-label" style={{ color: 'var(--color-orange-deep)', marginBottom: '0.35rem' }}>
                Filter By Service · Sample Imagery
              </div>
              <h2 className="heading-lg" style={{ margin: 0 }}>
                Field work across the corridor
              </h2>
            </div>

            <a
              href={BUSINESS.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--color-orange-deep)', textDecoration: 'underline', textUnderlineOffset: '4px' }}
            >
              Follow recent updates on Facebook
            </a>
          </div>

          {/* Filter Buttons */}
          <div className="choice-grid" role="group" aria-label="Filter projects by service" style={{ marginBottom: '2rem' }}>
            <button
              type="button"
              onClick={() => setFilterSlug('all')}
              className={`choice-btn ${filterSlug === 'all' ? 'choice-btn--active' : ''}`}
            >
              All Work ({PROJECTS.length})
            </button>
            {SERVICES.map((srv) => (
              <button
                key={srv.slug}
                type="button"
                onClick={() => setFilterSlug(srv.slug)}
                className={`choice-btn ${filterSlug === srv.slug ? 'choice-btn--active' : ''}`}
              >
                {srv.shortTitle}
              </button>
            ))}
          </div>

          <div className="grid-3">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                style={{
                  backgroundColor: 'var(--color-off-white)',
                  border: '1px solid var(--color-hairline-light)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Inspect ${project.title}`}
                  style={{
                    position: 'relative',
                    padding: 0,
                    border: 0,
                    background: 'transparent',
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'left',
                  }}
                >
                  <SmartImage imageKey={project.imageKey} aspectRatio="4 / 3" />
                  <span
                    style={{
                      position: 'absolute',
                      right: '10px',
                      bottom: '10px',
                      width: '36px',
                      height: '36px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(14, 14, 13, 0.84)',
                      color: 'var(--color-off-white)',
                      borderRadius: '2px',
                    }}
                    aria-hidden="true"
                  >
                    <Maximize2 size={16} />
                  </span>
                </button>

                <div style={{ padding: '1.2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '0.75rem' }}>
                  <div>
                    <div className="font-mono-label" style={{ color: 'var(--color-orange-deep)', marginBottom: '0.35rem' }}>
                      {project.serviceTitle} · {project.location}
                    </div>
                    <h3 className="heading-md" style={{ fontSize: '1.15rem', margin: '0 0 0.45rem 0' }}>
                      {project.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-stone-on-light)', lineHeight: 1.55 }}>
                      {project.scopeSummary}
                    </p>
                  </div>

                  <LinkButton
                    variant="ghost"
                    size="sm"
                    to={`/services/${project.serviceSlug}`}
                  >
                    <span>Explore {project.serviceTitle}</span>
                    <ArrowRight size={14} />
                  </LinkButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Modal
        open={Boolean(activeProject)}
        onClose={() => setActiveIndex(null)}
        title={activeProject ? `${activeProject.serviceTitle} · ${activeProject.location}` : ''}
      >
        {activeProject && (
          <div>
            <SmartImage imageKey={activeProject.imageKey} aspectRatio="16 / 9" eager />
            <div style={{ marginTop: '1.25rem' }}>
              <h3 className="heading-md" style={{ margin: '0 0 0.5rem 0' }}>
                {activeProject.title}
              </h3>
              <p style={{ margin: '0 0 1.25rem 0', color: 'var(--color-stone-on-dark)' }}>
                {activeProject.scopeSummary}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="button"
                    className="btn btn--outline-dark btn--sm"
                    onClick={() => stepLightbox(-1)}
                  >
                    <ArrowLeft size={15} />
                    <span>Previous</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn--outline-dark btn--sm"
                    onClick={() => stepLightbox(1)}
                  >
                    <span>Next</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

                <LinkButton
                  variant="primary"
                  size="sm"
                  to="/contact"
                  state={{ prefillServices: [activeProject.serviceSlug] }}
                  onClick={() => setActiveIndex(null)}
                >
                  <span>Request Similar Scope</span>
                </LinkButton>
              </div>
            </div>
          </div>
        )}
      </Modal>

      <CtaBand />
    </>
  );
}
