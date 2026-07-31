import { getArchetypePath } from "@paszed/archetypes";
import { createProject } from "@paszed/devkit";

export interface GenerateProjectOptions {
	name: string;
	destination?: string;
	archetype?: string;
}

export async function generateProject({
	name,
	destination = process.cwd(),
	archetype = "next-app",
}: GenerateProjectOptions): Promise<void> {
	const archetypePath = getArchetypePath(archetype);

	await createProject({
		name,
		templatePath: archetypePath,
		destination,
	});
}
