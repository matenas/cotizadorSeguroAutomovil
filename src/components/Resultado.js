import React from 'react';
import styled from '@emotion/styled';

const Mensaje = styled.h3`
    background-color: rgba(127,224,237,1);
    margin-top: 2rem;
    padding: 1rem;
    text-align:center;
`;

const TextoCotizacion = styled.h4`
    background-color: #00838F;
    text-align:center;
    color: #fff;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
     
`;

function Resultado({cotizacion}) {

    return(
        (cotizacion === 0) ? <Mensaje>Elige una Marca, un Año y tipo de Plan</Mensaje> : <TextoCotizacion>El total es: ${cotizacion}</TextoCotizacion>
    )

}

export default Resultado;