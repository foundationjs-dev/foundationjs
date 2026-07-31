import type { ArchetypeManifest } from "@paszed/archetypes";

export interface InitProjectResult {
	name: string;

	destination: string;

	archetype: ArchetypeManifest;
}
