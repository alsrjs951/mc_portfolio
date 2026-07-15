// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://epa-development.alsrjs951.workers.dev',
  integrations: [sitemap()],
  adapter: cloudflare(),
});