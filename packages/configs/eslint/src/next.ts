import type { Config } from "eslint/config";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import globals from "globals";

import { base } from "./base.js";

export interface NextOptions {
	ignores?: string[];
	rules?: Config["rules"];
}

export function next(options: NextOptions = {}) {
	const config: Config[] = [
		...base(),

		...nextVitals,

		...nextTypescript,

		{
			languageOptions: {
				globals: {
					...globals.browser,
					...globals.node,
				},
			},
		},

		globalIgnores([
			".next/**",
			"out/**",
			"build/**",
			"coverage/**",
			"playwright-report/**",
			"test-results/**",
			"next-env.d.ts",

			...(options.ignores ?? []),
		]),
	];

	if (options.rules) {
		config.push({
			rules: options.rules,
		});
	}

	return defineConfig(config);
}
