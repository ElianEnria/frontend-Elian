class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set tipoEntrada(tipoEntrada){
        return this._tipoEntrada = tipoEntrada;
    }
    set marca(marca){
        return this._marca = marca;
    }
    marca_tipo_entrada(){
        return '[ Marca: '+ this._marca + ' Tipo Entrada: ' + this._tipoEntrada + " ]";
    }
}

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++ (Raton.contadorRatones);
    }
    // atributo de solo lectura
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return '[ ID Raton: ' + this._idRaton + ' ' + super.marca_tipo_entrada() + " ]"; 
    }
}

let raton1 = new Raton('USB','HP');
console.log(raton1.toString());
let raton2 = new Raton('Bluetooth','Dell');
// si quisieramos modificar el valor del segundo raton hacemos
// raton2.marca = 'hp';
console.log(raton2.toString());

class Teclado extends DispositivoEntrada{
    static contadroTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++ (Teclado.contadroTeclados);
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return '[ ID Teclado ' + this._idTeclado +' ' + super.marca_tipo_entrada() + " ]";
    }
}

let teclado1 = new Teclado('USB','MSI');
// console.log(teclado1.toString());

let teclado2 = new Teclado('Bluetooth','Hyperex');
// console.log(teclado2.toString());

// Monitor  ///////////////////////////////////////////////////////////////////

class Monitor{
    static contadorMonitores = 0;
    constructor (marca, tamaño){
        this._idMonitor = ++ Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    get tamaño(){
        return this._tamaño;
    }

    set marca(marca){
        return this._marca = marca;
    }
    set tamaño(tamaño){
        return this._tamaño = tamaño;
    }
    toString(){
        return "[ ID Monitor: "+ this._idMonitor + " Marca del Monitor: "+ this._marca +  ' Tamaño: ' + this._tamaño + "' ]";
    }
}

let monitor1 = new Monitor('HP', 15);
let monitor2 = new Monitor('ASUS', 23);

// console.log(monitor1.toString());
// console.log(monitor2.toString());

class Computadora{
    static contadorComputadora = 0;
    // relacion de agregacion para la clase monitor raton teclado
    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadora;
        this._nombre = nombre; 
        this._monitor = monitor; 
        this._raton = raton;
        this._teclado = teclado;
    }
    // como ya estan creados estas clases y sus atributos no hace falta hacer get a set
    get idComputadora(){
        return this._idComputadora;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        return this._nombre = nombre;
    }
    // Bueno, con el metodo this. podemos llamar el toString de gada clase para monitor teclado y rato. Por usar el metodo
    // de agregacion solo por eso
    toString(){
        return "Computadora: " + this._idComputadora + "\n Nombre: " + this._nombre + "\n Monitor: "+ this._monitor +
                "\n Teclado: " + this._teclado + "\n Raton: " + this._raton;
    }
}

// Aca podemos ver que estamos pidiendo que se impriman los otros objetos que creamos.
let computadora1 = new Computadora("DELL", monitor1, raton1, teclado1);
// console.log(computadora1.toString());

// metodo de imprimir el toString.
// console.log(`${computadora1}`);

let computadora2 = new Computadora("Lenovo", monitor2, raton2, teclado2);
// console.log(`${computadora2}`);

class Orden {
    static contadorOrdenes = 0;
    
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    // metodo para agregar elementos
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let productoOrdenComputadora = "";
        for(let computadora of this._computadoras){
            // estos objetos computadora se ira llamando de las otras clases como bien se referencia como si escribimos Computadora
            productoOrdenComputadora += ('\n {' + computadora.toString() + '} '); 
        }
        console.log(`Orden ${this._idOrden}, Computadoras: =>  ${this._computadoras} productoOrdenComputadro ${productoOrdenComputadora} `);
    }
}
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();
