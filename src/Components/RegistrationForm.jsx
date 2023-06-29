import React, { useState } from 'react';
import  '../Estilos/RegistrationForm.css';
import '../Estilos/Inicio.css';
import Lateral from './Lateral';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = () => {
    // Verificar si el usuario ya está registrado en localStorage
    if (localStorage.getItem(username)) {
      alert('El usuario ya está registrado');
      return;
    }

    // Guardar los datos del usuario en localStorage
    localStorage.setItem(username, password);

    // Marcar como registrado
    setRegistered(true);

    // Limpiar los campos del formulario
    setUsername('');
    setPassword('');
  };

  return (
    <>
    
    
    <div className='FormContenedor'>
      <form className='Form'>


      {registered ? (
        <h2>Registro exitoso</h2>
      ) : (
        <div>
          <h2>Registro</h2>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
          />
          <button onClick={handleRegister}>Registrarse</button>
        </div>
      )}
      </form>
    </div>
    
    </>

  );
};




export default RegistrationForm;