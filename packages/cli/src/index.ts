import { Command } from "commander";

import { registerInitCommand } from "./commands/init/index.js";
import { registerWorkspaceCommand } from "./commands/workspace/index.js";

const program = new Command();

program
	.name("foundation")
	.description("Developer platform CLI")
	.version("0.1.0");

registerInitCommand(program);
registerWorkspaceCommand(program);

await program.parseAsync(process.argv);
