import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const archetypesDirectory = join(__dirname, "..");

/**
 * Returns the absolute path to an archetype.
 */
export function getArchetypePath(name: string): string {
	return join(archetypesDirectory, name);
}
