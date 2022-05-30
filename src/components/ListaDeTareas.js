import { React, useState } from "react";

import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";

import "../css/ListaDeTareas.css";

export default function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  function agregarTarea(tarea) {
    console.log(tarea.texto)
    console.log(tarea.completada)
    console.log(tarea.id)
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareaActualizada = [tarea, ...tareas];
      setTareas(tareaActualizada);
    }
  }
  const eliminarTarea = id => {
    console.log(id);
    const tareaActualizada = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareaActualizada);
  }

  const completarTarea = id => {
    const tareaActualizada = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    })
    // console.log(tareaActualizada);
    setTareas(tareaActualizada);
  }
  return (
    <div>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareasListaContenedor">
        {
          tareas.map(tarea =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              tareaEliminada={eliminarTarea}
              tareaCompleta={completarTarea}
            />
          )
        }
      </div>
    </div>
  );
}
