// src/components/Resultado/Resultado.jsx

import React from 'react';

function Resultado({ a, b, operacion }) {
  let resultado = null;

  // Realiza el cálculo dependiendo de la operación
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

  return (
    <div className="mt-3">
      <h3>Resultado: {resultado !== null ? resultado : 'Esperando operación'}</h3>
    </div>
  );
}

export default Resultado;
