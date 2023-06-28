import react from 'react'; 

import '../Estilos/Inicio.css';
import './Layout';
import '../Estilos/Contenedor-principal.css';
import Layout from './Layout';
import Header from './Header';
import Footer from './Footer';
import Lateral from './Lateral';

function Item({nombre, pertenece}){

    if(pertenece){
        return<li className="Item">{nombre}✔</li>
    }

    return <li className="Item">{nombre}</li>
}

function AcercaDe() {
    
    return(
        
         <>        <main className='Contenido-principal'>
            <h2>A cerca de nosotros</h2>
            <article>
                <h3>Integrantes</h3>
                <p> Somos unos estudiantes que estudian como pueden cuando puden</p>
                 <ul className='lista'>
        
        
        <Item
        pertenece={true}
        nombre=' Angel Matias Apaza'
        />
        <Item
        pertenece={true}
        nombre='Marcelo Sebastian, 100% Bostero hasta la muerte, Diaz'
        />
        <Item
        pertenece={true}
        nombre='Ivana Cecilia Lozano'
        />
        <Item
        pertenece={true}
        nombre='Saleme Santiago'
        />
        </ul>
            </article>
       
        </main> 
        <Lateral/>
        {/* <Footer/> */}
        </>

        
     
    );
}
export default AcercaDe;