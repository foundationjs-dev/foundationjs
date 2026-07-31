import { join } from "node:path";

import { copyDirectory } from "@paszed/devkit";

export async function copyAssets(
	foundationRoot: string,
	projectRoot: string,
): Promise<void> {
	await copyDirectory(join(foundationRoot, "assets"), projectRoot);
}
