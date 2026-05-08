import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const dateField = z.string().or(z.date()).transform((value) => new Date(value));

const contentPattern = "**/*.{md,mdx}";

const blog = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: contentPattern }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: dateField,
		updatedDate: z
			.string()
			.or(z.date())
			.optional()
			.transform((value) => (value ? new Date(value) : undefined)),
		heroImage: z.string().optional(),
	}),
});

const faqs = defineCollection({
	loader: glob({ base: "./src/content/faqs", pattern: contentPattern }),
	schema: z.object({
		question: z.string(),
		category: z.enum(["general", "buyers", "farmers"]),
		number: z.number(),
		published: z.boolean().default(true),
	}),
});

const team = defineCollection({
	loader: glob({ base: "./src/content/team", pattern: contentPattern }),
	schema: z.object({
		name: z.string(),
		position: z.string(),
		photo: z.string(),
		number: z.number(),
		bio: z.string().optional(),
		published: z.boolean().default(true),
	}),
});

const advisors = defineCollection({
	loader: glob({ base: "./src/content/advisors", pattern: contentPattern }),
	schema: z.object({
		name: z.string(),
		position: z.string(),
		photo: z.string(),
		number: z.number(),
		bio: z.string().optional(),
		published: z.boolean().default(true),
	}),
});

const careers = defineCollection({
	loader: glob({ base: "./src/content/careers", pattern: contentPattern }),
	schema: z.object({
		position: z.string(),
		location: z.string(),
		contract: z.string(),
		link: z.string().url(),
		postedDate: dateField,
		published: z.boolean().default(true),
	}),
});

const news = defineCollection({
	loader: glob({ base: "./src/content/news", pattern: contentPattern }),
	schema: z.object({
		title: z.string(),
		date: dateField,
		image: z.string(),
		link: z.string().url().optional(),
		published: z.boolean().default(true),
	}),
});

const impact = defineCollection({
	loader: glob({ base: "./src/content/impact", pattern: contentPattern }),
	schema: z.object({
		metric: z.string(),
		value: z.string(),
		label: z.string(),
		order: z.number(),
		unit: z.string().optional(),
	}),
});

const testimonials = defineCollection({
	loader: glob({ base: "./src/content/testimonials", pattern: contentPattern }),
	schema: z.object({
		name: z.string(),
		company: z.string(),
		order: z.number().optional(),
		published: z.boolean().default(true),
	}),
});

export const collections = {
	advisors,
	blog,
	careers,
	faqs,
	impact,
	news,
	team,
	testimonials,
};
