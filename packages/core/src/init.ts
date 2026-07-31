import { resolve } from "node:path";

import { copyArchetype } from "@paszed/archetypes";

/**
 * Initializes a new project.
 */
export async function initProject(name: string): Promise<void> {
	const destination = resolve(process.cwd(), name);

	await copyArchetype("next-app", destination, {
		PROJECT_NAME: name,
		PACKAGE_NAME: name,
	});

	console.log(`Initialized ${name}`);
}
