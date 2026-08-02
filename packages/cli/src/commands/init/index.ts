import { initProject } from "@paszed/core";
import type { Command } from "commander";

import { handleError } from "../../errors/handle-error.js";
import {
	createProgress,
	printAutomationResults,
	success,
} from "../../ui/index.js";
import { resolveArchetype } from "../../utils/resolve-archetype.js";

export function registerInitCommand(program: Command): void {
	program
		.command("init")
		.description("Initialize a new project")
		.argument("[name]", "Project name")
		.option("--archetype <name>", "Project archetype")
		.option("--no-git", "Skip git initialization")
		.option("--no-install", "Skip dependency installation")
		.option("--commit-message <message>", "Initial git commit message")
		.action(async (name: string | undefined, options) => {
			const progress = createProgress();

			try {
				const projectName = name ?? process.cwd().split("/").pop();

				if (!projectName) {
					throw new Error("Unable to determine project name");
				}

				const destination = name ? undefined : process.cwd();
				const create = Boolean(name);

				progress.start("Initializing project");

				const result = await initProject({
					name: projectName,
					destination,
					create,
					archetype: resolveArchetype(options.archetype),
					initializeGit: options.git,
					installDependencies: options.install,
					commitMessage: options.commitMessage,
				});

				progress.success("Project initialized");
				progress.stop();

				success(`
Project: ${result.name}
Location: ${result.destination}
Archetype: ${result.archetype.name}
`);

				printAutomationResults(result.automations);
			} catch (reason) {
				progress.stop();
				handleError(reason);
			}
		});
}
