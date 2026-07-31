import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { getArchetype } from "./get-archetype.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const root = join(__dirname, "..");

export function getArchetypePath(name: string): string {
	const archetype = getArchetype(name);

	return join(root, archetype.path);
}
