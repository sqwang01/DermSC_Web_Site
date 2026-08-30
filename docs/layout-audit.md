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

---

# Pass 2 — site-wide audit — 2026-08-30

Standard: `docs/reference/style-guide.md` §3–§5, §8 · `src/styles/tokens.css` ·
**locked homepage reference values** (Pass 1 table above).
Method: code audit of every remaining page + all shared components. Report only —
no edits in this pass. Fix in the section batches proposed at the end.

Scope covered: 4 section hubs (`general-dermatology`, `skin-cancer`, `cosmetic`,
`glp-1-restore`) · `RestoreTreatmentPage.astro` + `cosmetic/**` (10 sub-pages) ·
`about/index` + `about/[slug]` · `contact` · `join-us` · `privacy` ·
`accessibility` · `thank-you` · `404` · shared: `Header`, `Footer`, `Button`,
`Card`, `SectionBand`, `ProviderCard`, `Faq`, `CalloutClay`, `PlaceholderImage`,
`AlumniGallery`, `CallbackForm`, `StubNotice`, `Breadcrumbs`, `global.css`.

## Headline: this is one drift, copy-pasted

Nine section/utility pages plus `RestoreTreatmentPage` carry a near-identical
block of local `<style>` — `.section-title`, `.hero`, `.hero__cta`, `.band-prose`,
a locally-**redefined** `.prose`, `.team`, `.closing`, `.closing__cta`, `.more` —
and every copy has drifted from the locked homepage the same handful of ways.
Fixing this page-by-page would be 200+ edits; the right move is to lift the shared
constructs into `global.css` / tokens once (§3 of the skill: "flagged on 3+ pages
→ it becomes a token or a shared class"). The per-page findings tables below are
therefore short — they point at the systemic rows (S1–S15) rather than repeat them.

---

## Doc gaps — decide before the fix pass

| #   | Question | Options | Recommendation |
| --- | -------- | ------- | -------------- |
| G6  | **`--space-5` and `--space-10` are used but do not exist** in `tokens.css` (scale is 1/2/3/4/6/8/12/16/24). They resolve to an invalid value, so the browser drops the whole declaration and the gap collapses to 0. 9 call-sites: `glp-1-restore` ×5, `cosmetic/hair-restoration` ×2, `cosmetic/coolsculpting` ×1, `about/[slug]` ×1. | (a) snap each to the nearest real step (`--space-5`→`--space-4` or `--space-6`; `--space-10`→`--space-8` or `--space-12`) · (b) add `--space-5`/`--space-10` to the scale | **(a)**, snapping **down** to the smaller step in card-grid gaps (they should become `--space-6` under G5 anyway) and **up** (`--space-12`) for the section-ish margins. Adding steps breaks "nothing between steps" (§4) and D37's own rationale. Pure bug — no decision entry needed once you pick a direction. |
| G7  | **Canonical hero top treatment.** Three patterns in the wild: `padding-block: var(--space-12) var(--section-y)` (skin-cancer, cosmetic, glp-1-restore, join-us — no breadcrumb); `padding-block: var(--section-y)` + `.hero__copy{margin-top:var(--space-8)}` (RestoreTreatmentPage, cosmetic/** — breadcrumb in the band); plain `var(--section-y)` (homepage, general-dermatology). | (a) one rule: hero always `padding-block: var(--section-y)`; when a `<Breadcrumbs>` sits in the band it gets `margin-bottom: var(--space-8)` and the hero copy keeps full top padding · (b) keep the reduced-top variant for breadcrumb pages, standardise its value | **(a)** — it matches the locked homepage (no override at all) and removes the `.hero{padding-block}` re-declaration everywhere. Write into style-guide §4 "Hero". Ride on Pass 1 **H5**. |
| G8  | **Hero `.lede` needs a top margin.** On section pages `.hero .lede { margin-top: var(--space-4) }`; on `about/index`, `contact`, `thank-you`, `404` nothing sets it and the reset zeroes it, so `<h1>` and the lede render touching. | (a) `.lede` gets `margin-top: var(--space-4)` when it directly follows a heading, as a global rule · (b) each hero sets it locally (status quo, keeps missing pages broken) | **(a)** global `h1 + .lede, h2 + .lede { margin-top: var(--space-4) }` in `global.css`; delete the per-page `.hero .lede { margin-top }`. |
| G9  | **Hero `.lede` measure.** Section pages override `.hero .lede { max-width: 60ch }`, widening past the `.lede` token cap (`--wrap-lede` 54ch). | (a) drop the override, keep `--wrap-lede` · (b) heroes legitimately want 60ch → new `--wrap-hero` token | **(a)** — `.lede` already means 54ch (§3.3, "52–56ch on hero and lede"). The override is undocumented drift. |
| G10 | **"Hairline / border on a dark band" has no token.** `rgba(255,255,255,0.4)` (secondary button border on evergreen-deep, 6 files) and `rgba(255,255,255,0.16)` (Footer legal rule). Parallel to the `--paper-dim` gap G2 solved for text. | add `--line-on-dark` (and maybe `--line-on-dark-strong`) to §2 + tokens · leave as raw rgba | add **`--line-on-dark: rgba(255,255,255,0.22)`** (rule) — reconcile the two existing opacities to one. Decision entry (extends D37). |
| G11 | **List indent.** Raw `padding-left` on `<ul>/<ol>`: `1.1rem` (skin-cancer, glp-1 ×3, hair-restoration, cosmetic track), `1.4rem` (general-dermatology `.visit`, RestoreTreatmentPage `.steps`, hair-restoration `.steps`, `Faq` `dd`), `1.25rem` (`CalloutClay`), `1.9rem` (glp-1 `.familiar__checks`). Four values for one thing. | (a) one token `--list-indent` (recommend `1.25rem`) applied everywhere · (b) reuse `--space-6` (1.5rem) | **(a)** `--list-indent: 1.25rem` in tokens + a `.prose :is(ul,ol)` default in `global.css`; custom-marker lists (`.familiar__checks`) keep their own but from the token + `--space-*`. |
| G12 | **Uppercase table headers.** `emsculpt-neo` `.areas thead th` and `hair-restoration` `.billing thead th` are `text-transform: uppercase` at `--fs-small` (0.95rem) with eyebrow tracking. §3.3/§7: the 0.78rem eyebrow is the *only* permitted uppercase. | (a) switch table `<th>` to sentence case, weight 600, `--stone` · (b) sanction a table-header style = the eyebrow token exactly (0.78rem) and write it into §5 · (c) leave as-is (documented exception) | **(b)** — a data table wants a distinct header; make it the real eyebrow token and add one line to style-guide §5 "Tables". Decision entry. |
| G13 | **Form input text size.** `CallbackForm` inputs are `font-size: 1.0625rem` (17px) with a comment about iOS zoom. §5 Forms: "18px input text minimum." | (a) bump to `--fs-body` (18px) and accept iOS behaviour (18px ≥ 16px, iOS won't zoom anyway) · (b) sanction 17px for inputs in §5 | **(a)** — 16px is the iOS zoom threshold; 18px is already safe, so the workaround is unnecessary and it violates §5. Pure fix once confirmed. |
| G14 | **`Faq` `+ / –` disclosure marker is `--brass-deep`**, and `Faq` renders on non-Restore pages (`skin-cancer`, `general-dermatology`). CLAUDE.md rule 1 / style-guide §1: brass appears nowhere outside Restore. | (a) marker = `--evergreen` (or `--stone`) globally; keep it evergreen on every page · (b) marker = `--brass-deep` only when the page is Restore (needs a prop) · (c) sanction the brass marker sitewide in §5 | **(a)** — simplest, and it closes a real brass-fence leak. The marker carries no sub-brand meaning on a skin-cancer page. |

---

## S · Systemic findings (each spans 3+ files — fix once, in shared code)

| #   | What | Rule / locked value | Where | Fix | Severity |
| --- | ---- | ------------------- | ----- | --- | -------- |
| S1  | `--space-5` / `--space-10` undefined → declaration dropped, gap collapses to 0 | tokens.css scale; §4 "nothing between steps" | `glp-1-restore` :518,:522,:555,:559,:601,:602 · `cosmetic/hair-restoration` :364,:375 · `cosmetic/coolsculpting` :287 · `about/[slug]` :117 | G6: snap to real steps | **high** |
| S2  | Lopsided hero — media capped at `420px` in a `1fr` track, no `justify-self` (Pass 1 **H1**, still live off-homepage) | locked hero grid `1.3fr minmax(0,420px)`, `.hero__media{max-width:none}` ≥900px | `general-dermatology` :318–:326 (only other page with a hero media) | copy the locked homepage hero rules | **high** |
| S3  | `.prose` **redefined locally** with drifted values: section-opening `h2 { margin-bottom: var(--space-6) }` and `p + p { margin-top: var(--space-4) }` | locked: section-opening heading→content `--space-12`; stacked paragraphs `--space-6` (§4 fixed values) | `general-dermatology`, `skin-cancer`, `cosmetic/index`, `glp-1-restore`, `join-us`, `RestoreTreatmentPage`, `cosmetic/coolsculpting`, `cosmetic/emsculpt-neo`, `cosmetic/hair-restoration`, `about/index` | delete local `.prose{max-width}` + `.prose h2` + `.prose p+p`; rely on `global.css` `.prose`; where a block genuinely runs paragraphs at a different rhythm it is still `--space-6` | **med** |
| S4  | In-prose sub-heading `h3 { margin-bottom: var(--space-3) }` (and `--space-4` elsewhere) | locked: heading inside running prose → next block `--space-6` | `general-dermatology` `.treat__item h3`, `skin-cancer` `.range__item/.candidacy__col h3`, `RestoreTreatmentPage` `.offering h3`, `cosmetic/*` `.compare__item/.causes__item h3`, `glp-1-restore` `.track h3`, `cosmetic/index` `.menu-group__heading` | reconcile all to `--space-6` (via the shared `.prose` rule) | **med** |
| S5  | Card-grid `gap` is `--space-12` / `--space-8` / `--space-10` / `--space-4`, not the locked `--space-6` | locked: card-grid gap `--space-6`, every grid, any column count (§4 fixed values, G5→D37) | `.team` (general-dermatology, skin-cancer, about/index, cosmetic/index, RestoreTreatmentPage, cosmetic/**), `.treat`, `.range`, `.candidacy`, `.offerings`, `.compare`, `.causes`, `.familiar`, `.menu`, `AlumniGallery .ag` | set every card/provider grid to `gap: var(--space-6)`; two-column *layout* splits (bio aside, copy+media) are not card grids and keep `--space-12` | **med** |
| S6  | `.band-prose h2 { margin-bottom: var(--space-6) }` — evergreen-band section heading | locked `--space-12` (homepage `.band-prose h2` was reconciled to `--space-12` in Pass 1) | `skin-cancer` :404, `cosmetic/index` :254, `glp-1-restore` :568, `join-us` :240, `RestoreTreatmentPage` :309, `cosmetic/hair-restoration` :355 | `--space-12`, ideally by making `.band-prose` a `.prose` modifier (`.prose--on-dark`) so it inherits the rule | **med** |
| S7  | `.closing h2 { margin-bottom: var(--space-6) }` — closing-CTA section heading | locked `--space-12` (section-opening) | every section page + `RestoreTreatmentPage` + `cosmetic/**` + `join-us` + `about/index` `.team-intro h2` | `--space-12` | **med** |
| S8  | `max-width: NNch` literal instead of `var(--wrap-prose)` / `var(--wrap-lede)` | §3.3 measure; Pass 1 **H6** | ~90 call-sites: `60ch` everywhere; `54ch`/`52ch`/`56ch`→ lede; `44ch`/`46ch`/`42ch`/`48ch`/`40ch`/`28ch` sub-measures. Pages: all 4 hubs, RestoreTreatmentPage, all `cosmetic/**`, `about/*`, `join-us`; components `ProviderCard` 44ch, `CallbackForm` 52ch, `Footer` 62ch, `PlaceholderImage` 40ch, `AlumniGallery` 40ch, `StubNotice` 60ch | `60ch`→`--wrap-prose`; `52–56ch`→`--wrap-lede`; the small ones (`40–48ch`) → one new `--wrap-narrow` token (≈46ch) rather than 5 literals — **G-note**: needs a token add, propose `--wrap-narrow: 46ch` | **low** (values ≈ tokens; volume is the issue) |
| S9  | `.section-title { margin-bottom: var(--space-12) }` duplicated verbatim in 10 files | DRY; it is already consistent, just not shared | `index`, `skin-cancer`, `general-dermatology`, `cosmetic/index`, `glp-1-restore`, `join-us`, `cosmetic/coolsculpting`, `cosmetic/emsculpt-neo`, `cosmetic/hair-restoration`, `RestoreTreatmentPage` | move to `global.css`, delete the 10 copies | **low** |
| S10 | Secondary button on dark uses raw `rgba(255,255,255,0.4)` border; Footer legal rule uses `rgba(255,255,255,0.16)` | §2 palette-tokens-only; no "line on dark" token (G10) | `cosmetic/index`, `glp-1-restore`, `join-us`, `RestoreTreatmentPage`, `cosmetic/coolsculpting`, `cosmetic/emsculpt-neo` `.closing__cta :global(.btn--secondary)`; `Footer` `.site-footer__legal` | add `--line-on-dark`, replace all; ideally fold the dark-band secondary-button treatment into `Button.astro` so pages stop `:global()`-patching it | **low** |
| S11 | Raw list-indent `padding-left` (`1.1 / 1.25 / 1.4 / 1.9rem`) | §4 tokens-only; four values for one role | `skin-cancer` :391, `general-dermatology` :358, `glp-1-restore` :540,:614,:676, `cosmetic/hair-restoration` :336,:343, `RestoreTreatmentPage` :297, `CalloutClay` :36, `Faq` :104 | G11: `--list-indent` token + `.prose :is(ul,ol)` default | **low / med** |
| S12 | `.hero__copy { margin-top }` inconsistent: `var(--space-8)` (RestoreTreatmentPage, cosmetic/**), `0` (join-us), unset (others) | §4; no documented rule | as listed | falls out of G7 — with the standard hero there is no `.hero__copy` offset at all | **low** |
| S13 | Hero sub-line (`.hero__sub` / `.hero__hiring` / `.hero__tagline`) spacing varies: `--space-3` (glp-1-restore), `--space-6` (join-us), `margin: var(--space-4) 0 var(--space-6)` (homepage) | §4; Pass 1 **H2**-adjacent | `glp-1-restore` :500, `join-us` :213, `index` :199 | pick one sub-line rhythm (recommend `margin-top: var(--space-4)`, matching the lede) and document under style-guide §4 "Hero" | **low** |
| S14 | `.band-prose` is a parallel re-implementation of `.prose` (measure + `p+p` + heading spacing) on a dark band — Pass 1 **H9**, now confirmed on 6 more pages | DRY; §4 | every evergreen-band prose block | introduce `.prose--on-dark` (only override: link colour → `--paper`) and delete every `.band-prose` block | **med** |
| S15 | Two-column *content* blocks with a fixed-px cell and no `justify-self` (same family as S2 but not the hero): `320px` / `160px` / `240px` raw tracks | §1-A container; §4 tokens | `RestoreTreatmentPage` + `cosmetic/**` `.team` `320px`/`160px`; `about/[slug]` `.bio` `240px` | acceptable as a fixed sidebar width, but move the repeated `320px`/`240px` into a local `--aside-w` and confirm the cell fills or pins; not lopsided today because the copy cell is `1fr` and fills | **low** |

---

## Page-specific findings (not covered by S1–S15)

### src/pages/general-dermatology/index.astro
| #   | Location | Cat | What's wrong | Fix | Sev |
| --- | -------- | --- | ------------ | --- | --- |
| GD1 | :339 `.treat__item` | B | `scroll-margin-top: 6rem` raw (also in `global.css` `html`) | `var(--space-24)` (= 6rem) | low |
| GD2 | :318 `.hero__media` | A | `max-width: 420px` raw (rides S2) | token / `none` per locked hero | — |
| GD3 | hero | D·CTA | no eyebrow-less exception issue — it *has* the eyebrow; hero is fine once S2 lands | — | — |

### src/pages/skin-cancer/index.astro
| #   | Location | Cat | What's wrong | Fix | Sev |
| --- | -------- | --- | ------------ | --- | --- |
| SC1 | :394 `.candidacy__col li + li` `--space-3` vs `general-dermatology` `.visit li + li` `--space-4` | B | list-item spacing has two values site-wide | pick one (recommend `--space-3`) and apply to every `li + li` in a plain list | low |
| SC2 | :387 `.candidacy__col h3` `--space-4` vs :366 `.range__item h3` `--space-3` | B | two heading→content gaps on one page (rides S4) | `--space-6` both | — |
| SC3 | :312 `Button variant="secondary"` "Refer a patient" in the referring-physicians band, no primary anywhere in that section | D·CTA | acceptable — secondary audience, deliberate; **note only** | — | note |

### src/pages/cosmetic/index.astro
| #   | Location | Cat | What's wrong | Fix | Sev |
| --- | -------- | --- | ------------ | --- | --- |
| CO1 | :264 `.menu-group__heading` | C | re-declares the `h3` rule (display/size/lh/colour) on an element that **is** an `<h3>` | keep only `margin-bottom`; delete the font rules | med |
| CO2 | :282 `.menu__label` | C | `<span>` styled as an `<h3>` — card title look-alike (same family as Pass 1 **H12**) | make it `<h4>` (or `<h3>`) inside the card, drop the restyle | med |
| CO3 | :275 `.menu` `gap: var(--space-4)` | B | Restore-card grid gap (rides S5) → `--space-6` | — | — |

### src/pages/glp-1-restore/index.astro
| #   | Location | Cat | What's wrong | Fix | Sev |
| --- | -------- | --- | ------------ | --- | --- |
| GL1 | :550 `.familiar__checks li::before { color: var(--brass) }` | C | brass at **body size** — §2.2 says `--brass` fails as body text (3.12:1), use `--brass-deep`. (Restore page, so brass is allowed — wrong *shade*.) | `--brass-deep` | med |
| GL2 | :552 `.familiar__checks li::before { font-weight: 700 }` | C | 700 weight on a glyph; site rule is never bold the display face, body face tops out at 600 | `600` | low |
| GL3 | :670 `.prose h3 { margin: var(--space-8) 0 var(--space-4) }` | B | third in-prose-h3 rhythm on top of S4 | fold into shared `.prose` (`--space-12` top / `--space-6` bottom) | low |
| GL4 | :587 `.track > h2` — multiple `<h2>` per band with no band-level heading | SEO | not a skipped level (section uses `aria-label`), but verify the outline reads right | confirm during fix; likely fine | note |

### src/pages/about/index.astro
| #   | Location | Cat | What's wrong | Fix | Sev |
| --- | -------- | --- | ------------ | --- | --- |
| AB1 | :14–:21 hero | C·structure | `<h1>` + `.lede` with **no eyebrow** — §3.3 says every non-homepage hero runs eyebrow → h1 → lede | add `<span class="eyebrow">About</span>` | med |
| AB2 | :14 hero | D·CTA | page has **no CTA anywhere** (hero or closing) — partly because §7.5 body is still a `StubNotice` | add a closing CTA when the real content lands; **note for content pass** | note |
| AB3 | :15/:16 | B | `<h1>`→`.lede` flush (rides G8) | — | — |

### src/pages/contact/index.astro
| #   | Location | Cat | What's wrong | Fix | Sev |
| --- | -------- | --- | ------------ | --- | --- |
| CT1 | :15 hero | C·structure | no eyebrow (rides AB1 / §3.3) | `<span class="eyebrow">Contact</span>` | med |
| CT2 | :26 `.contact__aside h2` "Visit" | B | no `margin-bottom` set — inconsistent with the `--space-12` section-heading rule (though it's a sub-panel heading, arguably `--space-6`) | decide sub-panel heading = `--space-6`; apply | low |
| CT3 | :64 `.contact__aside address { line-height: 1.7 }` | C | raw line-height (also `Footer` :108) — nearest token `--lh-body` 1.65 | `var(--lh-body)` or add `--lh-loose` | low |

### src/pages/thank-you/index.astro · src/pages/404.astro
| #   | Location | Cat | What's wrong | Fix | Sev |
| --- | -------- | --- | ------------ | --- | --- |
| TY1 | both, hero | B | `<h1>`→`.lede` flush (rides G8) | global `h1 + .lede` margin | med |
| TY2 | `404` :19 two buttons incl. `variant="primary"` "Home"; `thank-you` one `secondary` | D·CTA | fine — one primary max per region | — | ok |

### src/pages/about/[slug].astro
| #   | Location | Cat | What's wrong | Fix | Sev |
| --- | -------- | --- | ------------ | --- | --- |
| BS1 | :117 `.bio__cta { margin-top: var(--space-10) }` | B | undefined token (rides S1) → collapses to 0; the CTA butts the paragraph above | `--space-12` | high |
| BS2 | :96/:107/:121 `240px` ×3 | B | raw px aside width, repeated | local `--aside-w: 240px` | low |
| BS3 | hero | C | name as `<h1>`, no eyebrow — plausibly a sanctioned bio exception (the credential line acts as the kicker) | confirm under G-note; likely leave | note |

### Utility: privacy / accessibility
Clean. Both use the global `.prose` unstyled, full breadcrumb trail, no local `<style>`. Only nit: `<h1>`→`.prose` first-child gap relies on nothing (rides G8, minor as there's no lede).

---

## Shared components

| #   | Component | Location | What's wrong | Fix | Sev |
| --- | --------- | -------- | ------------ | --- | --- |
| C1  | `Button.astro` | :34 | `padding: 0.9rem 1.6rem` non-token (Pass 1 flagged) | `--btn-pad-y`/`--btn-pad-x` tokens, or `var(--space-3) var(--space-6)` | med |
| C2  | `Button.astro` | :36 | `border: 1.5px` non-token | `--border-hair` width (1px) or a `--btn-border` token | low |
| C3  | `Button.astro` | :83–84 | `#6a5330` restore-hover hex | add `--brass-deepest` (or reuse `--evergreen-deep`-style naming) to tokens | low |
| C4  | `Header.astro` | :113 `min-height: 76px`, :135 `margin-top: 2px`, :241 `font-size: 1.05rem`, :131 `font-size: 0.7rem` + `letter-spacing: 0.14em` | non-token spacing/size/tracking | tokens; the `.wordmark__place` line is an eyebrow — use `--fs-eyebrow` + `--tracking-eyebrow` | med |
| C5  | `Header.astro` | :127 `.wordmark__name { letter-spacing: -0.01em }` | §3.3 **forbids letter-spacing on the display face** | delete the declaration | med |
| C6  | `Header.astro` | :187/:200 `min-height: 44px` on `.header-cta` and `.nav-mobile summary` | §5 buttons ≥ 52px | either raise to `--control-min-h`, or write the compact-chrome exception into style-guide §5 (**doc gap** — carried from Pass 1, still unresolved) | med |
| C7  | `Faq.astro` | :57 `.faq__heading { margin-bottom: var(--space-8) }` | section-opening heading → locked `--space-12` | `--space-12` | low |
| C8  | `Faq.astro` | :104 `dd { padding-left: calc(1.4rem + var(--space-4)) }`, :108 `dd p + p { margin-top: var(--space-4) }`, :88 `summary::before { font-size: 1.4rem }` | raw `1.4rem` (S11); paragraph rhythm should be `--space-6` | tokens; `--space-6` | low |
| C9  | `Faq.astro` | :89 `summary::before { color: var(--brass-deep) }` | brass on non-Restore pages (G14) | `--evergreen` | **high** (brass fence) |
| C10 | `ProviderCard.astro` | :80 `max-width: 44ch` | measure literal (S8) | `--wrap-narrow` | low |
| C11 | `CallbackForm.astro` | :152 `font-size: 1.0625rem` (17px) | §5 "18px input text minimum" (G13) | `--fs-body` | med |
| C12 | `CallbackForm.astro` | :151 `padding: 0.75rem 0.9rem`, :109 `max-width: 52ch`, :154 `border: 1px solid var(--stone)` | `0.9rem` off-scale; measure literal; `--stone` used as a border (it's a text token, §2.1 says borders are `--line`) | `var(--space-3)` pad; `--wrap-lede`; keep a visible field border but from a border token, not `--stone` (**doc-gap-ish** — form fields need 3:1, `--line` may be too faint) | med |
| C13 | `CallbackForm.astro` | :100 `.cbf { max-width: 40rem }` | raw rem container width | acceptable, or `--wrap-form` token | low |
| C14 | `AlumniGallery.astro` | :112 `.ag { gap: var(--space-12) }`, :146 `font-size: 1.75rem`, :175 `max-width: 40ch`, :174 `border-left: 2px` | grid gap (S5); raw font-size; measure literal; 2px accent border (cards use 1px — same Q as Pass 1 **H11**) | `--space-6`; token/`--fs-h3`; `--wrap-narrow`; 1px | low |
| C15 | `PlaceholderImage.astro` | :48 `max-width: 40ch`, :46 `line-height: 1.5` | measure + line-height literals | `--wrap-narrow`; `--lh-lede` | low |
| C16 | `StubNotice.astro` | :21 `max-width: 60ch` | measure literal | `--wrap-prose` | low |
| C17 | `CalloutClay.astro` | :36 `padding-left: 1.25rem` on the `<ul>` | raw list indent (S11) | `--list-indent` | low |
| C18 | `Breadcrumbs.astro` | :117 `font-size: 1.5em` on `.crumbs__chevron` | raw em size (deliberate — scales the chevron); low risk | leave or note | note |

---

## Summary

**~55 distinct findings, 15 systemic.** The high-severity ones:

1. **S1 / BS1 — `--space-5` and `--space-10` don't exist.** 10 call-sites where a
   margin or grid gap silently collapses to zero. Visible cramping on
   `glp-1-restore`, `hair-restoration`, `coolsculpting`, and every provider bio's
   CTA. Bug, not a judgement call — needs only a direction to snap (G6).
2. **S2 — the lopsided hero (Pass 1 H1) is still live on `general-dermatology`.**
   Same fix as the locked homepage; it's the only other page with a hero media.
3. **C9 / G14 — brass leak.** The `Faq` disclosure marker is `--brass-deep` and
   `Faq` renders on `skin-cancer` and `general-dermatology`. CLAUDE.md rule 1.

Everything else is three themes, all the same root cause — **a hero + prose +
closing style block was copy-pasted into ~10 files and each copy drifted**:
(a) section-opening headings and card-grid gaps that don't match the values
locked in Pass 1 (`--space-12` / `--space-6`); (b) `max-width` and `padding-left`
as raw literals instead of tokens (~120 call-sites, values mostly already
*equal* the token); (c) `.prose` / `.band-prose` re-implemented locally instead
of used from `global.css`.

**Blocked until answered:** G6 (snap direction for the dead tokens), G7 (hero top
padding), G10 (`--line-on-dark` token), G11 (`--list-indent` token), G12 (table-
header uppercase — decision entry), G13 (form input size), G14 (Faq brass). G8/G9
are pure conformance once G7 is set. S8's small-measure cluster wants one new
`--wrap-narrow` token (call it out with G-answers).

## Proposed fix batches (each is a stop-and-review unit)

| Batch | Contents | Depends on |
| ----- | -------- | ---------- |
| **B1 · shared foundation** | Resolve G6–G14. Add tokens (`--line-on-dark`, `--list-indent`, `--wrap-narrow`, `--brass-deepest`, button-padding). Move `.section-title` + a canonical `.hero` + `.prose--on-dark` + `h*+.lede` rule into `global.css`. Update style-guide §2/§4/§5 + `tokens.css`; log **D38** (tokens/line-on-dark, extends D37), **D39** (table-header eyebrow), **D40** (Faq marker de-brassed) — or fold into one entry. | your answers to G6–G14 |
| **B2 · section hubs** | `general-dermatology` (incl. S2 hero), `skin-cancer`, `cosmetic/index`, `glp-1-restore` (incl. S1, GL1) — delete the drifted local blocks, adopt B1's shared classes, snap dead tokens, S8 measure swaps. Run §1-E diff vs locked homepage. | B1 |
| **B3 · Restore treatment pages** | `RestoreTreatmentPage.astro` + the 3 bespoke `cosmetic/**` pages (`coolsculpting`, `emsculpt-neo`, `hair-restoration`) + spot-check the 7 layout-driven ones. Same operations as B2. | B1 |
| **B4 · about / contact / utility** | `about/index` (AB1 eyebrow), `about/[slug]` (BS1), `contact` (CT1), `thank-you`, `404`, `privacy`, `accessibility`. Mostly G8 + eyebrow + token swaps. | B1 |
| **B5 · shared components** | `Button`, `Header` (C4/C5, and C6 pending its doc-gap answer), `Faq`, `CallbackForm`, `ProviderCard`, `AlumniGallery`, `PlaceholderImage`, `StubNotice`, `CalloutClay`. | B1 |
| **B6 · verify** | `npm run build`; Prettier `--check` on touched files only; re-grep the S1/S8/S10/S11 counts; §1-E diff every page vs locked homepage; SEO baseline on any page whose markup changed (eyebrow spans, `<h4>` menu labels). | B2–B5 |

**Then stop.** Nothing is edited yet. Approve the G-answers and the batch plan (or
adjust), and B1 goes first.

---

## Pass 2 — applied 2026-08-30

**Decisions taken** (all recommendations, client-approved): G6 snap `--space-5`→
`--space-6` / `--space-10`→`--space-12` (grid gaps → `--space-6`); G7 hero never
re-declares `padding-block`; G8 global `:is(h1,h2)+.lede` / `.hero__sub+.lede` →
`--space-4`; G9 drop the `.hero .lede` 60ch widen; G10 `--line-on-dark`; G11
`--list-indent`; G12 table `<th>` = eyebrow token; G13 form inputs = `--fs-body`;
G14 Faq marker = `--evergreen`. Logged **D38** (one entry, folds in the table-
header and Faq-marker rules).

**B1 — shared foundation.** `tokens.css`: `--brass-deepest`, `--line-on-dark`,
`--wrap-narrow`, `--list-indent`. `global.css`: `.section-title`, `.hero__cta`,
`.closing` / `.closing__cta` (+ the evergreen-band secondary-button treatment),
`.team` (grid, `gap: var(--space-6)`), `.prose :is(ul,ol)` indent + `> li + li`,
`.prose > h2:first-child + *` → `--space-12` (the "section-opening prose heading"
variant Pass 1 H9 was waiting on), `.prose--on-dark`, `:is(h1,h2)+.lede` /
`.hero__sub+.lede` gap, `.hero .crumbs` gap. `style-guide.md` §2/§3.3/§4/§5.
`Button.astro`: restore-hover hex → token; `padding` → `var(--space-4)
var(--space-6)`; `border` `1.5px` → `1px`.

**B2 — section hubs.** `general-dermatology` (incl. the S2 lopsided-hero fix —
now matches the locked homepage `1.3fr minmax(0,420px)`), `skin-cancer`,
`cosmetic/index` (incl. CO1 `.menu-group__heading` de-dupe, CO2 `.menu__label`
→ real `<h4>`), `glp-1-restore` (incl. S1 dead tokens, GL1 `.familiar__checks`
brass → `--brass-deep`, GL2 700 → 600). All local `.hero{padding-block}`,
`.section-title`, `.band-prose`, redefined `.prose`, and `NNch`/`--space-10`
literals removed.

**B3 — Restore treatment pages.** `RestoreTreatmentPage.astro` (fixes the 7
layout-driven `cosmetic/**` pages, which carry no local `<style>`), plus the 3
bespoke pages `coolsculpting`, `emsculpt-neo`, `hair-restoration`. Table `<th>`
(`emsculpt-neo`, `hair-restoration`) → `--fs-eyebrow` + `--border-hair`.

**B4 — about / contact / join-us / utility.** `about/index` + `contact` gain the
eyebrow label (§3.3). `about/[slug]` `--space-10` → `--space-12`, `240px` → local
`--aside-w`. `contact` address line-height → `--lh-body`, `.contact__aside h2`
gap. `join-us` drifted block removed. `thank-you` / `404` / `privacy` /
`accessibility` fixed for free by the global `h1+.lede` rule.

**B5 — shared components.** `Faq` (heading gap `--space-12`, marker `--evergreen`,
`dd` rhythm `--space-6`, indent tokenised), `Footer` (`--line-on-dark`,
`--wrap-prose`), `Header` (`.wordmark__name` letter-spacing removed §3.3;
`.wordmark__place` → eyebrow tokens; 44px chrome commented as the §5 exception;
`1.05rem` → `--fs-body`; `0.6rem` → `--space-2`), `ProviderCard`, `CallbackForm`
(input `--fs-body`, padding tokens, note measure), `AlumniGallery` (grid gap
`--space-6`, `1.75rem` → `--fs-h3`, `2px` → `1px`, measure), `PlaceholderImage`,
`StubNotice`, `CalloutClay`.

**Homepage (Pass 1 deferred rows, now cleared):** H5 (`.hero{padding-block}`
removed), H6 (`52/54/46ch` → tokens; `28ch` tagline left — the §3.3 exception
element), H9 (`.band-prose` → `.prose prose--on-dark`; the new
`.prose>h2:first-child+*` rule keeps its heading→content gap at `--space-12`),
H10 (`line-height: 1.6` → `--lh-body`). Redundant local `.hero__cta` removed.

### Reference values — updated 2026-08-30 (Pass 2)

| Construct | Value | Where it lives now |
| --- | --- | --- |
| Section-opening heading → first content | `var(--space-12)` | `global.css` `.section-title` + `.prose > h2:first-child + *` |
| Heading inside running prose → next block | `var(--space-6)` | `global.css` `.prose > * + *` |
| Card / provider grid gap | `var(--space-6)` | `global.css` `.team`; per-page card grids set it explicitly |
| Stacked paragraphs / list `li + li` | `var(--space-6)` / `var(--space-3)` | `global.css` `.prose` |
| Hero band vertical padding | `var(--section-y)`, from `.section` — never overridden | `SectionBand` |
| Heading / sub-line → lede | `var(--space-4)` | `global.css` `:is(h1,h2)+.lede`, `.hero__sub+.lede` |
| Breadcrumb in hero band → copy | `var(--space-8)` | `global.css` `.hero .crumbs` |
| Evergreen-band prose | `.prose prose--on-dark` (link → `--paper`) | `global.css` |
| Closing CTA block | `.closing` (`--wrap-prose`), `.closing h2` (`--space-12`), `.closing__cta` | `global.css` |
| List indent | `var(--list-indent)` (1.25rem) | `global.css` `.prose :is(ul,ol)`; `--list-indent` token |
| Muted text on dark / hairline on dark | `var(--paper-dim)` / `var(--line-on-dark)` | tokens |
| Narrow measure (captions, notes) | `var(--wrap-narrow)` (46ch) | token |
| Table `<th>` | eyebrow token (`--fs-eyebrow`, `--tracking-eyebrow`, uppercase, `--stone`) | per-table; style-guide §3.3 |

### Verify

- `npm run build` → `astro check` **0 errors / 0 warnings / 0 hints**, build passes.
- Prettier `--check`: `tokens.css`, `global.css`, all 10 touched components,
  `RestoreTreatmentPage.astro`, `index.astro` — **clean**. The 11 page files that
  fail were **already failing at `HEAD`** (pre-existing prose/JSX line-wrap, not
  in any edited `<style>` block); `npm run format` deliberately **not** run.
- Re-grep: `--space-5`/`--space-10` = **0**; `band-prose` = **0**; raw `rgba(` =
  **0**; raw hex outside tokens = **1** (`Head.astro` `<meta theme-color>`, which
  can't take a CSS var); `NNch` literals = **1** (`index.astro` `.hero__tagline`
  `28ch`, the §3.3 exception element); raw-rem list indents = **0**; per-page
  `.section-title` / `.hero{padding-block}` = **0**.
- §1-E: every card/provider grid = `--space-6`; the remaining `--space-12`/`8`
  gaps are content-layout splits (bio aside, location, footer columns, `.team`
  card+note) and the header flex row — not card grids.

### Left for a client call (not fixed — flagged, as Pass 1 framed them)

| Ref | Item | Why deferred |
| --- | --- | --- |
| H11 | `index.astro` `.story` `border-left: 3px solid var(--line)` — one-off 3px neutral accent; every other bordered block is 1px | Visible design choice, not a token bug — needs a yes/no |
| H12 | `index.astro` `.door__headline` / `.story__mark`, and `cosmetic/index` `.menu__line` — `<p>`s styled like an `<h3>` (token-based, no magic numbers; purely a semantics question) | Changing to real headings shifts the doc outline — wants a call. `.menu__label` was done (→ `<h4>`) because it's a card title under a group heading; the others are looser |
| C12 | `CallbackForm` input border is `--stone` (a text token) not `--line` | `--line` on white fails the 3:1 form-control contrast floor; keeping `--stone` is defensible. A `--field-border` token would be the clean fix |
| — | `index.astro` `.hero__tagline` `max-width: 28ch` | The §3.3 homepage-hero exception element. Could become `--wrap-tagline`; needs a token add |
| — | Eyebrow label → `<h1>` sits flush (no gap) on **every** hero | Consistent site-wide, so not a drift — but if a small gap is wanted it's a one-line global rule |
| — | `Button` `border: 1px` (was `1.5px`) and `padding: var(--space-4) var(--space-6)` (was `0.9rem 1.6rem`) | Changed to conform; visually near-identical but worth an eyeball in the running app — one-line revert if the heavier outline was intentional |
