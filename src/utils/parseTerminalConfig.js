import { findTerminalConfigs } from "./findTerminalConfig.js";
import yaml from "js-yaml";
import fs from 'fs';

const configs = findTerminalConfigs(process.cwd());
let parsedConfig = {};

if (configs.length > 0) {
  const configPath = configs[0];
  const fileContent = fs.readFileSync(configPath, 'utf-8');
  parsedConfig = yaml.load(fileContent);
}

export function getParsedConfig() {
  return parsedConfig;
}