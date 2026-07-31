import type { Archetype } from "@paszed/archetypes";
import { copyArchetype } from "@paszed/archetypes";

export interface GenerateProjectOptions {
	name: string;
	destination?: string;
	archetype?: Archetype;
}

export async function generateProject({
	name,
	destination = process.cwd(),
	archetype = "platform",
}: GenerateProjectOptions): Promise<void> {
	await copyArchetype(archetype, destination, {
		PROJECT_NAME: name,
		PACKAGE_NAME: name,
	});
}
