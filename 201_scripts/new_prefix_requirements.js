function new_prefix_requirements(tp){
  var fs = require('fs');

  let filePath = tp.file.path();
  let lastSlashIndex = filePath.lastIndexOf('/');
  let directoryPath = filePath.substring(0, lastSlashIndex);
  debugger
  let current_folder = fs.readdirSync(directoryPath)
  debugger
}

module.exports = new_prefix_requirements;