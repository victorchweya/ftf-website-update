export const typeStyles = {
	eyebrow:
		"font-sans text-caption font-medium leading-normal tracking-body text-olive-500",
	nav: "font-sans text-body font-normal leading-6",
	dropdown: "font-sans text-body font-normal leading-6",
	button: "font-sans text-body font-normal leading-copy tracking-body",
	caption:
		"font-sans text-caption font-medium leading-normal tracking-caption",
	body: "font-sans text-body font-normal leading-copy tracking-body",
	bodyLarge:
		"font-sans text-body-lg font-normal leading-copy tracking-body-lg",
	bodyLead:
		"font-sans text-body-xl font-normal leading-copy tracking-body-lg",
	serifLead:
		"font-serif text-body-xl font-normal leading-copy tracking-body-lg",
	cardTitle:
		"font-serif text-subtitle font-normal leading-normal tracking-card",
	cardTitleSmall:
		"font-serif text-card-title font-normal leading-normal tracking-card",
	featureTitle:
		"font-serif text-section-sm font-normal leading-heading tracking-section",
	calloutTitle:
		"font-serif text-3xl font-normal leading-callout tracking-section",
	sectionTitle:
		"font-serif text-section-sm font-normal leading-heading tracking-section md:text-section",
	sectionTitleLarge:
		"font-serif text-section font-normal leading-heading tracking-section-lg md:text-section-lg",
	heroTitle:
		"font-serif text-4xl font-normal leading-tight tracking-display md:text-5xl lg:text-display",
	heroTitleLarge:
		"font-serif text-5xl font-normal leading-tight tracking-display-lg md:text-display lg:text-display-lg",
	heroTitleXL:
		"font-serif text-5xl font-normal leading-tight tracking-display-lg md:text-display-lg lg:text-display-xl",
	statValue:
		"font-serif text-5xl font-normal leading-normal tracking-display-lg md:text-display-lg",
	footerTagline:
		"font-serif text-section font-normal leading-display tracking-section md:text-display",
} as const;

export type TypeStyleName = keyof typeof typeStyles;
