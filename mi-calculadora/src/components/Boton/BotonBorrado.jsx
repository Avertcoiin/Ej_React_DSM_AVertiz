// src/components/Boton/BotonBorrado.jsx
import React from 'react';
import './Boton.css';  // Importamos el archivo de estilos

function BotonBorrado({ setA, setB, setOperacionActiva, setInputActivo }) {
  const resetCalculadora = () => {
    setA('');
    setB('');
    setOperacionActiva(null);
    setInputActivo('A');
  };

  return (
    <button
      className="btn btn-danger" 
      onClick={resetCalculadora} // Llamamos a la función reset
    >
      C
    </button>
  );
}

export default BotonBorrado;
