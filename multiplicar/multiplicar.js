const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor ${ base } de la base introducida no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`el valor ${ base } del limite introducido no es un número`);
            return;
        }

        console.log('====================================='.green);
        console.log(`TABLA DE ${ base } HASTA ${ limite }`.green);
        console.log('====================================='.green);

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        resolve(data);
    });
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor ${ base } de la base introducida no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`el valor ${ base } del limite introducido no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }.txt`);
            //console.log(`El archivo tabla-${ base }.txt ha sido creado!`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}