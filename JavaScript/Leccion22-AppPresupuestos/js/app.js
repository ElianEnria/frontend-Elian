const ingresos = [
    new Ingreso('Salario', 2100.00),
    new Ingreso('Venta auto', 1500)
];

const egresos = [
    new Egreso('Alquiler', 900),
    new Egreso('Ropa', 400)
];

let cargarApp = () =>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
    
}
let totalIngresos = () => {
    let totalIngreso = 0;
    for (const ingreso of ingresos) {
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = () => {
    let totalEgreso = 0;
    for (const egreso of egresos) {
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML= formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString('en-US',{style:'currency', currency:'USD', minimumFractionDigits:2});
}

const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString('en-US', {style:'percent', minimumFractionDigits:2});
}
//               -----------------------------------------------------------------------------------------                       //

const cargarIngresos= () =>{
    let ingresosHTML = '';
    for (const ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    // linea 37
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso)=>{
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"
                onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
            </button>
            </div>
        </div>
    </div>
    `;
    return ingresoHTML;
}


const cargarEgresos = () =>{
    let egresosHTML = '';
    for (const egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
    }
    // linea 64
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}



const crearEgresoHTML = (egreso) => {
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">-${formatoMoneda(egreso.valor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
        <div class="elemento_eliminar">
            <div class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"
                onclick='eliminarEgreso(${egreso.id})'></ion-icon>
            </div>
        </div>
    </div>
</div>
    `;
    return egresoHTML;
}

let eliminarIngreso = (id) =>{
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    // parecido a el for of
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}

let eliminarEgreso = (id) =>{
    //El método findIndex() ejecuta la función de callback una vez por cada índice del array hasta que encuentre uno donde callback devuelva un valor verdadero
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);   //cuando coincida el id con id va a adjuntarlo a indice a eliminar
    egresos.splice(indiceEliminar,1);//El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
    //refrescador de elementos
    cargarCabecero();
    cargarEgresos();
}

let agregarDato = () =>{
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma ['descripcion'];
    let valor = forma ['valor'];
    if(descripcion.value !=='' && valor.value !==''){
        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, Number(valor.value)));
            cargarCabecero();
            cargarIngresos();
        }
        else if (tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value, +valor.value)); //como puede ser un valor de tipo string
            cargarCabecero();
            cargarEgresos();
        }
    }
}

let retonarFalso = () =>{
    return false;
}