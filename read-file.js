const fs = require("fs");
// readFileSync se utiliza para poder leer los archivos que mandemos a traer antes de encoding
const data = fs.readFileSync("./Nuevo_archivo.txt", "utf8");
console.log(data);
