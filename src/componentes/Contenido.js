import React from "react";

import "./Contenido.css";

/* ---------------------------------------------------------------- */
/*    Componente basado en una clase (guarda estado -> statefull)   */
/* ---------------------------------------------------------------- */
class Contenido extends React.Component {
  constructor(props) {
    super(props);
    this.setState((prevstate) => ({ fondo: "red" }));
    // this.colores =  { colores  : ["red", "amarillo", "cyan", "naranja"]};
  }

  state = {
    contenido: this.props.contenido,
    fondo: this.fondo,
  };

  obtenerNumeroAlAzar() {
    return Math.floor(Math.random() * 4);
  }

  cambiarColorDeFondo() {
    const { colores } = ["red", "amarillo", "cyan", "naranja"];

    console.log(this.obtenerNumeroAlAzar());

    //this.fondo = colores[this.obtenerNumeroAlAzar()]
    //this.setState(prevstate => ({fondo : this.fondo}))

    this.setState((prevstate) => ({
      fondo: colores[this.obtenerNumeroAlAzar()],
    }));
  }

  render() {
    let { contenido } = this.props;
    let { fondo } = this.state;

    return (
      <div className="Contenido">
        <div className="jumbotron" style={{ backgroundColor: fondo }}>
          <p> {contenido}</p>
        </div>

        <button
          className="btn btn-success my-1"
          onClick={() => this.cambiarColorDeFondo()}
        >
          Cambiar Fondo: {fondo}
        </button>
      </div>
    );
  }
}

export default Contenido;
