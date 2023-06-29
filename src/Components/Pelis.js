import react from 'react'; 

import '../Estilos/Inicio.css';
// import './Layout';
import '../Estilos/Contenedor-principal.css';
import Layout from './Layout';
import Header from './Header';
import Footer from './Footer';
import Lateral from './Lateral';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Estilos/Peli.css';

const Pelis = () => {
    const [movies, setMovies] = useState([]);
    const apiKey = 'TU_CLAVE_DE_API';
const apiURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
    
    useEffect(() => {
      axios.get(apiURL).then(response => setMovies(response.data.results));
    }, []);
  
    return (
      <div className="movie-gallery-container">
        <h2>Galería de películas</h2>
        <div className="movie-gallery-grid">
          {movies.map(movie => (
            <div key={movie.id} className="movie-gallery-item">
              <h3>{movie.title}</h3>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <p>{movie.overview}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  export default Pelis;