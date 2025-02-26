// src/components/Boton/BotonBorrado.jsx
import React from 'react';
import './Boton.css';  // Importamos el archivo de estilos

function BotonBorrado({ setA, setB, setOperacionActiva }) {
  const resetCalculadora = () => {
    setA('');
    setB('');
    setOperacionActiva(null);
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
