import type { CapabilityPhase } from "../capabilities/index.js";
import type { HookContext } from "../hooks/index.js";

import type { FoundationPlan } from "./foundation-plan.js";

export async function executeFoundationPlan(
	plan: FoundationPlan,
	phase: CapabilityPhase,
	context: HookContext,
): Promise<void> {
	for (const capability of plan.capabilities) {
		if (!capability.phases.includes(phase)) {
			continue;
		}

		await capability.run(context);
	}
}
