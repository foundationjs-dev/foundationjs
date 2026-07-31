import { mkdir, readdir } from "node:fs/promises";

export async function ensureEmptyDirectory(path: string): Promise<void> {
  await mkdir(path, { recursive: true });

  const entries = await readdir(path);

  if (entries.length > 0) {
    throw new Error(`Directory "${path}" is not empty.`);
  }
}
