//TODO formas de definir un array
//! let autos = new Array ('bmw','mercedes benz', 'volvo');
// Esto no se usa


// asi se define un arreglos
const autos = ['bmw','mercedes benz', 'volvo'];
console.log(autos);

console.log (autos[0]);

// asi se recorre por completo

for (let i = 0; i < autos.length; i++) {
    console.log(i +' '+ autos[i]);
}

// acceder a los datos y modificarlos

autos[1]= 'Mercedes_Benz';

console.log(autos[1]);

// agregar valores a un arreglo, y se agrega al final
autos.push('Audi');

//! Cuidado FORMAS de agregar elementos al vector
// esto es para conocer la cantidad de elementos del arreglo
console.log(autos.length);

autos[autos.length] = 'Cadillac';
console.log(autos);

autos[6]= 'Ford';
console.log(autos);

console.log(Array.isArray(autos));
console.log(autos instanceof Array);
