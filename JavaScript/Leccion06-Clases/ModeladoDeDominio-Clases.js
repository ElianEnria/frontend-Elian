// definir una clase- Debe iniciar con mayususculas :
class Persona{
    // agrego el construsctor:
    constructor(nombre, apellido){
        // inicializo los atributos:
        this._nombre = nombre;   //dps del igual es el parametro que recibo distinto al atributo propio de la clase
        this._apellido = apellido;
    }
    // debido a que el nombre del get debe ser distinto al atributo de la clase se pone un _ a los atributos de la clase
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        // para modificar el valor de nombre
        this._nombre = nombre;
    }
}

// creo el objeto
 
let persona1 = new Persona('Carlos', 'Perez');
// console.log (persona1);

//TODO utilizando el metodo GET
console.log(persona1.nombre);

//Todo utilizando el set
persona1.nombre = 'Juan Carlos'; //set nombre ('Juan Carlos')
console.log(persona1.nombre);


let persona2 = new Persona ('Juan', 'Lara');
console.log (persona2);
