import validate from "validate-npm-package-name";

export function validateProjectName(name: string): void {
	const result = validate(name);

	if (result.validForNewPackages) {
		return;
	}

	const errors = [...(result.errors ?? []), ...(result.warnings ?? [])];

	throw new Error(
		`Invalid project name "${name}"${
			errors.length ? `:\n\n- ${errors.join("\n- ")}` : ""
		}`,
	);
}
