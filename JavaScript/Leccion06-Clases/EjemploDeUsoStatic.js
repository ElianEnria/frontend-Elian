class Persona{ 
    static contadorPersona = 0;

    // metodo estatico y es una llamada a un metodo estatico
    // no recibo info solo recibo 
    // esto simula la cantidad de objetos que puedo crear.
    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersona < Persona.MAX_OBJ) {
            this._idPersona = ++Persona.contadorPersona;
        }else{
            console.log("Maximo de personas (5)");
        }
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;    
    }
    nombreCompleto(){
        return this._idPersona + ' ' + this._nombre + ' '+ this._apellido;
    }
    toString(){
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('Saludos desde metodo estatico');
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento; // este ultimo es el de la clase hija
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.toString());

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1.toString());

console.log(Persona.contadorPersona);

// Constante de tipo estatico para la clase persona y su herencia

console.log(Persona.MAX_OBJ);

let persona2 = new Persona('Elian', 'Enria');

let empleado2 = new Empleado('Licha', 'Lopez');

let persona3 = new Persona('Enzo', 'Comba');

let persona6 = new Persona('Martin', 'Husbaldo');

// objeto sin desborde
console.log(persona3.toString());

// objeto desbordado o sin id
console.log(persona6.toString());