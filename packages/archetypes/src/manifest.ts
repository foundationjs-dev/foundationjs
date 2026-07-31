export type ArchetypeKind =
	| "project"
	| "building-block";

export interface ArchetypeManifest {
	name: string;
	description: string;
	kind: ArchetypeKind;
	path: string;
}
