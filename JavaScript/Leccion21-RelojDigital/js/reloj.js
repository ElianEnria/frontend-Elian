const mostrarReloj = () =>{
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hora}:${minutos}:${seg}`;

    let mes = new Date();
    let dia = formatoAño(mes.getUTCDay());
    let meses = formatoAño(mes.getUTCMonth());
    let año = formatoAño(mes.getUTCFullYear());
    document.getElementById('fecha').innerHTML = `${dia}/${meses}/${año}`;

    document.getElementById('contenedor').classList.toggle('animar');
    // classlist trae todas las clases de ese contenedor y una de sus clases es animar
    // toggle : te desactiva una clase relacionada
}
const formatoHora = (horas) =>{
    if(horas <10){
        horas = '0' + horas;
    }return horas;
}
const formatoAño = (años) =>{
    if(años <10){
        años = '0'+años;
    }return años;
}
setInterval(mostrarReloj,1000);