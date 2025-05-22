// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  site: 'https://rs691.github.io/',
  base: '/astro-tailwinds/',
  integrations: [react(), mdx(), sitemap(), icon()]
});