import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z
    .object({
      title: z.string(),
      label: z.string().optional(),
      summary: z.string(),
      order: z.number().int(),
      kind: z.enum(['personal', 'company']),
      stack: z.array(z.string().min(1)).min(1),
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
      repoPrivate: z.boolean().default(false),
      image: z.string().optional(),
      imageAlt: z.string().optional(),
      imageWidth: z.number().int().positive().optional(),
      imageHeight: z.number().int().positive().optional(),
      imageCaption: z.string().optional(),
    })
    .refine((data) => !data.image || Boolean(data.imageAlt && data.imageWidth && data.imageHeight), {
      message: 'image requires imageAlt, imageWidth, and imageHeight',
    })
    .refine((data) => data.kind !== 'company' || (!data.github && !data.demo && !data.image), {
      message: 'company projects stay text-only: omit github, demo, and image',
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    example: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
