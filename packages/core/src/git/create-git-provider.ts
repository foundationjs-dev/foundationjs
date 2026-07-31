import type { GitProvider } from "./git-provider.js";
import { LocalGitProvider } from "./local-git-provider.js";

export function createGitProvider(): GitProvider {
	return new LocalGitProvider();
}
