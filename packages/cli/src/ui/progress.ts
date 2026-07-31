export interface Progress {
	start(message: string): void;
	update(message: string): void;
	success(message: string): void;
	stop(): void;
}

export function createProgress(): Progress {
	let active = false;

	return {
		start(message) {
			active = true;
			console.log(`⠋ ${message}`);
		},

		update(message) {
			if (active) {
				console.log(`→ ${message}`);
			}
		},

		success(message) {
			if (active) {
				console.log(`✔ ${message}`);
			}
		},

		stop() {
			active = false;
		},
	};
}
