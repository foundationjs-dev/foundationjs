import { Command } from "commander";

import { initProject } from "@paszed/core";

import { handleError } from "../../errors/handle-error.js";
import { success } from "../../ui/index.js";

export function registerInitCommand(program: Command): void {
	program
		.command("init")
		.description("Initialize a new project")
		.argument("<name>", "Project name")
		.option("--archetype <name>", "Project archetype")
		.option("--no-git", "Skip git initialization")
		.option("--no-install", "Skip dependency installation")
		.option("--commit-message <message>", "Initial git commit message")
		.action(async (name: string, options) => {
			try {
				const result = await initProject({
					name,
					archetype: options.archetype,
					initializeGit: options.git,
					installDependencies: options.install,
					commitMessage: options.commitMessage,
				});

				success("Project created successfully.");

				console.log(`
Project: ${result.name}
Location: ${result.destination}
Archetype: ${result.archetype}
`);
			} catch (reason) {
				handleError(reason);
			}
		});
}
