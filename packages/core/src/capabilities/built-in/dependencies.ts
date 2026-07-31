import type { HookContext } from "../../hooks/index.js";
import { installDependencies } from "../../package-manager/install.js";
import type { Capability } from "../capability.js";

export const dependenciesCapability = {
	name: "dependencies",

	description: "Install project dependencies",

	phases: ["afterInstall"],

	async run(context: HookContext): Promise<void> {
		await installDependencies(context.destination);
	},
} satisfies Capability;
