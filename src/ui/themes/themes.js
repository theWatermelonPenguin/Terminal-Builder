import { getParsedConfig } from "../../utils/parseTerminalConfig.js";
import { mode } from "../../utils/findMode.js";

const parsedConfig = getParsedConfig()

const theme = parsedConfig[mode]?.theme || 'green';
const themeStyles = {
  green: { backgroundColor: "#000000", color: "#00FF00" },
  blue: { backgroundColor: "#001F3F", color: "#7FDBFF" }
};
const selectedTheme = themeStyles[theme] || themeStyles.green;

export {selectedTheme};