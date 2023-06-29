import '../hojas-de-estilos/Mensajes.css';
import {useState, useEffect} from "react";


function Mensajes (){

    const obtenerRegistros = () =>{
        var datos= localStorage.getItem('registros');
        if (datos){
            return JSON.parse(datos);
        }else{
            return [];

        }
    };


    const [registros, setRegistros] = useState (obtenerRegistros());

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [mensaje, setMensaje] = useState('');


    const botonGuardar = (e) => {
        e.preventDefault();

        var miObjeto = {nombre, correo, mensaje};
        setRegistros([...registros, miObjeto]);
        limpiarFormulario();
    }
     const limpiarFormulario = () => {
        setNombre('');
        setCorreo('');
        setMensaje('');
        document.getElementById('miFormulario').reset();

     }
     useEffect( () => {
        localStorage.setItem('registros', JSON.stringify(registros));
     },[registros]);


    return (
        <center>
        <div className="container">
            <form id="miFormulario"onSubmit={botonGuardar}>
                <h1> Dejanos tus mensajes y comentarios</h1>
                <input className="form-control form-control-lg" type="text" placeholder="Ingrese su nombre" onChange={(e) => setNombre(e.target.value)}/>
                <input className="form-control form-control-lg" type="text" placeholder="Ingrese su correo"onChange={(e) => setCorreo(e.target.value)}></input>
                <textarea className="form-control form-control-lg" type="text" placeholder="Ingrese su opinión"onChange={(e) => setMensaje(e.target.value)}></textarea>

                <button className="btn btn-primary btn-lg">
                    Enviar Mensaje
                </button>
            </form>

        </div>
        </center>
    )


}
export default Mensajes;