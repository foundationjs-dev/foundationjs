import { listPackages, loadWorkspace, readPackageJson } from "@paszed/devkit";

import { info } from "../../ui/index.js";

/**
 * Prints information about the current workspace.
 */
export async function workspaceInfo(): Promise<void> {
	const workspace = await loadWorkspace();

	const directories = await listPackages(
		workspace.root,
		workspace.pnpmWorkspace.packages,
	);

	info("Workspace");
	console.log("─────────");
	console.log(`Root: ${workspace.root}`);
	console.log(`Name: ${workspace.packageJson.name}`);

	console.log("");
	info("Packages");
	console.log("────────");

	for (const directory of directories) {
		const packageJson = await readPackageJson(directory);

		console.log(`• ${packageJson.name}`);
	}

	console.log("");
	info("Package Manager");
	console.log("───────────────");
	console.log(workspace.packageManager);

	console.log("");
}
