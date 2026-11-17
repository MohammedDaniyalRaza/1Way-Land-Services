import React, { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const ServicesOverviewPage = lazy(() => import('../pages/services/ServicesOverviewPage'));
const ServiceDetailPage = lazy(() => import('../pages/services/ServiceDetailPage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const ServiceAreaPage = lazy(() => import('../pages/ServiceAreaPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const TestimonialsPage = lazy(() => import('../pages/TestimonialsPage'));
const FaqPage = lazy(() => import('../pages/FaqPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <ServicesOverviewPage /> },
      { path: 'services/:slug', element: <ServiceDetailPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'service-area', element: <ServiceAreaPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'testimonials', element: <TestimonialsPage /> },
      { path: 'faq', element: <FaqPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
