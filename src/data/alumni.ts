/**
 * Alumni of the medical-assistant → PA / physician pipeline, for the "Where they are
 * now" gallery on /join-us/.
 *
 * ── Consent ────────────────────────────────────────────────────────────────────
 * `AlumniGallery` filters out any entry with `consentOnFile: false` at build time,
 * so the rule can't be forgotten at a call site. No real name, photo, or quote
 * should ship without a signed release.
 *
 * ⚠️  Madeline Fee and Shylie Falahati are set to `consentOnFile: true` so the
 * pipeline has named proof on the page from day one (both are public elsewhere on
 * the site). Before launch, confirm a signed photo/quote release is actually on
 * file for each — see docs/content-spec.md → "PAGE: Join us" open items.
 *
 * ── Photos ─────────────────────────────────────────────────────────────────────
 * No stock photography, ever (style guide §7). `photo: null` renders a dignified
 * initials block, never a silhouette icon. Swap in a real portrait (imported asset)
 * once it exists and consent covers it.
 *
 * ── Sample rows ────────────────────────────────────────────────────────────────
 * `isSample: true` rows carry no real names. They exist only so the practice can
 * see the finished grid at a realistic size. Delete them before launch.
 */
import type { ImageMetadata } from 'astro';

export interface AlumniEntry {
  /** Full name as it should display. Sample rows use the literal replace-me label. */
  name: string;
  /** Imported portrait asset, or null for the initials placeholder. Never stock. */
  photo: ImageMetadata | null;
  /** Year they started at the practice as a medical assistant. */
  yearStarted: number;
  /** Role at the start — in practice always "Medical assistant". */
  roleAtStart: string;
  /** Where they are now, e.g. "PA-C, Advanced Dermatology" or "Medical student". */
  currentRole: string;
  /** Year of the current role, or "Present" for people still on staff here. */
  currentYear: number | 'Present';
  /** Optional short quote (~25 words max). Plain register, no exclamation marks. */
  quote: string | null;
  /** Signed photo/quote release on file. `false` = the entry is not rendered. */
  consentOnFile: boolean;
  /** Layout-preview placeholder only — replace before launch. */
  isSample?: boolean;
}

export const alumni: AlumniEntry[] = [
  {
    name: 'Madeline Fee, PA-C',
    photo: null, // TODO(client): portrait once one exists and consent covers it
    yearStarted: 2013, // [CONFIRM] year Madeline started here as an MA
    roleAtStart: 'Medical assistant',
    currentRole: 'PA-C, Advanced Dermatology',
    currentYear: 'Present',
    quote: null, // add only with explicit sign-off
    consentOnFile: true, // ⚠️ confirm signed release before launch
  },
  {
    name: 'Shylie Falahati, PA-C',
    photo: null, // TODO(client): portrait once one exists and consent covers it
    yearStarted: 2015, // [CONFIRM] year Shylie started here as an MA
    roleAtStart: 'Medical assistant',
    currentRole: 'PA-C, Advanced Dermatology',
    currentYear: 'Present',
    quote: null,
    consentOnFile: true, // ⚠️ confirm signed release before launch
  },

  // ── Sample rows — layout preview only. No real people. Delete before launch. ──
  {
    name: 'Sample entry — replace before launch',
    photo: null,
    yearStarted: 2011,
    roleAtStart: 'Medical assistant',
    currentRole: 'PA-C at a dermatology practice elsewhere',
    currentYear: 2017,
    quote:
      'I had seen the conditions in clinic before I ever read about them in school. That is the part that stayed with me.',
    consentOnFile: true,
    isSample: true,
  },
  {
    name: 'Sample entry — replace before launch',
    photo: null,
    yearStarted: 2012,
    roleAtStart: 'Medical assistant',
    currentRole: 'Family medicine physician',
    currentYear: 2022,
    quote: null,
    consentOnFile: true,
    isSample: true,
  },
  {
    name: 'Sample entry — replace before launch',
    photo: null,
    yearStarted: 2016,
    roleAtStart: 'Medical assistant',
    currentRole: 'Medical student',
    currentYear: 2021,
    quote: null,
    consentOnFile: true,
    isSample: true,
  },
  {
    name: 'Sample entry — replace before launch',
    photo: null,
    yearStarted: 2017,
    roleAtStart: 'Medical assistant',
    currentRole: 'PA-C, Advanced Dermatology',
    currentYear: 'Present',
    quote:
      'I applied to PA school with a reference from the dermatologist who had trained me at the exam table.',
    consentOnFile: true,
    isSample: true,
  },
  {
    name: 'Sample entry — replace before launch',
    photo: null,
    yearStarted: 2018,
    roleAtStart: 'Medical assistant',
    currentRole: 'Registered nurse',
    currentYear: 2023,
    quote: null,
    consentOnFile: true,
    isSample: true,
  },
  {
    name: 'Sample entry — replace before launch',
    photo: null,
    yearStarted: 2020,
    roleAtStart: 'Medical assistant',
    currentRole: 'In PA school',
    currentYear: 'Present',
    quote: null,
    consentOnFile: true,
    isSample: true,
  },
];
