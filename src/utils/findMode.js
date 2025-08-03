import { getParsedConfig } from "./parseTerminalConfig.js";

const config = getParsedConfig();

// Get the first key in the YAML object
const firstKey = Object.keys(config)[0];
const mode = firstKey;

export {mode};