import type { HookContext } from "../../hooks/index.js";
import { initializeGit } from "../../init/initialize-git.js";

export const gitCapability = {
	name: "git",

	async run(context: HookContext): Promise<void> {
		await initializeGit(context.destination, context.commitMessage);
	},
};
