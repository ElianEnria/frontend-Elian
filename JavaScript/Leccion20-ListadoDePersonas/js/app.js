// console.log("app funciona");
const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Licha', 'Comba'),
    new Persona('Martin', 'Martinez')
];
// mostrar y recorrer los objetos
function mostrarPersonas(){
    //// console.log("Mostrar Personas");
    let texto = '';
    for (let persona of personas ) {
        //// console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido} </li>`;
    }
    
    document.getElementById('personas').innerHTML = texto;
}
function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma ['apellido'];//objetos completos
    if(nombre.value != '' && apellido.value !=''){
        const persona = new Persona(nombre.value , apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
        console.log('Se agrego la cadena')
        alert('Se agrego la cadena');
    }else{
        console.log('cadena vacia')
        alert('cadena cacia');
    }
    
}