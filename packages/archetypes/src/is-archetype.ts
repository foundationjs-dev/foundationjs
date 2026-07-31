import { ARCHETYPE_REGISTRY } from "./registry.js";
import type { Archetype } from "./archetype.js";

export function isArchetype(
	value: string,
): value is Archetype {
	return ARCHETYPE_REGISTRY.some(
		(item) => item.name === value,
	);
}
