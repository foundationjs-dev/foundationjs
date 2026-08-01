import type { HookContext } from "../../hooks/index.js";
import type { Capability } from "../capability.js";

export const metadataCapability: Capability = {
	name: "metadata",

	description: "Creates project metadata",

	phases: ["beforeCreate"],

	async run(_context: HookContext): Promise<void> {
		// Metadata generation will be implemented here.
	},
};
