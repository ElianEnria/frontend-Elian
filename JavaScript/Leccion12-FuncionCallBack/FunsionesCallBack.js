
// function imprimir(mensaje){
//     console.log(mensaje);
// }

// function sumar(op1, op2, imprimir){
//     let res = op1 + op2 ;
//     imprimir( "resultado: " +res);
// }

// sumar(5,3, imprimir);

// // llamadas asincronas con uso de setTimeOut
// function miFuncionCallback (){
//     console.log('saludo asincrono despues de 3seg');
// }

// setTimeout(miFuncionCallback, 3000 ); //no hace falta poner los parentesis

// setTimeout(function(){console.log('saludo asincrono 2')}, 5000);

// setTimeout(() => console.log("Saludo Flecha 8 "), 8000);

// const tiempo = 3000;
// setTimeout(() =>  {
//     console.log("saludo flecha 1")
// }, tiempo);

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}: ${fecha.getMinutes()}: ${fecha.getSeconds()}`);
}

setInterval(reloj, 1000);


