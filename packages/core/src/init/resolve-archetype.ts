import type { Archetype } from "@paszed/archetypes";

import type { InitProjectOptions } from "./init-project-options.js";

export function resolveArchetype(options: InitProjectOptions): Archetype {
	return options.archetype ?? "platform";
}
