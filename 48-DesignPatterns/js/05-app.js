// Module Pattern

const modulo1 = (function() {
    const nombre = 'Juan';

    function hola() {
        console.log('hola')
    }

    return {
        nombre, 
        hola
    }
})();
