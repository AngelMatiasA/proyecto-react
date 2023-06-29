import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Components/Layout';
import Inicio from "./Components/Inicio";
import AcercaDe from "./Components/AcercaDe";
import Galeria from "./Components/Galeria";
import './Estilos/Inicio.css';
import FaqImp from "./Components/FaqImp";

const RouterApp = () => {
    const Home = () => <h1>hoome</h1>;
    const Mascotas = () => <h1>mascotas</h1>;
   
  
    return ( 
      <>
        {/* <BrowserRouter> */}
          <Routes>
            <Route path="/" element={<Layout />}/>
  
            <Route path="home" element={<Inicio/>}></Route>
            <Route path="Galeria" element={<Galeria/> }></Route>
            <Route path="AcercaDe" element={<AcercaDe/> }></Route>
            <Route path="Faqs" element={<FaqImp/> }></Route>
            

            </Routes>
        {/* </BrowserRouter> */}
      </>
    );
  };
  export default RouterApp;