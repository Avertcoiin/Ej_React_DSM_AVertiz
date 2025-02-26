// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import Boton from './components/Boton/Boton';
import ElementoInput from './components/input/ElementoInput';
import Resultado from './components/resultado/Resultado';
import BotonBorrado from './components/Boton/BotonBorrado';
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

        {/* Contenedor de los botones */}
        <div className="mt-3">
          <div className="row mb-2">
            <div className="col">
              <Boton label="7" isActive={false} onClick={() => {}} className="btn btn-light" />
            </div>
            <div className="col">
              <Boton label="8" isActive={false} onClick={() => {}} className="btn btn-light" />
            </div>
            <div className="col">
              <Boton label="9" isActive={false} onClick={() => {}} className="btn btn-light" />
            </div>
            <div className="col">
              <Boton label="÷" isActive={operacionActiva === "÷"} onClick={() => setOperacionActiva("÷")} />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col">
              <Boton label="4" isActive={false} onClick={() => {}} className="btn btn-light" />
            </div>
            <div className="col">
              <Boton label="5" isActive={false} onClick={() => {}} className="btn btn-light" />
            </div>
            <div className="col">
              <Boton label="6" isActive={false} onClick={() => {}} className="btn btn-light" />
            </div>
            <div className="col">
              <Boton label="×" isActive={operacionActiva === "×"} onClick={() => setOperacionActiva("×")} />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col">
              <Boton label="1" isActive={false} onClick={() => {}} className="btn btn-light" />
            </div>
            <div className="col">
              <Boton label="2" isActive={false} onClick={() => {}} className="btn btn-light" />
            </div>
            <div className="col">
              <Boton label="3" isActive={false} onClick={() => {}} className="btn btn-light" />
            </div>
            <div className="col">
              <Boton label="-" isActive={operacionActiva === "-"} onClick={() => setOperacionActiva("-")} />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col">
              <BotonBorrado setA={setA} setB={setB} setOperacionActiva={setOperacionActiva} />
            </div>
            <div className="col">
              <Boton label="0" isActive={false} onClick={() => {}} className="btn btn-light" />
            </div>
            <div className="col">
              <Boton label="." isActive={false} onClick={() => {}} className="btn btn-light" />
            </div>
            <div className="col">
              <Boton label="+" isActive={operacionActiva === "+"} onClick={() => setOperacionActiva("+")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
