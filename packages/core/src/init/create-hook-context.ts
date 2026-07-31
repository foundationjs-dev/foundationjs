import type { Archetype } from "@paszed/archetypes";

import type { HookContext } from "../hooks/index.js";

export function createHookContext(
	projectName: string,
	destination: string,
	archetype: Archetype,
): HookContext {
	return {
		projectName,
		destination,
		archetype,
	};
}
