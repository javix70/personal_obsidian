
function set_tags(tp) {
  name_project = tp.config.active_file.parent.parent.name
  return name_project
}

module.exports = set_tags;