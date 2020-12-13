let movies; 

const filterByTitle = (movieList, string) =>
    movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
    movieList.filter((m) => m.genre_ids.includes(genreId));

describe("Top Rated Page ", () => {
    before(() => {
        cy.request(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${Cypress.env(
                "TMDB_KEY"
              )}&language=en-US&page=1`
        )
            .its("body")    // Take the body of HTTP response from TMDB
            .then((response) => {
                movies = response.results
            })
    })
    beforeEach(() => {
        cy.visit("/");
        cy.get("nav").find("li").eq(4).find("a").click();
    });

    describe("Base test", () => {
        it("displays page header", () => {
            cy.get("h2").contains("Top Rated Movies");
            cy.get(".badge").contains(20);
        });
    })
    describe("Filtering", () => {
        describe("By movie title", () => {
            it("should display movies with 'p ' in the title", () => {
                const searchString = 'p'
                const matchingMovies = filterByTitle(movies, searchString);
                cy.get("input").clear().type(searchString);
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
        describe("By movie genre", () => {
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
            it("should display movies with genre and text", () => {
                const selectedGenreId = 35;
                const searchString = "o";
                const selectedGenreText = "Comedy";
                const matchedMovies = filterByTitle(movies, searchString);
                const matchingMovies = filterByGenre(matchedMovies, selectedGenreId);
                cy.get("input").clear().type(searchString);
                cy.get("select").select(selectedGenreText);
                cy.get(".card").should("have.length", matchingMovies.length);
                cy.get(".card").each(($card, index) => {
                    cy.wrap($card)
                        .find(".card-title")
                        .should("have.text", matchingMovies[index].title);
                });
            });
        });

    });
})
