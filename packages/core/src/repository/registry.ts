import { PLUGIN_REGISTRY } from "../plugins/registry.js";
import type { RepositoryProvider } from "./repository-provider.js";

export function getRepositoryRegistry(): Map<string, RepositoryProvider> {
	const registry = new Map<string, RepositoryProvider>();

	for (const plugin of PLUGIN_REGISTRY.values()) {
		for (const provider of plugin.repositoryProviders ?? []) {
			registry.set(provider.name, provider);
		}
	}

	return registry;
}
