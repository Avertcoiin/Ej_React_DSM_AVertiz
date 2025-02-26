// src/components/resultado/Resultado.jsx
import React from 'react';
import './Resultado.css';

function Resultado({ a, b, operacion }) {
  let resultado;

  // Realiza el cálculo dependiendo de la operación
  if (a !== '' && b !== '' && operacion !== null) {
    switch (operacion) {
      case "+":
        resultado = a + b;
        break;
      case "-":
        resultado = a - b;
        break;
      case "×":
        resultado = a * b;
        break;
      case "÷":
        resultado = b !== 0 ? a / b : "Error";
        break;
      default:
        resultado = null;
    }
  }

  return (
    <div className="resultado-texto d-flex justify-content-end">
      {/* Si falta A, mostrar un cuadro */}
      <span className="valor">{a !== '' ? a : '□'}</span>

      {/* Si falta operación, mostrar un cuadro */}
      <span className="operacion">{operacion || '□'}</span>

      {/* Si falta B, mostrar un cuadro */}
      <span className="valor">{b !== '' ? b : '□'}</span>

      {/* Mostrar el igual, pero si el resultado está vacío, también mostrar un cuadro */}
      <span className="igual">=</span>

      {/* Si falta resultado, mostrar un cuadro */}
      <span className="resultado">{resultado !== undefined ? resultado : '□'}</span>
    </div>
  );
}

export default Resultado;
