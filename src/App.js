import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Bienvenidos!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/agregartareas">Agregar tareas</Link> |{" "}
        <Link to="/vertareas">Ver tareas</Link>
      </nav>
    </div>
  );
}

export default App;
