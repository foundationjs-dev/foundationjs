import type { Archetype } from "@paszed/archetypes";

export interface InitProjectResult {
	name: string;
	destination: string;
	archetype: Archetype;
}
