import { access } from "node:fs/promises";
import { resolve } from "node:path";

import type { FoundationConfig } from "./foundation-config.js";

const DEFAULT_CONFIG: FoundationConfig = {
	initializeGit: true,
	commitMessage: "Initial commit",

	automation: {
		createRepositories: true,
	},
};

export async function loadConfig(
	directory: string = process.cwd(),
): Promise<FoundationConfig> {
	const configPath = resolve(directory, "foundation.config.ts");

	try {
		await access(configPath);

		const config = await import(configPath);

		return {
			...DEFAULT_CONFIG,
			...config.default,
		};
	} catch {
		return DEFAULT_CONFIG;
	}
}
