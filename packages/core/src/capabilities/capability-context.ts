import type { ArchetypeManifest } from "@paszed/archetypes";

export interface CapabilityContext {
	projectName: string;

	destination: string;

	archetype: ArchetypeManifest;

	commitMessage?: string;
}
