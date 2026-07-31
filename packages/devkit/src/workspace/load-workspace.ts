import { findWorkspaceRoot } from "./find-workspace-root.js";
import { listPackages } from "./list-packages.js";
import { readPackageJson } from "./read-package-json.js";
import { readPnpmWorkspace } from "./read-pnpm-workspace.js";
import { readTurboConfig } from "./read-turbo-config.js";

import type { TurboConfig, WorkspacePackage } from "../types/index.js";

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

	const directories = await listPackages(
		root,
		pnpmWorkspace.packages,
	);

	const packages: WorkspacePackage[] = await Promise.all(
		directories.map(async (directory) => {
			const packageJson = await readPackageJson(directory);

			return {
				name: packageJson.name,
				path: directory,
				packageJsonPath: `${directory}/package.json`,
			};
		}),
	);

	return {
		root,
		packageJson,
		pnpmWorkspace,
		turbo,
		packageManager: "pnpm" as const,
		packages,
	};
}
