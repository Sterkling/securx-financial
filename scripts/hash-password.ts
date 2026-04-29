import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";
import * as readline from "readline";

const scryptAsync = promisify(scrypt);

async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");
  const derivedKey = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${salt}:${derivedKey.toString("hex")}`;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter password to hash: ", async (password) => {
  if (!password) {
    console.log("Password cannot be empty");
    rl.close();
    return;
  }

  const hash = await hashPassword(password);
  console.log("\nPassword hash:");
  console.log(hash);
  console.log("\nAdd this to your .env.local file:");
  console.log(`ADMIN_PASSWORD_HASH=${hash}`);
  rl.close();
});
