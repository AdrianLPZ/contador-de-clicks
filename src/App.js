import './App.css';
import { Boton } from './componentes/Boton';
import reactLogo from './imagenes/react-logo.png'
import { Contador } from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0); 

  const manejarClick = () =>{
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () =>{
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='react-logo'
          src={reactLogo}
          alt='logo de react' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks} />
        <Boton
        texto='Click'
        esBotonDeClick={true}
        manejarClick={manejarClick} />
        <Boton
        texto='Reiniciar'
        esBotonDeClick={false}
        manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
