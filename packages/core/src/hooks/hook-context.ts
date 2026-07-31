import type { ArchetypeManifest } from "@paszed/archetypes";

export interface HookContext {
	projectName: string;

	destination: string;

	archetype: ArchetypeManifest;

	commitMessage?: string;
}
