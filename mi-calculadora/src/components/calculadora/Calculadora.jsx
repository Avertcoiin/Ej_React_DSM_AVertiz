import { useState } from "react";
import "./Calculadora.css";
import Resultado from "./Resultado";
import Botones from "./Botones";

function Calculadora() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operacion, setOperacion] = useState(null);
  const [resultado, setResultado] = useState(null);

  const calcularResultado = (op) => {
    let res;
    switch (op) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "×":
        res = a * b;
        break;
      case "÷":
        res = b !== 0 ? a / b : "Error";
        break;
      default:
        res = null;
    }
    setOperacion(op);
    setResultado(res);
  };

  return (
    <div className="calculadora-container">
      <h2>Calculadora React</h2>

      <div className="inputs">
        <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} />
        <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} />
      </div>

      <Botones operacion={operacion} calcularResultado={calcularResultado} />

      <Resultado a={a} b={b} operacion={operacion} resultado={resultado} />
    </div>
  );
}

export default Calculadora;
