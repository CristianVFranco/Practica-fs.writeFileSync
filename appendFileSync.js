const fs = require("fs");
fs.appendFileSync(
  "./Nuevo_archivo.txt",
  " \n esto es lo que se agrega al ultimo",
  "utf8"
);
