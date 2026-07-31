import type { ArchetypeCapability } from "@paszed/archetypes";

import type { CapabilityContext } from "./capability-context.js";
import { CAPABILITY_REGISTRY } from "./registry.js";

export async function runCapabilities(
	capabilities: ArchetypeCapability[],
	context: CapabilityContext,
): Promise<void> {
	for (const name of capabilities) {
		const capability = CAPABILITY_REGISTRY.get(name);

		if (!capability) {
			throw new Error(`Unknown capability: "${name}"`);
		}

		await capability.run(context);
	}
}
