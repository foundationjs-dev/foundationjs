import { BootstrapProject } from "./project.js";

export async function loadProject(
  cwd: string = process.cwd(),
): Promise<BootstrapProject> {
  void cwd;

  throw new Error("Not implemented.");
}
