import { githubIntegration } from "../../integrations/github/index.js";
import type { FoundationPlugin } from "../plugin.js";

export const githubPlugin: FoundationPlugin = {
	name: "github",

	integrations: [githubIntegration],
};
