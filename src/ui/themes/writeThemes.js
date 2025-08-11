
import { getParsedTheme } from "../../utils/parseTheme.js";
import path from "path"
import fs from "fs"

const parsedTheme = getParsedTheme()
const js = `
import { getParsedConfig } from "../../utils/parseTerminalConfig.js";
import { mode } from "../../utils/findMode.js";

const parsedConfig = getParsedConfig()

const themeStyles = {
    green: { backgroundColor: "#000000", color: "#00FF00" },
    blue: { backgroundColor: "#001F3F", color: "#7FDBFF" },
    red: { backgroundColor: "#3F0000", color: "#FF4136" },
    purple: { backgroundColor: "#2E004F", color: "#B10DC9" },
    yellow: { backgroundColor: "#4F4F00", color: "#FFDC00" },
    ${parsedTheme?.name}: { backgroundColor: "${parsedTheme?.bgColor}", color: "${parsedTheme?.fgrColor}"}
};

const theme = parsedConfig[mode]?.theme || 'green';

const selectedTheme = themeStyles[theme] || themeStyles.green;

export { selectedTheme } 
`

const ThemeDir = path.join(process.cwd(), 'src', 'ui', 'themes');
if (!fs.existsSync(ThemeDir)) {
  fs.mkdirSync(ThemeDir);
}

const outputFile = path.join(ThemeDir, 'themes.js');
fs.writeFileSync(outputFile, js, 'utf-8');
console.log(`Themes written to ${outputFile}`);