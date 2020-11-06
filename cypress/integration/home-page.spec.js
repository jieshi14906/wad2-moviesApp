let movies;    // List of movies from TMDB

// Utility functions
const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

describe("Home Page ", () => {
  before(() => {
    // Get movies from TMDB and store in movies variable.
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")    // Take the body of HTTP response from TMDB
      .then((response) => {
        movies = response.results
      })
  })
    beforeEach(() => {
      cy.visit("/");
    });
  
    describe("Base test", () => {
      it("displays page header", () => {
        cy.get("h2").contains("Discover Movies");
        cy.get(".badge").contains(20);
      });
    })
    describe("Filtering", () => {
        describe("By movie title" ,() => {
          it("should display movies with 'p ' in the title", () => {
            const searchString = 'p'
            const matchingMovies = filterByTitle(movies, searchString );
            cy.get("input").clear().type(searchString) ;
            cy.get(".card").should("have.length", matchingMovies.length);
            cy.get(".card").each(($card, index) => {
              cy.wrap($card)
              .find(".card-title")
              .should("have.text", matchingMovies[index].title);
            });
          })
          it("should display movies with 'o' in the title", () => {
            const searchString = "o";
            const matchingMovies = filterByTitle(movies, searchString);
            cy.get("input").clear().type(searchString);
            cy.get(".card").should("have.length", matchingMovies.length);
            cy.get(".card").each(($card, index) => {
              cy.wrap($card)
              .find(".card-title")
              .should("have.text", matchingMovies[index].title);
            })
          })
          it("should display movies with 'xyz' in the title", () => {
            const searchString = "xyz";
            const matchingMovies = filterByTitle(movies, searchString);
            cy.get("input").clear().type(searchString);
            cy.get(".card").should("have.length", 0);
          })
        })
        describe("By movie genre" ,() => {
            it("should display movies with the specified genre only", () => {
                const selectedGenreId = 35;
                const selectedGenreText = "Comedy";
                const matchingMovies = filterByGenre(movies, selectedGenreId);
                cy.get("select").select(selectedGenreText); 
                cy.get(".card").should("have.length", matchingMovies.length);
                cy.get(".card").each(($card, index) => {
                  cy.wrap($card)
                    .find(".card-title")
                    .should("have.text", matchingMovies[index].title);
                });      
              });
          });
        
        });// More later
        })
