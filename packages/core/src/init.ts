import { rm } from "node:fs/promises";
import { resolve } from "node:path";

import { copyArchetype } from "@paszed/archetypes";

import { createTemplateValues } from "./init/create-template-values.js";
import { ensureDirectoryDoesNotExist } from "./init/ensure-directory-does-not-exist.js";
import type { InitProjectOptions } from "./init/init-project-options.js";
import type { InitProjectResult } from "./init/init-project-result.js";
import { validateProjectName } from "./init/validate-project-name.js";

/**
 * Initializes a new project.
 */
export async function initProject(
	options: InitProjectOptions,
): Promise<InitProjectResult> {
	const { name } = options;

	validateProjectName(name);

	const archetype = options.archetype ?? "next-app";
	const destination = resolve(process.cwd(), name);

	await ensureDirectoryDoesNotExist(destination);

	try {
		await copyArchetype(archetype, destination, createTemplateValues(name));
	} catch (error) {
		await rm(destination, {
			recursive: true,
			force: true,
		});

		throw error;
	}

	return {
		name,
		destination,
		archetype,
	};
}
