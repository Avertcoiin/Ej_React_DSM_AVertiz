// src/components/Boton/Boton.jsx

import "./Boton.css"
import React from 'react';
import { Button } from 'react-bootstrap';

function Boton({ label, isActive, onClick, className = '' }) {
  return (
    <Button
      variant={isActive ? 'primary' : 'secondary'} // Define el color según si está activo o no
      onClick={onClick}
      className={`me-2 ${className}`} // Espaciado entre los botones, y se aplica la clase extra
    >
      {label}
    </Button>
  );
}

export default Boton;
