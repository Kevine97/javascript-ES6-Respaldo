function descargarClientes() {

    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if(!error) {
                resolve('El Listado de Clientes se descargo correctamente');
            } else {
                reject('Error en la conexión');
            }
        }, 3000);
    })
}

async function ejecutar() {
    
}

// Async await
const ejecutar = async () => {
  try {
      console.log(1 + 1);
      const respuesta = await descargarClientes();

      console.log( 2 + 2);
      console.log(respuesta);
  } catch (error) {
      console.log(error);
  }
}
ejecutar();