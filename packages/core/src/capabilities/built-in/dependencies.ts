import { installDependencies } from "../../package-manager/install.js";
import type { Capability } from "../capability.js";
import type { CapabilityContext } from "../capability-context.js";

export const dependenciesCapability = {
	name: "dependencies",

	description: "Install project dependencies",

	phase: "afterCreate",

	async run(context: CapabilityContext): Promise<void> {
		await installDependencies(context.destination);
	},
} satisfies Capability;
