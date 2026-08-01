import {
	dependenciesCapability,
	gitCapability,
	metadataCapability,
} from "./built-in/index.js";
import type { Capability } from "./capability.js";

export const CAPABILITY_REGISTRY = new Map<string, Capability>([
	[gitCapability.name, gitCapability],
	[dependenciesCapability.name, dependenciesCapability],
	[metadataCapability.name, metadataCapability],
]);
