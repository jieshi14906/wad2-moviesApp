import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchlistButton from '../components/buttons/addToWatchlist'

const UpcomingMoviePage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {
    return !("watchlist" in m);
  });

  
    return (
        <PageTemplate
          title='Upcoming Movies'
          movies={movies}
          action={(movie) => {
            return <AddToWatchlistButton movie={movie} /> 
          }}
        />
    );
  };
export default UpcomingMoviePage;