function get_next_number(tp){
  var fs = require('fs');
  current_folder_path = tp.file.path(true)
  current_folder = fs.readdirSync(current_folder_path)
  debugger

}

module.exports = get_next_number;