import {
	type Archetype,
	getArchetype,
	isArchetype,
	listArchetypes,
} from "@paszed/archetypes";

export function resolveArchetype(value?: string): Archetype | undefined {
	if (!value) {
		return undefined;
	}

	if (!isArchetype(value)) {
		const available = listArchetypes()
			.map((archetype) => archetype.name)
			.join("\n  ");

		throw new Error(
			`Unknown archetype: "${value}"\n\nAvailable archetypes:\n  ${available}`,
		);
	}

	return getArchetype(value).name;
}
