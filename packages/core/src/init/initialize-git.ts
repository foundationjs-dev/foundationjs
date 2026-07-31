import { createGitProvider } from "../git/index.js";

export async function initializeGit(
	directory: string,
	commitMessage = "Initial commit",
): Promise<void> {
	const git = createGitProvider();

	await git.init(directory);
	await git.addAll(directory);
	await git.commit(directory, commitMessage);
}
