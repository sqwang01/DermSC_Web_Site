# Self-hosted fonts

Drop the WOFF2 files here with these exact names (referenced from `src/styles/global.css`):

| File | Family | Weight | Style |
|---|---|---|---|
| `newsreader-light.woff2` | Newsreader | 300 | normal |
| `newsreader-light-italic.woff2` | Newsreader | 300 | italic |
| `newsreader-regular.woff2` | Newsreader | 400 | normal |
| `newsreader-medium.woff2` | Newsreader | 500 | normal |
| `public-sans-regular.woff2` | Public Sans | 400 | normal |
| `public-sans-medium.woff2` | Public Sans | 500 | normal |
| `public-sans-semibold.woff2` | Public Sans | 600 | normal |

Both families are open source (SIL Open Font License 1.1) and cleared for self-hosting:

- **Newsreader** — https://github.com/productiontype/Newsreader (or Google Fonts → "Get font" → download, then subset to Latin and convert to WOFF2)
- **Public Sans** — https://github.com/uswds/public-sans/releases (the `fonts/webfonts/` folder already has WOFF2)

## Subsetting (recommended)

Trim to the Latin range and hint for a smaller payload:

```bash
pip install fonttools brotli
pyftsubset Newsreader.ttf \
  --unicodes="U+0000-00FF,U+2010-2027,U+2032-2033,U+20AC,U+2122" \
  --layout-features="kern,liga,onum,pnum" \
  --flavor=woff2 --output-file=newsreader-regular.woff2
```

After the real files land, re-measure the `@font-face` metric overrides for
`Newsreader Fallback` / `Public Sans Fallback` in `global.css` (use the
[Fallback Font Generator](https://screenspan.net/fallback) or `capsize`) to zero out layout shift.
