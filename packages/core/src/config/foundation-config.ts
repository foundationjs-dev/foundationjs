import type { Archetype } from "@paszed/archetypes";
import type { PackageManagerKind } from "../package-manager/package-manager-kind.js";

export interface FoundationConfig {
	archetype?: Archetype;

	packageManager?: PackageManagerKind;

	initializeGit?: boolean;

	commitMessage?: string;

	automation?: {
		createRepositories?: boolean;
	};
}
