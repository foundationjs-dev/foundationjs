import { writeFile } from "node:fs/promises";
import { join } from "node:path";

import type { Hook } from "../hook.js";

export const createFoundationMetadataHook: Hook = {
	name: "afterCreate",

	async run(context) {
		const metadata = {
			name: context.projectName,
			archetype: context.archetype,
			createdAt: new Date().toISOString(),
		};

		await writeFile(
			join(context.destination, ".foundation.json"),
			JSON.stringify(metadata, null, 2),
			"utf8",
		);
	},
};
