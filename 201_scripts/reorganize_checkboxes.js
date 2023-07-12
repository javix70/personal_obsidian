function reorganize(tp){
  const fs = require('fs')

  const filePath = tp.file.path()
  const currentFolderPath = tp.user.current_folder_path(filePath)
  const filesIntoFolder = fs.readdirSync(currentFolderPath)
  
  const currentFileName = tp.config.active_file.basename

  let dateObjects = filesIntoFolder.map(filename => new Date((filename.replace('.md', '') + 'T00:00:00').split('_')[0]))
  dateObjects = dateObjects.filter(date => date.toISOString().split('T')[0] !== currentFileName)

  dateObjects.sort((a, b) => b - a)
  let highestDate = dateObjects[0].toISOString().split('T')[0]

  const previousFileName = filesIntoFolder.find(filename => filename.includes(highestDate))
  debugger
  const previousFile = tp.file.find_tfile(previousFileName)
  
  debugger



  
  debugger
  return 'nepe'
}

module.exports = reorganize;