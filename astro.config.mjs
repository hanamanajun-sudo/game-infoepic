import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://game.infoepic.com',
  trailingSlash: 'never',
  integrations: [
    sitemap(),
  ],
  output: 'static',
});
