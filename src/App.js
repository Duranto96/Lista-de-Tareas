import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import VerTareas from "./components/VerTareas/VerTareas";
import AgregarTareas from "./components/AgregarTareas/AgregarTareas";
import Principal from "./components/Principal/Principal";
import TareasTerminadas from "./components/TareasTerminadas/TareasTerminadas.jsx";

function App() {
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
  const listaDeTareasTerminadas = [...listaDeTareas].filter(
    (tarea) => tarea.terminada
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route
          path="vertareas"
          element={
            <VerTareas
              tareas={listaDeTareas}
              editar={editarTarea}
              eliminar={eliminarTarea}
            />
          }
        />
        <Route
          path="agregartareas"
          element={<AgregarTareas operacion={insertarTarea} />}
        />
        <Route
          path="tareasterminadas"
          element={<TareasTerminadas tareas={listaDeTareasTerminadas} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
