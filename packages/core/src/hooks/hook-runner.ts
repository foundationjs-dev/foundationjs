import type { Hook } from "./hook.js";
import type { HookContext } from "./hook-context.js";

export class HookRunner {
	public constructor(private readonly hooks: Hook[] = []) {}

	public async run(name: Hook["name"], context: HookContext): Promise<void> {
		for (const hook of this.hooks) {
			if (hook.name === name) {
				await hook.run(context);
			}
		}
	}
}
