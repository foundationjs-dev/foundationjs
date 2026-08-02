import type { HookContext } from "../../hooks/index.js";
import { getRepositoryRegistry } from "../../repository/index.js";
import type { Capability } from "../capability.js";

export const repositoryCapability = {
	name: "repository",

	description: "Create remote repository",

	phases: ["afterInit"],

	async run(context: HookContext): Promise<void> {
		const registry = getRepositoryRegistry();

		const provider = registry.get("github");

		if (!provider) {
			return;
		}

		await provider.create({
			name: context.projectName,
			directory: context.destination,
		});
	},
} satisfies Capability;
