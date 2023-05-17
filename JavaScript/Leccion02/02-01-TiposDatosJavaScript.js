// tipo de datos String 
var nombre = "Carlos";
console.log(nombre);

// nombre = 100;
// console.log(typeof nombre)

// Tipo de datos con numeros
var numero = 1000;
console.log(numero);

// Variable como objetos
var objeto = {
    nombre: "Elian",
    apellido: "Enria",
    telefono: "35331234"
}
console.log(objeto)

// Tipo de dato boolean 
// valor:
// true, false

var bandera = false;
console.log(typeof bandera);

// Tipo de dato function

function miFuncion(){

}
console.log(typeof miFuncion);

// Tipo de dato symbol
var simbolo = Symbol("Mi Simbolo");
console.log(typeof simbolo);

// Definir una clase
class Persona{
    // Nos permite contruir nuestro objeto
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);

// tipo undefined
var x;
console.log( typeof x);

// null = ausencia de valor
var y = null
console.log(typeof y);

