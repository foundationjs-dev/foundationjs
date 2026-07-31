import { ARCHETYPES, type Archetype } from "./archetype.js";

export function assertArchetype(value: string): asserts value is Archetype {
	if (!ARCHETYPES.includes(value as Archetype)) {
		throw new Error(`Unknown archetype: "${value}"`);
	}
}
