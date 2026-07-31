import { join } from "node:path";

import fg from "fast-glob";
import { isRenderable } from "./is-renderable.js";
import { renderArchetype } from "./render-archetype.js";
import type { TemplateValues } from "./template-values.js";

export async function renderDirectory(
	directory: string,
	values: TemplateValues,
): Promise<void> {
	const files = await fg("**/*", {
		cwd: directory,
		onlyFiles: true,
		dot: true,
	});

	await Promise.all(
		files
			.filter(isRenderable)
			.map((file) => renderArchetype(join(directory, file), values)),
	);
}
