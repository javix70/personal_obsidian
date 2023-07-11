function reorganize(tp){
  const fs = require('fs')

  const filePath = tp.file.path()
  const currentFolderPath = tp.user.current_folder_path(filePath)
  const filesIntoFolder = fs.readdirSync(currentFolderPath)
  
  const currentFileName = tp.config.active_file.basename
  const nameToDate = new Date(currentFileName);
  let previousNameToDate = new Date(nameToDate).setDate(nameToDate.getDate() - 1)
  debugger
  toString(previousNameToDate)
  debugger
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