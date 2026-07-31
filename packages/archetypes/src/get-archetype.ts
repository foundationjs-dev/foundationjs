import type { Archetype } from "./archetype.js";
import type { ArchetypeManifest } from "./manifest.js";
import { ARCHETYPE_REGISTRY } from "./registry.js";

export function getArchetype(
	name: Archetype,
): ArchetypeManifest {
	const archetype = ARCHETYPE_REGISTRY.find(
		(item) => item.name === name,
	);

	if (!archetype) {
		throw new Error(`Unknown archetype: "${name}"`);
	}

	return archetype;
}
