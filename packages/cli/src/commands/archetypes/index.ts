import { listArchetypes } from "@paszed/archetypes";
import type { Command } from "commander";

export function registerArchetypesCommand(program: Command): void {
	program
		.command("archetypes")
		.description("List available archetypes")
		.action(() => {
			const archetypes = listArchetypes();

			console.log("");
			console.log("Archetypes");
			console.log("──────────");

			for (const archetype of archetypes) {
				console.log("");
				console.log(`${archetype.name}`);
				console.log(`  ${archetype.description}`);
				console.log(`  Kind: ${archetype.kind}`);
			}

			console.log("");
		});
}
