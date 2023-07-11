export function current_folder(path) {
  const fs = require('fs');

  const lastSlashIndex = path.lastIndexOf('/');
  const directoryPath = path.substring(0, lastSlashIndex);
  return fs.readdirSync(directoryPath)
}
