function reorganize(tp){
  const filePath = tp.file.path();
  tp.user.current_folder = current_folder(filePath)
  
  debugger
  return 'nepe'
}

module.exports = reorganize;