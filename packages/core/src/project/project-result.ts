export interface ProjectResult {
	name?: string;
	archetype?: string;
	packages: string[];
	hasFoundationMetadata: boolean;
	hasGit: boolean;
}
