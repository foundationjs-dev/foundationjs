import type { ArchetypeManifest, TemplateValues } from "@paszed/archetypes";
import { copyArchetype } from "@paszed/archetypes";

interface CopyProjectOptions {
	archetype: ArchetypeManifest;
	destination: string;
	values: TemplateValues;
}

export async function copyProject(options: CopyProjectOptions): Promise<void> {
	await copyArchetype(
		options.archetype.name,
		options.destination,
		options.values,
	);
}
