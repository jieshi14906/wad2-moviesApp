import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavouriteButton from "../components/buttons/addToFavorites";

const Top_ratedMoviePage = () => {
    const context = useContext(MoviesContext);
  const movies = context.Top_rated.filter((m) => {  // New
    return !("favourite" in m);
  });


  

  return (
    <PageTemplate
      title='Top Rated Movies'
      movies={movies}
      
      action={movie => <AddToFavouriteButton movie={movie} />}
    />
);
};

export default Top_ratedMoviePage;