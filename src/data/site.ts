/**
 * Single source of truth for practice facts, navigation, and fixed strings.
 * NAP must match the Google Business Profile character-for-character (CLAUDE.md).
 * Do not introduce superlatives or marketing language here — this feeds schema and the footer.
 */
import type { ImageMetadata } from 'astro';
import moinfarPhoto from '../assets/providers/dr-maryam-moinfar.jpeg';
import landerPhoto from '../assets/providers/dr-jeffrey-lander.jpeg';
import feePhoto from '../assets/providers/madeline-fee.jpeg';
import falahatiPhoto from '../assets/providers/shylie-falahati.jpg';

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
      { label: 'Join us', href: '/join-us/' },
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
  /** Practice-area summary line on the bio page. Omitted where the client asked it removed. */
  role?: string;
  /** One-line summary for cards. No superlatives. */
  cardLine: string;
  /** Portrait supplied by the client (2026-08-29). See note below on resolution. */
  photo: ImageMetadata;
  /** Descriptive alt text for the portrait. */
  photoAlt: string;
  /** Meta description for the individual bio page — written for click-through. */
  metaDescription: string;
  /** Opening line of the bio, rendered as the lede. */
  bioLede: string;
  /** "How they practice" — 1–3 short paragraphs. */
  bioBody: readonly string[];
  /** "Education and training" paragraph. */
  education: string;
  /** One human detail, supplied by the client — never invented. Omitted where none was given. */
  humanNote?: string;
  /** Panel status line, e.g. "Currently accepting new patients." */
  accepting: string;
  /** Slug of one other provider to cross-link (content-spec §11.4). */
  relatedBioSlug: string;
  serviceLinks: { label: string; href: string }[];
};

/**
 * Bio copy adapted from the client's provider-bios document (2026-08-29).
 * Mohs volume updated to "more than 1,000 cases a year" per client confirmation
 * that day (decisions.md D20); the Proof Bank and skin-cancer page were updated to match.
 * Portraits are the client-supplied files — all are low-resolution (Madeline Fee's is
 * ~124px); flagged for replacement with proper headshots before launch.
 */
export const providers: Provider[] = [
  {
    slug: 'dr-maryam-moinfar',
    name: 'Dr. Maryam Moinfar',
    firstReference: 'Dr. Maryam Moinfar, board-certified dermatologist',
    credential: 'MD, board-certified dermatologist',
    cardLine:
      'Founded the practice in 2006. Reviews pathology across all providers each week. Leads the Restore program.',
    photo: moinfarPhoto,
    photoAlt: 'Dr. Maryam Moinfar, founder and medical director of Advanced Dermatology',
    metaDescription:
      'Dr. Maryam Moinfar is a board-certified dermatologist and the founder of Advanced Dermatology in Dana Point. She reviews pathology across all providers every week.',
    bioLede:
      'Founded Advanced Dermatology in 2006 and still practices here full-time, twenty years later.',
    bioBody: [
      'Her clinical work spans skin cancer detection and treatment, surgical dermatology, and cosmetic dermatology, including Silhouette InstaLift — a non-surgical alternative to facelift surgery for patients who want lift without an operating room.',
      'Hair loss is a particular focus of hers, and a personal one. She spent nearly twenty-five years working in the field. Successfully treating her own hair loss successfully is what pushed her to go deeper — into the pathophysiology, and into conventional, innovative, and holistic approaches alike. That depth is what she now brings to the hundreds of patients she has helped see real regrowth.',
      "That same depth shows up elsewhere, too. She reviews the practice's pathology herself, every week, across every provider — a second read on each diagnosis before it becomes a treatment plan. She has also given patients her personal cell phone number for twenty years, so that care does not stop at the end of a visit. Different kinds of oversight, but the same instinct behind both: easy to promise, hard to sustain for two decades.",
      'This level of dedication, consistency, and insistence on getting it right is what makes her the dermatologist other physicians in the area rely on for their own care: physicians in our community bring their own spouses and friends here.',
    ],
    education:
      "Dr. Moinfar grew up in Orange County. She earned her undergraduate degree in molecular and cell biology from UC Berkeley, with honors, and her medical degree from Northwestern University's Feinberg School of Medicine, where she was inducted into Alpha Omega Alpha, the national medical honor society. She completed her dermatology residency at the University of Minnesota, training during that time under a hair-loss specialist whose work still shapes the practice's hair and scalp program. She was named Woman of the Year in Medicine and Healthcare in 2009.",
    humanNote:
      'Outside the practice, she has spent twenty years raising a practice and a daughter at the same time, and talks about the two in similar terms.',
    accepting: 'Currently accepting new patients.',
    relatedBioSlug: 'dr-jeffrey-lander',
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
    credential: 'MD, PhD, board-certified dermatologist, fellowship-trained Mohs surgeon',
    role: 'Mohs micrographic surgery and reconstruction',
    cardLine:
      'Performs more than 1,000 Mohs cases a year and the reconstruction himself. Trained alongside Dr. Moinfar in residency.',
    photo: landerPhoto,
    photoAlt: 'Dr. Jeffrey Lander, fellowship-trained Mohs surgeon at Advanced Dermatology',
    metaDescription:
      'Dr. Jeffrey Lander is a board-certified dermatologist and fellowship-trained Mohs surgeon in Dana Point. He performs more than 1,000 Mohs cases a year and the reconstruction himself.',
    bioLede:
      'Dr. Jeffrey Lander performs more than 1,000 Mohs cases a year — a number built from daily repetition, not a claim from a brochure.',
    bioBody: [
      'His method is the same from case to case: remove the cancer one thin layer at a time, examine the margins under a microscope between each layer, and stop the moment they are clear. It is the approach that spares the most healthy tissue while confirming the margin before the surgery ends.',
      'When reconstruction is needed afterward, he does it himself, here — not referred out to someone who was not in the room.',
      'He is a Diplomate of the American Board of Dermatology and a member of the American College of Mohs Micrographic Surgery and the American Society for Dermatologic Surgery.',
      'Patients tend to describe him the same way: unhurried, plain-spoken about what he is finding as he finds it, in no rush to get to the next room.',
    ],
    education:
      'A Southern California native, Dr. Lander earned a PhD in biological sciences from UC Irvine before medical school. He completed medical school and his dermatology residency at the University of Minnesota, where he trained alongside Dr. Moinfar; the two have practiced side by side for nearly twenty-five years since. He went on to complete a full additional year of fellowship training in Mohs micrographic surgery and cutaneous oncology.',
    accepting: 'Currently accepting new patients and referrals.',
    relatedBioSlug: 'dr-maryam-moinfar',
    serviceLinks: [
      { label: 'Skin cancer & Mohs surgery', href: '/skin-cancer/' },
      { label: 'For referring physicians', href: '/skin-cancer/#referring-physicians' },
    ],
  },
  {
    slug: 'madeline-fee-pa-c',
    name: 'Madeline Fee, PA-C',
    firstReference: 'Madeline Fee, PA-C',
    credential: 'PA-C, certified physician assistant',
    role: 'General medical dermatology',
    cardLine: 'Started at the practice as a medical assistant, went to PA school, and came back.',
    photo: feePhoto,
    photoAlt: 'Madeline Fee, PA-C, at Advanced Dermatology',
    metaDescription:
      'Madeline Fee, PA-C, practices medical dermatology at Advanced Dermatology in Dana Point. She started at the practice as a medical assistant, went to PA school, and came back.',
    bioLede:
      'Before Madeline Fee was a physician assistant at Advanced Dermatology, she was a medical assistant here — five years, training directly under Dr. Moinfar at the exam table, well before PA school was a plan.',
    bioBody: [
      'She could have taken her degree anywhere. She came back to the building she started in.',
      'Her practice today covers general medical dermatology, with the same habit Dr. Moinfar taught her from the start: look for the cause before treating the symptom.',
    ],
    education:
      "Madeline is an Orange County native. She holds a bachelor's degree in integrative biology from UC Berkeley, where she volunteered with Rotary International, and earned her Master of Health Science from Duke University's physician assistant program — the top-ranked program in the country — graduating at the top of her class.",
    humanNote: 'Outside the practice, she hikes, dances, and travels.',
    accepting: 'Currently accepting new patients.',
    relatedBioSlug: 'shylie-falahati-pa-c',
    serviceLinks: [{ label: 'General dermatology', href: '/general-dermatology/' }],
  },
  {
    slug: 'shylie-falahati-pa-c',
    name: 'Shylie Falahati, PA-C',
    firstReference: 'Shylie Falahati, PA-C',
    credential: 'PA-C, certified physician assistant',
    role: 'General medical dermatology',
    cardLine:
      'Trained as a medical assistant at the practice before PA school, then came back — the same path as Madeline Fee.',
    photo: falahatiPhoto,
    photoAlt: 'Shylie Falahati, PA-C, at Advanced Dermatology',
    metaDescription:
      'Shylie Falahati, PA-C, practices general medical dermatology at Advanced Dermatology in Dana Point, California. She trained here as a medical assistant before PA school.',
    bioLede:
      'Shylie Falahati followed the same path as Madeline Fee: she trained as a medical assistant at Advanced Dermatology before PA school, and came back once she had finished.',
    bioBody: [
      'She is a member of the National Commission on Certification of Physician Assistants and the American Academy of Physician Assistants, and stays deliberately current on new dermatologic treatments — the kind of ongoing education that shows up less in a credential list and more in how she talks a patient through their options.',
    ],
    education:
      "Born and raised in Orange County, Shylie earned her bachelor's degree from Cal State Long Beach, graduating cum laude, and completed her Master of Science in Physician Assistant Studies at Pacific University in Oregon, graduating at the top of her class.",
    humanNote:
      'Outside the practice, she reads, does pilates and hot yoga, swims, and is always finding a new restaurant to try.',
    accepting: 'Currently accepting new patients.',
    relatedBioSlug: 'madeline-fee-pa-c',
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
} as const;

export const formEndpoint = '/api/callback';
