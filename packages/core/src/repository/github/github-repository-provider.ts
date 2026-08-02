import { execFile } from "node:child_process";
import { promisify } from "node:util";

import type { RepositoryProvider } from "../repository-provider.js";

const execFileAsync = promisify(execFile);

export const githubRepositoryProvider: RepositoryProvider = {
	name: "github",

	async create({ name, directory }) {
		await execFileAsync(
			"gh",
			["repo", "create", name, "--source", directory, "--push", "--private"],
			{
				cwd: directory,
			},
		);
	},
};
