import React, { useEffect, useState } from "react";
import { getMovieCredits } from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default ({ movie }) => {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getMovieCredits(movie.id).then(credits => {
      setCast(credits.cast);
    }); 
    // eslint-disable-next-line
  }, []);

  

  return (
    <>
    <table className="table table-hover table-striped">
      <thead>
        <tr>
        <th>photo</th>
          <th>Cast name</th>
          <th>Character</th>
   
         
        </tr>
      </thead>
      <tbody>
      {cast.map(c => {
            return (
              <tr key={c.id}>
                <td><img width="100" height="150"
            src={`https://image.tmdb.org/t/p/w500/${c.profile_path}` }
            alt={c.name}
          /></td>
                <td>{c.name}</td>
                <td>{excerpt(c.character)}</td>
          
          </tr>
         ); 
              })}
      </tbody>
    </table>


    </>
  );
};
