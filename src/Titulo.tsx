import { useState } from "react"

const Titulo = (props: TituloProps) => {
    // variable de estado
    const [ tamanoFuente, setTamanoFuente ] = useState<number>(3)

    const h1OnClick = () => {
        console.log("Hizo click")

        setTamanoFuente(tamanoFuente + 0.5)
    }

    return <h1 style={ 
            { 
            textAlign : "center", 
            backgroundColor: props.color != undefined ? props.color :"", 
            fontSize : `${tamanoFuente}em`
            }}

            onClick={ h1OnClick } 
        >

            {
                props.texto
            }
    </h1>
    

    /*if (props.color != undefined){
        //me estan pasando un color
        return <h1 style={ { textAlign : "center", backgroundColor: props.color } 
        }>
        {
            props.texto
        }
    </h1>
    }else{
        return <h1 style={ { textAlign : "center" } }>
        {
            props.texto
        }
    </h1>
    }*/
    
}

interface TituloProps{
    texto : string
    color? : string
}


export default Titulo

