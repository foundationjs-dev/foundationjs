export interface IntegrationStatus {
	name: string;

	installed: boolean;

	authenticated: boolean;

	account?: string;

	message?: string;
}

export interface Integration {
	name: string;

	detect(): Promise<IntegrationStatus>;
}
