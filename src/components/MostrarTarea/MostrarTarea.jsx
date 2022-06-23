import React, { useState } from "react";
import Main from "../Main/Main";
import "./MostrarTarea.css";

function MostrarTarea({ tareas, eliminar, editar }) {
  //Crear un estado para saber que elemento estas editando//
  //cambiar el elemento en ese indice para que el contenido del Li pase a ser el componenete agregar//
  const tachar = (tarea) => {
    tarea.terminada = !tarea.terminada;
    editar(tarea);
  };

  const [idDeTareaQueEstoyEditando, setIdDeTareaQueEstoyEditando] = useState();
  const guardarCambio = (tarea) => {
    editar(tarea);
    setIdDeTareaQueEstoyEditando();
  };

  return (
    <>
      <h3>Tareas</h3>

      {tareas.length === 0 ? (
        <p id="mensaje-lista-vacia">Parece que no hay nada por aquí!</p>
      ) : null}
      <ul id="lista-tareas"></ul>
      {tareas.map((tarea) => (
        <li
          className={tarea.prioridad}
          key={tarea.id}
          style={{
            textDecoration: tarea.terminada ? "line-through" : "none",
          }}
        >
          {tarea.id !== idDeTareaQueEstoyEditando && (
            <input
              onChange={() => tachar(tarea)}
              id="check"
              type="checkbox"
              checked={tarea.terminada}
            ></input>
          )}

          {"  "}
          {tarea.id === idDeTareaQueEstoyEditando ? (
            <Main tarea={tarea} operacion={guardarCambio} />
          ) : (
            <>{tarea.descripcion}</>
          )}

          {tarea.id !== idDeTareaQueEstoyEditando && (
            <div>
              <button onClick={() => eliminar(tarea)} className="boton ">
                BORRAR
              </button>
              <button
                onClick={() => setIdDeTareaQueEstoyEditando(tarea.id)}
                className="boton2 "
              >
                EDITAR
              </button>
            </div>
          )}
        </li>
      ))}
      {tareas.length > 0 ? (
        <>
          {" "}
          <p className="tips">
            Tip: Pueden borrar tareas clickeando en "borrar"
          </p>
          <p className="tips">
            Tip: Pueden editar tareas clickeando en el boton "Editar"
          </p>
        </>
      ) : null}
    </>
  );
}

export default MostrarTarea;
