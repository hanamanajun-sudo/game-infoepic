import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';

export default defineConfig({
  site: 'https://game.infoepic.com',
  trailingSlash: 'never',
  integrations: [sitemap()],
  output: 'static',
  markdown: {
    rehypePlugins: [rehypeSlug],
  },
});
