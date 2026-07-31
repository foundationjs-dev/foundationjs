import { listArchetypes } from "@paszed/archetypes";
import type { Command } from "commander";

export function registerArchetypesCommand(program: Command): void {
	program
		.command("archetypes")
		.description("List available archetypes")
		.action(() => {
			const archetypes = listArchetypes();

			const projects = archetypes.filter(
				(archetype) => archetype.kind === "project",
			);

			const buildingBlocks = archetypes.filter(
				(archetype) => archetype.kind === "building-block",
			);

			console.log("");
			console.log("Archetypes");
			console.log("──────────");

			if (projects.length > 0) {
				console.log("");
				console.log("Projects");
				console.log("────────");

				for (const archetype of projects) {
					console.log(`${archetype.name.padEnd(12)} ${archetype.description}`);
				}
			}

			if (buildingBlocks.length > 0) {
				console.log("");
				console.log("Building Blocks");
				console.log("───────────────");

				for (const archetype of buildingBlocks) {
					console.log(`${archetype.name.padEnd(12)} ${archetype.description}`);
				}
			}

			console.log("");
		});
}
