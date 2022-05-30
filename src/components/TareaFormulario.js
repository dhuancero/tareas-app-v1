import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "../css/TareaFormulario.css";


export default function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const handleChange = e => {
    // console.log(e.target.value);
    setInput(e.target.value);
    e.preventDefault();
  }

  const handleSubmit = e => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    console.log(tareaNueva);
    props.onSubmit(tareaNueva);


  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="tareaFormulario">
        <input
          className="tareaInput"
          type="text"
          placeholder="Escribe una tarea"
          name="texto"
          onChange={handleChange}
        />
        <button className="btnTarea">Agregar Tarea</button>
      </form>
    </div >
  );
}
