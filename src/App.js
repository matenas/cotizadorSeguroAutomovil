import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import styled from '@emotion/styled';


const Contenedor = styled.div`
    max-width: 750px;
    margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background: #fff;
  padding: 3rem;
`;


function App() {

  const [ resumen, setResumen] = useState({
    cotizacion:0,
    datos: {
      marca:"",
      year: "",
      plan: ""
    }
  });
  
  const {datos} = resumen; //esto es para hacer un  ternario y si tiene datos el resumen lo muestro, entonces no

  return (
    <Fragment>
      <Contenedor>
        <Header
          titulo="Cotizador"
        ></Header>
      <ContenedorFormulario>
        <Formulario
          setResumen={setResumen}
        ></Formulario>
        <Resumen
          datos={datos}
        ></Resumen>
      </ContenedorFormulario>
      </Contenedor>
    </Fragment>

  );
}

export default App;
