import React from 'react';
import Faqs from './Faqs';
import Lateral from './Lateral';

const FaqImp = () => {
  const questions = [
    {
      question: '¿Cuál es la capital de Francia?',
      answer: 'La capital de Francia es París.'
    },
    {
      question: '¿Cuál es la moneda de Japón?',
      answer: 'La moneda de Japón es el yen.'
    },
    {
      question: '¿Cuál es el idioma oficial de Brasil?',
      answer: 'El idioma oficial de Brasil es el portugués.'
    }
  ];

  return (
    <>
    
      <Faqs questions={questions} /> 
      <Lateral/>
      </>
  );
};

export default FaqImp;