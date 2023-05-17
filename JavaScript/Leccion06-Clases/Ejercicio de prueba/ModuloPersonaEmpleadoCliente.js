class Persona {
    // atributo estatico
    static contadorPersona = 0;

    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersona;
    }
    get idPersona() {
        return this.idPersona;
    }
    get nombre() {
        return this._nombre;
    }
    get apellido() {
        return this._apellido;
    }
    get edad() {
        return this._edad;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    set edad(edad) {
        this._edad = edad;
    }
    toString() {
        return `${this._idPersona} 
                    ${this._nombre} 
                    ${this._apellido} 
                    ${this._edad}`;
    }

}


class Empleado extends Persona {
    static contadorEmpleados = 0;
    // el constructor tambien necesita recibir estos parametros
    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }
    get idEmpleado() {
        return this._idEmpleado;
    }
    get sueldo() {
        return this._sueldo;
    }
    // set idEmpleado(idEmpleado){
    //     this._idEmpleado = idEmpleado;
    // }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }

    toString() {
        return `${super.toString()}, 
                    ${this._idEmpleado} id Empleado   
                    \$ ${this._sueldo}`;
    }
}


class Cliente extends Persona {
    static contadorClientes = 0;

    constructor( nombre, apellido,edad, fechaRegistro) {
        super(nombre, apellido,edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente() {
        return this._idCliente;
    }
    get fechaRegistro() {
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }
    toString() {
        return `${super.toString()}, 
                    ${this._idCliente} id cliente
                    ${this._fechaRegistro}`;
    }
}

// Puesta a PRUEBA:
let persona1 = new Persona ('Elian', 'Enria', 21);
console.log (persona1.toString());

let persona2 = new Persona('Licha', 'Lopez',21);
console.log (persona2.toString());

let empleado1 = new Empleado('Martin', 'Baneshed', 22, 5000);
console.log (empleado1.toString());
let empleado2 = new Empleado('Enzo', 'Comba', 22, 7000);
console.log (empleado2.toString());

let cliente1 = new Cliente ('Fran', 'Libe','27', new Date());
console.log (cliente1.toString());

let cliente2 = new Cliente ('Carlos', 'Monti','30', new Date());
console.log (cliente2.toString());