import react from 'react'; 
import Logo from '../img/logo-react-js.png';
import '../Estilos/Header.css';

function Header( {titulo} ) {
    return(
        <header className='cabezero'>
            <figure className='contenedor-logo'>
                <img className='logo' 
                src={Logo}/>
            </figure>
            <h1> {titulo} </h1>
        </header>

    );
    
} 
export default Header;