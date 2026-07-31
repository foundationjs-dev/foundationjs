import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import type { Archetype } from "./archetype.js";
import { ARCHETYPE_REGISTRY } from "./registry.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const root = join(__dirname, "..");

export function getArchetypePath(name: Archetype): string {
	const archetype = ARCHETYPE_REGISTRY.find(
		(item) => item.name === name,
	);

	if (!archetype) {
		throw new Error(`Unknown archetype: "${name}"`);
	}

	return join(root, archetype.path);
}
