import { createFoundationMetadataHook } from "./built-in/index.js";
import type { Hook } from "./hook.js";
import { HookRunner } from "./hook-runner.js";

export function createHookRunner(
	hooks: Hook[] = [createFoundationMetadataHook],
): HookRunner {
	return new HookRunner(hooks);
}
