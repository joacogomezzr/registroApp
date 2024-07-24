let pila = [];

const guardar = (dato) => {
    pila.push(dato);
    alert("Elemento guardado en la pila");
    return true;
};

const obtenerElementos = () => {
    return pila;
};

export  {guardar,obtenerElementos};
