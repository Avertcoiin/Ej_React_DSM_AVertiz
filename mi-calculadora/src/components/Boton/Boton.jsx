// src/components/Boton/Boton.jsx
import "./Boton.css"
import React from 'react';
import { Button } from 'react-bootstrap';

function Boton({ label, isActive, onClick }) {
  return (
    <Button
      variant={isActive ? 'primary' : 'secondary'} // Define el color según si está activo o no
      onClick={onClick}
      className="me-2" // Espaciado entre los botones
    >
      {label}
    </Button>
  );
}

export default Boton;
