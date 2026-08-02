export type AutomationStatus = "success" | "info" | "warning" | "error";

export interface AutomationResult {
	status: AutomationStatus;

	title: string;

	message?: string;

	details?: string[];
}
