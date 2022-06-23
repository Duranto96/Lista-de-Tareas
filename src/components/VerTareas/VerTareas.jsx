import React from "react";
// import AgregarTareas from "./components/AgregarTareas/AgregarTareas";
import MostrarTarea from "../MostrarTarea/MostrarTarea";
import Main from "../Main/Main";
import { useState } from "react";

function VerTareas() {
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
  const eliminarTarea = (eliminarTarea) => {
    const tareasActualizadas = [...listaDeTareas].filter(
      (tareaNueva) => tareaNueva.id !== eliminarTarea.id
    );
    setListaDeTareas(tareasActualizadas);
  };
  const editarTarea = (tareaAEditar) => {
    const copia = [...listaDeTareas];
    const encontrarTarea = (tarea) => tarea.id === tareaAEditar.id;
    let indice = listaDeTareas.findIndex(encontrarTarea);
    copia[indice] = { ...tareaAEditar };
    setListaDeTareas(copia);
  };
  return (
    <>
      <div className="App">
        <main>
          <h1>Lista de tareas!</h1>
          <Main operacion={insertarTarea} />
          <MostrarTarea
            tareas={listaDeTareas}
            eliminar={eliminarTarea}
            editar={editarTarea}
          />
        </main>
      </div>
    </>
  );
}

export default VerTareas;
