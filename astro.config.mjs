import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tripleaservicios.vercel.app',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    css: {
      postcss: './postcss.config.js',
    },
  },
});