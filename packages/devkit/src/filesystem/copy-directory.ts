import { cp } from "node:fs/promises";

interface CopyDirectoryOptions {
	exclude?: string[];
}

/**
 * Recursively copies a directory.
 */
export async function copyDirectory(
	source: string,
	destination: string,
	options: CopyDirectoryOptions = {},
): Promise<void> {
	await cp(source, destination, {
		recursive: true,
		force: true,
		errorOnExist: false,
		filter: (path) => {
			const filename = path.split("/").pop();

			return filename ? !options.exclude?.includes(filename) : true;
		},
	});
}
