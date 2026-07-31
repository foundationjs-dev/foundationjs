import type { Hook } from "../hook.js";

export const exampleHook: Hook = {
	name: "beforeCreate",

	async run(context) {
		void context;
	},
};
