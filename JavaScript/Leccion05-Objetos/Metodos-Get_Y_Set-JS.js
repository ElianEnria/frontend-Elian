// Creacion de un constructor. Siempre se escribe el constructor en mayuscula
function Persona(nombre, apellido, email){
    // aca se crea la propiedad y se crea la variable. O sea la variable y la propiedad
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    // seria como que asignamos el valor del parametro que estamos recibiendo
}

let persona = {
    nombre : 'Juan',
    apellido : 'Perez',
    email : 'jperez@mail.com',
    edad : 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    },
    // miFuncion: function(){}
}

console.log(persona.nombreCompleto);
console.log(persona.lang);

persona.lang = 'es_ar';
console.log(persona.lang);
// Con esta propiedad vamos a confirmar si realmente funciona de manera correcta.
console.log(persona.idioma);
