const fs = require("fs");
fs.appendFileSync(
  "./Nuevo_archivo.txt",
  " esto es lo que se agrega al ultimo",
  "utf8"
);
