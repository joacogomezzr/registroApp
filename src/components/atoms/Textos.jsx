import styled from "styled-components";
import React, {useState} from "react";
import { guardar, obtenerElementos } from "../../data/pilas";

const ButtonStyled = styled.button`
    width: 100%;
    height: 50px;
    background-color: #587158;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

    &:hover {
        background-color: #354435;
    }
`;

const ElementosPila = styled.div`
    margin-top: 20px;
    width: 100%;
    color: #333;
`;

const Elemento = styled.div`
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
`;

const Textos = ({datos}) => {
    const [elementos, setElementos] = useState([]);

    const handleGuardar = () => {
        guardar(datos);
        setElementos([elementos,datos])
    }

    return(
        <div>
            <ButtonStyled onClick={handleGuardar}>Guardar e Imprimir pila</ButtonStyled>
            <ElementosPila>
                {elementos.map((elem, index) => (
                    <Elemento key={index}>
                        {`Elemento ${index + 1}: ${JSON.stringify(elem)}`}
                    </Elemento>
                ))}
            </ElementosPila>
        </div>
    )
};

export default Textos;
