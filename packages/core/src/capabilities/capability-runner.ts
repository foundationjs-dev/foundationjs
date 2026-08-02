import type { ArchetypeCapability } from "@paszed/archetypes";

import type { HookContext } from "../hooks/index.js";
import type { CapabilityPhase } from "./capability.js";
import { getCapabilityRegistry } from "./registry.js";

export async function runCapabilities(
	capabilities: readonly ArchetypeCapability[],
	phase: CapabilityPhase,
	context: HookContext,
): Promise<void> {
	const registry = getCapabilityRegistry();

	for (const name of capabilities) {
		const capability = registry.get(name);

		if (!capability) {
			throw new Error(`Unknown capability: "${name}"`);
		}

		if (!capability.phases.includes(phase)) {
			continue;
		}

		await capability.run(context);
	}
}
