# Build Plan — Advanced Dermatology website

**Start:** 2026-08-28 · **Launch target:** ~2026-09-25 (4 weeks) · **Build env:** VS Code + Claude Code
**Deploy:** GitHub → Vercel (Pro). DNS points at Vercel at cutover; MX records preserved; registrar
move to Cloudflare optional, later.

---

## Constraints / givens

- Static Astro site, vanilla CSS tokens, self-hosted fonts.
- Design system is locked (see `docs/reference/style-guide.md`). This document does not override it.
- Content governance is strict (see `docs/reference/brand-positioning-v2.md` §6/§8/§9).
- Photography not ready → build type-forward, use labeled placeholder blocks, swap later.
- Old dermsc.com has no content worth migrating verbatim — write fresh to `docs/content-spec.md`.
- Callback-request forms only. No PHI collected. No "complimentary/free" language.
- No review count / review widget anywhere until the count clears 250 (style guide rule #9).

---

## Phase 1 — Foundation + approved content spec (Week 1)

- [x] Astro scaffolded — TypeScript strict, `output: 'static'`, `trailingSlash: 'always'`, Prettier.
      Astro 7.2.9 (bumped from 5 to clear XSS advisories). `@astrojs/sitemap` wired.
- [ ] `git init`, push to private GitHub repo, connect Vercel project (preview deploys on PR)
      — needs client GitHub/Vercel access
- [x] Design tokens → `src/styles/tokens.css` (colours, 18px scale, spacing steps, 3px radius, focus,
      motion) — mirrors style-guide.md
- [~] Self-host fonts: `@font-face` + preloads + metric-matched fallbacks in place; **WOFF2 files not
  yet added** — drop into `public/fonts/` per that folder's README, then re-measure overrides
- [x] Base layout, skip-link, `<head>` component (title/meta/canonical/OG/JSON-LD, MedicalBusiness
      sitewide + per-page schema slot)
- [x] Global CSS: 60ch prose measure, 2.5px brass focus outline @ 3px offset, `prefers-reduced-motion`
- [x] Components: Header (brass nav marker, `<details>` mobile menu, sticky call / Restore consult
      bar), Footer (evergreen-deep, NAP, no review count), Button (primary/secondary/restore),
      Card (+ Restore top-rule), SectionBand, ProviderCard, Faq (native `<details>` + FAQPage JSON-LD),
      Breadcrumbs (+ BreadcrumbList), PlaceholderImage, CalloutClay, CallbackForm, StubNotice
- [x] Scroll reveal: single fade-and-rise, IntersectionObserver, once, honours reduced-motion via tokens
- [x] `/api/callback.js` Vercel function — honeypot + rate limit + Resend; JSON for fetch, 303 for no-JS
- [x] `vercel.json` — 301 map from `redirects.md` (incl. `/emsculpt-neo/` → `/cosmetic/emsculpt-neo/`,
      D6a working default) + security headers. `robots.txt` with sitemap line.
- [x] All routes scaffolded and building (20 pages, `npm run build` clean); Home built to spec,
      others carry a visible StubNotice
- [ ] **Deliverable: `docs/content-spec.md` filled for all pages, approved by client** — 3 pages
      specced, ~12 outlined; drafting next (D16)
- [x] `docs/redirects.md` drafted from audit inventory; marked provisional pending GSC URL list

## Phase 2 — Core pages (Week 2)

- [x] Home `/` — built to the content-spec (hero, four doors, independence §12.3, restraint §12.4,
      providers, patient-story slot, location). Needs: real photos, "three providers" / "two PAs"
      wording check against current staff, client copy proof.
- [ ] About `/about/` (independence explainer §7.5, the team, the building, careers stub)
- [ ] Provider bios: `/about/dr-maryam-moinfar/`, `/dr-jeffrey-lander/`, `/madeline-fee-pa-c/`,
      `/shylie-falahati-pa-c/` (`Physician` schema each)
- [ ] Contact `/contact/` — callback form + map embed + NAP + hours
- [ ] Callback serverless function on Vercel (`/api/callback`) → Resend → `derm@dermsc.com`;
      spam honeypot + rate limit; success/error states in brand voice
- [ ] General Dermatology `/general-dermatology/` (pillar: Accuracy) — **one long-form page, no
      condition sub-pages at launch (D18).** Conditions fold in as a grouped, anchor-linked
      "What we treat" section (`#acne`, `#inflammatory-skin`, `#rashes-hives`, `#infections-growths`,
      `#hair-scalp-nails`, `#pediatric`, `#skin-exams`), 2–4 sentences each. Drafted copy is in
      `content-spec.md` → General dermatology → "Drafted copy (D16)".
- [ ] Skin Cancer `/skin-cancer/` (pillar: Depth; Mohs, next-day reconstruction, Sensus SRT,
      PDT/field, surveillance) + Referring Physicians section/anchor

## Phase 3 — Restore pages (Week 3, brass sub-brand)

- [x] Cosmetic hub `/cosmetic/` (pillar: Restraint) — built D17 from `content-spec.md` → Cosmetic hub
      → "Drafted copy (D16)"; §7.6 sentences 2 + 4 verbatim, §12.8 + §12.10 verbatim, FAQPage schema.
- [x] `/cosmetic/hair-restoration/` (distinct audience; cross-linked from GLP-1 Restore) — built D17;
      diagnosis-first (§7.4), billing split table (§9.4, ⚠️ pending counsel), post-chemo section kept
      medical (§8.5), PRP diagnosis-dependent. Drafted copy in `content-spec.md`; pending client proof.
- [x] `/cosmetic/emsculpt-neo/` and `/cosmetic/coolsculpting/` — built D17 as two pages. EmSculpt Neo
      area-specific table rendered as a real `<table>` (§9.2); GLP-1 adjacency only, no causal
      connector (§9.3). CoolSculpting names PAH honestly. "FDA-cleared" throughout.
- [x] `/cosmetic/injectables-and-laser/` (Botox/tox, fillers, laser, peels, microneedling) — built D17;
      candidacy language only, no percentages/promises; §7.6 sentence 5 verbatim; laser device names
      still TODO(client).
- [x] `/cosmetic/restore-membership/` — built D17 against **placeholder pricing (D17)**, marked
      provisional on-page; no VIP/club/loyalty framing; pricing stated as plain figures (no "free"
      months); §12.6 verbatim. Refund/cancellation policy page still TODO(client).
- [x] GLP-1 Restore `/glp-1-restore/` — cleared booklet copy ported (hair/skin/muscle, what-to-expect
      timelines, first-visit, 9 FAQs, Moinfar pull-quote). **One page, three split-ready track
      modules** (`#hair` / `#skin` / `#muscle`), each a self-contained `<article>` that lifts out
      whole if promoted to sub-pages later — see `content-spec.md` → GLP-1 Restore → "Structure
      decision". Drafted copy in `content-spec.md`; pending client proof (§11.3).
- [x] EmSculpt Neo area-specific claims table rendered intact (not five identical bullets)
- [x] Cross-linking pass: every Restore page → 1 other Restore page + 1 provider bio (hub → 5 sub-pages
      + Moinfar bio; each sub-page → ≥1 sibling + Moinfar bio/card)

## Phase 4 — SEO, QA, launch (Week 4)

- [ ] Per-page `<title>`, meta description, canonical, OG image
- [ ] JSON-LD: `MedicalBusiness` (full NAP, geo, hours, sameAs), `Physician` ×4,
      `MedicalProcedure` on treatment pages, `FAQPage` on FAQ blocks
- [ ] `@astrojs/sitemap`, `robots.txt` with sitemap line
- [ ] Redirects implemented in `vercel.json` from `docs/redirects.md`
- [ ] Lighthouse mobile ≥ 95 across the board; Core Web Vitals green
- [ ] axe / accessibility pass (AA), keyboard-only pass, screen-reader spot check, 18px + contrast verify
- [ ] §11.3 pre-publication checklist run against every page (no brackets, no 🔒 leaks, no banned
      words, next-day reconstruction, one H1, NAP match, reads aloud calmly)
- [ ] Plausible/Fathom installed; Google Search Console verified; sitemap submitted
- [ ] Final content proof by client
- [ ] DNS cutover: A/CNAME → Vercel, TTL lowered 24h prior, **MX untouched**, verify SSL
- [ ] Post-launch: confirm 301s resolve, submit new sitemap in GSC, watch Search Console coverage

---

## Post-launch backlog (Phase 2+)

Deferred deliberately — not launch blockers. Tracked here so they aren't lost.

- [ ] **Condition education hub** (D18; the CMS hub anticipated in D1). Promote the folded-in
      General Dermatology condition blocks into their own pages once **(a)** medical access has
      improved enough to want the traffic (§1.1 Asymmetry 3 / §13 — the medical funnel is
      throttled on purpose at launch) and **(b)** a headless CMS is in place. Candidate first
      set: acne, eczema, psoriasis, rosacea. Each page = physician-voiced long-form, full §9
      claims pass, `MedicalCondition` + `MedicalWebPage` schema. Map each `#anchor` → the new URL
      with a 301 (add to `redirects.md`), and keep the General Dermatology §4 section as the hub
      intro that links out to every condition page.
    - Internal-linking pass when built: General Dermatology → each condition page; each condition
      page → General Dermatology + the relevant provider bio + Skin cancer wherever a
      "changing spot" note appears.

- [ ] **GLP-1 Restore track sub-pages** (optional; only if demand warrants). Promote the three
      split-ready modules on `/glp-1-restore/` to `/glp-1-restore/hair/`, `/skin/`, `/muscle/`.
      Additive, no destructive redirects: `/glp-1-restore/` becomes a hub, add a GLP-1 sub-nav,
      give each sub-page its own title/meta/OG + schema subset, repoint the anchor links (from
      `/cosmetic/hair-restoration/`, `/cosmetic/emsculpt-neo/`, `/cosmetic/`, Dr. Moinfar's bio),
      add the three URLs to the sitemap. Each `<article class="track">` module already lifts out
      whole. Rationale + checklist: `content-spec.md` → GLP-1 Restore → "Structure decision".

---

## Open items / needed from client

- [ ] GitHub org/account + Vercel account access (or invite the build)
- [ ] Google Business Profile access — confirm exact NAP string, suite number if any, hours
- [ ] Search Console access — export the list of currently-indexed URLs to finalize `redirects.md`
- [ ] Existing analytics history (if any) — for a "before" baseline
- [ ] Decision: keep literal `/emsculpt-neo/` path, or 301 it to `/cosmetic/emsculpt-neo/`
- [x] Who writes page copy — **Claude Code drafts to spec** (D16); client reviews before publish
- [ ] Any real photos available now (building exterior tight crop, exam rooms, 4 provider headshots)
- [x] Restore Membership — building against **placeholder pricing** (D17); client confirms final number/inclusions before launch
- [ ] Confirm fax number, hours, parking/access details for Contact page + schema

## Definition of done (per page)

Traces every claim to a proof · zero bracket placeholders · nothing 🔒 leaked · banned words absent ·
one H1, clean heading order · title + meta + canonical + JSON-LD present · internal links in place ·
alt text on images · passes axe AA · NAP matches GBP · reads correctly aloud in a calm voice.
