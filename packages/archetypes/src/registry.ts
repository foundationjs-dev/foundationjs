import type { ArchetypeManifest } from "./manifest.js";

export const ARCHETYPE_REGISTRY = [
	{
		name: "platform",
		description: "Production application platform",
		kind: "project",
		path: "projects/platform",
	},
	{
		name: "cli",
		description: "Command line application",
		kind: "project",
		path: "projects/cli",
	},
	{
		name: "library",
		description: "Reusable TypeScript library",
		kind: "project",
		path: "projects/library",
	},
	{
		name: "feature",
		description: "Feature building block",
		kind: "building-block",
		path: "building-blocks/feature",
	},
	{
		name: "service",
		description: "Service building block",
		kind: "building-block",
		path: "building-blocks/service",
	},
] satisfies ArchetypeManifest[];
