import { useState } from "react"

const FormularioLogin = () => {

    const [ userName, setUserName ] = useState<string>("")
    const [ password, setPassword ] = useState<string>("")

    const handleUserNameoOnChange = ( e : React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.currentTarget.value)
    }

    const handleUserPasswordOnChange = (e : React.ChangeEvent<HTMLInputElement> ) => {
        setPassword(e.currentTarget.value)
    }

    return <form>
        <div>
            <label className="form-label">Usuario:</label>
            <input className="form-control" 
                type='text' 
                value={ userName }
                onChange={handleUserNameoOnChange}/>
        </div>

        <div>
            <label className="form-label">Password:</label>
            <input className="form-control"
                 type='password' 
                 value={ password }
                 onChange={handleUserPasswordOnChange}/>
        </div>

        <button className="btn btn-success w-100 mt-3" 
            type='button'>
                Ingresar
        </button>
    </form>
}

export default FormularioLogin