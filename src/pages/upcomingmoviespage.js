import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {getUpcomingMovies} from"../api/tmdb-api";
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const UpcomingMoviePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });

  }, []);

  
    return (
        <PageTemplate
          title='Upcoming Movies'
          movies={movies}
          action={(movie) => {
            return <AddToFavoritesButton movie={movie} /> 
          }}
        />
    );
  };
export default UpcomingMoviePage;