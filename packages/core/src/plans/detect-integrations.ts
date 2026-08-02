import type { IntegrationStatus } from "../integrations/index.js";

import type { FoundationPlan } from "./foundation-plan.js";

export async function detectIntegrations(
	plan: FoundationPlan,
): Promise<IntegrationStatus[]> {
	const results: IntegrationStatus[] = [];

	for (const integration of plan.integrations) {
		results.push(await integration.detect());
	}

	return results;
}
