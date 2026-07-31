import type { Config } from "eslint/config";
import storybookPlugin from "eslint-plugin-storybook";

export function storybook(): Config[] {
	return storybookPlugin.configs["flat/recommended"];
}
