import { getParsedConfig } from "../../utils/parseTerminalConfig.js";
import { mode } from "../../utils/findMode.js";

const parsedConfig = getParsedConfig()

const theme = parsedConfig[mode]?.theme || 'green';
const themeStyles = {
  green: { backgroundColor: "#000000", color: "#00FF00" },
  blue: { backgroundColor: "#001F3F", color: "#7FDBFF" },
  red: { backgroundColor: "#3F0000", color: "#FF4136" },
  purple: { backgroundColor: "#2E004F", color: "#B10DC9" },
  yellow: { backgroundColor: "#4F4F00", color: "#FFDC00" }
};

const selectedTheme = themeStyles[theme] || themeStyles.green;

export {selectedTheme};