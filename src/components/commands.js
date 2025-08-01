export function findResponse(commands, input) {
  const match = commands.find(cmd => cmd.prompt === input);
  return match ? match.response : "Command not recognized.";
}
