export const ARCHETYPES = ["next-app"] as const;

export type Archetype = (typeof ARCHETYPES)[number];
