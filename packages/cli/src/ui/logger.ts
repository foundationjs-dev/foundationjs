export function info(message: string): void {
	console.log(`ℹ ${message}`);
}

export function success(message: string): void {
	console.log(`✔ ${message}`);
}

export function error(message: string): void {
	console.error(`✖ ${message}`);
}
