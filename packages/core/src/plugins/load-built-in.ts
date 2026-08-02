import { corePlugin, githubPlugin } from "./built-in/index.js";
import { registerPlugin } from "./register.js";

export function loadBuiltInPlugins(): void {
	registerPlugin(corePlugin);
	registerPlugin(githubPlugin);
}
