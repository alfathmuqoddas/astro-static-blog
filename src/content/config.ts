import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    pubDate: z.date().optional(),
  }),
});

export const collections = { blog };
