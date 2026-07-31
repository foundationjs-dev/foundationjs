import { type Archetype, DEFAULT_ARCHETYPE } from "@paszed/archetypes";

import type { InitProjectOptions } from "./init-project-options.js";

export function resolveArchetype(options: InitProjectOptions): Archetype {
	return options.archetype ?? DEFAULT_ARCHETYPE;
}
