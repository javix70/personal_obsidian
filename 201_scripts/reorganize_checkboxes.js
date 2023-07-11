function reorganize(tp){
  const filePath = tp.file.path();
  const currentFolder = tp.user.get_current_folder(filePath)

  const currentFileName = tp.config.active_file.name
  const currentFileNumber = +currentFileName.match(/^(\d+)_/)[1]
  const previousFileNumber = currentFileNumber - 1

  const previousFileName = currentFolder.find(filename => {
    const match = filename.match(/^(\d+)_/);
    return match ? +match[1] === previousFileNumber : false;
  });

  
  debugger
  return 'nepe'
}

module.exports = reorganize;