"use strict";
var Categoria;
(function (Categoria) {
    Categoria[Categoria["Gabinete"] = 0] = "Gabinete";
    Categoria[Categoria["Procesador"] = 1] = "Procesador";
    Categoria[Categoria["PlacaDeVideo"] = 2] = "PlacaDeVideo";
    Categoria[Categoria["PlacaMadre"] = 3] = "PlacaMadre";
    Categoria[Categoria["MemoriaRAM"] = 4] = "MemoriaRAM";
    Categoria[Categoria["FuenteDeAlimentacion"] = 5] = "FuenteDeAlimentacion";
    Categoria[Categoria["Monitor"] = 6] = "Monitor";
    Categoria[Categoria["Raton"] = 7] = "Raton";
    Categoria[Categoria["Teclado"] = 8] = "Teclado";
    Categoria[Categoria["Auriculares"] = 9] = "Auriculares";
})(Categoria || (Categoria = {}));
class ECommerceComputacion {
    constructor(productos) {
        this.productos = productos;
    }
    buscarPorId(id) {
        let productoEncontrado = this.productos.find(function (producto) {
            return producto.id === id;
        });
        return productoEncontrado;
    }
}
//Fin de las declaraciones
let listaProductos = [];
listaProductos.push({ id: 1, categoria: Categoria.MemoriaRAM, nombre: "Kingston 8GB", precio: 5999.99, codigo: 642632 });
listaProductos.push({ id: 2, categoria: Categoria.PlacaDeVideo, nombre: "RTX 3080", precio: 799999.99, codigo: 335529 });
listaProductos.push({ id: 3, categoria: Categoria.Procesador, nombre: "Ryzen 7", precio: 49999.99, codigo: 895235 });
let ecommereComputacion = new ECommerceComputacion(listaProductos);
let id = 4;
let productoEncontrado = ecommereComputacion.buscarPorId(id);
if (productoEncontrado != undefined) {
    console.log("El producto con id " + id + " es:", productoEncontrado.nombre);
}
else {
    console.log("El producto con id " + id + " no existe");
}
