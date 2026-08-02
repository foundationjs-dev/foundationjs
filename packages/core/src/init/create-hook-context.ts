import type { ArchetypeManifest } from "@paszed/archetypes";

import type { FoundationConfig } from "../config/index.js";
import type { HookContext } from "../hooks/index.js";

export function createHookContext(
	projectName: string,
	destination: string,
	archetype: ArchetypeManifest,
	config: FoundationConfig,
	commitMessage?: string,
): HookContext {
	return {
		projectName,
		destination,
		archetype,
		config,
		commitMessage,
	};
}
