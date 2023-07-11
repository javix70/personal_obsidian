let folderPath = tp.file.folder();
let folders = folderPath.split("/");
let projectFolder = folders[1]; // Asume que el proyecto es el segundo nivel de la estructura de carpetas
tp.print(projectFolder);
