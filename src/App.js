 
import './App.css';
import '../src/Components/Layout';
import RouterApp from './RouterApp';
import Header from './Components/Header';
import Layout from './Components/Layout';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { Link } from 'react-router-dom';
import Inicio from './Components/Inicio'; 
import React, { useEffect, useState } from 'react';
import './Peliculas.css'



function App() {
  const pathname = window.location.pathname;
  let clasName = "App";
  if(pathname.endsWith('/Pelis')){ 
     clasName = "Peliculas";
  }else{
    clasName = "App";
  }
  const [username, setUsername] = useState('');
  // const usuario = localStorage.getItem('')
  useEffect(() => {
    // Obtener el nombre de usuario desde localStorage
    const storedUsername = localStorage.getItem('registros');

    // Verificar si el nombre de usuario existe en localStorage
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  
  return (
    <div className='App'>
      <Header titulo={'BIENVENIDO'}/>
      <BrowserRouter>
      {/* esse browser router era el q estaba en router app
      lo pongo aca sino no andan los link del layout q se carga siempre*/}
      <Layout/>
     
      <RouterApp/> 
      </BrowserRouter>
     
       
       <Footer/>
     
      
      
      
     
     
    </div>
  );
}

export default App;
