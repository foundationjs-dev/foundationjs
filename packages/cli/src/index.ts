#!/usr/bin/env node

import { Command } from "commander";

import { registerArchetypesCommand } from "./commands/archetypes/index.js";
import { registerEnvCommand } from "./commands/env/index.js";
import { registerInitCommand } from "./commands/init/index.js";
import { registerWorkspaceCommand } from "./commands/workspace/index.js";
import { registerStatusCommand } from "./commands/status/index.js";

const program = new Command();

program
	.name("foundation")
	.description("Developer platform CLI")
	.version("0.1.0");

registerInitCommand(program);
registerWorkspaceCommand(program);
registerArchetypesCommand(program);
registerEnvCommand(program);
registerStatusCommand(program);

await program.parseAsync(process.argv);
