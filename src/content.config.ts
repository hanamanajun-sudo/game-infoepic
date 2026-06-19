import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string().optional().default(''),
    tags: z.array(z.string()).optional().default([]),
    slug: z.string(),
    numericId: z.number(),
    description: z.string().optional().default(''),
    thumbnail: z.string().optional().default(''),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    entry_slug: z.string(),
    title: z.string(),
    raw_title: z.string(),
    raw_url: z.string(),
    source: z.string(),
    date: z.string(),
    category: z.string().optional().default('게임 뉴스'),
    tags: z.array(z.string()).optional().default([]),
    description: z.string().optional().default(''),
    last_updated: z.string().optional().default(''),
  }),
});

export const collections = { posts, news };
