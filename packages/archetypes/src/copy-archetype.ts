import { copyDirectory } from "@paszed/devkit";

import { getArchetypePath } from "./get-archetype-path.js";
import { renderDirectory } from "./render-directory.js";
import type { Archetype } from "./archetype.js";
import type { TemplateValues } from "./template-values.js";

const ARCHETYPE_INTERNAL_FILES = [
	"template.json",
];

export async function copyArchetype(
	name: Archetype,
	destination: string,
	values: TemplateValues,
): Promise<void> {
	const source = getArchetypePath(name);

	await copyDirectory(source, destination, {
		exclude: ARCHETYPE_INTERNAL_FILES,
	});

	await renderDirectory(destination, values);
}
