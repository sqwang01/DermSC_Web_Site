# 301 Redirect Map

**Status: PROVISIONAL.** Built from the old-site audit inventory only. Before launch, pull the full
list of indexed URLs from **Google Search Console** (Pages report + `site:dermsc.com`) and add any
ranking URL not covered below. Redirects are implemented in `vercel.json` and kept permanently.

Rule: redirect each old URL to the **closest equivalent new page with equal or greater depth** —
never to a thinner page, and never chain redirects.

| Old URL                              | New URL                    | Type | Notes                                                                                                                                                                                                |
| ------------------------------------ | -------------------------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                                  | `/`                        | —    | Home, unchanged path                                                                                                                                                                                 |
| `/cosmetic-dermatology-dana-point/`  | `/cosmetic/`               | 301  |                                                                                                                                                                                                      |
| `/cosmetic/injectables-and-laser/`   | `/cosmetic/`               | 301  | D24 — page split into seven single-modality pages (`/cosmetic/neuromodulators/`, `/fillers/`, `/collagen-stimulators/`, `/laser/`, `/thread-lift/`, `/chemical-peels/`, `/microneedling/`). Slug never shipped; redirect is hygiene. |
| `/cosmetic/restore-membership/`      | `/cosmetic/`               | 301  | D24 — Restore Membership program removed before launch (reverses D17). Slug never shipped; redirect is hygiene.                                                                                        |
| `/surgical-dermatology-92629/`       | `/skin-cancer/`            | 301  | Old page was Mohs-focused; destination covers Mohs + reconstruction                                                                                                                                  |
| `/skin-cancer-treatment-dana-point/` | `/skin-cancer/`            | 301  |                                                                                                                                                                                                      |
| `/coolsculpting/`                    | `/cosmetic/coolsculpting/` | 301  | Or `/cosmetic/body-contouring/` if CoolSculpting + EmSculpt Neo are combined                                                                                                                         |
| `/emsculpt-neo/`                     | `/cosmetic/emsculpt-neo/`  | 301  | **D6a — working default is to 301** (implemented in `vercel.json`). Reversible: to keep the literal path, move the page to `src/pages/emsculpt-neo/` and drop the two `/emsculpt-neo` redirect rules |
| `/contact/`                          | `/contact/`                | —    | Unchanged path                                                                                                                                                                                       |
| `/emsculpt-neo/` form submissions    | n/a                        | —    | Old lead-capture form pattern; not a URL to redirect                                                                                                                                                 |
| `store.dermsc.com/*`                 | —                          | —    | Out of scope. No redirects. External link only                                                                                                                                                       |

## To confirm from Search Console before launch

- [ ] Full indexed-URL list exported
- [ ] Any `/wp-content/` asset URLs with inbound links or ranking (usually ignore)
- [ ] Old blog/news posts, if any exist and aren't in the audit
- [ ] Trailing-slash consistency (Astro/Vercel: pick one and enforce sitewide)
- [x] `www` vs apex — **working default: `https://www.dermsc.com` is canonical** (set in
      `astro.config.mjs`, `Head.astro`, `robots.txt`). Apex → www 301 is configured in Vercel domain
      settings at cutover (add both domains, mark www primary), not in `vercel.json`. Flag for client
      confirmation — easy to flip to apex-canonical before launch.
