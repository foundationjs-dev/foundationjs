import type { FoundationConfig } from "./foundation-config.js";

export function mergeConfig(
	config: FoundationConfig,
	overrides: FoundationConfig,
): FoundationConfig {
	return {
		...config,
		...overrides,
	};
}
