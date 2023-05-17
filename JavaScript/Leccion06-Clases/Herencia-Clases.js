class Persona{ 
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
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
    // esto es una funcion
    nombreCompleto(){
        return this._nombre + ' '+ this._apellido;
    }
    // Sobreescritura: ya que nombre completo se hereda en las dos clases
    toString(){
        // se aplica polimorfimos (multiples formas en mismo tiempo de ejecucion)
        // el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        // dependiendo de que se ejecuta. Tendemos un resultado distinto. Dependiendo del parametro que se reciba
        return this.nombreCompleto();
    }

}

// creo la clase hija

class Empleado extends Persona{
    // anexamos los parametros de la clase padre
    constructor(nombre, apellido, departamento){
        // hay que llamar al constructor de la clase padre y la tenemos que utilizar arriba del constructor de la clase hija
        super(nombre, apellido);//llamar al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    // Sobreescritura: TENEMOS QUE USAR EL MISMO NOMBRE DE LA FUNCION
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento; // este ultimo es el de la clase hija
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log (persona1);// get nombre

// metodo toString
console.log(persona1.toString());

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');

console.log(empleado1);
console.log(empleado1._nombre);

// metodo que fue utilizado para la herencia por metodo
console.log(empleado1.nombreCompleto());

// para mostrar en consola o en pantalla el estado del metodo pero seteandolo y dandole un mejor formato. 
// tambien podemos ver que como nos trae tambien el departamento de la persona. Quiere decir que la misma esta siendo heredada por la clase hija

console.log(empleado1.toString())


