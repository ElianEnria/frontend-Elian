let persona = {
    nombre : 'Juan',
    apellido : 'Perez',
    email : 'jperez@mail.com',
    edad : 28,
    nombreCompleto : function(){
        return this.nombre + ' ' + this.apellido;
    },
    // miFuncion: function(){}
}

// Con esto agrego un nuevo atributo al objeto.
//                                                - No es muy recomendable-
persona.tel ='55443322';
// Si agregamos otro atributo como tel, va a pisar el anterior tel.

//! Asi eliminamos una atributo de nuestro objeto.
delete persona.tel;

// Concatenar cada valor de cada propiedad:
console.log(persona.nombre + ' ' + persona.apellido);

for (NombrePropiedad  in persona) {
    console.log(persona[NombrePropiedad])
}

// este nos regresa nuestro objeto como un arreglo
let personaArray = Object.values(persona);
console.log(personaArray );
console.log(personaArray [1]);

let personaString = JSON.stringify(persona);
console.log(personaString);
