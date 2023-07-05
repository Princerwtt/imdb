import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
import Cards from "../Cards";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ebab107d0e771faee711646843039664&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results))
      .catch((error) =>
        console.error("Error fetching popular movies:", error)
      );
  }, []);

  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {popularMovies.map((movie) => (
          <Link
            key={movie.id}
            style={{ textDecoration: "none", color: "white" }}
            to={`/movie/${movie.id}`}
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
      <Cards />
    </div>
  );
};

export default Home;
