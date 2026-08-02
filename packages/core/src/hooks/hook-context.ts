import type { ArchetypeManifest } from "@paszed/archetypes";
import type { FoundationConfig } from "../config/index.js";

export interface HookContext {
	projectName: string;

	destination: string;

	archetype: ArchetypeManifest;

	config: FoundationConfig;

	commitMessage?: string;
}
