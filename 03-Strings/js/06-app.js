const producto = 'Monitor 20 Pulgadas ';

// .repetear te va a permitir repetir una cadena de texto...
const texto = ' en Promoción'.repeat(2.4);

console.log(texto);
console.log(`${producto} ${texto} !!!`);


// Split, dividir un string

const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split('#'))