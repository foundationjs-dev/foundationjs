#!/usr/bin/env node

import { initializeFoundation } from "@paszed/core";
import { Command } from "commander";

import { registerArchetypesCommand } from "./commands/archetypes/index.js";
import { registerEnvCommand } from "./commands/env/index.js";
import { registerInitCommand } from "./commands/init/index.js";
import { registerStatusCommand } from "./commands/status/index.js";
import { registerWorkspaceCommand } from "./commands/workspace/index.js";

initializeFoundation();

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
