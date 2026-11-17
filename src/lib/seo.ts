import { useEffect } from 'react';
import { BUSINESS } from '../data/business';

export interface SeoConfig {
  title: string;
  description: string;
  path: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(url: string): void {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

export function getLocalBusinessJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    telephone: BUSINESS.phoneDisplay,
    areaServed: [
      'Pell City, AL',
      'Logan Martin Lake, AL',
      'Birmingham, AL',
      'Leeds, AL',
      'Moody, AL',
      'Lincoln, AL',
      'Oxford, AL',
    ],
    sameAs: [BUSINESS.facebookUrl],
    description: BUSINESS.serviceAreaSummary,
  };
}

export function usePageSeo({ title, description, path, jsonLd }: SeoConfig): void {
  useEffect(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const canonicalUrl = `${origin}${path}`;

    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertCanonical(canonicalUrl);

    const scriptId = 'page-jsonld-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const combined = jsonLd
      ? Array.isArray(jsonLd)
        ? [getLocalBusinessJsonLd(), ...jsonLd]
        : [getLocalBusinessJsonLd(), jsonLd]
      : [getLocalBusinessJsonLd()];

    script.textContent = JSON.stringify(combined);
  }, [title, description, path, jsonLd]);
}
