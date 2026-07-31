import { ARCHETYPE_REGISTRY } from "./registry.js";
import type { Archetype } from "./archetype.js";

export function assertArchetype(
	value: string,
): asserts value is Archetype {
	if (!ARCHETYPE_REGISTRY.some((item) => item.name === value)) {
		throw new Error(`Unknown archetype: "${value}"`);
	}
}
