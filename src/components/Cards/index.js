import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import MovieDescription from './MovieDescription';
import './styles.css';

const Cards = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=ebab107d0e771faee711646843039664&language=en-US'
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            onClick={() => handleClick(movie)}
            className="cards"
          >
            <div className="movie-overlay">
              <h2 className="info-card-title">{movie.title}</h2>
              {/* <p className="info-card-realeaseDate">{movie.release_date}</p> */}
              <div className="rating">Rating: {movie.vote_average}</div>
              {/* <p className="movie-description">{movie.overview}</p> */}
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
