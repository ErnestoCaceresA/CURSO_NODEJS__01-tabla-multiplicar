const yargs = require("yargs")
                            .option("b", { //para mandar por consola la base node app -b 8
                                alias: "base",
                                type: "number",
                                demandOption: true, //que es obligatorio
                                describe: "Es la base de la tabla de multiplicar"
                            })
                            .option("l", { //para ver si quiere que se imprima por consola o solo crear el archivo, node app -b 8 -l
                                alias: "listar",
                                type: "boolean",
                                default: false,
                                describe: "Muestra la tabla en consola"
                            })
                            .option("h", {
                                alias: "hasta",
                                type: "number",
                                default: 10,
                                describe: "Hasta que numero se quiere imprimir la tabla"
                            })
                            .check((yargs, options) =>{
                                console.log("yargs", yargs)
                                if(isNaN(yargs.b)){ //por si no pone un numero como ej. node app -b=abc
                                    throw "La base tiene que ser un numero";
                                }
                                return true //si no hay ningun error
                            })
                            .argv;

module.exports = yargs;