import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    type: z.enum(['plugin', 'skript']),
    featured: z.boolean().default(false),
    sample: z.boolean().default(true),
    summary: z.string(),
    problem: z.string(),
    solution: z.string(),
    features: z.array(z.string()).min(1),
    stack: z.array(z.string()).min(1),
    minecraftVersions: z.array(z.string()).min(1),
    serverType: z.string(),
    dependencies: z.array(z.string()).default([]),
    screenshots: z.array(z.object({
      src: image(),
      alt: z.string(),
    })).max(4).default([]),
    sourceUrl: z.url().optional(),
    demoUrl: z.url().optional(),
    codeLanguage: z.string(),
    code: z.string(),
    decision: z.string(),
    order: z.number(),
  }),
});

export const collections = { projects };
