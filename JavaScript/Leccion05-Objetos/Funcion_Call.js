let persona1 = {
    nombre : 'Juan',
    apellido : 'Perez',
    nombreCompleto : function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {    
    nombre : 'Carlos',
    apellido : 'Lara'
}

// Uso de call para usar el metodo de persona1.nombreCompleto con los datos de la persona 2
console.log(persona1.nombreCompleto());

console.log(persona1.nombreCompleto.call(persona2));
