export interface Project {
	readonly name: string;
	readonly type: string;

	readonly root: string;

	readonly packageManager: "pnpm" | "npm" | "yarn" | "bun" | "unknown";

	readonly language: string;

	readonly config: unknown;
}
