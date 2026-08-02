import type { Automation } from "./automation.js";
import { githubRepositoryAutomation } from "./built-in/github/index.js";

export const AUTOMATION_REGISTRY = new Map<string, Automation>([
	[githubRepositoryAutomation.name, githubRepositoryAutomation],
]);
