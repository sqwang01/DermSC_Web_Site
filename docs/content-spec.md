# Content Spec — Advanced Dermatology website

Per-page blueprint. Every page: audience (one), primary pillar, proofs cited (min 2), one honest
limitation, claims-fence items, one primary + one secondary CTA. Follows the standard page
architecture in `brand-positioning-v2.md` §11.2. **Status:** all pages fully specced. Home / Skin
Cancer / GLP-1 Restore were the template; the remaining pages were drafted 2026-08-28 (D16) and are
built from these specs. Client content proof still required at Phase 4 (§11.3 checklist per page).

Pillars: **1 Accuracy · 2 Depth · 3 Continuity · 4 Restraint.** Independence is the substrate, never
a headline (§7.2: claim the benefit first, add the structure only if the reader would doubt it).

---

## Global

### Navigation (header, `--paper`, 1px `--line` bottom)

Wordmark (left) · **General dermatology · Skin cancer · Cosmetic · GLP-1 Restore · About** (center) ·
`Request an appointment` button + `949.248.4547` (right).

- "Cosmetic" and "GLP-1 Restore" get the brass sub-brand marker (a 3px `--brass` underline or a
  small brass dot) — the only brass in the global chrome.
- Mobile: hamburger; persistent tap-to-call bar; on Cosmetic + GLP-1 Restore pages a sticky
  bottom bar with `Request a consultation` + `Call`.
- Sentence case. No mega-menu; category hubs carry their own sub-navigation.

### Footer (`--evergreen-deep`, `--paper` text)

NAP block (matches GBP exactly) · hours · phone / fax · quick links (the four categories + About +
Contact + provider bios) · secondary line _"Independent since 2006."_ · medical disclaimer ·
privacy policy · accessibility statement · external link to the shop (`store.dermsc.com`, opens in
new tab, `rel="noopener"`). **No review count. No "as seen in" strip. No social proof widgets.**

### Sitewide SEO

- `MedicalBusiness` JSON-LD in the base layout: legal name, address, geo coordinates, phone,
  `openingHoursSpecification`, `sameAs` (GBP, Yelp, Healthgrades), `medicalSpecialty: Dermatology`,
  `areaServed` (Dana Point, San Clemente, South Orange County).
- Local-intent primary terms to place naturally (§11.4): `mohs surgery dana point` ·
  `dermatologist dana point` · `skin cancer screening south orange county` ·
  `hair loss dermatologist orange county` · `emsculpt neo dana point`.
- One H1 per page. Trailing-slash and host (apex vs www) canonicalized sitewide.
- OG image: type-forward brand card (wordmark + page title on `--page`), generated per page.

### Page list

| URL                                  | Page                           | Pillar          | Brass?      | Schema (in addition to MedicalBusiness) |
| ------------------------------------ | ------------------------------ | --------------- | ----------- | --------------------------------------- |
| `/`                                  | Home                           | all four        | marker only | —                                       |
| `/general-dermatology/`              | General dermatology            | 1 Accuracy      | no          | MedicalProcedure, FAQPage               |
| `/skin-cancer/`                      | Skin cancer                    | 2 Depth         | no          | MedicalProcedure (Mohs), FAQPage        |
| `/skin-cancer/#referring-physicians` | Referring physicians (section) | 2 Depth         | no          | —                                       |
| `/cosmetic/`                         | Cosmetic hub                   | 4 Restraint     | yes         | FAQPage                                 |
| `/cosmetic/neuromodulators/`         | Neuromodulators (Botox/Dysport) | 4 Restraint     | yes         | MedicalProcedure, FAQPage               |
| `/cosmetic/fillers/`                 | Dermal fillers (hyaluronic acid) | 4 Restraint    | yes         | MedicalProcedure, FAQPage               |
| `/cosmetic/collagen-stimulators/`    | Collagen-stimulating injectables | 4 Restraint    | yes         | MedicalProcedure, FAQPage               |
| `/cosmetic/laser/`                   | Laser & IPL (VBeam, photofacial) | 4 Restraint    | yes         | MedicalProcedure, FAQPage               |
| `/cosmetic/thread-lift/`             | Silhouette InstaLift thread lift | 4 Restraint    | yes         | MedicalProcedure, FAQPage               |
| `/cosmetic/chemical-peels/`          | Chemical peels                 | 4 Restraint     | yes         | MedicalProcedure, FAQPage               |
| `/cosmetic/microneedling/`           | Microneedling                  | 4 Restraint     | yes         | MedicalProcedure, FAQPage               |
| `/cosmetic/emsculpt-neo/`            | EmSculpt Neo                   | 4 Restraint + 2 | yes         | MedicalProcedure, FAQPage               |
| `/cosmetic/coolsculpting/`           | CoolSculpting                  | 4 Restraint     | yes         | MedicalProcedure, FAQPage               |
| `/cosmetic/hair-restoration/`        | Hair restoration               | 1 Accuracy + 4  | yes         | MedicalProcedure, FAQPage               |
| `/glp-1-restore/`                    | GLP-1 Restore                  | 4 Restraint + 2 | yes         | MedicalProcedure, FAQPage               |
| `/about/`                            | About                          | all four        | no          | —                                       |
| `/about/dr-maryam-moinfar/`          | Dr. Moinfar bio                | —               | no          | Physician                               |
| `/about/dr-jeffrey-lander/`          | Dr. Lander bio                 | —               | no          | Physician                               |
| `/about/madeline-fee-pa-c/`          | Madeline Fee, PA-C bio         | —               | no          | Physician                               |
| `/about/shylie-falahati-pa-c/`       | Shylie Falahati, PA-C bio      | —               | no          | Physician                               |
| `/contact/`                          | Contact                        | —               | no          | —                                       |
| `/privacy/` · `/accessibility/`      | Legal                          | —               | no          | —                                       |

CTA strings are fixed — use verbatim (§12.11):

| Context                             | Primary                          | Secondary               |
| ----------------------------------- | -------------------------------- | ----------------------- |
| Medical                             | `Request an appointment`         | `Call 949.248.4547`     |
| Skin cancer                         | `Request a skin check`           | `What to watch for →`   |
| Cosmetic / EmSculpt / CoolSculpting | `Book a consultation`            | `How it works ↓`        |
| Hair restoration                    | `Request a hair consultation`    | `About Dr. Moinfar →`   |
| GLP-1 Restore                       | `Request a Restore consultation` | `How it works ↓`        |

_(All "Book/Request a consultation" routes to the same callback form; never "complimentary/free".)_

---

## PAGE: Home `/`

- **Title:** `Advanced Dermatology · Dana Point Skin Care Since 2006` (52)
- **Meta:** `Physician-owned dermatology in Dana Point, CA — medical skin care, skin cancer and Mohs surgery, cosmetic treatments, and GLP-1 recovery. Serving South Orange County since 2006.`
- **H1 (pick at build):** `The diagnosis comes before the treatment.` _(alt: `Physician-owned dermatology in Dana Point`)_ — practice name + location appear in a visible sub-head regardless.
- **Audience:** mixed entry point — route quickly. **Pillars:** all four, lightly.
- **Proofs:** P2 (one location/owner since 2006), P3 (trained together ~25 yrs), P4 (1,000 Mohs/yr), P11 (weekly pathology review), P1/P10 (independence, chosen dermatopathologist).

**Sections**

1. **Hero** — H1 + tagline eyebrow _"Serious medicine. Natural results."_ + one-line practice
   descriptor + primary/secondary CTA. Placeholder: `[Photo: building exterior, tight architectural crop, daylight]`.
2. **Four category doors** — General dermatology / Skin cancer / Cosmetic _(brass top-rule)_ /
   GLP-1 Restore _(brass top-rule)_. Each: one sentence in the patient's language + link. Use the
   §2.1 expressions ("Chronic doesn't mean unexplained." / "Caught early, it's a small procedure." /
   "Nobody should be able to tell." / "You lost the weight. Now restore the rest.").
3. **The independence paragraph, compressed** — §12.3 verbatim.
4. **Who you'll see** — four provider cards, name + credential + one line, photo placeholders,
   link to bios. Continuity note (§12.6, trimmed).
5. **Patient story** — reserved slot. Until an approved story exists, render a short honest
   placeholder ("A patient story belongs here — we're collecting them with consent"). Flagged §6.4.
6. **Location & hours** — NAP, map embed, parking/access line, `Request an appointment`.

- **Honest limitation:** the honest-access paragraph (§12.9) — routine visits booked weeks out;
  concerning spots seen sooner; Restore consults separate.
- **Claims fence:** no review count (D13); no superlatives; independence stated as reason not boast.
- **CTA:** primary `Request an appointment` → `/contact/`; secondary `Call 949.248.4547`.
- **Schema:** `MedicalBusiness` (full). **Internal links:** all four hubs + About.

---

## PAGE: Skin cancer `/skin-cancer/`

- **Title:** `Skin Cancer Treatment & Mohs Surgery · Dana Point` (49)
- **Meta:** `Skin cancer screening with dermoscopy, non-surgical field treatment, Mohs surgery, and Sensus SRT radiation in Dana Point. Caught early, it stays a small procedure.`
- **H1:** `Caught early, it's a small procedure.`
- **Audience:** the New Medical Patient (§3.4) + referring physicians (§3.5). **Pillar:** 2 Depth.
- **Positioning (per client, 2026-08-29 — see D19):** lead with early detection and the _full range_
  of treatment, not with Mohs. The page walks least-invasive → most: exam/dermoscopy → field
  treatment / PDT → Mohs → SRT. Mohs is one option among several, not the headline.
- **Proofs:** P9 (dermoscopy every provider), P11 (weekly pathology review), P8 (PDT / field
  treatment), P4 (1,000 Mohs/yr, Dr. Lander), P5 (fellowship-trained Mohs), P6 (Mohs + reconstruction,
  same surgeon, here — no timing stated), P7 (Sensus SRT on site). Pathology read by **a
  board-certified dermatopathologist** — the P10 "Dr. Moinfar selected him personally, not by
  contract" framing and the P20 spouses-and-friends line were both dropped from this page per client
  (2026-08-29).

**Sections** (medical variant — _Surveillance_ replaces _Pricing_)

1. **Hero** — H1 + lede: two-outcomes idea, then the full range in one building (screening →
   non-surgical → Mohs → radiation). Eyebrow is the plain category label `Skin cancer` (not the
   `Serious medicine. Natural results.` tagline — wrong register for oncology). CTA `Request a skin check`.
2. **What to watch for** — the "when to call us sooner" list. Rendered with `--clay` (clinical
   signal, never elsewhere). New / changing / non-healing / bleeding / asymmetric lesions.
3. **The comprehensive skin exam** — a full-skin look, not just the presenting spot; every provider
   examines with a dermatoscope and is trained in reading it (P9; ⚠️ TODO client to confirm training
   phrasing); biopsy processed in-house and read by a board-certified dermatopathologist; weekly
   pathology review across all providers (P11).
4. **The full range** — ordered least-invasive → most: PDT and field treatment for diffuse sun
   damage (P8); Mohs micrographic surgery (P4/P5), one thin layer at a time, margin read between
   layers, with reconstruction by the same surgeon folded in (**state no timing** — not "same-day",
   not "next-day"); Sensus SRT for patients who can't or shouldn't have surgery (⚠️ candidacy
   language → counsel, §9.5). Short intro framing the choice as "plan follows the cancer".
5. **How the choice gets made** — Mohs is often the right call when… / a different path may fit
   better when… (candidacy language, not Mohs-only — names field tx / PDT and radiation as the
   alternatives).
6. **Why here, and not just anywhere** — two short paragraphs: (1) the range of capability (field tx
   without surgery, margin read while you wait, reconstruction by the same hands, radiation for the
   patient who shouldn't be cut); (2) the §12.3 line — experience + independence + that range "are
   what let us recommend the best treatment, not the most expensive one — because no one here has a
   target to hit" (ties the page to the homepage "Who we answer to" block). Close with the
   `/about/` link. Per client (2026-08-29) the "kept a radiation unit / nobody upstream asked what
   its margin was" beat and the spouses-and-friends line were removed from this section.
7. **Who you'll see** — Dr. Lander (Mohs), Dr. Moinfar (pathology review). Photo placeholders.
8. **Surveillance / what happens after** — recall cadence, self-checks, when to come back sooner.
9. **FAQ** — long-tail: "how soon can I be seen for a changing mole", "what happens if a spot is
   precancerous rather than cancer" (field tx / PDT / cryo), "how long does Mohs take", "will I need
   reconstruction", "what is superficial radiation therapy".
10. **Closing CTA** — what a skin check is, how to request one, honest lead time; urgent-spot note.
11. **Cross-sell** — one line to General dermatology (annual skin exams).

- **Honest limitation:** routine appointments booked weeks out; concerning/changing spots
  triaged sooner — say so plainly.
- **Claims fence:** no cure-rate or outcome numbers (P21); SRT device = **Sensus SRT**; SRT
  candidacy phrasing to counsel; P20 wording exactly as approved; no superlatives ("leading",
  "best Mohs surgeon" — banned). The §12.3 clause "the best treatment, not the most expensive one"
  is the one sanctioned use of "best" (verbatim from the approved independence paragraph). Dermoscopy
  **training/certification** language is not yet a Proof Bank entry — carries a TODO(client) until confirmed.
- **CTA:** primary `Request a skin check`; secondary `What to watch for →` (anchor to section 2).
- **Schema:** `MedicalProcedure` (Mohs micrographic surgery), `FAQPage`, `MedicalBusiness`.
- **Internal links:** Dr. Lander bio, About/independence, General dermatology, `#referring-physicians`.

### Section anchor: Referring physicians `#referring-physicians`

Fellowship-trained Mohs; in-house processing + reconstruction; PDT / field treatment for diffuse
actinic damage; Sensus SRT for surgical-risk patients; weekly pathology review across all providers;
direct line for referrals. Tone: peer to peer, factual. CTA: `Refer a patient` → phone/fax + secure
fax line.

---

## PAGE: GLP-1 Restore `/glp-1-restore/` (brass sub-brand)

- **Title:** `GLP-1 Restore · Hair, Skin & Muscle Recovery · Dana Point` (55)
- **Meta:** `On a GLP-1 and unhappy with hair shedding, a hollow face, or lost strength? Restore at Advanced Dermatology is a physician-directed recovery program in Dana Point — diagnosis first.`
- **H1:** `You lost the weight. Now restore your hair, skin, and muscle.`
- **Audience:** the GLP-1 Patient (§3.2). **Pillars:** 4 Restraint + 2 Depth.
- **Source copy:** `docs/reference/glp1-restore-booklet.md` (cleared). Keep claims wording intact.
- **Proofs:** P13 (Dr. Moinfar trained under a hair specialist), P17 (standardized photography),
  P18 (EmSculpt Neo — muscle + fat in one 30-min treatment), P19 (both CoolSculpting and EmSculpt
  Neo offered — no incentive to steer), P11/P9 (diagnosis first — assessment + labs before a plan).

**Sections**

1. **Hero** — H1 + lede ("Your medication is working… and yet something feels off"). CTA
   `Request a Restore consultation`. Descriptor under H1: _Restore at Advanced Dermatology —
   under a physician's direction._
2. **Does any of this sound familiar?** — the three checklists (hair / skin / muscle) from the
   booklet. Close with "all three are real, all three are treatable, none is a reason to stop your
   medication."
3. **Why your hair sheds** — telogen effluvium; the 2–4 month delay; what drives it; non-scarring,
   follicle intact; the possible second underlying pattern.
4. **Why your skin changes** — facial fat compartments; collagen/elastin slowdown; "two things at
   once"; some of it responds quickly.
5. **Why you feel weaker** — lean-mass loss; "same weight, different body"; the four reasons;
   why "just go to the gym" isn't a complete answer. **(Keep this section self-contained — do not
   write a sentence linking GLP-1 muscle loss causally to EmSculpt Neo. §9.3.)**
6. **The Restore approach** — built for one patient; runs alongside your medication, not instead of
   it; we won't ask you to change your GLP-1. Diagnosis before product.
7. **What each track includes**
   - **Hair:** scalp/hair assessment by Dr. Moinfar · review of medication, dose, pace · targeted
     labs where indicated · written plan.
   - **Skin:** volume vs. collagen assessment by Dr. Moinfar · structural vs. surface · written
     plan · may include microneedling ± growth factors, medical-grade topicals, dermal fillers for
     lost volume, collagen-stimulating treatments.
   - **Muscle:** EmSculpt Neo — FDA-**cleared**, non-invasive; ~30 min, fully clothed; a series
     over several weeks; no incisions/anesthesia/downtime; "a way to close the gap while appetite
     is suppressed," not a replacement for exercise or protein. Stat: "average 25% increase in
     muscle mass and average 30% reduction in fat in treated areas — individual results vary"
     (device labeling; fat-reduction claim area = abdomen/thighs).
8. **What to expect** — three mini-timelines (hair 1–2 / 3–4 / 6+ mo; skin same-visit / 2–6 wk /
   3 mo+; muscle after first sessions / weeks after series). Close with the "recovery tracks with
   stabilized weight and corrected nutrition; some patterns need maintenance" line.
9. **Your first visit** — "a conversation and an evaluation — not a treatment, and not a sales
   appointment." What we'll ask of you (protein target, honesty about dose, interval photos).
10. **Questions patients ask** — the nine booklet FAQs verbatim (stop meds? / hair grow back? /
    fillers change my face? / will people tell? / too late? / does EmSculpt Neo hurt? / still
    losing weight? / just supplements? / cost?). `FAQPage` schema.
11. **Closing CTA** — `Request a Restore consultation`; Dr. Moinfar pull-quote from the booklet.
12. **Cross-sell** — one line each to `/cosmetic/hair-restoration/` and `/cosmetic/emsculpt-neo/`.

- **Honest limitation:** "some of this settles on its own once weight stabilizes; part of the first
  visit is telling you what actually needs treating and what doesn't" + "we don't quote a price
  before evaluating you."
- **Claims fence (critical — §9.3):** hair/skin/muscle stay in separate sections; adjacency only,
  never a causal connector; no sarcopenia/frailty/osteoporosis/falls; "FDA-cleared" not
  "-approved"; EmSculpt Neo stats keep "individual results vary" adjacent; area-specific fat claims;
  fillers Q&A uses the v2 injectables-review wording from the booklet; no "complimentary/free".
- **CTA:** primary `Request a Restore consultation`; secondary `How it works ↓`.
- **Schema:** `MedicalProcedure` (EmSculpt Neo / non-invasive body contouring), `FAQPage`,
  `MedicalBusiness`.
- **Internal links:** `/cosmetic/hair-restoration/`, `/cosmetic/emsculpt-neo/`, Dr. Moinfar bio.

#### Structure decision (2026-08-28) — one page, three split-ready tracks

Client confirmed: **one `/glp-1-restore/` page**, not three sub-pages. Each of hair / skin / muscle
is authored as a **self-contained module** — its own "why it happens", its own "what this track
includes", its own mini-timeline — under a stable anchor (`#hair`, `#skin`, `#muscle`). The drafted
copy below therefore consolidates outline sections 3–5, 7 and 8 into the three track modules; the
outline's section numbering is kept above for reference but the build follows the module structure.

**If the tracks are later promoted to `/glp-1-restore/hair/`, `/skin/`, `/muscle/`:** each module
lifts out whole; `/glp-1-restore/` becomes a hub; add a GLP-1 sub-nav; give each sub-page its own
title/meta/OG/schema subset; repoint the anchor links (from `/cosmetic/hair-restoration/`,
`/cosmetic/emsculpt-neo/`, `/cosmetic/`, Dr. Moinfar's bio) to the new URLs; add the three URLs to
`sitemap` and `redirects.md` (additive — `/glp-1-restore/` is not redirected). Tracked in
`build-plan.md` → post-launch backlog.

#### Drafted copy (D16 — 2026-08-28, pending client proof)

Final prose for the build. Source: `docs/reference/glp1-restore-booklet.md` (client-cleared) — claims
wording kept intact. Track-module anchors: `#hair`, `#skin`, `#muscle`. Open placeholders: none that
block the build; EmSculpt Neo treatment-area figures to be re-checked against current device labeling
at build (§9.2); treating provider for the muscle track named once client confirms.

**Meta**

- Title: `GLP-1 Restore · Hair, Skin & Muscle Recovery · Dana Point`
- Description: `On a GLP-1 and unhappy with hair shedding, a hollow face, or lost strength? Restore at Advanced Dermatology is a physician-directed recovery program in Dana Point — diagnosis first.`

**1 · Hero**

- Eyebrow: Restore — under a physician's direction _(house Restore eyebrow, matches Cosmetic hub)_
- H1: You lost the weight. Now restore your hair, skin, and muscle.
- Descriptor (sub-head): Restore at Advanced Dermatology — a guide to recovery for patients on GLP-1 medications.
- Lede: Your medication is working. The number on the scale is going down. And yet — something feels
  off: more hair in the drain, a face that looks more hollow or tired than you expected, strength
  that isn't what it was. All three are real, all three are well-documented, and all three are
  treatable. None of them is a reason to stop your medication.
- CTAs: `Request a Restore consultation` → `/contact/` · `How it works ↓` (anchor to §4)

**2 · Does any of this sound familiar?**

Intro: Your medication is working, and yet something feels off. If you checked even one of these,
you're in the right place — and you're not imagining it.

- **Hair** — There's more hair in the shower drain than there used to be. Your ponytail feels
  thinner in your hand. You can see more scalp in photos, or in bright bathroom light.
- **Skin** — Your face looks more hollow or tired than you expected. Skin along your jaw or under
  your chin feels less firm. Friends have asked if you're feeling okay, even though you feel great.
- **Muscle & strength** — Your clothes are looser, but your arms and legs look soft rather than
  lean. Stairs, groceries, and getting up off the floor feel harder. You hit your goal weight and
  didn't love what you saw in the mirror.

Close: All three are real, all three are well-documented, and all three are treatable. None of them
is a reason to stop your medication.

**3 · The Restore approach**

Restore was built for one specific patient: someone doing everything right on a GLP-1 medication,
who's losing hair, watching their face change, or losing strength — sometimes all three — and
doesn't want to choose between their metabolic health and the rest of themselves.

Restore is designed to work alongside your medication, not instead of it. We won't ask you to stop
or reduce your GLP-1 — that conversation belongs to you and the physician who prescribes it. Our
role is to address what the medication doesn't.

And it starts with a diagnosis, not a product. Part of the first visit is telling you what actually
needs treating and what will settle on its own once your weight stabilizes.

**4 · The three tracks** _(id: `how-it-works`; three anchored modules)_

Intro: Hair, skin, and muscle change for different reasons and are treated in different ways. Each
track begins with its own assessment by Dr. Moinfar and its own written plan.

---

**4a · Hair** _(anchor `#hair`)_

_Why your hair is shedding._ The short version: your follicles aren't damaged. They're paused.

Most of the hair on your scalp is growing at any given moment; a smaller share is resting and sheds
naturally to make room for new growth. When the body goes through significant stress — surgery,
illness, or rapid weight loss — it triages, and a large group of follicles shifts from growing into
resting all at once. Dermatologists call this telogen effluvium.

The part that surprises everyone is the delay. Paused follicles don't shed immediately — they let go
two to four months later, often all at once. What you're seeing today is an echo of a shift that
happened months ago.

What's driving it: a steep drop in calories and especially protein; shortfalls in iron, zinc, and
vitamin D; the pace of the weight loss itself; and sometimes an underlying pattern of hair loss that
rapid weight loss has unmasked and accelerated. Telogen effluvium is non-scarring — the follicle
stays intact — and in most patients shedding settles within several months once weight stabilizes.
Some patients have a second, underlying pattern that won't resolve on its own. Telling the two apart
is the point of the evaluation.

_What this track includes:_

- A focused scalp and hair assessment by Dr. Moinfar
- A review of your medication, dose, and pace of weight loss
- Targeted lab work where indicated
- A written plan matched to what we find

_What to expect:_

- Month 1–2 — shedding often continues. Expected, not a sign of failure.
- Month 3–4 — shedding slows; regrowth is happening beneath the surface.
- Month 6+ — visible density change. Most patients feel encouraged here.

---

**4b · Skin** _(anchor `#skin`)_

_Why your skin is changing._ The short version: your skin lost its support structure before it could
catch up.

Your face is cushioned by small, distinct pockets of fat that sit under the skin and give it its
shape. Rapid weight loss doesn't spare that fat, and when it goes quickly the skin above it doesn't
always have time to adjust — a hollower, more tired look that has nothing to do with sleep or stress.

It's not only about volume. Skin's firmness depends on collagen and elastin, structural proteins the
body builds continuously. Rapid weight loss and the nutritional shifts that come with it can slow
that production at the same time the skin has more work to do covering a smaller frame. Two things
going wrong at once is why the change can feel sudden.

What's driving it: loss of volume in the facial fat compartments; reduced collagen and elastin
production during rapid weight change; the pace of the loss; age-related collagen decline that the
weight loss accelerates rather than causes; and nutritional gaps. Unlike hair, some of this responds
quickly — volume can often be addressed the same day — while collagen-building treatments take
longer and compound over months.

_What this track includes:_

- A skin and facial-volume assessment by Dr. Moinfar
- A discussion of which changes are structural and which are surface-level
- A written plan matched to what we find, which may include microneedling, with or without added
  growth factors; medical-grade topical regimens suited to post-weight-loss skin; dermal fillers to
  restore lost facial volume; and longer-term collagen-stimulating treatments

_What to expect:_

- Same visit — volume-restoring treatments can show change immediately.
- Weeks 2–6 — texture and tone improve as new collagen forms.
- Month 3+ — the collagen effect from collagen-stimulating treatments becomes visible.

---

**4c · Muscle** _(anchor `#muscle`; keep self-contained — no sentence linking GLP-1 muscle loss
causally to EmSculpt Neo, §9.3)_

_Why you feel weaker._ The scale doesn't tell you what you lost. When you lose weight you don't lose
only fat — you lose a mix, and studies of rapid weight loss suggest a substantial portion of what's
lost can come from lean mass, including muscle.

Same weight, different body. Weight loss alone and weight loss with muscle preserved can land on the
same number on the scale and produce a different-looking, differently capable body.

That matters for several reasons. Muscle is metabolically active tissue, so less of it means fewer
calories burned at rest — making weight easier to regain and harder to lose again. It's also
strength and function: stairs, groceries, getting up off the floor. And it's how you look — fat loss
without muscle preservation produces a body that's smaller but softer, often not the result patients
expected.

Why "just go to the gym" isn't a complete answer: building muscle requires enough protein and
calories, both harder to get when appetite is suppressed, and many patients start already
deconditioned. Muscle is the one part of this that doesn't take care of itself.

_What this track includes:_ EmSculpt Neo — an FDA-cleared, non-invasive treatment that stimulates
muscle contractions beyond what you can produce voluntarily, while targeting fat in the treated
area.

- Roughly 30 minutes per session, fully clothed on the table
- A series of sessions over several weeks
- No incisions, anesthesia, or downtime
- Not a replacement for exercise or protein — a way to close the gap while appetite is suppressed

In clinical studies, treated areas showed an average 25% increase in muscle mass and an average 30%
reduction in fat. Individual results vary. _(Device labeling. Fat-reduction figures apply to the
abdomen and thighs; for buttocks, arms, and calves EmSculpt Neo is used to build and strengthen
muscle. ⚠️ re-check against current labeling at build, §9.2.)_

_What to expect:_

- After the first sessions — many patients feel more "engaged" in the treated area before seeing
  visible change.
- Weeks after the series ends — visible change typically continues developing.

---

Close (all three tracks): Recovery generally tracks with stabilized weight and corrected nutrition.
Results vary, and some patterns require ongoing maintenance rather than a fixed endpoint.

**5 · Your first visit**

A conversation and an evaluation — not a treatment, and not a sales appointment. You'll leave
knowing what's actually happening and what your options are, including the option to do nothing for
now. We don't quote a price before evaluating you; you'll get clear pricing in writing before
anything is scheduled.

What we'll ask of you:

- A protein intake we'll help you set a realistic target for
- Honesty about your dose, and any changes to it
- Photographs at intervals, because month-to-month change is nearly impossible to judge from memory

**6 · Questions patients ask** _(FAQPage schema)_

1. **Do I have to stop my medication?** — No. Restore is designed to run alongside GLP-1 therapy.
   Decisions about your prescription belong to you and the physician who prescribes it. Our goal is
   to make it possible for you to stay on treatment without accepting hair loss, skin changes, and
   muscle loss as the price.
2. **Will my hair grow back?** — In most cases triggered by rapid weight loss, yes — the follicle
   isn't destroyed. Some patients have a second, underlying pattern of hair loss that won't reverse
   on its own. Your evaluation is what tells the two apart.
3. **Will fillers make me look different, not just refreshed?** — Our goal is restoring what rapid
   weight loss took, not changing your features. Volume restoration is conservative and matched to
   your own anatomy — the aim is looking like yourself, rested.
4. **Will people be able to tell I've had something done?** — Well-executed volume restoration and
   collagen treatments are designed to look like recovery, not visible "work." Most patients hear
   that they look rested or well, not that they look different.
5. **I already lost the weight and I'm off the medication. Is it too late?** — No. Follicles that
   shed during a stress period generally remain viable, skin can be treated at any point after
   volume loss, and muscle can be rebuilt at any age.
6. **Does EmSculpt Neo hurt?** — Most patients describe intense but tolerable contractions and a
   warming sensation, similar to a hard workout. Intensity is adjustable and increased gradually.
7. **Can I do this if I'm still losing weight?** — Yes — and there's an argument for starting
   sooner, since it's easier to protect muscle and skin structure than to rebuild them. We'll
   discuss timing at your visit.
8. **Isn't this just supplements?** — No. Supplements are useful when they correct a documented
   deficiency and largely useless when they don't. We test before we recommend.
9. **How much does it cost?** — It depends on what you need, which is why we don't quote a number
   before evaluating you. You'll get clear pricing in writing before anything is scheduled.

**7 · Request a Restore consultation** _(closing)_

A Restore consultation is a conversation and an evaluation — you'll leave knowing what's happening
and what your options are. Leave your name and number and our team will call you back.
CTAs: `Request a Restore consultation` → `/contact/` · `Call 949.248.4547`

Pull-quote: "Patients on these medications are doing something genuinely good for their health. They
shouldn't have to trade their hair, their skin, or their strength for it. That's the whole reason we
built this program." — Dr. Maryam Moinfar, board-certified dermatologist

**8 · Cross-sell**

- On a GLP-1 and mainly concerned about shedding? The full hair workup — trichoscopy, labs, and a
  scalp biopsy where needed — is on the [hair restoration](/cosmetic/hair-restoration/) page.
- Want the detail on the muscle track? [EmSculpt Neo](/cosmetic/emsculpt-neo/) has its own page,
  including the treatment-area table.
- The program is directed by [Dr. Maryam Moinfar](/about/dr-maryam-moinfar/).

---

## Remaining pages — full specs (drafted 2026-08-28, D16)

---

### PAGE: General dermatology `/general-dermatology/`

- **Title:** `General Dermatology & Skin Conditions · Dana Point` (49)
- **Meta:** `Acne, eczema, rosacea, psoriasis, rashes, hair and nail concerns, and annual skin exams in Dana Point. We look for the cause before we treat the symptom.`
- **H1:** `We look for the cause before we treat.`
- **Audience:** the New Medical Patient (§3.4) — including the patient dismissed elsewhere ("it's
  just stress", "you'll grow out of it") whose problem never resolved. **Pillar:** 1 Accuracy.
- **Proofs:** P23 (Dr. Moinfar trained both PAs at the exam table before either saw a patient alone
  — leads the §12.5 accuracy paragraph, D23), P11 (Dr. Moinfar reviews pathology across all
  providers weekly), P9 (dermoscopy used by every provider), P10 (specimens processed in-house, read
  by a dermatopathologist Dr. Moinfar chose personally) — P9/P10/P11 run in the first-visit steps
  and the `MedicalProcedure` schema, no longer in the hero lede or section 3 (D23); P15 (physicians
  give patients their cell numbers), P3 (same providers for years), P1 (independence — substrate,
  arrives second).

**Sections** (medical variant — _Surveillance / what to watch for_ replaces _Pricing_)

1. **Hero** — eyebrow _"General dermatology"_ (plain category label, D23 — was the
   _"Serious medicine. Natural results."_ tagline) + H1 (the practice's position, stated
   first: cause before symptom) + lede (the conditions in the patient's words, then the position
   restated: "this is where we slow down and ask why it keeps happening — not just what will make it
   stop for now"; the dermatoscope / second-read proof was removed from the lede, D23). CTA
   `Request an appointment` / `Call 949.248.4547`. Placeholder: `[Photo: exam room, natural light]`.
2. **The problem** — "Chronic doesn't mean unexplained." Name the dismissed-before
   experience plainly: a rash called stress, acne you were told to wait out, and it never cleared —
   that usually means the cause was never found. Tone §8.5: patient, thorough, faintly relieving.
3. **The accuracy paragraph** — §12.5 **verbatim** (revised D23): the fast way to practice vs. the
   slow one; judgment from years of seeing these conditions, plus Dr. Moinfar having trained both
   PAs at the exam table before either saw a patient alone; how that shows up in a visit — full
   history, whole-skin exam, biopsy or labs when the picture isn't clear; finding the reason is
   slower but it's the only "treated" that holds. The in-house-lab / chosen-dermatopathologist /
   weekly-review proof moved out of this section and out of the hero lede (D23) — it still runs in
   the first-visit steps and the `MedicalProcedure` schema.
4. **Common conditions we treat** — grouped, anchor-linked blocks (2–4 sentences each; candidacy / management
   language, never cure or outcome), **not** individual condition sub-pages at launch (D18).
   Groups + anchors: `#acne` **Acne** · `#inflammatory-skin` **Eczema, psoriasis & rosacea**
   (grouped — same diagnostic approach) · `#rashes-hives` **Rashes & hives** · `#infections-growths`
   **Skin infections, warts & molluscum** · `#hair-scalp-nails` **Hair, scalp & nails** (links to
   `/cosmetic/hair-restoration/` for diagnostic hair work) · `#skin-exams` **Annual full-skin
   exams** (links to `/skin-cancer/`). Each block repeats the core
   move: a changing or non-healing spot is a skin-cancer question → `/skin-cancer/`.
   Closes with a mid-page CTA (D36): lead-in _"Not sure which of these fits? That's what the
   first visit is for."_ + single primary button `Request an appointment` → `/contact/` (no
   secondary `Call` — button pair stays with the hero and closing CTAs).
5. **How a first visit works** — history; full-skin exam with a dermatoscope; biopsy only if the
   skin calls for one — processed in our lab, read by the dermatopathologist Dr. Moinfar selected,
   then reviewed again by her that week. "You'll leave knowing what it is, or knowing exactly what
   we're doing to find out." Some conditions take more than one visit — say so.
6. **Who you'll see** — Dr. Moinfar, Madeline Fee PA-C, Shylie Falahati PA-C. Photo placeholders.
   Continuity note trimmed from §12.6 ("Dermatology has a turnover problem. We don't.").
7. **Surveillance / what to watch for** — when to come back sooner rather than wait for the annual
   visit: a spot that is new, changing, non-healing, bleeding, or itching persistently; a rash that
   spreads or blisters; a nail change in one nail only. Rendered with `--clay` (`CalloutClay`).
8. **Honest access** — §12.9 honest-access paragraph (routine visits booked weeks out; concerning
   or changing spots seen sooner; Restore consultations scheduled separately).
9. **FAQ** — long-tail: "how long does it take to get a dermatology appointment in Dana Point",
   "do I need a referral to see a dermatologist", "what happens during a skin biopsy", "will I get a
   diagnosis at the first visit", "how often should I have a full-skin exam", "is teledermatology
   available". `FAQPage` schema. _("Do you treat children?" removed D23 — reverses D22 item (2)'s
   keep; no pediatric content remains anywhere on the site.)_
10. **Closing CTA** — what an appointment is, how to request one, the honest lead time, the
    urgent-spot exception. `Request an appointment`.
11. **Cross-sell** — one line to `/skin-cancer/` (annual skin exams and screening).

- **Honest limitation:** routine appointments are booked weeks out; and some conditions need a
  biopsy or a second visit to pin down — we would rather tell you we are still working it out than
  guess.
- **Claims fence:** no superlatives ("best dermatologist", "leading"); no outcome or cure language —
  describe how a diagnosis is reached, not a promised result; independence stated as the reason the
  weekly review happens, never as a boast; no review count (D13).
- **CTA:** primary `Request an appointment` → `/contact/`; secondary `Call 949.248.4547`.
- **Schema:** `MedicalProcedure` (diagnostic skin examination), `FAQPage`, `MedicalBusiness`.
- **Internal links:** `/skin-cancer/`, `/about/` (independence), Dr. Moinfar bio, Madeline Fee bio,
  Shylie Falahati bio.
- **Later (Phase 2 · D18):** promote the §4 condition blocks into a dedicated condition library /
  education hub once medical access has improved and a CMS is in place. Tracked in
  `build-plan.md` → "Post-launch backlog (Phase 2+)".

#### Drafted copy (D16 — 2026-08-28, pending client proof)

Final prose for the build. Condition-block anchors: `#acne`, `#inflammatory-skin`, `#rashes-hives`,
`#infections-growths`, `#hair-scalp-nails`, `#skin-exams`. Open placeholders:
exam-room photo; Restore consultation lead time; whether teledermatology is offered (FAQ item held
back until confirmed).

**Meta**

- Title: `General Dermatology & Skin Conditions · Dana Point`
- Description: `Acne, eczema, rosacea, psoriasis, rashes, hair and nail concerns, and annual skin exams in Dana Point. We look for the cause before we treat the symptom.`

**1 · Hero**

- Eyebrow: General dermatology _(Revised D23 — plain category label, was the
  "Serious medicine. Natural results." tagline; matches the Skin cancer eyebrow treatment from D19.)_
- H1: We look for the cause before we treat.
- Lede: Acne that never fully cleared. A rash that keeps coming back. Eczema, psoriasis, rosacea,
  hives, or a nail or patch of scalp that changed. This is where we slow down and ask why it keeps
  happening — not just what will make it stop for now. _(Revised D23 — dermatoscope / read-twice
  proof removed from the lede; it still runs in the first-visit steps and schema.)_
- CTAs: `Request an appointment` → `/contact/` · `Call 949.248.4547`
- Photo: exam room, natural light

**2 · The problem — "Chronic doesn't mean unexplained."**

A lot of the people we see have been somewhere else first. They were told a rash was stress, that
the acne would pass with age, or that thinning hair was just hormones — and months or years later,
nothing had changed.

Sometimes those answers are right. Often they're what you get when no one has had time to look
properly. A condition that keeps returning has a reason it keeps returning.

**3 · How we get the diagnosis right** _(§12.5 verbatim — revised D23)_

There's a fast way to practice dermatology: a quick look, a prescription, on to the next room. It
works often enough that most places never find out when it doesn't.

Our providers here have seen every condition on this page enough times, over enough years, to know
when something looks routine and isn't — and Dr. Moinfar trained both physician assistants herself,
at the exam table, before either saw a patient alone. That's where the judgment comes from, not from
a protocol.

It shows up in how a visit runs: a full history, skin exam even when you came in about one spot, and
a biopsy or lab work when the picture isn't clear — because a cream that quiets a symptom without
answering why it started usually means you're back here in six months with the same rash.

Finding the reason is slower. It's also the only version of "treated" that holds.

→ _How the practice is set up_ → `/about/`

**4 · Common conditions we treat**

- **Acne** (`#acne`) — Teenage and adult acne aren't the same condition and don't respond to the
  same things. Adult acne especially is often driven by something — hormones, a product, a
  medication, occasionally an underlying issue worth a blood test. We treat it as something to
  explain and control, not to wait out. It's managed rather than cured, and a plan that holds is
  the goal.
- **Eczema, psoriasis & rosacea** (`#inflammatory-skin`) — Grouped here because the approach is the
  same. Each has subtypes and triggers that look alike on the surface and behave differently once
  you know which one you're dealing with, so the first job is to identify that — sometimes with a
  biopsy or patch testing. All three are long-term conditions. They can't be cured, but for most
  people they can be brought to the point where they're not running the day.
- **Rashes & hives** (`#rashes-hives`) — Some rashes need nothing more than the right cream. Others
  are a sign of a reaction, an infection, or something systemic, and putting a steroid on them
  without knowing which only delays the answer. When a rash is widespread, keeps returning, or
  blisters, we work it up — that can mean patch testing for a contact allergy or a small biopsy.
  Chronic hives have a known evaluation path, and we follow it.
- **Skin infections, warts & molluscum** (`#infections-growths`) — Bacterial, fungal, and viral
  skin infections are common and usually straightforward to treat once they're correctly
  identified; the catch is that they're often mistaken for eczema, and eczema for them. Warts and
  molluscum are treated in the office, with the method chosen for the age of the patient and where
  the spots are.
- **Hair, scalp & nails** (`#hair-scalp-nails`) — A change in one nail is a different question from
  a change in every nail: the first can point to something local, the second to something internal,
  and we check accordingly. Scalp conditions like seborrheic dermatitis and psoriasis are treated
  here. Hair that's thinning or shedding needs a fuller evaluation — trichoscopy, bloodwork,
  sometimes a scalp biopsy — which is covered on the [hair restoration](/cosmetic/hair-restoration/)
  page.
- **Annual full-skin exams** (`#skin-exams`) — A yearly head-to-toe check with a dermatoscope, for
  anyone with a history of sun exposure, blistering sunburns, atypical moles, or skin cancer in the
  family. It's the same exam whether or not you have a specific worry. A spot you're already
  concerned about is handled through [skin cancer](/skin-cancer/), and we'll see you sooner.
- **Mid-page CTA** (D36) — lead-in: _"Not sure which of these fits? That's what the first visit is
  for."_ + single primary button `Request an appointment` → `/contact/`. No secondary `Call`.

**5 · What a first visit is like**

1. We take a history — how long this has been going on, what's been tried, what else is happening
   with your health.
2. A full-skin examination with a dermatoscope, not just a look at the area you came in about.
3. A biopsy only if the skin calls for one. If we take one, it's processed in our lab, read by the
   dermatopathologist Dr. Moinfar selected, and reviewed again by her that week.

You'll leave knowing what it is, or knowing exactly what we're doing to find out. Some conditions
take more than one visit to pin down — we'll tell you when that's where we are rather than guess.

**6 · Who you'll see**

Provider cards: Dr. Maryam Moinfar · Madeline Fee, PA-C · Shylie Falahati, PA-C.
Note: Two of our physician assistants started here as medical assistants, went to PA school, and
came back. Dermatology has a turnover problem. We don't.

**7 · When to come in sooner** _(CalloutClay, `--clay`)_

Intro: A yearly visit is enough for most stable conditions. A few things are worth a call before
then.
Tell us if you notice:

- A spot that is new, or one that's changing in size, shape, or color
- A sore that doesn't heal within a few weeks, or heals and returns
- Any spot that bleeds, or itches persistently without a clear cause
- A rash that spreads quickly, blisters, or comes with a fever
- A change in a single nail — its color or shape, or a new dark streak

Note: If one of these describes what's going on, say so when you request an appointment and we'll
move you up.

**8 · Getting an appointment** _(adapted §12.9)_

Request an appointment and our team will call you back. We're often booked several weeks out for
routine visits — if you have a concerning or changing spot, tell us when you call and we'll get you
in sooner. Hair and cosmetic consultations through Restore are scheduled separately from medical
visits.

**9 · FAQ** _(FAQPage schema)_

1. **How long does it take to get a dermatology appointment in Dana Point?** — For a routine visit,
   often a few weeks; we're a small practice and don't shorten visits to fit more in. If you have
   a spot that's new, changing, bleeding, or not healing, tell our team when you call and you'll be
   seen sooner than the routine schedule.
2. **Do I need a referral to see a dermatologist?** — For most PPO plans, no — you can book
   directly. Some HMO plans require a referral from your primary care physician, so check with your
   plan first. Our team can tell you what your plan needs when they call you back.
3. **What happens during a skin biopsy?** — The area is numbed with a small injection of local
   anesthetic and a sample of skin a few millimeters across is taken. It takes a few minutes, and
   depending on the site you may get a stitch or two. The sample is read by a dermatopathologist;
   results usually take about a week, and we contact you with the result and the plan.
4. **Will I get a diagnosis at the first visit?** — Often, yes. Some conditions are clear on
   examination. Others need a biopsy, blood work, or a period of watching how the skin responds
   before the diagnosis is certain. If we're not sure yet, we'll say so and tell you the next step.
5. **How often should I have a full-skin exam?** — Once a year for most adults with a history of
   significant sun exposure, atypical moles, or skin cancer in the family. After a skin cancer, the
   schedule is closer — often every three to six months at first. If you notice a change between
   visits, don't wait for the next appointment.
_(Removed D23: "Do you treat children?" — reverses D22 item (2), which had kept this FAQ after the
Pediatric block came out of §4. No pediatric content remains on the site.)_

_(Held: "Is teledermatology available?" — pending client confirmation of whether it is offered and
for whom.)_

**10 · Request an appointment** _(closing)_

An appointment is a full look at your skin, a history, and a plan — with a biopsy only if the skin
calls for one. Leave your name and number and our team will call you back. Routine visits are often
booked weeks out; a spot that's new, changing, bleeding, or not healing is triaged sooner, so tell
us when you call.
CTAs: `Request an appointment` → `/contact/` · `Call 949.248.4547`

**11 · Cross-sell**

Due for a yearly skin check, or worried about a specific spot? [Skin cancer screening and Mohs
surgery](/skin-cancer/) are handled by the same team, in the same building.

### PAGE: Cosmetic hub `/cosmetic/` (brass sub-brand)

- **Title:** `Cosmetic Dermatology in Dana Point · Restore` (44)
- **Meta:** `Injectables, lasers, and body contouring in Dana Point, kept deliberately conservative — Restore, a physician-directed program inside a twenty-year medical practice.`
- **H1:** `Nobody should be able to tell. That's the whole job.`
- **Audience:** the Existing Patient (§3.1) — already trusts the practice, believes aesthetic
  medicine happens somewhere else. Give permission; **zero med-spa language** (a single note loses
  her). **Pillar:** 4 Restraint.
- **Proofs:** P19 (the practice offers both CoolSculpting and EmSculpt Neo — no incentive to steer),
  P17 (standardized photography), P10/P11 (the same practice that reads your pathology), P2 (one
  practice since 2006 — tenure, not a superlative).

**Sections** (Restore variant — brass marker, sticky consult/call bar on mobile)

1. **Hero** — eyebrow _"Restore — under a physician's direction"_ + H1 + lede (injectables, lasers,
   microneedling, body contouring — offered by the practice that reads your pathology, kept
   intentionally conservative). CTA `Book a consultation` / `How it works ↓`. (No "Restore at
   Advanced Dermatology." sub-head — removed D26.)
2. **Our philosophy** _(id: `how-it-works`; was "We would rather take less.")_ — client-supplied
   copy, 2026-08-29, supersedes the §7.6 verbatim lines that ran here (D27). Three paragraphs: good
   cosmetic work can't be pointed to — people say you look well, not different — and every procedure
   is chosen and dosed toward that; it isn't one injection or one laser pass, it's a plan (what to
   treat, what to leave alone, how much, revisited over months) and the planning is the skill; a
   board-certified dermatologist builds that plan and will recommend against a treatment rather than
   book it, which is why a physician is in the room before anything is scheduled.
3. **The menu** — sub-page cards, each with the brass top-rule, one sentence in the patient's
   language, and a link. Grouped **For the face** / **For the body and hair** (D24):
   - **Neuromodulators** — _"Botox, Dysport, and the muscles that etch lines in."_ → `/cosmetic/neuromodulators/`
   - **Dermal fillers** — _"Hyaluronic acid, to replace volume that has been lost."_ → `/cosmetic/fillers/`
   - **Collagen-stimulating injectables** — _"Prompt your own collagen, gradually, over months."_ → `/cosmetic/collagen-stimulators/`
   - **Laser & IPL** — _"VBeam and IPL — for redness, vessels, and brown sun spots."_ → `/cosmetic/laser/`
   - **Silhouette InstaLift** — _"Dissolvable sutures for a little lift, no operating room."_ → `/cosmetic/thread-lift/`
   - **Chemical peels** — _"Surface renewal for tone and texture, usually a short series."_ → `/cosmetic/chemical-peels/`
   - **Microneedling** — _"Controlled micro-injury that builds collagen gradually."_ → `/cosmetic/microneedling/`
   - **EmSculpt Neo** — _"Muscle and fat, in one 30-minute treatment."_ → `/cosmetic/emsculpt-neo/`
   - **CoolSculpting** — _"Cryolipolysis for pinchable fat."_ → `/cosmetic/coolsculpting/`
   - **Hair restoration** — _"Hair loss is a symptom. We find out of what."_ → `/cosmetic/hair-restoration/`
4. **Who you'll see** — Dr. Moinfar leads Restore and assesses every patient. She injects filler
   and collagen stimulators and places threads herself; the physician assistants perform
   neuromodulators, microneedling, laser/IPL, and peels (client, 2026-08-29). Photo placeholders.
   Link to Dr. Moinfar's bio.
5. **The consultation** — §12.10 **verbatim** (twenty minutes; we look at the area, review your
   history and medications, and tell you plainly whether it will help and what it won't do).
6. **FAQ** — "is a consultation an obligation to book", "will results look natural", "who performs
   the treatments", "do you photograph results" (yes — P17), "do you offer payment plans"
   (TODO client). `FAQPage` schema.
7. **Closing CTA** — `Book a consultation`.
8. **Cross-sell** — one line to GLP-1 Restore (for patients on a GLP-1 specifically).

- **Honest limitation:** "If a treatment won't get you what you're after, we'll say so — and we
  won't book it." No outcome language anywhere on the hub.
- **Claims fence:** brass on this page and its sub-pages only (style guide §1); banned words
  (luxury, bespoke, pamper, indulge, transform, elevate — §8.3) absent; no superlatives; no
  before/after imagery that isn't the practice's own with consent (none yet); never
  "complimentary/free" (D11).
- **CTA:** primary `Book a consultation` → `/contact/`; secondary `How it works ↓` (anchor to §2).
- **Schema:** `FAQPage`, `MedicalBusiness`.
- **Internal links:** all ten Restore sub-pages (seven face + EmSculpt Neo, CoolSculpting, hair
  restoration), Dr. Moinfar bio, GLP-1 Restore. (Restore cross-link rule §11.4 satisfied.)

#### Drafted copy (D16 — 2026-08-28, pending client proof)

Final prose for the build. Section anchor for the secondary CTA: `#how-it-works` (the philosophy
section). Delivery model is client-confirmed (2026-08-29): Dr. Moinfar assesses every patient and does
filler, collagen stimulators, and threads herself; the physician assistants do neuromodulators,
microneedling, laser/IPL, and peels. Open placeholder, not blocking: whether payment plans are
offered (FAQ item held back).

**Meta**

- Title: `Cosmetic Dermatology in Dana Point · Restore`
- Description: `Injectables, lasers, and body contouring in Dana Point, kept deliberately conservative — Restore, a physician-directed program inside a twenty-year medical practice.`

**1 · Hero**

- Eyebrow: Restore — under a physician's direction
- H1: Nobody should be able to tell. That's the whole job.
- Lede: Injectables, lasers, microneedling, and body contouring — offered by the same practice that
  reads your pathology, and kept intentionally conservative. Everything here is meant to look like
  you ten years ago, not like work.
- CTAs: `Book a consultation` → `/contact/` · `How it works ↓` (anchor to §2)

**2 · Our philosophy** _(id: `how-it-works`)_

Good cosmetic work can't be pointed to. Nobody says you look different. They say you look well.
Every procedure here is chosen and dosed toward that.

It isn't one injection or one laser pass. It's a plan — what to treat, what to leave alone, how
much, revisited over months. That planning is the skill. The needle just carries it out.

A board-certified dermatologist builds that plan. When a treatment won't get you what you're after,
she'll say so — and recommend against it, not book it. That's why a physician is in the room before
anything is scheduled.

**3 · What Restore covers** _(cards with the brass top-rule, grouped under two subheads)_

_For the face_

- **Neuromodulators** — Botox, Dysport, and the muscles that etch lines in. → `/cosmetic/neuromodulators/`
- **Dermal fillers** — Hyaluronic acid, to replace volume that has been lost. → `/cosmetic/fillers/`
- **Collagen-stimulating injectables** — Prompt your own collagen, gradually, over months. → `/cosmetic/collagen-stimulators/`
- **Laser & IPL** — VBeam and IPL — for redness, vessels, and brown sun spots. → `/cosmetic/laser/`
- **Silhouette InstaLift** — Dissolvable sutures for a little lift, no operating room. → `/cosmetic/thread-lift/`
- **Chemical peels** — Surface renewal for tone and texture, usually a short series. → `/cosmetic/chemical-peels/`
- **Microneedling** — Controlled micro-injury that builds collagen gradually. → `/cosmetic/microneedling/`

_For the body and hair_

- **EmSculpt Neo** — Muscle and fat, in one 30-minute treatment. → `/cosmetic/emsculpt-neo/`
- **CoolSculpting** — Cryolipolysis for pinchable fat. → `/cosmetic/coolsculpting/`
- **Hair restoration** — Hair loss is a symptom. We find out of what. → `/cosmetic/hair-restoration/`

**4 · Who you'll see**

Dr. Maryam Moinfar leads Restore and assesses every patient herself. She injects filler and
collagen stimulators and places threads; our physician assistants perform neuromodulators,
microneedling, laser and IPL, and peels. Provider card → `/about/dr-maryam-moinfar/`.

**5 · The consultation** _(§12.10 verbatim)_

A consultation takes twenty minutes. We'll look at the area you're concerned about, review your
health history and medications, and tell you plainly whether this will help — and what it won't do.

**6 · FAQ** _(FAQPage schema)_

1. **Is a consultation an obligation to book?** — No. It's twenty minutes to find out whether a
   treatment fits what you want to change. If it doesn't, we'll say so, and there's nothing to
   schedule.
2. **Will results look natural?** — That's the whole intent. Everything here is dosed conservatively
   and matched to your own face and body. Most patients hear that they look rested, not that they
   look different.
3. **Who performs the treatments?** — Dr. Moinfar assesses every patient. She injects filler and
   collagen stimulators and places threads herself; our physician assistants perform
   neuromodulators, microneedling, laser and IPL, and peels.
4. **Do you photograph results?** — Yes. We take standardized photographs at baseline and follow-up,
   on a fixed protocol, so you and the physician are looking at evidence rather than impressions.

_(Held: "Do you offer payment plans?" — pending client confirmation.)_

**7 · Request a consultation** _(closing)_

A consultation is twenty minutes and a straight answer. Leave your name and number and our team
will call you back.
CTAs: `Book a consultation` → `/contact/` · `Call 949.248.4547`

**8 · Cross-sell**

On a GLP-1 medication and dealing with hair shedding, facial volume loss, or lost strength? That
has its own program — [GLP-1 Restore](/glp-1-restore/).

### PAGE: Neuromodulators `/cosmetic/neuromodulators/` (brass)

- **Title:** `Neuromodulators (Botox, Dysport) · Dana Point` (45)
- **Meta:** `Botox, Dysport, and equivalent wrinkle relaxers in Dana Point — dosed conservatively by a dermatologist, so the muscle still moves and the face still reads as yours.`
- **H1:** `Soften the movement that etches lines in.`
- **Audience:** the Existing Patient (§3.1). **Pillar:** 4 Restraint. Most restrained register on
  the site (§8.5) — understatement is the sale; never a percentage or a promise.
- **Proofs:** P17 (standardized photography — baseline and follow-up), P10/P11 (a medical practice
  underneath), P2 (~20 years of natural-result work), P1 context (no product quota — §7.4).

**Sections** (Restore variant — shared `RestoreTreatmentPage` shell, D24)

1. **Hero** — eyebrow _"Restore — under a physician's direction"_ + H1 + lede. CTA `Book a
   consultation` / `How it works ↓`. Breadcrumb: `‹ Neuromodulators` — a back link to `/cosmetic/` (D25, D29).
2. **What's offered** (id: `how-it-works`) — what a neuromodulator does (relaxes the muscle that
   folds the skin; not volume, not sun-damage lines); common areas (forehead, glabella, crow's
   feet); maintained not banked (onset days, settles ~2 weeks, wears off ~3–4 months); dosed to
   keep the face moving (start light, review at two weeks). Candidacy language only.
3. **How a treatment visit works** — shared five-step (assessment → baseline photo → treatment →
   recovery → photographed follow-up).
4. **Candidacy** — good fit: lines that appear/deepen with expression, want softened not erased,
   willing to repeat a few times a year. Not right: static lines from volume loss or sun damage
   (need filler/resurfacing); pregnant or breastfeeding (defer); some neuromuscular
   conditions/medications reviewed at consult.
5. **Why here rather than a storefront** — client copy (2026-08-29 / D28), one paragraph, shared
   across the seven face pages: _"Dr. Moinfar assesses you. She won't book a treatment that's wrong
   for you, or more of it than you need — no one upstream sets a quota telling her otherwise.
   That's why you can trust it."_ (§7.2 claim-then-structure; paraphrases §7.6 sentences 4–5.)
6. **Who you'll see** — three provider cards: Dr. Moinfar (assesses and sets the plan) plus
   **Madeline Fee PA-C and Shylie Falahati PA-C**, one of whom performs the injections (client,
   2026-08-29 — PAs do neuromodulators, microneedling, laser/IPL, peels; both PA cards shown D26).
7. **Evidence** — standardized baseline/follow-up photography (P17); own images only; no stock, no
   borrowed before/afters.
8. **The consultation & pricing** — §12.10 verbatim, then §12.8 first sentence only ("price is the
   price" line dropped on procedure pages — D30); itemized pricing in writing at the consultation;
   no published price list.
9. **FAQ** — "does Botox hurt", "how long does it last", "how much is Botox in Dana Point" (per
   area/unit, in writing, no promotions), "will my face look frozen", "how soon does it work",
   "can I have it while pregnant or breastfeeding" (no — wait). `FAQPage` schema.
10. **Closing CTA** — `Book a consultation`.
11. **Cross-sell** — fillers (volume), collagen-stimulating injectables (own collagen), Dr. Moinfar bio.

- **Honest limitation:** neuromodulators are maintenance — the result fades over a few months and
  is kept up rather than added to.
- **Claims fence:** candidacy/methodology only — never an outcome or a percentage; "botulinum toxin
  type A" framing, no brand superlatives; brass on Restore pages only; never "complimentary/free".
- **CTA:** primary `Book a consultation` → `/contact/`; secondary `How it works ↓`.
- **Schema:** `MedicalProcedure` (neuromodulator treatment), `FAQPage`, `MedicalBusiness`.
- **Internal links:** fillers, collagen-stimulators, Dr. Moinfar bio, GLP-1 Restore (via FAQ context on fillers page, not required here). Cosmetic hub is reached via the global nav/footer and the `‹` back link in the breadcrumb slot (D25, D29).

#### Drafted copy (D16 / D24 — 2026-08-29, pending client proof)

Built and live from `src/pages/cosmetic/neuromodulators/index.astro` via the shared
`RestoreTreatmentPage` layout. Delivery model is client-confirmed (2026-08-29): Dr. Moinfar
assesses, a physician assistant injects. Copy is in the page file; the section list above is the
spec of record.

---

### PAGE: Dermal fillers `/cosmetic/fillers/` (brass)

- **Title:** `Dermal Fillers in Dana Point · Hyaluronic Acid` (46)
- **Meta:** `Hyaluronic-acid dermal fillers in Dana Point — used to replace volume that has been lost, matched to your own proportions, and dissolvable if the result is not right.`
- **H1:** `Replace the volume, not the face.`
- **Audience:** the Existing Patient (§3.1). **Pillar:** 4 Restraint.
- **Proofs:** P17, P10/P11, P2, P1 context (no product quota — §7.4).

**Sections** (Restore variant — shared `RestoreTreatmentPage` shell, D24)

1. **Hero** — eyebrow + H1 + lede (hyaluronic acid; replaces lost volume, small amounts, matched to
   your proportions; dissolvable). Breadcrumb: `‹ Dermal fillers` — a back link to `/cosmetic/` (D25, D29).
2. **What's offered** (id: `how-it-works`) — hyaluronic acid specifically (a substance the skin
   already makes; reversible with an enzyme); where it's used (cheeks, tear trough, lips, chin/jaw,
   nasolabial folds); how long it lasts (several months to a couple of years by product/area);
   conservative by default.
3. **How a treatment visit works** — shared five-step.
4. **Candidacy** — good fit: volume loss showing as hollowing/shadowing, want subtle correction,
   understand it's maintained. Not right: want a dramatic structural change; active skin infection
   at the site; pregnant or breastfeeding (defer); severe allergy history reviewed at consult.
5. **Why here rather than a storefront** — shared client block (D28).
6. **Who you'll see** — **Dr. Moinfar injects the filler herself** (client, 2026-08-29 — she does
   all filler, collagen stimulators, and threads; PAs do not).
7. **Evidence** — P17, own images only.
8. **The consultation & pricing** — §12.10 verbatim; §12.8 first sentence only (the "price is the
   price, and it doesn't go down if you wait" line is dropped on procedure pages — D30); itemized
   pricing in writing.
9. **FAQ** — "how long does filler last", "does it hurt" (lidocaine in product + topical numbing),
   "can it be undone" (yes — hyaluronidase), "will my face look puffy/overfilled", "how much is
   filler in Dana Point" (per syringe/area, in writing, no packages), "can I have filler on a
   GLP-1" (yes — cross-link GLP-1 Restore, **no causal claim**). `FAQPage` schema.
10. **Closing CTA** — `Book a consultation`.
11. **Cross-sell** — neuromodulators (movement lines), collagen-stimulating injectables (own
    collagen), GLP-1 Restore (facial volume loss on a GLP-1), Dr. Moinfar bio.

- **Honest limitation:** filler is temporary and maintained; it replaces volume and does nothing
  for expression lines.
- **Claims fence:** HA-specific; reversibility with hyaluronidase is a factual candidacy point, not
  an outcome claim; duration ranges kept non-specific, no guarantee; GLP-1 adjacency only, never a
  causal connector (§9.3); never "complimentary/free".
- **CTA:** primary `Book a consultation`; secondary `How it works ↓`.
- **Schema:** `MedicalProcedure` (dermal filler treatment, hyaluronic acid), `FAQPage`, `MedicalBusiness`.
- **Internal links:** Cosmetic hub, neuromodulators, collagen-stimulators, GLP-1 Restore, Dr. Moinfar bio.

#### Drafted copy (D16 / D24 — 2026-08-29, pending client proof)

Built from `src/pages/cosmetic/fillers/index.astro` via `RestoreTreatmentPage`. Delivery model is
client-confirmed (2026-08-29): Dr. Moinfar injects filler herself. Section list above is the spec
of record.

---

### PAGE: Collagen-stimulating injectables `/cosmetic/collagen-stimulators/` (brass)

- **Title:** `Collagen-Stimulating Injectables · Dana Point` (44)
- **Meta:** `Poly-L-lactic acid and calcium hydroxylapatite injectables in Dana Point — they prompt your own collagen over months, across a short series, rather than adding volume on the day.`
- **H1:** `Rebuild what time thinned, gradually.`
- **Audience:** the Existing Patient (§3.1). **Pillar:** 4 Restraint.
- **Proofs:** P17, P10/P11, P2, P1 context (§7.4).

**Sections** (Restore variant — shared `RestoreTreatmentPage` shell, D24)

1. **Hero** — eyebrow + H1 + lede (poly-L-lactic acid and calcium hydroxylapatite; prompt your own
   collagen over months; short series; gradual by nature). Breadcrumb: `‹ Collagen-stimulating
   injectables` — a back link to `/cosmetic/` (D25, D29).
2. **What's offered** (id: `how-it-works`) — what these are (products such as PLLA and CaHA; a
   scaffold, not day-one volume); how it differs from HA filler (gradual, works with your own
   tissue, not dissolvable the same way); a short series then patience (2–3 sessions weeks apart,
   builds over ~3–6 months); where it fits (diffuse thinning over larger areas, not a single fold).
3. **How a treatment visit works** — shared five-step.
4. **Candidacy** — good fit: diffuse thinning/lost firmness over a broader area, patient with a
   result over months, willing to do a series. Not right: want an immediate change or single-line
   spot correction (HA filler better); pregnant/breastfeeding; active infection at the site;
   certain autoimmune conditions reviewed at consult.
5. **Why here rather than a storefront** — shared client block (D28).
6. **Who you'll see** — **Dr. Moinfar performs the injections herself** (client, 2026-08-29 — she
   does all filler, collagen stimulators, and threads; PAs do not).
7. **Evidence** — P17, own images only.
8. **The consultation & pricing** — §12.10 verbatim; §12.8 first sentence only (the "price is the
   price, and it doesn't go down if you wait" line is dropped on procedure pages — D30); itemized
   pricing in writing.
9. **FAQ** — "how is this different from filler", "how long until I see a result" (weeks to
   months), "how many sessions", "how long does it last" (~2 years then maintained), "is it
   reversible" (not the way HA is), "does it hurt". `FAQPage` schema.
10. **Closing CTA** — `Book a consultation`.
11. **Cross-sell** — fillers (immediate/spot volume, lips), neuromodulators (expression lines), Dr. Moinfar bio.

- **Honest limitation:** gradual and staged, and not reversible the way HA filler is.
- **Claims fence:** candidacy/methodology only; "products such as" for brand names; no percentage or
  outcome claims; not permanent; never "complimentary/free".
- **CTA:** primary `Book a consultation`; secondary `How it works ↓`.
- **Schema:** `MedicalProcedure` (collagen-stimulating injectable treatment), `FAQPage`, `MedicalBusiness`.
- **Internal links:** Cosmetic hub, fillers, neuromodulators, Dr. Moinfar bio.

#### Drafted copy (D16 / D24 — 2026-08-29, pending client proof)

Built from `src/pages/cosmetic/collagen-stimulators/index.astro` via `RestoreTreatmentPage`.
Delivery model is client-confirmed (2026-08-29): Dr. Moinfar performs the injections herself.
Section list above is the spec of record.

---

### PAGE: Laser & IPL `/cosmetic/laser/` (brass)

- **Title:** `Laser & IPL in Dana Point · VBeam and Photofacial` (49)
- **Meta:** `VBeam pulsed-dye laser and IPL in Dana Point — for facial redness, visible vessels, rosacea, and brown sun spots, matched to your skin type and staged over a short series.`
- **H1:** `Matched to your skin, not a setting on a menu.`
- **Audience:** the Existing Patient (§3.1). **Pillar:** 4 Restraint.
- **Proofs:** P17, P10/P11, P2, P1 context (§7.4).
- **Devices (client, 2026-08-29):** **VBeam** (pulsed-dye laser — vascular: redness, capillaries,
  rosacea) and **IPL** (broad-spectrum light — brown pigment, uneven tone). **No resurfacing /
  ablative / fractional laser on site** — the earlier "resurfacing" framing was wrong and is removed.

**Sections** (Restore variant — shared `RestoreTreatmentPage` shell, D24)

1. **Hero** — eyebrow + H1 + lede (VBeam targets *red*, IPL targets *brown*; both aim energy at
   colour in the skin, so skin-type safety and tool choice are clinical decisions). Breadcrumb:
   `‹ Laser & IPL` — a back link to `/cosmetic/` (D25, D29).
2. **What's offered** (id: `how-it-works`) — VBeam for red (vessels, facial redness, rosacea; a day
   or two of pink, brief bruising at higher settings); IPL for brown (sun spots, blotchy tone on
   face/chest/hands; ~3–5 sessions; spots darken then flake over ~a week); skin type comes first
   (both target colour, so higher burn / pigment-change risk on tanned or darker skin — we may not
   have the right device and will say so); what these do **not** do (not resurfacing — deep lines,
   texture, scarring are peels/microneedling territory).
3. **How a treatment visit works** — shared five-step.
4. **Candidacy** — good fit: facial redness, visible vessels, rosacea flushing, brown sun spots, or
   blotchy tone; lighter, untanned skin; can plan around a few days of redness/spot-darkening and
   sun avoidance. Not right: tanned/recent sun exposure (wait); deeper skin tone where risk is
   higher and the right device may not be available; melasma (IPL can worsen it); active
   infection/cold sore; expecting one-and-done; pregnant (defer elective light treatment).
5. **Why here rather than a storefront** — shared client block (D28).
6. **Who you'll see** — three provider cards: Dr. Moinfar (assesses and sets the plan) plus
   **Madeline Fee PA-C and Shylie Falahati PA-C**, one of whom performs the VBeam / IPL treatment
   (client, 2026-08-29; both PA cards shown D26).
7. **Evidence** — P17, own images only.
8. **The consultation & pricing** — §12.10 verbatim; §12.8 first sentence only (the "price is the
   price, and it doesn't go down if you wait" line is dropped on procedure pages — D30); itemized
   pricing in writing.
9. **FAQ** — "how long is the recovery", "does it hurt", "is VBeam or IPL safe for darker skin"
   (both target colour — higher risk on tanned/darker skin; assessed first), "how many sessions",
   "can IPL treat melasma" (usually avoided — IPL can worsen it), "when can I be in the sun
   afterward". `FAQPage` schema.
10. **Closing CTA** — `Book a consultation`.
11. **Cross-sell** — chemical peels + microneedling (surface texture/tone, not redness or brown
    spots), Dr. Moinfar bio.

- **Honest limitation:** VBeam and IPL are a planned series with a few days of visible
  redness/spot-darkening and strict sun avoidance — not a one-time treatment; and neither is a
  resurfacing device.
- **Claims fence:** candidacy/methodology only; **no percentages**; VBeam and IPL named (client
  confirmed); skin-type / burn risk stated honestly; melasma framed as *worsenable* by IPL; IPL
  called out as light, not a laser; never "complimentary/free".
- **CTA:** primary `Book a consultation`; secondary `How it works ↓`.
- **Schema:** `MedicalProcedure` (laser and intense pulsed light (IPL) treatment), `FAQPage`, `MedicalBusiness`.
- **Internal links:** Cosmetic hub, chemical peels, microneedling, Dr. Moinfar bio.

#### Drafted copy (D16 / D24 — 2026-08-29, pending client proof)

Built from `src/pages/cosmetic/laser/index.astro` via `RestoreTreatmentPage`. Devices (VBeam, IPL)
and the physician-assistant delivery model are client-confirmed (2026-08-29). Section list above is
the spec of record.

---

### PAGE: Silhouette InstaLift thread lift `/cosmetic/thread-lift/` (brass)

- **Title:** `Silhouette InstaLift Thread Lift · Dana Point` (44)
- **Meta:** `Silhouette InstaLift in Dana Point — dissolvable sutures that lift mild mid-face and jawline laxity and prompt collagen, for patients who want some lift without an operating room.`
- **H1:** `A little lift, no operating room.`
- **Audience:** the Existing Patient (§3.1). **Pillar:** 4 Restraint. Echoes the approved
  provider-bio framing (D21): "a non-surgical alternative to facelift surgery for patients who want
  lift without an operating room."
- **Proofs:** P17, P10/P11, P2, P1 context (§7.4).

**Sections** (Restore variant — shared `RestoreTreatmentPage` shell, D24)

1. **Hero** — eyebrow + H1 + lede (dissolvable sutures lift mild sagging in the mid-face/jawline
   and prompt collagen as they dissolve; smaller intervention than a facelift, smaller job — that
   trade is the point). Breadcrumb: `‹ Silhouette InstaLift` — a back link to `/cosmetic/` (D25, D29).
2. **What's offered** (id: `how-it-works`) — what it is (absorbable poly-L-lactic acid sutures with
   cones; in-office, local anesthesia); two effects on two timelines (modest lift on the day; then
   collagen along the suture path as it dissolves over months; sutures gone within ~6 months); how
   long it lasts (~1–2 years, repeatable); it is not a facelift (early jowl/mid-face heaviness, not
   significant sagging — and if a facelift is the right answer we say so and it sends you elsewhere).
3. **How a treatment visit works** — shared five-step.
4. **Candidacy** — good fit: early jowl or mid-face laxity, want a subtle lift, accept temporary
   and partial, can take ~a week of social downtime. Not right: significant sagging or heavy tissue
   (a facelift is the honest answer); very thin tissue; active infection; pregnant/breastfeeding.
5. **Why here rather than a storefront** — shared client block (D28); especially apt here — "won't
   book a treatment that's wrong for you" covers turning someone toward surgery elsewhere.
6. **Who you'll see** — Dr. Moinfar assesses candidacy and performs the placement.
7. **Evidence** — P17, own images only.
8. **The consultation & pricing** — §12.10 verbatim; §12.8 first sentence only (the "price is the
   price, and it doesn't go down if you wait" line is dropped on procedure pages — D30); itemized
   pricing in writing.
9. **FAQ** — "how long does a Silhouette InstaLift last", "does it hurt", "what's the downtime",
   "is it the same as a facelift" (no), "can the threads be felt or seen", "who places the
   threads" (a dermatologist). `FAQPage` schema.
10. **Closing CTA** — `Book a consultation`.
11. **Cross-sell** — fillers / collagen-stimulating injectables (volume loss underneath), laser
    (skin surface), Dr. Moinfar bio.

- **Honest limitation:** a thread lift is temporary and partial; it does not replace a facelift.
- **Claims fence:** candidacy/methodology only; no timing claims about recovery beyond general
  ranges; "alternative to facelift" framing matches the approved bio wording (D21); no outcome or
  percentage claims; never "complimentary/free".
- **CTA:** primary `Book a consultation`; secondary `How it works ↓`.
- **Schema:** `MedicalProcedure` (Silhouette InstaLift thread lift), `FAQPage`, `MedicalBusiness`.
- **Internal links:** Cosmetic hub, fillers, collagen-stimulators, laser, Dr. Moinfar bio.

#### Drafted copy (D16 / D24 — 2026-08-29, pending client proof)

Built from `src/pages/cosmetic/thread-lift/index.astro` via `RestoreTreatmentPage`. Section list
above is the spec of record.

---

### PAGE: Chemical peels `/cosmetic/chemical-peels/` (brass)

- **Title:** `Chemical Peels in Dana Point · Tone & Texture` (43)
- **Meta:** `Superficial and medium-depth chemical peels in Dana Point — for tone, texture, and sun damage, usually as a short series, with downtime set by the depth of the peel.`
- **H1:** `Tone and texture, one layer at a time.`
- **Audience:** the Existing Patient (§3.1). **Pillar:** 4 Restraint.
- **Proofs:** P17, P10/P11, P2, P1 context (§7.4).

**Sections** (Restore variant — shared `RestoreTreatmentPage` shell, D24)

1. **Hero** — eyebrow + H1 + lede (removes outer layers in a controlled way so newer skin
   surfaces; lighter peels even out tone with little downtime, deeper ones ask for a week of
   peeling; usually a short series). Breadcrumb: `‹ Chemical peels` — a back link to `/cosmetic/` (D25, D29).
2. **What's offered** (id: `how-it-works`) — superficial peels (glycolic, salicylic, lactic; tone,
   mild texture, congestion; little downtime; a series); medium-depth peels (TCA, Jessner's; sun
   damage, deeper texture, some scarring; ~a week of peeling); depth sets everything; skin type and
   aftercare (deeper peels carry pigment-change risk, higher in darker skin; sun protection after
   is part of the treatment).
3. **How a treatment visit works** — shared five-step.
4. **Candidacy** — good fit: dull/uneven tone, sun spots, rough texture, mild acne scarring;
   willing to do a series and avoid sun. Not right: active cold sore/infection; recent isotretinoin
   (wait several months); very sensitised skin; expecting one visit to do everything.
5. **Why here rather than a storefront** — shared client block (D28).
6. **Who you'll see** — three provider cards: Dr. Moinfar (assesses and sets the plan) plus
   **Madeline Fee PA-C and Shylie Falahati PA-C**, one of whom performs the peel (client,
   2026-08-29; both PA cards shown D26).
7. **Evidence** — P17, own images only.
8. **The consultation & pricing** — §12.10 verbatim; §12.8 first sentence only (the "price is the
   price, and it doesn't go down if you wait" line is dropped on procedure pages — D30); itemized
   pricing in writing.
9. **FAQ** — "how many peels will I need", "does it hurt", "how much downtime is there", "are peels
   safe for darker skin" (superficial generally yes; deeper needs caution), "can I wear makeup
   afterward", "can I have a peel while pregnant" (some agents yes, some no). `FAQPage` schema.
10. **Closing CTA** — `Book a consultation`.
11. **Cross-sell** — laser (pigment/vessels a peel won't reach), microneedling (collagen through
    micro-injury), Dr. Moinfar bio.

- **Honest limitation:** peels are not one-and-done — superficial peels work as a series, and even
  a medium-depth peel is maintained with sun protection and topical care.
- **Claims fence:** candidacy/methodology only; no percentages; pigment-change risk stated
  honestly; pregnancy handled by agent selection, not a blanket yes; never "complimentary/free".
- **CTA:** primary `Book a consultation`; secondary `How it works ↓`.
- **Schema:** `MedicalProcedure` (chemical peel treatment), `FAQPage`, `MedicalBusiness`.
- **Internal links:** Cosmetic hub, laser, microneedling, Dr. Moinfar bio.

#### Drafted copy (D16 / D24 — 2026-08-29, pending client proof)

Built from `src/pages/cosmetic/chemical-peels/index.astro` via `RestoreTreatmentPage`. Delivery
model is client-confirmed (2026-08-29): Dr. Moinfar assesses, a physician assistant performs the
peel. Section list above is the spec of record.

---

### PAGE: Microneedling `/cosmetic/microneedling/` (brass)

- **Title:** `Microneedling in Dana Point · Collagen Induction` (46)
- **Meta:** `Microneedling in Dana Point, with or without growth factors — controlled micro-injury that stimulates collagen over months. Gradual by design, usually a short series.`
- **H1:** `Collagen you build gradually.`
- **Audience:** the Existing Patient (§3.1). **Pillar:** 4 Restraint.
- **Proofs:** P17, P10/P11, P2, P1 context (§7.4).

**Sections** (Restore variant — shared `RestoreTreatmentPage` shell, D24)

1. **Hero** — eyebrow + H1 + lede (hundreds of tiny controlled punctures; the healing response
   lays down new collagen over months; texture, fine lines, pores, some scarring; works by
   compounding). Breadcrumb: `‹ Microneedling` — a back link to `/cosmetic/` (D25, D29).
2. **What's offered** (id: `how-it-works`) — how it works (fine needles at a set depth; collagen
   over the following months); with or without growth factors (or platelet-rich plasma from your
   own blood, applied after; whether it adds enough is discussed, not assumed); a short series (3–6
   sessions ~4 weeks apart; builds over months); recovery (redness like a mild sunburn for a day or
   two). RF microneedling is **out of scope** for this page.
3. **How a treatment visit works** — shared five-step.
4. **Candidacy** — good fit: early texture change, enlarged pores, fine lines, rolling acne scars;
   patient with a result over months across a series. Not right: active acne or skin infection in
   the area; keloid-prone or on blood thinners (reviewed at consult); pregnant/breastfeeding for
   the PRP add-on; want a single-session change.
5. **Why here rather than a storefront** — shared client block (D28).
6. **Who you'll see** — three provider cards: Dr. Moinfar (assesses and sets the plan) plus
   **Madeline Fee PA-C and Shylie Falahati PA-C**, one of whom performs the microneedling (client,
   2026-08-29; both PA cards shown D26).
7. **Evidence** — P17, own images only.
8. **The consultation & pricing** — §12.10 verbatim; §12.8 first sentence only (the "price is the
   price, and it doesn't go down if you wait" line is dropped on procedure pages — D30); itemized
   pricing in writing.
9. **FAQ** — "does microneedling hurt", "how much downtime is there", "how many sessions", "when
   will I see results", "what are growth factors and PRP", "is an at-home derma-roller the same
   thing" (no — depth and sterility differ; not recommended). `FAQPage` schema.
10. **Closing CTA** — `Book a consultation`.
11. **Cross-sell** — laser & IPL (redness, vessels, brown sun spots), chemical peels (surface
    tone), Dr. Moinfar bio.

- **Honest limitation:** gradual and series-based; the result builds over months and is maintained.
- **Claims fence:** candidacy/methodology only; no percentages; PRP described as autologous, no
  outcome claim; at-home rolling flagged for infection risk; never "complimentary/free".
- **CTA:** primary `Book a consultation`; secondary `How it works ↓`.
- **Schema:** `MedicalProcedure` (microneedling treatment), `FAQPage`, `MedicalBusiness`.
- **Internal links:** Cosmetic hub, laser, chemical peels, Dr. Moinfar bio.

#### Drafted copy (D16 / D24 — 2026-08-29, pending client proof)

Built from `src/pages/cosmetic/microneedling/index.astro` via `RestoreTreatmentPage`. Delivery
model is client-confirmed (2026-08-29): Dr. Moinfar assesses, a physician assistant performs the
microneedling. Section list above is the spec of record.

### PAGE: EmSculpt Neo `/cosmetic/emsculpt-neo/` (brass)

- **Title:** `EmSculpt Neo in Dana Point · Muscle & Fat` (40)
- **Meta:** `EmSculpt Neo in Dana Point — an FDA-cleared, non-invasive treatment that builds muscle and reduces fat in cleared areas in one 30-minute session. Individual results vary.`
- **H1:** `Muscle and fat, in one 30-minute treatment.`
- **Audience:** the Existing Patient (§3.1) and the GLP-1 Patient (§3.2) arriving from
  `/glp-1-restore/`. **Pillars:** 4 Restraint + 2 Depth.
- **Proofs:** P18 (muscle building + fat reduction in one 30-minute EmSculpt Neo treatment),
  P19 (both devices offered — no incentive to steer), P17 (standardized photography), P10/P11
  (physician assessment first).

**Sections** (Restore variant — §11.2 architecture)

1. **Hero** — eyebrow _"Restore — under a physician's direction"_ + H1 + lede: FDA-**cleared**,
   non-invasive; the device-labeling stat kept whole — _"In clinical studies, treated areas showed
   an average 25% increase in muscle mass and an average 30% reduction in fat. Individual results
   vary."_ CTA `Book a consultation` / `How it works ↓`.
2. **How it works** — plain mechanism: high-intensity focused electromagnetic energy drives muscle
   contractions beyond voluntary effort, alongside radiofrequency heating that targets fat in the
   treated area. ~30 minutes, fully clothed, no incisions, no anesthesia, no downtime. A series
   over several weeks; periodic maintenance after.
3. **Treatment areas — the area-specific table (§9.2), rendered as a real table, never five
   identical bullets:**

   | Area     | Muscle | Fat reduction |
   | -------- | ------ | ------------- |
   | Abdomen  | Yes    | Yes           |
   | Thighs   | Yes    | Yes           |
   | Buttocks | Yes    | —             |
   | Arms     | Yes    | —             |
   | Calves   | Yes    | —             |

   Caption: _Fat-reduction claims apply to the abdomen and thighs. For buttocks, arms, and calves,
   EmSculpt Neo is used to build and strengthen muscle._ ⚠️ Confirm against current device labeling
   at build — clearances change over time (§9.2).
4. **What a session feels like** — strong but tolerable contractions and a warming sensation, like
   a hard workout; intensity is increased gradually; you can talk through it.
5. **Candidacy** — good fit if you're near your goal and want tone or strength a gym plateau hasn't
   given you / not right for you if you're after large-volume weight loss, are pregnant, or have an
   implanted electronic device or metal in the treatment area (⚠️ screening at consultation, §9.5).
6. **Why here rather than a storefront** — shared client block (D28): _"Dr. Moinfar assesses you.
   She won't book a treatment that's wrong for you, or more of it than you need — no one upstream
   sets a quota telling her otherwise. That's why you can trust it."_ Plus a second sentence keeping
   the both-devices fact (P19), reframed to capability (D34): _"The practice runs both EmSculpt Neo
   and CoolSculpting, so Dr. Moinfar can match the device to what your body actually needs —
   reducing a pinchable bulge, building muscle, or both."_ (Fixed-protocol photography moved to §8 Evidence.)
7. **Who you'll see** — three provider cards: Dr. Moinfar (assesses and sets the plan) plus
   **Madeline Fee PA-C and Shylie Falahati PA-C**, one of whom performs the treatment (client,
   2026-08-29 / D26). Photo placeholders.
8. **Evidence** — honest interim statement: own-practice consented series in progress (§6.4); the
   practice publishes only its own images; device-labeling figures are labeled as such.
9. **The consultation & pricing** — §12.10 verbatim; price per area and per series in writing
   before scheduling; §12.8 first sentence only ("price is the price" line dropped — D30).
10. **FAQ** — long-tail: "how many EmSculpt Neo sessions do I need", "does EmSculpt Neo hurt",
    "is EmSculpt Neo permanent", "EmSculpt Neo vs CoolSculpting" (cross-link), "can I do EmSculpt
    Neo while on a GLP-1" — answer stays factual and **non-causal (§9.3):** yes, many patients do;
    it builds muscle and reduces fat in cleared areas; it is not a treatment for medication side
    effects and we won't describe it as one. `FAQPage` schema.
11. **Closing CTA** — `Book a consultation`.
12. **Cross-sell** — one line to CoolSculpting; one line to GLP-1 Restore with **no causal
    connector** — e.g. _"On a GLP-1? The muscle track of our Restore program is here."_ and nothing more.

- **Honest limitation:** not weight loss; not a substitute for exercise or protein; a series is
  required and results develop over weeks; many patients maintain with periodic sessions.
- **Claims fence (§9.2 / §9.3):** "FDA-cleared" not "-approved"; the treatment-area table never
  collapsed; fat-reduction claims abdomen/thighs only; the stat always adjacent to "individual
  results vary" and attributed to device labeling; **no sentence linking GLP-1 muscle loss causally
  to the device**; no sarcopenia / frailty / osteoporosis / falls; brass on Restore pages only.
- **CTA:** primary `Book a consultation` → `/contact/`; secondary `How it works ↓`.
- **Schema:** `MedicalProcedure` (EmSculpt Neo / non-invasive body contouring), `FAQPage`, `MedicalBusiness`.
- **Internal links:** CoolSculpting, GLP-1 Restore, Cosmetic hub, Dr. Moinfar bio.

#### Drafted copy (D16 — 2026-08-28, pending client proof)

Final prose for the build. Section anchor for the secondary CTA: `#how-it-works`. **Claims fence
(§9.2 / §9.3):** "FDA-cleared" not "-approved"; the treatment-area table is a real table, never five
identical bullets; fat-reduction claims are abdomen/thighs only; the 25% / 30% stat is always
adjacent to "individual results vary" and attributed to device labeling; **no sentence links GLP-1
muscle loss causally to the device.** Open placeholders: re-check the area table against current
device labeling at build.

**Meta**

- Title: `EmSculpt Neo in Dana Point · Muscle & Fat`
- Description: `EmSculpt Neo in Dana Point — an FDA-cleared, non-invasive treatment that builds muscle and reduces fat in cleared areas in one 30-minute session. Individual results vary.`

**1 · Hero**

- Eyebrow: Restore — under a physician's direction
- H1: Muscle and fat, in one 30-minute treatment.
- Descriptor (sub-head): Restore at Advanced Dermatology.
- Lede: EmSculpt Neo is an FDA-cleared, non-invasive treatment. In clinical studies, treated areas
  showed an average 25% increase in muscle mass and an average 30% reduction in fat. Individual
  results vary.
- CTAs: `Book a consultation` → `/contact/` · `How it works ↓` (anchor to §2)

**2 · How it works** _(id: `how-it-works`)_

High-intensity focused electromagnetic energy drives muscle contractions well beyond what you can
produce voluntarily, while radiofrequency heating targets fat in the treated area. A session runs
about 30 minutes, fully clothed, with no incisions, no anesthesia, and no downtime. It's done as a
series over several weeks, with periodic maintenance sessions afterward.

**3 · Treatment areas** _(the area-specific table — §9.2; render as a real table)_

Intro: What EmSculpt Neo is cleared to do depends on the area. It builds muscle in all five areas
below; it carries a fat-reduction claim for two of them.

| Area     | Muscle | Fat reduction |
| -------- | ------ | ------------- |
| Abdomen  | Yes    | Yes           |
| Thighs   | Yes    | Yes           |
| Buttocks | Yes    | —             |
| Arms     | Yes    | —             |
| Calves   | Yes    | —             |

Caption: Fat-reduction claims apply to the abdomen and thighs. For the buttocks, arms, and calves,
EmSculpt Neo is used to build and strengthen muscle. ⚠️ Confirm against current device labeling at
build — clearances change over time (§9.2).

**4 · What a session feels like**

Strong but tolerable contractions and a warming sensation, like a hard workout. The intensity is
turned up gradually through the session, and you can talk the whole time.

**5 · Candidacy**

- A good fit if you're near your goal weight and want tone or strength that a gym plateau hasn't
  given you.
- Not right for you if you're looking for large-volume weight loss, if you're pregnant, or if you
  have an implanted electronic device or metal in the treatment area. We screen for this at the
  consultation.

**6 · Why here rather than a storefront**

Dr. Moinfar assesses you. She won't book a treatment that's wrong for you, or more of it than you
need — no one upstream sets a quota telling her otherwise. That's why you can trust it.

The practice runs both EmSculpt Neo and CoolSculpting, so Dr. Moinfar can match the device to what
your body actually needs — reducing a pinchable bulge, building muscle, or both.

**7 · Who you'll see**

Dr. Moinfar assesses every patient and sets the plan; one of our physician assistants performs the
treatment. Three provider cards — Dr. Moinfar, Madeline Fee PA-C, Shylie Falahati PA-C (client,
2026-08-29 / D26) → `/about/dr-maryam-moinfar/`, `/about/madeline-fee-pa-c/`,
`/about/shylie-falahati-pa-c/`.

**8 · Evidence**

Own-practice consented series are in progress; we publish only our own images. The 25% / 30%
figures are from device labeling and are labeled as such. No stock, no borrowed before-and-afters.

**9 · The consultation & pricing**

§12.10 verbatim (the consultation promise). Price per area and per series in writing before
scheduling. Then §12.8 first sentence only — "We don't run flash sales, holiday promotions, or
discount packages." The "price is the price, and it doesn't go down if you wait" line is dropped on
procedure pages (D30).

**10 · FAQ** _(FAQPage schema)_

1. **How many EmSculpt Neo sessions do I need?** — Most protocols are a short series over a few
   weeks, followed by occasional maintenance. The exact number depends on the area and your goal;
   we set it at the consultation.
2. **Does EmSculpt Neo hurt?** — Most patients describe intense but tolerable contractions and a
   warming sensation, similar to a hard workout. The intensity is adjustable and increased
   gradually.
3. **Is EmSculpt Neo permanent?** — Muscle and fat changes develop over the weeks after the
   series. Muscle tone is maintained with periodic sessions and ordinary activity. Individual
   results vary.
4. **EmSculpt Neo or CoolSculpting?** — CoolSculpting reduces a discrete pinchable fat pocket and
   does nothing for muscle. EmSculpt Neo builds muscle and, in the abdomen and thighs, also reduces
   fat. We own both, and the consultation is about which one matches what you want to change. See
   [CoolSculpting](/cosmetic/coolsculpting/).
5. **Can I do EmSculpt Neo while I'm on a GLP-1 medication?** — Yes, many patients do. EmSculpt Neo
   builds muscle and reduces fat in cleared areas; it is not a treatment for medication side
   effects, and we don't describe it as one. The muscle track of our
   [GLP-1 Restore](/glp-1-restore/) program is a separate discussion.

**11 · Book a consultation** _(closing)_

A consultation is twenty minutes: we look at the area, review your history, and tell you whether
this is the right tool. Leave your name and number and our team will call you back.
CTAs: `Book a consultation` → `/contact/` · `Call 949.248.4547`

**12 · Cross-sell**

- For pinchable fat without a muscle goal, [CoolSculpting](/cosmetic/coolsculpting/) may be the
  better fit.
- On a GLP-1? The muscle track of our [Restore program](/glp-1-restore/) is here.

### PAGE: CoolSculpting `/cosmetic/coolsculpting/` (brass)

- **Title:** `CoolSculpting in Dana Point · Fat Reduction` (41)
- **Meta:** `CoolSculpting in Dana Point — cryolipolysis for pinchable fat in cleared areas. We offer both CoolSculpting and EmSculpt Neo and have no incentive to steer you toward either.`
- **H1:** `Cryolipolysis for pinchable fat.`
- **Audience:** the Existing Patient (§3.1). **Pillar:** 4 Restraint.
- **Proofs:** P19 (both devices offered — no incentive to steer — lead), P17 (standardized
  photography), P10/P11 (physician assessment).

**Sections** (Restore variant)

1. **Hero** — eyebrow _"Restore — under a physician's direction"_ + H1 + lede: controlled cooling
   reduces a pinchable fat bulge in cleared areas; not a weight-loss treatment. CTA `Book a
   consultation` / `How it works ↓`.
2. **How it works** — the applicator cools the fat beneath the skin to a temperature that injures
   fat cells without harming the skin; the body clears them over the following weeks to months. One
   or more cycles per area; results build gradually.
3. **Treatment areas** — pinchable fat: under the chin, flanks, abdomen, back, inner and outer
   thighs, under the buttocks, upper arms. TODO client: confirm applicator set in use.
4. **What a session feels like** — intense cold and a pulling sensation for the first few minutes,
   then numbness; you can read or work; about 35–60 minutes per applicator.
5. **CoolSculpting or EmSculpt Neo?** — plain comparison (D35: the "we own both / no incentive to
   recommend one over the other" note removed from this section; P19 neutrality now carried only by
   the FAQ "We own both" line and the meta description):
   - **CoolSculpting** removes a discrete pinchable fat pocket. No muscle effect.
   - **EmSculpt Neo** builds muscle and reduces fat in cleared areas (abdomen and thighs for fat).
     "Read about EmSculpt Neo" link sits under this item.
   - Section CTA: single primary button, "Schedule a consultation" → `/contact/`.
6. **Candidacy** — good fit if you have a specific pinchable bulge near your goal weight / not right
   for you for overall weight loss, for loose skin without a fat pocket, or with certain
   cold-related conditions (⚠️ screening at consultation, §9.5).
7. **Who you'll see** — three provider cards: Dr. Moinfar (assesses and sets the plan) plus
   **Madeline Fee PA-C and Shylie Falahati PA-C**, one of whom performs the treatment (client,
   2026-08-29 / D26). Photo placeholders.
8. **Evidence** — own-practice consented images in progress (§6.4); standardized protocol (P17); no
   borrowed before/afters.
9. **The consultation & pricing** — §12.10 verbatim; §12.8 first sentence only ("price is the
   price" line dropped — D30); price per applicator/area in writing before scheduling.
10. **FAQ** — long-tail: "how long does CoolSculpting take to work", "is CoolSculpting permanent",
    "does CoolSculpting hurt", "how many CoolSculpting sessions", "CoolSculpting vs EmSculpt Neo"
    (cross-link), "what is paradoxical adipose hyperplasia" — name it honestly: rare, delayed
    enlargement of the treated area, discussed before treatment. `FAQPage` schema.
11. **Closing CTA** — `Book a consultation`.
12. **Cross-sell** — one line to EmSculpt Neo.

- **Honest limitation:** not weight loss; does nothing for loose skin; results take one to three
  months and may need more than one cycle; a rare delayed enlargement (PAH) exists and is discussed
  beforehand.
- **Claims fence:** "cleared areas" language; candidacy not outcomes; no percentages unless device
  labeling with a results caveat; name PAH rather than omit it; brass on Restore pages only; never
  "complimentary/free". **Redirect:** old `/coolsculpting/` → this URL (301, already in `vercel.json`
  — confirm at build).
- **CTA:** primary `Book a consultation` → `/contact/`; secondary `How it works ↓`.
- **Schema:** `MedicalProcedure` (CoolSculpting / cryolipolysis), `FAQPage`, `MedicalBusiness`.
- **Internal links:** EmSculpt Neo, Cosmetic hub, Dr. Moinfar bio.

#### Drafted copy (D16 — 2026-08-28, pending client proof)

Final prose for the build. Section anchor for the secondary CTA: `#how-it-works` (how it works).
Name paradoxical adipose hyperplasia honestly rather than omit it. "Cleared areas" language
throughout. Open placeholder: confirm the applicator set in use.

**Meta**

- Title: `CoolSculpting in Dana Point · Fat Reduction`
- Description: `CoolSculpting in Dana Point — cryolipolysis for pinchable fat in cleared areas. We offer both CoolSculpting and EmSculpt Neo and have no incentive to steer you toward either.`

**1 · Hero**

- Eyebrow: Restore — under a physician's direction
- H1: Cryolipolysis for pinchable fat.
- Descriptor (sub-head): Restore at Advanced Dermatology.
- Lede: CoolSculpting uses controlled cooling to reduce a pinchable fat bulge in cleared areas. It
  is not a weight-loss treatment. We offer both CoolSculpting and EmSculpt Neo and have no incentive
  to steer you toward either.
- CTAs: `Book a consultation` → `/contact/` · `How it works ↓` (anchor to §2)

**2 · How it works** _(id: `how-it-works`)_

An applicator cools the fat beneath the skin to a temperature that injures fat cells without harming
the skin above them. Over the following weeks to months, the body clears the treated cells. Each
area takes one or more cycles, and the result builds gradually.

**3 · Treatment areas**

CoolSculpting works on pinchable fat: under the chin, the flanks, the abdomen, the back, the inner
and outer thighs, under the buttocks, and the upper arms. _(TODO client: confirm the applicator set
in use.)_

**4 · What a session feels like**

Intense cold and a firm pulling sensation for the first several minutes, then the area goes numb.
You can read or work through it. Each applicator runs roughly 35 to 60 minutes.

**5 · CoolSculpting or EmSculpt Neo?** _(plain comparison — D35: neutrality note removed)_

- **CoolSculpting** removes a discrete pinchable fat pocket. It has no effect on muscle.
- **EmSculpt Neo** builds muscle and, in the abdomen and thighs, also reduces fat.
  [Read about EmSculpt Neo](/cosmetic/emsculpt-neo/) — link sits under this item.

CTA: single primary button, `Schedule a consultation` → `/contact/`.

**6 · Candidacy**

- A good fit if you have a specific pinchable bulge and you're near your goal weight.
- Not right for you for overall weight loss, for loose skin without a fat pocket underneath, or if
  you have a cold-related condition such as cryoglobulinemia, cold agglutinin disease, or
  paroxysmal cold hemoglobinuria. We screen for this at the consultation.

**7 · Who you'll see**

Dr. Moinfar assesses every patient and sets the plan; one of our physician assistants performs the
treatment. Three provider cards — Dr. Moinfar, Madeline Fee PA-C, Shylie Falahati PA-C (client,
2026-08-29 / D26) → `/about/dr-maryam-moinfar/`, `/about/madeline-fee-pa-c/`,
`/about/shylie-falahati-pa-c/`.

**8 · Evidence**

Own-practice consented images are in progress; photography follows a standardized protocol. No
borrowed before-and-afters.

**9 · The consultation & pricing**

§12.10 verbatim (the consultation promise). Then §12.8 first sentence only — "We don't run flash
sales, holiday promotions, or discount packages." ("price is the price" line dropped on procedure
pages — D30.) Price per applicator/area in writing before scheduling.

**10 · FAQ** _(FAQPage schema)_

1. **How long does CoolSculpting take to work?** — The body clears the treated fat cells gradually.
   Most people see change over one to three months, and the fullest result at around three months.
2. **Is CoolSculpting permanent?** — The fat cells cleared after treatment don't come back, but the
   cells that remain can still enlarge with weight gain. Individual results vary.
3. **Does CoolSculpting hurt?** — The first few minutes are intensely cold with a strong pull, then
   the area numbs. Afterward it can be sore, swollen, or briefly numb for a couple of weeks.
4. **How many CoolSculpting sessions will I need?** — Often more than one cycle per area, spaced
   out. We estimate this at the consultation, based on the area and how much fat is pinchable.
5. **CoolSculpting or EmSculpt Neo?** — CoolSculpting is for a discrete pinchable pocket and does
   nothing for muscle; EmSculpt Neo builds muscle and reduces fat in the abdomen and thighs. We own
   both. See [EmSculpt Neo](/cosmetic/emsculpt-neo/).
6. **What is paradoxical adipose hyperplasia?** — It's a rare, delayed side effect in which the
   treated area gradually enlarges instead of shrinking, usually months later, and needs surgical
   correction. It's uncommon, but it's real, and we go over it with you before treatment.

**11 · Book a consultation** _(closing)_

A consultation is twenty minutes: we look at the area, check that it's a fat pocket rather than
loose skin, and tell you whether CoolSculpting fits. Leave your name and number and our team will
call you back.
CTAs: `Book a consultation` → `/contact/` · `Call 949.248.4547`

**12 · Cross-sell**

If you want tone or strength as well as fat reduction, [EmSculpt Neo](/cosmetic/emsculpt-neo/) is
the other device we offer.

### PAGE: Hair restoration `/cosmetic/hair-restoration/` (brass)

- **Title:** `Hair Loss Evaluation & Restoration · Dana Point` (46)
- **Meta:** `Hair loss is a symptom. At Advanced Dermatology in Dana Point, evaluation starts with trichoscopy, labs, and — where needed — a scalp biopsy, before any treatment plan.`
- **H1:** `Hair loss is a symptom. We find out of what.`
- **Audience:** the Hair Patient (§3.3) — women 45–70, told it was hormones or aging, often already
  spent money at a PRP storefront that never diagnosed anything. **Dignified and clinical (§8.5).**
  Sub-segment with its own section: post-chemotherapy hair. **Pillars:** 1 Accuracy + 4 Restraint.
- **Proofs:** P13 (Dr. Moinfar trained under a hair specialist during residency — **mentor not
  named**), P9 (trichoscopy on every provider), scalp biopsy + bloodwork before treatment
  (P11 / §7.4 logic), P17 (standardized photography), P1 (no quota → biopsy first — §7.4).

**Sections** (Restore variant)

1. **Hero** — eyebrow _"Restore — under a physician's direction"_ + H1 + lede: most of our hair
   patients are women who were told there was nothing to do; some conditions that look identical in
   a mirror are actively destroying follicles while you wait. CTA `Request a hair consultation` /
   `About Dr. Moinfar →`.
2. **Why the diagnosis comes first** — the §7.4 efficacy chain in patient terms: a practice with a
   revenue target sells the PRP series because that's the product; if the cause is a scarring
   alopecia (lichen planopilaris, frontal fibrosing alopecia, CCCA), that series does nothing while
   follicles are lost for good. _"A biopsy first can tell you PRP is the wrong treatment for you.
   The benefit is the follicles you keep."_
3. **What we look for** — telogen effluvium (shedding after a stress event — illness, surgery,
   rapid weight loss, childbirth); androgenetic (pattern) hair loss; scarring alopecias (biopsy);
   alopecia areata; traction; thyroid and nutritional contributors. Many patients have more than
   one at once — treating the wrong one wastes months.
4. **How an evaluation works** — history; scalp exam with trichoscopy (P9); blood work for iron,
   thyroid, vitamin D and other contributors where indicated; a small scalp biopsy when the pattern
   calls for one; standardized baseline photography (P17); a written plan.
5. **Billing, stated plainly (§9.4)** — a two-column table:
   - **Billed to insurance (medical):** office visit and scalp exam · scalp biopsy · laboratory
     studies · diagnosis · prescription therapy.
   - **Not covered (cash):** PRP / PRF series · standardized photography · supplement protocol ·
     structured follow-up intervals · program coordination.
   Line: _"The medical workup is billed to your insurance as medical care, because that's what it
   is."_ ⚠️ Confirm the final structure with billing counsel before launch (§9.4).
6. **Treatment, once there's a diagnosis** — prescription therapy per diagnosis (topical/oral);
   PRP/PRF where appropriate; treatment of an underlying scarring process; supplements only to
   correct a documented deficiency; referral where the cause sits outside dermatology.
7. **Post-chemotherapy hair** — its own short section, slowest and gentlest tone (§8.5): regrowth
   patterns and timeline, what helps, when to start; **never called cosmetic**; natural referral
   relationship with oncology (TODO client: name the partner only if approved).
8. **Who you'll see** — Dr. Moinfar (hair and scalp). Photo placeholder; link to her bio.
9. **Evidence** — two or three consented before/afters in progress (§6.4); standardized protocol
   (P17); no stock, no borrowed images.
10. **The consultation & pricing** — §12.10 verbatim; pricing for the cash components in writing
    before a series starts; §12.8 first sentence only ("price is the price" line dropped — D30).
11. **FAQ** — long-tail: "why is my hair falling out after weight loss" (cross-link GLP-1 Restore),
    "does PRP work for hair loss" (candidacy, diagnosis-dependent), "do I need a biopsy for hair
    loss", "will my hair grow back after chemo", "is hair loss covered by insurance" (the §9.4
    split), "how long before I see regrowth". `FAQPage` schema.
12. **Closing CTA** — `Request a hair consultation`.
13. **Cross-sell** — one line to GLP-1 Restore (hair track), one line to General dermatology
    (scalp conditions).

- **Honest limitation:** regrowth is slow — months, not weeks; some patterns need ongoing
  maintenance; a scarring alopecia past a certain point can be halted but not reversed.
- **Claims fence:** no regrowth guarantees or percentages; "candidacy, not outcomes"; PRP is
  diagnosis-dependent, never a default; billing split is ⚠️ pending counsel (§9.4); post-chemo hair
  is never "cosmetic"; brass on Restore pages only; never "complimentary/free".
- **CTA:** primary `Request a hair consultation` → `/contact/`; secondary `About Dr. Moinfar →`.
- **Schema:** `MedicalProcedure` (hair loss evaluation / trichology), `FAQPage`, `MedicalBusiness`.
- **Internal links:** GLP-1 Restore, General dermatology, Cosmetic hub, Dr. Moinfar bio.

#### Drafted copy (D16 — 2026-08-28, pending client proof)

Final prose for the build. Section anchor for the secondary CTA: `#how-it-works` (why the diagnosis
comes first). **Dignified and clinical (§8.5).** Post-chemotherapy hair is never called "cosmetic".
PRP is diagnosis-dependent, never a default. Open placeholders: billing split is ⚠️ pending counsel
(§9.4); the mentor Dr. Moinfar trained under is not named (P13); oncology referral partner named
only if approved.

**Meta**

- Title: `Hair Loss Evaluation & Restoration · Dana Point`
- Description: `Hair loss is a symptom. At Advanced Dermatology in Dana Point, evaluation starts with trichoscopy, labs, and — where needed — a scalp biopsy, before any treatment plan.`

**1 · Hero**

- Eyebrow: Restore — under a physician's direction
- H1: Hair loss is a symptom. We find out of what.
- Descriptor (sub-head): Restore at Advanced Dermatology.
- Lede: Most of our hair patients are women who were told there was nothing to do. Some conditions
  that look identical in the mirror are quietly destroying follicles while you wait. The evaluation
  is what tells them apart.
- CTAs: `Request a hair consultation` → `/contact/` · `About Dr. Moinfar →` (`/about/dr-maryam-moinfar/`)

**2 · Why the diagnosis comes first** _(id: `how-it-works`; §7.4 in patient terms)_

A practice with a revenue target sells the PRP series, because that's the product. If the cause is
a scarring alopecia — lichen planopilaris, frontal fibrosing alopecia, CCCA — that series does
nothing while the follicles are lost for good. A biopsy first can tell you PRP is the wrong
treatment for you. The benefit is the follicles you keep.

No one here has a monthly target, so the evaluation isn't shaped by what's easiest to sell.

**3 · What we look for**

- **Telogen effluvium** — shedding a few months after a stress event: illness, surgery, rapid
  weight loss, childbirth. Usually settles once the trigger passes.
- **Androgenetic (pattern) hair loss** — gradual thinning along the part or the crown, often with a
  hereditary component.
- **Scarring alopecias** — lichen planopilaris, frontal fibrosing alopecia, CCCA. These destroy
  follicles permanently and need a biopsy to catch.
- **Alopecia areata** — patchy loss from an immune process.
- **Traction** — tension from styling, over time.
- **Thyroid, iron, and other systemic or nutritional contributors.**

Many patients have more than one of these at once. Treating the wrong one costs months.

**4 · How an evaluation works**

1. History — timeline, family pattern, medications, diet, recent stressors.
2. A scalp exam with trichoscopy.
3. Blood work for iron, thyroid, vitamin D, and other contributors where indicated.
4. A small scalp biopsy when the pattern calls for one.
5. Standardized baseline photographs.
6. A written plan.

**5 · Billing, stated plainly** _(§9.4 — two-column table)_

Intro: The medical workup is billed to your insurance as medical care, because that's what it is.
The program elements around it are not covered and are quoted to you in writing.

| Billed to insurance (medical) | Not covered (cash)            |
| ----------------------------- | ----------------------------- |
| Office visit and scalp exam   | PRP / PRF series              |
| Scalp biopsy                  | Standardized photography      |
| Laboratory studies            | Supplement protocol           |
| Diagnosis                     | Structured follow-up intervals |
| Prescription therapy          | Program coordination          |

Caption: ⚠️ Billing structure to be confirmed with counsel before launch (§9.4).

**6 · Treatment, once there's a diagnosis**

- Prescription therapy matched to the diagnosis — topical or oral.
- PRP or PRF where the diagnosis supports it — never as a default.
- Treatment of an underlying scarring process, where that's the cause.
- Supplements only to correct a deficiency we've documented on labs.
- Referral where the cause sits outside dermatology.

**7 · Post-chemotherapy hair** _(own section, gentlest tone — §8.5; never "cosmetic")_

Hair after chemotherapy regrows on its own timeline, and it often comes back with a different
texture or color for a while before it settles. We can tell you what's normal, what helps, and when
it makes sense to start. This is medical care, not a cosmetic service. _(TODO client: name the
oncology referral partner only if approved.)_

**8 · Who you'll see**

Dr. Maryam Moinfar handles hair and scalp. She trained under a hair specialist during residency.
Provider card, photo placeholder → `/about/dr-maryam-moinfar/`.

**9 · Evidence**

Two or three consented before-and-afters are in progress; photography follows a standardized
protocol. No stock, no borrowed images.

**10 · The consultation & pricing**

§12.10 verbatim (the consultation promise). Pricing for the cash components in writing before a
series starts. Then §12.8 first sentence only — "We don't run flash sales, holiday promotions, or
discount packages." ("price is the price" line dropped on procedure pages — D30.)

**11 · FAQ** _(FAQPage schema)_

1. **Why is my hair falling out after weight loss?** — Rapid weight loss is a common trigger for
   telogen effluvium, a temporary shed that shows up two to four months later. If you're on a GLP-1
   medication, our [GLP-1 Restore](/glp-1-restore/) program covers this specifically.
2. **Does PRP work for hair loss?** — For some diagnoses it's a reasonable option; for others it
   does nothing and delays the treatment that would help. Whether it's right for you depends on
   what the evaluation finds.
3. **Do I need a biopsy for hair loss?** — Not always. It's warranted when the pattern or the
   trichoscopy suggests a scarring process, because those are the cases where waiting costs
   follicles.
4. **Will my hair grow back after chemotherapy?** — In most cases it regrows once treatment ends,
   though the timeline and early texture vary. We'll walk you through what to expect.
5. **Is hair loss evaluation covered by insurance?** — The medical workup — the visit, the scalp
   exam, labs, a biopsy, and prescription therapy — is billed to insurance. A PRP or PRF series,
   standardized photography, and program coordination are not covered and are quoted in writing.
6. **How long before I see regrowth?** — Months, not weeks. Most treatment plans need three to six
   months before there's a visible change, and some patterns need ongoing maintenance.

**12 · Request a hair consultation** _(closing)_

A hair consultation is an evaluation, not a sales appointment — you'll leave knowing what's
happening and what the options are. Leave your name and number and our team will call you back.
CTAs: `Request a hair consultation` → `/contact/` · `Call 949.248.4547`

**13 · Cross-sell**

- On a GLP-1 medication? Shedding is covered by the hair track of [GLP-1 Restore](/glp-1-restore/).
- Scalp conditions like seborrheic dermatitis and psoriasis are treated through
  [general dermatology](/general-dermatology/).

### PAGE: About `/about/`

- **Title:** `About Advanced Dermatology · Dana Point` (39)
- **Meta:** `Advanced Dermatology is a physician-owned practice in Dana Point, California, founded by Dr. Maryam Moinfar in 2006. It has never been sold to a hospital system or private equity group.`
- **H1:** `Twenty years, and mostly the same faces.` _(alt: `Independent since 2006.`)_
- **Audience:** a patient deciding whether to trust the practice; referring physicians pass through.
  **Pillars:** all four; independence is explained **in full here** — the one page where it may lead
  a section (§7.5).
- **Proofs:** P2, P3, P16 (San Clemente 2006 → physician-designed Dana Point building 2014),
  P14 (MA→PA pipeline), P10, P11, P15, P1, P20 (spouses-and-friends line, worded exactly as
  approved — §6.2 / D11). **No square-footage number anywhere (§6.3, §11.3 checklist).**

**Sections**

1. **Hero** — H1 + lede: §12.1 practice boilerplate (short), expanded by one sentence. Descriptor:
   _Physician-owned · Dana Point · Since 2006._
2. **The story** — founded in San Clemente in 2006; moved into a purpose-built, physician-designed
   building in Dana Point in 2014 (P16). Publishable facts only — purpose-built, physician-designed,
   owned. No measurement. `[Photo: building exterior, tight architectural crop, daylight]`.
3. **Who we answer to** — the independence explainer §7.5 **verbatim** ("Most dermatology practices
   in Orange County have been bought…" through "…the only arrangement in which the person examining
   you answers to you"). Rendered in an `--evergreen-deep` band. This is the anchor every "how do I
   know that's true" link elsewhere points to.
4. **The team** — opens with the client's section intro _"The people you'll actually see"_ (two
   paragraphs: MA→PA pipeline as continuity, then P11 weekly pathology review; added 2026-08-29,
   D21) → four provider cards → bios. Continuity paragraph §12.6 **verbatim** still to be placed
   beneath in the full About pass — hold it until then so the MA→PA sentence isn't stated twice in
   one section.
5. **Coming up through the practice** — P14, framed publicly as continuity: _"Two of our physician
   assistants started here as medical assistants, went to PA school, and came back."_ One line
   inviting MAs and PAs who want that path to get in touch (TODO client: careers email or
   `/careers/` page — plain link for now).
6. **Secondary line** — _"Independent since 2006. Uncompromised since."_ as the close of §3 or its
   pull-line (§4.3 — this line belongs on About only, not the everyday chrome).
7. **Closing CTA** — `Request an appointment`; secondary `Meet the team ↓` (anchor to §4).

- **Honest limitation:** the §7.5 block already carries "Staying independent has cost us something."
  Do not add a second, competing admission.
- **Claims fence:** no square footage (§6.3); "independent" appears as a label late and once inside
  §7.5; no superlatives, no "last / only independent" construction (§4.1 note); P20 line worded
  exactly as approved.
- **CTA:** primary `Request an appointment` → `/contact/`; secondary anchor to the team.
- **Schema:** `MedicalBusiness` only (base layout covers it).
- **Internal links:** all four provider bios, Skin cancer, General dermatology, Contact.

### PAGE: Provider bios `/about/<slug>/` (`Physician` schema each)

Shared pattern (all four): breadcrumb → portrait (client-supplied, 2026-08-29 — low-res, flagged
for replacement; no lab coat staged on white, §7) → name (first reference per §5.4) → credential
line → how they practice (2–3 short paragraphs) → education and training → one human detail
(client-supplied per provider; Dr. Lander gave none, so his bio carries an observed-behaviour line
instead) → links to the service pages they cover → CTA. Each bio links to at least one service page
and one other bio (§11.4). Copy adapted from the client's provider-bios draft
(`docs/reference/provider-bios.md` — carries unresolved `[confirm]` brackets; the "same day"
reconstruction phrasing in the Lander draft must drop the timing per §6.3 before it ships). No
outcome claims; numbers from the Proof Bank only. Bio copy lives in `src/data/site.ts`
(`providers[]`).

#### `/about/dr-maryam-moinfar/`

- **Title:** `Dr. Maryam Moinfar · Advanced Dermatology` (42)
- **Meta:** `Dr. Maryam Moinfar is a board-certified dermatologist and the founder of Advanced Dermatology in Dana Point. She reviews pathology across all providers every week.`
- **H1:** `Dr. Maryam Moinfar` · **First reference:** _Dr. Maryam Moinfar, board-certified dermatologist._
- **Proofs:** P11 (lead), P12 (Northwestern University Feinberg School of Medicine; dermatology
  residency at the University of Minnesota), P13 (trained under a hair specialist during residency —
  **mentor not named**), P10, P2 (founded 2006), P15.
- **How she practices:** diagnosis before treatment; the weekly pathology review across all
  providers (P11), routine and unbilled; leads the Restore program; sees general medical
  dermatology and hair/scalp.
- **Education & training:** P12 wording exactly; residency hair-specialist mentorship per P13,
  mentor unnamed; UC Berkeley molecular and cell biology (honors); Alpha Omega Alpha; Woman of the
  Year in Medicine and Healthcare, 2009 (client-confirmed to keep, 2026-08-29 — D21).
- **Human detail:** raising a practice and a daughter over the same twenty years.
- **Also published (client sign-off, D21):** Silhouette InstaLift listed among her cosmetic work;
  the D11 physician-families referral line, approved wording.
- **Links:** General dermatology, Hair restoration, GLP-1 Restore; Dr. Lander's bio.
- **CTA:** `Request an appointment` (secondary `Request a hair consultation` where the page context
  is hair).

#### `/about/dr-jeffrey-lander/`

- **Title:** `Dr. Jeffrey Lander · Advanced Dermatology` (41)
- **Meta:** `Dr. Jeffrey Lander is a board-certified dermatologist and fellowship-trained Mohs surgeon in Dana Point. He performs more than 1,000 Mohs cases a year and the reconstruction himself.`
- **H1:** `Dr. Jeffrey Lander` · **First reference:** _Dr. Jeffrey Lander, board-certified
  dermatologist and fellowship-trained Mohs surgeon._
- **Proofs:** P5 (fellowship-trained in Mohs — lead), P4 (more than 1,000 Mohs cases a year),
  P6 (reconstruction here, same surgeon — no timing stated), P3 (trained with Dr. Moinfar in residency,
  ~25 years side by side).
- **How he practices:** one thin layer at a time, margins read between layers, surgery stops when
  they're clear; does the reconstruction himself, here — **state no timing** (§11.3).
- **Education & training:** PhD in biological sciences, UC Irvine; medical school + dermatology
  residency at the University of Minnesota (alongside Dr. Moinfar); one additional year of
  fellowship in Mohs micrographic surgery and cutaneous oncology (institution/year not published).
- **Human detail:** none supplied — bio uses an observed-behaviour line (unhurried, explains
  findings as he goes) in its place.
- **Links:** Skin cancer, `/skin-cancer/#referring-physicians`; Dr. Moinfar's bio.
- **CTA:** `Request a skin check`.
- **Claims fence:** no cure-rate or outcome numbers (P21); no cumulative career Mohs figure unless
  confirmed and defensible (§6.1 note, §14.2); reconstruction stated without timing — neither "next day" nor "same day".

#### `/about/madeline-fee-pa-c/`

- **Title:** `Madeline Fee, PA-C · Advanced Dermatology` (41)
- **Meta:** `Madeline Fee, PA-C, practices medical dermatology at Advanced Dermatology in Dana Point. She started at the practice as a medical assistant, went to PA school, and came back.`
- **H1:** `Madeline Fee, PA-C` · **First reference:** _Madeline Fee, PA-C._
- **Proofs:** P14 (MA → PA school → returned), P3 / §12.6 (continuity).
- **How she practices:** general medical dermatology within the practice's model; the same faces
  for years.
- **Education & training:** UC Berkeley, integrative biology (Rotary International volunteer); Master
  of Health Science, Duke University PA program ("top-ranked program in the country" / "top of her
  class" phrasing kept per client sign-off, D21); began here as a medical assistant.
- **Human detail:** hikes, dances, travels.
- **Links:** General dermatology; Shylie Falahati's bio. **CTA:** `Request an appointment`.

#### `/about/shylie-falahati-pa-c/`

- **Title:** `Shylie Falahati, PA-C · Advanced Dermatology` (44)
- **Meta:** `Shylie Falahati, PA-C, practices medical dermatology at Advanced Dermatology in Dana Point, California.`
- **H1:** `Shylie Falahati, PA-C` · **First reference:** _Shylie Falahati, PA-C._
- **Proofs:** §12.6 (continuity), P14 (MA → PA school → returned, same path as Madeline Fee).
- **How she practices:** general medical dermatology across the practice's model; member of the
  NCCPA and the AAPA; stays current on new dermatologic treatments.
- **Education & training:** Cal State Long Beach (cum laude); MS in Physician Assistant Studies,
  Pacific University, Oregon ("top of her class" phrasing kept per client sign-off, D21); trained
  here as a medical assistant before PA school.
- **Human detail:** reads, pilates and hot yoga, swims, always trying a new restaurant.
- **Links:** General dermatology; Madeline Fee's bio. **CTA:** `Request an appointment`.

### PAGE: Contact `/contact/`

- **Title:** `Contact Advanced Dermatology · Dana Point` (40)
- **Meta:** `Request an appointment at Advanced Dermatology in Dana Point, CA. Leave your name and number and our team will call you back, usually within one business day.`
- **H1:** `Request an appointment.`
- **Audience:** anyone ready to act. **Pillar:** — (utility page).

**Sections**

1. **Hero + lede** — leave your name and number, we call back, usually within one business day;
   routine visits are booked weeks out, concerning or changing spots are seen sooner.
2. **Callback form** (component already built) — full name, phone, email (optional), best time to
   reach you, area of care (select: general dermatology / skin cancer / cosmetic / GLP-1 Restore /
   not sure), how did you hear about us (optional). **No free-text medical field (D4).** Microcopy
   under the form (already in the component): _"Please don't include medical details here — we'll go
   over those by phone. If you have a changing or bleeding spot, call us and say so, and we'll get
   you in sooner."_ Success message in brand voice, no exclamation (already in the component).
3. **Visit** — NAP block (matches GBP), phone, fax (TODO client), hours (TODO client — confirm from
   GBP), parking and building-access line (TODO client), map (TODO client: embed vs. static image +
   link — use a placeholder image for now; **no third-party map script that sets cookies**, D5 spirit).
4. **Urgent-spot note** — one `--clay` line (`CalloutClay`): _"If you have a changing or bleeding
   spot, call us and say so — we'll get you in sooner."_
5. **No live chat. No pop-up. No countdown.**

- **Claims fence:** never "complimentary/free"; no PHI collected (D4); no GA4 or cookie-setting
  embeds (D5); NAP character-for-character with the Google Business Profile.
- **CTA:** the form is the CTA; secondary `Call 949.248.4547`.
- **Schema:** `MedicalBusiness` only.
- **Internal links:** Skin cancer (urgent spots), General dermatology, About.

### PAGE: Join us `/join-us/`

Added 2026-08-29 (D31) from the client careers brief. Standalone top-level page — this
supersedes the `TODO(client): careers email or /careers/ page` placeholder in the About spec
§5 ("Coming up through the practice"); About's section-5 line should link here once About is
built.

**Repositioned 2026-08-29 (D32).** The page no longer leads with the MA→PA/physician pipeline.
It now leads with the practice as a place to work and states plainly that it recruits for **two
role families — administrative staff and medical assistants — both able to be permanent**. The
pipeline is retained as **one highlighted section**, not the page thesis.

**Trimmed 2026-08-30 (D39).** Hero lede cut to one sentence (founded 2006 · physician-owned ·
independent · one building · ~17 staff) and the hero's second line cut to "hiring for two kinds
of roles: front office and medical assistant" — the Mohs-volume / weekly-pathology-review /
"learn the medicine" detail and the "more than 100" figure no longer appear in the hero. The
three role sections ("What we're hiring for" + "The medical assistant role" + "Administrative
roles") collapse into **one section, "The roles"**, with `<h3>` sub-heads `Medical assistant`
and `Administrative` and a closing apply line. **"The training path" → "The mentoring path"**
(id `the-path` → `mentoring`; CTA label and the `#` anchor follow).

- **Title:** `Admin and medical assistant careers` (34; renders with ` · Advanced Dermatology`)
- **Meta:** `A small, physician-owned dermatology practice in Dana Point, hiring front-office staff and medical assistants — permanent roles, plus a pre-PA mentoring path. How to apply.`
- **H1:** `We’re a small, physician-owned practice, and we’re hiring.`
- **Audience:** two readers now — (a) someone looking for a permanent job (front-office **or**
  career MA) at a small independent practice, and (b) the original reader: a pre-med / pre-PA
  graduate after clinical hours before a program. Copy must not make either feel like the page
  isn't for them.
- **Pillar:** Continuity (§7, message map "Careers" row — updated D32: headline idea is now "a
  small practice worth working at; hiring admin + MAs", with the training path as lead proof, not
  the headline). **Evergreen only — no brass.** Master-brand page; the pipeline is public-facing
  continuity, never the internal succession/staffing plan (§6.3 🔒, §5.2 note).
- **Proofs:** P1 (physician-owned, independent), P14 (two PAs began as MAs), P23 (Dr. Moinfar
  trained both PAs at the exam table), **P24** (100+ graduates over ~20 years; a number became
  PAs or physicians). Hero uses confirmed careers-brief facts: founded 2006, one location,
  ~17 staff. (The weekly-pathology-review and Dr. Lander >1,000-Mohs-cases figures are no longer
  used on this page as of D39.) No invented sub-counts, no named alumni beyond Fee and Falahati,
  no average-tenure number (internal/unverified — §6.3), **no claim about front-office staff tenure**.

**Sections**

1. **Hero** — eyebrow `Join us`; H1 (the practice + the ask, not P14). Lede (one sentence):
   "Advanced Dermatology has been in Dana Point since 2006 — physician-owned, independent, one
   building, one team of about seventeen staff." Second paragraph (`.hero__hiring`, normal
   weight — **not** de-emphasised): "We're hiring for two kinds of roles: front office and
   medical assistant." **No breadcrumb** (removed 2026-08-29, D32 — client): the page opens
   straight on the eyebrow + H1. CTA `How to apply` (→ `#apply`) · `The mentoring path ↓`
   (→ `#mentoring`).
2. **The roles** _(id: `roles`; `--fog` band; D39 — collapses the former sections 2–4)_ — one
   section, two `<h3>` sub-heads.
   **Medical assistant:** exam rooms from week one — rooming, history, biopsy/excision setup,
   Mohs days with Dr. Lander, cosmetic-procedure assisting, callbacks, documentation; "the room
   turns over fast and the day stays full"; real responsibility early. "Some people use the role
   for a year or two of clinical experience before PA or medical school. Others build a career
   here. We hire for both, and neither one is the fallback option."
   **Administrative:** "You run the front office — scheduling, patient coordination, billing."
   Steadier than the exam rooms by design; "a long-term seat, not a stepping stone." "In a
   practice this size, the front desk isn't one of forty. You know the patients who come through,
   and you work directly with the providers, not through three layers of management." Keep
   front-office functions generic (open item — actual titles / active openings unconfirmed).
   Closes with the apply line: email `derm@dermsc.com`, "Medical assistant" or "Administrative"
   in the subject line.
3. **The mentoring path** _(id: `mentoring`; `--evergreen` band; renamed from "The training
   path", D39)_ — the retained pipeline highlight (merges the old "How the path works" + "People
   leave this job"). "For about twenty years, this practice has **also** been a place pre-PA and
   pre-med graduates come to get their clinical hours." Exam-table apprenticeship, not a
   classroom program; "more than 100" (P24); Fee and Falahati named (P14). Closes on
   candidacy-not-results support for those who leave (hours that hold up, a reference from the
   dermatologist who trained you, help choosing programs) and the approved §12.6 turnover line,
   adapted: _"Dermatology has a turnover problem; here, the people who leave leave for a reason
   we're glad to have been part of."_
4. **Where they are now** — intro line (alumni added only with a signed release), then
   `<AlumniGallery>` (responsive grid — **not a carousel**, design rule 5). Card caption
   convention: name · "Medical assistant, `<yearStarted>`" → "Now: `<currentRole>` (`<year>`)" ·
   optional ≤25-word quote. `photo: null` → dignified initials block (no stock, no silhouette).
   Data in `src/data/alumni.ts`; component filters out any `consentOnFile: false` entry at build
   time.
5. **Who this is for** _(`--fog` band)_ — two bolded lead-ins, no not-a-fit door-slam (D32).
   **The medical assistant role:** wants hands-on clinical work, reliable, quick to learn,
   coachable — "whether you're building a career or getting clinical hours before a program";
   harder fit if you need a slow, predictable pace and a fixed schedule. **An administrative
   role:** organised, steady, good with patients on the phone and at the desk, wants to stay a
   while; "you don't need a clinical background."
6. **How to apply** _(id: `apply`)_ — email a resume + short note ("why now, what you're looking
   for") to `derm@dermsc.com`, subject "Medical assistant" — or "Administrative" for a front-office
   role; or call the practice line. "We read every application. If it's a fit, you'll come in to
   meet the team and spend time in the clinic before anyone decides."
7. **Closing CTA** _(`--evergreen-deep` band)_ — `Email your resume` (mailto, subject `Application`
   — generic, serves both tracks) · `Call 949.248.4547`; cross-link to `/about/`. Body copy: "a
   short note about the role you want and why now."

- **Voice / claims fence:** calm, factual, numbers over adjectives; "over 100" only, never a
  precise figure or sub-count; no outcome guarantee that a program will admit anyone (candidacy,
  not results); banned-word list applies, plus the brief's list (no "family", "passionate",
  "rockstar", "dream job", "fun", no exclamation marks, no urgency/scarcity, no "best/#1").
- **Consent:** no real name, photo, or quote in the gallery without a signed release. Enforced in
  `AlumniGallery.astro` (drops `consentOnFile: false`). This note is internal — it does not
  render on the page.
- **CTA:** primary is the resume email; secondary `Call 949.248.4547`.
- **Schema:** `MedicalBusiness` only (base layout). **No `BreadcrumbList`** — the breadcrumb was
  removed (D32), and the component only emits the JSON-LD for a multi-item trail anyway.
  A `JobPosting` is deliberately **not** emitted — revisit once employment type, a comp range,
  and a way to keep `datePosted` / `validThrough` fresh on a static site are settled.
- **Internal links:** About (how the practice is set up), Dr. Moinfar and the PAs via the
  named-alumni sentence. Footer "Practice" column links here (`src/data/site.ts`).

**Open items (confirm before launch)**

- [ ] Signed photo/quote releases on file for **Madeline Fee** and **Shylie Falahati** — the two
      real gallery entries are set `consentOnFile: true` on the strength of their existing site
      presence; confirm the release actually covers this use, then add portraits.
- [ ] Year each of Fee and Falahati started as an MA (`yearStarted` in `src/data/alumni.ts` is a
      `[CONFIRM]` placeholder; the entries render the year in the "Medical assistant, <year>" line).
- [ ] Delete the six `isSample` rows in `src/data/alumni.ts` and replace with real, consented
      alumni.
- [ ] Exact "100+" figure — keep the copy at "more than 100" unless the client gives a firm
      number; do not invent precision. Same for the split of that group into PAs vs. physicians
      vs. other clinical roles (copy says "a number of them").
- [ ] Dedicated careers inbox? Copy currently routes applications to `derm@dermsc.com` with a
      subject-line tag ("Medical assistant" / "Administrative"); swap if the practice wants a
      separate address, and confirm someone triages the "Administrative" tag.
- [ ] Administrative track (D32) — confirm the actual front-office role titles/functions (copy
      says "scheduling, patient coordination, billing" generically) and whether admin is
      **actively hiring** or this is a standing "always accepting" line. If specific openings
      exist, decide whether to name them. No tenure claim about current front-office staff is
      made on the page — keep it that way unless a figure is verified for public use.
- [ ] Hero facts (D32 reposition) — confirm the published headcount ("a team of about seventeen"
      = careers-brief "approximately 17"; is it OK to publish and still current?) and that
      "physician-owned and independent" + "more than 1,000 Mohs cases a year" read the same way
      on a careers page as elsewhere on the site (§6.1 boilerplate). The "if you want to learn
      the medicine … it's worth working here" line is the one soft-sell on the page — cut if the
      practice wants it fully claim-only.
- [ ] Full application-form spec (for a later build, once file upload has a home — D4 keeps the
      site to callback forms with no upload today): fields = name, phone, email, resume upload,
      school/program (if applicable), "why now" free text. Needs its own serverless handler and a
      storage/retention decision; until then the email route stands.
- [ ] Hiring timeline and interview steps — copy says only "we read every application" and "come
      in to meet the team"; tighten if the practice wants specifics.
- [ ] `JobPosting` structured data — see Schema note above.
- [ ] Average MA tenure (~1.5 yr) and ramp time (~3 mo) exist in internal ops notes but are
      **not** published (§6.3) and were estimated internally; keep them off the page unless
      verified for public use.

### PAGE: Legal — `/privacy/` and `/accessibility/` (both `noindex`)

#### Privacy policy `/privacy/`

Plain-language, non-PHI posture. Sections:

1. **What this site is** — informational; does not collect protected health information; not a
   patient portal.
2. **What the callback form collects** — name, phone, optional email, preferred time, area of care,
   optional referral source. Nothing else. Please don't include medical details.
3. **How it's used** — to call you back about your request; handled by our team and our email
   provider (Resend); not sold or rented.
4. **Retention** — kept only as long as needed to respond and for routine business records, then
   deleted (TODO client: state a period if they have one).
5. **Analytics** — a privacy-focused tool (Plausible or Fathom — confirm which at launch), no
   cookies, no cross-site tracking, no GA4 (D5).
6. **Third parties** — Vercel (hosting), Resend (form email), the analytics vendor; links to their
   policies (TODO client).
7. **Your choices / contact** — how to ask what we hold or to have it deleted: the practice phone
   and email.
8. **Changes** — date of last update; the date changes when the policy is revised.

_No schema. Footer carries the sitewide medical disclaimer._

#### Accessibility statement `/accessibility/`

1. **Our target** — WCAG 2.1 Level AA across the site; 18px base text; visible focus on every
   control; tested with keyboard-only navigation and a screen reader.
2. **Known limitations** — TODO client: list any (e.g. a third-party map embed) once known.
3. **If you hit a barrier** — call `949.248.4547` (or the practice email); we'll get you the
   information in another form and fix the barrier.
4. **Feedback and date** — last-reviewed date; reports welcome.

_No schema. `noindex`._
