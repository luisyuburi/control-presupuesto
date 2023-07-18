import { useState } from "react";
import Mensaje from "./Mensaje";
const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();
    if (!Number(presupuesto) || Number(presupuesto) < 0) {
      setMensaje("No es un presupuesto valido");

      return;
    }
    setMensaje("");
    setIsValidPresupuesto(true);
  };
  return (
    <div className="contenedor-presupuesto contenedor  sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Añade tu Presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
          <div className="campo">
            <input type="submit" value="Añadir" />
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
