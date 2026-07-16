import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Menggunakan domain premium Anda yang baru
  site: 'https://balitripology.com',

  // Baris base DIHAPUS karena website sekarang berada di akar utama domain murni (.com)
  integrations: [sitemap()],
});