class Persona{ 
    // Atributos statics:
    static contadorObjetosPersona = 0;

    email = "Valor default email"; //Atributo de nuestros objetos

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        // no se usa el this para acceder a variables staticas propias de la clase
        // Se usa directamente la clase
        Persona.contadorObjetosPersona++;
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
        return this._nombre + ' '+ this._apellido;
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
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento; // este ultimo es el de la clase hija
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.toString());

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');

console.log(empleado1);
console.log(empleado1._nombre);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString())


// persona1.saludar(); no es posible llamar a un metodo static desde un objeto
Persona.saludar();

// saludar pero con parametros y desde un objeto
Persona.saludar2(persona1);

Persona.saludar2(empleado1);

// utilizar el atributo static
// ya que la variable se esta asignando a la clase
console.log(Persona.contadorObjetosPersona);

// es 2 porque nosotros creamos dos objetos. Uno de la clase hija
// que utiliza por herencia el constructor de la clase padre.


// Atributo no estatico.
console.log(persona1.email);
console.log(empleado1.email);