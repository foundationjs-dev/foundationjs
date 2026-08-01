import { inspectProject } from "@paszed/core";
import type { Command } from "commander";

import { success } from "../../ui/index.js";

export function registerStatusCommand(program: Command): void {
	program
		.command("status")
		.description("Show Foundation project status")
		.action(async () => {
			const project = await inspectProject();

			success("Foundation Status\n");

			console.log("Project");

			if (project.name) {
				console.log(`✓ ${project.name}`);
			} else {
				console.log("✗ No Foundation metadata");
			}

			if (project.archetype) {
				console.log(`✓ Archetype: ${project.archetype}`);
			}

			console.log();

			console.log("Repository");

			console.log(project.hasGit ? "✓ Git initialized" : "✗ No Git repository");

			console.log();

			console.log("Packages");

			if (project.packages.length === 0) {
				console.log("No packages detected");
			} else {
				for (const pkg of project.packages) {
					console.log(`✓ ${pkg}`);
				}
			}
		});
}
