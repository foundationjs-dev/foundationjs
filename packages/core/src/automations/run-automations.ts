import type { AutomationContext } from "./automation.js";
import { AUTOMATION_REGISTRY } from "./registry.js";

export async function runAutomations(
	context: AutomationContext,
): Promise<void> {
	for (const automation of AUTOMATION_REGISTRY.values()) {
		const available = await automation.canRun(context);

		if (!available) {
			continue;
		}

		await automation.run(context);
	}
}
