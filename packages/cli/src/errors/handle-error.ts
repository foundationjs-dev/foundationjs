import { error } from "../ui/index.js";

export function handleError(reason: unknown): never {
	if (reason instanceof Error) {
		error(reason.message);
	} else {
		error("An unknown error occurred.");
	}

	process.exit(1);
}
