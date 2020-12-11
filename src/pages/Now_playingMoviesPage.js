import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavouriteButton from "../components/buttons/addToFavorites";

const Now_playingMoviePage = () => {
    const context = useContext(MoviesContext);
  const movies = context.Now_playing.filter((m) => {  // New
    return !("favourite" in m);
  });


  

  return (
    <PageTemplate
      title='Now Playing Movies'
      movies={movies}
      
      action={movie => <AddToFavouriteButton movie={movie} />}
    />
);
};

export default Now_playingMoviePage;