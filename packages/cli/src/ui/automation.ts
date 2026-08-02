import type { AutomationResult } from "@paszed/core";

export function printAutomationResults(results: AutomationResult[]): void {
	if (results.length === 0) {
		return;
	}

	console.log("\nAutomations\n");

	for (const result of results) {
		switch (result.status) {
			case "success":
				console.log(`✔ ${result.title}`);
				break;

			case "info":
				console.log(`→ ${result.title}`);
				break;

			case "warning":
				console.log(`⚠ ${result.title}`);
				break;

			case "error":
				console.log(`✖ ${result.title}`);
				break;
		}

		if (result.message) {
			console.log(`  ${result.message}`);
		}

		for (const detail of result.details ?? []) {
			console.log(`  ${detail}`);
		}

		console.log();
	}
}
