import type { ArchetypeCapability } from "@paszed/archetypes";

import type { HookContext } from "../hooks/index.js";
import type { CapabilityPhase } from "./capability.js";
import { CAPABILITY_REGISTRY } from "./registry.js";

export async function runCapabilities(
	capabilities: readonly ArchetypeCapability[],
	phase: CapabilityPhase,
	context: HookContext,
): Promise<void> {
	for (const name of capabilities) {
		const capability = CAPABILITY_REGISTRY.get(name);

		if (!capability) {
			throw new Error(`Unknown capability: "${name}"`);
		}

		if (!capability.phases.includes(phase)) {
			continue;
		}

		await capability.run(context);
	}
}
