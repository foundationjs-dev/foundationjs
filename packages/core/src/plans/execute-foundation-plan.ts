import type { AutomationContext } from "../automations/automation.js";
import type { AutomationResult } from "../automations/automation-result.js";
import type { CapabilityPhase } from "../capabilities/index.js";
import type { HookContext } from "../hooks/index.js";
import { detectIntegrations } from "./detect-integrations.js";
import type { FoundationExecutionResult } from "./foundation-execution-result.js";
import type { FoundationPlan } from "./foundation-plan.js";

export async function executeFoundationPlan(
	plan: FoundationPlan,
	phase: CapabilityPhase,
	context: HookContext,
): Promise<FoundationExecutionResult> {
	for (const capability of plan.capabilities) {
		if (!capability.phases.includes(phase)) {
			continue;
		}

		await capability.run(context);
	}

	if (phase !== "afterInit") {
		return {
			integrations: [],
			automations: [],
		};
	}

	const automationContext: AutomationContext = {
		projectName: plan.projectName,
		directory: context.destination,
		config: context.config,
	};

	const automations: AutomationResult[] = [];

	for (const automation of plan.automations) {
		const available = await automation.canRun(automationContext);

		if (!available) {
			continue;
		}

		automations.push(await automation.run(automationContext));
	}

	const integrations = await detectIntegrations(plan);

	return {
		integrations,
		automations,
	};
}
