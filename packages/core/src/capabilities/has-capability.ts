import type {
	ArchetypeCapability,
	ArchetypeManifest,
} from "@paszed/archetypes";

export function hasCapability(
	archetype: ArchetypeManifest,
	capability: ArchetypeCapability,
): boolean {
	return archetype.capabilities.includes(capability);
}
