import * as dotenv from 'dotenv';
import * as path from 'path';
import fs from 'fs';

export function loadEnv(envFileName) {
  const __dirname = path.resolve();
  const envPath = path.resolve(__dirname, `../../${envFileName}`)
  if (fs.existsSync(envPath))
    dotenv.config({ path: envPath });
}