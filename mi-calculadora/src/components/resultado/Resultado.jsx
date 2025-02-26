import React from 'react';
import './Resultado.css';

function Resultado({ a, b, operacion }) {
  if (a === '' || b === '' || operacion === null) return null; // Si A, B o operación están vacíos, no mostrar nada.

  let resultado;
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
      return null;
  }

  return (
    <div className="resultado-texto">
      {a && <span className="valor">{a}</span>}
      {operacion && <span className="operacion">{operacion}</span>}
      {b && <span className="valor">{b}</span>}
      <span className="igual">=</span>
      {resultado !== undefined && <span className="resultado">{resultado}</span>}
    </div>
  );
}

export default Resultado;

