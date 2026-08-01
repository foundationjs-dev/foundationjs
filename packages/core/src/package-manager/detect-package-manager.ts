import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

import type { PackageManager } from "./types.js";

const LOCKFILES: Array<[string, PackageManager]> = [
	["pnpm-lock.yaml", "pnpm"],
	["package-lock.json", "npm"],
	["yarn.lock", "yarn"],
	["bun.lockb", "bun"],
];

function parsePackageManager(value: unknown): PackageManager | undefined {
	if (typeof value !== "string") {
		return;
	}

	if (value.startsWith("pnpm")) {
		return "pnpm";
	}

	if (value.startsWith("npm")) {
		return "npm";
	}

	if (value.startsWith("yarn")) {
		return "yarn";
	}

	if (value.startsWith("bun")) {
		return "bun";
	}

	return;
}

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
		const packagePath = resolve(directory, "package.json");
		const content = await readFile(packagePath, "utf8");
		const packageJson = JSON.parse(content);

		return parsePackageManager(packageJson.packageManager) ?? "unknown";
	} catch {
		return "unknown";
	}
}
