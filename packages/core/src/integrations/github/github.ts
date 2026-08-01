import { execFile } from "node:child_process";
import { promisify } from "node:util";

import type { Integration } from "../integration.js";

const execFileAsync = promisify(execFile);

export const githubIntegration: Integration = {
	name: "github",

	async detect() {
		try {
			const { stdout, stderr } = await execFileAsync("gh", ["auth", "status"]);

			const output = `${stdout}\n${stderr}`;
			const account = output.match(/account (\S+)/)?.[1];

			return {
				name: this.name,
				installed: true,
				authenticated: Boolean(account),
				account,
				message: account
					? "Authenticated through GitHub CLI"
					: "GitHub CLI installed but authentication not confirmed",
			};
		} catch (error) {
			const message = error instanceof Error ? error.message : String(error);

			if (message.includes("ENOENT")) {
				return {
					name: this.name,
					installed: false,
					authenticated: false,
					message: "GitHub CLI (gh) is not installed",
				};
			}

			return {
				name: this.name,
				installed: true,
				authenticated: false,
				message: "Run gh auth login",
			};
		}
	},
};
