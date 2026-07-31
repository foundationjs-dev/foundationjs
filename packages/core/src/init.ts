import { rm } from "node:fs/promises";
import { resolve } from "node:path";

import { copyProject } from "./init/copy-project.js";
import { ensureDirectoryDoesNotExist } from "./init/ensure-directory-does-not-exist.js";
import type { InitProjectOptions } from "./init/init-project-options.js";
import type { InitProjectResult } from "./init/init-project-result.js";
import { initializeGit } from "./init/initialize-git.js";
import { installDependencies } from "./init/install-dependencies.js";
import { resolveArchetype } from "./init/resolve-archetype.js";
import { runHooks } from "./init/run-hooks.js";
import { validateProjectName } from "./init/validate-project-name.js";
/**
 * Initializes a new project.
 */
export async function initProject(
	options: InitProjectOptions,
): Promise<InitProjectResult> {
	const { name } = options;

	validateProjectName(name);

	const archetype = resolveArchetype(options);
	const destination = resolve(process.cwd(), name);

	await ensureDirectoryDoesNotExist(destination);

	try {
		await copyProject({
			archetype,
			destination,
			projectName: name,
		});

		await installDependencies(destination);

		await initializeGit(destination);

		await runHooks(destination);
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
