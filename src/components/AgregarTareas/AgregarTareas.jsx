import React from "react";
import Main from "../Main/Main";
import { useState } from "react";
import { Link } from "react-router-dom";

function AgregarTareas(props) {
  return (
    <>
      <h1>AgregarTareas</h1>
      <Main /*operacion={insertarTarea}*/ {...props} />
      <Link to="/vertareas">Ver tareas</Link>
    </>
  );
}

export default AgregarTareas;
