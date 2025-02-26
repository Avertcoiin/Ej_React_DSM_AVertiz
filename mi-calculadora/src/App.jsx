// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import Boton from './components/Boton/Boton';
import ElementoInput from './components/input/ElementoInput';
import Resultado from './components/resultado/Resultado';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [operacionActiva, setOperacionActiva] = useState(null);

  return (
    <div className="container mt-5">
      <h1 className="mb-5">Calculadora</h1>

      {/* Contenedor de la calculadora con fondo gris azul claro */}
      <div className="recuadro p-4" style={{ backgroundColor: '#c1d0e0', borderRadius: '10px' }}>
        {/* Contenedor blanco donde van A, B y el resultado */}
        <div className="calculadora-contenido" style={{ backgroundColor: 'white', borderRadius: '10px', padding: '20px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', minHeight: '150px' }}>
          <div className="row">
            <div className="col-6">
              <ElementoInput
                label="A"
                value={a}
                onChange={(e) => setA(e.target.value ? parseFloat(e.target.value) : '')}
              />
            </div>
            <div className="col-6">
              <ElementoInput
                label="B"
                value={b}
                onChange={(e) => setB(e.target.value ? parseFloat(e.target.value) : '')}
              />
            </div>
          </div>

          {/* Resultado de la operación */}
          <div className="mt-4">
            <Resultado a={a} b={b} operacion={operacionActiva} />
          </div>
        </div>

        {/* Botones */}
        <div className="mt-3">
          <Boton label="+" isActive={operacionActiva === "+"} onClick={() => setOperacionActiva("+")} />
          <Boton label="-" isActive={operacionActiva === "-"} onClick={() => setOperacionActiva("-")} />
          <Boton label="×" isActive={operacionActiva === "×"} onClick={() => setOperacionActiva("×")} />
          <Boton label="÷" isActive={operacionActiva === "÷"} onClick={() => setOperacionActiva("÷")} />
        </div>
      </div>
    </div>
  );
}

export default App;
