const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  
  const directorsArray = array.map( element => element.director)
  
  console.log("EXERCICE 1 ->", directorsArray);
  return directorsArray;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const moviesFromDirectorArray = array.filter( element => element.director === director)

  console.log("EXERCICE 2 ->", moviesFromDirectorArray);
  return moviesFromDirectorArray;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const directorMovies = getMoviesFromDirector(array, director)
  const scoreMovies = directorMovies.filter(element => element.score)
  const moviesAvgPerDirector = array2.reduce( (acc, num) => { return acc + num}) / array.length
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
