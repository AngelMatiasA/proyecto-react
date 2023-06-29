import React from 'react'
import Boton from './Boton';
import Contador from './Contador';

import { useState } from 'react';
import { Button } from 'react-bootstrap';



function Card(props){
    const [numClics, setNumClics] = useState(0); //hooks

    const manejarClic = () => {
    setNumClics(numClics +1);

    console.log('Clic');
  }//pasar estas funciones como props

  const reiniciarContador = () => {
    setNumClics (0);
    console.log('Reiniciar');
  }

    return (
    <div className='card text-center'>
        <img src= {props.imagen} alt=''/>

        <div className='card-body'>
            <h4 className='card-title'>{props.titulo}</h4>
            <a href='#!' className='btn btn-outline-secundary rounded-0'>
            <Button variant="warning">Comprar en el boton Click</Button>
            <div className='contenedor-principal'>

        <Contador numClics ={numClics}/>
        <Boton
        texto = 'Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}/> 

        <Boton 
        texto= 'Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>


      </div>
            </a>


        </div>
    </div>
    )
}
export default Card;