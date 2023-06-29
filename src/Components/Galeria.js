import react from 'react'; 

import '../Estilos/Inicio.css';
// import './Layout';
import '../Estilos/Contenedor-principal.css';
import'../Estilos/Galeria.css';
import foto from '../img/foto-grupo.jpg'

import Lateral from './Lateral';

function Item({nombre, pertenece}){

    if(pertenece){
        return<li className="Item">{nombre}✔</li>
    }

    return <li className="Item">{nombre}</li>
}

function Galeria() {
    
    return(
        
       
       <>
       <main className='Contenido-principal'>
    <article id="galeria">
      <figure>
        <img src={foto} alt="" />
        <figcaption> asdasd asldaksldas lkasd </figcaption>
      </figure>
      <figure>
        <img src={foto} alt="" />
        <figcaption> asdasd asldaksldas lkasd </figcaption>
      </figure>
      <figure>
        <img src={foto} alt="" />
        <figcaption> asdasd asldaksldas lkasd </figcaption>
      </figure>
      <figure>
        <img src={foto} alt="" />
        <figcaption> asdasd asldaksldas lkasd </figcaption>
      </figure>
      <figure>
        <img src={foto} alt="" />
        <figcaption> asdasd asldaksldas lkasd </figcaption>
      </figure>
      <figure>
        <img src={foto} alt="" />
        <figcaption> asdasd asldaksldas lkasd </figcaption>
      </figure>
    </article>
  </main>
        <Lateral/>
       
         </>
   
    );
}
export default Galeria;