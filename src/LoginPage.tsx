import SeccionCentral from "./SeccionCentral"

const login = (username:string, password:string) => {
    if(username == "PW" && password == "marko02"){
        //login correcto
        console.log("LOGIN EXITOSO")
    }else{
        //login incorrecto
        console.log("LOGIN ERROR")
    }
}

const LoginPage = () => {
    return <div>
        <div className="row">
            <div className="col">
                &nbsp;
            </div>
            <div className="col">
                <SeccionCentral texto={"SuperLogin"}
                    onLogin = {login} />
            </div>
            <div className="col">
                &nbsp;
            </div>
        </div>
    </div>
}

export default LoginPage