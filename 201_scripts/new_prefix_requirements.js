function new_prefix_requirements(tp){
  const fs = require('fs');

  const filePath = tp.file.path();
  const lastSlashIndex = filePath.lastIndexOf('/');
  const directoryPath = filePath.substring(0, lastSlashIndex);
  const currentFolder = fs.readdirSync(directoryPath)
  
  let numbers = currentFolder.map(filename => {
    const match = filename.match(/^(\d+)_/);
    return match ? parseInt(match[1]) : 0;
  });

  const maxNumber = Math.max(...numbers);
  const nextNumber = maxNumber + 1;
  const new_prefix = nextNumber.toString().padStart(4, '0') + '_';

  return new_prefix
}

module.exports = new_prefix_requirements;