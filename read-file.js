const fs = require("fs");

const data = fs.readFileSync("./Nuevo_archivo.txt", "utf8");
console.log(data);
