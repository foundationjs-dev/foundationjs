import type { Archetype } from "@paszed/archetypes";

export interface HookContext {
	projectName: string;

	destination: string;

	archetype: Archetype;
}
