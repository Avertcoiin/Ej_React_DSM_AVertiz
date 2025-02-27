// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import ElementoInput from './components/input/ElementoInput';
import Resultado from './components/resultado/Resultado';
import GenerarCalculadora from './components/Calculadora/GenerarCalculadora';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [operacionActiva, setOperacionActiva] = useState(null);
  const [inputActivo, setInputActivo] = useState('A'); // Control del input activo

  // Función para manejar clics en los botones numéricos
  const handleNumberClick = (number) => {
    if (inputActivo === 'A') {
      setA((prev) => prev + number); // Actualiza el valor de A
    } else {
      setB((prev) => prev + number); // Actualiza el valor de B
    }
  };

  // Función para manejar el cambio de valor en los inputs
  const handleInputChange = (e) => {
    const value = e.target.value ? parseFloat(e.target.value) : '';
    if (inputActivo === 'A') {
      setA(value); // Actualiza A
    } else {
      setB(value); // Actualiza B
    }
  };

  // Función para manejar el cambio de foco y saber qué input es el activo
  const handleFocus = (input) => {
    setInputActivo(input); // Marca el campo como activo
  };

  // Función para manejar clics en los botones de operación. Si está en A y pulsamos, pasa a B
  const handleOperationClick = (operation) => {
    setOperacionActiva(operation);

    // Si el input activo es A, cambiar a B
    if (inputActivo === 'A') {
      setInputActivo('B');
    }
  };


  return (

    <div className=" container mt-5recuadro p-4" style={{ backgroundColor: '#c1d0e0', borderRadius: '10px' }}>
      <div className="calculadora-contenido" style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', minHeight: '150px' }}>
        <div className="row">
          <div className="col-6">
            <ElementoInput
              label="A"
              value={a}
              onChange={handleInputChange} // Maneja el cambio del input A
              onFocus={() => handleFocus('A')} // Marca el campo A como activo
            />
          </div>
          <div className="col-6">
            <ElementoInput
              label="B"
              value={b}
              onChange={handleInputChange} // Maneja el cambio del input B
              onFocus={() => handleFocus('B')} // Marca el campo B como activo
            />
          </div>
        </div>

        <div className="mt-4">
          <Resultado a={a} b={b} operacion={operacionActiva} />
        </div>
      </div>

      {/* Contenedor de los botones */}
      <GenerarCalculadora
        handleNumberClick={handleNumberClick}
        handleOperationClick={handleOperationClick}
        operacionActiva={operacionActiva}
        setA={setA}
        setB={setB}
        setOperacionActiva={setOperacionActiva}
        setInputActivo={setInputActivo}
      />
    </div>
  );
}

export default App;
