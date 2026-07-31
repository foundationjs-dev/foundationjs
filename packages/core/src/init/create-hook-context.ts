import type { ArchetypeManifest } from "@paszed/archetypes";

import type { HookContext } from "../hooks/index.js";

export function createHookContext(
	projectName: string,
	destination: string,
	archetype: ArchetypeManifest,
	commitMessage?: string,
): HookContext {
	return {
		projectName,
		destination,
		archetype,
		commitMessage,
	};
}
