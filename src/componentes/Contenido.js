import React from "react";

import "./Contenido.css";

/* ---------------------------------------------------------------- */
/*    Componente basado en una clase (guarda estado -> statefull)   */
/* ---------------------------------------------------------------- */
class Contenido extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    color: this.props.color
  };

  colores = ["red", "amarillo", "cyan", "naranja"];

  obtenerNumeroAlAzar(min, max) {
    return Math.random() * (max - min) + min;
  }

  cambiarColorDeFondo() {
    this.setState(
     color = colores[this.obtenerNumeroAlAzar]
    );
  }

  render() {
   
    let { color } = this.state;

    return (
      <div className="Contenido">
        <div className="jumbotron" style={{ backgroundColor: {color} }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing, elit tempor
            curabitur elementum eu, mauris praesent ante vivamus rutrum. Commodo
            placerat ante curabitur diam elementum viverra ligula laoreet cras
            urna neque litora fusce, euismod porta imperdiet ullamcorper tellus
            porttitor malesuada nostra integer parturient penatibus aptent id,
            est tempus convallis nullam purus metus felis lacinia dis montes
            quis ultricies. Tempus ac sem at vitae odio venenatis nulla congue
            facilisi, cursus ullamcorper penatibus fringilla neque suscipit
            tellus montes, quis rhoncus erat litora orci turpis consequat purus.
          </p>

          <button
            className="btn btn-success my-1"
            onClick={() => this.cambiarColorDeFondo()}
          >
            Cambiar Color
          </button>
        </div>
      </div>
    );
  }
}

export default Contenido;
