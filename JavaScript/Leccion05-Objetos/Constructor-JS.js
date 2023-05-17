// Creacion de un constructor. Siempre se escribe el constructor en mayuscula
function Persona(nombre, apellido, email){
    // aca se crea la propiedad y se crea la variable. O sea la variable y la propiedad
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    // seria como que asignamos el valor del parametro que estamos recibiendo
    this.NombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log (padre);
console.log (padre.NombreCompleto());
let madre = new Persona ('Laura', 'Quintero', 'Lquintero@mail.com');
console.log (madre);

padre.nombre = 'carlos';
console.log ( padre );

//TODO Formas de crear un objeto:

// let miObjeto = new Object();
// let miObjeto2 = {};

// let miCadena1 = new String ('hola');
// let miCadena2 = 'Hola';

// let miNumero = new Number (1);
// let miNumero1 = 1;

// let miBoolean = new Boolean (false);
// let miBoolean2 = false;

// let miArreglo1 = new Array();
// let miArreglo2 = [];

// let miFuncion = new Function();
// let miFuncion2 = function (){};


// Aca agregamos un nuevo atributo.
Persona.prototype.tel = '44332211';

// y luego podemos modificarlo.

padre.tel = '11224455';
madre.tel = '66778899';

console.log(padre.tel + " Padre / Madre " + madre.tel);