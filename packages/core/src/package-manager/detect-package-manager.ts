import { access, readFile } from "node:fs/promises";
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

	try {
		const content = await readFile(resolve(directory, "package.json"), "utf8");

		const manifest = JSON.parse(content);

		if (typeof manifest.packageManager === "string") {
			const [manager] = manifest.packageManager.split("@");

			if (
				manager === "pnpm" ||
				manager === "npm" ||
				manager === "yarn" ||
				manager === "bun"
			) {
				return manager;
			}
		}
	} catch {}

	return "unknown";
}
