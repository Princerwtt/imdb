import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import MovieDescription from './MovieDescription';
import './styles.css';

const Cards = () => {
  // State variables
  const [movies, setMovies] = useState([]); // Stores the movie data
  const [selectedMovie, setSelectedMovie] = useState(null); // Stores the currently selected movie

  // Fetch movies data from API when component mounts
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=ebab107d0e771faee711646843039664&language=en-US'
    )
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => setMovies(data.results)) // Set the movies state with the fetched data
      .catch((error) => console.log(error)); // Log any errors that occur during the fetch
  }, []);
  console.log(selectedMovie)


  // Handle click event when a movie is selected
  const handleClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="movie-list">
        {/* Map over the movies array and create a Link for each movie */}
        {movies.map((movie) => (
          <Link
            key={movie.id} // Set the unique key for each movie
            to={`/movie/${movie.id}`} // Link to the movie details page
            onClick={() => handleClick(movie)} // Set the selected movie when clicked
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
