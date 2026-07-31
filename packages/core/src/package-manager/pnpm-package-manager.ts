import { execa } from "execa";

import type { PackageManager } from "./package-manager.js";

export class PnpmPackageManager implements PackageManager {
	public readonly name = "pnpm" as const;

	public async install(directory: string): Promise<void> {
		await execa("pnpm", ["install"], {
			cwd: directory,
			stdio: "inherit",
		});
	}

	public async run(
		directory: string,
		command: string,
		args: string[] = [],
	): Promise<void> {
		await execa("pnpm", [command, ...args], {
			cwd: directory,
			stdio: "inherit",
		});
	}
}
