import { access } from "node:fs/promises";
import { resolve } from "node:path";

import type { PackageManager } from "./types.js";

const LOCKFILES: Array<[string, PackageManager]> = [
	["pnpm-lock.yaml", "pnpm"],
	["package-lock.json", "npm"],
	["yarn.lock", "yarn"],
	["bun.lockb", "bun"],
];

export async function detectPackageManager(
	directory = process.cwd(),
): Promise<PackageManager> {
	for (const [lockfile, manager] of LOCKFILES) {
		try {
			await access(resolve(directory, lockfile));
			return manager;
		} catch {}
	}

	return "pnpm";
}
