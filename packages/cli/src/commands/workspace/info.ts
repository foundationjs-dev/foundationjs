import { loadWorkspace, readPackageJson } from "@paszed/devkit";

/**
 * Prints information about the current workspace.
 */
export async function workspaceInfo(): Promise<void> {
	const workspace = await loadWorkspace();

	console.log("");
	console.log("Workspace");
	console.log("─────────");
	console.log(`Root: ${workspace.root}`);
	console.log(`Name: ${workspace.packageJson.name}`);

	console.log("");
	console.log("Packages");
	console.log("────────");

	for (const directory of workspace.packages) {
		const packageJson = await readPackageJson(directory);

		console.log(`• ${packageJson.name}`);
	}

	console.log("");
	console.log("Package Manager");
	console.log("───────────────");
	console.log("pnpm");

	console.log("");
}
