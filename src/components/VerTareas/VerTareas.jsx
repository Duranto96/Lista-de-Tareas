import React from "react";
// import AgregarTareas from "./components/AgregarTareas/AgregarTareas";
import MostrarTarea from "../MostrarTarea/MostrarTarea";
import { useState } from "react";
import { Link } from "react-router-dom";

function VerTareas(props) {
  return (
    <>
      <div className="App">
        <main>
          <h1>Lista de tareas!</h1>

          <MostrarTarea {...props} />
          <Link to="/tareasterminadas">Tareas terminadas</Link>
        </main>
      </div>
    </>
  );
}

export default VerTareas;
