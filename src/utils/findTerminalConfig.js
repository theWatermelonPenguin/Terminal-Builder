import fs from 'fs';
import path from 'path';

export function findTerminalConfigs(dir, found = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findTerminalConfigs(fullPath, found);
    } else if (entry.isFile() && entry.name === 'terminal.json') {
      found.push(fullPath);
    }
  }

  return found;
}
