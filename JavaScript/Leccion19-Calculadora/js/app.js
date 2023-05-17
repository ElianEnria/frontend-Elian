console.log('aplicaccion calculadora');

function sumar(){
    let formulario = document.getElementById('formulario');//me trae todo el elemento
    // obtengo los elementos
    let operandoA = formulario ['operandoA'];
    let operandoB = formulario ['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = "La operacion no incluye numeros";
    }
    document.getElementById('resultado').innerHTML = `Resultado de la suma es: ${resultado}`;
    console.log(`Resultado de la suma es: ${resultado}`);
}   