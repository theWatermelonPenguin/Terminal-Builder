import readline from 'readline';
import { findResponse } from './commands.js';

export function startPrompt(commands) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function promptLoop() {
    rl.question("> ", answer => {
      console.log(findResponse(commands, answer));
      promptLoop();
    });
  }

  promptLoop();
}
