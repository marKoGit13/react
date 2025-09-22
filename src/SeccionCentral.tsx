import FormularioLogin from "./FormularioLogin"
import Titulo from "./Titulo"

import "./SeccionCentral.css"

const SeccionCentral = (props : SeccionCentralProps) => {
    return <div>
        { /* este es un comentario */ }
        <Titulo texto={props.texto} color={"green"}/>
        <div className="centrar">
            <img className="logo" 
                src='https://upload.wikimedia.org/wikipedia/commons/a/a0/Universidad_de_Lima_logo.png' />
        </div>
        <FormularioLogin onLogin={ props.onLogin } />
    </div>
}

interface SeccionCentralProps{
    texto : string
    onLogin : (usernma : string, password : string) => void
}
export default SeccionCentral