import type { AutomationResult } from "../automations/automation-result.js";
import type { IntegrationStatus } from "../integrations/integration.js";

export interface FoundationExecutionResult {
	integrations: IntegrationStatus[];

	automations: AutomationResult[];
}
