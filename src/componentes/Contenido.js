import React from "react";

import "./Contenido.css";

/* ---------------------------------------------------------------- */
/*    Componente basado en una clase (guarda estado -> statefull)   */
/* ---------------------------------------------------------------- */
class Contenido extends React.Component {
  constructor(props) {
    super(props);
    // seteo estado inicial del backgroundcolor
    this.state = { fondo: "red" };
  }

  state = {
    contenido: this.props.contenido,
    fondo: this.fondo,
  };

  obtenerNumeroAlAzar() {
    return Math.floor(Math.random() * 16);
  }

  cambiarColorDeFondo() {
    const colores = [
      "red",
      "yellow",
      "cyan",
      "orange",
      "green",
      "brown",
      "fuchsia",
      "crimson",
      "beige",
      "grey",
      "purple",
      "teal",
      "olive",
      "aqua",
      "indigo",
      "yellowgreen",
    ];

    this.setState((prevstate) => ({
      fondo: `${colores[this.obtenerNumeroAlAzar()]}`,
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
