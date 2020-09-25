import React from 'react';
import styled from '@emotion/styled';
import { letraMayuscula } from '../helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align:center;
    background-color: #00838F;
    color: #fff;
    margin-top: 1rem;
`; 

const Resumen = ({datos}) => {

    //extraer datos internos de datos
    const { marca, year, plan} = datos;

    if(marca === '' && year === '' &&  plan === '') {
        return null;

    } else {
        return (
            <ContenedorResumen>
                <h2>Resumen de cotizacion</h2>
                <ul>
                    <li>Marca: {letraMayuscula(marca)}</li>
                    <li>Plan: {letraMayuscula(plan)}</li>
                    <li>Año: {year}</li>
                </ul>
            </ContenedorResumen>
        );
    }
};

export default Resumen;