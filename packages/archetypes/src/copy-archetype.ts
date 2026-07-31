import { copyDirectory } from "@paszed/devkit";

import { assertArchetype } from "./assert-archetype.js";
import type { Archetype } from "./archetype.js";
import { getArchetypePath } from "./get-archetype-path.js";
import { renderDirectory } from "./render-directory.js";
import type { TemplateValues } from "./template-values.js";

export async function copyArchetype(
	name: Archetype,
	destination: string,
	values: TemplateValues,
): Promise<void> {
	assertArchetype(name);

	const source = getArchetypePath(name);

	await copyDirectory(source, destination);
	await renderDirectory(destination, values);
}
