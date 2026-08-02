import { loadBuiltInPlugins } from "./plugins/index.js";

let initialized = false;

export function initializeFoundation(): void {
	if (initialized) {
		return;
	}

	loadBuiltInPlugins();

	initialized = true;
}
