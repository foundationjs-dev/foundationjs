import { Command } from "commander";

import { initProject } from "@paszed/core";

export function registerInitCommand(program: Command): void {
	program
		.command("init")
		.description("Initialize a new project")
		.argument("<name>", "Project name")
		.option(
			"--archetype <name>",
			"Project archetype",
		)
		.option(
			"--no-git",
			"Skip git initialization",
		)
		.action(async (name: string, options) => {
			const result = await initProject({
				name,
				archetype: options.archetype,
				initializeGit: options.git,
			});

			console.log(`
✔ Project created successfully!

Project: ${result.name}
Location: ${result.destination}
Archetype: ${result.archetype}
`);
		});
}
