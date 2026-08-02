import type { FoundationPlugin } from "./plugin.js";
import { PLUGIN_REGISTRY } from "./registry.js";

export function registerPlugin(plugin: FoundationPlugin): void {
	PLUGIN_REGISTRY.set(plugin.name, plugin);
}
