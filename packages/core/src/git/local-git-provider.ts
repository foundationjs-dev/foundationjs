import { execa } from "execa";

import type { GitProvider } from "./git-provider.js";

export class LocalGitProvider implements GitProvider {
	public async init(directory: string): Promise<void> {
		await execa("git", ["init"], {
			cwd: directory,
			stdio: "inherit",
		});
	}

	public async addAll(directory: string): Promise<void> {
		await execa("git", ["add", "."], {
			cwd: directory,
			stdio: "inherit",
		});
	}

	public async commit(directory: string, message: string): Promise<void> {
		await execa("git", ["commit", "-m", message], {
			cwd: directory,
			stdio: "inherit",
		});
	}
}
