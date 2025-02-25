import "./Botones.css";

function Botones({ operacion, calcularResultado }) {
  const operaciones = ["+", "-", "×", "÷"];

  return (
    <div className="botones-container">
      {operaciones.map((op) => (
        <button
          key={op}
          className={operacion === op ? "btn btn-primary" : "btn btn-outline-primary"}
          onClick={() => calcularResultado(op)}
        >
          {op}
        </button>
      ))}
    </div>
  );
}

export default Botones;
