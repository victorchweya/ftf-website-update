export const sectionSpacing = {
	none: "",
	compact: "py-16 md:py-20 lg:py-24",
	default: "py-20 md:py-28 lg:py-32",
	roomy: "py-24 md:py-32 lg:py-36",
	heroCompact: "pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-48 lg:pb-32",
	hero: "pt-40 pb-24 md:pt-52 md:pb-32 lg:pt-56 lg:pb-36",
	cta: "py-16 md:py-24 lg:py-28",
} as const;

export type SectionSpacing = keyof typeof sectionSpacing;
