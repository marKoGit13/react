import FormularioLogin from "./FormularioLogin"
import Titulo from "./Titulo"

import "./SeccionCentral.css"

const SeccionCentral = () => {
    return <div>
        { /* este es un comentario */ }
        <Titulo texto={"Login"} color={"green"}/>
        <div className="centrar">
            <img className="logo" 
                src='https://upload.wikimedia.org/wikipedia/commons/a/a0/Universidad_de_Lima_logo.png' />
        </div>
        <FormularioLogin />
    </div>
}

export default SeccionCentral