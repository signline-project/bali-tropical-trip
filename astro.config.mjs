import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://balitripology.com',
  trailingSlash: 'always', // Tambahkan baris ini untuk memaksa format URL sitemap yang valid
  integrations: [sitemap()],
});