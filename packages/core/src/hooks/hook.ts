import type { HookContext } from "./hook-context.js";

export type HookName =
	| "beforeCreate"
	| "afterCreate"
	| "afterInstall"
	| "afterInit";

export interface Hook {
	name: HookName;

	run(context: HookContext): Promise<void>;
}
