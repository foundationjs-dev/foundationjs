export interface RepositoryProvider {
	name: string;

	create(options: { name: string; directory: string }): Promise<void>;
}
