//Es un modulo de NODE interno ,
// no se tiene que instalar ningun paquete y sirve para crear archivos nuevos
const fs = require("fs");
fs.writeFileSync("Nuevo_archivo.txt", "contenido del archivo", "utf8");
