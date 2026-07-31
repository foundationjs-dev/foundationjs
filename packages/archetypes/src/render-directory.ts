import { join } from "node:path";
import fg from "fast-glob";

import { renderArchetype } from "./render-archetype.js";

export async function renderDirectory(
	directory: string,
	values: Record<string, string>,
): Promise<void> {
	const files = await fg("**/*", {
		cwd: directory,
		onlyFiles: true,
		dot: true,
	});

	for (const file of files) {
		await renderArchetype(join(directory, file), values);
	}
}
