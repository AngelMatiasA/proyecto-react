import React from 'react';

import Peli from './Peli';
import Lateral from './Lateral';

const PeliImp = () => {
  const apiURL = 'https://api.themoviedb.org/3/movie/popular?api_key=9482513da627e6af967435ae9d6c63f1';

  return (
    <>
   
      
      <Peli apiURL={apiURL} />
      
     
    
    </>
  );
};

export default PeliImp;
