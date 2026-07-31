import { Command } from "commander";

import { initProject } from "@paszed/core";

export function registerInitCommand(program: Command): void {
	program
		.command("init")
		.description("Initialize a new project")
		.argument("<name>", "Project name")
		.option("-a, --archetype <archetype>", "Project archetype", "next-app")
		.action(
			async (
				name: string,
				options: {
					archetype: "next-app";
				},
			) => {
				const result = await initProject({
					name,
					archetype: options.archetype,
				});

				console.log(`
✔ Project created successfully!

Project: ${result.name}
Location: ${result.destination}
Archetype: ${result.archetype}

Next steps:

  cd ${result.name}
  pnpm install
  pnpm dev
`);
			},
		);
}
