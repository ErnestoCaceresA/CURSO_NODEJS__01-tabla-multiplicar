
const { boolean } = require("yargs");
const { crearArchivo } = require("./helpers/multiplicar");
const yargs  = require("./config/yargs");


// checar documentacion de yargs en la pagina de npm buscando el paquete yargs y despues ir a su pagina web (home page)
//----------------------------------------------------------------------------------------
//node app --help (saldran los dos por defecto de yargs y esos nuevos personalizados de base, listar y hasta)
//----------------------------------------------------------------------------------------
console.clear();

// CHECAR APARTADO DE YARGS EN: CONFIG/YARGS.JS

// console.log(process.argv); //el predefinido de la consola
console.log(yargs); //el del paquete que installamos npm i yargs
console.log("base:", yargs.base);

crearArchivo( yargs.base , yargs.l, yargs.h)
    .then(nombreArchivo => console.log(nombreArchivo, `creado`) )
    .catch( err => console.log(err) );