import type { Archetype } from "@paszed/archetypes";

export interface InitProjectOptions {
	name: string;
	archetype?: Archetype;
	initializeGit?: boolean;
	commitMessage?: string;
	installDependencies?: boolean;
}
