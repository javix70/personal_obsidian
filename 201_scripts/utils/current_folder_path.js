function current_folder(path) {
  const lastSlashIndex = path.lastIndexOf('/')
  return path.substring(0, lastSlashIndex)
}

module.exports = current_folder