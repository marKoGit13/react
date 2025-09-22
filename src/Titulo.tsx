
const Titulo = (props: TituloProps) => {

    return <h1 style={ 
        { 
        textAlign : "center", 
        backgroundColor: props.color != undefined ? props.color :"" 
        } 
        }>
            
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

