import { AUTOMATION_REGISTRY } from "../automations/registry.js";
import { getCapabilityRegistry } from "../capabilities/registry.js";
import type { InitProjectOptions } from "../init/init-project-options.js";
import { resolveArchetype } from "../init/resolve-archetype.js";
import { getIntegrationRegistry } from "../integrations/registry.js";

import type { FoundationPlan } from "./foundation-plan.js";

export function createFoundationPlan(
	options: InitProjectOptions,
): FoundationPlan {
	const archetype = resolveArchetype(options);

	const capabilityRegistry = getCapabilityRegistry();
	const integrationRegistry = getIntegrationRegistry();

	const capabilities = archetype.capabilities
		.map((name) => capabilityRegistry.get(name))
		.filter((capability) => capability !== undefined);

	const integrations = archetype.integrations
		.map((name) => integrationRegistry.get(name))
		.filter((integration) => integration !== undefined);

	const automations = archetype.automations
		.map((name) => AUTOMATION_REGISTRY.get(name))
		.filter((automation) => automation !== undefined);

	return {
		projectName: options.name,

		archetype,

		capabilities,

		integrations,

		automations,
	};
}
