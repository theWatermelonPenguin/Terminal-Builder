import { findThemeConfigs } from "./findTheme.js";
import yaml from "js-yaml";
import fs from 'fs';

const configs = findThemeConfigs(process.cwd());
let parsedThemeConfig = {};

if (configs.length > 0) {
  const configPath = configs[0];
  const fileContent = fs.readFileSync(configPath, 'utf-8');
  parsedThemeConfig = yaml.load(fileContent);
}

export function getParsedTheme() {
  return parsedThemeConfig;
}