import { copyDirectory } from "@paszed/devkit";

import { getArchetypePath } from "./get-archetype-path.js";
import { renderDirectory } from "./render-directory.js";

export async function copyArchetype(
	name: string,
	destination: string,
	values: Record<string, string> = {},
): Promise<void> {
	const source = getArchetypePath(name);

	await copyDirectory(source, destination);
	await renderDirectory(destination, values);
}
