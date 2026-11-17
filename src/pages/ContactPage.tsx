import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2, MapPin, Phone } from 'lucide-react';
import { BUSINESS } from '../data/business';
import { SERVICES } from '../data/services';
import { ALL_TOWNS } from '../data/areas';
import { LAND_SIZES } from '../data/scoper';
import { formatPhoneDigits, isValidEmail, isValidPhone } from '../lib/helpers';
import { QuoteFormData, QuoteSubmissionResult, submitQuoteRequest } from '../services/quote';
import { usePageSeo } from '../lib/seo';
import { PageHero } from '../components/sections/PageHero';
import { Input, Textarea } from '../components/ui/Input';
import { CustomSelect } from '../components/ui/CustomSelect';
import { ChoiceToggle } from '../components/ui/ChoiceToggle';
import { DatePicker } from '../components/ui/DatePicker';
import { Button, LinkButton } from '../components/ui/Button';
import { StakeMarker } from '../components/svg/StakeMarker';

interface ContactPrefillState {
  prefillServices?: string[];
  prefillAcreage?: string;
  prefillPropertyType?: string;
  prefillTown?: string;
  prefillNotes?: string;
}

const PROPERTY_TYPE_OPTIONS = [
  { value: 'wooded-lot', label: 'Wooded Lot / Acreage' },
  { value: 'lakefront-lot', label: 'Logan Martin Lakefront Lot' },
  { value: 'overgrown-brush', label: 'Overgrown Brush / Field' },
  { value: 'pasture', label: 'Pasture / Farm Property' },
  { value: 'existing-pad', label: 'Residential Yard / Existing Pad' },
  { value: 'builder-site', label: 'Builder / Commercial Pad' },
];

const TIMELINE_OPTIONS = [
  { id: 'asap', label: 'As soon as possible' },
  { id: '2-4-weeks', label: 'Next 2–4 weeks' },
  { id: '1-3-months', label: 'Next 1–3 months' },
  { id: 'planning', label: 'Just planning ahead' },
];

export default function ContactPage() {
  const location = useLocation();
  const prefill = (location.state as ContactPrefillState | null) ?? null;

  usePageSeo({
    title: `Get a Free Estimate | ${BUSINESS.name}`,
    description:
      'Request a free on-site land clearing, dirt work, or site prep estimate in Pell City, Logan Martin Lake, and I-20 from Birmingham to Oxford. Call (205) 767-9322.',
    path: '/contact',
  });

  const [form, setForm] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    town: prefill?.prefillTown ?? '',
    propertyType: prefill?.prefillPropertyType ?? '',
    services: prefill?.prefillServices ?? [],
    acreage: prefill?.prefillAcreage ?? '1-to-5',
    timeline: '2-4-weeks',
    preferredDate: '',
    message: prefill?.prefillNotes ?? '',
    photoNotes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<QuoteSubmissionResult | null>(null);

  const townOptions = [
    ...ALL_TOWNS.map((t) => ({ value: t, label: `${t}, AL` })),
    { value: 'Other Nearby Town', label: 'Other Nearby Alabama Town' },
  ];

  const serviceChoices = SERVICES.map((s) => ({
    id: s.slug,
    label: s.shortTitle,
  }));

  const acreageChoices = LAND_SIZES.map((s) => ({
    id: s.id,
    label: s.label,
  }));

  function validate(): boolean {
    const nextErrors: Partial<Record<keyof QuoteFormData, string>> = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!isValidPhone(form.phone)) nextErrors.phone = 'Please enter a valid 10-digit phone number.';
    if (!isValidEmail(form.email)) nextErrors.email = 'Please enter a valid email address.';
    if (!form.town) nextErrors.town = 'Please choose the nearest town.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await submitQuoteRequest(form);
      setSubmitted(res);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHero
        imageKey="heroClearing"
        kicker="Free Estimates · Direct Response"
        title={
          <>
            Get a free <span className="font-serif-accent">on-site estimate.</span>
          </>
        }
        subtitle="Call directly or tell us about your land below. We walk your ground, talk through keep-trees and drainage, and give you a straightforward scope."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        secondaryCta={{ label: 'Browse All Services', to: '/services' }}
        bottomFill="#F2EEE6"
      />

      <section className="surface-light section-pad">
        <div className="container">
          <div className="contact-layout">
            {/* Estimate Form */}
            <div
              className="reg-frame"
              style={{
                backgroundColor: 'var(--color-bone)',
                border: '1px solid var(--color-hairline-light)',
                padding: 'clamp(1.5rem, 3.5vw, 2.75rem)',
                borderRadius: '2px',
              }}
            >
              {submitted ? (
                <div aria-live="polite">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
                    <CheckCircle2 size={26} style={{ color: 'var(--color-orange)' }} />
                    <span className="font-mono-label" style={{ color: 'var(--color-orange-deep)' }}>
                      Estimate Request Logged · Ref {submitted.referenceId}
                    </span>
                  </div>
                  <h2 className="heading-lg" style={{ margin: '0 0 0.75rem 0' }}>
                    Thanks, {submitted.data.name}. Your project details are ready.
                  </h2>
                  <p className="body-copy text-muted-light" style={{ margin: '0 0 1.5rem 0' }}>
                    We received your estimate details for <strong>{submitted.data.town}</strong>. If
                    you want to schedule a walk-through right away, call us directly at{' '}
                    <a href={BUSINESS.phoneHref} style={{ color: 'var(--color-orange-deep)', fontWeight: 700 }}>
                      {BUSINESS.phoneDisplay}
                    </a>
                    .
                  </p>

                  <div
                    style={{
                      padding: '1.15rem',
                      backgroundColor: 'var(--color-off-white)',
                      border: '1px solid var(--color-hairline-light)',
                      marginBottom: '1.5rem',
                      fontSize: '0.92rem',
                      display: 'grid',
                      gap: '0.45rem',
                    }}
                  >
                    <div>
                      <strong>Phone:</strong> {submitted.data.phone}
                    </div>
                    <div>
                      <strong>Town:</strong> {submitted.data.town}
                    </div>
                    <div>
                      <strong>Acreage:</strong>{' '}
                      {LAND_SIZES.find((a) => a.id === submitted.data.acreage)?.label ?? submitted.data.acreage}
                    </div>
                    {submitted.data.services.length > 0 && (
                      <div>
                        <strong>Services:</strong>{' '}
                        {submitted.data.services
                          .map((slug) => SERVICES.find((s) => s.slug === slug)?.title ?? slug)
                          .join(', ')}
                      </div>
                    )}
                    {submitted.data.preferredDate && (
                      <div>
                        <strong>Preferred Date:</strong> {submitted.data.preferredDate}
                      </div>
                    )}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    <LinkButton variant="primary" href={BUSINESS.phoneHref}>
                      <Phone size={16} />
                      <span>Call {BUSINESS.phoneDisplay}</span>
                    </LinkButton>
                    <Button
                      variant="outline-light"
                      onClick={() => {
                        setSubmitted(null);
                      }}
                    >
                      <span>Edit or Send Another Request</span>
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                  <div>
                    <div className="section-kicker">
                      <StakeMarker size={16} />
                      <span>Free Estimate Request</span>
                    </div>
                    <h2 className="heading-lg" style={{ margin: 0 }}>
                      Tell us about your property
                    </h2>
                  </div>

                  <div className="grid-2">
                    <Input
                      label="Your Name"
                      required
                      placeholder="First & last name"
                      value={form.name}
                      error={errors.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />

                    <Input
                      label="Phone Number"
                      type="tel"
                      required
                      placeholder="(205) 555-0199"
                      value={form.phone}
                      error={errors.phone}
                      onChange={(e) => setForm({ ...form, phone: formatPhoneDigits(e.target.value) })}
                    />
                  </div>

                  <div className="grid-2">
                    <Input
                      label="Email"
                      type="email"
                      hint="Optional"
                      placeholder="you@example.com"
                      value={form.email}
                      error={errors.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />

                    <CustomSelect
                      label="Town / Area"
                      required
                      placeholder="Choose nearest town"
                      options={townOptions}
                      value={form.town}
                      error={errors.town}
                      onChange={(val) => setForm({ ...form, town: val })}
                    />
                  </div>

                  <CustomSelect
                    label="Property Type"
                    placeholder="What kind of parcel is it?"
                    options={PROPERTY_TYPE_OPTIONS}
                    value={form.propertyType}
                    onChange={(val) => setForm({ ...form, propertyType: val })}
                  />

                  <ChoiceToggle
                    label="Services Needed (Select any that apply)"
                    multiple
                    options={serviceChoices}
                    value={form.services}
                    onChange={(vals) => setForm({ ...form, services: vals })}
                  />

                  <ChoiceToggle
                    label="Approximate Size"
                    options={acreageChoices}
                    value={form.acreage}
                    onChange={(val) => setForm({ ...form, acreage: val })}
                  />

                  <ChoiceToggle
                    label="Target Timeline"
                    options={TIMELINE_OPTIONS}
                    value={form.timeline}
                    onChange={(val) => setForm({ ...form, timeline: val })}
                  />

                  <DatePicker
                    label="Preferred Walk-Through Date (Optional)"
                    value={form.preferredDate}
                    onChange={(val) => setForm({ ...form, preferredDate: val })}
                  />

                  <Textarea
                    label="Project Details"
                    placeholder="Tell us what the ground looks like today (trees, brush, slope, wet spots) and what you want to do with it..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />

                  <Input
                    label="Photo / Access Notes"
                    hint="Optional"
                    placeholder="Gate width, road name, or let us know if you have lot photos to text"
                    value={form.photoNotes}
                    onChange={(e) => setForm({ ...form, photoNotes: e.target.value })}
                  />

                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', paddingTop: '0.35rem' }}>
                    <Button type="submit" variant="primary" size="lg" disabled={submitting}>
                      <span>{submitting ? 'Sending Details...' : 'Request Free Estimate'}</span>
                      <ArrowRight size={18} />
                    </Button>
                    <span style={{ fontSize: '0.85rem', color: 'var(--color-stone-on-light)' }}>
                      No obligation · Final scope confirmed on site
                    </span>
                  </div>
                </form>
              )}
            </div>

            {/* Direct Contact Sidebar */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div
                style={{
                  backgroundColor: 'var(--color-charcoal)',
                  color: 'var(--color-off-white)',
                  padding: 'clamp(1.5rem, 3vw, 2.1rem)',
                  borderRadius: '2px',
                }}
              >
                <div className="font-mono-label" style={{ color: 'var(--color-orange-light)', marginBottom: '0.5rem' }}>
                  Fastest Way to Reach Us
                </div>
                <h2 className="heading-md" style={{ margin: '0 0 0.75rem 0' }}>
                  Call {BUSINESS.phoneDisplay}
                </h2>
                <p style={{ margin: '0 0 1.4rem 0', color: 'var(--color-stone-on-dark)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                  Rather talk through your lot over the phone? Call directly to describe your
                  property and schedule an on-site look.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <LinkButton variant="primary" size="lg" href={BUSINESS.phoneHref}>
                    <Phone size={18} />
                    <span>Call {BUSINESS.phoneDisplay}</span>
                  </LinkButton>
                  <LinkButton variant="outline-dark" href={BUSINESS.facebookUrl} target="_blank">
                    <span>Message / Follow on Facebook</span>
                    <ArrowUpRight size={16} />
                  </LinkButton>
                </div>

                {(BUSINESS.email || BUSINESS.streetAddress || BUSINESS.hours) && (
                  <div className="hairline-top-dark" style={{ marginTop: '1.4rem', paddingTop: '1rem', fontSize: '0.9rem', display: 'grid', gap: '0.45rem' }}>
                    {BUSINESS.email && <div>Email: {BUSINESS.email}</div>}
                    {BUSINESS.streetAddress && <div>Address: {BUSINESS.streetAddress}</div>}
                    {BUSINESS.hours && <div>Hours: {BUSINESS.hours}</div>}
                  </div>
                )}
              </div>

              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-hairline-light)',
                  padding: '1.5rem',
                  borderRadius: '2px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <MapPin size={17} style={{ color: 'var(--color-orange)' }} />
                  <span className="font-mono-label" style={{ color: 'var(--color-orange-deep)' }}>
                    Service Area
                  </span>
                </div>
                <p style={{ margin: '0 0 1rem 0', fontSize: '0.93rem', color: 'var(--color-stone-on-light)', lineHeight: 1.6 }}>
                  {BUSINESS.serviceAreaSummary}
                </p>
                <LinkButton variant="ghost" size="sm" to="/service-area">
                  <span>View Service Area Map</span>
                  <ArrowRight size={14} />
                </LinkButton>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--color-bone)',
                  border: '1px solid var(--color-hairline-light)',
                  padding: '1.5rem',
                  borderRadius: '2px',
                }}
              >
                <div className="font-mono-label" style={{ color: 'var(--color-orange-deep)', marginBottom: '0.45rem' }}>
                  Questions Before Calling?
                </div>
                <p style={{ margin: '0 0 0.85rem 0', fontSize: '0.92rem', color: 'var(--color-stone-on-light)' }}>
                  Read about how on-site estimates work, keeping mature trees, hauling brush, and
                  local permit checks.
                </p>
                <LinkButton variant="ghost" size="sm" to="/faq">
                  <span>Read FAQs</span>
                  <ArrowRight size={14} />
                </LinkButton>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
