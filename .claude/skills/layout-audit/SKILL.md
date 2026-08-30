---
name: layout-audit
description: >-
  Systematically sweep the site for spacing, alignment, vertical-rhythm, typography,
  and CTA-placement problems, measured against docs/reference/style-guide.md and
  src/styles/tokens.css — produce a written findings report first, then apply the
  fixes the user approves. Use when the client says the site looks "uneven", "off
  to one side", "not centered", "cramped", "lopsided", when fonts / paragraphs /
  buttons "aren't spaced right" or "in the wrong place", or asks to "polish",
  "tighten", "clean up the spacing", or "go through the site" for layout.
---

# Layout audit — spacing, alignment, rhythm, type, CTAs

A conformance pass. The style guide and the token file are the law; this skill finds
every place the built pages drift from them and every place the same construct is
built two different ways. It **does not redesign** — no new visual direction, no
new components. It closes the gap between what's built and what's already written down.

Method for this skill (set with the client):

- **Code audit only.** Read the `.astro` files, `src/styles/`, and the components.
  Do not run a dev server or take screenshots.
- **Report first, fix on approval.** One pass writes `docs/layout-audit.md`; the
  user reviews it; a second pass applies the approved rows.
- **`style-guide.md` as-is is the authority.** `src/styles/tokens.css` mirrors it.
  Where the two disagree, the style guide wins and the token file is the bug.
- **Homepage first.** Audit and fix `src/pages/index.astro` in full, lock its
  values as the reference, then measure every other page's equivalent construct
  against the locked homepage.

---

## 0 · Load the standard

Read, in this order, before looking at any page:

1. `CLAUDE.md` — the non-negotiable design rules (the numbered list) and the
   per-page SEO baseline.
2. `docs/reference/style-guide.md` — **§3 Typography** (the scale, and "§3.3 Rules
   that matter more than the scale": measure, sentence case, no display tracking),
   **§4 Spacing & layout** (the container, the gutter, the section rhythm, the
   nine-step spacing scale — _"nothing between steps"_), **§5 Component rules**
   (buttons ≥ 52px, one primary per region, cards, focus), **§8 the do-not list**.
3. `src/styles/tokens.css` — every value the pages are supposed to be spending.
4. `src/styles/global.css` — the shared primitives: `.wrap`, `.section`,
   `.prose` (`> * + *` → `--space-6`; `h2/h3` → `--space-12`), `.lede`, `.eyebrow`,
   `.stat`, the heading rules, focus.
5. `src/components/SectionBand.astro`, `Button.astro`, `Card.astro`,
   `ProviderCard.astro` — how a section, a CTA, and a card are _supposed_ to be
   assembled.

From these, write the **conformance checklist** (§1) as the yardstick. Do not
audit from memory — quote the token or the rule in each finding.

---

## 1 · The conformance checklist

Every finding cites one of these. If a page can't be made to conform without a
decision the docs don't currently answer (a missing token, a sanctioned
exception, an alignment rule never written down), that's a **§4 doc gap** — stop
and ask the user, don't guess.

### A · Container & alignment _(this is the "aligned to the right / lopsided" bucket)_

| Check                                                                         | Conform =                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Section wrapper                                                               | Every band renders through `SectionBand` (or a `.wrap`). No content sitting at the viewport edge; no element re-declaring `max-width`/`margin-inline:auto`/`padding-inline` that `.wrap` already provides; no `.section` + `padding-block: var(--section-y)` applied twice to the same element (`.hero` does this in `index.astro`).                                                                                                                      |
| Horizontal padding                                                            | One system: `--gutter`. No page hard-codes its own side padding.                                                                                                                                                                                                                                                                                                                                                                                          |
| Two-column splits (`.hero__grid`, `.location`, any copy+media row)            | The media cell must not leave a lopsided gutter. An `<img>`/placeholder with a fixed `max-width` **smaller than its grid track and no `justify-self`** floats to the track's start and the section reads as pushed to one side. Fix: let the media fill its track, or pin it with `justify-self` on the same edge on every page, or size the track to the media. Set `align-items` deliberately (usually `center` or `start`, the same choice site-wide). |
| Narrow content blocks (`.prose`, `.band-prose`, `.lede`, hero copy, `.story`) | Alignment is **consistent site-wide**. The house rule: narrow blocks sit at the wrap's left edge (left-aligned, not centered). A block that centers itself (`margin-inline:auto` at a sub-wrap `max-width`) is a finding unless centering is an established, repeated pattern for that element on every page. Whatever the rule, it must not change page to page.                                                                                         |
| Text alignment                                                                | Body and prose are left-aligned. Never `justify`, never centered paragraphs. Centered text only where it's a deliberate, repeated treatment (e.g. a standalone CTA row) — and then the same everywhere.                                                                                                                                                                                                                                                   |
| Single-column (mobile)                                                        | When a 2-col split stacks, the media and the copy align on the same left edge. A fixed-px media block that left-aligns while copy runs full-width reads as misaligned — make it full-width or match the copy measure.                                                                                                                                                                                                                                     |
| Grid gutters                                                                  | Card grids fill the wrap; the grid itself isn't offset.                                                                                                                                                                                                                                                                                                                                                                                                   |

### B · Spacing & vertical rhythm _(tokens only — "nothing between steps")_

| Check                   | Conform =                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Every spacing value     | `margin`, `padding`, `gap`, `inset`, `top/right/bottom/left`, `scroll-*` use a token: `--space-1..24` (`0.25 / 0.5 / 0.75 / 1 / 1.5 / 2 / 3 / 4 / 6rem`), or `--section-y`, or `--gutter`. **Raw `rem`/`px` spacing is a finding** — e.g. `padding: 0.9rem 1.6rem` (Button), `padding-left: 1.1rem / 1.4rem / 1.9rem` (list indents across section pages), `margin-top: 2px`, `min-height: 76px`. If a needed value isn't on the scale, that's a §4 doc gap — ask; don't invent an in-between. |
| Section → first element | The gap from the top of a band to its heading, and from that heading to the first content, is **one pair of values site-wide**. Today `index.astro` has `.section-title { margin-bottom: var(--space-12) }` but `.band-prose h2 { margin-bottom: var(--space-6) }` — reconcile against `.prose` in `global.css` (intro/section heading → content = `--space-12`; heading _inside_ running prose → next block = `--space-6`).                                                                   |
| Stacked paragraphs      | Use the `.prose > * + *` / `p + p` pattern with **one** value (`--space-6`). No section re-inventing paragraph spacing with a different number.                                                                                                                                                                                                                                                                                                                                                |
| Card-grid `gap`         | One value per grid role, chosen once. `index.astro` ships doors at `--space-6` and providers at `--space-12` — pick the intended card-grid gap and apply it to both (and to card grids on the other pages).                                                                                                                                                                                                                                                                                    |
| CTA groups              | `.hero__cta`, `.location__cta`, closing-CTA rows: same top margin and same internal `gap` everywhere.                                                                                                                                                                                                                                                                                                                                                                                          |
| Whitespace bias         | Style guide §4: "when a section feels sparse, it is probably correct." Do not close gaps that are deliberately generous — only the ones that are _inconsistent_ with the same construct elsewhere.                                                                                                                                                                                                                                                                                             |

### C · Typography

| Check                         | Conform =                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Base size                     | 18px (`--fs-body`) intact. No component resets to a non-token size.                                                                                                                                                                                                                                                                                                                                        |
| Real headings vs. look-alikes | Heading-looking text uses `<h1>/<h2>/<h3>` or a documented class (`.eyebrow`, `.lede`, `.stat`). Ad-hoc restyles — `.hero__tagline`, `.door__headline`, `.story__mark` re-deriving an h3; `.door__kicker` re-deriving `.eyebrow` line for line — are findings: use the shared class/element, or if the role is genuinely distinct give it a **token-based** rule, never magic numbers.                     |
| Measure                       | Prose capped at `var(--wrap-prose)` (60ch); hero/lede at `var(--wrap-lede)` (54ch). Raw `max-width: 60ch` / `54ch` / `52ch` / `46ch` / `44ch` / `28ch` literals are findings — replace with the token. A genuinely new measure needs a new token + a §4 doc gap note, not a bare literal.                                                                                                                  |
| Line-height / tracking        | From tokens (`--lh-*`, `--tracking-*`). **No `letter-spacing` on the display face** (flag `letter-spacing: -0.01em` on `.wordmark__name`). No letter-spacing literals outside the eyebrow/button tokens.                                                                                                                                                                                                   |
| Case                          | Sentence case everywhere. The eyebrow label (`--fs-eyebrow`, `--tracking-eyebrow`, uppercase) is the _only_ uppercase. Flag Title Case and any other `text-transform: uppercase`.                                                                                                                                                                                                                          |
| Wrapping                      | Headings keep `text-wrap: balance`; `p`/`li` keep `text-wrap: pretty` (both from `global.css`). Flag overrides.                                                                                                                                                                                                                                                                                            |
| Text colour                   | Palette tokens only (`--ink`, `--stone`, `--evergreen`, `--brass-deep`, `--paper`). **Raw hex is a finding** — `#cdd8d0` recurs 8× for muted text on evergreen (`index.astro`, `Footer.astro`, `glp-1-restore`). There is no token for "muted on dark" — that's a §4 doc gap: propose adding one (e.g. `--paper-dim`) to the style guide + tokens, then use it. `#6a5330` (Button restore hover) likewise. |

### D · Components & CTAs

| Check                    | Conform =                                                                                                                                                                                                                                                                                                                                      |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Button height            | `min-height: var(--control-min-h)` (52px). Flag `.header-cta` and `.nav-mobile summary` at `44px`. If the compact header bar is a real exception, it must be **written into style-guide.md §5** — until then it's a finding.                                                                                                                   |
| One primary per region   | Scan each section for more than one `variant="primary"` / `.btn--primary`. Hero pair = one primary + one secondary is correct.                                                                                                                                                                                                                 |
| Button internals         | Padding, border-width, radius from tokens. `.btn { padding: 0.9rem 1.6rem; border: 1.5px }` — reconcile to tokens or add `--btn-pad-*` (§4 doc gap).                                                                                                                                                                                           |
| CTA coverage & placement | Hero carries the primary action; long pages carry a mid-page CTA at the first natural decision point (precedent **D36** on `/general-dermatology/`, and `/skin-cancer/`); every page ends on a closing CTA. Flag a page that runs many sections with no clickable action, and flag a CTA that sits mid-paragraph rather than as its own block. |
| Brass fence              | Restore pages (`/cosmetic/**`, `/glp-1-restore/`) — primary CTA is `variant="restore"`, brass only as the card top-rule / rules / borders, never a fill bigger than a button. Non-Restore pages — **no brass at all**. This is CLAUDE.md rule 1; treat any leak as high severity.                                                              |
| Cards                    | `--paper` on `--page`/`--fog`, `1px var(--line)`, no shadow, radius ≤ 3px. Restore cards add exactly the `3px var(--brass)` top rule and nothing else.                                                                                                                                                                                         |
| Focus                    | The global `:focus-visible` brass outline is intact. Any `outline: none` / `outline: 0` without a replacement ring is a finding.                                                                                                                                                                                                               |

### E · Cross-page consistency (after the homepage is locked)

For every other page, diff each construct against the locked homepage values:
hero (eyebrow → h1 → lede → sub → CTA spacing and measures), section intro
(heading size + margin-bottom), running prose block (measure + paragraph rhythm),
card grid (gap + card padding), CTA row (margin + gap). Any deviation that isn't
a deliberate, explainable difference is a finding.

---

## 2 · The audit pass — write `docs/layout-audit.md`

Do not edit any page in this pass. Produce the report.

Order of work: **`src/pages/index.astro` first and in full**, then the four section
hubs (`general-dermatology`, `skin-cancer`, `cosmetic`, `glp-1-restore`), then the
`cosmetic/**` sub-pages and `RestoreTreatmentPage.astro`, then `about/` +
`about/[slug].astro`, then `contact/`, then the utility pages (`privacy`,
`accessibility`, `thank-you`, `join-us`, `404`). Shared offenders live in
`src/components/**`, `src/layouts/**`, `src/styles/**` — audit those once and note
which pages inherit each issue.

Fast first sweep (grep, then read for context — never fix off a grep alone):

```
# raw spacing (exclude anything already using a token)
grep -rnE '(margin|padding|gap|inset|top|right|bottom|left|min-height|scroll-[a-z-]+)[^;{]*:[^;]*-?[0-9.]+(px|rem)' src --include=*.astro --include=*.css | grep -v 'var('
# raw hex outside the token file
grep -rnE '#[0-9a-fA-F]{3,8}' src --include=*.astro --include=*.css | grep -v 'tokens.css'
# measure literals that should be tokens
grep -rnE 'max-width:[^;]*[0-9]+ch' src --include=*.astro --include=*.css | grep -v 'tokens.css'
# alignment / centering to eyeball
grep -rnE 'margin-inline:\s*auto|margin:\s*0 auto|justify-self|justify-items|text-align:\s*(center|justify)|align-items' src --include=*.astro --include=*.css
# focus removal
grep -rnE 'outline:\s*(none|0)' src --include=*.astro --include=*.css
# CTA density per file
grep -rn 'btn--primary\|variant="primary"' src/pages
```

Report format — a table, findings grouped by page, homepage block at the top:

```markdown
# Layout audit — <date>

Standard: docs/reference/style-guide.md §3–§5, §8 · src/styles/tokens.css
Method: code audit, homepage first. Fix on approval.

## Doc gaps needing a decision before fixes

<!-- missing tokens, unwritten alignment rules, possible sanctioned exceptions -->

| #   | Question | Options | Recommendation |
| --- | -------- | ------- | -------------- |
| G1  | …        | …       | …              |

## src/pages/index.astro (reference page — fix first, then lock)

| #   | Location                         | Category      | What's wrong                                                                                                 | Rule                                             | Proposed fix                                                             | Severity |
| --- | -------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------------------------------ | -------- |
| H1  | index.astro:186 `.hero__grid`    | A · alignment | media track is 1fr, image capped at 420px, no justify-self → hero reads pushed left/right depending on width | style-guide §4 layout; homepage is the reference | size the media track to `minmax(0, 420px)` and set `align-items: center` | high     |
| H2  | index.astro:197 `.hero__tagline` | C · type      | `max-width: 28ch` literal + re-derived h3                                                                    | §3.2 scale, §3.3 measure                         | use `<p class="lede">` or `--wrap-lede`; drop the ad-hoc font rule       | med      |
| …   |                                  |               |                                                                                                              |                                                  |                                                                          |          |

## src/components/… (shared — affects: <pages>)

| … |
```

Severity: **high** = visible misalignment / broken rhythm / a CLAUDE.md numbered
rule (brass leak, sub-16 base, Title Case, >1 primary); **med** = token drift with
a small but real visual effect; **low** = code hygiene, no visible change, but it's
how the next drift creeps in.

End the report with a one-paragraph summary: how many findings, the top three
themes, and anything that can't be fixed until a doc gap is answered.

**Then stop.** Present the report path and the doc-gap questions. Wait for the
user to approve rows / answer gaps.

---

## 3 · The fix pass

Only after approval. Work the approved rows.

1. **Homepage first.** Apply every approved `index.astro` finding. Where a fix is a
   value the whole site should share, put it in `tokens.css` / `global.css` /
   the component, not in the page's `<style>`. Re-read the rendered structure and
   confirm the homepage now conforms end to end. **Lock these values** — note them
   at the top of `docs/layout-audit.md` under "Reference values (locked <date>)".
2. **Shared primitives next.** Fix `src/components/**`, `src/layouts/**`,
   `src/styles/**` so every page inherits the correction. If the same literal was
   flagged on **3+ pages**, it becomes a token or a shared class here — don't
   patch it page by page.
3. **Remaining pages**, in the §2 order. For each, apply its approved rows _and_
   run the §1-E diff against the locked homepage; fix any construct that doesn't
   match.
4. Keep each edit minimal and in the surrounding style. No renamed classes, no
   restructured markup beyond what a finding calls for, no drive-by content edits
   (this skill doesn't touch copy — if you spot a copy/claims problem, note it for
   the user, don't fix it here).

---

## 4 · Resolve doc gaps → style guide + decision log

If the audit surfaced a gap the docs don't answer (a needed value off the spacing
scale, a "muted on dark" colour with no token, whether the 44px header bar is
sanctioned, whether narrow blocks center or left-align):

1. Get the user's call on it (the §2 doc-gap table is where you asked).
2. Update **`docs/reference/style-guide.md`** — the real section (§3 / §4 / §5) —
   with the resolved rule, and add a dated note.
3. Update **`src/styles/tokens.css`** (and `global.css` if a shared class changes)
   to match.
4. Log it in **`docs/decisions.md`**: next unused D-number (**D37** was the first
   `layout-audit` entry — check the file for the current highest before you
   write), dated, bold one-line summary, then what changed and every file touched,
   then the rationale (the user's reason). If it reverses part of an earlier
   decision's rationale, name that decision — don't edit the old row. Add the row
   by hand in the existing single-line style; do not reformat the table.
5. Flag every doc change in your reply.

A pure conformance fix (page was already wrong against an existing rule) needs
**no** decision entry — just fix it.

---

## 5 · Verify

- [ ] `npm run build` passes (`astro check && astro build`).
- [ ] Prettier clean **on the files you changed only** —
      `npx prettier --check <file> <file> …`. **Never run `npm run format` or
      `prettier --write` across the repo:** `HEAD` is not prettier-clean (many
      committed files fail `--check`), so a repo-wide write reformats 20+ files
      you did not touch and buries the real change. If a file you edited fails
      `--check` only because of pre-existing unformatted lines you did not touch,
      leave it — match the surrounding style by hand instead.
- [ ] Re-grep from §2 — the raw-value / raw-hex / `ch`-literal counts are down to
      the ones the user explicitly deferred.
- [ ] Homepage conforms to §1 A–D end to end; its locked values are recorded in
      `docs/layout-audit.md`.
- [ ] Every other page's hero / section-intro / prose / card-grid / CTA-row
      matches the locked homepage (§1-E), or the difference is explained.
- [ ] SEO baseline still intact on any page whose markup changed: one `<h1>`, no
      skipped heading levels, JSON-LD present (CLAUDE.md).
- [ ] `style-guide.md`, `tokens.css`, `decisions.md` updated for any doc gap that
      was resolved; reply names every doc changed.
- [ ] `docs/layout-audit.md` updated — approved rows marked done, deferred rows
      kept with a note. Ask the user whether to keep the file as a record or
      delete it.

Do **not** commit unless the user asks.

---

## Known offenders (starting map — verify, don't trust blind)

| Where                                                                                              | Issue                                                                                                                | Bucket      |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ----------- |
| `index.astro:186` `.hero__grid` / `:210` `.hero__media`                                            | media capped at 420px in a 1fr track, no `justify-self`; `align-items: center` but no track sizing → off-centre hero | A           |
| `index.astro:183` `.hero`                                                                          | `padding-block: var(--section-y)` on top of `.section` from `SectionBand`                                            | A / B       |
| `index.astro` `.section-title` vs `.band-prose h2`                                                 | `--space-12` vs `--space-6` heading-to-content                                                                       | B           |
| `index.astro` doors `--space-6` vs providers `--space-12`                                          | inconsistent card-grid gap                                                                                           | B           |
| `index.astro:197/202/291/297/333` etc.                                                             | `28ch / 52ch / 60ch / 54ch / 46ch` literals instead of `--wrap-prose` / `--wrap-lede`                                | C           |
| `.door__kicker`, `.hero__tagline`, `.door__headline`, `.story__mark`                               | re-derive `.eyebrow` / h3 with magic numbers                                                                         | C           |
| `#cdd8d0` — `index.astro:328/332`, `Footer.astro` ×4, `glp-1-restore:720`                          | untokenised "muted on dark" text colour                                                                              | C / doc gap |
| `Button.astro:34`                                                                                  | `padding: 0.9rem 1.6rem`, `border: 1.5px` — non-token                                                                | B / doc gap |
| `Button.astro:83-84` `#6a5330`                                                                     | untokenised restore-hover colour                                                                                     | C           |
| `Header.astro:187/200`                                                                             | `min-height: 44px` buttons vs 52px rule                                                                              | D / doc gap |
| `Header.astro:135` `margin-top: 2px`, `:113` `min-height: 76px`                                    | non-token                                                                                                            | B           |
| `.wordmark__name` `letter-spacing: -0.01em`                                                        | tracking on the display face (§3.3 forbids it)                                                                       | C           |
| `skin-cancer / general-dermatology / glp-1-restore / cosmetic/**` list blocks                      | `padding-left: 1.1rem / 1.4rem / 1.9rem` — non-token, and three different values for the same thing                  | B           |
| `ProviderCard.astro:80`, `CallbackForm.astro:109`, `Footer.astro:152`, `PlaceholderImage.astro:48` | `44ch / 52ch / 62ch / 40ch` measure literals                                                                         | C           |
