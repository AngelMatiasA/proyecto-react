import React from "react";


function Boton ({texto, esBotonDeClic, manejarClic}){
    return (
        <button className= {esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
        //operador ternario
        onClick={manejarClic}>
            {texto}
        </button>
    );

}
export default Boton;