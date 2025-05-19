// src/content/config.ts
import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';




export const collections = {
  work: defineCollection({
    loader: glob({ base: '../astro-tailwinds/src/content/work', pattern: '**/*.md', }),
    // When using content, the loader is automatically set to glob
    // type: 'content', // 'content' for Markdown/MDX. Use 'data' for JSON/YAML
  }),
  schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
      email: z.string().email().optional(), // Use .email() for email validation
      website: z.string().url().optional(), // Use .url() for URL validation
      github: z.string().url().optional(),  // Use .url() for URL validation
		}),
  }


// const workCollection = defineCollection({
//   type: 'content', // 'content' for Markdown/MDX. Use 'data' for JSON/YAML
//   schema: z.object({
//     title: z.string(),
//     subtitle: z.string().optional(),
//     description: z.string(),
//     publishDate: z.coerce.date(), // z.coerce.date() is great for converting string dates to Date objects
//     tags: z.array(z.string()),
//     email: z.string().email().optional(), // Use .email() for email validation
//     website: z.string().url().optional(), // Use .url() for URL validation
//     github: z.string().url().optional(),  // Use .url() for URL validation
//     img: z.string().optional(),
//     img_alt: z.string().optional(),
//   }),
// });

// // Define your collections here
// const docs = defineCollection({
//   type: 'content',
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     publishDate: z.coerce.date(), // z.coerce.date() is great for converting string dates to Date objects
//     tags: z.array(z.string()),
//     email: z.string().email().optional(), // Use .email() for email validation
//     website: z.string().url().optional(), // Use .url() for URL validation
//     github: z.string().url().optional(),  // Use .url() for URL validation
//     img: z.string().optional(),
//     img_alt: z.string().optional(),
//   }),
// });


// export const collections = {
//   'work': workCollection,
//   'docs': docs,
// };