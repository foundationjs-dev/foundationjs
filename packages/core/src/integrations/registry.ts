import { githubIntegration } from "./github/index.js";
import type { Integration } from "./integration.js";

export const INTEGRATION_REGISTRY = new Map<string, Integration>([
	[githubIntegration.name, githubIntegration],
]);
