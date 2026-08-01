import { createPackageManager, detectPackageManager } from "./index.js";

export async function installDependencies(directory: string): Promise<void> {
	const kind = await detectPackageManager(directory);
	const packageManager = createPackageManager(kind);

	await packageManager.install(directory);
}
