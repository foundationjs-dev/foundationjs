import { rm } from "node:fs/promises";
import { resolve } from "node:path";

import { createHookRunner } from "./hooks/index.js";
import { copyProject } from "./init/copy-project.js";
import { createHookContext } from "./init/create-hook-context.js";
import { ensureDirectoryDoesNotExist } from "./init/ensure-directory-does-not-exist.js";
import type { InitProjectOptions } from "./init/init-project-options.js";
import type { InitProjectResult } from "./init/init-project-result.js";
import { initializeGit } from "./init/initialize-git.js";
import { installDependencies } from "./init/install-dependencies.js";
import { resolveArchetype } from "./init/resolve-archetype.js";
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

	const context = createHookContext(name, destination, archetype);

	const hooks = createHookRunner();

	await ensureDirectoryDoesNotExist(destination);

	try {
		await hooks.run("beforeCreate", context);

		await copyProject({
			archetype,
			destination,
			projectName: name,
		});

		await hooks.run("afterCreate", context);

		if (options.installDependencies !== false) {
			await installDependencies(destination);

			await hooks.run("afterInstall", context);
		}

		if (options.initializeGit !== false) {
			await initializeGit(destination, options.commitMessage);
		}

		await hooks.run("afterInit", context);
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
