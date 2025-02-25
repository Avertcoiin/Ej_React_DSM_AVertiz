import "./Resultado.css";

function Resultado({ a, b, operacion, resultado }) {
  if (!operacion) return null;

  return (
    <h4 className="resultado">
      {a} {operacion} {b} = {resultado}
    </h4>
  );
}

export default Resultado;
