import React from "react";
import MovieCredits from "../components/movieCredits";
import useMovie from "../hooks/useMovie";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const movieCredits = props => {
  const { id } = props.match.params;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [movie] = useMovie(id)  // NEW
  
  return (
    <>
    <div className="row">
        <div className="col-2">
          <button onClick={() => props.history.goBack()}>
            <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="2x" />
            <span>{" Back"}</span>
          </button>
        </div>
      </div>
    {movie ? (
      <>
        <MovieCredits movie={movie} /> 
      </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default movieCredits;