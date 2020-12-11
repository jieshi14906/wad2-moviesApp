import React, { useEffect, useState } from "react";
import PageTemplate from "../components/templateMovieListPage";

import { getSimilarMovies } from "../api/tmdb-api";
//import AddToFavoritesButton from '../componentsttons/addToFavorites'

const SimilarMoviesPage = props => {
  const { id } = props.match.params;


  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    getSimilarMovies(id).then(similarMovies => {
      setSimilarMovies(similarMovies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <PageTemplate 
      title= {`Similar Movies`}
      movies={similarMovies}
      action={(movie) => {
 //       return <AddToFavoritesButton movie={movie} /> 
      }}
    />
);
};

export default SimilarMoviesPage;