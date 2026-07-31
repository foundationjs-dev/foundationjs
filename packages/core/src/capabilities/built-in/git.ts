import { initializeGit } from "../../init/initialize-git.js";
import type { CapabilityContext } from "../capability-context.js";

export const gitCapability = {
	name: "git",

	async run(context: CapabilityContext): Promise<void> {
		await initializeGit(context.destination, context.commitMessage);
	},
};
