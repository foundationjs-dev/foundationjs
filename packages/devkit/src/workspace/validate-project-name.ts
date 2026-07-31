import validate from "validate-npm-package-name";

export interface ProjectNameValidationResult {
	valid: boolean;
	errors: string[];
}

export function validateProjectName(name: string): ProjectNameValidationResult {
	const errors: string[] = [];

	if (!name.trim()) {
		errors.push("Project name cannot be empty.");
	}

	const result = validate(name);

	if (!result.validForNewPackages) {
		errors.push(...(result.errors ?? []));
		errors.push(...(result.warnings ?? []));
	}

	return {
		valid: errors.length === 0,
		errors,
	};
}
