import React from "react";

import "./Contenido.css";

/* ---------------------------------------------------------------- */
/*    Componente basado en una clase (guarda estado -> statefull)   */
/* ---------------------------------------------------------------- */
class Contenido extends React.Component {
  constructor(props) {
    this.setState(prevstate => ({fondo : "yellow"}))
    super(props);
  }

  state = {
    colores : this.props.colores, contenido : this.props.contenido , fondo : this.fondo
  };

 

  obtenerNumeroAlAzar(min, max) {
    return Math.random() * (max - min) + min;
  }

  cambiarColorDeFondo() {

    this.fondo = colores[this.obtenerNumeroAlAzar(0,3)]
    this.setState(prevstate => ({fondo : this.fondo}))
    
  }

  render() {
    let { colores } = this.props
    let { contenido } = this.props
    let { fondo } = this.state;

    return (
      <div className="Contenido">
          <div className="jumbotron" style={{backgroundColor: fondo}}>
              <p> {contenido}</p>
          </div>

          <button className="btn btn-success my-1" onClick={() => this.cambiarColorDeFondo()}>
                  Cambiar Fondo: {fondo}
          </button>

      </div>
  )
}


}

export default Contenido;
