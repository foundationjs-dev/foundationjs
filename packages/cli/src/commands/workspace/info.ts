import { loadWorkspace } from "@paszed/devkit";

import { info } from "../../ui/index.js";

/**
 * Prints information about the current workspace.
 */
export async function workspaceInfo(): Promise<void> {
	const workspace = await loadWorkspace();

	info("Workspace");
	console.log("─────────");
	console.log(`Root: ${workspace.root}`);
	console.log(`Name: ${workspace.packageJson.name}`);

	console.log("");
	info("Packages");
	console.log("────────");

	for (const workspacePackage of workspace.packages) {
		console.log(`• ${workspacePackage.name}`);
	}

	console.log("");
	info("Package Manager");
	console.log("───────────────");
	console.log(workspace.packageManager);

	console.log("");
	info("Turbo");
	console.log("─────");
	console.log(`Tasks: ${Object.keys(workspace.turbo.tasks).join(", ")}`);

	console.log("");
}
