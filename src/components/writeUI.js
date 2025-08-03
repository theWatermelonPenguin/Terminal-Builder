import { prefix, unknownMessage, placeholder} from "./input.js";
import { selectedTheme } from "../ui/themes/themes.js";
import { getParsedConfig } from "../utils/parseTerminalConfig.js";
import { mode } from "../utils/findMode.js";
import { shared } from "../utils/selectShared.js"
import fs from 'fs';
import path from 'path';

const parsedConfig = getParsedConfig();

const html = `
  <div style="background-color: ${shared?.backgroundColor || selectedTheme.backgroundColor}; color: ${selectedTheme.color}; padding: 10px; font-family: monospace;">
    <h1>${shared?.title || parsedConfig[mode]?.title || "Untitled Terminal"}</h1>
    <div class="terminal-body" id="terminal-body">
      <div>${prefix} Welcome to Terminal Builder!</div>
    </div>
    <div>
      <span id="input-prefix">${prefix}</span>
      <input type="text" id="terminal-input" placeholder="${placeholder}" autofocus />
    </div>
    <script>
      const commands = ${JSON.stringify(parsedConfig.commands)};
      const input = document.getElementById('terminal-input');
      const body = document.getElementById('terminal-body');

      input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          const userInput = input.value;
          const match = commands.find(c => c.prompt === userInput);
          const response = match ? match.response : "${unknownMessage}";
          const out = document.createElement('div');
          out.innerHTML = '${prefix} ' + userInput + '<br>' + response;
          body.appendChild(out);
          input.value = '';
          body.scrollTop = body.scrollHeight;
        }
      });
    </script>
  </div>
`;

const DesktopDir = path.join(process.cwd(), 'src', 'ui', 'window');
if (!fs.existsSync(DesktopDir)) {
  fs.mkdirSync(DesktopDir);
}

const WebDir = path.join(process.cwd(), 'src', 'ui', 'web');
if (!fs.existsSync(WebDir)) {
    fs.mkdirSync(WebDir);
}

if (mode === 'web') {
  // Write to terminal_ui.html for web mode
  const outputFile = path.join(WebDir, 'terminal.html');
  fs.writeFileSync(outputFile, html, 'utf-8');
  console.log(`HTML written to ${outputFile}`);
} else {
    const outputFile = path.join(DesktopDir, 'terminal.html');
    fs.writeFileSync(outputFile, html, 'utf-8');
    console.log(`HTML written to ${outputFile}`);
}
// Write to terminal.html

