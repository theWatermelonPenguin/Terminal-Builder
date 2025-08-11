import fs from 'fs';
import path from 'path';

export function findThemeConfigs(dir, found = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findThemeConfigs(fullPath, found);
    } else if (entry.isFile() && entry.name === 'theme.yaml') {
      found.push(fullPath);
    }
  }

  return found;
}
