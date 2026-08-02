import {
	dependenciesCapability,
	gitCapability,
	metadataCapability,
	repositoryCapability,
} from "../../capabilities/built-in/index.js";
import type { FoundationPlugin } from "../plugin.js";

export const corePlugin: FoundationPlugin = {
	name: "core",

	capabilities: [
		gitCapability,
		dependenciesCapability,
		metadataCapability,
		repositoryCapability,
	],
};
