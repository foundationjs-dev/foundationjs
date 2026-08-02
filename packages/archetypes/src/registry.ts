import { defineArchetype } from "./create-archetype.js";
import type { ArchetypeManifest } from "./manifest.js";

export const ARCHETYPE_REGISTRY = [
	defineArchetype({
		name: "platform",
		description: "Production application platform",
		kind: "project",
		path: "projects/platform",
		capabilities: [
			"git",
			"dependencies",
			"metadata",
		],
		integrations: [
			"github",
		],
		automations: [
			"github:create-repository",
		],
		decisions: [],
	}),
	defineArchetype({
		name: "cli",
		description: "Command line application",
		kind: "project",
		path: "projects/cli",
		capabilities: [
			"git",
			"dependencies",
			"metadata",
		],
		integrations: [],
		automations: [],
		decisions: [],
	}),
	defineArchetype({
		name: "library",
		description: "Reusable TypeScript library",
		kind: "project",
		path: "projects/library",
		capabilities: [
			"git",
			"dependencies",
			"metadata",
		],
		integrations: [],
		automations: [],
		decisions: [],
	}),
	defineArchetype({
		name: "feature",
		description: "Feature building block",
		kind: "building-block",
		path: "building-blocks/feature",
		capabilities: [],
		integrations: [],
		automations: [],
		decisions: [],
	}),
	defineArchetype({
		name: "service",
		description: "Service building block",
		kind: "building-block",
		path: "building-blocks/service",
		capabilities: [],
		integrations: [],
		automations: [],
		decisions: [],
	}),
] satisfies ArchetypeManifest[];
