import { join } from "node:path";

import { copyTemplate } from "../filesystem/index.js";
import {
  ensureEmptyDirectory,
  validateProjectName,
} from "../workspace/index.js";

export interface CreateProjectOptions {
  name: string;
  templatePath: string;
  destination: string;
}

export async function createProject({
  name,
  templatePath,
  destination,
}: CreateProjectOptions): Promise<void> {
  const validation = validateProjectName(name);

  if (!validation.valid) {
    throw new Error(validation.errors.join("\n"));
  }

  const projectDirectory = join(destination, name);

  await ensureEmptyDirectory(projectDirectory);

  await copyTemplate(templatePath, projectDirectory);
}
