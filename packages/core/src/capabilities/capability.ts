import type { HookContext } from "../hooks/index.js";

export interface Capability {
	name: string;

	run(context: HookContext): Promise<void>;
}
