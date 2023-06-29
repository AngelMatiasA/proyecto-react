 
import './App.css';
import '../src/Components/Layout';
import RouterApp from './RouterApp';
import Header from './Components/Header';
import Layout from './Components/Layout';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { Link } from 'react-router-dom';
import Inicio from './Components/Inicio'; 
import './Peliculas.css'



function App() {
  const pathname = window.location.pathname;
  let clasName = "App";
  if(pathname.endsWith('/Pelis')){ 
     clasName = "Peliculas";
  }else{
    clasName = "App";
  }
  
  return (
    <div className={clasName}>
      <Header/>
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
