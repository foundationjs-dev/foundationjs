import fg from "fast-glob";

import { renderArchetype } from "./render-archetype.js";
import type { TemplateValues } from "./template-values.js";

/**
 * Renders every text file inside an archetype.
 */
export async function renderArchetypes(
	root: string,
	values: TemplateValues,
): Promise<void> {
	const files = await fg("**/*", {
		cwd: root,
		absolute: true,
		onlyFiles: true,
		dot: true,
	});

	for (const file of files) {
		await renderArchetype(file, values);
	}
}
