import './Encabezado.css'

/* ---------------------------------------------------------------- */
/* Componente basado en una función (no guarda estado -> stateless) */
/* ---------------------------------------------------------------- */

function Encabezado(props) {
    
    let { titulo, fondo, color } = props 

    return (
        <div className="Encabezado">
            <div className="jumbotron" style={{backgroundColor: fondo }}>
                <h1 style= {{color: color}}>{titulo}</h1>              
            </div>
        </div>
    )
}

export default Encabezado
