import type { AutomationContext } from "./automation.js";
import type { AutomationResult } from "./automation-result.js";
import { AUTOMATION_REGISTRY } from "./registry.js";

export async function runAutomations(
	context: AutomationContext,
): Promise<AutomationResult[]> {
	const results: AutomationResult[] = [];

	for (const automation of AUTOMATION_REGISTRY.values()) {
		const available = await automation.canRun(context);

		if (!available) {
			continue;
		}

		try {
			const result = await automation.run(context);

			results.push(result);
		} catch (error) {
			results.push({
				status: "error",
				title: automation.name,
				message: error instanceof Error ? error.message : String(error),
			});
		}
	}

	return results;
}
