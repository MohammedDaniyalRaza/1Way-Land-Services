export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  city: string;
  state: string;
  cityState: string;
  serviceAreaSummary: string;
  phoneDisplay: string;
  phoneHref: string;
  facebookUrl: string;
  logoPath: string;
  // TODO: client to provide email, streetAddress, and hours
  email: string;
  streetAddress: string;
  hours: string;
}

export const BUSINESS: BusinessConfig = {
  name: '1Way Land Services',
  shortName: '1WAY',
  tagline: 'From Raw Land to Ready Ground',
  city: 'Pell City',
  state: 'AL',
  cityState: 'Pell City, Alabama',
  serviceAreaSummary:
    'Pell City, Alabama, serving Birmingham to Oxford along the I-20 corridor and the Logan Martin Lake area.',
  phoneDisplay: '(205) 767-9322',
  phoneHref: 'tel:+12057679322',
  facebookUrl: 'https://www.facebook.com/OneWayLandService/',
  logoPath: '/assets/aistudio/1WAY_Land_Services_Badge_fd4fe66d.png',
  // TODO: client to provide
  email: '',
  // TODO: client to provide
  streetAddress: '',
  // TODO: client to provide
  hours: '',
};
