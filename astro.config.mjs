import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Ganti 'username' dengan username GitHub Anda
  // Ganti 'bali-tropical-trip' dengan nama repositori GitHub Anda nanti
  site: 'https://signline-project.github.io',

  base: '/bali-tropical-trip',
  integrations: [sitemap()],
});