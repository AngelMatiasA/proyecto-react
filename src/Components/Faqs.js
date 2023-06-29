import react from 'react'; 

import '../Estilos/Inicio.css';
// import './Layout';
import '../Estilos/Contenedor-principal.css';
import Layout from './Layout';
import Header from './Header';
import Footer from './Footer';
import Lateral from './Lateral';
import React, { useState } from 'react';
import '../Estilos/FAQ.css';

function Item({nombre, pertenece}){

    if(pertenece){
        return<li className="Item">{nombre}✔</li>
    }

    return <li className="Item">{nombre}</li>
}

const Faqs = ({ questions }) => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);
  
    return (
        <>
        <main className='Contenido-principal'>

      <div className="faq-container">
        <h2>Preguntas frecuentes</h2>
        {questions.map((question, index) => (
          <div key={index}>
            <h3
              className="faq-question"
              onClick={() => setSelectedQuestion(index)}
            >
              {question.question}
            </h3>
            {selectedQuestion === index && (
              <p className="faq-answer">{question.answer}</p>
            )}
          </div>
        ))}
      </div>
      </main>
      
      </>
    );
  };
  
export default Faqs;