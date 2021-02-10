// Singleton 

let instancia = null;

class Persona {
    constructor(nombre, email){
        if(!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
    }
}

const persona = new Persona('Juan', 'correo@correo.com');
console.log(persona);

const persona2 = new Persona('Karen', 'karen@karen.com');
console.log(persona2);