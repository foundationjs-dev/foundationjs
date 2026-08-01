export interface ProjectResult {
	name?: string;
	archetype?: string;
	packages: string[];
	packageManager: string;
	language?: string;
	framework?: string;
	hasFoundationMetadata: boolean;
	hasGit: boolean;
}
