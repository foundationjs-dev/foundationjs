import { ARCHETYPE_REGISTRY } from "./registry.js";
import type { ArchetypeManifest } from "./manifest.js";

export function listArchetypes(): readonly ArchetypeManifest[] {
	return ARCHETYPE_REGISTRY;
}
