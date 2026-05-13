// @ts-check
import { defineConfig, fontProviders, svgoOptimizer } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	experimental: {
		svgOptimizer: svgoOptimizer(),
	},
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Fraunces",
			cssVariable: "--font-fraunces",
		},
		{
			provider: fontProviders.fontsource(),
			name: "Rubik",
			cssVariable: "--font-rubik",
		},
	],
});
