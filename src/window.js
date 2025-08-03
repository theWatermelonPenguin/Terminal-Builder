#!/usr/bin/env node
import fs from 'fs';
import yaml from "js-yaml";
import path from 'path';
import { fileURLToPath } from 'url';

import renderWindow from './components/window.js';
import { startPrompt } from './components/prompt.js';
import { findTerminalConfigs } from './utils/findTerminalConfig.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔍 Start looking from current working directory
const foundConfigs = findTerminalConfigs(process.cwd());

if (foundConfigs.length === 0) {
  console.error("No terminal.yaml file found.");
  process.exit(1);
}

const configPath = foundConfigs[0]; // You can add logic to choose if multiple are found
const raw = fs.readFileSync(configPath, 'utf-8');
const terminalConfig = yaml.load(raw);

renderWindow(terminalConfig.window);
startPrompt(terminalConfig.commands);
