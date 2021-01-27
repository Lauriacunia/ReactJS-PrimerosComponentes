import './App.css';
import Contenido from './componentes/Contenido';
import Encabezado from './componentes/Encabezado';


function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <div className="jumbotron">
          <Encabezado titulo="Título principal" fondo="blue"  /*color="red"*//></div>        

          <hr/>
            <Contenido contenido = "Este es un parrafo" fondo="red" colores= {"red", "amarillo", "cyan", "naranja"}/>
        </div>
      </div>
  );
}

export default App;
