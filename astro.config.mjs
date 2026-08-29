// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical production host. Apex domain; www 301s to this at the edge (see vercel.json).
const SITE = 'https://www.dermsc.com';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      // Legal / utility pages stay out of the sitemap.
      filter: (page) =>
        !page.includes('/privacy/') &&
        !page.includes('/accessibility/') &&
        !page.includes('/thank-you/'),
    }),
  ],
  compressHTML: true,
  devToolbar: { enabled: false },
});
