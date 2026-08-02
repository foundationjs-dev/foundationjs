import type { ArchetypeManifest } from "@paszed/archetypes";

import type { AutomationResult } from "../automations/index.js";

export interface InitProjectResult {
	name: string;

	destination: string;

	archetype: ArchetypeManifest;

	automations: AutomationResult[];
}
