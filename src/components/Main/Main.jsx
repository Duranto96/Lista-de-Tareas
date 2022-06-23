import React, { useState } from "react";
import "./Main.css";
import { v4 as uuidv4 } from "uuid";

function Main({ operacion, tarea = {} }) {
  const [descripcion, setDescripcion] = useState(tarea.descripcion);
  const [prioridad, setPrioridad] = useState(tarea.prioridad);
  return (
    <form
      action="javascript:void(0);"
      onSubmit={() =>
        operacion({
          prioridad,
          descripcion,
          id: tarea.id || uuidv4(),
          terminada: tarea.terminada || false,
        })
      }
    >
      <input
        value={descripcion}
        id="tarea"
        type="text"
        name="tarea"
        placeholder="Descripción de la tarea"
        onChange={(ev) => setDescripcion(ev.target.value)}
      />
      <select
        value={prioridad}
        name="prioridad"
        id="prioridad"
        onChange={(ev) => setPrioridad(ev.target.value)}
      >
        <option value="" disabled selected>
          Prioridad
        </option>
        <option value="prioridad-baja">baja</option>
        <option value="prioridad-media">media</option>
        <option value="prioridad-alta">alta</option>
      </select>
      <button id="agregar">{tarea.id ? "EDITAR" : "Agregar!"}</button>
    </form>
  );
}

export default Main;
