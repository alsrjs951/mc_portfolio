// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: process.env.SITE_URL ?? 'https://epa-development.pages.dev',
	integrations: [sitemap()],
});
