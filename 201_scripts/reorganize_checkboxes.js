function reorganize(tp){
  const fs = require('fs')

  const filePath = tp.file.path()
  const currentFolderPath = tp.user.current_folder_path(filePath)
  const filesIntoFolder = fs.readdirSync(currentFolderPath)
  
  const currentFileName = tp.config.active_file.basename
  const nameToDate = new Date(currentFileName)

  // TODO: pensar que hacer cuando hay dias faltantes entremedio
  debugger
  const previousDate = new Date(nameToDate.getTime());
  previous.setDate(date.getDate() - 1);

  debugger
  const previousFileName = filesIntoFolder.find(filename => {
    const match = filename.match(/^(\d+)_/)
    return match ? +match[1] === previousDate : false
  });

  const previousFile = tp.file.find_tfile(previousFileName)
  
  debugger



  
  debugger
  return 'nepe'
}

module.exports = reorganize;