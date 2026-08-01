import { access } from "node:fs/promises";
import { join } from "node:path";

import type { HookContext } from "../../hooks/index.js";
import { installDependencies } from "../../package-manager/install.js";
import type { Capability } from "../capability.js";

export const dependenciesCapability = {
	name: "dependencies",

	description: "Install project dependencies",

	phases: ["afterInstall"],

	async run(context: HookContext): Promise<void> {
		try {
			await access(join(context.destination, "package.json"));
		} catch {
			return;
		}

		await installDependencies(context.destination);
	},
} satisfies Capability;
