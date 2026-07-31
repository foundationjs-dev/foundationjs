import type { Archetype } from "./archetype.js";
import { ARCHETYPE_REGISTRY } from "./registry.js";
import type { ArchetypeManifest } from "./manifest.js";

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
