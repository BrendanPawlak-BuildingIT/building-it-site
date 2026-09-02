import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://buildmyit.com',
  integrations: [
    sitemap({
      // Legal pages are noindex — keep them out of the sitemap too.
      filter: (page) => !page.endsWith('/privacy/') && !page.endsWith('/terms/'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
