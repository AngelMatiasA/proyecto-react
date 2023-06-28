import { Link } from 'react-router-dom';

import react from 'react'; 
import '../Estilos/Layout.css';

const Layout = () => {

    return (
        <>
        <nav className='contenedor-menu' style={{display:"flex", justifyContent:"space-around"}}>
            <ul>
               <li>
                <a>
                <Link to="/home">Home</Link>
                </a>
                </li>

                <li> 
                <a>
                <Link to="/pets">Pets</Link>
                </a>
                 </li>

                 <li> 
                <a>
                <Link to="/AcercaDe">Acerca de Nosotros</Link>
                </a>
                 </li>
                
                
               
            
            </ul>
            
            </nav>
            </>
    );
}; 
export default Layout;