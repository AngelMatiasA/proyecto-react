import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Components/Layout';
import Inicio from "./Components/Inicio";
import AcercaDe from "./Components/AcercaDe";
import './Estilos/Inicio.css';

const RouterApp = () => {
    const Home = () => <h1>hoome</h1>;
    const Mascotas = () => <h1>mascotas</h1>;
   
  
    return ( 
      <>
        {/* <BrowserRouter> */}
          <Routes>
            <Route path="/" element={<Layout />}/>
  
            <Route path="home" element={<Inicio/>}></Route>
            <Route path="pets" element={Home }></Route>
            <Route path="AcercaDe" element={<AcercaDe/> }></Route>
            

            </Routes>
        {/* </BrowserRouter> */}
      </>
    );
  };
  export default RouterApp;