import React from 'react';
import Faqs from './Faqs';
import Lateral from './Lateral';

const FaqImp = () => {
  const questions = [
    {
      question: '¿Cuál es el horario de atencion?',
      answer: 'De lunes a viernes de 8 a 21.'
    },
    {
      question: '¿Que dias hay promocion?',
      answer: 'Todos los martes 30%.'
    },
    {
      question: '¿Cuando son las fechas de estrenos?',
      answer: 'Todos los jueves a las 20 hrs.'
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