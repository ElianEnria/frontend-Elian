let resultado = sumarTodo (5, 4, 13, 10, 9);
console.log(resultado)

function sumarTodo(){
    let sumar = 0;
    for (let i = 0; i < arguments.length; i++) {
        sumar += arguments[i]; // sumar = suma + arguments [i]
    }
    return sumar;
}