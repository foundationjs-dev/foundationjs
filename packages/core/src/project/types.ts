export interface Project {
	readonly name: string;
	readonly type: string;

	readonly root: string;

	readonly packageManager: "pnpm" | "npm" | "yarn" | "bun";

	readonly language: string;

	readonly config: {
		readonly archetype?: {
			readonly name?: string;
		};

		readonly framework?: string;

		readonly createdAt?: string;
	};
}
