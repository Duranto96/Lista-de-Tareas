import React from "react";
import VerTareas from "../VerTareas/VerTareas";
import { useState } from "react";
import MostrarTarea from "../MostrarTarea/MostrarTarea";
import { Link } from "react-router-dom";

function TareasTerminadas(props) {
  return (
    <>
      {" "}
      <div className="App">
        <main>
          <h1>Lista de tareas terminadas!</h1>

          <MostrarTarea {...props} />
          <Link to="/vertareas">Todas las tareas</Link>
        </main>
      </div>
    </>
  );
}

export default TareasTerminadas;
