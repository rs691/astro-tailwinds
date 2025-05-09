// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  site: 'https://rstewart.me/',
  base: '/astro-tailwinds',
  integrations: [react(), mdx(), sitemap()]
});