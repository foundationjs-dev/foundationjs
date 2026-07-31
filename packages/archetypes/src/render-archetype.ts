import { readFile, writeFile } from "node:fs/promises";

import type { TemplateValues } from "./template-values.js";

/**
 * Replaces placeholders inside a file.
 */
export async function renderArchetype(
	file: string,
	values: TemplateValues,
): Promise<void> {
	let content = await readFile(file, "utf8");

	for (const [key, value] of Object.entries(values)) {
		content = content.replaceAll(`{{${key}}}`, value);
	}

	await writeFile(file, content, "utf8");
}
