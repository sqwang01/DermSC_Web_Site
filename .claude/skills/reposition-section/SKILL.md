---
name: reposition-section
description: >-
  Restructure a top-level marketing section page (Skin cancer, General dermatology,
  Cosmetic, GLP-1 Restore) around the patient benefit and the full range of care
  instead of a single marquee procedure or a buried position — then propagate the
  change through the reference docs and the decision log. Use when the client asks
  to "reposition", "restructure", "reframe", or "rework" a section page, when they
  say the page "over-indexes" on one procedure or leads with the wrong idea, or
  when they ask to apply the skin-cancer / general-dermatology treatment to another
  section.
---

# Reposition a section page

This skill captures the pattern used to reposition **Skin cancer** (decision D19,
commit `4ec3e2a`) and **General dermatology** (decision D22). Follow it to do the
same to another section page and keep the reference docs in sync.

The reference docs are the source of truth, not sacred text (see `CLAUDE.md`). If
you find one contradicting another, fix it and log it.

## 0 · Before you touch code

Read, in this order:

1. `CLAUDE.md` — the non-negotiable design + content + SEO rules.
2. `docs/content-spec.md` → the `## PAGE:` block for the section you're repositioning.
   This is the spec you are editing *and* implementing against.
3. `docs/reference/brand-positioning-v2.md` — the section's pillar (§1.x/§2.1), the
   Proof Bank (§6), the voice + banned-words list (§8), the claims fence (§9), and
   the pre-publication checklist (§11.3).
4. `docs/decisions.md` — D19 and D22 for the precedent; scan for any logged decision
   that touches this page.
5. The page file itself: `src/pages/<section>/index.astro` (and any sub-pages).

**Get the client's actual instructions first.** This skill is the *how*, not the
*what*. Do not invent a new position — the client supplies the new framing; you
structure the page around it.

## 1 · The repositioning moves

Not every move applies every time. Work through the list; apply the ones the
client's direction calls for.

| Move | What it means | Precedent |
| --- | --- | --- |
| **Lead with the position, not the procedure** | The page's argument (patient benefit, or the practice's stance) is the `<h1>` and the hero lede. A single marquee procedure (Mohs, injectables) becomes *one option among several*, not the headline. | D19: was "How Mohs works" first → now detection + full range. D22: "we look for the cause" moved from §2 body up to the H1. |
| **Move the old headline down, don't delete it** | If the old `<h1>` still carries weight, demote it to a later section heading rather than cutting it. | D22: `Chronic doesn't mean unexplained.` H1 → §2 heading. |
| **Order offerings least-invasive → most-invasive** | Screening/observation → topical/field → in-office procedure → surgery → radiation. The intro frames the choice as "the plan follows the {condition}", not "the one thing we do". | D19: exam/dermoscopy → PDT/field → Mohs → Sensus SRT. |
| **Broaden a narrow candidacy block** | "Is {procedure} right for you?" becomes "How the choice gets made" — good-fit / better-fit-elsewhere, naming the *alternatives* by name, not {procedure}-only. | D19: "Is Mohs right for you?" → "How the choice gets made". |
| **Fix the hero eyebrow register** | The `Serious medicine. Natural results.` tagline is fine for general medical pages but wrong for some registers (it was wrong for oncology). Swap to the plain category label when the client says so — never Title Case, keep it sentence case / the 0.78rem uppercase eyebrow. | D19: tagline → `Skin cancer`. D22: eyebrow left unchanged. |
| **Tie "why here" to independence** | The "why choose us" block ends on the §12.3 / §7.2 independence argument ("the best treatment, not the most expensive one — because no one here has a target to hit"), tied to the home page "Who we answer to" block — not standalone rhetorical beats. State the benefit first; add the structural reason only if the reader would doubt it (§7.2). | D19: dropped the "kept a radiation unit / nobody upstream asked its margin" beat for the §12.3 line. |
| **Prune client-flagged lines** | Remove exactly what the client names, everywhere it appears (page + spec + any sub-page). Past cuts: P10 "Dr. Moinfar chose the dermatopathologist personally", P20 spouses-and-friends line (from specific pages), "a written plan you leave with", the Pediatric dermatology block. When you remove a `#anchor` block, retire the anchor in `content-spec.md` and `build-plan.md` too. | D19, D22. |

## 2 · Stay inside the fences (check every edited paragraph)

- Every claim traces to the **Proof Bank (§6)**. No superlatives (best, #1, leading,
  premier, only, last) — the one sanctioned "best" is the verbatim §12.3 independence
  clause. Describe **candidacy, not outcomes**; no cure-rate or result guarantees.
- **GLP-1 fence (§9.3):** never causally connect GLP-1 weight loss and EmSculpt Neo
  muscle building. No sarcopenia / frailty / falls / osteoporosis claims.
- **EmSculpt Neo is area-specific (§9.2):** fat-reduction = abdomen and thighs only;
  muscle = also buttocks, arms, calves. Never collapse the area table into identical
  bullets.
- **Reconstruction:** same surgeon, done here; **no timing** ("same-day", "next-day"
  are banned). Never publish a square-footage number. Never "complimentary" / "free".
- Providers are **Moinfar, Lander, Fee PA-C, Falahati PA-C**. Abdollahi is gone.
- SRT device = **Sensus SRT**. Dr. Lander's Mohs volume = **more than 1,000/yr** (D20).
- Voice (§8): calm, precise, numbers over adjectives, short declarative sentences.
  Banned: transform, journey, elevate, luxury, bespoke, pamper, indulge, cutting-edge,
  state-of-the-art, game-changer, revolutionary, glow up (full list §8.3).
- Brass `#A5854E` = Restore (Cosmetic + GLP-1 Restore) **only**. Evergreen `#1F3B32`
  everywhere else. Sentence case except the uppercase eyebrow. Prose max 60ch.

## 3 · Propagate to the reference docs

A page edit is not done until the docs match. For each change:

1. **`docs/content-spec.md`** — update the section's `## PAGE:` block: `H1`, `Meta`
   (title ~55 chars, description written for click-through), the numbered
   **Sections** list, **Proofs** used, **Honest limitation**, **Claims fence**,
   **Internal links**, and the **Drafted copy (D16)** prose beneath it. Retire any
   removed `#anchor` from every anchor list in the file.
2. **`docs/build-plan.md`** — update the section's task line if anchors or scope
   changed.
3. **`docs/reference/brand-positioning-v2.md`** — only if the change alters a
   *strategic fact* (e.g. the routine-access lead time, a pillar, a proof). If it
   does: **stop and confirm scope with the user first** (see box below), then update
   every place the fact appears (§1.x asymmetries, §12.x boilerplate, the proof
   bank) and note it.
4. **`docs/redirects.md`** — only if a URL changed (repositioning usually keeps URLs).

> **Contradiction guard.** If a requested change contradicts
> `brand-positioning-v2.md` or a logged decision (as "months out" → "weeks out" did
> in D22), do not ripple it silently. Ask the user whether it's page-scoped or a
> real sitewide change, then act on the answer and log it. Always flag doc changes
> in your reply.

## 4 · Log the decision

Add a dated row to the table in `docs/decisions.md`. Use the **next unused D-number**
(the log is not strictly sequential — check the highest number in use). Match the
D19 / D22 style: a **bold one-line summary**, then specifics (what moved, what was
cut, which docs were updated), then a `Rationale` column giving the client's reason.
If the change supersedes part of an earlier decision's rationale, say so and name
that decision — do not edit the old row.

## 5 · Verify

- [ ] `npm run build` passes.
- [ ] Exactly one `<h1>`; no skipped heading levels; unique `<title>` ~55 chars;
      unique meta description; canonical + OG tags; JSON-LD present
      (`MedicalProcedure` on treatment pages, `FAQPage` on FAQ blocks,
      `MedicalBusiness` sitewide).
- [ ] Descriptive `alt` on every meaningful image; missing images are labeled
      placeholder blocks, never stock.
- [ ] Internal links intact — every Restore page links to another Restore page and a
      provider bio.
- [ ] Run the finished page against the **§11.3 pre-publication checklist** in
      `brand-positioning-v2.md`.
- [ ] `content-spec.md`, `build-plan.md`, `decisions.md` all reflect the change.
- [ ] Reply to the user names every doc that changed.

Do **not** commit unless the user asks.

## Precedents

| Decision | Page | The reposition |
| --- | --- | --- |
| D19 (`4ec3e2a`) | `/skin-cancer/` | Led with Mohs → leads with early detection and the full range, ordered least-invasive → most. Eyebrow tagline → `Skin cancer`. "Why here" tied to §12.3 independence. Dropped P10 framing + P20 line from this page. |
| D22 | `/general-dermatology/` | "We look for the cause before we treat" moved from §2 body → H1; old H1 `Chronic doesn't mean unexplained.` demoted to §2 heading. Pediatric block removed (FAQ kept). "A written plan you leave with" removed. Routine wait "months" → "weeks" sitewide (superseded D18's rationale). |
