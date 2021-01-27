import "./App.css";
import Contenido from "./componentes/Contenido";
import Encabezado from "./componentes/Encabezado";

function App() {
  return (
    <div className="App">
      <div>
        <Encabezado titulo="Título principal" fondo="blue" color="pink" />
      </div>

      <hr />

      <div>
        <Contenido contenido="Este es un parrafo" />
      </div>

    </div>
  );
}

export default App;
