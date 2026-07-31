import type { CapabilityContext } from "./capability-context.js";

export interface Capability {
	name: string;

	run(context: CapabilityContext): Promise<void>;
}
