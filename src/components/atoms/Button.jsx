import styled from "styled-components";

const ButtonStyled = styled.button`
    width: 80%;
    height: 50px;
    background-color: #5467be;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    box-shadow: 10px 10px 5px0px rgba(0,0,0,0.75);

    &:hover{
        background-color: #0b0984;
    }
`;

function Button(props){
    return(
        <ButtonStyled onClick={props.onClick}>Guardar Producto</ButtonStyled>
    )
}

export default Button;