import { cp } from "node:fs/promises";

export async function copyTemplate(
  source: string,
  destination: string,
): Promise<void> {
  await cp(source, destination, {
    recursive: true,
    force: true,
    errorOnExist: false,
  });
}
