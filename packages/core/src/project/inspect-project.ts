import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

import { loadProject } from "./load-project.js";
import type { ProjectResult } from "./project-result.js";

export async function inspectProject(
	directory = process.cwd(),
): Promise<ProjectResult> {
	const project = await loadProject(directory);

	const packagePath = resolve(directory, "package.json");
	const gitPath = resolve(directory, ".git");

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

	return {
		name: project.project.name,
		archetype: project.project.config?.archetype?.name,
		packages,
		hasFoundationMetadata: true,
		hasGit,
	};
}
