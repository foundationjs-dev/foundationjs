import type { HookContext } from "../../hooks/index.js";
import { initializeGit } from "../../init/initialize-git.js";
import type { Capability } from "../capability.js";

export const gitCapability = {
	name: "git",

	description: "Initialize git repository",

	phases: ["afterCreate"],

	async run(context: HookContext): Promise<void> {
		await initializeGit(context.destination, context.commitMessage);
	},
} satisfies Capability;
