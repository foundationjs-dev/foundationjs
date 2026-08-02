import { PLUGIN_REGISTRY } from "../plugins/registry.js";
import type { Capability } from "./capability.js";

export function getCapabilityRegistry(): Map<string, Capability> {
	const registry = new Map<string, Capability>();

	for (const plugin of PLUGIN_REGISTRY.values()) {
		for (const capability of plugin.capabilities ?? []) {
			registry.set(capability.name, capability);
		}
	}

	return registry;
}
