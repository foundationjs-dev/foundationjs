import type { ARCHETYPE_REGISTRY } from "./registry.js";

export type Archetype =
	(typeof ARCHETYPE_REGISTRY)[number]["name"];
