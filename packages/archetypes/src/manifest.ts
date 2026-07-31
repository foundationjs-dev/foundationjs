export type ArchetypeKind =
	| "project"
	| "building-block";

export interface ArchetypeManifest {
	readonly name: string;
	readonly description: string;
	readonly kind: ArchetypeKind;
	readonly path: string;
}
