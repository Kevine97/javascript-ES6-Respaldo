
const obtenerCliente = () => {
    const nombre = "Juan";

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();