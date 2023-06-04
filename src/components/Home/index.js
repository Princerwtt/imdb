import React, { useEffect, useState } from "react";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'; //importing third party component

import { Link } from "react-router-dom";
import Cards from "../Cards";

const Home = () => {
  // State variable
  const [popularMovies, setPopularMovies] = useState([]);

  // Fetch popular movies data from API when component mounts
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=ebab107d0e771faee711646843039664&language=en-US")
      .then(res => res.json()) // Convert response to JSON
      .then(data => setPopularMovies(data.results)) // Set the popular movies state with the fetched data
      .catch(error => console.error('Error fetching popular movies:', error)); // Log any errors that occur during the fetch
  }, []);

  return (
    <div className="poster">
      <Carousel //using third party component
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {/* Map over the popularMovies array and create a Link for each movie */}
        {popularMovies.map(movie => (
          <Link
            key={movie.id} // Set the unique key for each movie
            style={{ textDecoration: "none", color: "white" }}
            to={`/movie/${movie.id}`} // Link to the movie details page
          >
            <div className="posterImage">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt="carousel"
              />
            </div>
            <div className="posterImage__overlay">
              <div className="posterImage__title">{movie.original_title}</div>
              <div className="posterImage__runtime">
                {movie.release_date}
                <span className="posterImage__rating">
                  {movie.vote_average}
                  <i className="fas fa-star" />{" "}
                </span>
              </div>
              <div className="posterImage__description">{movie.overview}</div>
            </div>
          </Link>
        ))}
      </Carousel>
      <Cards /> {/* Render the Cards component */}
    </div>
  );
};

export default Home;
