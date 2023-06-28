import react from 'react'; 

import '../Estilos/Inicio.css';
// import './Layout';
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

function Inicio() {
    
    return(
        
       
       <>
        <main className='Contenido-principal'>
            <h2>integrantes</h2>
        <ul className='lista'>
        
        
        <Item
        pertenece={true}
        nombre='Apaza Angel Matias'
        />
        <Item
        pertenece={true}
        nombre='Marcelo Diaz'
        />
        <Item
        pertenece={true}
        nombre='Ivana Lozano'
        />
        </ul>
        </main> 
        <Lateral/>
        {/* <Footer/>
         */}
         </>
   
    );
}
export default Inicio;