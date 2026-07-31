import type { PackageManagerKind } from "./package-manager-kind.js";

export function detectPackageManager(): PackageManagerKind {
	return "pnpm";
}
