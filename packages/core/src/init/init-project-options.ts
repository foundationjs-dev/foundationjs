import type { Archetype } from "@paszed/archetypes";

export interface InitProjectOptions {
	name: string;
	destination?: string;
	create?: boolean;
	archetype?: Archetype;
	initializeGit?: boolean;
	commitMessage?: string;
	installDependencies?: boolean;
}
