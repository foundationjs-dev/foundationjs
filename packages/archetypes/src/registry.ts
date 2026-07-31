import type { ArchetypeManifest } from "./manifest.js";

export const ARCHETYPE_REGISTRY = [
	{
		name: "platform",
		description: "Production application platform",
		kind: "project",
		path: "projects/platform",
		capabilities: [
			"git",
			"dependencies",
			"metadata",
		],
	},
	{
		name: "cli",
		description: "Command line application",
		kind: "project",
		path: "projects/cli",
		capabilities: [
			"git",
			"dependencies",
			"metadata",
		],
	},
	{
		name: "library",
		description: "Reusable TypeScript library",
		kind: "project",
		path: "projects/library",
		capabilities: [
			"git",
			"dependencies",
			"metadata",
		],
	},
	{
		name: "feature",
		description: "Feature building block",
		kind: "building-block",
		path: "building-blocks/feature",
		capabilities: [],
	},
	{
		name: "service",
		description: "Service building block",
		kind: "building-block",
		path: "building-blocks/service",
		capabilities: [],
	},
] satisfies ArchetypeManifest[];
