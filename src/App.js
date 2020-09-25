import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
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
  
  const [loading, setLoading] = useState(false);
  
  const {cotizacion,datos} = resumen; //esto es para hacer un  ternario y si tiene datos el resumen lo muestro, entonces no



  return (
    <Fragment>
      <Contenedor>
        <Header
          titulo="Cotizador"
        ></Header>
      <ContenedorFormulario>
        <Formulario
          setResumen={setResumen}
          setLoading = {setLoading}
        ></Formulario>
        
        { loading? <Spinner></Spinner> : null }

        <Resumen
          datos={datos}
        ></Resumen>
        <Resultado
          cotizacion= {cotizacion}
        ></Resultado>
      </ContenedorFormulario>
      </Contenedor>
    </Fragment>

  );
}

export default App;
