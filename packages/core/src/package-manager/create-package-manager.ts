import type { PackageManager } from "./package-manager.js";
import type { PackageManagerKind } from "./package-manager-kind.js";
import { PnpmPackageManager } from "./pnpm-package-manager.js";

export function createPackageManager(kind: PackageManagerKind): PackageManager {
	switch (kind) {
		case "pnpm":
			return new PnpmPackageManager();

		default:
			throw new Error(`Unsupported package manager: ${kind}`);
	}
}
