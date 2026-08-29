# Advanced Dermatology — website

Marketing site for Advanced Dermatology, Dana Point, CA. Astro, static output, vanilla CSS tokens.

## Getting started

```bash
nvm use            # Node 22
npm install
npm run dev        # http://localhost:4321
```

If `npm install` prints an `allow-scripts` warning, run `npm approve-scripts esbuild` once, then
`npm install` again (esbuild needs its postinstall to fetch a platform binary).

## Commands

| Command           | Does                                                        |
| ----------------- | ----------------------------------------------------------- |
| `npm run dev`     | Local dev server with HMR                                   |
| `npm run build`   | `astro check` (type-check) then production build to `dist/` |
| `npm run preview` | Serve the production build locally                          |
| `npm run format`  | Prettier write across the repo                              |

## Layout

```
api/callback.js        Vercel serverless function — callback form → Resend → derm@dermsc.com
src/
  data/site.ts         NAP, navigation, providers, CTA strings (single source of truth)
  styles/tokens.css    Design tokens (mirrors docs/reference/style-guide.md)
  styles/global.css    Reset, base type, focus, motion, prose, @font-face
  layouts/BaseLayout.astro
  components/           Head, Header, Footer, Button, Card, SectionBand, ProviderCard,
                       Faq, Breadcrumbs, PlaceholderImage, CalloutClay, CallbackForm, StubNotice
  pages/               One file per route; trailing-slash enforced
public/fonts/          Drop self-hosted WOFF2 here — see public/fonts/README.md
vercel.json            301 redirect map + security headers
```

## Planning docs

`CLAUDE.md` and everything under `docs/` govern the build. Start with `docs/build-plan.md` for
phase/status and `docs/content-spec.md` for per-page specs. Locked decisions are in
`docs/decisions.md` — don't relitigate them without a change request.

## Deploy

GitHub → Vercel (Pro), auto-deploy from `main`, preview deploys per PR. Set env vars in the Vercel
project: `RESEND_API_KEY`, optionally `CALLBACK_TO` / `CALLBACK_FROM`. Add both `dermsc.com` and
`www.dermsc.com` as domains with **www** primary so the apex 301s to it. **Preserve MX records** at
DNS cutover.

## Status

Phase 1 (foundation) in place. Home is built to spec; other routes are scaffolded stubs carrying a
visible in-progress notice until their `docs/content-spec.md` copy is written.
