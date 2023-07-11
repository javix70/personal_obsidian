function current_folder(path) {
  const fs = require('fs');

  debugger
  const lastSlashIndex = path.lastIndexOf('/');
  const directoryPath = path.substring(0, lastSlashIndex);
  return fs.readdirSync(directoryPath)
}

module.exports = current_folder;