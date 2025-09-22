const FormularioLogin = () => {
    return <form>
        <div>
            <label className="form-label">Usuario:</label>
            <input className="form-control" type='text' />
        </div>
        <div>
            <label className="form-label">Password:</label>
            <input className="form-control" type='password' />
        </div>
        <button className="btn btn-success w-100 mt-3" 
            type='button'>
                Ingresar
        </button>
    </form>
}

export default FormularioLogin