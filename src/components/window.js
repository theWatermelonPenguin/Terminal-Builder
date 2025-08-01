import electron from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

const { app, BrowserWindow } = electron;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function launchWindow() {
  app.whenReady().then(() => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, '../ui/desktop/renderer.js') // optional
      }
    });

    win.loadFile(path.join(__dirname, '../ui/desktop/terminal.html'));

    // Optional: reopen window on macOS when dock icon clicked
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) launchWindow();
    });
  });

  // Optional: quit app when all windows closed (except on macOS)
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
}
