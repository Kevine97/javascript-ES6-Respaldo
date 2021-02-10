const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// con un foreach
let total = 0;
carrito.forEach( producto => total += producto.precio );
console.log(total);


// Con un reduce
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(resultado);