import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

export async function createTempDirectory(): Promise<{
	path: string;
	cleanup: () => Promise<void>;
}> {
	const path = await mkdtemp(join(tmpdir(), "foundation-test-"));

	return {
		path,
		cleanup: async () => {
			await rm(path, {
				recursive: true,
				force: true,
			});
		},
	};
}
