# PROMPT TO PASTE INTO CLAUDE CODE

Build a new "Join Us" careers section for Advanced Dermatology, a physician-owned dermatology
practice in Dana Point, CA. This includes both the page copy and a working component for an
alumni photo gallery/carousel. Read this entire brief before writing anything — the brand voice
rules are strict and specific, and violating them (see Section 4) is the most common failure mode.

---

## 1. WHAT THIS PAGE IS FOR

Advanced Dermatology has a chronic, structural hiring need: it constantly needs to hire back-office
staff (medical assistants) because its best people keep leaving — on purpose, by design, because
the practice sends them to PA school or med school. This is not attrition to solve. It's the pitch.

**The core fact, stated precisely:** Over 20 years, Dr. Maryam Moinfar has personally trained and
mentored more than 100 pre-med and pre-PA college graduates who came to work at the practice as
medical assistants. A meaningful number of them went on to become PAs or physicians. Two of the
practice's current PAs — Madeline Fee, PA-C, and Shylie Falahati, PA-C — are products of exactly
this pipeline: they started as MAs, were mentored by Dr. Moinfar at the exam table, went to PA
school, and came back to work in the same building.

**The strategic reframe this page has to make:** most practices treat "our MAs keep leaving for
PA school" as a retention failure. This practice should treat it as the single best recruiting
asset it has. The pitch to a 22-year-old with a biology degree isn't "entry-level medical job."
It's "the place that has spent 20 years turning people like you into PAs and doctors — ask the two
PAs currently on staff who did exactly that."

**Business goal:** generate a steady, high-quality applicant pipeline for the medical assistant
role by making the mentorship pipeline the headline, not a footnote.

---

## 2. WHO THIS PAGE IS TALKING TO

A recent college graduate, most likely with a pre-med or pre-PA background, who is looking for
clinical experience hours before applying to PA school or med school. They are evaluating this job
against other MA jobs, scribing jobs, and CNA jobs. They are optimizing for: will this actually
help me get into a program, will I learn something, will someone with authority vouch for me later.

They are not optimizing for: benefits language, generic "great culture" claims, or corporate
careers-page boilerplate. Treat them like a serious young professional making a strategic decision,
not like someone who needs to be sold on "fun team lunches."

---

## 3. BRAND VOICE — NON-NEGOTIABLE

The practice's tone across all copy is: **calm, precise, unhurried, quietly confident, and allergic
to hype.**

**Do:**
- Short, declarative sentences.
- Numbers over adjectives. "Over 100 pre-med and pre-PA graduates trained in 20 years" beats
  "extensive mentorship experience."
- Specificity as the source of warmth — name real people, real outcomes, real timelines.
- Admit trade-offs honestly (e.g., this job is genuinely demanding; the churn is real and by design).

**Don't:**
- Never use: "journey," "unleash," "passionate," "rockstar," "dream job," "family" (as in "join our
  family"), "fun," exclamation points, or any startup-careers-page clichés.
- No superlatives that can't be sourced ("best," "#1," "top-rated").
- No urgency language, no fake scarcity ("apply now, spots filling fast").
- No stock photography anywhere. If a photo isn't of an actual person from this practice, don't use it.

This page should read like it was written by the same person who wrote the skin cancer page, not
by a generic HR department. If in doubt, cut the adjective and add a fact instead.

---

## 4. FACTS YOU MUST NOT INVENT

Use only the confirmed facts below. Where a number, name, or date is not confirmed, leave an
explicit `[CONFIRM: ...]` placeholder in the copy rather than guessing or rounding to something
that sounds plausible. This practice's brand principle is "honest gaps outperform fabricated
proof" — a page that says "we don't have this yet" is on-brand; a page with a made-up statistic is a
serious brand violation.

**Confirmed:**
- Practice founded 2006 by Dr. Maryam Moinfar (board-certified dermatologist, physician-owned,
  independent, one location, Dana Point, CA).
- Dr. Moinfar conducts weekly pathology review across all providers.
- Dr. Jeffrey K. Lander, M.D., PhD — board-certified dermatologist, fellowship-trained Mohs
  surgeon, performs 800+ Mohs cases annually (his volume specifically, not stated as practice total).
- Madeline Fee, PA-C — senior PA, started as a medical assistant at the practice, mentored by
  Dr. Moinfar, went to PA school, returned to the practice.
- Shylie Falahati, PA-C — second PA, same pipeline origin: started as MA, mentored, went to PA
  school, returned.
- Over 100 pre-med/pre-PA college graduates trained and mentored by Dr. Moinfar over the ~20-year
  history of the practice.
- Total staff of approximately 17.
- Practice serves South Orange County: Dana Point, San Clemente, Laguna Niguel, Mission Viejo,
  and surrounding communities.
- Uses eClinicalWorks as its practice management system.

**Explicitly unconfirmed — must appear as bracketed open items, not stated as fact:**
- Exact count of the "100+" figure (is it 100, 120, 150? — use "over 100" only, don't invent precision)
- Exact number of that 100+ who became PAs vs. physicians vs. other clinical roles
- Names, years, and current roles/locations of specific alumni beyond Fee and Falahati
- Average tenure of an MA before moving on (practice ops docs reference ~1.5 years average
  tenure and ~3-month ramp time — flag this as available context but confirm before publishing
  as a stat, since it was estimated in an internal ops context, not verified for public use)
- Photos and consent for any alumni gallery — nothing goes live without signed consent

---

## 5. DELIVERABLE 1 — PAGE COPY (Markdown file)

Create `join-us.md` (or `careers.md` if that fits the existing sitemap better — check for an
existing sitemap/navigation file in this repo and match its convention; this page likely sits
under `About > Careers` or as `/join-us`).

Write full production-ready copy, in the style of the practice's other pages (hero, section
headers as H2, sub-items as H3, no skipped heading levels), covering:

1. **Hero** — lead with the mentorship pipeline as the headline claim, not "we're hiring." Something
   in the register of: a plain statement that this practice has spent 20 years turning college
   graduates into PAs and physicians, and it needs its next one now.
2. **The pipeline, stated plainly** — the "over 100" figure, what the role actually is (medical
   assistant), what mentorship actually looks like day to day (working alongside Dr. Moinfar at
   the exam table, not a formal classroom program), and what it has produced (cite Fee and
   Falahati by name as the proof, since they're confirmed and currently on staff — this is much
   stronger than an anonymous claim).
3. **What the job actually is** — an honest, specific description of the medical assistant role:
   rooming patients, assisting with procedures, exposure to Mohs/skin cancer care and cosmetic
   procedures, the pace, the responsibility. Don't oversell; a false pitch here produces a bad
   hire and a fast departure for the wrong reasons.
4. **Why people leave, addressed directly** — reframe average tenure as evidence the program works,
   not evidence of a bad job. Something like: most people who take this job are using it as a
   deliberate stepping stone, and the practice is built to help them take that step rather than
   quietly resent it.
5. **A gallery section** — "Where they are now" — this hands off to Deliverable 2 (the component).
   Write a short intro paragraph and a caption convention for each gallery entry (name, year
   started as MA, current role/year, one line if there's a quote).
6. **Who this is for** — plain candidacy language mirroring the site's existing "honest candidacy"
   pattern used on the EmSculpt Neo page (a good-fit / not-a-fit list, but for candidates instead
   of patients).
7. **Current openings / CTA** — how to apply, what to expect (timeline, who they'll meet), and a
   direct application form spec (fields: name, phone, email, resume upload, school/program if
   applicable, why now).
8. **Compliance/consent note** (internal, not public-facing) — flag that every alumni photo and
   quote requires signed consent before publishing, and that current employment status of any
   named alumni should be reverified before launch (people change jobs).

Include an open-items list at the bottom of the file, same convention as the other production docs
in this repo: bracketed facts to confirm, assets still needed (photos, consent forms, exact alumni
count), and decisions to make (page URL, whether this lives under About or gets its own nav slot).

---

## 6. DELIVERABLE 2 — ALUMNI GALLERY / CAROUSEL COMPONENT

Build a working front-end component (match whatever stack this repo already uses — check for
existing components first; default to a simple React component with plain CSS if nothing else is
established) that displays alumni as a browsable carousel or grid. Requirements:

**Data structure** — define a clean, typed data shape so real entries can be dropped in later
without touching the component code. Something like:

```
{
  name: string,
  photoUrl: string | null,       // null = show a placeholder, never a stock photo
  yearStarted: number,           // year they started as an MA
  roleAtStart: string,           // e.g. "Medical Assistant"
  currentRole: string,           // e.g. "PA-C, Advanced Dermatology" or "PA-C, [other practice]" or "Medical Student, [school]"
  currentYear: number | "Present",
  quote: string | null,          // optional short quote, keep under ~25 words if present
  consentOnFile: boolean         // component should refuse to render an entry where this is false
}
```

**Seed data** — populate with the two confirmed real entries (Madeline Fee, Shylie Falahati) using
placeholder photo slots, and 4–6 clearly-labeled placeholder/sample entries (e.g. "Sample Entry —
replace before launch") so the practice can see the full visual effect before more alumni are
confirmed. Do not invent named individuals beyond Fee and Falahati.

**Behavior:**
- Carousel or grid, responsive, touch-swipeable on mobile.
- Each card: photo (or a dignified placeholder — initials on a neutral background, not a generic
  silhouette icon), name, "MA, [yearStarted]" → "Now: [currentRole], [currentYear]" as a clear
  before/after progression, optional quote.
- No autoplay that can't be paused — a hiring page is not a place for motion that distracts from
  reading.
- Accessible: alt text on every image following the pattern
  `[Name], former medical assistant at Advanced Dermatology, now [current role]`.
- A `consentOnFile: false` entry should never render, even in seed data — enforce this in the
  component logic itself so it can't accidentally ship a real name without consent.

**Style:** match the practice's locked visual identity — Evergreen (`#1F3B32`) for the master
brand, no brass accent (brass is reserved exclusively for the Restore aesthetic sub-brand and has
no place on a careers page), typography per the existing system if defined in this repo
(Newsreader for display, Public Sans for body).

---

## 7. WHAT NOT TO DO

- Don't invent alumni names, photos, quotes, or an exact headcount beyond "over 100."
- Don't use stock photography or generic icon avatars as a permanent solution — placeholders should
  look intentional and temporary, not like a finished design choice.
- Don't write hype-driven recruiting copy ("join our amazing team!"). Match the existing site's
  restrained, factual register.
- Don't publish real names/photos without `consentOnFile: true` — build this as a hard rule in the
  component, not just a copy note.
- Don't bury the "current openings" CTA — a candidate reading this page should never have to hunt
  for how to apply.

---

## 8. OUTPUT

Produce:
1. `join-us.md` — full page copy, following the structure in Section 5, with an open-items list.
2. A working gallery/carousel component with seed data as specified in Section 6.
3. A short summary at the end listing every bracketed/unconfirmed item across both deliverables,
   so it can be handed to the practice as a single confirm-before-launch checklist.
