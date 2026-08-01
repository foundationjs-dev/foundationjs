import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import { detectPackageManager } from "../package-manager/index.js";
import { BootstrapProject } from "./project.js";

export async function loadProject(
	cwd: string = process.cwd(),
): Promise<BootstrapProject> {
	const foundationPath = resolve(cwd, ".foundation.json");
	const templatePath = resolve(cwd, "template.json");

	const foundation = JSON.parse(await readFile(foundationPath, "utf8"));

	const template = JSON.parse(await readFile(templatePath, "utf8"));

	return new BootstrapProject({
		name: foundation.name,
		type: template.type,
		root: cwd,
		packageManager: await detectPackageManager(cwd),
		language: template.language,
		config: {
			archetype: foundation.archetype,
			framework: template.framework,
			createdAt: foundation.createdAt,
		},
	});
}
