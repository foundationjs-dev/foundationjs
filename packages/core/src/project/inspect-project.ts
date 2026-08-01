import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

import { loadProject } from "./load-project.js";
import type { ProjectResult } from "./project-result.js";

export async function inspectProject(
	directory = process.cwd(),
): Promise<ProjectResult> {
	const foundationPath = resolve(directory, ".foundation.json");
	const packagePath = resolve(directory, "package.json");
	const gitPath = resolve(directory, ".git");

	let name: string | undefined;
	let archetype: string | undefined;

	let hasFoundationMetadata = false;

	try {
		const content = await readFile(foundationPath, "utf8");
		const metadata = JSON.parse(content);

		hasFoundationMetadata = true;
		name = metadata.name;
		archetype = metadata.archetype?.name;
	} catch {}

	let packages: string[] = [];

	try {
		const content = await readFile(packagePath, "utf8");
		const manifest = JSON.parse(content);

		packages = [
			...Object.keys(manifest.dependencies ?? {}),
			...Object.keys(manifest.devDependencies ?? {}),
		];
	} catch {}

	let hasGit = false;

	try {
		await access(gitPath);
		hasGit = true;
	} catch {}

	let packageManager = "unknown";
	let language: string | undefined;
	let framework: string | undefined;

	if (hasFoundationMetadata) {
		try {
			const project = await loadProject(directory);

			packageManager = project.project.packageManager;
			language = project.project.language;

			const config = project.project.config;

			if (typeof config === "object" && config !== null) {
				framework =
					"framework" in config ? String(config.framework) : undefined;
			}
		} catch {}
	}

	return {
		name,
		archetype,
		packages,
		packageManager,
		language,
		framework,
		hasFoundationMetadata,
		hasGit,
	};
}
