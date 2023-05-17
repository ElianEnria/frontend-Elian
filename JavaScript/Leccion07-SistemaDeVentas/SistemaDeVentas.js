//! Clase Productos

class Producto{
    static contadorProductos = 0;
    
    constructor(nombre,precio){
        this._idProducto = ++(Producto.contadorProductos);
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    get precio(){
        return this._precio;
    }

    set nombre(nombre){
        return this._nombre = nombre;
    }
    
    set precio(precio){
        return this._precio = precio;
    }

    toString(){
        return ` Id-Producto: ${this._idProducto}, nombre: ${this._nombre}, precio:  $${this._precio}`;
    }
}


class Orden {
    static contadorOrdenes = 0;
    // lleva parentesis porque es un metedo 
    // y tambien este no es propio de la clase es propio de los atributos
    static get MAX_PRODUCTOS(){
        return 5;
    }
    // sin parametros ya que usamos composicion
    constructor(){
        // Establecer el arreglo de la relacion
        this._idOrden = ++ (Orden.contadorOrdenes);
        this._productos = [];
        // this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        // HAY QUE VERIFICAR EL MAXIMO DE PRODUCTOS
        // antes del < tenemos que nos regresa la cantidad de producto que tenemos. y esta tiene que ser menor a MAX_PRODUCTOS
        if (this._productos.length < Orden.MAX_PRODUCTOS){
            //TODO                                          Formas de agregar un producto. 
            this._productos.push(producto); //  Esta es mas eficiente 
            // this._productos[this._contadorProductosAgregados++] = producto;
        }
        else{
            console.log ('No se pueden agregar mas productos'+ ' El producto que excede es: ' +producto._nombre);
        }
    }

    calcularTotal(){
        let totalVentas = 0;
        // ciclo for reducido que con of decimos que que arreglo vamos a recorrer
        // y con producto va iterar
        for(let producto of this._productos){ 
            totalVentas += producto.precio; //Aqui se realiza la suma de cada producto tV = tV + producto.precio; 
        }
        // Este esta afuera y dentro del metodo calcularTotal, ya que necesitamos tener un unico resultado
        return totalVentas;
    }
    mostrarOrden(){
        let productosOrden = "";
        for(let Producto of this._productos){
            // este toString lo que va a hacer es: agregar a la clase Producto junto con el metodo toString se iran guardando en la variable productosOrden
            productosOrden += ('\n {' + Producto.toString() + '} ');
        }
        // productosOrden. Agrega toda la composicion de la clase producto
        console.log(`Orden: ${this._idOrden} => Total: ${this.calcularTotal()}, Prducto: ${productosOrden}`)
    }
}


let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('Camisa', 100);
// console.log(producto1.toString());
// console.log(producto2.toString());

let orden1 = new Orden();


// aca le pasamos como parametro el producto1 y producto2 que ya creamos anteriormente y estos se agregaran a la orden
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

// este es el metodo tostring pero dentro de otro metodo que es el mostrar orden
orden1.mostrarOrden();

// orden2.mostrarOrden();
let orden2 = new Orden();
let producto3 = new Producto('Cinturon', 50);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);


orden2.mostrarOrden();



