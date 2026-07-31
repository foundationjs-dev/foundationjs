import { cp } from "node:fs/promises";
import { resolve } from "node:path";

import { type ArchetypeManifest, getArchetypePath } from "@paszed/archetypes";

interface CopyProjectOptions {
	archetype: ArchetypeManifest;
	destination: string;
}

export async function copyProject(options: CopyProjectOptions): Promise<void> {
	const source = resolve(getArchetypePath(options.archetype.name));

	await cp(source, options.destination, {
		recursive: true,
	});
}
