import type { TemplateValues } from "@paszed/archetypes";

export function createTemplateValues(projectName: string): TemplateValues {
	return {
		PROJECT_NAME: projectName,
		PACKAGE_NAME: projectName,
	};
}
