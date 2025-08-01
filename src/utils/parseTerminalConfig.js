import { findTerminalConfigs } from "./findTerminalConfig.js";
import fs from 'fs';

const configs = findTerminalConfigs(process.cwd());
let parsedConfig = {};

if (configs.length > 0) {
  const configPath = configs[0];
  const fileContent = fs.readFileSync(configPath, 'utf-8');
  parsedConfig = JSON.parse(fileContent);
}

export function getParsedConfig() {
  return parsedConfig;
}