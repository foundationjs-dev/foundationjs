import { rm } from "node:fs/promises";
import { resolve } from "node:path";

import { runCapabilities } from "./capabilities/index.js";
import { createHookRunner } from "./hooks/index.js";
import { copyProject } from "./init/copy-project.js";
import { createHookContext } from "./init/create-hook-context.js";
import { ensureDirectoryDoesNotExist } from "./init/ensure-directory-does-not-exist.js";
import type { InitProjectOptions } from "./init/init-project-options.js";
import type { InitProjectResult } from "./init/init-project-result.js";
import { resolveArchetype } from "./init/resolve-archetype.js";
import { validateProjectName } from "./init/validate-project-name.js";

export async function initProject(
	options: InitProjectOptions,
): Promise<InitProjectResult> {
	const { name } = options;

	validateProjectName(name);

	const archetype = resolveArchetype(options);
	const destination = options.destination ?? resolve(process.cwd(), name);

	const context = createHookContext(
		name,
		destination,
		archetype,
		options.commitMessage,
	);

	const hooks = createHookRunner();

	if (options.create !== false) {
		await ensureDirectoryDoesNotExist(destination);
	}

	try {
		await hooks.run("beforeCreate", context);

		await runCapabilities(archetype.capabilities, "beforeCreate", context);

		await copyProject({
			archetype,
			destination,
			values: {
				PROJECT_NAME: name,
				PACKAGE_NAME: name,
			},
		});

		await hooks.run("afterCreate", context);

		await runCapabilities(archetype.capabilities, "afterCreate", context);

		if (options.installDependencies !== false) {
			await runCapabilities(archetype.capabilities, "afterInstall", context);
		}

		await runCapabilities(archetype.capabilities, "afterInit", context);

		await hooks.run("afterInit", context);
	} catch (error) {
		if (options.create !== false) {
			await rm(destination, {
				recursive: true,
				force: true,
			});
		}

		throw error;
	}

	return {
		name,
		destination,
		archetype,
	};
}
