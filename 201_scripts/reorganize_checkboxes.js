function reorganize(tp){
  const fs = require('fs')

  const filePath = tp.file.path()
  const currentFolderPath = tp.user.current_folder_path(filePath)
  const filesIntoFolder = fs.readdirSync(currentFolderPath)

  const currentFileName = tp.config.active_file.name
  const currentFileNumber = +currentFileName.match(/^(\d+)_/)[1]
  const previousFileNumber = currentFileNumber - 1

  const previousFileName = filesIntoFolder.find(filename => {
    const match = filename.match(/^(\d+)_/)
    return match ? +match[1] === previousFileNumber : false
  });

  const previousFile = tp.file.find_tfile(previousFileName)
  
  debugger



  
  debugger
  return 'nepe'
}

module.exports = reorganize;