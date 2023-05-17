let x = 10;

function cambiarValor(a){
    a = (arguments[0] = 20);
    return;
};

cambiarValor(x);
console.log(x);
// console.log(a);

// creacion de un objeto

const persona = {
    // Referencia de un objeto 
    nombre : 'Juan',
    apellido : 'Perez'
}
// p1 es un puntero que apunta a la clase o al objeto persona y se referenciara por el espacio en memoria
function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara'
}

// paso por referencia
cambiarValorObjeto(persona);
console.log(persona);