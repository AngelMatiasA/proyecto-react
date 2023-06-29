
import Lateral from './Lateral';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import '../Estilos/Inicio.css';

const Logueo= () => {
 

  return (
    <>

<main className='Contenido-principal'>
    
      
      <RegistrationForm/>
      <LoginForm />
      
      </main>
      <Lateral/>
      </>
  );
};

export default Logueo;