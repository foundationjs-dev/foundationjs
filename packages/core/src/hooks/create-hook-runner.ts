import type { Hook } from "./hook.js";
import { HookRunner } from "./hook-runner.js";

export function createHookRunner(hooks: Hook[] = []): HookRunner {
	return new HookRunner(hooks);
}
