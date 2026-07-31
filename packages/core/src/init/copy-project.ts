import { type Archetype, copyArchetype } from "@paszed/archetypes";

import { createTemplateValues } from "./create-template-values.js";

export interface CopyProjectOptions {
	archetype: Archetype;
	destination: string;
	projectName: string;
}

export async function copyProject({
	archetype,
	destination,
	projectName,
}: CopyProjectOptions): Promise<void> {
	await copyArchetype(
		archetype,
		destination,
		createTemplateValues(projectName),
	);
}
