import { type ArchetypeManifest, getArchetype } from "@paszed/archetypes";
import type { InitProjectOptions } from "./init-project-options.js";

export function resolveArchetype(
	options: InitProjectOptions,
): ArchetypeManifest {
	return getArchetype(options.archetype ?? "platform");
}
