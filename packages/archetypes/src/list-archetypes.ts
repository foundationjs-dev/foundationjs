import { readdir } from "node:fs/promises";

/**
 * Returns all available archetypes.
 */
export async function listArchetypes(root: string): Promise<string[]> {
	return readdir(`${root}/archetypes`, {
		withFileTypes: true,
	}).then((entries) =>
		entries
			.filter((entry) => entry.isDirectory())
			.map((entry) => entry.name)
			.sort(),
	);
}
