import {getParsedConfig} from "../utils/parseTerminalConfig.js";

const parsedConfig = getParsedConfig()

const inputConfig = parsedConfig.input || {};
const prefix = inputConfig.prefix || '>';
const unknownMessage = inputConfig.unknownCommandMessage || 'Command not found.';
const placeholder = inputConfig.placeholder || '';

export {prefix, unknownMessage, placeholder};
