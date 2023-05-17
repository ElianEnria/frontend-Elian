// Definir un objeto

let persona = {
    nombre : 'Juan',
    apellido : 'Perez',
    email : 'jperez@mail.com',
    edad : 28,
    nombreCompleto : function(){
        return this.nombre + ' ' + this.apellido;
    },
    // miFuncion: function(){}
}

// se crea un objeto en memoria y se le asigna a la variable de persona qe contiene nuestros datos
// asi accedemos a los nombres
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);

// de este modo accedo a todo el atributo:
console.log(persona);

// Al crear una funcion
console.log(persona.nombreCompleto());

// crear un objeto
let persona2 = new Object();
persona2.nombre = 'carlos';
persona2.direccion = 'Saturno 15';
persona2.tel = '55443322';

console.log(persona2.tel);

//! Acceder a las propiedades de un objeto como si fuera un arreglo
console.log(persona.apellido);
console.log(persona['apellido']);

//For in. Este es un for que recorre el objeto. 
for (nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

