import type { Hook } from "./hook.js";
import type { HookContext } from "./hook-context.js";

export class HookRunner {
	private readonly hooks: Hook[];

	public constructor(hooks: Hook[] = []) {
		this.hooks = hooks;
	}

	public register(hook: Hook): void {
		this.hooks.push(hook);
	}

	public async run(name: Hook["name"], context: HookContext): Promise<void> {
		for (const hook of this.hooks) {
			if (hook.name === name) {
				await hook.run(context);
			}
		}
	}
}
