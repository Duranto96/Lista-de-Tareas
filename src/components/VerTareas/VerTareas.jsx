import React from "react";
// import AgregarTareas from "./components/AgregarTareas/AgregarTareas";
import MostrarTarea from "../MostrarTarea/MostrarTarea";
import { useState } from "react";

function VerTareas() {
  const [listaDeTareas, setListaDeTareas] = useState([]);
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
