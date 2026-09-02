import fs from "fs/promises";

export async function logStatusToFile(
  filePath: string,
  statusMessage: string,
): Promise<void> {
  const entry = `${statusMessage} - ${new Date().toISOString()}\n`;
  await fs.writeFile(filePath, entry, { flag: "a" });
}
