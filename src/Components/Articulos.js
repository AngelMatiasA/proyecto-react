import React from 'react'
import Card from './Card'
import clicles from '../img/chicles.jpg'
import chocolate from '../img/chocolate.jpg'
import pochocloChico from '../img/cine.png'
import combo from '../img/combo.jpg'
import gaseosa from '../img/gaseosas.jpg'
import pochoclos from '../img/pochoclos.jpg'
import Lateral from './Lateral'
import '../Estilos/Inicio.css';

const articulos = [
    {
        id: 1,
        titulo: 'Chicles Beldent',
        imagen:clicles,
    },
    {
        id: 2,
        titulo: 'Barra de chocolate con almendras',
        imagen: chocolate,
    },
    {
        id: 3,
        titulo: 'Pochoclo porción individual',
        imagen: pochocloChico,
    },
    {
        id: 4,
        titulo: 'Combo premium para compartir',
        imagen: combo,
    },
    {
        id: 5,
        titulo: 'Linea de gaseosas',
        imagen: gaseosa,
    },
    {
        id: 6,
        titulo: 'Pochoclos para compartir',
        imagen: pochoclos,
    },

]

function Articulos(){

    return(
        <>
        <main className='Contenido-principal'>

        <div className='contArticulos'>
            <div className='divArticulos'>
                {
                    articulos.map(card => (
                        <div  key= {card.id}>
                            <Card
                            titulo = {card.titulo} imagen= {card.imagen}/>

                            </div>



                            ))
                }


  </div>
    </div>
    </main>
    <Lateral/> 
    </>
 
    )
}

export default Articulos;