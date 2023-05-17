let horario = 12;
let mensaje;
if (horario >= (6) && horario<= 11) {
    mensaje = "Buenos Dias"; 
}
else if (horario >= 12 && horario<=18){
    mensaje = "Buenas Tardes";    
}
else if(horario >=19 && horario <= 24){
    mensaje = "Buenas Noches"
}
else if (horario >=0 && horario <= 6){
    mensaje = "Durmiendo";
}
else{
    mensaje = "valor incorrecto";
}

console.log(mensaje);