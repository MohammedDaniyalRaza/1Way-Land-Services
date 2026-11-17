export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  town: string;
  propertyType: string;
  services: string[];
  acreage: string;
  timeline: string;
  preferredDate: string;
  message: string;
  photoNotes: string;
}

export interface QuoteSubmissionResult {
  referenceId: string;
  submittedAt: string;
  data: QuoteFormData;
}

// Isolated submission service: swap this body for an API / webhook call when a backend is connected.
export async function submitQuoteRequest(data: QuoteFormData): Promise<QuoteSubmissionResult> {
  await new Promise((resolve) => setTimeout(resolve, 420));

  const referenceId = `1W-${Date.now().toString().slice(-5)}`;
  return {
    referenceId,
    submittedAt: new Date().toISOString(),
    data,
  };
}
