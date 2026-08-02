import type { ArchetypeAutomation } from "./automations.js";
import type { ArchetypeCapability } from "./capabilities.js";
import type { ArchetypeDecision } from "./decisions.js";
import type { ArchetypeIntegration } from "./integrations.js";

export type ArchetypeKind =
	| "project"
	| "building-block";

export interface ArchetypeManifest {
	readonly name: string;

	readonly description: string;

	readonly kind: ArchetypeKind;

	readonly path: string;

	readonly capabilities: readonly ArchetypeCapability[];

	readonly integrations: readonly ArchetypeIntegration[];

	readonly automations: readonly ArchetypeAutomation[];

	readonly decisions: readonly ArchetypeDecision[];
}
