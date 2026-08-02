export type ArchetypeDecisionType =
	| "select"
	| "boolean";

export interface ArchetypeDecision {
	readonly name: string;

	readonly description: string;

	readonly type: ArchetypeDecisionType;

	readonly required?: boolean;

	readonly options?: readonly string[];
}
