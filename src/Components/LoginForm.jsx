import React, { useState } from 'react';
import  '../Estilos/RegistrationForm.css';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Verificar si las credenciales coinciden con los datos almacenados en localStorage
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
      // Inicio de sesión exitoso
      setLoggedIn(true);

      // Limpiar los campos del formulario
      setUsername('');
      setPassword('');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className='FormContenedor'>
      <form className='Form'>
      {loggedIn ? (
        <h2>Bienvenido, {username}!</h2>
      ) : (
        <div > 
          <h2>Iniciar sesión</h2>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
          />
          <button onClick={handleLogin}>Iniciar sesión</button>
        </div>

      )}
       </form>
    </div>
  );
};
 


export default LoginForm;