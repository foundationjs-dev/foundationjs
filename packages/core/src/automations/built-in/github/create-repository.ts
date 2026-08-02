import { execFile } from "node:child_process";
import { promisify } from "node:util";

import type { Automation } from "../../automation.js";

const execFileAsync = promisify(execFile);

export const githubRepositoryAutomation: Automation = {
	name: "github:create-repository",

	description: "Create or connect a GitHub repository and push the project",

	async canRun() {
		try {
			const { stdout, stderr } = await execFileAsync("gh", ["auth", "status"]);

			const output = `${stdout}\n${stderr}`;

			return output.includes("Logged in");
		} catch {
			return false;
		}
	},

	async run(context) {
		try {
			const { stdout } = await execFileAsync("gh", [
				"api",
				"user",
				"--jq",
				".login",
			]);

			const owner = stdout.trim();
			const repository = `${owner}/${context.projectName}`;

			const exists = await repositoryExists(repository);

			if (exists) {
				await execFileAsync(
					"git",
					["remote", "add", "origin", `git@github.com:${repository}.git`],
					{
						cwd: context.directory,
					},
				);

				await execFileAsync("git", ["push", "-u", "origin", "main"], {
					cwd: context.directory,
				});

				return;
			}

			await execFileAsync(
				"gh",
				[
					"repo",
					"create",
					context.projectName,
					"--source",
					context.directory,
					"--push",
					"--private",
				],
				{
					cwd: context.directory,
				},
			);
		} catch (error) {
			throw new Error(
				`GitHub repository setup failed: ${
					error instanceof Error ? error.message : String(error)
				}`,
			);
		}
	},
};

async function repositoryExists(repository: string): Promise<boolean> {
	try {
		await execFileAsync("gh", ["repo", "view", repository]);

		return true;
	} catch {
		return false;
	}
}
