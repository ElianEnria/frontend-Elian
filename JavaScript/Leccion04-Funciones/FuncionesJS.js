//! declaracion de la funcion puede ir con o sin argumentos
// function miFuncion(a, b){   
//     console.log(arguments.length);
//     return a + b;
// }

//! Llamado a la funcion
// let resultado = miFuncion(2,3);
// console.log(resultado);

//TODO funciones de tipo expresion. 
// let sumar= function(a,b){return a + b};
// resultado = sumar(1,2);
// console.log(resultado);

// funciones tipo self o que se llaman por si sola

// (function (){
    
//     console.log('Ejecutando la funcion');
// })();

//funciones como tipo objetos

// var miFuncionTexto = miFuncion.toString();
// console.log(miFuncionTexto);


//TODO Funcion flecha
// let sumar= function(a,b){return a + b};
// resultado = sumar(1,2);
// console.log(resultado);
// const sumarFuncionTipoFlecha = (a,b) => (a + b);
// resultado = sumarFuncionTipoFlecha(3,5);
// console.log(resultado);

let sumar= function(a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2];
};

resultado = sumar(1,3,4);
console.log(resultado);