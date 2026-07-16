import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://balitripology.com',
  integrations: [], // Kita kosongkan dulu integrasinya agar tidak terjadi crash saat build
});