import { getParsedConfig } from "./parseTerminalConfig.js";

const parsedConfig = getParsedConfig();

let shared = {};
if (parsedConfig.shared && typeof parsedConfig.shared === 'object') {
    shared = parsedConfig.shared;
}

// Now you can use shared to merge with the active mode
export {shared}