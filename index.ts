//Declaración de interfaces, enumerativos y clases
interface Producto {
    id: number;
    categoria: Categoria;
    nombre: String;
    precio: number;
    codigo: number;
}

enum Categoria {
    Gabinete,
    Procesador,
    PlacaDeVideo,
    PlacaMadre,
    MemoriaRAM,
    FuenteDeAlimentacion,
    Monitor,
    Raton,
    Teclado,
    Auriculares
}

class ECommerceComputacion {

    constructor(public productos: Producto[]) {}

    buscarPorId (id: number): Producto|undefined{

        let productoEncontrado: Producto|undefined = this.productos.find(function(producto) {
            return producto.id === id;
        });

        return productoEncontrado;
    }

}
//Fin de las declaraciones

let listaProductos: Producto[] = [];

listaProductos.push({id: 1, categoria: Categoria.MemoriaRAM, nombre: "Kingston 8GB", precio: 5999.99, codigo: 642632});
listaProductos.push({id: 2, categoria: Categoria.PlacaDeVideo, nombre: "RTX 3080", precio: 799999.99, codigo: 335529});
listaProductos.push({id: 3, categoria: Categoria.Procesador, nombre: "Ryzen 7", precio: 49999.99, codigo: 895235});

let ecommereComputacion = new ECommerceComputacion(listaProductos);

let id = 4;

let productoEncontrado = ecommereComputacion.buscarPorId(id);

if (productoEncontrado != undefined) {
    console.log("El producto con id "+id+" es:", productoEncontrado.nombre)
} else {
    console.log("El producto con id "+id+" no existe");
}