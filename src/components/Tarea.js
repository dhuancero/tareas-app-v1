import React from "react";
import "../css/Tarea.css";
import { RiDeleteBin2Fill } from "react-icons/ri";

function Tarea({ id, texto, completada, tareaCompleta, tareaEliminada }) {
  return (
    <div
      className={completada ? "tareaContenedor completada" : "tareaContenedor"}
    >
      <div className="tarea-texto" onClick={() => tareaCompleta(id)}>
        {texto}
      </div>
      <div
        className="tarea-contenedor-icono"
        onClick={() => tareaEliminada(id)}
      >
        <RiDeleteBin2Fill className="tarea-icono" />
      </div>
    </div>
  );
}

export default Tarea;
