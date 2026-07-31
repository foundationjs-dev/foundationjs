import { access } from "node:fs/promises";

export async function ensureDirectoryDoesNotExist(path: string): Promise<void> {
	try {
		await access(path);

		throw new Error(
			`Directory already exists:\n\n${path}\n\nChoose another project name.`,
		);
	} catch (error) {
		if ((error as NodeJS.ErrnoException).code === "ENOENT") {
			return;
		}

		throw error;
	}
}
