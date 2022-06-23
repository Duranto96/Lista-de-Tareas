import React from "react";
import Main from "../Main/Main";
import { useState } from "react";
import { Link } from "react-router-dom";

function AgregarTareas() {
  const [listaDeTareas, setListaDeTareas] = useState([]);
  const insertarTarea = (ev) => {
    setListaDeTareas(
      [...listaDeTareas, ev].sort((a, b) => {
        if (a.prioridad === "prioridad-alta") {
          return -1;
        }
        if (a.prioridad === "prioridad-baja") {
          return 1;
        }
        if (
          (a.prioridad === "prioridad-media") >
          (b.prioridad === "prioridad-baja")
        ) {
          return 1;
        }
        if (
          (a.prioridad === "prioridad-media") >
          (b.prioridad === "prioridad-alta")
        ) {
          return -1;
        }
        return 0;
      })
    );
  };

  return (
    <>
      <h1>AgregarTareas</h1>
      <Main operacion={insertarTarea} />
      <Link to="/vertareas">Ver tareas</Link>
    </>
  );
}

export default AgregarTareas;
