const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// const nombre = producto.nombre;
// console.log(nombre);

// Destructuring
const {  disponible } = producto;

console.log(disponible);


// Destructuring con Arreglos
const numeros = [10,20,30,40,50];

const [ primero,  ...tercero ] = numeros;

console.log(tercero);