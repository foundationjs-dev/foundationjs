import type { Capability } from "../capabilities/capability.js";
import type { Integration } from "../integrations/integration.js";
import type { RepositoryProvider } from "../repository/repository-provider.js";

export interface FoundationPlugin {
	name: string;

	capabilities?: readonly Capability[];

	integrations?: readonly Integration[];

	repositoryProviders?: readonly RepositoryProvider[];
}
