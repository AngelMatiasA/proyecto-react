import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Components/Layout';
import Inicio from "./Components/Inicio";
import AcercaDe from "./Components/AcercaDe";

import './Estilos/Inicio.css';
import FaqImp from "./Components/FaqImp";

import PeliImp from "./Components/PeliImp";
import Mensajes from "./Components/Mensajes";
import Articulos from "./Components/Articulos";
import Logueo from "./Components/Logueo";

const RouterApp = () => {
   
   
  
    return ( 
      <>
        {/* <BrowserRouter> */}
          <Routes>
            <Route path="/" element={<Layout />}/>
  
            <Route path="home" element={<Inicio/>}></Route>
            <Route path="AcercaDe" element={<AcercaDe/> }></Route>
            <Route path="Faqs" element={<FaqImp/> }></Route>
            <Route path="Pelis" element={<PeliImp/> }></Route>
            <Route path="Mensajes" element={<Mensajes/> }></Route>
            <Route path="Articulos" element={<Articulos/> }></Route>
            <Route path="Logueo" element={<Logueo/> }></Route>
            

            </Routes>
        {/* </BrowserRouter> */}
      </>
    );
  };
  export default RouterApp;