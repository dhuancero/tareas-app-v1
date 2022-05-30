import React from "react";
import "../css/TareasLista.css";
import ListaDeTareas from "./ListaDeTareas";
// import Tarea from "../components/Tarea";

function TareasLista(props) {
  return (
    <div className="listaPrincipal">
      <h1>Mis Tareas</h1>
      <ListaDeTareas />
    </div>
  );
}

export default TareasLista;
