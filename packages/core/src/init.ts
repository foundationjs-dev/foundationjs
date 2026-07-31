import { rm } from "node:fs/promises";
import { resolve } from "node:path";

import { copyArchetype } from "@paszed/archetypes";

import { createGitProvider } from "./git/index.js";
import { createHookRunner } from "./hooks/index.js";
import { createHookContext } from "./init/create-hook-context.js";
import { createTemplateValues } from "./init/create-template-values.js";
import { ensureDirectoryDoesNotExist } from "./init/ensure-directory-does-not-exist.js";
import type { InitProjectOptions } from "./init/init-project-options.js";
import type { InitProjectResult } from "./init/init-project-result.js";
import { installDependencies } from "./init/install-dependencies.js";
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

	const context = createHookContext(name, destination, archetype);

	const hooks = createHookRunner();

	await ensureDirectoryDoesNotExist(destination);

	try {
		await hooks.run("beforeCreate", context);

		await copyArchetype(archetype, destination, createTemplateValues(name));

		await hooks.run("afterCreate", context);

		if (options.installDependencies !== false) {
			await installDependencies(destination);

			await hooks.run("afterInstall", context);
		}

		if (options.initializeGit !== false) {
			const git = createGitProvider();

			await git.init(destination);
			await git.addAll(destination);
			await git.commit(destination, options.commitMessage ?? "Initial commit");
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
