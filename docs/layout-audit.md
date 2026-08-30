# Layout audit — 2026-08-30

Standard: `docs/reference/style-guide.md` §3–§5, §8 · `src/styles/tokens.css`
Method: code audit, homepage first, fix on approval.
Scope of this pass: **`src/pages/index.astro`** (+ the shared primitives its sections touch).

---

## Pass 1 — applied 2026-08-30

**Decisions taken** (client approved recommendations):

- **G1** → keep the home-page hero as-is; documented as an exception in `style-guide.md` §3.3.
- **G2** → `--paper-dim` `#CDD8D0` added to `style-guide.md` §2 (+ §2.1, §2.2 with
  measured ratios) and `src/styles/tokens.css`; all 7 raw `#cdd8d0` hexes replaced
  (`index.astro` ×2, `Footer.astro` ×4, `glp-1-restore/index.astro` ×1). Logged **D37**.
- **G4** → section-opening heading → content = `--space-12`; prose-internal heading =
  `--space-6`. Written into `style-guide.md` §4 "Vertical rhythm".
- **G5** → card-grid gap = `--space-6` for every grid. Written into §4.

**Findings fixed:** H1, H2, H3, H4, H7, H8.
**Deferred to the site-wide pass** (low severity, no visible change): H5, H6, H10, H11, H12.
**Deferred with reason:** H9 — merging `.band-prose` into `.prose` conflicts with the
G4 decision (`.prose` gives a heading→body gap of `--space-6`, G4 wants `--space-12`
for a section-opening heading). Revisit when a `.prose` section-opening variant exists.

### Reference values — locked 2026-08-30 (measure every other page's hero/rhythm against these)

| Construct | Value |
| --- | --- |
| Hero grid (≥900px) | `grid-template-columns: 1.3fr minmax(0, 420px)`; `gap: var(--space-24)`; `align-items: center` |
| Hero media (stacked) | `max-width: var(--wrap-lede)`, left edge |
| Section-opening heading → first content | `var(--space-12)` |
| Heading inside running prose → next block | `var(--space-6)` |
| Card-grid gap (any column count) | `var(--space-6)` |
| Stacked paragraphs | `var(--space-6)` via `> * + *` |
| Muted text on evergreen bands | `var(--paper-dim)` |
| Eyebrow / kicker | shared `.eyebrow` class — never re-declared inline |

Build: `astro check` 0/0/0, `astro build` clean. Prettier `--check` clean on the
files this pass edited (`index.astro`, `Footer.astro`, `tokens.css`). The repo's
`HEAD` is not prettier-clean, so `npm run format` is **not** run here — it would
reformat 20+ untouched files.

> Process note: the first attempt at this pass ran `npm run format` (repo-wide),
> which reformatted ~25 files beyond scope. That was reverted; the in-progress
> `D36` work in `content-spec.md` / `decisions.md` / `general-dermatology` /
> `skin-cancer` and the separate `glp-1-restore` track-CTA work were re-applied by
> hand. The `layout-audit` skill's verify step was corrected to scope Prettier to
> touched files only.

---

## Doc gaps — decide these before the fix pass

These can't be fixed by "make it match the rule" because the docs don't currently
state the rule. Homepage is about to be locked as the reference for every other
page, so G1 in particular needs an answer.

| #   | Question                                                                                                                                                                                                                                                      | Options                                                                                              | Recommendation                                                                                                                                                   |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| G1  | The homepage hero has **no eyebrow label** and uses a display-face `.hero__tagline` (Newsreader, h3 size) where the section pages put `<p class="lede">` under the h1. Deliberate reference design, or normalise the hero to eyebrow → h1 → lede → sub → CTA? | (a) keep as-is, document it as the homepage exception · (b) normalise to the section-page hero shape | (a) — the homepage leading with just the h1 is defensible; but write the exception into style-guide §3 so the next page doesn't copy it by accident              |
| G2  | There is **no palette token for muted text on a dark band.** `#cdd8d0` is hard-coded 8× site-wide (2× here: `.location__hours`, `.location__parking`).                                                                                                        | add `--paper-dim` to §2 + `tokens.css` and replace all 8 · or reuse an existing token                | add `--paper-dim: #cdd8d0` (measured contrast on `--evergreen-deep` = 8.9, AAA). Logs as a decision (D37).                                                       |
| G3  | `.hero__tagline` caps at `28ch` and `.location__parking` at `46ch` — neither is a measure token (`--wrap-prose` 60ch, `--wrap-lede` 54ch).                                                                                                                    | snap both to `--wrap-lede` · add new tokens · leave the tagline tight on purpose                     | snap `.location__parking` → `--wrap-prose`; keep the tagline deliberately short but move `28ch` into a named token (`--wrap-tagline`) so it's not a bare literal |
| G4  | What is the **canonical gap from a section-intro heading to its first content**? The homepage uses three values: `--space-12` (`.section-title`), `--space-6` (`.band-prose h2`), `--space-6` (`.location__nap` top).                                         | `--space-12` everywhere · `--space-8` · keep two tiers                                               | `--space-12` for a section-opening heading; `--space-6` only for a heading _inside_ running prose (matches `.prose` in `global.css`)                             |
| G5  | One **card-grid gap** for the whole site, or per density? Homepage ships doors at `--space-6` and providers at `--space-12`.                                                                                                                                  | `--space-6` for all card grids · `--space-8` · keep per-grid                                         | `--space-6` for all card grids; the 4-up providers row reads fine at `--space-6` and it stops the page having two rhythms                                        |

---

## src/pages/index.astro (reference page — fix first, then lock)

| #   | Location                                                                                                                                | Category      | What's wrong                                                                                                                                                                                                                                                                                                                            | Rule                                             | Proposed fix                                                                                                                                                                                                                  | Severity |
| --- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| H1  | `index.astro:186` `.hero__grid`, `:210` `.hero__media`                                                                                  | A · alignment | At ≥900px the grid is `1.3fr 1fr` but the media is `max-width: 420px` with **no `justify-self`**. The 1fr track resolves to ~490px, the image sits at its start, and ~70px of dead space is left against the page's right edge — the whole hero reads as shoved left / lopsided. **This is the "aligned more to the right" complaint.** | style-guide §4 layout; homepage is the reference | size the media track to the image: `grid-template-columns: 1.3fr minmax(0, 420px)`, drop `.hero__media { max-width }`, let the image be `width: 100%` of its track. Hero copy and media then meet the two wrap edges cleanly. | **high** |
| H2  | `index.astro:264` `.band-prose h2` (`--space-6`) vs `:178` `.section-title` (`--space-12`) vs `:320` `.location__nap` top (`--space-6`) | B · rhythm    | Three different section-heading → content gaps on one page.                                                                                                                                                                                                                                                                             | §4 "one pair of values site-wide"; see G4        | once G4 is set (rec: `--space-12`), apply it to `.band-prose h2` and `.location__nap`                                                                                                                                         | med      |
| H3  | `index.astro:223` `.doors` gap `--space-6` vs `:277` `.providers` gap `--space-12`                                                      | B · rhythm    | Two card grids, two gaps.                                                                                                                                                                                                                                                                                                               | §4; see G5                                       | set both to the G5 value (rec: `--space-6`); also `.providers__note` margin-top → same as chosen gap or `--space-12` intro rule                                                                                               | med      |
| H4  | `index.astro:230-239` `.door__kicker`                                                                                                   | C · type      | Re-declares `.eyebrow` from `global.css` property-for-property (family, size, weight, tracking, uppercase, colour, display) plus `margin-bottom`. If `.eyebrow` ever changes, the doors silently drift.                                                                                                                                 | §3.3; DRY the shared class                       | use `<span class="eyebrow">` and keep only `.door__kicker { margin-bottom: var(--space-3) }` (or drop the wrapper class)                                                                                                      | med      |
| H5  | `index.astro:183-185` `.hero`                                                                                                           | A · container | `padding-block: var(--section-y)` re-set on an element that already gets it from `.section` (via `SectionBand`). Redundant, and it's the "fighting the wrapper" smell.                                                                                                                                                                  | §4 container                                     | delete the `.hero { padding-block }` rule                                                                                                                                                                                     | low      |
| H6  | `index.astro:202` `.hero__sub` `52ch`; `:262` `.band-prose` `60ch`; `:291` `.providers__note` `60ch`; `:297` `.story` `54ch`            | C · measure   | Measure literals that map exactly to existing tokens.                                                                                                                                                                                                                                                                                   | §3.3 measure                                     | `52ch`/`54ch` → `var(--wrap-lede)`, `60ch` → `var(--wrap-prose)`                                                                                                                                                              | low      |
| H7  | `index.astro:328,332` `.location__hours`, `.location__parking`                                                                          | C · colour    | `color: #cdd8d0` — raw hex, no token.                                                                                                                                                                                                                                                                                                   | §2 palette-tokens-only; see G2                   | replace with `var(--paper-dim)` once added                                                                                                                                                                                    | med      |
| H8  | `index.astro:210-212` `.hero__media` in the stacked (<900px) layout                                                                     | A · mobile    | Below the breakpoint the grid is one column but the media stays capped at `420px` and left-aligns while `.hero__copy` runs the full container — the two blocks don't share an edge on tablet widths.                                                                                                                                    | §1-A single-column rule                          | in the single-column state let the media be `width: 100%` (cap returns only at ≥900px via the track in H1), or `max-width: 480px; margin-inline: 0` and accept the left edge                                                  | med      |
| H9  | `index.astro:261-272` `.band-prose`                                                                                                     | B / C         | Parallel re-implementation of `global.css` `.prose` (measure + `p + p` spacing + heading spacing) with a different h2 gap.                                                                                                                                                                                                              | DRY; §4                                          | use `class="prose"` on the block and add only `.band-prose__link { color: var(--paper) }` (or a `.prose--on-dark` modifier); removes H2's `.band-prose h2` deviation for free                                                 | med      |
| H10 | `index.astro:319` `.location__nap` `line-height: 1.6`                                                                                   | C · type      | Raw line-height literal; the scale has `--lh-*` tokens.                                                                                                                                                                                                                                                                                 | §3.2                                             | `var(--lh-lede)` (1.55) or add the intended token                                                                                                                                                                             | low      |
| H11 | `index.astro:298` `.story` `border-left: 3px solid var(--line)`                                                                         | D · component | One-off 3px accent border. Not forbidden (it's neutral, not brass) but nothing else on the site marks a block this way — cards use 1px.                                                                                                                                                                                                 | §5 cards / consistency                           | keep if intentional; otherwise `1px` to match every other bordered block. Flag for a call.                                                                                                                                    | low      |
| H12 | `index.astro:240-246` `.door__headline`, `:301-306` `.story__mark`                                                                      | C · type      | `<p>` elements styled to look like `<h3>` (display face, `--fs-h3`, evergreen). The door titles are genuine card headings sitting under the section `<h2>`.                                                                                                                                                                             | §3.2; heading semantics                          | make them real `<h3>` and delete the restyle (values already equal the global `h3` rule). `.story__mark` is a pull-quote-ish lead — either `<h3>` or leave as a `<p>` but name the role.                                      | low      |

---

## Shared primitives touched by the homepage hero (note only — fix in the site-wide pass)

| Where                       | Issue                                                                                                        | Bucket |
| --------------------------- | ------------------------------------------------------------------------------------------------------------ | ------ |
| `PlaceholderImage.astro:48` | `.ph__mark { max-width: 40ch }` measure literal                                                              | C      |
| `SectionBand.astro`         | fine — `.wrap` + `.section` are the correct primitives; the homepage just needs to stop overriding them (H5) | —      |
| `Button.astro:34`           | `.btn { padding: 0.9rem 1.6rem; border: 1.5px }` non-token — affects the hero CTAs but is a global fix       | B      |

---

## Summary

**12 findings on the homepage, one of them high.** H1 is the actual cause of the
"page looks shoved right" report: the hero's media column is wider than the image
it holds and nothing pins the image to the outer edge. The rest cluster into three
themes: (1) **inconsistent vertical rhythm** — section-heading→content gap takes
three values (H2), card grids take two gaps (H3); (2) **measure & colour as raw
literals instead of tokens** — `28/46/52/54/60ch`, `#cdd8d0` (H6, H7, H10); (3)
**shared constructs re-implemented inline** — `.door__kicker` copies `.eyebrow`
(H4), `.band-prose` copies `.prose` (H9), `<p>`s dressed as headings (H12).

Blocked until answered: **G1** (is the homepage hero shape the reference or an
exception?), **G2** (`--paper-dim` token + D37), **G4/G5** (canonical heading gap
and card-grid gap). G3 rides along with H6.
