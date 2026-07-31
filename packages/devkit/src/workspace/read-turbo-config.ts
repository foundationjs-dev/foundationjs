import { join } from "node:path";

import { readJson } from "@paszed/shared";

import type { TurboConfig } from "../types/index.js";

export async function readTurboConfig(
	workspaceRoot: string,
): Promise<TurboConfig> {
	return readJson<TurboConfig>(join(workspaceRoot, "turbo.json"));
}
