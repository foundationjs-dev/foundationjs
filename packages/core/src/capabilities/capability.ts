import type { HookContext } from "../hooks/index.js";

export type CapabilityPhase =
	| "beforeCreate"
	| "afterCreate"
	| "afterInstall"
	| "afterInit";

export interface Capability {
	name: string;

	description: string;

	phases: CapabilityPhase[];

	run(context: HookContext): Promise<void>;
}
