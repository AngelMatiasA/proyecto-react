import react from 'react'; 
import '../Estilos/lateral.css';
import foto from '../img/foto-grupo.jpg'

function Lateral() {
    return(
        <aside className='lateral'>
            <h2> Titulo aside</h2>
            
            <figure>
                <img src={foto} />
                <figcaption> Foto de los integrantes del grupo</figcaption>
            </figure>
        </aside>
    );
    
}
export default Lateral;