import js from "@eslint/js";
import type { Config } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export function base(): Config[] {
	return [
		js.configs.recommended,

		...tseslint.configs.recommended,

		{
			languageOptions: {
				ecmaVersion: "latest",
				sourceType: "module",

				globals: {
					...globals.es2024,
				},
			},
		},

		{
			rules: {
				"no-console": "warn",
				"no-debugger": "error",
			},
		},
	];
}
