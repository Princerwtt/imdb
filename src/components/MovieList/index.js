import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./style.css"
import { Helmet } from 'react-helmet';


const MovieList = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ebab107d0e771faee711646843039664&language=en-US%60`) //fetching api 
      .then((res) => res.json(), {

      })
      .then((data) => {
        setMovie(data); //store data in setMovies
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]); //passing id to avoid infinite fetching loop

  return (
    <div className='movie-list-item'>
      <div className='movie-intro'>
        <img
          src={`https://image.tmdb.org/t/p/original${movie ? movie.backdrop_path : ''}`}
          alt=''
        />
      </div>
      <div className='movie-detail'>
        <img
          src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ''}`}
          alt=''
        />
      </div>
      <div className='movie-name'>{movie ? movie.original_title : ''}</div>
      <div className='vote'>Vote: {movie ? movie.vote_average : ''}</div>
      <div className='tag'>{movie ? movie.tagline : ''}</div>
      <div className='releaseDate'>Release Date: {movie ? movie.release_date : ''}</div>
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7571479680446637"
          crossorigin="anonymous"></script>
      </Helmet>
    </div>
  );
};

export default MovieList;
