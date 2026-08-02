import { rm } from "node:fs/promises";
import { resolve } from "node:path";

import type { AutomationResult } from "./automations/automation-result.js";
import { loadConfig } from "./config/index.js";
import { createHookRunner } from "./hooks/index.js";
import { copyProject } from "./init/copy-project.js";
import { createHookContext } from "./init/create-hook-context.js";
import { ensureDirectoryDoesNotExist } from "./init/ensure-directory-does-not-exist.js";
import type { InitProjectOptions } from "./init/init-project-options.js";
import type { InitProjectResult } from "./init/init-project-result.js";
import { validateProjectName } from "./init/validate-project-name.js";
import { createFoundationPlan, executeFoundationPlan } from "./plans/index.js";

export async function initProject(
	options: InitProjectOptions,
): Promise<InitProjectResult> {
	const { name } = options;

	validateProjectName(name);

	const config = await loadConfig();

	const plan = createFoundationPlan(options);
	const archetype = plan.archetype;

	const destination = options.destination ?? resolve(process.cwd(), name);

	const context = createHookContext(
		name,
		destination,
		archetype,
		config,
		options.commitMessage,
	);

	const hooks = createHookRunner();

	let automationResults: AutomationResult[] = [];

	if (options.create !== false) {
		await ensureDirectoryDoesNotExist(destination);
	}

	try {
		await hooks.run("beforeCreate", context);

		await executeFoundationPlan(plan, "beforeCreate", context);

		await copyProject({
			archetype,
			destination,
			values: {
				PROJECT_NAME: name,
				PACKAGE_NAME: name,
			},
		});

		await hooks.run("afterCreate", context);

		await executeFoundationPlan(plan, "afterCreate", context);

		if (options.installDependencies !== false) {
			await executeFoundationPlan(plan, "afterInstall", context);
		}

		automationResults = await executeFoundationPlan(plan, "afterInit", context);

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
		automations: automationResults,
	};
}
