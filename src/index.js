import AddMovieReviewPage from './pages/addMovieReviewPage'
import SiteHeader from './components/siteHeader'
import MovieReviewPage from "./pages/movieReviewPage";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom" 
import FavoriteMoviesPage from './pages/favoritesMoviesPage'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import UpcomingMoviesPage from './pages/upcomingMoviesPage'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import Now_playingMoviesPage from './pages/Now_playingMoviesPage'
import Top_ratedMoviesPage from './pages/Top_ratedMoviesPage'
import SimilarMoviesPage from './pages/similarMoviesPage'
import MovieCreditsPage from "./pages/movieCreditsPage";
const App = () => {
    return (
        <BrowserRouter>
          <div className="jumbotron">
            <SiteHeader />      {/* New Header  */}
            <div className="container-fluid">
            <MoviesContextProvider>
            <GenresContextProvider>
          <Switch>
          <Route exact path="/movies/:id/movieCredits" component={MovieCreditsPage} /> 
          <Route path="/:id/similar"component={SimilarMoviesPage} />
          <Route path="/movies/Top_rated" component={Top_ratedMoviesPage} />
          <Route path="/movies/Now_playing" component={Now_playingMoviesPage} />
          <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route path="/movies/upcoming" component={UpcomingMoviesPage} />
            <Route path="/reviews/:id" component={MovieReviewPage} />
            <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <Route path="/movies/:id" component={MoviePage} />
            <Route path="/" component={HomePage} />
            

            <Redirect from="*" to="/" />
          </Switch>
          </GenresContextProvider>
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById("root"));