/**
 * Single source of truth for practice facts, navigation, and fixed strings.
 * NAP must match the Google Business Profile character-for-character (CLAUDE.md).
 * Do not introduce superlatives or marketing language here — this feeds schema and the footer.
 */

export const practice = {
  legalName: 'Advanced Dermatology',
  // NAP — matches Google Business Profile exactly.
  street: '34213 Pacific Coast Highway',
  city: 'Dana Point',
  state: 'CA',
  postalCode: '92629',
  region: 'South Orange County',
  phone: '949.248.4547',
  phoneHref: '+19492484547',
  // TODO(client): confirm fax number for the referring-physicians section + Contact page.
  fax: '',
  email: 'derm@dermsc.com',
  foundedYear: 2006,
  geo: { lat: 33.467, lng: -117.698 }, // TODO(client): confirm exact coordinates from GBP pin.
  // TODO(client): confirm hours from GBP. Placeholder below.
  hours: [
    {
      days: 'Monday – Friday',
      open: '08:00',
      close: '17:00',
      label: 'Monday to Friday, 8:00 am – 5:00 pm',
    },
  ],
  areaServed: ['Dana Point', 'San Clemente', 'Laguna Niguel', 'South Orange County'],
  // External profiles for schema `sameAs`. TODO(client): supply live URLs.
  sameAs: [] as string[],
  shopUrl: 'https://store.dermsc.com',
} as const;

export const siteMeta = {
  /** Canonical production host. Keep in sync with astro.config.mjs `site`. */
  origin: 'https://www.dermsc.com',
  titleSuffix: 'Advanced Dermatology',
  defaultOgAlt: 'Advanced Dermatology — physician-owned dermatology in Dana Point, California',
} as const;

/** Primary navigation. `restore: true` marks the brass sub-brand items (CLAUDE.md rule 1). */
export const primaryNav: {
  label: string;
  href: string;
  restore?: boolean;
}[] = [
  { label: 'General dermatology', href: '/general-dermatology/' },
  { label: 'Skin cancer', href: '/skin-cancer/' },
  { label: 'Cosmetic', href: '/cosmetic/', restore: true },
  { label: 'GLP-1 Restore', href: '/glp-1-restore/', restore: true },
  { label: 'About', href: '/about/' },
];

export const footerLinks: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: 'Care',
    links: [
      { label: 'General dermatology', href: '/general-dermatology/' },
      { label: 'Skin cancer & Mohs surgery', href: '/skin-cancer/' },
      { label: 'Cosmetic', href: '/cosmetic/' },
      { label: 'GLP-1 Restore', href: '/glp-1-restore/' },
    ],
  },
  {
    heading: 'Practice',
    links: [
      { label: 'About', href: '/about/' },
      { label: 'Our providers', href: '/about/#providers' },
      { label: 'Contact', href: '/contact/' },
      { label: 'Request an appointment', href: '/contact/' },
    ],
  },
  {
    heading: 'Site',
    links: [
      { label: 'Privacy policy', href: '/privacy/' },
      { label: 'Accessibility statement', href: '/accessibility/' },
    ],
  },
];

export type Provider = {
  slug: string;
  name: string;
  /** How they are referred to on first mention, per brand doc. */
  firstReference: string;
  credential: string;
  role: string;
  /** One-line summary for cards. No superlatives. */
  cardLine: string;
  serviceLinks: { label: string; href: string }[];
};

export const providers: Provider[] = [
  {
    slug: 'dr-maryam-moinfar',
    name: 'Dr. Maryam Moinfar',
    firstReference: 'Dr. Maryam Moinfar, board-certified dermatologist',
    credential: 'MD, board-certified dermatologist',
    role: 'Founder; medical and cosmetic dermatology; hair and scalp',
    cardLine:
      'Founded the practice in 2006. Reviews pathology across all providers each week. Leads the Restore program.',
    serviceLinks: [
      { label: 'General dermatology', href: '/general-dermatology/' },
      { label: 'Hair restoration', href: '/cosmetic/hair-restoration/' },
      { label: 'GLP-1 Restore', href: '/glp-1-restore/' },
    ],
  },
  {
    slug: 'dr-jeffrey-lander',
    name: 'Dr. Jeffrey Lander',
    firstReference:
      'Dr. Jeffrey Lander, board-certified dermatologist and fellowship-trained Mohs surgeon',
    credential: 'MD, board-certified dermatologist, fellowship-trained Mohs surgeon',
    role: 'Mohs micrographic surgery and reconstruction',
    cardLine:
      'Fellowship-trained in Mohs surgery. Performs the reconstruction himself, the next day. Trained alongside Dr. Moinfar in residency.',
    serviceLinks: [{ label: 'Skin cancer & Mohs surgery', href: '/skin-cancer/' }],
  },
  {
    slug: 'madeline-fee-pa-c',
    name: 'Madeline Fee, PA-C',
    firstReference: 'Madeline Fee, PA-C',
    credential: 'PA-C, certified physician assistant',
    role: 'Medical dermatology',
    cardLine: 'Started at the practice as a medical assistant, went to PA school, and came back.',
    serviceLinks: [{ label: 'General dermatology', href: '/general-dermatology/' }],
  },
  {
    slug: 'shylie-falahati-pa-c',
    name: 'Shylie Falahati, PA-C',
    firstReference: 'Shylie Falahati, PA-C',
    credential: 'PA-C, certified physician assistant',
    role: 'Medical dermatology',
    cardLine: 'Medical dermatology across general and surgical care.', // TODO(client): confirm bio details.
    serviceLinks: [{ label: 'General dermatology', href: '/general-dermatology/' }],
  },
];

/**
 * Fixed CTA strings (brand doc §12.11). Use verbatim. Never "complimentary" / "free".
 * All consultation/appointment CTAs route to the callback form at /contact/.
 */
export const cta = {
  medical: { primary: 'Request an appointment', secondary: 'Call 949.248.4547' },
  skinCancer: { primary: 'Request a skin check', secondary: 'What to watch for' },
  cosmetic: { primary: 'Book a consultation', secondary: 'How it works' },
  hair: { primary: 'Request a hair consultation', secondary: 'About Dr. Moinfar' },
  glp1: { primary: 'Request a Restore consultation', secondary: 'How it works' },
  membership: { primary: 'Join Restore', secondary: "See what's included" },
} as const;

export const formEndpoint = '/api/callback';
