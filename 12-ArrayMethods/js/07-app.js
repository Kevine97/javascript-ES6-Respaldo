const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

// .concat
const resultado = meses.concat(meses3, meses2);

console.log(resultado);

// spread operator
const resultado2 = [...meses3, ...meses, ...meses2];
console.log(resultado2);