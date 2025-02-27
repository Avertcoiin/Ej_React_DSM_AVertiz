// src/components/Calculadora/GenerarCalculadora.jsx
import React from 'react';
import Boton from '../Boton/Boton';  // Asegúrate de que importas el componente Boton
import BotonBorrado from '../Boton/BotonBorrado'; // El botón C para borrar

function GenerarCalculadora({
    handleNumberClick,
    handleOperationClick,
    operacionActiva,
    setA,
    setB,
    setOperacionActiva,
    setInputActivo,
}) {
    return (
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
                    <Boton label="÷" isActive={operacionActiva === "÷"} onClick={() => handleOperationClick("÷")} />
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
                    <Boton label="×" isActive={operacionActiva === "×"} onClick={() => handleOperationClick("×")} />
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
                    <Boton label="-" isActive={operacionActiva === "-"} onClick={() => handleOperationClick("-")} />
                </div>
            </div>
            <div className="row mb-2">
                <div className="col">
                    <BotonBorrado setA={setA} setB={setB} setOperacionActiva={setOperacionActiva} setInputActivo={setInputActivo} />
                </div>
                <div className="col">
                    <Boton label="0" isActive={false} onClick={() => handleNumberClick("0")} className="btn btn-light" />
                </div>
                <div className="col">
                    <Boton label="." isActive={false} onClick={() => handleNumberClick(".")} className="btn btn-light" />
                </div>
                <div className="col">
                    <Boton label="+" isActive={operacionActiva === "+"} onClick={() => handleOperationClick("+")} />
                </div>
            </div>
        </div>
    );
}

export default GenerarCalculadora;
