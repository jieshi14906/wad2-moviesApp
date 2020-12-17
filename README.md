# Assignment 1 - ReactJS app.

Name: Jie Shi

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Feature 1 - show the nowplaying movies.
 + Feature 2 - show the top-rated movies.
 + Feature 3 = show the similar movies according to the movie you choose.
 + Feature 4 = show the credits of the movies.
 + Feature 5 = can rate your favourite movies.

## Setup requirements (If required).

+ antd

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/now_playing - get the now_playing movies page
+ https://api.themoviedb.org/3/movie/top_rated - get the top_rated movies page
+ https://api.themoviedb.org/3/movie/${id}/similar - get the similar movies on a specific movie
+ https://api.themoviedb.org/3/movie/${id}/credits - get the characters' information on a specific movie

## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........
![][component]
>Shows the new added components such as movieCredits.

![][page]
>Shows the new added pages such as similarMoviesPage.

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][review]
>Shows the full text for a movie review. 

![][credit]
>Shows the actors' information for a movie. Clicking the 'Show Credit' button will display some basic information of the characters.

![][similar]
>Shows some similar movies. Clicking the 'Show similar movies' button will display some similar movies of the specific movie.

![][score]
>Shows the score of the movies which added to the Favorites. You can also rate the movie by clicking the icon.


## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ /movies/:id/movieCredits - displays the actors' information of a movie. 
+ /:id/similar - displays the similar movies of a specific movie.
+ /movies/Top_rated - displays the top rated movies.
+ /movies/Now_playing - displays the now playing movies.

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

![][similarLink]
>Clicking the 'Show similar movies' cause the display of the similar movies page.

![][creditsLink]
>Clicking the 'Show Credits' will display the characters' information of the movie.

## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).
+ antd url:https://ant.design/index-cn
---------------------------------

# Assignment 1 - Agile Software Practice.

Name: Jie Shi

## App Features.

[Document each new feature/page in your Movies Fan app, including: Feature Name; Its objective/purpose; The associated test file; a screenshot of its UI.]
e,g,
 
+ Movie Details page - Shows the details about a movie. The Show reviews button reveals an excerpt for each critic review of the movie.

Tests: cypress/integration/movieDetails.spec.js 

![][movieDetail]

+ Now Playing page: Displays all the now playing movies.

Tests: cypress/integration/nowPlaying.spec.js 

![][nowPlaying]

+ Top Rated page: Displays the top rated movies.

Tests: cypress/integration/topRated-page.spec.js 

![][topRated]



## Testing.

Cypress Dashboard URL:https://dashboard.cypress.io/projects/cdhnot/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D

### Advanced Testing (If required).

[State briefly each instances of boundary and/or error/exceptional test case in your project]
e.g.

+ cypress/integration/movieReviewPage.spec.js - test the movieReview page when the Review id is invalid. 
+ cypress/integration/movieDetails.spec.js - test when a movie has no reviews.
+ etc

## Independent learning (If relevant).

[ Itemize each technologies/techniques used in your project that were not covered in the lectures/labs. Provide the necessary evidence of their use (e,g, project file names, screenshots, service URL, etc)

List reference material links (articles/blogs).
https://dzone.com/articles/why-should-you-switch-to-cypress-for-modern-web-te
---------------------------------


[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png
[page]: ./public/page.png
[component]: ./public/component.png
[credit]: ./public/credit.png
[similar]: ./public/similar.png
[score]: ./public/score.png
[topRated]: ./public/topRated.png
[similarLink]: ./public/similarLink.png
[creditsLink]: ./public/creditsLink.png
[nowPlaying]: ./public/nowPlaying.png
