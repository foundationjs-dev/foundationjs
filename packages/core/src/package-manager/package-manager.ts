import type { PackageManagerKind } from "./package-manager-kind.js";

export interface PackageManager {
	readonly name: PackageManagerKind;

	install(directory: string): Promise<void>;

	run(directory: string, command: string, args?: string[]): Promise<void>;
}
