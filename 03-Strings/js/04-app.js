const producto = '            Monitor 20 Pulgadas                  ';

console.log(producto);
console.log(producto.length);


// Eliminar del inicio...
console.log( producto.trimStart() );
console.log( producto.trimEnd() );

console.log( producto.trimStart().trimEnd() );


console.log( producto.trim() )