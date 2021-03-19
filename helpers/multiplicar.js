const fs = require("fs");
const colors = require("colors"); //documentacion npm package buscando el paquete colors

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try{

        
        let salida = "";
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base*i}\n`;
        }

        if(listar){
            console.log(colors.green("------------------------"));
            console.log(colors.rainbow(`TABLA DEL: ${base}`));
            console.log(colors.red("------------------------"));
            console.log(colors.bgMagenta(salida));
        }
    
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); //crea un archivo .txt en la carpeta salida con el nombre señalado
    
        return `tabla-${base}.txt creada`;
    
        // DOCUMENTACION NODE JS / file system / fs.writeFile(file, data[, options], callback)
        //PARA CREAR UN FILE EN EL EQUIPO
    }
    catch (err){
        console.log(err);
    }


}

//SOLAMENTE SE PUEDEN EXPORTAR ASI LAS COSAS EN NODE.JS
module.exports = {
    // crearArchivo: crearArchivo (asi tambien se puede)
    crearArchivo
}