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
        <div className="mt-3">
          <div className="row mb-2">
            <div className="col">
              <Boton label="7" isActive={false} onClick={() => handleNumberClick("7")} className="btn btn-light" />
            </div>
            <div className="col">
              <Boton label="8" isActive={false} onClick={() => handleNumberClick("8")} className="btn btn-light" />
            </div>
            <div className="col">
              <Boton label="9" isActive={false} onClick={() => handleNumberClick("9")} className="btn btn-light" />
            </div>
            <div className="col">
              <Boton label="÷" isActive={operacionActiva === "÷"} onClick={() => setOperacionActiva("÷")} />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col">
              <Boton label="4" isActive={false} onClick={() => handleNumberClick("4")} className="btn btn-light" />
            </div>
            <div className="col">
              <Boton label="5" isActive={false} onClick={() => handleNumberClick("5")} className="btn btn-light" />
            </div>
            <div className="col">
              <Boton label="6" isActive={false} onClick={() => handleNumberClick("6")} className="btn btn-light" />
            </div>
            <div className="col">
              <Boton label="×" isActive={operacionActiva === "×"} onClick={() => setOperacionActiva("×")} />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col">
              <Boton label="1" isActive={false} onClick={() => handleNumberClick("1")} className="btn btn-light" />
            </div>
            <div className="col">
              <Boton label="2" isActive={false} onClick={() => handleNumberClick("2")} className="btn btn-light" />
            </div>
            <div className="col">
              <Boton label="3" isActive={false} onClick={() => handleNumberClick("3")} className="btn btn-light" />
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
              <Boton label="0" isActive={false} onClick={() => handleNumberClick("0")} className="btn btn-light" />
            </div>
            <div className="col">
              <Boton label="." isActive={false} onClick={() => handleNumberClick(".")} className="btn btn-light" />
            </div>
            <div className="col">
              <Boton label="+" isActive={operacionActiva === "+"} onClick={() => setOperacionActiva("+")} />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
