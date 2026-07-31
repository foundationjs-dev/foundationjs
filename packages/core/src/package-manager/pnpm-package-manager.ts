import type { PackageManager } from "./package-manager.js";

export class PnpmPackageManager implements PackageManager {
	public readonly name = "pnpm" as const;

	public async install(_directory: string): Promise<void> {
		// TODO
	}

	public async run(
		_directory: string,
		_command: string,
		_args: string[] = [],
	): Promise<void> {
		// TODO
	}
}
