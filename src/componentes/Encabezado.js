import './Encabezado.css'

/* ---------------------------------------------------------------- */
/* Componente basado en una función (no guarda estado -> stateless) */
/* ---------------------------------------------------------------- */

function Encabezado(props) {
    
    let { titulo, fondo, color } = props 

    return (
        <div className="Encabezado">
            <div className="jumbotron" style={{backgroundColor: fondo}} /*style= {{Color: color}}*/>
                <h1>{titulo}</h1>              
            </div>
        </div>
    )
}

export default Encabezado
