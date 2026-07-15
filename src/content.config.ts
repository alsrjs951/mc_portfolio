import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['plugin', 'skript']),
    featured: z.boolean().default(false),
    implementationType: z.enum(['real', 'design']),
    automatedTestCount: z.number().int().nonnegative().optional(),
    summary: z.string(),
    problem: z.string(),
    solution: z.string(),
    features: z.array(z.string()).min(1),
    stack: z.array(z.string()).min(1),
    minecraftVersions: z.array(z.string()).min(1),
    serverType: z.string(),
    dependencies: z.array(z.string()).default([]),
    results: z.array(z.object({
      label: z.string(),
      value: z.string(),
      description: z.string().optional(),
    })).default([]),
    media: z.array(z.object({
      type: z.enum(['image', 'video']),
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
      poster: z.string().optional(),
    })).max(4).default([]),
    thumbnail: z.string().optional(),
    sourceUrl: z.url().optional(),
    demoUrl: z.url().optional(),
    order: z.number(),
  }),
});

export const collections = { projects };
