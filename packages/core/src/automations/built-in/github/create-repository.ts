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

			try {
				await execFileAsync("git", ["push", "-u", "origin", "main"], {
					cwd: context.directory,
				});

				return {
					status: "success",
					title: "GitHub repository connected",
					message: "Remote configured and initial push completed.",
				};
			} catch {
				return {
					status: "warning",
					title: "GitHub repository connected",
					message:
						"Remote contains existing commits. Initial push was skipped.",
					details: ["Run git pull origin main to integrate remote history."],
				};
			}
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

		return {
			status: "success",
			title: "GitHub repository created",
			message: "Repository created and initial push completed.",
		};
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
