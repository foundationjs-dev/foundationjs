import { INTEGRATION_REGISTRY } from "@paszed/core";
import type { Command } from "commander";

import { success } from "../../ui/index.js";

export function registerEnvCommand(program: Command): void {
	program
		.command("env")
		.description("Show detected development environment")
		.action(async () => {
			success("Foundation Environment\n");

			for (const integration of INTEGRATION_REGISTRY.values()) {
				const status = await integration.detect();

				console.log(status.name);

				console.log(status.installed ? "✓ Installed" : "✗ Not installed");

				console.log(
					status.authenticated
						? `✓ Authenticated${status.account ? ` (${status.account})` : ""}`
						: "✗ Not authenticated",
				);

				if (status.message) {
					console.log(status.message);
				}

				console.log();
			}
		});
}
