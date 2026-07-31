import { cp } from "node:fs/promises";

/**
 * Recursively copies a directory.
 */
export async function copyDirectory(
	source: string,
	destination: string,
): Promise<void> {
	await cp(source, destination, {
		recursive: true,
		force: true,
		errorOnExist: false,
	});
}
