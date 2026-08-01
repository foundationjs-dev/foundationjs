import { createPackageManager, detectPackageManager } from "./index.js";

export async function installDependencies(directory: string): Promise<void> {
	const kind = await detectPackageManager(directory);

	if (kind === "unknown") {
		throw new Error("Unable to detect package manager.");
	}

	const packageManager = createPackageManager(kind);

	await packageManager.install(directory);
}
