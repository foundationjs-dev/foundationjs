export interface GitProvider {
	init(directory: string): Promise<void>;

	addAll(directory: string): Promise<void>;

	commit(directory: string, message: string): Promise<void>;
}
