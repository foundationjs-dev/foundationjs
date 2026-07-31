import { createPackageManager, detectPackageManager } from "./index.js";

export async function installDependencies(directory: string): Promise<void> {
	const packageManager = createPackageManager(detectPackageManager());

	await packageManager.install(directory);
}
