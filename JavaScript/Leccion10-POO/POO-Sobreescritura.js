class Empleado {
    constructor(nombre,sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    // hay que definir los get y set---Pero solo para este ejemplo no se hace.

    obtenerDetalles(){
        return `Empleado: Nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor (nombre, sueldo, departamento){
        super(nombre,sueldo, departamento);
        this._departamento = departamento;
    }
    // Aca estamos sobre escribiendo el metodo de la clase padre y agregandole los datos de la clase hija
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} + depto: ${this._departamento}`; 
    }
}
//! Polimorfismo
// Metodo independiente
function imprimir(tipo){
    // segun el tipo que proporcionemos es lo que se va a imprimir
    // Con una linea de codigo podemos ejecutar un metodo de la clase padre o de la clase hija. 
    // dependiendo del tipo que este apuntando
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof(Gerente)){ // asi se define la clase instance of
        console.log('Es un objeto de tipo gerente');
        console.log("Departamento de: "+tipo._departamento);
    }else{
        console.log('es clase empleado '+ tipo._nombre)
        // pero.
        console.log("es del departamento de: " + tipo._departamento);
    };
}

let empleado1 = new Empleado('Juan', 3000);
// console.log(empleado1.obtenerDetalles());

let gerente1 = new Gerente ('Carlos',5000,'Sistemas');
// console.log(gerente1.obtenerDetalles());

imprimir(empleado1);
imprimir(gerente1);