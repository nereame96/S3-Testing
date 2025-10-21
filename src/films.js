const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  
  const directorsArray = array.map( movie => movie.director)
  
  console.log("EXERCICE 1 ->", directorsArray);
  return directorsArray;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const moviesFromDirectorArray = array.filter( movie => movie.director === director)

  console.log("EXERCICE 2 ->", moviesFromDirectorArray);
  return moviesFromDirectorArray;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const directorMovies = getMoviesFromDirector(array, director)
  const scoreMovies = directorMovies.filter(movie => movie.score) //Filtra por aquellas pelis que SI tienen score, para que no de errores

  if (scoreMovies.length === 0) return 0;

  const sumScores = scoreMovies.reduce((acc, movie) =>  acc + movie.score, 0)

  const averageScores = sumScores / scoreMovies.length

  const result = parseFloat(averageScores.toFixed(2))

  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  const titles = array.map( movie => movie.title)

  const titlesSorted = titles.toSorted()


  const result = titlesSorted.slice(0, 20)
    
  
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  const orderMovie = array.toSorted((a, b) => {
    
    if(a.year !== b.year) return a.year - b.year
    return a.title.localeCompare(b.title) }
  )

  console.log("EXERCICE 5 ->", orderMovie);
  return orderMovie;

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
