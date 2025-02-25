// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import Boton from './components/Boton/Boton';
import ElementoInput from './components/input/ElementoInput';
import Resultado from './components/resultado/Resultado';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Estados para los valores A, B y la operación activa
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operacionActiva, setOperacionActiva] = useState(null);

  return (
    <div className="container mt-5">
      <h1>Calculadora React</h1>

      {/* Entradas para los valores A y B */}
      <div className="row">
        <div className="col-6">
          <ElementoInput
            label="A"
            value={a}
            onChange={(e) => setA(parseFloat(e.target.value))}
          />
        </div>
        <div className="col-6">
          <ElementoInput
            label="B"
            value={b}
            onChange={(e) => setB(parseFloat(e.target.value))}
          />
        </div>
      </div>

      {/* Botones de operaciones */}
      <div className="mt-3">
        <Boton
          label="+"
          isActive={operacionActiva === "+"}
          onClick={() => setOperacionActiva("+")}
        />
        <Boton
          label="-"
          isActive={operacionActiva === "-"}
          onClick={() => setOperacionActiva("-")}
        />
        <Boton
          label="×"
          isActive={operacionActiva === "×"}
          onClick={() => setOperacionActiva("×")}
        />
        <Boton
          label="÷"
          isActive={operacionActiva === "÷"}
          onClick={() => setOperacionActiva("÷")}
        />
      </div>

      {/* Componente Resultado: pasa A, B y la operación activa */}
      <Resultado a={a} b={b} operacion={operacionActiva} />
    </div>
  );
}

export default App;
