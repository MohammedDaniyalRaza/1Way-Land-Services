import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { MobileBar } from '../components/layout/MobileBar';
import { PageTransition } from '../components/layout/PageTransition';
import { Preloader } from '../components/layout/Preloader';
import { CustomCursor } from '../components/ui/CustomCursor';

export function AppLayout() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="grain-overlay" aria-hidden="true" />
      <Preloader />
      <CustomCursor />
      <Navbar />

      <main id="main-content" className="site-main">
        <PageTransition>
          <Suspense
            fallback={
              <div
                aria-hidden="true"
                style={{ minHeight: '75svh', backgroundColor: 'var(--color-charcoal)' }}
              />
            }
          >
            <Outlet />
          </Suspense>
        </PageTransition>
      </main>

      <Footer />
      <MobileBar />
    </>
  );
}
