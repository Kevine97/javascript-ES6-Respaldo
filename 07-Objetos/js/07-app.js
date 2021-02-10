const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

producto.disponible = false;

delete producto.precio;

console.log(producto);