import { installDependencies } from "../../init/install-dependencies.js";

import type { CapabilityContext } from "../capability-context.js";

export const dependenciesCapability = {
	name: "dependencies",

	async run(context: CapabilityContext): Promise<void> {
		await installDependencies(context.destination);
	},
};
