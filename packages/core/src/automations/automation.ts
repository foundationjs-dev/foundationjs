import type { FoundationConfig } from "../config/index.js";
import type { AutomationResult } from "./automation-result.js";

export interface AutomationContext {
	projectName: string;

	directory: string;

	config: FoundationConfig;
}

export interface Automation {
	name: string;

	description: string;

	canRun(context: AutomationContext): Promise<boolean>;

	run(context: AutomationContext): Promise<AutomationResult>;
}
