import type { ArchetypeManifest } from "@paszed/archetypes";

import type { Automation } from "../automations/index.js";
import type { Capability } from "../capabilities/index.js";
import type { Integration } from "../integrations/index.js";

export interface FoundationPlan {
	projectName: string;

	archetype: ArchetypeManifest;

	capabilities: readonly Capability[];

	integrations: readonly Integration[];

	automations: readonly Automation[];
}
