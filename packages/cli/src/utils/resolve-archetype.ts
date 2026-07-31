import {
	type Archetype,
	getArchetype,
	listArchetypes,
} from "@paszed/archetypes";

export function resolveArchetype(value?: string): Archetype | undefined {
	if (!value) {
		return undefined;
	}

	try {
		return getArchetype(value as Archetype).name;
	} catch {
		const available = listArchetypes()
			.map((archetype) => archetype.name)
			.join("\n  ");

		throw new Error(
			`Unknown archetype: "${value}"\n\nAvailable archetypes:\n  ${available}`,
		);
	}
}
