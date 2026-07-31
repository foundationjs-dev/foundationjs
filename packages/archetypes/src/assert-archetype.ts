import { getArchetype } from "./get-archetype.js";
import type { Archetype } from "./archetype.js";

export function assertArchetype(
	value: string,
): asserts value is Archetype {
	getArchetype(value as Archetype);
}
