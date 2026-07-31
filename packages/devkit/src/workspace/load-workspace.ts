import { findWorkspaceRoot } from "./find-workspace-root.js";
import { readPackageJson } from "./read-package-json.js";
import { readPnpmWorkspace } from "./read-pnpm-workspace.js";
import { readTurboConfig } from "./read-turbo-config.js";

/**
 * Loads the current workspace.
 */
export async function loadWorkspace(cwd: string = process.cwd()) {
	const root = await findWorkspaceRoot(cwd);

	const [packageJson, pnpmWorkspace, turbo] = await Promise.all([
		readPackageJson(root),
		readPnpmWorkspace(root),
		readTurboConfig(root),
	]);

	return {
		root,
		packageJson,
		pnpmWorkspace,
		turbo,
		packageManager: "pnpm" as const,
	};
}
