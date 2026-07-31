import { access } from "node:fs/promises";
import { join } from "node:path";

import { initProject } from "@paszed/core";
import { describe, expect, it } from "vitest";

import { createTestDirectory } from "./create-test-directory.js";

async function pathExists(path: string): Promise<boolean> {
	try {
		await access(path);
		return true;
	} catch {
		return false;
	}
}

describe("init project", () => {
	it("creates a project from an archetype", async () => {
		const { directory, cleanup } = await createTestDirectory();

		try {
			const previousDirectory = process.cwd();

			process.chdir(directory);

			const result = await initProject({
				name: "example-project",
				initializeGit: false,
			});

			expect(result.name).toBe("example-project");

			expect(await pathExists(join(directory, "example-project"))).toBe(true);

			process.chdir(previousDirectory);
		} finally {
			await cleanup();
		}
	});
});
