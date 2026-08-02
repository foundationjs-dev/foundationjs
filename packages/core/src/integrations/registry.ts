import { PLUGIN_REGISTRY } from "../plugins/registry.js";
import type { Integration } from "./integration.js";

export function getIntegrationRegistry(): Map<string, Integration> {
	const registry = new Map<string, Integration>();

	for (const plugin of PLUGIN_REGISTRY.values()) {
		for (const integration of plugin.integrations ?? []) {
			registry.set(integration.name, integration);
		}
	}

	return registry;
}
